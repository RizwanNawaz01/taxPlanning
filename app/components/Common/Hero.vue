<template>
  <section 
    class="relative pt-36 lg:pt-56 pb-[400px] md:pb-24 overflow-hidden bg-cover bg-center bg-no-repeat hero-bg xl:min-h-[910px]"
    :style="{
      '--hero-bg-desktop': `url(${bgImage})`,
      '--hero-bg-mobile': `url(${bgMobileImage || bgImage})`
    }"
  >
    <div class="container grid lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-16 items-center relative z-10 px-6 lg:px-8 xl:px-12 2xl:px-12">
      <!-- Left Side: Content -->
      <div :class="showForm ? 'lg:col-span-7' : 'lg:col-span-10 xl:col-span-8'" class="text-white">
        <!-- Optional Pre-Title / Badge Slot -->
        <slot name="badge" />

        <h1 
          class="text-5xl sm:text-5xl lg:text-[3.25rem] xl:text-7xl font-semibold leading-tight mb-6" 
          data-aos="blur-in" 
          v-html="title"
        ></h1>

        <p 
          v-if="description" 
          class="text-lg xl:text-xl text-white/80 mb-8 max-w-lg" 
          data-aos="blur-in" 
          data-aos-delay="200"
        >
          {{ description }}
        </p>

        <!-- Actions / Button -->
        <slot name="actions">
          <div v-if="button?.text" data-aos="blur-in" data-aos-delay="400">
            <Button :to="button.link || '#'" :variant="button.variant || 'primary'">
              {{ button.text }}
            </Button>
          </div>
        </slot>
      </div>
      
      <!-- Right Side: Form or Custom Slot -->
      <div 
        v-if="showForm" 
        class="hidden lg:block lg:col-span-5 z-10 lg:mt-0" 
        data-aos="blur-in" 
        data-aos-delay="600"
      >
        <div class="w-full max-w-[500px] ml-auto">
          <slot name="right">
            <ContactForm 
              :title="formTitle"
              :buttonText="formButtonText"
            />
          </slot>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  button: {
    type: Object,
    default: () => null
  },
  bgImage: {
    type: String,
    default: '/Home/hero.webp'
  },
  bgMobileImage: {
    type: String,
    default: '/Home/hero-mobile.webp'
  },
  showForm: {
    type: Boolean,
    default: true
  },
  formTitle: {
    type: String,
    default: "Let's Discuss Your Tax Needs"
  },
  formButtonText: {
    type: String,
    default: "Book a Consultation"
  }
})

// Dynamically preload hero images for Core Web Vitals (LCP)
useHead(() => ({
  link: [
    ...(props.bgMobileImage ? [{ rel: 'preload', as: 'image', href: props.bgMobileImage, media: '(max-width: 1023px)' }] : []),
    ...(props.bgImage ? [{ rel: 'preload', as: 'image', href: props.bgImage, media: '(min-width: 1024px)' }] : [])
  ]
}))
</script>

<style scoped>
.hero-bg {
  background-image: var(--hero-bg-mobile);
  background-position: top center;
}
@media (min-width: 1024px) {
  .hero-bg {
    background-image: var(--hero-bg-desktop);
    background-position: center;
  }
}
</style>
