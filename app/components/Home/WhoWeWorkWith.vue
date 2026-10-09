<template>
  <section id="who-we-work-with" class="pt-0 lg:pt-12 pb-20 lg:pb-28 bg-white overflow-hidden relative">
    <div class="container mx-auto px-7 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
      
      <!-- Left Column -->
      <div class="relative flex flex-col items-center lg:items-start pt-0">
        <!-- Image -->
        <img src="/Home/who-we-work.png" alt="Who We Work With" class="relative z-10 w-[500px] max-w-[300px] md:w-[100%]  lg:max-w-[340px] xl:max-w-full -mb-[1px] object-contain" data-aos="fade-right" />
        
        <!-- Text Content -->
        <div class="relative z-0 w-full flex flex-col items-center lg:items-start">
          <!-- Background Shape (Desktop) -->
          <div class="hidden lg:block absolute top-0 bottom-0 right-[-1rem] lg:right-0 w-[150vw] bg-primary rounded-r-[3rem] lg:rounded-tr-[10rem] lg:rounded-br-[10rem] z-0"></div>
          
          <div class="relative z-20 w-full bg-[#0C151E] lg:bg-transparent rounded-3xl lg:rounded-none px-6 py-10 lg:px-12 lg:pb-12 lg:pt-16 text-white text-center lg:text-left flex flex-col items-center lg:items-start shadow-xl lg:shadow-none" data-aos="fade-up">
            <h2 class="text-[24px] lg:text-[2.5rem] font-semibold mb-3 leading-tight">Who We Work With</h2>
            <p class="text-white/80 mb-0 lg:mb-5 text-[13px] lg:text-[16px] leading-relaxed max-w-sm lg:max-w-md mx-auto lg:mx-0">
              From a single company to an international group, we work across the structures and industries that make up the UAE economy.
            </p>
            <Button @click="isModalOpen = true" class="hidden lg:inline-flex mt-6 lg:mt-0">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>

      <!-- Right Column (Accordion List) -->
      <div class="flex flex-col justify-center lg:mt-0">
        <div 
          v-for="(item, index) in items" 
          :key="item.id"
          class="flex gap-4 lg:gap-8 py-6 lg:py-8 cursor-pointer lg:cursor-auto"
          :class="[index !== items.length - 1 ? 'border-b border-gray-200' : '']"
          @click="toggleAccordion(index)"
          data-aos="fade-left"
          :data-aos-delay="index * 100"
        >
          <span class="text-gray-400 font-medium text-[12px] lg:text-sm pt-1 w-5 shrink-0">{{ item.id }}</span>
          <div class="flex-1">
            <div class="flex justify-between items-start gap-4">
              <h3 class="text-[17px] lg:text-[28px] font-bold text-black lg:text-primary mb-0 lg:mb-3 leading-tight max-w-xs lg:max-w-lg pr-4 lg:pr-0">{{ item.title }}</h3>
              <!-- Caret (Mobile only) -->
              <svg class="lg:hidden w-5 h-5 shrink-0 transition-transform duration-300 text-black mt-1" :class="{'rotate-180': activeIndex === index}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <!-- Description -->
            <p 
              class="text-gray-600 text-[14px] lg:text-base leading-relaxed mt-3 lg:mt-0"
              :class="{'hidden lg:block': activeIndex !== index, 'block': activeIndex === index}"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
        
        <!-- Mobile Bottom CTA -->
        <div class="flex justify-center mt-10 lg:hidden">
          <a href="#" @click.prevent="isModalOpen = true" class="px-8 py-3 text-[14px] font-semibold bg-lime-400 text-[#0C151E] rounded-full hover:bg-lime-500 transition-colors shadow-lg">
            Book a Consultation
          </a>
        </div>
      </div>
      
    </div>

    <!-- Modal Popup for Contact Form -->
    <Modal v-model="isModalOpen">
      <ContactForm title="Who We Work With" buttonText="Book a Consultation" />
    </Modal>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)
const activeIndex = ref(null)

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const items = [
  {
    id: '01',
    title: 'Established UAE SMEs & mid-market companies',
    description: 'Small businesses, growing companies, and established mid-market enterprises across the UAE managing ongoing VAT and Corporate Tax obligations, alongside decisions on growth, ownership, or bringing in outside investment.'
  },
  {
    id: '02',
    title: 'International Companies Operating or Expanding into the UAE',
    description: 'Multinational businesses, foreign subsidiaries, and international companies setting up in the UAE or already trading here, working through how UAE tax rules apply alongside their existing structure.'
  },
  {
    id: '03',
    title: 'UAE Business Groups & Holding Companies',
    description: 'Corporates, holding companies, and multi-entity groups managing tax across more than one company, where structuring matters as much as filing.'
  },
  {
    id: '04',
    title: 'Every Industry, Every Structure',
    description: 'Mainland companies, free zone entities, startups, and long-established businesses. We work across every industry, including retail, real estate, hospitality, trading, professional services, technology, and manufacturing.'
  }
]
</script>
