<template>
  <section :class="['py-20 lg:py-28', bgClass]">
    <div class="container mx-auto px-6 lg:px-12 xl:px-16 space-y-20 lg:space-y-28">
      
      <div 
        v-for="(item, index) in items" 
        :key="index"
        class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
      >
        <!-- Content Column: Desktop alternates left/right, Mobile below image -->
        <div 
          :class="[
            'order-2 lg:col-span-6',
            item.imagePosition 
              ? (item.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2') 
              : (index % 2 === 0 ? 'lg:order-1' : 'lg:order-2')
          ]"
          data-aos="blur-in"
          :data-aos-delay="index % 2 === 0 ? '0' : '200'"
        >
          <h3 
            class="text-3xl md:text-4xl lg:text-[50px] font-bold text-primary mb-6 tracking-tight"
            v-html="item.title"
          ></h3>
          
          <div class="space-y-4 text-black text-base md:text-lg lg:text-[18px] leading-relaxed max-w-lg">
            <template v-if="Array.isArray(item.description)">
              <p 
                v-for="(para, pIndex) in item.description" 
                :key="pIndex"
                v-html="para"
              ></p>
            </template>
            <p v-else v-html="item.description"></p>
          </div>
        </div>

        <!-- Image Column: Desktop alternates right/left, Mobile on top -->
        <div 
          :class="[
            'order-1 lg:col-span-6 flex justify-center',
            item.imagePosition 
              ? (item.imagePosition === 'right' ? 'lg:order-2 lg:justify-end' : 'lg:order-1 lg:justify-start') 
              : (index % 2 === 0 ? 'lg:order-2 lg:justify-end' : 'lg:order-1 lg:justify-start')
          ]"
          data-aos="blur-in"
          :data-aos-delay="index % 2 === 0 ? '200' : '0'"
        >
          <div class="w-full  overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
            <NuxtImg
              :src="item.image"
              :alt="item.imageAlt || item.title"
              class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      {
        title: 'Our Approach',
        description: 'Every business we work with is different, so the recommendations we make vary from one client to the next. What stays the same is how we explain things. We set out what a regulation or a decision means for your business in plain terms, and we are clear about what to do next.',
        image: '/About/approach.webp',
        imageAlt: 'Our Approach'
      },
      {
        title: 'Our Team',
        description: [
          'Our team of <strong class="text-primary font-bold">more than 50 tax professionals</strong> includes qualified CAs, ACCAs and CPAs, all senior, experienced practitioners. Between them, they have worked across a wide range of business structures and tax situations, so most questions we hear are ones we have handled before.',
          'If you have a question about where your business stands on tax, we would be glad to talk it through.'
        ],
        image: '/About/team.webp',
        imageAlt: 'Our Team'
      }
    ]
  },
  bgClass: {
    type: String,
    default: 'bg-[#F9FAFB]'
  }
})
</script>
