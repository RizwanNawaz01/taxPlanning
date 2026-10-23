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
    title: 'Corporate Tax <br> Registration and Filing',
    description: 'We register your business for UAE Corporate Tax and file your returns each period, so you stay compliant.',
    image: '/Services/corporate-tax.webp'
  },
  {
    title: 'Corporate Tax <br> Deregistration',
    description: 'Closures, restructuring, or tax status changes can trigger deregistration. We handle the process either way.',
    image: '/Services/corporate-tax-deregistration.webp'
  },
  {
    title: 'Tax Residency <br> Certificates',
    description: 'We support TRC applications for individuals and companies, including gathering the evidence each requires.',
    image: '/Services/tax-residency-certificates.webp'
  },
  {
    title: 'Accounting and <br> Bookkeeping',
    description: 'New books, ongoing records, backlog catch-up or previous provider handover. We take on any of these.',
    image: '/Services/accounting-and-bookkeeping.webp'
  },
  {
    title: 'Financial <br> Reporting',
    description: 'We prepare financial statements to the standard your business must follow and keep them audit-ready.',
    image: '/Services/financial-reporting.webp'
  },
  {
    title: 'Audit <br> Support',
    description: 'Your auditor sets the requirements; we prepare the schedules, reconciliations, and evidence to meet them.',
    image: '/Services/audit.webp'
  },
  {
    title: 'AML <br> Compliance',
    description: 'We review whether AML, UBO, or related requirements apply to your business and put controls in place.',
    image: '/Services/aml-compliance.webp'
  },
  {
    title: 'Payroll <br> Management',
    description: 'Payroll calculations, records, and WPS coordination, managed so your team gets paid accurately.',
    image: '/Services/payroll.webp'
  }
];
</script>
