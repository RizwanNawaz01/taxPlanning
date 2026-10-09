<template>
  <section id="how-we-work" class="py-24 bg-white">
    <div class="container mx-auto px-7">
      <div class="mb-12 lg:mb-16 max-w-3xl" data-aos="blur-in">
        <h2 class="text-4xl lg:text-[2.5rem] xl:text-[3rem] font-bold text-primary mb-4">How We Work</h2>
        <p class="text-[17px] xl:text-[22px] text-slate-700">We start with where your business actually stands, not a standard form.</p>
      </div>

      <div class="grid lg:grid-cols-[40%_1fr] gap-16 lg:gap-24 items-center px-3">
        <div class="rounded-[2rem] overflow-hidden h-[500px] lg:h-[600px] bg-slate-100 relative" data-aos="blur-in" data-aos-delay="200">
          <NuxtImg src="/Home/how-it-work.png" alt="Consultation" class="absolute inset-0 w-full h-full object-cover" />
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
              <h3 class="text-[20px] lg:text-[22px] font-bold text-slate-900 mb-2 leading-tight">{{ item.title }}</h3>
              <p class="text-slate-600 text-[15px] lg:text-[16px] xl:lg:text-[18px] leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
          
          <div class="pl-10 mt-2 hidden lg:block" data-aos="blur-in" data-aos-delay="1000">
            <Button @click="isModalOpen = true">Book a Consultation</Button>
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
