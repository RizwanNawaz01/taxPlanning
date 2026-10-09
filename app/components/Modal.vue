<template>
  <div v-if="modelValue" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-[#0B162C]/60 backdrop-blur-sm" @click="closeModal"></div>
    
    <!-- Modal Content -->
    <div class="relative w-full max-w-lg z-10">
      <!-- Close Button -->
      <button @click="closeModal" class="absolute top-6 right-6 text-slate-400 hover:text-slate-800 z-20 bg-white rounded-full p-1 transition-colors shadow-sm">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      
      <!-- Slot for custom content (e.g. form) -->
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

const closeModal = () => {
  emit('update:modelValue', false)
  emit('close')
}
</script>
