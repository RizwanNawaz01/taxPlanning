<template>
  <div>
    <!-- Hero & Contact Details Section -->
    <ContactHero />

    <!-- Partner with Us Section -->
    <CommonPartner
      title="Partner with Us"
      description="For lawyers, accountants, auditors, corporate advisers, private bankers, and wealth managers with clients who need tax expertise."
      button-text="Book a Consultation"
      bg-class="bg-[#F4F5F7]"
    />
  </div>
</template>

<script setup>
definePageMeta({
  alias: ['/contact-us']
})

const siteUrl = 'https://taxplanning.ae'
const pageTitle = 'Contact Us | Tax Planning UAE'
const pageDescription = 'Get in touch with our tax advisory experts in Dubai. Book a consultation for UAE Corporate Tax, VAT registration, accounting, and structuring.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: `${siteUrl}/contact`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
})

useHead({
  title: pageTitle,
  link: [
    { rel: 'canonical', href: `${siteUrl}/contact` }
  ]
})
</script>
