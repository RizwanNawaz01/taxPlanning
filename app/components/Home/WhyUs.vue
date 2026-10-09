<template>
  <section id="why-us" class="relative pt-20 pb-5 lg:py-24 bg-primary text-white overflow-hidden">

    <div class="container relative px-7">

      <!-- Header -->
      <div class="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-4 lg:gap-32 mb-10 lg:mb-16 text-center lg:text-left px-0" data-aos="fade-up">
        <h2 class="text-[32px] lg:text-5xl font-bold leading-tight">Why <span class="text-lime-400">taxplanning.ae</span></h2>
        <p class="text-[14px] lg:text-lg text-white/80 max-w-sm lg:max-w-md mx-auto lg:mx-0">Tax advice should make the path forward easier to understand. We bring the filing, the structure and the decision into one conversation.</p>
      </div>

      <!-- Slider Container -->
      <div class="relative w-full">
        <!-- Desktop Grid -->
        <div class="hidden lg:grid lg:grid-cols-4 gap-6 mb-12">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="glass-card p-8 rounded-[24px] flex flex-col"
            data-aos="fade-up"
            :data-aos-delay="index * 150"
          >
            <span class="glass-number text-[80px] font-black leading-none mb-10 block">{{ index + 1 }}</span>
            <h3 class="text-xl font-bold mb-4 pr-4 leading-snug">{{ item.title }}</h3>
            <p class="text-sm text-white/80 leading-relaxed">{{ item.description }}</p>
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
              <span class="glass-number text-[88px] font-black leading-none mb-auto block tracking-tighter">{{ index + 1 }}</span>
              <div class="mt-auto relative z-10">
                <h3 class="text-[20px] lg:text-[24px] font-bold mb-2 leading-tight pr-2">{{ item.title }}</h3>
                <p class="text-[15px] lg:text-[16px] text-white/80 leading-normal">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination Dots (Mobile Only) -->
        <div class="flex justify-center gap-2 lg:hidden mb-10">
          <button
            v-for="(_, index) in items"
            :key="index"
            class="p-2 -m-2"
            @click="scrollToSlide(index); stopAutoplay(); startAutoplay()"
            aria-label="Go to slide"
          >
            <span class="block w-2 h-2 rounded-full transition-colors" :class="activeSlide === index ? 'bg-white' : 'bg-white/30'"></span>
          </button>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center pt-2 pb-4 lg:py-5" data-aos="zoom-in" data-aos-offset="50">
        <Button to="#services" class="hidden lg:inline-flex">Explore Our Services</Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const items = [
  {
    title: 'Backed by a proven track record',
    description: "taxplanning.ae draws on InZone's experience in accounting and taxation supporting businesses across the UAE with their evolving tax and compliance needs."
  },
  {
    title: 'A seamless and friendly service',
    description: 'A dedicated team in a digital environment. No confusing jargon, only clear instructions and guidance.'
  },
  {
    title: 'Every service under one roof',
    description: 'From set up to tax, compliance to advisory, we cover all areas of tax and accounting so you get comprehensive management.'
  },
  {
    title: 'Advisory you can act on',
    description: 'We build our strategy and advice around practical solutions, not just theory, so you can execute successfully.'
  }
]

const activeSlide = ref(0)
const sliderContainer = ref(null)
let autoplayInterval = null

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
  autoplayInterval = setInterval(() => {
    let nextSlide = activeSlide.value + 1
    if (nextSlide >= items.length) {
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

/* ---------- Glass card (subtle, matches reference) ---------- */
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

/* Number: flat, soft grey like the reference */
.glass-number {
  color: rgba(255,255,255,0.14);
}
</style>