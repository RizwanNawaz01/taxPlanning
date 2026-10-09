<template>
  <section class="py-20 lg:py-24 bg-primary text-white">
    <div class="container px-7">
      <h2 class="text-center text-[35px] lg:text-5xl xl:text-[3rem]  font-semibold mb-10 lg:mb-16 leading-tight" data-aos="blur-in">
        Engagement Options
      </h2>
      <div class="grid lg:grid-cols-2 gap-4 lg:gap-8 mb-10 lg:mb-12">
        <div 
          v-for="(option, index) in options" 
          :key="index"
          :class="['px-6 py-6 lg:px-10 lg:py-20 rounded-xl lg:rounded-[1rem]', option.bgClass, option.textClass]"
          data-aos="blur-in"
          :data-aos-delay="200 + (index * 200)"
        >
          <h3 class="text-[20px] lg:text-3xl xl:text-4xl font-semibold mb-3 lg:mb-6">{{ option.title }}</h3>
          <p class="text-[14px] lg:text-base leading-relaxed max-w-[450px]" :class="option.descClass">{{ option.description }}</p>
        </div>
      </div>
      <div class="text-center" data-aos="blur-in" data-aos-delay="600">
        <a href="#" @click.prevent="isModalOpen = true" class="inline-block bg-[#F4F5F6] text-primary px-8 py-3 lg:px-12 lg:py-3.5 text-[14px] lg:text-base rounded-full font-bold hover:bg-white hover:-translate-y-1 transition-all shadow-lg">
          Discover our Packages
        </a>
      </div>
    </div>

    <!-- Modal Popup for Contact Form -->
    <Modal v-model="isModalOpen">
      <ContactForm title="Engagement Options" buttonText="Book a Consultation" />
    </Modal>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

const options = [
  { 
    title: 'A single task.',
    description: 'For one obligation, one filing, or one specific question. This suits a registration, a return, a certificate application, or a one-time advisory matter.',
    bgClass: 'bg-[#F4F5F6]',
    textClass: 'text-primary',
    descClass: 'text-primary/80'
  },
  {
    title: 'Ongoing support.',
    description: 'For businesses that want their tax and accounting handled continuously through the year, rather than one filing at a time. We agree the scope once and take it from there.',
    bgClass: 'bg-lime-400',
    textClass: 'text-primary',
    descClass: 'text-primary/90'
  }
]
</script>
