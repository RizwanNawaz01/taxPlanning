<template>
  <section id="services" class="py-16 lg:py-24 bg-white px-5">
    <div class="container px-7">
      <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 lg:mb-16 gap-3 lg:gap-6" data-aos="fade-up">
        <h2 class="text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary">Services</h2>
        <p class="text-black/90 max-w-md text-[15px] lg:text-lg xl:text-lg leading-snug">Our work covers the full range of tax and accounting obligations a UAE business faces, along with advisory support for bigger decisions.</p>
      </div>
      <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div v-for="(service, index) in services" :key="index" :class="['p-6 lg:px-12 lg:pt-24 lg:pb-24 rounded-2xl lg:rounded-[2rem] relative overflow-hidden flex flex-col justify-center', service.cardClass]" data-aos="fade-up" :data-aos-delay="index * 150">
          <img :src="service.bgImage" alt="" class="absolute inset-0 w-full h-full object-cover object-right pointer-events-none" />
          <div class="relative z-10">
            <h3 class="text-xl lg:text-3xl font-bold mb-2 lg:mb-3">{{ service.title }}</h3>
            <p class="mb-5 lg:mb-8 text-[11px] lg:text-base leading-snug lg:leading-normal pr-4 lg:pr-0 max-w-full lg:max-w-[85%]" :class="service.descClass" v-html="service.description"></p>
            <button type="button" @click.prevent="isModalOpen = true" :class="['inline-block px-4 py-1.5 lg:px-12 lg:py-3 text-[10px] lg:text-base rounded-full font-semibold hover:-translate-y-1 transition-all', service.btnClass]">{{ service.linkText }}</button>
          </div>
        </div>
      </div>
    </div>

    <Modal v-model="isModalOpen">
      <ContactForm />
    </Modal>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isModalOpen = ref(false)

const services = [
  {
    title: 'Tax & Compliance',
    description: 'VAT Registration and Filing, VAT Deregistration, Corporate Tax Registration and Filing, Corporate Tax Deregistration, Tax Residency Certificates, Accounting and Bookkeeping, Financial Reporting, Audit, AML Compliance, and Payroll.',
    link: '#',
    linkText: 'Learn more',
    cardClass: 'bg-primary text-white',
    descClass: 'text-white/80',
    btnClass: 'bg-lime-400 text-primary hover:bg-lime-500',
    bgImage: '/Home/services-left.png'
  },
  {
    title: 'Strategic Advisory',
    description: 'International Tax Planning, Residence and Domicile <br class="hidden lg:block">advice, Corporate Tax and Substance, Corporate Tax Consultation, and tax advisory for structuring and  <br class="hidden lg:block">transactions.',
    link: '#',
    linkText: 'Learn more',
    cardClass: 'bg-[#F4F4F4] text-primary',
    descClass: 'text-slate-600',
    btnClass: 'bg-primary text-white hover:bg-secondary',
    bgImage: '/Home/services-right.png'
  }
]
</script>
