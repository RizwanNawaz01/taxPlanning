<template>
  <section :id="sectionId" :class="['py-20 lg:py-28 bg-white', sectionClass]">
    <div class="container px-7 xl:px-16 2xl:px-12">
      <!-- Header -->
      <div 
        class="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 lg:mb-16 gap-4 lg:gap-8" 
        data-aos="fade-up"
      >
        <h2 class="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-primary" v-html="title"></h2>
        <p v-if="description" class="text-black max-w-md text-base lg:text-lg leading-relaxed">
          {{ description }}
        </p>
      </div>

      <!-- Slider / Grid Container -->
      <div class="relative" data-aos="fade-up" data-aos-delay="200">
        <!-- Cards Container (Responsive Slider on mobile/tablet, 3-column grid on desktop) -->
        <div 
          ref="sliderRef"
          :class="[
            'flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory lg:snap-none',
            items.length <= 3 ? 'lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0' : 'lg:flex'
          ]"
        >
          <div 
            v-for="(card, index) in items" 
            :key="index"
            :class="[
              'slider-card w-full min-w-full sm:w-auto sm:min-w-[48%] snap-center lg:snap-align-none flex-shrink-0 bg-[#FBFBFB] rounded-3xl p-4 border border-slate-100 flex flex-col hover:shadow-lg transition-all',
              items.length <= 3 ? 'lg:min-w-0' : 'slider-card-3col'
            ]"
          >
            <!-- Card Image -->
            <div v-if="card.image" class="rounded-2xl overflow-hidden h-52 lg:h-56 max-h-56 w-full bg-slate-200 mb-5 relative">
              <NuxtImg 
                :src="card.image" 
                :alt="card.title"
                format="webp"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Content -->
            <div class="px-2 pb-3 flex-1 flex flex-col">
              <h3 class="text-xl lg:text-[22px] font-bold text-primary mb-3 leading-snug" v-html="card.title">
              </h3>
              <p class="text-black text-sm lg:text-[14px] leading-relaxed">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Carousel Arrow Controls -->
        <div v-if="items.length > 3" class="flex justify-center items-center gap-3 mt-8">
          <button 
            @click="scrollPrev"
            :disabled="!canScrollPrev"
            aria-label="Previous slide"
            class="w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-200 focus:outline-none"
            :class="canScrollPrev 
              ? 'bg-[#EAEAEA] text-black hover:bg-[#dedede] cursor-pointer' 
              : 'bg-white text-black/40 opacity-50 cursor-not-allowed'"
          >
            <svg class="w-[20px] h-[12px] lg:w-[22px] lg:h-[13px]" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.274 7.36401L25.274 8.36401L1.00004 8.36401L1.00004 7.36401L1.00004 6.36401L25.274 6.36401L25.274 7.36401ZM0.292929 8.07112C-0.0975952 7.68059 -0.0975952 7.04743 0.292929 6.6569L6.65689 0.292944C7.04742 -0.0975801 7.68058 -0.0975801 8.0711 0.292944C8.46163 0.683469 8.46163 1.31663 8.0711 1.70716L2.41425 7.36401L8.0711 13.0209C8.46163 13.4114 8.46163 14.0446 8.0711 14.4351C7.68058 14.8256 7.04741 14.8256 6.65689 14.4351L0.292929 8.07112Z" fill="currentColor"/>
            </svg>
          </button>
          <button 
            @click="scrollNext"
            :disabled="!canScrollNext"
            aria-label="Next slide"
            class="w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-200 focus:outline-none"
            :class="canScrollNext 
              ? 'bg-[#EAEAEA] text-black hover:bg-[#dedede] cursor-pointer' 
              : 'bg-white text-black/40 opacity-50 cursor-not-allowed'"
          >
            <svg class="w-[20px] h-[12px] lg:w-[22px] lg:h-[13px]" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7.36401L8.74227e-08 8.36401L24.274 8.36401L24.274 7.36401L24.274 6.36401L-8.74227e-08 6.36401L0 7.36401ZM24.9811 8.07112C25.3716 7.68059 25.3716 7.04743 24.9811 6.6569L18.6172 0.292944C18.2266 -0.0975801 17.5935 -0.0975801 17.2029 0.292944C16.8124 0.683469 16.8124 1.31663 17.2029 1.70716L22.8598 7.36401L17.2029 13.0209C16.8124 13.4114 16.8124 14.0446 17.2029 14.4351C17.5935 14.8256 18.2266 14.8256 18.6172 14.4351L24.9811 8.07112Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
        <div v-else-if="items.length > 1" class="flex lg:hidden justify-center items-center gap-3 mt-8">
          <button 
            @click="scrollPrev"
            :disabled="!canScrollPrev"
            aria-label="Previous slide"
            class="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-200 focus:outline-none"
            :class="canScrollPrev 
              ? 'bg-[#EAEAEA] text-black hover:bg-[#dedede] cursor-pointer' 
              : 'bg-white text-black/40 opacity-50 cursor-not-allowed'"
          >
            <svg class="w-[20px] h-[12px]" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.274 7.36401L25.274 8.36401L1.00004 8.36401L1.00004 7.36401L1.00004 6.36401L25.274 6.36401L25.274 7.36401ZM0.292929 8.07112C-0.0975952 7.68059 -0.0975952 7.04743 0.292929 6.6569L6.65689 0.292944C7.04742 -0.0975801 7.68058 -0.0975801 8.0711 0.292944C8.46163 0.683469 8.46163 1.31663 8.0711 1.70716L2.41425 7.36401L8.0711 13.0209C8.46163 13.4114 8.46163 14.0446 8.0711 14.4351C7.68058 14.8256 7.04741 14.8256 6.65689 14.4351L0.292929 8.07112Z" fill="currentColor"/>
            </svg>
          </button>
          <button 
            @click="scrollNext"
            :disabled="!canScrollNext"
            aria-label="Next slide"
            class="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-200 focus:outline-none"
            :class="canScrollNext 
              ? 'bg-[#EAEAEA] text-black hover:bg-[#dedede] cursor-pointer' 
              : 'bg-white text-black/40 opacity-50 cursor-not-allowed'"
          >
            <svg class="w-[20px] h-[12px]" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7.36401L8.74227e-08 8.36401L24.274 8.36401L24.274 7.36401L24.274 6.36401L-8.74227e-08 6.36401L0 7.36401ZM24.9811 8.07112C25.3716 7.68059 25.3716 7.04743 24.9811 6.6569L18.6172 0.292944C18.2266 -0.0975801 17.5935 -0.0975801 17.2029 0.292944C16.8124 0.683469 16.8124 1.31663 17.2029 1.70716L22.8598 7.36401L17.2029 13.0209C16.8124 13.4114 16.8124 14.0446 17.2029 14.4351C17.5935 14.8256 18.2266 14.8256 18.6172 14.4351L24.9811 8.07112Z" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  sectionId: {
    type: String,
    default: 'tax-compliance'
  },
  sectionClass: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: 'Tax & Compliance'
  },
  description: {
    type: String,
    default: 'The day-to-day requirements of running a business in the UAE, handled accurately and on time.'
  },
  items: {
    type: Array,
    default: () => []
  }
})

