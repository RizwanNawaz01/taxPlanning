<template>
  <section :class="[sectionClass, bgClass]">
    <div class="container mx-auto px-6 lg:px-12 xl:px-16">
      <div :class="[maxWidthClass, 'mx-auto text-center']" data-aos="blur-in">
        <h2 
          v-if="title" 
          class="text-4xl lg:text-5xl 2xl:text-6xl font-bold text-primary mb-4 lg:mb-8 tracking-tight"
          v-html="title"
        ></h2>
        
        <div :class="['space-y-6 text-base md:text-lg lg:text-xl leading-snug lg:leading-relaxed font-normal', textColorClass]">
          <template v-if="Array.isArray(paragraphs)">
            <p 
              v-for="(para, index) in paragraphs" 
              :key="index"
              v-html="para"
            ></p>
          </template>
          <p v-else v-html="paragraphs"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Our Story'
  },
  paragraphs: {
    type: [Array, String],
    default: () => [
      'UAE businesses face a growing set of tax obligations. Registration and filing are only part of the picture; ownership structure, cross-border transactions, and long-term planning all carry tax implications of their own.',
      'taxplanning.ae is a dedicated team built specifically for tax, covering everything from day-to-day compliance to the advisory work behind bigger decisions.'
    ]
  },
  bgClass: {
    type: String,
    default: 'bg-white'
  },
  sectionClass: {
    type: String,
    default: 'py-20 lg:py-20'
  },
  maxWidthClass: {
    type: String,
    default: 'max-w-6xl'
  },
  textColorClass: {
    type: String,
    default: 'text-black'
  }
})
</script>
