<template>
  <section class="relative pt-36 lg:pt-56 pb-[400px] md:pb-24 overflow-hidden bg-cover bg-center bg-no-repeat hero-bg">
    <div class="container grid lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10 px-7">
      <!-- Left Side: Hero Content -->
      <div class="lg:col-span-7 text-white">
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-6" v-html="heroContent.title"></h1>
        <p class="text-lg xl:text-xl text-white/80 mb-8 max-w-lg">{{ heroContent.description }}</p>
        <div>
          <Button :to="heroContent.button.link" variant="primary">
            {{ heroContent.button.text }}
          </Button>
        </div>
      </div>
      
      <!-- Right Side: Contact Form Component -->
      <div class="hidden lg:block lg:col-span-5 z-10 lg:mt-0">
        <div class="w-full max-w-[500px] ml-auto">
          <ContactForm 
            :title="formContent.title"
            :buttonText="formContent.buttonText"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  link: [
    { rel: 'preload', as: 'image', href: '/Home/hero-mobile.png', media: '(max-width: 1023px)' },
    { rel: 'preload', as: 'image', href: '/Home/hero.png', media: '(min-width: 1024px)' }
  ]
})

// Make the left side (text, button, image) dynamic
const heroContent = {
  bgImage: '/Home/hero.png',
  bgMobileImage: '/Home/hero-mobile.png',
  title: 'Tax planning<br/><span class="text-lime-400">that thinks ahead.</span>',
  description: 'We help UAE businesses manage their tax obligations from registration and filing through to questions around growth and structure.',
  button: {
    text: 'Explore Our Tax Services',
    link: '#services'
  }
}

// Pass dynamic props to the form on the right side
const formContent = {
  title: "Let's Discuss Your Tax Needs",
  buttonText: "Book a Consultation"
}
</script>

<style scoped>
.hero-bg {
  background-image: url('/Home/hero-mobile.png');
  background-position: top center;
}
@media (min-width: 1024px) {
  .hero-bg {
    background-image: url('/Home/hero.png');
    background-position: center;
  }
}
</style>
