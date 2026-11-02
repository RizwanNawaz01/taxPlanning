<template>
  <section id="testimonials" class="lg:py-24 py-12 bg-[#F4F4F4]">
    <div class="container mx-auto px-6 lg:px-8 xl:px-12 2xl:px-12">
      <!-- Section Header exactly matching Home sections (How We Work / Services / Callout) -->
      <div class="mb-12 lg:mb-16 max-w-3xl" data-aos="blur-in">
        <h2 class="text-4xl lg:text-5xl 2xl:text-5xl font-semibold text-primary mb-4">
          Trust, earned over time
        </h2>
        <p class="text-[17px] 2xl:text-[20px] text-black">
          What founders and financial leaders say about working with our tax advisory team.
        </p>
      </div>

      <!-- Slider Container - cards strictly inside the container on the left -->
      <div class="relative" data-aos="blur-in" data-aos-delay="200">
        <div
          ref="sliderRef"
          @scroll="checkScroll"
          class="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory pb-4"
        >
          <div
            v-for="(item, index) in testimonials"
            :key="index"
            class="testimonial-card flex-shrink-0 snap-start rounded-[1.5rem] p-6 lg:p-10 lg:pt-12 xl:pt-14 flex flex-col justify-between border border-slate-100 bg-[#FBFBFB] hover:shadow-lg transition-all duration-300"
          >
            <!-- Quote -->
            <div class="flex-1 mb-8">
              <p class="text-black text-[15px] lg:text-[16px] xl:text-[17px] lg:leading-loose xl:leading-[1.75]">
                “{{ item.quote }}”
              </p>
            </div>

            <!-- Author Info with Google Review Logo -->
            <div class="flex items-center gap-3.5 pt-4 border-t border-slate-200">
              <!-- Google Logo Box -->
              <div class="w-11 h-11 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center shrink-0 p-2.5">
                <svg viewBox="0 0 24 24" class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
              </div>

              <!-- Author details -->
              <div class="min-w-0">
                <h3 class="text-[17px] lg:text-[18px] font-bold text-black leading-snug truncate">
                  {{ item.author }}
                </h3>
                <div class="flex items-center gap-2 mt-0.5">
                  <!-- 5 Star Rating -->
                  <div class="flex items-center gap-0.5 text-[#FBBC04]">
                    <svg v-for="star in 5" :key="star" class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slider Arrow Controls matching Common/CardsSlider.vue -->
        <div class="flex justify-start items-center gap-3 mt-8">
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sliderRef = ref(null)
const canScrollPrev = ref(false)
const canScrollNext = ref(true)

const testimonials = [
  {
    quote: 'In volatile markets you need sound strategy, wise counsel and the encouragement to stay the course. Hatim and the team genuinely understand my goals — seasoned professionals I trust.',
    author: 'Dean Moroz',
    role: 'Partner — Ashurst'
  },
  {
    quote: 'Reliable people with deep expertise and a real can-do attitude. Their strategic guidance through Corporate Tax and restructuring was seamless. It’s a privilege to work with you.',
    author: 'Fouad Benghalem',
    role: 'Ex SVP, MENA — GSK'
  },
  {
    quote: 'I’m hands-on with my wealth and investment portfolio. The team worked with me as a partner to implement an all-weather corporate and tax structure. Overall, a trusted long-term wealth partner.',
    author: 'Early Employee',
    role: 'Revolut'
  },
  {
    quote: 'Their digital but still personal approach is what we appreciate most. Money matters are sensitive, and their transparency and clarity build trust quickly.',
    author: 'Semuel Oerlemans',
    role: 'Senior Marketing Manager — Tabby'
  },
  {
    quote: 'Responsive, proactive and meticulous with UAE corporate tax laws. Having their team manage our accounting and corporate compliance has been invaluable.',
    author: 'Rashid Al Nuaimi',
    role: 'Managing Partner — Gulf Capital'
  }
]

const checkScroll = () => {
  if (!sliderRef.value) return
  const { scrollLeft, scrollWidth, clientWidth } = sliderRef.value
  canScrollPrev.value = scrollLeft > 10
  canScrollNext.value = scrollLeft < scrollWidth - clientWidth - 10
}

const scrollPrev = () => {
  if (!sliderRef.value || !canScrollPrev.value) return
  const cardWidth = sliderRef.value.querySelector('.testimonial-card')?.offsetWidth || 350
  sliderRef.value.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' })
}

const scrollNext = () => {
  if (!sliderRef.value || !canScrollNext.value) return
  const cardWidth = sliderRef.value.querySelector('.testimonial-card')?.offsetWidth || 350
  sliderRef.value.scrollBy({ left: cardWidth + 24, behavior: 'smooth' })
}

onMounted(() => {
  checkScroll()
  window.addEventListener('resize', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkScroll)
})
</script>

<style scoped>
.testimonial-card {
  width: 85vw;
  min-width: 280px;
  min-height: 350px;
}

@media (min-width: 640px) {
  .testimonial-card {
    width: 360px;
    min-height: 400px;
  }
}

@media (min-width: 1024px) {
  .testimonial-card {
    width: 350px;
    min-height: 420px;
  }
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
