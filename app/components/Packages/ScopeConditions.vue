<template>
  <section class="py-12 lg:py-6 bg-white">
    <div class="container mx-auto px-7 xl:px-16 2xl:px-12">
      <!-- Section Header -->
      <div class="text-center max-w-4xl mx-auto mb-10 lg:mb-14" data-aos="blur-in">
        <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-primary leading-snug">
          The following may require a higher tier or a separate scope, confirmed in writing before work begins:
        </h2>
      </div>

      <!-- 4 Cards Grid -->
      <div 
        class="grid md:grid-cols-2 gap-6 lg:gap-8" 
        data-aos="blur-in" 
        data-aos-delay="200"
        @mouseleave="activeIndex = 0"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          @mouseenter="activeIndex = index"
          @click="activeIndex = index"
          class="p-7 lg:p-12 rounded-2xl lg:rounded-3xl transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none"
          :class="[
            activeIndex === index 
              ? 'bg-lime-400 shadow-md' 
              : 'bg-surface-subtle shadow-none'
          ]"
        >
          <h3 class="text-lg lg:text-2xl font-bold text-primary mb-4 lg:mb-5">
            {{ card.title }}
          </h3>
          <ul class="space-y-1">
            <li
              v-for="(item, itemIndex) in card.items"
              :key="itemIndex"
              class="flex items-start gap-2.5 text-primary text-[13.5px] lg:text-[14.5px] leading-relaxed font-normal"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(0)

const cards = [
  {
    title: 'Records and setup',
    items: [
      'Historical backdated or incomplete bookkeeping',
      'Opening balance correction or prior-year accounts',
      'Migration from an initial accounting system'
    ]
  },
  {
    title: 'Business structure and reporting',
    items: [
      'Multiple legal entities, branches, or tax registrations',
      'Payroll processing, pay slips, WPS files, or HR administration',
      'Inventory, landed cost, or warehouse accounting',
      'Detailed monthly management accounts, forecasts, or board reports'
    ]
  },
  {
    title: 'VAT and specialist tax work',
    items: [
      'Monthly VAT filing periods',
      'Voluntary disclosures, VAT refunds, or complex VAT corrections',
      'Transfer pricing documentation or specialist tax advice',
      'Qualifying Free Zone Person analysis beyond the standard scope'
    ]
  },
  {
    title: 'Audit and third-party costs',
    items: [
      'External audit fees or independent audit services',
      'Detailed audit support or audit query management',
      'Government, authority, or third-party charges'
    ]
  }
]
</script>
