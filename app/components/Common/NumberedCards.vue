<template>
  <section :id="sectionId" :class="['relative pt-20 pb-5 lg:py-24 bg-primary text-white overflow-hidden', sectionClass]">
    <div class="container relative px-7 xl:px-16 2xl:px-12">
      <!-- Header -->
      <div 
        class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 lg:gap-32 mb-10 lg:mb-16 text-center lg:text-left px-0" 
        data-aos="fade-up"
      >
        <h2 class="text-[32px] lg:text-5xl font-bold leading-tight" v-html="title"></h2>
        <p v-if="description" class="text-[14px] lg:text-lg text-white/80 max-w-sm lg:max-w-md mx-auto lg:mx-0">
          {{ description }}
        </p>
      </div>

      <!-- Slider / Grid Container -->
      <div class="relative w-full">
        <!-- Desktop Grid -->
        <div :class="['hidden lg:grid gap-6 mb-12', gridColsClass]">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="glass-card p-8 rounded-[24px] flex flex-col justify-between"
            data-aos="fade-up"
            :data-aos-delay="index * 150"
          >
            <div>
              <span class="glass-number text-[80px] font-black leading-none mb-8 lg:mb-10 block select-none">
                {{ item.number || index + 1 }}
              </span>
              <h3 class="text-xl font-bold mb-4 pr-4 leading-snug text-white">
                {{ item.title }}
              </h3>
            </div>
            <p class="text-sm text-white/80 leading-relaxed mt-2">
              {{ item.description }}
            </p>
          </div>
        </div>

        <!-- Mobile Slider -->
        <div
          ref="sliderContainer"
          class="lg:hidden flex overflow-x-auto snap-x snap-mandatory hide-scrollbar mb-8"
          @scroll="handleScroll"
          @touchstart="stopAutoplay"
          @touchend="startAutoplay"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="w-full shrink-0 snap-center px-6 flex flex-col"
          >
            <div class="glass-card px-8 pt-10 pb-10 rounded-[28px] flex flex-col h-[380px]">
              <span class="glass-number text-[88px] font-black leading-none mb-auto block tracking-tighter select-none">
                {{ item.number || index + 1 }}
              </span>
              <div class="mt-auto relative z-10">
                <h3 class="text-[20px] lg:text-[24px] font-bold mb-2 leading-tight pr-2 text-white">
                  {{ item.title }}
                </h3>
                <p class="text-[15px] lg:text-[16px] text-white/80 leading-normal">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination Dots (Mobile Only) -->
        <div v-if="items.length > 1" class="flex justify-center gap-2 lg:hidden mb-10">
          <button
            v-for="(_, index) in items"
            :key="index"
            class="p-2 -m-2"
            @click="scrollToSlide(index); stopAutoplay(); startAutoplay()"
            aria-label="Go to slide"
          >
            <span 
              class="block w-2 h-2 rounded-full transition-colors" 
              :class="activeSlide === index ? 'bg-white' : 'bg-white/30'"
            ></span>
          </button>
        </div>
      </div>

      <!-- Action / CTA Slot or Default CTA -->
      <slot name="action">
        <div v-if="buttonText || buttonLink" class="text-center pt-2 pb-4 lg:py-5" data-aos="zoom-in" data-aos-offset="50">
          <Button 
            v-if="buttonLink" 
            :to="buttonLink" 
            class="hidden lg:inline-flex"
          >
            {{ buttonText }}
          </Button>
          <button 
            v-else-if="buttonText"
            type="button"
            @click="openModal"
            class="hidden lg:inline-flex bg-lime-400 text-primary font-bold px-8 py-3.5 rounded-full hover:bg-lime-500 hover:-translate-y-0.5 transition-all shadow-lg text-[15px]"
          >
            {{ buttonText }}
          </button>
        </div>
      </slot>
    </div>

    <!-- Optional Contact Modal -->
    <Modal v-if="hasModal" v-model="isModalOpen">
      <ContactForm :title="modalTitle || title" :buttonText="modalButtonText || buttonText" />
    </Modal>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  sectionId: {
    type: String,
    default: 'why-us'
  },
  sectionClass: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: 'Why <span class="text-lime-400">taxplanning.ae</span>'
  },
  description: {
    type: String,
    default: 'Tax advice should make the path forward easier to understand. We bring the filing, the structure and the decision into one conversation.'
  },
  items: {
    type: Array,
    default: () => []
  },
  gridColsClass: {
    type: String,
    default: 'lg:grid-cols-4'
  },
  buttonText: {
    type: String,
    default: ''
  },
  buttonLink: {
    type: String,
    default: ''
  },
  hasModal: {
    type: Boolean,
    default: false
  },
  modalTitle: {
    type: String,
    default: ''
  },
  modalButtonText: {
    type: String,
    default: ''
  }
})

const isModalOpen = ref(false)
const activeSlide = ref(0)
const sliderContainer = ref(null)
let autoplayInterval = null

const openModal = () => {
  isModalOpen.value = true
}

const handleScroll = () => {
  if (!sliderContainer.value || typeof window === 'undefined') return
  const container = sliderContainer.value
  const scrollPosition = container.scrollLeft + (container.offsetWidth / 2)

  let closestIndex = 0
  let minDistance = Infinity

  Array.from(container.children).forEach((child, index) => {
    const childCenter = child.offsetLeft + (child.offsetWidth / 2)
    const distance = Math.abs(childCenter - scrollPosition)
    if (distance < minDistance) {
      minDistance = distance
      closestIndex = index
    }
  })

  activeSlide.value = closestIndex
}

const scrollToSlide = (index) => {
  if (!sliderContainer.value) return
  const container = sliderContainer.value
  container.scrollTo({
    left: index * container.offsetWidth,
    behavior: 'smooth'
  })
}

const startAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval)
  if (!props.items || props.items.length <= 1) return
  
  autoplayInterval = setInterval(() => {
    let nextSlide = activeSlide.value + 1
    if (nextSlide >= props.items.length) {
      nextSlide = 0
    }
    scrollToSlide(nextSlide)
  }, 3500)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Glass card */
.glass-card {
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.04) 100%);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.12),
    0 10px 30px -10px rgba(0,0,0,0.35);
}

/* Thin, even border with a slightly brighter top-left */
.glass-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg,
    rgba(255,255,255,0.28) 0%,
    rgba(255,255,255,0.10) 40%,
    rgba(255,255,255,0.08) 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  pointer-events: none;
}

/* Number styling */
.glass-number {
  color: rgba(255,255,255,0.14);
}
</style>
