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
            'flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0',
            items.length <= 3 ? 'lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0' : 'lg:flex'
          ]"
        >
          <div 
            v-for="(card, index) in items" 
            :key="index"
            :class="[
              'min-w-[85%] sm:min-w-[48%] flex-shrink-0 bg-[#FBFBFB] rounded-3xl p-4 border border-slate-100 flex flex-col hover:shadow-lg transition-all',
              items.length <= 3 ? 'lg:min-w-0' : 'lg:min-w-[calc(33.333%-1rem)]'
            ]"
          >
            <!-- Card Image -->
            <div v-if="card.image" class="rounded-2xl overflow-hidden h-52 w-full bg-slate-200 mb-5 relative">
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
            aria-label="Previous slide"
            class="w-10 h-10 rounded-full border border-slate-300 text-slate-700 hover:text-black hover:border-slate-500 hover:bg-slate-50 flex items-center justify-center transition-all focus:outline-none"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button 
            @click="scrollNext"
            aria-label="Next slide"
            class="w-10 h-10 rounded-full border border-slate-300 text-slate-700 hover:text-black hover:border-slate-500 hover:bg-slate-50 flex items-center justify-center transition-all focus:outline-none"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
        <div v-else-if="items.length > 1" class="flex lg:hidden justify-center items-center gap-3 mt-8">
          <button 
            @click="scrollPrev"
            aria-label="Previous slide"
            class="w-10 h-10 rounded-full border border-slate-300 text-slate-700 hover:text-black hover:border-slate-500 hover:bg-slate-50 flex items-center justify-center transition-all focus:outline-none"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button 
            @click="scrollNext"
            aria-label="Next slide"
            class="w-10 h-10 rounded-full border border-slate-300 text-slate-700 hover:text-black hover:border-slate-500 hover:bg-slate-50 flex items-center justify-center transition-all focus:outline-none"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

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

const scrollPrev = () => {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: -360, behavior: 'smooth' })
  }
}

const scrollNext = () => {
  if (sliderRef.value) {
    sliderRef.value.scrollBy({ left: 360, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
