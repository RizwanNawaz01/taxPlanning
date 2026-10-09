<template>
  <footer class="bg-[#0B121A] text-white pt-12 lg:pt-20 pb-8">
    <div class="container mx-auto px-8 lg:px-10 xl:px-16">
      <!-- Logo Row -->
      <div class="flex items-center gap-10 lg:gap-3 mb-10 lg:mb-16">
        <NuxtLink to="/">
          <NuxtImg :src="companyInfo.logo.src" :alt="companyInfo.logo.alt" class="h-8 lg:h-10 w-auto" />
        </NuxtLink>
        <NuxtImg src="/footer-logo-arrow.png" alt="" class="h-10 lg:h-8 w-auto lg:hidden" />
      </div>

      <!-- Desktop Links Row -->
      <div class="hidden lg:grid grid-cols-4 gap-8 xl:gap-16 mb-20">
        <!-- Contact Info -->
        <div class="text-white/90 text-[13px] xl:text-[14px] space-y-5">
          <p class="leading-relaxed">
            <span v-for="(line, index) in companyInfo.address" :key="index" class="block">{{ line }}</span>
          </p>
          <p><a :href="'tel:' + companyInfo.phone" class="hover:text-lime-400 transition-colors">{{ companyInfo.phone }}</a></p>
          <p><a :href="'mailto:' + companyInfo.email" class="hover:text-lime-400 transition-colors">{{ companyInfo.email }}</a></p>
        </div>
        
        <!-- Footer Columns -->
        <div v-for="(section, index) in footerLinks" :key="index">
          <ul class="space-y-4 xl:space-y-5 text-white/90 text-[13px] xl:text-[14px]">
            <li v-for="(link, linkIndex) in section.links" :key="linkIndex" class="flex items-center gap-3">
              <div class="w-1 h-1 bg-white rounded-full shrink-0"></div>
              <a :href="link.url" class="hover:text-lime-400 transition-colors">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Mobile Links Row -->
      <div class="flex flex-col lg:hidden gap-10 mb-12">
        <!-- Main Links -->
        <div>
          <ul class="space-y-4 text-white/90 text-[14px]">
            <li v-for="(link, linkIndex) in mobileLinks" :key="linkIndex" class="flex items-center gap-3">
              <div class="w-1 h-1 bg-white rounded-full shrink-0"></div>
              <a :href="link.url" class="hover:text-lime-400 transition-colors">{{ link.text }}</a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="text-white/90 text-[14px] flex flex-col gap-4">
          <h4 class="text-lime-400 font-bold mb-0">Registered Office</h4>
          <p class="leading-relaxed">
            <span v-for="(line, index) in companyInfo.address" :key="index" class="block">{{ line }}</span>
          </p>
          <p><a :href="'tel:' + companyInfo.phone" class="hover:text-lime-400 transition-colors">{{ companyInfo.phone }}</a></p>
          <p><a :href="'mailto:' + companyInfo.email" class="hover:text-lime-400 transition-colors">{{ companyInfo.email }}</a></p>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-5 lg:pt-6 border-t border-white/10 flex flex-row-reverse lg:flex-row justify-between items-center gap-2 lg:gap-4 text-white/60 text-[11px] lg:text-[13px]">
        <p class="whitespace-nowrap">&copy;{{ currentYear }} taxplanning.ae</p>
        <div class="flex items-center gap-2 lg:gap-5">
          <a :href="legalLinks[0].url" class="hover:text-white transition-colors whitespace-nowrap">{{ legalLinks[0].text }}</a>
          <span class="w-px h-3 bg-white/20 hidden lg:block"></span>
          <span class="text-white/20 lg:hidden">|</span>
          <a :href="legalLinks[1].url" class="hover:text-white transition-colors whitespace-nowrap">{{ legalLinks[1].text }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const companyInfo = {
  logo: {
    src: '/logo.png',
    alt: 'taxplanning.ae'
  },
  address: [
    'Level 4, Burlington Tower, Business Bay,',
    'Dubai'
  ],
  phone: '+971 800 469',
  email: 'info@taxplanning.ae'
}

const mobileLinks = [
  { text: 'Services', url: '#' },
  { text: 'Who we work with', url: '#' },
  { text: 'Our approach', url: '#' },
  { text: 'Partners', url: '#' },
  { text: 'About us', url: '#' }
]

const footerLinks = [
  {
    links: [
      { text: 'Services', url: '#' },
      { text: 'Who we work with', url: '#' },
      { text: 'Our approach', url: '#' },
      { text: 'Partners', url: '#' },
      { text: 'About us', url: '#' }
    ]
  },
  {
    links: [
      { text: 'Services', url: '#' },
      { text: 'Who we work with', url: '#' },
      { text: 'Our approach', url: '#' },
      { text: 'Partners', url: '#' },
      { text: 'About us', url: '#' }
    ]
  },
  {
    links: [
      { text: 'Services', url: '#' },
      { text: 'Who we work with', url: '#' },
      { text: 'Our approach', url: '#' },
      { text: 'Partners', url: '#' },
      { text: 'About us', url: '#' }
    ]
  }
]

const legalLinks = [
  { text: 'Terms and conditions', url: '#' },
  { text: 'Privacy Policy', url: '#' }
]
</script>
