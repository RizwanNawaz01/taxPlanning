<template>
  <section class="py-0 lg:py-10">
    <div class="container mx-auto px-7 xl:px-16 2xl:px-12">
      <!-- Desktop View (lg and up) -->
      <div 
        class="hidden lg:block relative rounded-[2.5rem] overflow-hidden min-h-[500px] xl:min-h-[740px] shadow-2xl"
        data-aos="blur-in"
      >
        <!-- Background Image -->
        <NuxtImg
          src="/Packages/outside-package.webp"
          alt="How We Count Transactions"
          class="absolute inset-0 w-full h-full object-cover object-left"
          loading="lazy"
        />

        <!-- Right Side Dark Gradient & Text -->
        <div class="absolute inset-0  flex items-center justify-end">
          <div class="w-full lg:w-[58%] xl:w-[54%] p-12 xl:p-16 text-white mr-4 xl:mr-8">
            <h2 class="text-3xl lg:text-4xl xl:text-4xl font-semibold leading-tight mb-6">
              How We Count Transactions,<br />
              and What Falls Outside the<br />
              Package
            </h2>
            <div class="max-w-xl">
 <p class="text-white/90 text-sm xl:text-lg leading-relaxed mb-6 font-normal">
              A transaction can be a sales invoice, purchase invoice, expense/bank statement entry, payment settlement, or a journal entry that needs recording or reconciliation.
            </p>
            <p class="text-white/80 text-sm xl:text-lg leading-relaxed font-normal">
              Some activity is treated differently, including integrated batches, payroll entries, imports, multi-currency transactions, and split payments. We confirm the counting method before finalizing scope. If you are unsure of your volume, a recent bank statement summary or accounting system report is a good starting estimate. Please avoid attaching confidential records to your enquiry.
            </p>
            </div>
           
          </div>
        </div>
      </div>

      <!-- Mobile View (below lg) -->
      <div 
        class="block lg:hidden relative rounded-3xl overflow-hidden shadow-xl text-white min-h-[640px] flex flex-col justify-start"
        data-aos="blur-in"
      >
        <!-- Mobile Background Image -->
        <NuxtImg
          src="/Packages/outside-package-mobile.webp"
          alt="How We Count Transactions"
          class="absolute inset-0 w-full h-full object-cover object-bottom"
          loading="lazy"
        />

        <!-- Top Gradient Overlay to ensure text readability -->
        <div class="absolute inset-0 bg-gradient-to-b from-[#203144]/90 via-[#203144]/60 to-transparent"></div>

        <!-- Text Content Overlaid on Top -->
        <div class="relative z-10 p-6 sm:p-8 pb-72 pt-16 lg:pt-0">
          <p class="text-white/95 text-[15px] sm:text-base leading-relaxed mb-5 font-normal">
            A transaction can be a sales invoice, purchase invoice, expense, bank statement entry, payment settlement, or a journal entry that needs recording or reconciliation.
          </p>
          <p class="text-white/90 text-[14px] sm:text-[15px] leading-relaxed font-normal">
            Some activity is treated differently, including integrated batches, payroll entries, imports, multi-currency transactions, and split payments. We confirm the counting method before finalizing scope. If you are unsure of your volume, a recent bank statement summary or accounting system report is a good starting estimate. Please avoid attaching confidential records to your enquiry.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
