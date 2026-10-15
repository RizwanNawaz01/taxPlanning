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
      <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div 
          v-for="(service, index) in items" 
          :key="index" 
          :class="['p-6 lg:px-14 lg:pt-24 lg:pb-24 rounded-2xl lg:rounded-[2rem] relative overflow-hidden flex flex-col justify-center', service.cardClass || 'bg-surface-muted text-primary']" 
          data-aos="fade-up" 
          :data-aos-delay="index * 150"
        >
          <!-- Background Pattern/Image -->
          <NuxtImg 
            v-if="service.bgImage" 
            :src="service.bgImage" 
            alt="" 
            format="webp" 
            loading="lazy"
            class="absolute inset-0 w-full h-full object-cover object-right pointer-events-none" 
          />

          <div class="relative z-10">
            <h3 class="text-xl lg:text-3xl font-bold mb-2 lg:mb-3">{{ service.title }}</h3>
            <p 
              class="mb-5 lg:mb-8 text-[11px] lg:text-base leading-snug lg:leading-normal pr-4 lg:pr-0 max-w-full" 
              :class="service.descClass || 'text-black '" 
              v-html="service.description"
            ></p>
            
            <Button 
              :variant="service.btnClass && service.btnClass.includes('lime') ? 'primary' : 'dark'"
              @click.prevent="openContactModal(service)" 
              size="sm"
              class="lg:text-[15px] lg:px-8 lg:py-2"
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
