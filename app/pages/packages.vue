<template>
  <div>
    <!-- Hero Section using Reusable CommonHero -->
    <CommonHero
      title="UAE Tax &<br/>Accounting Packages"
      description="Compare packages based on the level of accounting and tax support you require. We will confirm the exact fit, and any additional scope, before you commit to anything."
      :button="{ text: 'Compare Packages', link: '#packages-pricing', variant: 'primary' }"
      bg-image="/Packages/hero.webp"
      bg-mobile-image="/Packages/hero-mobile.webp"
      form-title="Let's Discuss Your Tax Needs"
      form-button-text="Get Package Advice"
    />

    <!-- Which Package Fits Your Business Section -->
    <PackagesPricing @selectPackage="handleSelectPackage" />

    <!-- How We Count Transactions Section -->
    <PackagesOutsideScope />

    <!-- Scope and Higher Tier Conditions Section -->
    <PackagesScopeConditions />

    <!-- CTA Section -->
    <PackagesCta @openConsultation="handleOpenConsultation" />

    <!-- Interactive Contact Modal -->
    <Modal v-model="isModalOpen">
      <ContactForm :title="modalTitle" :buttonText="modalButtonText" />
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  alias: ['/package', '/pricing']
})

const isModalOpen = ref(false)
const modalTitle = ref("Let's Discuss Your Tax Needs")
const modalButtonText = ref("Get Package Advice")

const handleSelectPackage = (payload) => {
  if (payload?.packageName) {
    modalTitle.value = `Enquire About ${payload.packageName}`
  } else {
    modalTitle.value = "Let's Discuss Your Tax Needs"
  }
  modalButtonText.value = "Get Package Advice"
  isModalOpen.value = true
}

const handleOpenConsultation = () => {
  modalTitle.value = "Book a Consultation"
  modalButtonText.value = "Book a Consultation"
  isModalOpen.value = true
}

useSeoMeta({
  title: 'UAE Tax & Accounting Packages | Tax Planning UAE',
  description: 'Compare packages based on the level of accounting and tax support you require. Essential Care, Business Advantage, and Ultimate Protection packages for UAE businesses.',
  ogTitle: 'UAE Tax & Accounting Packages | Tax Planning UAE',
  ogDescription: 'Compare packages based on the level of accounting and tax support you require. Essential Care, Business Advantage, and Ultimate Protection packages for UAE businesses.',
  ogImage: '/Packages/hero.webp',
  ogUrl: 'https://taxplanning.ae/packages',
  twitterCard: 'summary_large_image',
})
</script>
