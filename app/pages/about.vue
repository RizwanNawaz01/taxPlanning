<template>
  <div>
    <!-- Hero Section using Reusable CommonHero -->
    <CommonHero
      title="About us"
      description="taxplanning.ae is part of InZone, which has worked with more than 2,000 businesses across accounting and taxation in the UAE."
      :button="{ text: 'Explore Our Tax Services', link: '/services' }"
      bg-image="/About/hero.webp"
      bg-mobile-image="/About/hero-mobile.webp"
      form-title="Let's Discuss Your Tax Needs"
      form-button-text="Book a Consultation"
    />

    <!-- Our Story Section -->
    <AboutOurStory />

    <!-- Founder Section -->
    <AboutFounder />

    <!-- Approach and Team Section -->
    <AboutApproachTeam />

    <!-- Partner with Us using Reusable CommonPartner -->
    <CommonPartner />
  </div>
</template>

<script setup>
definePageMeta({
  alias: ['/about-us']
})

useSeoMeta({
  title: 'About Us | Tax Planning UAE',
  description: 'taxplanning.ae is part of InZone, which has worked with more than 2,000 businesses across accounting and taxation in the UAE.',
  ogTitle: 'About Us | Tax Planning UAE',
  ogDescription: 'taxplanning.ae is part of InZone, which has worked with more than 2,000 businesses across accounting and taxation in the UAE.',
  ogImage: '/About/hero.webp',
  ogUrl: 'https://taxplanning.ae/about',
  twitterCard: 'summary_large_image',
})
</script>
