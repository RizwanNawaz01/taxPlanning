<template>
  <section id="how-we-work" class="lg:py-24 py-16 bg-white">
    <div class="container mx-auto px-6 lg:px-8 xl:px-12 2xl:px-12">
      <div class="mb-12 lg:mb-16 max-w-3xl" data-aos="blur-in">
        <h2 class="text-4xl lg:text-5xl 2xl:text-5xl font-semibold text-primary mb-4">How We Work</h2>
        <p class="text-[17px] 2xl:text-[20px] text-black">We start with where your business actually stands, not a standard form.</p>
      </div>

      <div class="grid lg:grid-cols-[40%_1fr] gap-10 lg:gap-14 2xl:gap-24 items-center px-0">
        <div class="rounded-[2rem] overflow-hidden h-[400px] lg:h-[600px] bg-slate-100 relative" data-aos="blur-in" data-aos-delay="200">
          <NuxtImg src="/Home/how-it-work.webp" alt="Consultation" format="webp" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        
        <div ref="stepsContainer" class="flex flex-col gap-10 max-w-[600px] lg:pt-12">
          <div 
            v-for="(item, index) in items" 
            :key="index"
            class="step-item flex gap-8 group relative"
            :class="{ 'is-active': isVisible }"
            :style="{ '--step-idx': index }"
          >
            <!-- Connecting line with downward draw animation -->
            <div 
              v-if="index !== items.length - 1" 
              class="step-line absolute left-[3.5px] top-[14px] w-[1px] h-[calc(100%+40px)] origin-top bg-slate-800 z-0"
            ></div>
            
            <!-- Dot / Point with pop-in pulse animation -->
            <div class="step-dot w-2.5 h-2.5 bg-slate-900 rounded-full mt-2 relative z-10 shrink-0"></div>
            
            <!-- Text Content with slide & fade-in animation -->
            <div class="step-content">
              <h3 class="text-[20px] lg:text-[22px] font-bold text-black mb-2 leading-tight">{{ item.title }}</h3>
              <p class="text-black text-[15px] lg:text-[16px] xl:lg:text-[18px] lg:leading-snug">{{ item.description }}</p>
            </div>
          </div>
          
          <div class="pl-10 mt-2 hidden lg:block" data-aos="blur-in" data-aos-delay="1000">
            <Button @click="isModalOpen = true" class="lg:px-10 lg:py-2">Book a Consultation</Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Popup for Contact Form -->
    <Modal v-model="isModalOpen">
      <ContactForm title="How We Work" buttonText="Become a partner" />
    </Modal>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isModalOpen = ref(false)
const stepsContainer = ref(null)
const isVisible = ref(false)

let observer = null

onMounted(() => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (observer && stepsContainer.value) {
              observer.unobserve(stepsContainer.value)
            }
          }
        })
      },
      { threshold: 0.25 }
    )

    if (stepsContainer.value) {
      observer.observe(stepsContainer.value)
    }
  } else {
    isVisible.value = true
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

const items = [
  {
    title: 'Tell us what you need.',
    description: 'Share what is due, what has already been done, and any deadlines you are working against.'
  },
  {
    title: 'We review your position.',
    description: 'We look at your structure, your records, and how the different pieces connect before recommending a way forward.'
  },
  {
    title: 'We set out the scope.',
    description: 'You will know what work is involved, what we need from you, and what it costs before anything begins.'
  },
  {
    title: 'You decide how to proceed.',
    description: 'As a one-off engagement, or as ongoing support across the year.'
  }
]
</script>

<style scoped>
/* Initial States before step is triggered */
.step-dot {
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.step-content {
  opacity: 0;
  transform: translateX(16px);
  filter: blur(6px);
  transition: opacity 0.35s ease-out, transform 0.35s ease-out, filter 0.35s ease-out;
}

.step-line {
  transform: scaleY(0);
  transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 
  Sequence timing per step (Base step interval ~0.55s):
  1. Point shows: (var(--step-idx) * 0.55s)
  2. Text shows:  (var(--step-idx) * 0.55s + 0.15s)
  3. Line grows downward to next point: (var(--step-idx) * 0.55s + 0.32s)
*/
.step-item.is-active .step-dot {
  opacity: 1;
  transform: scale(1);
  transition-delay: calc(var(--step-idx) * 0.55s);
}

.step-item.is-active .step-content {
  opacity: 1;
  transform: translateX(0);
  filter: blur(0);
  transition-delay: calc(var(--step-idx) * 0.55s + 0.15s);
}

.step-item.is-active .step-line {
  transform: scaleY(1);
  transition-delay: calc(var(--step-idx) * 0.55s + 0.32s);
}
</style>
