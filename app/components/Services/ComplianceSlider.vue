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
  },
  {
    title: 'Corporate Tax <br> Deregistration',
    description: 'Closures, restructuring, or a change in tax status can all trigger deregistration. We handle the process either way.',
    image: '/Services/corporate-tax-deregistration.webp'
  },
  {
    title: 'Tax Residency <br> Certificates',
    description: 'Support with TRC applications for individuals and companies, including gathering the evidence a specific application requires.',
    image: '/Services/tax-residency-certificates.webp'
  },
  {
    title: 'Accounting and <br> Bookkeeping',
    description: 'New books, ongoing records, backlog catch-up, or a handover from a previous provider. We take on any of these.',
    image: '/Services/accounting-and-bookkeeping.webp'
  },
  {
    title: 'Financial <br> Reporting',
    description: 'Your financial statements are prepared to the standard your business is required to follow, and kept audit-ready throughout the year.',
    image: '/Services/financial-reporting.webp'
  },
  {
    title: 'Audit',
    description: 'Your auditor sets the requirements; we prepare the schedules, reconciliations, and evidence to meet them.',
    image: '/Services/audit.webp'
  },
  {
    title: 'AML <br> Compliance',
    description: 'We review whether AML, UBO, or related governance requirements apply to your business, and put the right controls and records in place.',
    image: '/Services/aml-compliance.webp'
  },
  {
    title: 'Payroll',
    description: 'Payroll calculations, records, and WPS coordination, managed so your team gets paid accurately and on time.',
    image: '/Services/payroll.webp'
  }
];
</script>
