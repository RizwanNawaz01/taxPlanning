<template>
<div class="bg-surface-light p-8 lg:p-7 lg:py-9 rounded-2xl shadow-2xl relative overflow-hidden min-h-[490px] flex flex-col">    
    <div v-if="!isSubmitted" class="transition-opacity duration-500 h-full flex flex-col justify-center" :class="{'opacity-50 pointer-events-none': isLoading}">
      <h2 class="text-[22px] font-bold text-center text-primary mb-7">{{ title }}</h2>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
          <!-- Honeypot anti-spam field (hidden from real users) -->
          <input v-model="formData.website" type="text" name="website" tabindex="-1" autocomplete="off" class="hidden" aria-hidden="true" />

          <input aria-label="Full Name" v-model="formData.name" type="text" class="w-full bg-transparent border-0 border-b border-slate-200 pb-2 px-0 text-sm focus:outline-none focus:border-primary focus:ring-0 placeholder:text-slate-400 transition-colors" placeholder="Full Name" required />
        
          <input aria-label="Email Address" v-model="formData.email" type="email" class="w-full bg-transparent border-0 border-b border-slate-200 pb-2 px-0 text-sm focus:outline-none focus:border-primary focus:ring-0 placeholder:text-slate-400 transition-colors" placeholder="Email" required />
        
          <input aria-label="Phone Number" v-model="formData.phone" type="tel" class="w-full bg-transparent border-0 border-b border-slate-200 pb-2 px-0 text-sm focus:outline-none focus:border-primary focus:ring-0 placeholder:text-slate-400 transition-colors" placeholder="Phone" required />
        
          <!-- Custom Styled Service Dropdown -->
          <div ref="dropdownRef" class="relative">
            <button
              type="button"
              @click="toggleDropdown"
              class="w-full bg-transparent border-0 border-b border-slate-200 pb-2 px-0 text-sm flex items-center justify-between text-left focus:outline-none transition-colors cursor-pointer"
              :class="[
                isDropdownOpen ? 'border-primary' : '',
                selectedServiceLabel ? 'text-slate-800 font-medium' : 'text-slate-400'
              ]"
              aria-haspopup="listbox"
              :aria-expanded="isDropdownOpen"
            >
              <span>{{ selectedServiceLabel || 'Service required' }}</span>
              <svg 
                class="w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ml-2" 
                :class="{ 'rotate-180 text-primary': isDropdownOpen }"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fill-rule="evenodd" 
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                  clip-rule="evenodd" 
                />
              </svg>
            </button>

            <!-- Floating Menu -->
            <Transition name="dropdown">
              <div 
                v-if="isDropdownOpen" 
                class="absolute left-0 right-0 top-full mt-1.5 bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.15)] border border-slate-100 z-50 overflow-hidden py-1.5"
                role="listbox"
              >
                <div
                  v-for="option in serviceOptions"
                  :key="option.value"
                  @click="selectService(option.value)"
                  class="px-4 py-2.5 text-[14.5px] cursor-pointer flex items-center justify-between transition-colors select-none"
                  :class="formData.service === option.value 
                    ? 'bg-lime-400/20 text-primary font-semibold' 
                    : 'text-slate-700 hover:bg-slate-50 hover:text-primary'"
                  role="option"
                  :aria-selected="formData.service === option.value"
                >
                  <span>{{ option.label }}</span>
                  <svg 
                    v-if="formData.service === option.value" 
                    class="w-4 h-4 text-lime-600 shrink-0 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </Transition>
          </div>
        
          <textarea aria-label="Message" v-model="formData.message" class="w-full bg-transparent border-0 border-b border-slate-200 pb-2 px-0 text-sm focus:outline-none focus:border-primary focus:ring-0 placeholder:text-slate-400 transition-colors resize-none mt-2 min-h-[80px]" placeholder="Message" rows="1"></textarea>
        
        <p v-if="errorMessage" class="text-rose-500 text-xs text-center mt-2">{{ errorMessage }}</p>

        <div class="pt-3 flex justify-center">
          <Button type="submit" variant="dark" class="lg:py-2.5 text-base" :disabled="isLoading">
            <span v-if="isLoading">Sending...</span>
            <span v-else>{{ buttonText }}</span>
          </Button>
        </div>
      </form>
    </div>

    <!-- Success Message & Animation -->
    <div v-else class="absolute inset-0 flex flex-col items-center justify-center p-8 animate-fade-in bg-surface-light z-10">
      <svg class="checkmark mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
      <h3 class="text-2xl font-bold text-primary mb-3 text-center">Thank You!</h3>
      <p class="text-slate-500 text-center text-sm leading-relaxed">
        Your message has been sent successfully.<br>We will get back to you shortly.
      </p>
    </div>
    
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

defineProps({
  title: {
    type: String,
    default: "Let's Discuss Your Tax Needs"
  },
  buttonText: {
    type: String,
    default: "Book a Consultation"
  }
})

const isSubmitted = ref(false)
const isLoading = ref(false)
const errorMessage = ref('')

const isDropdownOpen = ref(false)
const dropdownRef = ref(null)

const serviceOptions = [
  { value: 'corporate-tax', label: 'Corporate Tax' },
  { value: 'vat', label: 'VAT Registration' },
  { value: 'accounting', label: 'Accounting & Bookkeeping' },
  { value: 'other', label: 'Other' }
]

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  website: '' // honeypot
})

const selectedServiceLabel = computed(() => {
  const match = serviceOptions.find(opt => opt.value === formData.value.service)
  return match ? match.label : ''
})

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectService = (value) => {
  formData.value.service = value
  isDropdownOpen.value = false
  if (errorMessage.value) errorMessage.value = ''
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isDropdownOpen.value = false
  }
}

onMounted(() => {
  if (import.meta.client) {
    document.addEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  if (import.meta.client) {
    document.removeEventListener('click', handleClickOutside)
  }
})

const handleSubmit = async () => {
  if (!formData.value.service) {
    errorMessage.value = 'Please select a service required.'
    return
  }

  isLoading.value = true
  errorMessage.value = ''
  
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData.value
    })
    
    if (response.success) {
      isSubmitted.value = true
      formData.value = { name: '', email: '', phone: '', service: '', message: '', website: '' }
    }
  } catch (error) {
    console.error('Failed to submit form', error)
    errorMessage.value = error?.data?.statusMessage || error?.statusMessage || 'An error occurred while sending your message. Please try again.'
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Smooth Dropdown Popover Animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px) scale(0.98);
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.checkmark {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: block;
  stroke-width: 3.5;
  stroke: #65a30d; /* lime-600 */
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #65a30d;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}
.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 3.5;
  stroke-miterlimit: 10;
  stroke: #65a30d;
  fill: none;
  animation: stroke .6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}
.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke .3s cubic-bezier(0.65, 0, 0.45, 1) .8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 40px rgba(101, 163, 13, 0.1);
  }
}
</style>
