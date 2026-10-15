<template>
  <div class="relative min-h-[calc(100vh-120px)] pt-32 sm:pt-40 lg:pt-48 pb-20 lg:pb-28 bg-primary overflow-hidden flex flex-col justify-center">
    <!-- Ambient Glowing Gradients -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Top lime glow -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[500px] bg-lime-400/[0.08] rounded-full blur-[140px]"></div>
      <!-- Secondary cyan/blue glow -->
      <div class="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-sky-500/[0.06] rounded-full blur-[150px]"></div>
      <!-- Dark slate overlay radial -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(182,252,78,0.12),rgba(7,23,33,0.95)_70%)]"></div>
      
      <!-- Subtle Architectural Grid Background -->
      <div class="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </div>

    <div class="container mx-auto px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Status Pill Badge -->
        <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-8 shadow-inner">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-400"></span>
          </span>
          <span class="text-xs sm:text-sm font-semibold tracking-wider uppercase text-lime-400">
            {{ is500 ? '500 · Server Error' : '404 · Page Not Found' }}
          </span>
        </div>

        <!-- Hero 404 Graphic Display -->
        <div class="relative select-none my-2 sm:my-4">
          <!-- Ambient Glow behind digits -->
          <div class="absolute inset-0 flex items-center justify-center -z-10">
            <div class="w-72 h-32 bg-lime-accent/20 blur-3xl rounded-full"></div>
          </div>

          <!-- Numbers -->
          <div class="flex items-center justify-center gap-2 sm:gap-4">
            <span class="text-7xl sm:text-9xl lg:text-[11rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
              {{ is500 ? '5' : '4' }}
            </span>

            <!-- Center Decorative Compass / Ledger Shield -->
            <div class="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 mx-1 sm:mx-2 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl p-4 sm:p-6 group hover:border-lime-accent/50 transition-colors">
              <div class="absolute inset-0 bg-lime-400/10 rounded-2xl sm:rounded-3xl blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <!-- Icon for 404: Compass / Document search -->
              <svg v-if="!is500" class="w-full h-full text-lime-400 relative z-10 transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>

              <!-- Icon for 500: Server alert -->
              <svg v-else class="w-full h-full text-lime-400 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>

            <span class="text-7xl sm:text-9xl lg:text-[11rem] font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
              {{ is500 ? '0' : '4' }}
            </span>
          </div>
        </div>

        <!-- Main Heading & Subtitle -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mt-6 mb-4">
          {{ is500 ? 'Unexpected Server Interruption' : 'Ledger Entry Not Found' }}
        </h1>

        <p class="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-8">
          <template v-if="!is500">
            The page you are looking for might have been recalculated, relocated, or doesn't exist in our UAE tax advisory system. Let’s get your business back on compliant ground.
          </template>
          <template v-else>
            Our tax computation engines encountered a temporary glitch. Please try refreshing or return to the main dashboard.
          </template>
        </p>

        <!-- Quick Interactive Search / Quick Finder -->
        <div class="max-w-xl mx-auto mb-10 text-left">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input 
              v-model="searchQuery"
              type="text"
              placeholder="Search services (e.g. VAT, Corporate Tax, Packages)..."
              class="w-full pl-11 pr-4 py-3.5 bg-dark-card/80 border border-white/15 rounded-2xl text-white placeholder-white/40 text-sm sm:text-base focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all shadow-lg backdrop-blur-md"
            />
            <button 
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute inset-y-0 right-0 pr-4 flex items-center text-white/50 hover:text-white"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Live Filtered Results Dropdown -->
          <div 
            v-if="searchQuery.trim() && filteredLinks.length > 0"
            class="mt-2 bg-dark-card border border-white/15 rounded-2xl p-2 shadow-2xl backdrop-blur-xl divide-y divide-white/5"
          >
            <button 
              v-for="item in filteredLinks" 
              :key="item.href"
              @click="handleNavigate(item.href)"
              class="w-full px-4 py-3 text-left hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between group"
            >
              <div>
                <p class="text-white font-medium text-sm group-hover:text-lime-400 transition-colors">{{ item.title }}</p>
                <p class="text-white/60 text-xs">{{ item.desc }}</p>
              </div>
              <span class="text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity">
                &rarr;
              </span>
            </button>
          </div>
          <div 
            v-else-if="searchQuery.trim() && filteredLinks.length === 0"
            class="mt-2 bg-dark-card/90 border border-white/15 rounded-2xl p-4 text-center text-white/60 text-sm"
          >
            No matches found for "{{ searchQuery }}". Try browsing our popular destinations below.
          </div>

          <!-- Quick Topic Pills -->
          <div class="flex flex-wrap items-center justify-center gap-2 mt-3.5">
            <span class="text-xs text-white/50">Suggestions:</span>
            <button 
              v-for="tag in quickTags" 
              :key="tag.label"
              @click="handleNavigate(tag.href)"
              class="text-xs px-3 py-1 rounded-full bg-white/[0.04] hover:bg-lime-400/15 border border-white/10 hover:border-lime-400/40 text-white/80 hover:text-lime-400 transition-all"
            >
              {{ tag.label }}
            </button>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-4 mb-16 sm:mb-20">
          <!-- Primary Back to Home Button -->
          <button 
            @click="handleNavigate('/')"
            class="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold bg-lime-400 text-primary hover:bg-lime-500 shadow-[0_4px_20px_rgba(182,252,78,0.35)] hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base select-none cursor-pointer"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>Return to Homepage</span>
          </button>

          <!-- Secondary Explore Services Button -->
          <button 
            @click="handleNavigate('/services')"
            class="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white bg-white/5 border border-white/15 hover:border-lime-accent/60 hover:bg-lime-accent/10 hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base select-none cursor-pointer"
          >
            <svg class="w-4 h-4 text-lime-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span>Explore Services</span>
          </button>

          <!-- Contact Advisor Button -->
          <button 
            @click="handleNavigate('/contact')"
            class="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-white/90 bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base select-none cursor-pointer"
          >
            <svg class="w-4 h-4 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Contact Advisory Desk</span>
          </button>
        </div>

        <!-- Popular Destinations Grid -->
        <div class="text-left mt-8">
          <div class="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
            <div>
              <h2 class="text-lg sm:text-xl font-bold text-white tracking-wide">Popular Destinations</h2>
              <p class="text-xs sm:text-sm text-white/60">Navigate directly to our key UAE tax advisory solutions</p>
            </div>
            <button 
              @click="handleNavigate('/services')"
              class="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:text-lime-300 transition-colors"
            >
              <span>View All Solutions</span>
              <span>&rarr;</span>
            </button>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div 
              v-for="(card, index) in destinations" 
              :key="index"
              @click="handleNavigate(card.href)"
              class="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-lime-400/40 hover:bg-white/[0.07] transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1 flex flex-col justify-between"
            >
              <!-- Ambient card hover glow -->
              <div class="absolute inset-0 bg-lime-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div>
                <!-- Top row: Icon + Tag -->
                <div class="flex items-center justify-between mb-4">
                  <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 group-hover:bg-lime-400 group-hover:text-primary transition-colors">
                    <component :is="card.icon" class="w-5 h-5" />
                  </div>
                  <span class="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/5 text-lime-400 border border-white/10">
                    {{ card.tag }}
                  </span>
                </div>

                <!-- Title & Description -->
                <h3 class="text-base font-bold text-white group-hover:text-lime-400 transition-colors mb-2">
                  {{ card.title }}
                </h3>
                <p class="text-xs sm:text-sm text-white/65 leading-relaxed">
                  {{ card.desc }}
                </p>
              </div>

              <!-- Bottom Link -->
              <div class="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-white/80 group-hover:text-lime-400 transition-colors">
                <span>Learn more</span>
                <span class="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Emergency / Direct Support Strip -->
        <div class="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-dark-header/80 via-dark-card to-dark-header/80 border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div class="text-left flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 shrink-0">
              <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-white font-bold text-base sm:text-lg">Need Immediate FTA Tax Compliance Assistance?</h4>
              <p class="text-white/60 text-xs sm:text-sm">Speak with our senior Dubai advisors directly for urgent deadlines or filings.</p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 shrink-0">
            <a 
              href="tel:+97145534844"
              class="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2"
            >
              <span>+971 4 553 4844</span>
            </a>
            <a 
              href="mailto:admin@taxplanning.ae"
              class="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white text-xs sm:text-sm font-medium transition-colors"
            >
              admin@taxplanning.ae
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, h } from 'vue'

