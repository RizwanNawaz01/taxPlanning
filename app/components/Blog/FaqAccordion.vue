<template>
  <div v-if="faqs && faqs.length" class="my-10 not-prose">
    <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
      Frequently Asked Questions
    </h2>

    <div class="space-y-3">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="border border-slate-200/90 rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 overflow-hidden"
        :class="activeIndex === index ? 'ring-1 ring-lime-400 border-lime-400' : 'hover:border-slate-300'"
      >
        <button
          type="button"
          class="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors focus:outline-none"
          :aria-expanded="activeIndex === index"
          @click="toggle(index)"
        >
          <span class="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {{ faq.question }}
          </span>
          <span
            class="shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 transition-transform duration-300"
            :class="{ 'rotate-180 bg-lime-400 text-slate-900': activeIndex === index }"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        <div
          v-show="activeIndex === index"
          class="px-5 sm:px-6 pb-6 pt-0 text-slate-600 text-base leading-relaxed border-t border-slate-100 mt-1 pt-4"
        >
          <p v-html="faq.answer"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  faqs: {
    type: Array,
    default: () => []
  }
})

// First item open by default for rich user engagement
const activeIndex = ref(0)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>
