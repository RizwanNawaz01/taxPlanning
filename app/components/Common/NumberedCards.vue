<template>
  <section :id="sectionId" :class="['relative pt-20 pb-16 lg:pb-16 lg:py-24 bg-primary text-white overflow-hidden', sectionClass]">
    <div class="container relative px-0 lg:px-8 xl:px-12 2xl:px-12">
      <!-- Header -->
      <div 
        class="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-4 lg:gap-12 2xl:gap-32 mb-10 lg:mb-16 text-center lg:text-left px-0" 
        data-aos="fade-up"
      >
        <h2 class="text-4xl lg:text-5xl 2xl:text-6xl font-semibold leading-tight" v-html="title"></h2>
        <p v-if="description" class="text-[14px] lg:text-base xl:text-lg text-white max-w-sm lg:max-w-md mx-auto lg:mx-0 lg:leading-snug">
          {{ description }}
        </p>
      </div>

      <!-- Slider / Grid Container -->
      <div class="relative w-full">
        <!-- Desktop Grid -->
        <div :class="['hidden lg:grid gap-4 xl:gap-6 mb-12', gridColsClass]">
          <div
            v-for="(item, index) in items"
            :key="index"
            data-aos="fade-up"
            :data-aos-delay="index * 150"
            class="h-full"
          >
            <div class="glass-card p-5 xl:p-8 flex flex-col h-full">
              <span class="glass-number text-[52px] xl:text-[64px] font-black leading-none mb-6 xl:mb-10 block select-none">
                {{ item.number || index + 1 }}
              </span>
              <h3 class="text-lg lg:text-lg 2xl:text-xl font-semibold mb-3 xl:mb-4 pr-2 xl:pr-4 leading-snug text-white">
                {{ item.title }}
              </h3>
              <p class="text-[13px] xl:text-sm text-white lg:leading-snug">
                {{ item.description }}
              </p>
            </div>
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
            <div class="glass-card px-8 pt-10 pb-10 flex flex-col h-[360px]">
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
            variant="primary"
          >
            {{ buttonText }}
          </Button>
          <Button 
            v-else-if="buttonText"
            variant="primary"
            @click="openModal"
          >
            {{ buttonText }}
          </Button>
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
  background: url('/Home/glass-effect.png') no-repeat center center;
  background-size: 98% 98%;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
  will-change: transform;
}

.glass-card:hover {
  transform: scale(1.03);
  z-index: 10;
}

/* Number styling */
.glass-number {
  color: rgba(255,255,255,0.14);
}
</style>
