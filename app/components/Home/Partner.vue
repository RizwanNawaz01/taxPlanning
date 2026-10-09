<template>
  <section class="py-24 bg-white text-center">
    <div class="container px-7">
      <h2 class="text-4xl lg:text-5xl xl:text-[3rem] font-bold text-primary mb-6" data-aos="blur-in">Partner with Us</h2>
      <p class="text-lg text-black max-w-2xl mx-auto mb-10" data-aos="blur-in" data-aos-delay="200">For lawyers, accountants, auditors, corporate advisors, private bankers, and wealth managers with clients who need tax expertise.</p>
      <a href="#" @click.prevent="isModalOpen = true" class="inline-block bg-primary text-white px-8 py-3 lg:px-12 lg:py-3.5 text-[14px] lg:text-base rounded-full font-bold hover:bg-secondary hover:-translate-y-1 transition-all shadow-[0_4px_12px_rgba(11,22,44,0.2)]" data-aos="blur-in" data-aos-delay="400">Book a Consultation</a>
    </div>

    <!-- Modal Popup for Contact Form -->
    <Modal v-model="isModalOpen">
      <ContactForm title="Partner with Us" buttonText="Submit Inquiry" />
    </Modal>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
</script>
