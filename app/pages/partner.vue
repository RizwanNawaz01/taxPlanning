<template>
  <div>
    <!-- Hero Section using Reusable CommonHero -->
    <CommonHero
      title="Partner with us"
      description="When your clients need specialist tax advice, we work alongside you to help them navigate UAE tax compliance and understand the tax implications of their business decisions. We partner with lawyers, accountants, auditors, corporate advisers, private bankers and wealth managers."
      :button="{ text: 'Become a Partner', variant: 'primary' }"
      @clickButton="isModalOpen = true"
      bg-image="/Partner/hero.webp"
      bg-mobile-image="/Partner/hero-mobile.webp"
      form-title="Let's Discuss Your Tax Needs"
      form-button-text="Become a partner"
      :show-form="false"
    />

    <!-- Alternating Partner Blocks Section -->
    <PartnerBlocks />

    <!-- Bottom Call To Action Section -->
    <PartnerCta @openConsultation="isModalOpen = true" />

    <!-- Interactive Contact Modal -->
    <Modal v-model="isModalOpen">
      <ContactForm title="Partner with Us" buttonText="Become a partner" />
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  alias: ['/partner-with-us', '/partners']
})

const isModalOpen = ref(false)

useSeoMeta({
  title: 'Partner with Us | Tax Planning UAE',
  description: 'We work alongside advisers whose clients face the same kind of tax questions we specialise in. Professional partnerships for lawyers, accountants, auditors, and wealth managers in the UAE.',
  ogTitle: 'Partner with Us | Tax Planning UAE',
  ogDescription: 'We work alongside advisers whose clients face the same kind of tax questions we specialise in. Professional partnerships for lawyers, accountants, auditors, and wealth managers in the UAE.',
  ogImage: '/Partner/hero.webp',
  ogUrl: 'https://taxplanning.ae/partner',
  twitterCard: 'summary_large_image',
})
</script>
