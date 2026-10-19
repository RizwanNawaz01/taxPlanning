<template>
  <section class="py-14 lg:py-20 text-center bg-white" data-aos="blur-in">
    <div class="container mx-auto px-7 xl:px-16 2xl:px-12 max-w-5xl">
      <h2 class="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary mb-3">
        Not sure which package fits?
      </h2>
      <p class="text-black text-sm md:text-base mb-8 leading-relaxed">
        Tell us your VAT status and approximate transaction volume, and we will point you in the right direction.
      </p>
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
