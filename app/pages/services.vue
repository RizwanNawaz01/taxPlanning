<template>
  <div>
    <!-- Hero Section using Reusable CommonHero -->
    <CommonHero
      title="Services"
      description="We keep your business compliant with UAE tax law, and we help you think through the decisions that affect your tax position."
      :button="{ text: 'Explore Our Tax Services', link: '#tax-compliance' }"
      bg-image="/Services/hero.webp"
      bg-mobile-image="/Services/hero-mobile.webp"
      form-title="Let's Discuss Your Tax Needs"
      form-button-text="Book a Consultation"
    />

    <!-- Tax & Compliance Slider Section -->
    <ServicesComplianceSlider />

    <!-- Strategic Advisory Numbered Cards Section -->
    <ServicesStrategicAdvisory />

    <!-- Partner with Us using Reusable CommonPartner -->
    <CommonPartner />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Services | Tax Planning UAE',
  description: 'We keep your business compliant with UAE tax law, and we help you think through the decisions that affect your tax position.',
  ogTitle: 'Services | Tax Planning UAE',
  ogDescription: 'We keep your business compliant with UAE tax law, and we help you think through the decisions that affect your tax position.',
  ogImage: '/Services/hero.webp',
  ogUrl: 'https://taxplanning.ae/services',
  twitterCard: 'summary_large_image',
})
</script>
