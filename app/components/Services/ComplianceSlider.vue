<template>
  <CommonCardsSlider
    section-id="tax-compliance"
    title="Tax &amp; Compliance"
    description="The day-to-day requirements of running a business in the UAE, handled accurately and on time."
    :items="complianceItems"
  />
</template>

<script setup>
const complianceItems = [
  {
    title: 'VAT Registration <br> and Filing',
    description: 'We register your business for VAT with the Federal Tax Authority and handle your returns on schedule.',
    image: '/Services/vat-registration.webp'
  },
  {
    title: 'VAT <br> Deregistration',
    description: 'When your business no longer meets the criteria for VAT registration, we manage the deregistration process.',
    image: '/Services/vat-deregistration.webp'
  },
  {
    title: 'Corporate Tax Registration and Filing',
    description: 'Registering your business for UAE Corporate Tax, and filing your returns each period.',
    image: '/Services/corporate-tax.webp'
  }
]
</script>
