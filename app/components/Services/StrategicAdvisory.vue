<template>
  <CommonNumberedCards
    section-id="strategic-advisory"
    title='Strategic <span class="text-lime-400">Advisory</span>'
    description="Support for the decisions behind a transaction, a restructure, or a change in how your business is set up."
    :items="advisoryItems"
    section-class="lg:py-28"
  >
    <template #action>
      <div class="text-center max-w-2xl mx-auto" data-aos="fade-up">
        <p class="text-base lg:text-lg text-white/90 mb-6 leading-relaxed">
          Not sure which of these applies to you? Tell us where your business is, and we will point you in the right direction.
        </p>
        <button 
          type="button"
          @click="isModalOpen = true"
          class="bg-lime-400 text-primary font-bold px-8 py-3.5 rounded-full hover:bg-lime-500 hover:-translate-y-0.5 transition-all shadow-lg text-[15px]"
        >
          Book a Consultation
        </button>
      </div>

      <!-- Contact Modal -->
      <Modal v-model="isModalOpen">
        <ContactForm title="Strategic Advisory Inquiry" buttonText="Book a Consultation" />
      </Modal>
    </template>
  </CommonNumberedCards>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

const advisoryItems = [
  {
    title: 'Corporate Tax Consultation',
    description: 'Working through how a decision, a transaction, or a change in your business affects your Corporate Tax position.'
  },
  {
    title: 'International Tax Planning',
    description: 'For businesses operating across borders: advice on how UAE tax rules interact with obligations elsewhere.'
  },
  {
    title: 'Residence and Domicile',
    description: 'Guidance on residence and domicile questions for individuals and businesses, and what they mean for tax exposure.'
  },
  {
    title: 'Corporate Tax and Substance',
    description: 'What your business needs in place to meet substance requirements under UAE Corporate Tax law.'
  }
]
</script>
