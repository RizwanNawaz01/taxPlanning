<template>
  <header class="fixed top-0 left-0 right-0 z-50 pt-4 lg:pt-8 px-4 lg:px-6 xl:px-8 transition-all duration-300">
    <div 
      class="container mx-auto flex justify-between items-center lg:backdrop-blur-md rounded-full px-4 lg:px-6 xl:px-10 shadow-lg relative z-50 transition-all duration-500 border header-glass"
      :class="isScrolled ? 'bg-slate-900/95 border-white/10 py-1 lg:py-3.5' : 'lg:bg-dark-header/50 border-white/15 py-1 lg:py-3.5'"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="pl-2 lg:pl-0 shrink-0" @click="isMobileMenuOpen = false">
        <NuxtImg :src="logo.src" :alt="logo.alt" class="h-7 md:h-9 xl:h-10 w-auto" />
      </NuxtLink>

      <!-- Right Side (Nav + Button) -->
      <div class="flex items-center gap-4 lg:gap-6 xl:gap-12">
        <!-- Navigation -->
        <nav class="hidden lg:block">
          <ul class="flex gap-4 lg:gap-5 xl:gap-8 2xl:gap-12 text-white/90 font-medium text-[14px] xl:text-[15px]">
            <li v-for="(link, index) in navLinks" :key="index">
              <NuxtLink :to="link.href" class="hover:text-lime-400 transition-colors whitespace-nowrap">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- CTA Button (Desktop & Icon on Mobile) -->
        <a :href="ctaButton.href" aria-label="Call Us" class="flex items-center justify-center text-white font-semibold text-[13px] xl:text-[15px] lg:border lg:border-lime-accent/60 lg:px-4 lg:py-2 xl:px-5 xl:py-2.5 rounded-full hover:bg-lime-accent/10 transition-colors relative z-50 whitespace-nowrap">
          <svg class="w-[20px] h-[20px] lg:w-4 lg:h-4 text-lime-accent shrink-0 lg:top-0 top-0.5 relative" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.384 17.752a2.108 2.108 0 0 1-2.177 2.248 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 1.5 2.618 2.108 2.108 0 0 1 3.745.5H6.88a2.108 2.108 0 0 1 2.11 1.81 13.57 13.57 0 0 0 .74 2.97 2.108 2.108 0 0 1-.47 2.22L7.65 9.11a16.894 16.894 0 0 0 6.24 6.24l1.61-1.61a2.108 2.108 0 0 1 2.22-.47 13.57 13.57 0 0 0 2.97.74 2.108 2.108 0 0 1 1.694 2.742z"/></svg>
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
      <div v-if="isMobileMenuOpen" class="container mx-auto mt-3 bg-dark-header/85 backdrop-blur-2xl rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-white/10 lg:hidden flex flex-col relative z-40 max-h-[calc(100vh-100px)] overflow-y-auto">
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
          <a :href="ctaButton.href" class="w-full flex justify-center items-center py-4 rounded-full bg-white text-dark-header font-semibold text-lg hover:bg-gray-100 transition-colors" @click="isMobileMenuOpen = false">
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
  src: '/logo.webp',
  alt: 'taxplanning.ae'
}

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About us', href: '/about' },
  { label: 'Packages', href: '/packages' },
  { label: 'Partner with us', href: '/partner' },
  { label: 'Contact us', href: '/contact' }
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

/* Glass header background - mobile only */
.header-glass {
  background-image: url('/glass-header.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
@media (min-width: 600px) {
  .header-glass {
    background-image: none;
  }
}
</style>
