<template>
  <section class="py-14 lg:py-20 text-center bg-white" data-aos="blur-in">
    <div class="container mx-auto px-7 xl:px-16 2xl:px-12 max-w-2xl">
      <h2 class="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary mb-3">
        Not sure which package fits?
      </h2>
      <p class="text-slate-600 text-sm md:text-base mb-8 leading-relaxed">
        Tell us your VAT status and approximate transaction volume, and we will point you in the right direction.
      </p>
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
