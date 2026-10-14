<template>
  <section class="py-16 lg:py-24 text-center bg-[#F5F5F5]" data-aos="blur-in">
    <div class="container mx-auto px-7 xl:px-16 2xl:px-12 max-w-3xl">
      <h2 class="text-xl md:text-2xl lg:text-[28px] font-semibold text-primary mb-8 leading-snug">
        If you think there is an opportunity to work together,<br class="hidden sm:inline" /> we would like to hear from you.
      </h2>
      <div>
        <button
          type="button"
          @click="$emit('openConsultation')"
          class="inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 hover:-translate-y-1 text-base md:text-lg bg-primary text-white hover:bg-secondary shadow-[0_4px_12px_rgba(11,22,44,0.2)] px-9 py-3.5"
        >
          Book a Consultation
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(['openConsultation'])
</script>
