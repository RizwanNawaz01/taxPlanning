<template>
  <section class="py-24 bg-white">
    <div class="container grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:px-7">
      <!-- Left Side -->
      <div class="lg:max-w-xl" data-aos="fade-up">
        <span class="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{{ calloutContent.overline }}</span>
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary leading-[1.15]" v-html="calloutContent.title"></h2>
      </div>
      
      <!-- Right Side -->
      <div class="lg:pt-10" data-aos="fade-up" data-aos-delay="200">
        <p class="text-[17px] xl:text-[19px] text-black mb-8 leading-snug lg:leading-relaxed   lg:max-w-lg xl:max-w-xl">{{ calloutContent.description }}</p>
        <Button @click="isModalOpen = true" variant="primary">
          {{ calloutContent.button.text }}
        </Button>
      </div>
    </div>

    <!-- Modal Popup for Contact Form -->
    <Modal v-model="isModalOpen">
      <ContactForm title="Enquire Now" buttonText="Submit Enquiry" />
    </Modal>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

const calloutContent = {
  overline: "BUILD FOR DECISION THAT MATTER",
  title: 'Good advice starts<br class="hidden lg:block"/>before a decision is<br class="hidden lg:block"/>made.',
  description: "We work with clients while they are weighing up an investment, a new market, or a change in ownership, and want to understand the tax implications before committing to anything. That can mean a straightforward VAT or Corporate Tax filing, or a longer conversation about how a business is structured and where it's heading.",
  button: {
    text: "Enquire Now"
  }
}
</script>
