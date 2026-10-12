<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const siteUrl = 'https://taxplanning.ae'
const title = 'Tax Planning | UAE Corporate Tax & VAT Advisory'
const description = 'Strategic UAE tax planning, corporate tax compliance, VAT registration, bookkeeping, and advisory for businesses across Dubai and all 7 emirates.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/Home/hero.webp`,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: `${siteUrl}/Home/hero.webp`,
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'canonical', href: siteUrl },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FinancialService',
        name: 'taxplanning.ae',
        description,
        url: siteUrl,
        telephone: '+971 800 469',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Level 4, Burlington Tower, Business Bay',
          addressLocality: 'Dubai',
          addressCountry: 'AE'
        },
        areaServed: 'United Arab Emirates',
        serviceType: [
          'Corporate Tax Advisory',
          'VAT Registration and Filing',
          'Accounting and Bookkeeping',
          'Tax Residency Certificates'
        ]
      })
    }
  ]
})
</script>
