<template>
  <section :class="['py-20 lg:py-28', bgClass, sectionClass]">
    <div class="container mx-auto px-6 lg:px-12 xl:px-16">
      <!-- Section Header -->
      <div class="mb-12 lg:mb-16 max-w-3xl" data-aos="fade-up">
        <h2 
          class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight mb-4"
          v-html="title"
        ></h2>
        <p 
          v-if="description" 
          class="text-black/80 text-sm sm:text-base lg:text-lg leading-relaxed"
        >
          {{ description }}
        </p>
      </div>

      <!-- Desktop View: 5 Columns Grid -->
      <div class="hidden lg:grid lg:grid-cols-5 gap-6 xl:gap-7" data-aos="fade-up" data-aos-delay="200">
        <div 
          v-for="(member, index) in members" 
          :key="index"
          class="flex flex-col group"
        >
          <!-- Member Photo Card -->
          <div class="relative bg-[#F4F4F3] rounded-2xl overflow-hidden aspect-[4/5] w-full mb-4 border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:-translate-y-1">
            <NuxtImg
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <!-- Member Details -->
          <div class="pt-1">
            <h3 class="text-lg xl:text-xl font-bold text-primary leading-snug mb-1">
              {{ member.name }}
            </h3>
            <p class="text-sm xl:text-[15px] text-gray-500 font-medium leading-snug">
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile / Tablet View: Touch Slider with Drag/Scroll & Pagination -->
      <div class="lg:hidden" data-aos="fade-up" data-aos-delay="200">
        <div
          ref="sliderRef"
          class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-6 -mr-6 pr-6"
          @scroll="handleScroll"
        >
          <div
            v-for="(member, index) in members"
            :key="index"
            class="w-[78%] sm:w-[48%] shrink-0 snap-start flex flex-col"
          >
            <!-- Member Photo Card -->
            <div class="bg-[#F4F4F3] rounded-2xl overflow-hidden aspect-[4/5] w-full mb-3 border border-slate-200/60 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <NuxtImg
                :src="member.image"
                :alt="member.name"
                class="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>

            <!-- Member Details -->
            <div>
              <h3 class="text-base sm:text-lg font-bold text-primary leading-snug mb-1">
                {{ member.name }}
              </h3>
              <p class="text-xs sm:text-sm text-gray-500 font-medium leading-snug">
                {{ member.role }}
              </p>
            </div>
          </div>
        </div>

        <!-- Slider Controls / Dots -->
        <div class="flex items-center justify-center gap-2 mt-2">
          <button
            v-for="(_, index) in members"
            :key="index"
            @click="scrollToSlide(index)"
            :aria-label="`Go to leadership member ${index + 1}`"
            class="h-2 rounded-full transition-all duration-300"
            :class="activeSlide === index ? 'w-6 bg-primary' : 'w-2 bg-gray-300 hover:bg-gray-400'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Meet Our Leadership'
  },
  description: {
    type: String,
    default: 'Our leadership team brings decades of collective experience in UAE corporate tax, legal advisory, and accounting compliance. United by a shared commitment to clarity and precision, they guide taxplanning.ae’s advisory standard and support businesses across the UAE.'
  },
  bgClass: {
    type: String,
    default: 'bg-[#F9FAFB]'
  },
  sectionClass: {
    type: String,
    default: ''
  },
  members: {
    type: Array,
    default: () => [
      {
        name: 'Fakhrullah Arain',
        role: 'Executive Director BD',
        image: '/About/leader-1.webp'
      },
      {
        name: 'Habeeb Quraishi',
        role: 'Chief Financial Officer',
        image: '/About/leader-2.webp'
      },
      {
        name: 'Shabna Shukoor',
        role: 'Head of Marketing',
        image: '/About/leader-3.webp'
      },
      {
        name: 'Hasnain Rajkotwala',
        role: 'Head of HR',
        image: '/About/leader-4.webp'
      },
      {
        name: 'Akshay Sachdeva',
        role: 'Manager',
        image: '/About/leader-5.webp'
      }
    ]
  }
})

const sliderRef = ref(null)
const activeSlide = ref(0)

const handleScroll = () => {
  if (!sliderRef.value) return
  const { scrollLeft, clientWidth } = sliderRef.value
  const slideWidth = clientWidth * 0.78
  const newIndex = Math.round(scrollLeft / (slideWidth || 1))
  activeSlide.value = Math.min(Math.max(newIndex, 0), props.members.length - 1)
}

const scrollToSlide = (index) => {
  if (!sliderRef.value) return
  const cards = sliderRef.value.children
  if (cards && cards[index]) {
    cards[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    })
    activeSlide.value = index
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
