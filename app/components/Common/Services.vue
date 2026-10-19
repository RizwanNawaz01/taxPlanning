<template>
  <section :id="sectionId" :class="['py-12 lg:py-24 px-5', bgClass]">
    <div class="container px-6 lg:px-8 xl:px-12 2xl:px-12">
      <!-- Section Header -->
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 lg:mb-16 gap-3 lg:gap-6" data-aos="fade-up">
        <h2 class="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-primary" v-html="title"></h2>
        <p v-if="description" class="text-black max-w-md text-[15px] lg:text-lg xl:text-lg leading-snug lg:leading-snug xl:leading-snug">
          {{ description }}
        </p>
      </div>

      <!-- Services Cards Grid -->
      <div class="services-grid grid lg:grid-cols-2 gap-6 lg:gap-8" data-aos="fade-up">
        <div 
          v-for="(service, index) in items" 
          :key="index" 
          :class="[
            'service-card p-6 lg:px-14 lg:pt-24 lg:pb-24 rounded-2xl lg:rounded-[2rem] relative overflow-hidden flex flex-col justify-center cursor-pointer',
            `service-card-${index}`
          ]"
        >
          <!-- Background Chevrons (Smooth Cross-fade) -->
          <NuxtImg 
            src="/Home/services-left.webp" 
            alt="" 
            format="webp" 
            loading="lazy"
            class="bg-chevron-dark absolute inset-0 w-full h-full object-cover object-right pointer-events-none" 
          />
          <NuxtImg 
            src="/Home/services-right.webp" 
            alt="" 
            format="webp" 
            loading="lazy"
            class="bg-chevron-light absolute inset-0 w-full h-full object-cover object-right pointer-events-none" 
          />

          <div class="relative z-10">
            <h3 class="card-title text-xl lg:text-3xl font-bold mb-2 lg:mb-3">
              {{ service.title }}
            </h3>
            <p 
              class="card-desc mb-5 lg:mb-8 text-[11px] lg:text-base leading-snug lg:leading-normal pr-4 lg:pr-0 max-w-full" 
              v-html="service.description"
            ></p>
            
            <Button 
              @click.prevent="openContactModal(service)" 
              size="sm"
              class="card-btn lg:text-[15px] lg:px-8 lg:py-2"
            >
              {{ service.linkText || 'Learn more' }}
            </Button>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact Modal -->
    <Modal v-model="isModalOpen">
      <ContactForm :title="selectedServiceTitle || modalTitle" :buttonText="modalButtonText" />
    </Modal>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  sectionId: {
    type: String,
    default: 'services'
  },
  title: {
    type: String,
    default: 'Services'
  },
  description: {
    type: String,
    default: 'Our work covers the full range of tax and accounting obligations a UAE business faces, along with advisory support for bigger decisions.'
  },
  bgClass: {
    type: String,
    default: 'bg-white'
  },
  items: {
    type: Array,
    required: true
  },
  modalTitle: {
    type: String,
    default: 'Let\'s Discuss Your Tax Needs'
  },
  modalButtonText: {
    type: String,
    default: 'Book a Consultation'
  }
})

const isModalOpen = ref(false)
const selectedServiceTitle = ref('')

const openContactModal = (service) => {
  selectedServiceTitle.value = service?.title ? `Enquire about ${service.title}` : props.modalTitle
  isModalOpen.value = true
}
</script>

<style scoped>
/* Card Base Transitions */
.service-card {
  transition: background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease;
}
.service-card .card-title,
.service-card .card-desc {
  transition: color 0.4s ease;
}
.service-card .bg-chevron-dark,
.service-card .bg-chevron-light {
  transition: opacity 0.4s ease;
}
.service-card :deep(.card-btn) {
  transition: background-color 0.4s ease, color 0.4s ease, box-shadow 0.4s ease, transform 0.3s ease;
}

/* Card 0 Default: Dark Card, Lime Button */
.service-card-0 {
  background-color: #071721;
  color: #ffffff;
}
.service-card-0 .card-title {
  color: #ffffff;
}
.service-card-0 .card-desc {
  color: rgba(255, 255, 255, 0.8);
}
.service-card-0 :deep(.card-btn) {
  background-color: #B6FC4E !important;
  color: #071721 !important;
  box-shadow: 0 4px 12px rgba(182, 252, 78, 0.3) !important;
}
.service-card-0 :deep(.card-btn:hover) {
  background-color: #A4E346 !important;
}
.service-card-0 .bg-chevron-dark {
  opacity: 1;
}
.service-card-0 .bg-chevron-light {
  opacity: 0;
}

/* Card 1 Default: Light Card, Dark Button */
.service-card-1 {
  background-color: #F4F4F4;
  color: #071721;
}
.service-card-1 .card-title {
  color: #071721;
}
.service-card-1 .card-desc {
  color: #475569;
}
.service-card-1 :deep(.card-btn) {
  background-color: #071721 !important;
  color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(11, 22, 44, 0.2) !important;
}
.service-card-1 :deep(.card-btn:hover) {
  background-color: #152238 !important;
}
.service-card-1 .bg-chevron-dark {
  opacity: 0;
}
.service-card-1 .bg-chevron-light {
  opacity: 1;
}

/* ========================================================
   HOVER SWITCH: When Card 1 is hovered, they swap styles!
   Card 0 becomes light with dark button
   Card 1 becomes dark with lime button
   ======================================================== */
.services-grid:has(.service-card-1:hover) .service-card-0 {
  background-color: #F4F4F4;
  color: #071721;
}
.services-grid:has(.service-card-1:hover) .service-card-0 .card-title {
  color: #071721;
}
.services-grid:has(.service-card-1:hover) .service-card-0 .card-desc {
  color: #475569;
}
.services-grid:has(.service-card-1:hover) .service-card-0 :deep(.card-btn) {
  background-color: #071721 !important;
  color: #ffffff !important;
  box-shadow: 0 4px 12px rgba(11, 22, 44, 0.2) !important;
}
.services-grid:has(.service-card-1:hover) .service-card-0 :deep(.card-btn:hover) {
  background-color: #152238 !important;
}
.services-grid:has(.service-card-1:hover) .service-card-0 .bg-chevron-dark {
  opacity: 0;
}
.services-grid:has(.service-card-1:hover) .service-card-0 .bg-chevron-light {
  opacity: 1;
}

.service-card-1:hover {
  background-color: #071721;
  color: #ffffff;
}
.service-card-1:hover .card-title {
  color: #ffffff;
}
.service-card-1:hover .card-desc {
  color: rgba(255, 255, 255, 0.8);
}
.service-card-1:hover :deep(.card-btn) {
  background-color: #B6FC4E !important;
  color: #071721 !important;
  box-shadow: 0 4px 12px rgba(182, 252, 78, 0.3) !important;
}
.service-card-1:hover :deep(.card-btn:hover) {
  background-color: #A4E346 !important;
}
.service-card-1:hover .bg-chevron-dark {
  opacity: 1;
}
.service-card-1:hover .bg-chevron-light {
  opacity: 0;
}
</style>
