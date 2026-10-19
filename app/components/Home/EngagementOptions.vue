<template>
  <section class="py-20 lg:py-24 bg-primary text-white">
    <div class="container px-6 lg:px-8 xl:px-12 2xl:px-12">
      <h2 class="text-center text-4xl lg:text-5xl 2xl:text-[3.5rem] font-semibold mb-10 lg:mb-16 leading-tight" data-aos="blur-in">
        Engagement Options
      </h2>
      <div class="options-grid grid lg:grid-cols-2 gap-4 lg:gap-8 mb-10 lg:mb-12" data-aos="blur-in">
        <div 
          v-for="(option, index) in options" 
          :key="index" 
          :class="[
            'option-card px-6 py-6 lg:px-10 lg:py-20 rounded-xl lg:rounded-[1rem] cursor-pointer flex flex-col justify-center',
            `option-card-${index}`
          ]" 
          @click="openContactModal(option)"
        >
          <h3 class="option-title text-[20px] lg:text-3xl 2xl:text-5xl font-medium mb-3 lg:mb-6">{{ option.title }}</h3>
          <p class="option-desc text-[14px] lg:text-lg leading-relaxed lg:leading-snug max-w-[500px]">{{ option.description }}</p>
        </div>
      </div>
      <div class="text-center" data-aos="blur-in" data-aos-delay="600">
        <Button to="/packages" variant="light" size="lg">
          Discover our Packages
        </Button>
      </div>
    </div>

    <!-- Modal Popup for Contact Form -->
    <Modal v-model="isModalOpen">
      <ContactForm :title="selectedOptionTitle || 'Engagement Options'" buttonText="Book a Consultation" />
    </Modal>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const selectedOptionTitle = ref('')

const openContactModal = (option) => {
  selectedOptionTitle.value = option?.title ? `Enquire about ${option.title}` : 'Engagement Options'
  isModalOpen.value = true
}

const options = [
  { 
    title: 'A single task.',
    description: 'For one obligation, one filing, or one specific question. This suits a registration, a return, a certificate application, or a one-time advisory matter.'
  },
  {
    title: 'Ongoing support.',
    description: 'For businesses that want their tax and accounting handled continuously through the year, rather than one filing at a time. We agree the scope once and take it from there.'
  }
]
</script>

<style scoped>
/* Card Base Transitions */
.option-card {
  transition: background-color 0.15s ease !important, color 0.15s ease !important, box-shadow 0.15s ease !important;
}

.option-card .option-title,
.option-card .option-desc {
  transition: color 0.15s ease !important;
}

/* Card 0 Default: Subtle background, dark text */
.option-card-0 {
  background-color: #F4F5F6;
  color: #071721;
}
.option-card-0 .option-title {
  color: #071721;
}
.option-card-0 .option-desc {
  color: #000000;
}

/* Card 1 Default: Lime background, dark text */
.option-card-1 {
  background-color: #B6FC4E;
  color: #071721;
}
.option-card-1 .option-title {
  color: #071721;
}
.option-card-1 .option-desc {
  color: #000000;
}

/* ========================================================
   HOVER SWITCH: When Card 0 is hovered, they swap styles!
   Card 0 becomes lime (#B6FC4E)
   Card 1 becomes subtle (#F4F5F6)
   ======================================================== */
.options-grid:has(.option-card-0:hover) .option-card-0 {
  background-color: #B6FC4E;
  color: #071721;
}
.options-grid:has(.option-card-0:hover) .option-card-0 .option-title {
  color: #071721;
}
.options-grid:has(.option-card-0:hover) .option-card-0 .option-desc {
  color: #000000;
}

.options-grid:has(.option-card-0:hover) .option-card-1 {
  background-color: #F4F5F6;
  color: #071721;
}
.options-grid:has(.option-card-0:hover) .option-card-1 .option-title {
  color: #071721;
}
.options-grid:has(.option-card-0:hover) .option-card-1 .option-desc {
  color: #000000;
}

/* When Card 1 is hovered, Card 1 stays lime, Card 0 stays subtle */
.options-grid:has(.option-card-1:hover) .option-card-1 {
  background-color: #B6FC4E;
  color: #071721;
}
.options-grid:has(.option-card-1:hover) .option-card-0 {
  background-color: #F4F5F6;
  color: #071721;
}
</style>
