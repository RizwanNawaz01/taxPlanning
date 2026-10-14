<template>
  <component
    :is="componentIs"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    :class="[
      'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 hover:-translate-y-1 select-none',
      sizeClasses,
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
  href: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary' // 'primary' | 'dark' | 'light' | 'outline'
  },
  size: {
    type: String,
    default: 'md' // 'sm' | 'md' | 'lg'
  }
})

const componentIs = computed(() => {
  if (props.to) return NuxtLink
  if (props.href) return 'a'
  return 'button'
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-5 py-1.5 text-xs lg:text-sm'
    case 'lg':
      return 'px-8 py-3 lg:px-10 lg:py-3.5 text-base'
    case 'md':
    default:
      return 'px-8 py-2.5 text-[14px] lg:text-[15px]'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'dark':
      return 'bg-primary text-white hover:bg-secondary shadow-[0_4px_12px_rgba(11,22,44,0.2)]'
    case 'light':
      return 'bg-surface-subtle text-primary hover:bg-white shadow-lg'
    case 'outline':
      return 'border border-lime-accent/60 text-white hover:bg-lime-accent/10'
    case 'primary':
    default:
      return 'bg-lime-400 text-primary hover:bg-lime-500 shadow-[0_4px_12px_rgba(182,252,78,0.3)]'
  }
})
</script>
