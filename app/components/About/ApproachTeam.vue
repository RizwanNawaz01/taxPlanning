<template>
  <section class="py-20 lg:py-28 bg-[#F9FAFB]">
    <div class="container mx-auto px-6 lg:px-12 xl:px-16 space-y-20 lg:space-y-28">
      
      <!-- Block 1: Our Approach -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <!-- Content: Desktop Left, Mobile Below Image -->
        <div class="order-2 lg:order-1 lg:col-span-6" data-aos="blur-in">
          <h3 class="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary mb-6 tracking-tight">
            Our Approach
          </h3>
          <p class="text-black text-base md:text-lg lg:text-[18px] leading-relaxed">
            Every business we work with is different, so the recommendations we make vary from one client to the next. What stays the same is how we explain things. We set out what a regulation or a decision means for your business in plain terms, and we are clear about what to do next.
          </p>
        </div>

        <!-- Image: Desktop Right, Mobile Top -->
        <div class="order-1 lg:order-2 lg:col-span-6 flex justify-center lg:justify-end" data-aos="blur-in" data-aos-delay="200">
          <div class="w-full max-w-lg overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
            <NuxtImg
              src="/About/approach.webp"
              alt="Our Approach"
              class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Block 2: Our Team -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <!-- Image: Desktop Left, Mobile Top -->
        <div class="order-1 lg:order-1 lg:col-span-6 flex justify-center lg:justify-start" data-aos="blur-in">
          <div class="w-full max-w-lg overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
            <NuxtImg
              src="/About/team.webp"
              alt="Our Team"
              class="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Content: Desktop Right, Mobile Below Image -->
        <div class="order-2 lg:order-2 lg:col-span-6" data-aos="blur-in" data-aos-delay="200">
          <h3 class="text-3xl md:text-4xl lg:text-[42px] font-bold text-primary mb-6 tracking-tight">
            Our Team
          </h3>
          <div class="space-y-4 text-black text-base md:text-lg lg:text-[18px] leading-relaxed">
            <p>
              Our team of <strong class="text-primary font-bold">more than 50 tax professionals</strong> includes qualified CAs, ACCAs and CPAs, all senior, experienced practitioners. Between them, they have worked across a wide range of business structures and tax situations, so most questions we hear are ones we have handled before.
            </p>
            <p>
              If you have a question about where your business stands on tax, we would be glad to talk it through.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// Approach & Team alternating blocks for About Us
</script>
