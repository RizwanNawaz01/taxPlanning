<template>
  <CommonNumberedCards
    section-id="why-us"
    title='Why <span class="text-lime-400">taxplanning.ae</span>'
    description="Tax advice should make the path forward easier to understand. We bring the filing, the structure and the decision into one conversation."
    :items="items"
    button-text="Explore Our Services"
    button-link="#services"
  />
</template>

<script setup>
const items = [
  {
    title: 'Backed by a proven track record',
    description: "taxplanning.ae draws on InZone's proven experience supporting UAE businesses with their evolving tax and compliance needs."
  },
  {
    title: 'A team built specifically for tax',
    description: 'A dedicated team of tax experts in a digital environment. No confusing jargon, only clear instructions and practical guidance.'
  },
  {
    title: 'Every service under one roof',
    description: 'From set-up to tax, compliance to advisory, we cover all areas of tax and accounting so you get comprehensive management.'
  },
  {
    title: 'Practical advisory you can act on',
    description: 'We build our strategy and advice around practical solutions, not just theory, so you can execute successfully at every stage.'
  }
]
</script>