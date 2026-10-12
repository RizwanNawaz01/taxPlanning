<template>
  <section class="pt-16 lg:pt-24 pb-12 lg:pb-0 bg-[#F5F5F5] overflow-hidden">
    <div class="container mx-auto px-6 lg:px-12 xl:px-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        <!-- Content Column: Desktop Left, Mobile Below Image -->
        <div class="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left pb-8 lg:pb-12 xl:pb-16" data-aos="blur-in">
          <div class="max-w-[580px] mx-auto lg:mx-0">
            <h2 class="text-3xl md:text-4xl lg:text-[40px] font-bold text-primary tracking-tight mb-3 uppercase">
              Muhammad Tariq
            </h2>

            <div class="inline-block mb-6 lg:mb-8">
              <span class="inline-flex items-center px-4 py-1.5 rounded-full text-xs md:text-sm font-bold bg-lime-400 text-primary tracking-wide shadow-sm">
                Founder &amp; CEO
              </span>
            </div>

            <div class="space-y-4 text-black text-left text-[15px] md:text-base leading-[1.65]">
              <p>
                Muhammad Tariq is the founder of taxplanning.ae. He trained as a lawyer in the UK and was called to the Bar at Lincoln's Inn, London.
              </p>
              <p>
                He began his legal career at one of the Middle East's leading law firms, after moving to Dubai in 2007. He went on to found InZone Group in 2014, building it into an established advisory firm serving entrepreneurs across the UAE.
              </p>
              <p>
                taxplanning.ae was established to support the businesses across the UAE with a dedicated team for tax, one built to handle both compliance and the strategic decisions behind it.
              </p>
              <p>
                Muhammad also supports early-stage entrepreneurs outside taxplanning.ae's own client base, through a separate initiative offering legal, tax and mentorship support to founders who could not otherwise access it.
              </p>
              <p>
                He continues to lead taxplanning.ae's work directly, alongside the practice's specialist team.
              </p>
            </div>
          </div>
        </div>

        <!-- Image Column: Desktop Right, Mobile Top -->
        <div class="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end self-end" data-aos="blur-in" data-aos-delay="200">
          <div class="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px] -mb-1 lg:mb-0">
            <NuxtImg
              src="/About/founder.webp"
              alt="Muhammad Tariq - Founder & CEO"
              class="w-full h-auto object-contain block mx-auto lg:ml-auto lg:mr-0 filter drop-shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Founder Section for About Us
</script>
