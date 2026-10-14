<template>
  <section class="py-10 lg:py-16">
    <div class="container mx-auto px-7 xl:px-16 2xl:px-12">
      <!-- Desktop View (lg and up) -->
      <div 
        class="hidden lg:block relative rounded-[2.5rem] overflow-hidden min-h-[500px] xl:min-h-[540px] shadow-2xl"
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
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#203144]/75 to-[#203144]/95 flex items-center justify-end">
          <div class="w-full lg:w-[58%] xl:w-[54%] p-12 xl:p-16 text-white mr-4 xl:mr-8">
            <h2 class="text-3xl xl:text-4xl font-semibold leading-tight mb-6">
              How We Count Transactions,<br />
              and What Falls Outside the<br />
              Package
            </h2>
            <p class="text-white/90 text-sm xl:text-[15px] leading-relaxed mb-6 font-normal">
              A transaction can be a sales invoice, purchase invoice, expense/bank statement entry, payment settlement, or a journal entry that needs recording or reconciliation.
            </p>
            <p class="text-white/80 text-sm xl:text-[15px] leading-relaxed font-normal">
              Some activity is treated differently, including integrated batches, payroll entries, imports, multi-currency transactions, and split payments. We confirm the counting method before finalizing scope. If you are unsure of your volume, a recent bank statement summary or accounting system report is a good starting estimate. Please avoid attaching confidential records to your enquiry.
            </p>
          </div>
        </div>
      </div>

      <!-- Mobile View (below lg) -->
      <div 
        class="block lg:hidden rounded-3xl overflow-hidden bg-[#203144] shadow-xl text-white flex flex-col"
        data-aos="blur-in"
      >
        <!-- Text Content -->
        <div class="p-7 sm:p-9">
          <h2 class="text-2xl sm:text-3xl font-semibold leading-snug mb-5">
            How We Count Transactions, and What Falls Outside the Package
          </h2>
          <p class="text-white/90 text-sm sm:text-base leading-relaxed mb-5 font-normal">
            A transaction can be a sales invoice, purchase invoice, expense/bank statement entry, payment settlement, or a journal entry that needs recording or reconciliation.
          </p>
          <p class="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
            Some activity is treated differently, including integrated batches, payroll entries, imports, multi-currency transactions, and split payments. We confirm the counting method before finalizing scope. If you are unsure of your volume, a recent bank statement summary or accounting system report is a good starting estimate. Please avoid attaching confidential records to your enquiry.
          </p>
        </div>

        <!-- Mobile Bottom Image -->
        <div class="w-full overflow-hidden">
          <NuxtImg
            src="/Packages/outside-package-mobile.webp"
            alt="How We Count Transactions"
            class="w-full h-auto object-cover block"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
