<template>
  <NotFoundContent :error="{ statusCode: 404 }" :is-error-page="false" />
</template>

<script setup>
const event = useRequestEvent()
if (event) {
  setResponseStatus(event, 404)
}

useSeoMeta({
  title: '404 - Page Not Found | Tax Planning UAE',
  description: 'The requested page could not be found. Explore our UAE corporate tax, VAT, and financial advisory services.',
  robots: 'noindex, nofollow'
})

useHead({
  title: '404 - Page Not Found | Tax Planning UAE'
})
</script>