const sliderRef = ref(null)
const canScrollPrev = ref(false)
const canScrollNext = ref(true)

const checkScroll = () => {
  if (sliderRef.value) {
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.value
    canScrollPrev.value = scrollLeft > 10
    canScrollNext.value = scrollLeft + clientWidth < scrollWidth - 10
  }
}

const scrollPrev = () => {
  if (sliderRef.value && canScrollPrev.value) {
    const card = sliderRef.value.firstElementChild
    const scrollAmount = card ? card.offsetWidth + 24 : 380
    sliderRef.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    setTimeout(checkScroll, 350)
  }
}

const scrollNext = () => {
  if (sliderRef.value && canScrollNext.value) {
    const card = sliderRef.value.firstElementChild
    const scrollAmount = card ? card.offsetWidth + 24 : 380
    sliderRef.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    setTimeout(checkScroll, 350)
  }
}

onMounted(() => {
  if (sliderRef.value) {
    sliderRef.value.addEventListener('scroll', checkScroll, { passive: true })
    checkScroll()
  }
})

onUnmounted(() => {
  if (sliderRef.value) {
    sliderRef.value.removeEventListener('scroll', checkScroll)
  }
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

@media (min-width: 1024px) {
  .slider-card-3col {
    min-width: calc((100% - 3rem) / 3) !important;
    max-width: calc((100% - 3rem) / 3) !important;
    width: calc((100% - 3rem) / 3) !important;
  }
}
</style>
