<template>
  <section id="packages-pricing" class="py-16 lg:py-24 bg-white scroll-mt-24">
    <div class="container mx-auto px-7 xl:px-16 2xl:px-12">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-10 lg:mb-14" data-aos="blur-in">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-4 lg:mb-5 leading-tight">
          Which Package Fits Your Business
        </h2>
        <p class="text-slate-600 text-sm md:text-base lg:text-[17px] leading-relaxed">
          Your transaction volume and current tax status point to a starting tier. Record condition, unusual transaction types, or work outside the standard scope can still change the final package or require separate pricing.
        </p>
      </div>

      <!-- Transaction Volume Tabs -->
      <div class="flex justify-center mb-12 lg:mb-16" data-aos="blur-in" data-aos-delay="150">
        <div class="w-full max-w-full overflow-x-auto no-scrollbar py-2 px-4 flex justify-start md:justify-center">
          <div class="inline-flex items-center bg-[#FAF4F2] rounded-full p-1 md:p-1.5 shrink-0 select-none">
            <button
              v-for="tier in tiers"
              :key="tier.id"
              type="button"
              @click="selectTier(tier.id, $event)"
              class="whitespace-nowrap px-5 sm:px-6 lg:px-8 py-2.5 lg:py-3 rounded-full text-sm md:text-[15px] font-medium transition-all duration-300"
              :class="selectedTier === tier.id 
                ? 'bg-primary text-white font-semibold shadow-sm' 
                : 'text-slate-600 hover:text-primary bg-transparent'"
            >
              {{ tier.label }}
            </button>
          </div>
        </div>
      </div>

      <!-- Package Cards Grid -->
      <div class="grid lg:grid-cols-3 gap-8 items-stretch mb-12 lg:mb-16" data-aos="blur-in" data-aos-delay="250">
        <div
          v-for="pkg in packages"
          :key="pkg.id"
          class="flex flex-col rounded-3xl transition-all duration-300 relative group"
          :class="[
            pkg.isPopular 
              ? 'border-2 border-lime-400 shadow-xl bg-white lg:-translate-y-2' 
              : 'border border-slate-200/80 shadow-md bg-white hover:shadow-xl hover:-translate-y-1'
          ]"
        >
          <!-- Most Popular Badge -->
          <div v-if="pkg.isPopular" class="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <span class="bg-lime-400 text-primary font-bold text-xs px-4 py-1 rounded-full shadow-sm uppercase tracking-wider">
              Most Popular
            </span>
          </div>

          <!-- Card Header -->
          <div 
            :class="[pkg.headerBg, 'pt-6 pb-5 px-6 rounded-t-[22px] text-center border-b border-black/5 transition-colors']"
          >
            <h3 class="text-xl lg:text-[22px] font-bold text-primary">
              {{ pkg.name }}
            </h3>
          </div>

          <!-- Card Body -->
          <div class="p-6 lg:p-8 flex flex-col flex-1 justify-between bg-white rounded-b-3xl">
            <div>
              <!-- Price Display -->
              <div class="text-center mb-6 pt-2">
                <span class="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">
                  {{ pkg.price }}
                </span>
                <span class="text-slate-600 font-medium text-base ml-1">
                  {{ pkg.period }}
                </span>
              </div>

              <!-- Includes Note -->
              <div v-if="pkg.includesNote" class="mb-5 pb-1">
                <p class="text-xs md:text-[13px] font-semibold text-slate-900 leading-snug">
                  {{ pkg.includesNote }}
                </p>
              </div>

              <!-- Features List -->
              <ul class="space-y-3.5 text-left mb-6">
                <li
                  v-for="(feature, idx) in pkg.features"
                  :key="idx"
                  class="flex items-start gap-3 text-slate-700 text-[13.5px] lg:text-[14px] leading-snug"
                >
                  <svg 
                    class="w-4 h-4 text-lime-500 shrink-0 mt-0.5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fill-rule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clip-rule="evenodd" 
                    />
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Action Button Under Cards -->
      <div class="text-center" data-aos="blur-in" data-aos-delay="350">
        <button
          type="button"
          @click="$emit('selectPackage', { tier: selectedTier, packageName: 'General Package Enquiry' })"
          class="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 hover:-translate-y-1 text-base md:text-lg bg-primary text-white hover:bg-secondary shadow-[0_4px_12px_rgba(11,22,44,0.2)] px-10 py-3.5"
        >
          Get Package Advice
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

defineEmits(['selectPackage'])

const selectedTier = ref('25')

const tiers = [
  { id: '25', label: '25 Transactions' },
  { id: '50', label: '50 Transactions' },
  { id: '75', label: '75 Transactions' },
  { id: '100', label: '100 Transactions' }
]

const selectTier = (id, event) => {
  selectedTier.value = id
  if (event?.currentTarget && typeof event.currentTarget.scrollIntoView === 'function') {
    event.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }
}

const packages = computed(() => [
  {
    id: 'essential-care',
    name: 'Essential Care',
    headerBg: 'bg-[#FAF4F2]',
    isPopular: false,
    price: selectedTier.value === '25' ? 'AED 5,000' :
           selectedTier.value === '50' ? 'AED 7,500' :
           selectedTier.value === '75' ? 'AED 9,500' : 'AED 11,500',
    period: '/month',
    includesNote: null,
    features: [
      `Up to ${selectedTier.value} transactions/month`,
      'Chart of Accounts',
      'Income Statement',
      'Balance Sheet',
      'Cash Flow Statement',
      'Bank Reconciliation',
      'VAT Assessment'
    ]
  },
  {
    id: 'business-advantage',
    name: 'Business Advantage',
    headerBg: 'bg-[#EBFDC8]',
    isPopular: true,
    price: selectedTier.value === '25' ? 'AED 8,000' :
           selectedTier.value === '50' ? 'AED 11,000' :
           selectedTier.value === '75' ? 'AED 14,000' : 'AED 17,000',
    period: '/month',
    includesNote: 'This Package includes everything in Essential Care, plus:',
    features: [
      `Up to ${selectedTier.value} transactions/month`,
      'Chart of Accounts',
      'Income Statement',
      'Balance Sheet',
      'Cash Flow Statement',
      'Bank Reconciliation',
      'VAT Assessment',
      'Corporate Tax Return filing (100 AED fee)',
      'Quarterly VAT Return filing (25 AED fee)',
      'Tax Advisory (1/2 hr/quarter)'
    ]
  },
  {
    id: 'ultimate-protection',
    name: 'Ultimate Protection',
    headerBg: 'bg-[#FAF4F2]',
    isPopular: false,
    price: selectedTier.value === '25' ? 'AED 9,000' :
           selectedTier.value === '50' ? 'AED 13,000' :
           selectedTier.value === '75' ? 'AED 17,000' : 'AED 21,000',
    period: '/month',
    includesNote: 'This Package includes everything in Business Advantage, plus:',
    features: [
      `Up to ${selectedTier.value} transactions/month`,
      'Chart of Accounts',
      'Income Statement',
      'Balance Sheet',
      'Cash Flow Statement',
      'Bank Reconciliation',
      'VAT Assessment',
      'Corporate Tax Return filing',
      'Quarterly VAT Return filing',
      'Tax Advisory (1/2 hr/quarter)',
      'Audit Support (200 AED/hour)'
    ]
  }
])
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
