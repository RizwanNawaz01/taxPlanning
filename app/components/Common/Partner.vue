<template>
  <section :class="['text-center', sectionClass, bgClass]">
    <div class="container px-6 lg:px-8 xl:px-12 2xl:px-12">
      <h2 
        class="text-4xl lg:text-5xl 2xl:text-[3rem] font-bold text-primary mb-6" 
        v-html="title"
      ></h2>
      
      <p 
        v-if="description" 
        class="text-[19px] xl:text-xl text-black max-w-3xl mx-auto mb-10" 
      >
        {{ description }}
      </p>

      <slot name="action">
        <Button 
          variant="dark"
          :to="buttonTo"
          @click="!buttonTo ? (isModalOpen = true) : undefined" 
        >
          {{ buttonText }}
        </Button>
      </slot>
    </div>

    <!-- Modal Popup for Contact Form -->
    <Modal v-if="!buttonTo" v-model="isModalOpen">
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
    default: 'Learn more'
  },
  buttonTo: {
    type: String,
    default: null
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
    default: 'py-14 lg:py-24'
  }
})

const isModalOpen = ref(false)
</script>
