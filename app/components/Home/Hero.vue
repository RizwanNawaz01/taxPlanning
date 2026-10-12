<template>
  <CommonHero
    :title="heroContent.title"
    :description="heroContent.description"
    :button="heroContent.button"
    :bg-image="heroContent.bgImage"
    :bg-mobile-image="heroContent.bgMobileImage"
    :form-title="formContent.title"
    :form-button-text="formContent.buttonText"
  />
</template>

<script setup>
const heroContent = {
  bgImage: '/Home/hero.webp',
  bgMobileImage: '/Home/hero-mobile.webp',
  title: 'Tax planning <span class="block mt-2 lg:mt-7 text-lime-400">that thinks ahead.</span>',
  description: 'We help UAE businesses manage their tax obligations from registration and filing through to questions around growth and structure.',
  button: {
    text: 'Explore Our Tax Services',
    link: '#services'
  }
}

const formContent = {
  title: "Let's Discuss Your Tax Needs",
  buttonText: "Book a Consultation"
}
</script>
