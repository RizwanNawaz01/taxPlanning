<template>
  <CommonServices
    title="Services"
    description="Our work covers the full range of tax and accounting obligations a UAE business faces, along with advisory support for bigger decisions."
    :items="services"
  />
</template>

<script setup>
const services = [
  {
    title: 'Tax & Compliance',
    description: 'VAT Registration and Filing, VAT Deregistration, Corporate Tax Registration and Filing, Corporate Tax Deregistration, Tax Residency Certificates, Accounting and Bookkeeping, Financial Reporting, Audit, AML Compliance, and Payroll.',
    link: '#',
    linkText: 'Learn more',
    cardClass: 'bg-primary text-white',
    descClass: 'text-white/80',
    btnClass: 'bg-lime-400 text-primary hover:bg-lime-500',
    bgImage: '/Home/services-left.webp'
  },
  {
    title: 'Strategic Advisory',
    description: 'International Tax Planning, Residence and Domicile <br class="hidden lg:block">advice, Corporate Tax and Substance, Corporate Tax Consultation, and tax advisory for structuring and  <br class="hidden lg:block">transactions.',
    link: '#',
    linkText: 'Learn more',
    cardClass: 'bg-surface-muted text-primary',
    descClass: 'text-slate-600',
    btnClass: 'bg-primary text-white hover:bg-secondary',
    bgImage: '/Home/services-right.webp'
  }
]
</script>