const props = defineProps({
  error: {
    type: Object,
    default: () => ({})
  },
  isErrorPage: {
    type: Boolean,
    default: false
  }
})

const is500 = computed(() => {
  return props.error?.statusCode === 500
})

const searchQuery = ref('')

const handleNavigate = (path) => {
  if (props.isErrorPage && typeof clearError === 'function') {
    clearError({ redirect: path })
  } else {
    navigateTo(path)
  }
}

// Icons as render functions for clean lightweight embedding
const ShieldIcon = () => h('svg', {
  viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
])

const CalculatorIcon = () => h('svg', {
  viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
}, [
  h('rect', { x: '4', y: '2', width: '16', height: '20', rx: '2' }),
  h('line', { x1: '8', y1: '6', x2: '16', y2: '6' }),
  h('line', { x1: '16', y1: '14', x2: '16', y2: '18' }),
  h('path', { d: 'M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01' })
])

const PackageIcon = () => h('svg', {
  viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
}, [
  h('path', { d: 'm7.5 4.27 9 5.15' }),
  h('polyline', { points: '3.29 7 12 12 20.71 7' }),
  h('line', { x1: '12', y1: '22', x2: '12', y2: '12' }),
  h('path', { d: 'M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z' })
])

const UserCheckIcon = () => h('svg', {
  viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor',
  'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
}, [
  h('path', { d: 'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }),
  h('circle', { cx: '8.5', cy: '7', r: '4' }),
  h('polyline', { points: '17 11 19 13 23 9' })
])

const destinations = [
  {
    title: 'Corporate Tax Advisory',
    tag: '9% UAE Tax',
    desc: 'Registration, impact assessment, small business relief, and corporate tax returns.',
    href: '/services',
    icon: ShieldIcon
  },
  {
    title: 'VAT Services & Filing',
    tag: 'FTA Compliance',
    desc: 'VAT registration, tax groups, return submissions, voluntary disclosure, and audits.',
    href: '/services',
    icon: CalculatorIcon
  },
  {
    title: 'Compliance Packages',
    tag: 'Fixed Plans',
    desc: 'All-inclusive monthly and annual retainers tailored for UAE mainland and free zones.',
    href: '/packages',
    icon: PackageIcon
  },
  {
    title: 'Partner with Us',
    tag: 'Advisory Network',
    desc: 'Collaborate with qualified CPAs and tax attorneys for strategic client solutions.',
    href: '/partner',
    icon: UserCheckIcon
  }
]

const quickTags = [
  { label: 'Corporate Tax', href: '/services' },
  { label: 'VAT Returns', href: '/services' },
  { label: 'Retainer Packages', href: '/packages' },
  { label: 'About Our Firm', href: '/about' },
  { label: 'Contact Advisors', href: '/contact' }
]

const searchableItems = [
  { title: 'Corporate Tax Advisory & Filing', desc: 'UAE 9% Corporate Tax compliance and registration', href: '/services' },
  { title: 'VAT Registration & Filing', desc: '5% Value Added Tax submission and FTA audits', href: '/services' },
  { title: 'Tax Planning Packages', desc: 'Fixed-fee comprehensive compliance packages', href: '/packages' },
  { title: 'Partner Program', desc: 'Referral & co-advisory network for UAE professionals', href: '/partner' },
  { title: 'About taxplanning.ae', desc: 'Learn about our Dubai-based senior tax team & credentials', href: '/about' },
  { title: 'Contact Advisory Desk', desc: 'Book a consultation or call our Business Bay office', href: '/contact' },
  { title: 'Tax & Regulatory Insights', desc: 'Latest articles on UAE tax laws and FTA deadlines', href: '/blogs' }
]

const filteredLinks = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return []
  return searchableItems.filter(item => 
    item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
  )
})
</script>
