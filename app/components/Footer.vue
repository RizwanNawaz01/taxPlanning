<template>
  <footer class="bg-dark text-white pt-12 lg:pt-28 pb-8">
    <div class="container mx-auto px-8 lg:px-10 xl:px-16">
      <!-- Logo Row -->
      <div class="flex items-center gap-10 lg:gap-3 mb-10 lg:mb-20">
        <NuxtLink to="/">
          <NuxtImg :src="companyInfo.logo.src" :alt="companyInfo.logo.alt" class="h-8 lg:h-12 w-auto" />
        </NuxtLink>
        <NuxtImg src="/footer-logo-arrow.webp" alt="" class="h-10 lg:h-8 w-auto lg:hidden" />
      </div>

      <!-- Desktop Links Row -->
      <div class="hidden lg:grid lg:grid-cols-5 gap-8 xl:gap-16 mb-32">
        <!-- Contact Info -->
        <div class="lg:col-span-2 text-white/90 text-[13px] xl:text-lg space-y-5">
          <p class="leading-relaxed">
            <span v-for="(line, index) in companyInfo.address" :key="index" class="block">{{ line }}</span>
          </p>
          <p><a :href="'tel:' + companyInfo.phone" class="hover:text-lime-400 transition-colors">{{ companyInfo.phone }}</a></p>
          <p><a :href="'mailto:' + companyInfo.email" class="hover:text-lime-400 transition-colors">{{ companyInfo.email }}</a></p>

          <!-- Social Icons -->
          <div class="flex items-center gap-3 pt-2">
            <a 
              href="https://www.tiktok.com/@taxplanning.ae" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on TikTok"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-lime-400 text-white hover:text-primary transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-lime-400 hover:-translate-y-0.5"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.66 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.4a8.16 8.16 0 0 0 4.77 1.52V7.48a4.85 4.85 0 0 1-.86-.79z"/>
              </svg>
            </a>

            <a 
              href="https://www.facebook.com/taxplanningae" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on Facebook"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-lime-400 text-white hover:text-primary transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-lime-400 hover:-translate-y-0.5"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a 
              href="https://www.instagram.com/taxplanning.ae" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on Instagram"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-lime-400 text-white hover:text-primary transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-lime-400 hover:-translate-y-0.5"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        
        <!-- Footer Columns -->
        <div v-for="(section, index) in footerLinks" :key="index">
          <ul class="space-y-4 xl:space-y-5 text-white/90 text-[13px] xl:text-lg">
            <li v-for="(link, linkIndex) in section.links" :key="linkIndex" class="flex items-center gap-3">
              <div class="w-1 h-1 bg-white rounded-full shrink-0"></div>
              <NuxtLink :to="link.url" class="hover:text-lime-400 transition-colors">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Mobile Links Row -->
      <div class="flex flex-col lg:hidden gap-10 mb-12">
        <!-- Main Links -->
        <div>
          <ul class="space-y-4 text-white/90 text-lg">
            <li v-for="(link, linkIndex) in mobileLinks" :key="linkIndex" class="flex items-center gap-3">
              <div class="w-1 h-1 bg-white rounded-full shrink-0"></div>
              <NuxtLink :to="link.url" class="hover:text-lime-400 transition-colors">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="text-white/90 text-lg flex flex-col gap-4">
          <h2 class="text-lime-400 font-bold mb-0 text-lg">Registered Office</h2>
          <p class="leading-relaxed">
            <span v-for="(line, index) in companyInfo.address" :key="index" class="block">{{ line }}</span>
          </p>
          <p><a :href="'tel:' + companyInfo.phone" class="hover:text-lime-400 transition-colors">{{ companyInfo.phone }}</a></p>
          <p><a :href="'mailto:' + companyInfo.email" class="hover:text-lime-400 transition-colors">{{ companyInfo.email }}</a></p>

          <!-- Social Icons (Mobile) -->
          <div class="flex items-center gap-3 pt-2">
            <a 
              href="https://www.tiktok.com/@taxplanning.ae" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on TikTok"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-lime-400 text-white hover:text-primary transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-lime-400"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.66 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.4a8.16 8.16 0 0 0 4.77 1.52V7.48a4.85 4.85 0 0 1-.86-.79z"/>
              </svg>
            </a>

            <a 
              href="https://www.facebook.com/taxplanningae" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on Facebook"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-lime-400 text-white hover:text-primary transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-lime-400"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a 
              href="https://www.instagram.com/taxplanning.ae" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on Instagram"
              class="w-10 h-10 rounded-full bg-white/10 hover:bg-lime-400 text-white hover:text-primary transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-lime-400"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
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
import footerData from '~/data/footer.json'

const currentYear = computed(() => new Date().getFullYear())

const companyInfo = footerData.companyInfo
const mobileLinks = footerData.mobileLinks
const footerLinks = footerData.footerLinks
const legalLinks = footerData.legalLinks
</script>
