<template>
  <header class="fixed top-0 left-0 right-0 z-50 pt-4 lg:pt-8 px-4 lg:px-8 transition-all duration-300">
    <div 
      class="container mx-auto flex justify-between items-center backdrop-blur-md rounded-full px-4 lg:px-8 shadow-lg relative z-50 transition-all duration-500 border"
      :class="isScrolled ? 'bg-[#0F172A]/95 border-white/10 py-3 lg:py-3.5' : 'bg-[#1E2E45]/50 border-white/15 py-4 lg:py-5'"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="pl-2 lg:pl-0" @click="isMobileMenuOpen = false">
        <NuxtImg :src="logo.src" :alt="logo.alt" class="h-6 md:h-10 w-auto" />
      </NuxtLink>

      <!-- Right Side (Nav + Button) -->
      <div class="flex items-center gap-5 lg:gap-12">
        <!-- Navigation -->
        <nav class="hidden lg:block">
          <ul class="flex gap-8 text-white/90 font-medium text-[15px]">
            <li v-for="(link, index) in navLinks" :key="index">
              <NuxtLink :to="link.href" class="hover:text-lime-400 transition-colors">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- CTA Button (Desktop & Icon on Mobile) -->
        <a :href="ctaButton.href" aria-label="Call Us" class="flex items-center justify-center text-white font-semibold text-[15px] lg:border lg:border-[#8EE62B]/60 lg:px-5 lg:py-2.5 rounded-full hover:bg-[#8EE62B]/10 transition-colors relative z-50">
          <svg class="w-[20px] h-[20px] lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="none" stroke="#8EE62B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span class="hidden lg:inline ml-2">{{ ctaButton.label }}</span>
        </a>

        <!-- Hamburger Menu Toggle (Mobile) -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/20 text-white/90 hover:bg-white/10 transition-colors relative z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div class="w-4 h-3.5 relative flex flex-col justify-between">
            <span class="w-full h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center" :class="{ 'rotate-45 translate-y-[6.25px]': isMobileMenuOpen }"></span>
            <span class="w-full h-[1.5px] bg-current rounded-full transition-all duration-200" :class="{ 'opacity-0': isMobileMenuOpen }"></span>
            <span class="w-full h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center" :class="{ '-rotate-45 -translate-y-[6.25px]': isMobileMenuOpen }"></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Card -->
    <Transition name="menu-slide">
      <div v-if="isMobileMenuOpen" class="container mx-auto mt-3 bg-[#1E2E45]/85 backdrop-blur-2xl rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-white/10 lg:hidden flex flex-col relative z-40 max-h-[calc(100vh-100px)] overflow-y-auto">
        <ul class="flex flex-col text-white/90">
          <li v-for="(link, index) in navLinks" :key="index" class="border-b border-white/10 last:border-b-0 menu-item" :style="{ animationDelay: `${index * 50}ms` }">
            <NuxtLink 
              :to="link.href" 
              class="flex justify-between items-center py-5 text-[22px] font-serif tracking-wide hover:text-lime-400 transition-colors"
              @click="isMobileMenuOpen = false"
            >
              {{ link.label }}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="opacity-50"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
            </NuxtLink>
          </li>
        </ul>
        
        <div class="mt-auto pt-10 pb-4 menu-item" :style="{ animationDelay: `${navLinks.length * 50 + 100}ms` }">
          <a :href="ctaButton.href" class="w-full flex justify-center items-center py-4 rounded-full bg-white text-[#1E2E45] font-semibold text-lg hover:bg-gray-100 transition-colors" @click="isMobileMenuOpen = false">
            {{ ctaButton.label }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Disable body scroll when mobile menu is open
watch(isMobileMenuOpen, (isOpen) => {
  if (import.meta.client) {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

const logo = {
  src: '/logo.png',
  alt: 'taxplanning.ae'
}

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Who we work with', href: '#who-we-work-with' },
  { label: 'Our approach', href: '#our-approach' },
  { label: 'Partners', href: '#partners' },
  { label: 'About us', href: '#about-us' }
]

const ctaButton = {
  label: '+971 4 553 4844',
  href: 'tel:+97145534844'
}
</script>

<style scoped>
/* Card drop down transition */
.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.menu-slide-enter-from,
.menu-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.98);
}

/* Staggered slide up and fade in for menu items */
.menu-slide-enter-active .menu-item {
  animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
