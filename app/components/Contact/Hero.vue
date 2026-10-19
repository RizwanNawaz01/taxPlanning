<template>
  <section class="relative bg-white overflow-hidden">
    <!-- Dark Top Banner Background with common-background.png -->
    <div class="absolute top-0 inset-x-0 h-[380px] sm:h-[400px] md:h-[420px] lg:h-[300px] xl:h-[400px] z-0 overflow-hidden bg-[#071721]">
      <NuxtImg
        src="/common-background.png"
        alt=""
        format="webp"
        class="w-full h-full object-cover object-top pointer-events-none"
      />
    </div>

    <div class="container mx-auto px-6 lg:px-8 xl:px-12 2xl:px-12 relative z-10 pt-40 sm:pt-32 lg:pt-36 xl:pt-64 pb-16 lg:pb-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start">
        
        <!-- Left Column: Title in dark section, Contact info in white section (desktop) -->
        <div class="col-span-1 lg:col-span-7 flex flex-col justify-between">
          <!-- Title -->
          <div data-aos="blur-in">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-10 lg:mb-0">
              Contact Us
            </h1>
          </div>

          <!-- Desktop Contact Details (sitting cleanly in the white area below the dark banner) -->
          <div class="hidden lg:block pt-32 lg:pt-36 xl:pt-40 space-y-6 lg:space-y-7" data-aos="fade-up" data-aos-delay="200">
            <!-- Call -->
            <div>
              <span class="block text-sm xl:text-[15px] font-bold text-slate-900 mb-1 tracking-wide">Call:</span>
              <a 
                :href="'tel:' + contactInfo.phoneRaw" 
                class="text-slate-700 hover:text-lime-600 transition-colors text-base xl:text-lg font-medium inline-block"
              >
                {{ contactInfo.phone }}
              </a>
            </div>

            <!-- Email -->
            <div>
              <span class="block text-sm xl:text-[15px] font-bold text-slate-900 mb-1 tracking-wide">Email:</span>
              <a 
                :href="'mailto:' + contactInfo.email" 
                class="text-slate-700 hover:text-lime-600 transition-colors text-base xl:text-lg font-medium inline-block"
              >
                {{ contactInfo.email }}
              </a>
            </div>

            <!-- Address -->
            <div>
              <span class="block text-sm xl:text-[15px] font-bold text-slate-900 mb-1 tracking-wide">Address:</span>
              <p class="text-slate-700 text-base xl:text-lg leading-relaxed max-w-xs xl:max-w-sm">
                {{ contactInfo.address }}
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column: Form Card -->
        <div class="col-span-1 lg:col-span-5 w-full max-w-[490px] lg:max-w-none mx-auto lg:mr-0" data-aos="blur-in" data-aos-delay="300">
          <ContactForm 
            title="Let's Discuss Your Tax Needs"
            buttonText="Book a Consultation"
            class="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100"
          />
        </div>

        <!-- Mobile Contact Details (sitting below the card on mobile) -->
        <div class="lg:hidden col-span-1 pt-8 sm:pt-10 space-y-6 sm:space-y-7" data-aos="fade-up">
          <!-- Call -->
          <div>
            <span class="block text-sm font-bold text-slate-900 mb-1 tracking-wide">Call:</span>
            <a 
              :href="'tel:' + contactInfo.phoneRaw" 
              class="text-slate-700 hover:text-lime-600 transition-colors text-base font-medium inline-block"
            >
              {{ contactInfo.phone }}
            </a>
          </div>

          <!-- Email -->
          <div>
            <span class="block text-sm font-bold text-slate-900 mb-1 tracking-wide">Email:</span>
            <a 
              :href="'mailto:' + contactInfo.email" 
              class="text-slate-700 hover:text-lime-600 transition-colors text-base font-medium inline-block"
            >
              {{ contactInfo.email }}
            </a>
          </div>

          <!-- Address -->
          <div>
            <span class="block text-sm font-bold text-slate-900 mb-1 tracking-wide">Address:</span>
            <p class="text-slate-700 text-base leading-relaxed max-w-xs">
              {{ contactInfo.address }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const contactInfo = {
  phone: '+971 800 469',
  phoneRaw: '+971800469',
  email: 'consult@taxplanning.ae',
  address: 'Tax Planning Advisory, Level 4, Burlington Tower, Business Bay, Dubai'
}
</script>
