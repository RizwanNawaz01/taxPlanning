<template>
  <section :class="['text-center', sectionClass, bgClass]">
    <div class="container px-6 lg:px-8 xl:px-12 2xl:px-12">
      <h2 
        class="text-4xl lg:text-5xl xl:text-[3rem] font-bold text-primary mb-6" 
        data-aos="blur-in"
        v-html="title"
      ></h2>
      
      <p 
        v-if="description" 
        class="text-lg xl:text-xl text-black max-w-3xl mx-auto mb-10" 
        data-aos="blur-in" 
        data-aos-delay="200"
      >
        {{ description }}
      </p>

      <slot name="action">
        <a 
          href="#" 
          @click.prevent="isModalOpen = true" 
          class="inline-block bg-primary text-white px-8 py-3 lg:px-10 lg:py-2 text-[14px] lg:text-base rounded-full font-bold hover:bg-secondary hover:-translate-y-1 transition-all shadow-[0_4px_12px_rgba(11,22,44,0.2)]" 
          data-aos="blur-in" 
          data-aos-delay="400"
        >
          {{ buttonText }}
        </a>
      </slot>
    </div>

    <!-- Modal Popup for Contact Form -->
    <Modal v-model="isModalOpen">
      <ContactForm :title="modalTitle" :buttonText="modalButtonText" />
    </Modal>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Partner with Us'
  },
  description: {
    type: String,
    default: 'For lawyers, accountants, auditors, corporate advisors, private bankers, and wealth managers with clients who need tax expertise.'
  },
  buttonText: {
    type: String,
    default: 'Book a Consultation'
  },
  modalTitle: {
    type: String,
    default: 'Partner with Us'
  },
  modalButtonText: {
    type: String,
    default: 'Submit Inquiry'
  },
  bgClass: {
    type: String,
    default: 'bg-white'
  },
  sectionClass: {
    type: String,
    default: 'py-24'
  }
})

const isModalOpen = ref(false)
</script>
