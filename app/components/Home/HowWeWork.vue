<template>
  <section id="how-we-work" class="lg:py-24 py-12 bg-white">
    <div class="container mx-auto px-6 lg:px-8 xl:px-12 2xl:px-12">
      <div class="mb-12 lg:mb-16 max-w-3xl" data-aos="blur-in">
        <h2 class="text-4xl lg:text-5xl 2xl:text-5xl font-semibold text-primary mb-4">How We Work</h2>
        <p class="text-[17px] 2xl:text-[20px] text-black">We start with where your business actually stands, not a standard form.</p>
      </div>

      <div class="grid lg:grid-cols-[40%_1fr] gap-10 lg:gap-14 2xl:gap-24 items-center px-0">
        <div class="rounded-[2rem] overflow-hidden h-[400px] lg:h-[600px] bg-slate-100 relative" data-aos="blur-in" data-aos-delay="200">
          <NuxtImg src="/Home/how-it-work.webp" alt="Consultation" format="webp" loading="lazy" class="absolute inset-0 w-full h-full object-cover" />
        </div>
        
        <div class="flex flex-col gap-10 max-w-[600px] lg:pt-12">
          <div 
            v-for="(item, index) in items" 
            :key="index"
            class="flex gap-8 group relative"
            data-aos="blur-in"
            :data-aos-delay="400 + (index * 150)"
          >
            <!-- Connecting line -->
            <div v-if="index !== items.length - 1" class="absolute left-[3.5px] top-[14px] w-px h-[calc(100%+40px)] bg-slate-800 z-0"></div>
            
            <!-- Dot -->
            <div class="w-2 h-2 bg-slate-900 rounded-full mt-2.5 relative z-10 shrink-0"></div>
            
            <!-- Text Content -->
            <div>
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
      <ContactForm title="How We Work" buttonText="Book a Consultation" />
    </Modal>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

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
