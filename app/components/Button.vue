<template>
  <component
    :is="to ? NuxtLink : 'button'"
    :to="to"
    :type="!to ? type : undefined"
    :class="[
      'inline-flex items-center justify-center rounded-full font-bold transition-all hover:-translate-y-1',
      variantClasses
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { NuxtLink } from '#components'

const props = defineProps({
  to: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary', // 'primary' | 'dark'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-lime-400 text-primary hover:bg-lime-500 shadow-[0_4px_12px_rgba(182,252,78,0.3)] px-8 py-3'
    case 'dark':
      return 'bg-primary text-white hover:bg-secondary shadow-[0_4px_12px_rgba(11,22,44,0.2)] px-8 py-3.5'
    default:
      return 'px-8 py-3'
  }
})
</script>
