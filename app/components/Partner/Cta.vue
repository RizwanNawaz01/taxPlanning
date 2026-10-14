<template>
  <section class="py-16 lg:py-24 text-center bg-[#F5F5F5]" data-aos="blur-in">
    <div class="container mx-auto px-7 xl:px-16 2xl:px-12 max-w-5xl">
      <h2 class="text-xl md:text-2xl lg:text-[28px] font-semibold text-primary mb-8 leading-snug">
        If you think there is an opportunity to work together,<br class="hidden sm:inline" /> we would like to hear from you.
      </h2>
      <div>
        <Button
          variant="dark"
          @click="$emit('openConsultation')"
        >
          Book a Consultation
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['openConsultation'])
</script>
