<template>
  <div>
    <!-- Hero Section using Reusable CommonHero -->
    <CommonHero
      title="Our Story"
      description="UAE businesses face a growing set of tax obligations. Registration and filing are only part of the picture; ownership structure, cross-border transactions, and long-term planning all carry tax implications of their own. As part of InZone Group, taxplanning.ae brings a dedicated tax focus to the Group’s wider business and corporate services. Our team supports businesses with everything from day-to-day compliance to the tax advice behind bigger decisions."
      :button="{ text: 'Explore Our Tax Services', link: '/services' }"
      bg-image="/About/hero.webp"
      bg-mobile-image="/About/hero-mobile.webp"
      form-title="Let's Discuss Your Tax Needs"
      form-button-text="Book a Consultation"
      :show-form="false"
      custom-class="xl:min-h-[910px]"
    />
 
    <!-- Founder Section -->
    <AboutFounder />

    <!-- Leadership Section -->
    <AboutLeadership />

    <!-- Approach and Team Section -->
    <AboutApproachTeam />

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
