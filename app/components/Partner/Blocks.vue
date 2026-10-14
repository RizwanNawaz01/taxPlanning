<template>
  <section class="py-16 lg:py-28 bg-white">
    <div class="container mx-auto px-7 xl:px-16 2xl:px-12 space-y-16 lg:space-y-28">
      <div 
        v-for="(block, index) in blocks" 
        :key="index"
        class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
      >
        <!-- Mobile Title (Visible only below lg) -->
        <div class="lg:hidden">
          <h2 class="text-3xl font-semibold text-primary tracking-tight">
            {{ block.title }}
          </h2>
        </div>

        <!-- Image Column -->
        <div 
          class="lg:col-span-6 flex justify-center"
          :class="index % 2 === 1 ? 'lg:order-1 lg:justify-start' : 'lg:order-2 lg:justify-end'"
          data-aos="blur-in"
        >
          <div class="w-full overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg border border-slate-100">
            <NuxtImg
              :src="block.image"
              :alt="block.title"
              class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Content Column -->
        <div 
          class="lg:col-span-6"
          :class="index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'"
          data-aos="blur-in"
          :data-aos-delay="150"
        >
          <!-- Desktop Title (Visible on lg and above) -->
          <h2 class="hidden lg:block text-3xl md:text-4xl lg:text-[42px] font-semibold text-primary mb-6 tracking-tight leading-snug">
            {{ block.title }}
          </h2>
          <p class="text-slate-700 text-base md:text-lg lg:text-[17px] lg:leading-snug max-w-xl">
            {{ block.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const blocks = [
  {
    title: 'Who We Partner With',
    description: 'Lawyers, accountants, auditors, corporate advisers, private bankers, wealth managers, and international tax and legal firms. If your clients return questions about VAT, Corporate Tax, structuring, or cross-border tax exposure, we can support you directly.',
    image: '/Partner/who-we-partner.webp'
  },
  {
    title: 'How We Work Together',
    description: 'When a shared client has a tax matter that falls within our expertise, we work directly with you to support them. The relationship with your client remains yours; we add to the tax expertise it needs.',
    image: '/Partner/work-together.webp'
  },
  {
    title: 'Why Partner With Us',
    description: 'taxplanning.ae is backed by InZone, which has worked with more than 2,000 businesses across accounting and taxation in the UAE. Our team of more than 50 tax professionals includes qualified CAs, ACCAs and CPAs, all senior, experienced practitioners.',
    image: '/Partner/with-us.webp'
  }
]
</script>
