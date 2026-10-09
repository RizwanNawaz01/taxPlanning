<template>
  <div class="bg-[#FBFBFB] p-10 lg:p-8 rounded-3xl shadow-2xl relative overflow-hidden min-h-[520px] flex flex-col">
    
    <div v-if="!isSubmitted" class="transition-opacity duration-500 h-full flex flex-col justify-center" :class="{'opacity-50 pointer-events-none': isLoading}">
      <h2 class="text-[22px] font-bold text-center text-primary mb-10">{{ title }}</h2>
      
      <form @submit.prevent="handleSubmit" class="space-y-4">
          <input aria-label="Full Name" v-model="formData.name" type="text" class="w-full bg-transparent border-0 border-b border-slate-200 pb-3 px-0 text-[15px] focus:outline-none focus:border-primary focus:ring-0 placeholder:text-slate-600 transition-colors" placeholder="Full Name" required />
        
          <input aria-label="Email Address" v-model="formData.email" type="email" class="w-full bg-transparent border-0 border-b border-slate-200 pb-3 px-0 text-[15px] focus:outline-none focus:border-primary focus:ring-0 placeholder:text-slate-600 transition-colors" placeholder="Email" required />
        
          <input aria-label="Phone Number" v-model="formData.phone" type="tel" class="w-full bg-transparent border-0 border-b border-slate-200 pb-3 px-0 text-[15px] focus:outline-none focus:border-primary focus:ring-0 placeholder:text-slate-600 transition-colors" placeholder="Phone" required />
        
          <select aria-label="Service required" v-model="formData.service" class="w-full bg-transparent border-0 border-b border-slate-200 pb-3 px-0 text-[15px] focus:outline-none focus:border-primary focus:ring-0 text-slate-600 transition-colors appearance-none" required>
            <option value="" disabled selected>Service required</option>
            <option value="corporate-tax" class="text-slate-800">Corporate Tax</option>
            <option value="vat" class="text-slate-800">VAT Registration</option>
            <option value="accounting" class="text-slate-800">Accounting & Bookkeeping</option>
            <option value="other" class="text-slate-800">Other</option>
          </select>
        
          <textarea aria-label="Message" v-model="formData.message" class="w-full bg-transparent border-0 border-b border-slate-200 pb-3 px-0 text-[15px] focus:outline-none focus:border-primary focus:ring-0 placeholder:text-slate-600 transition-colors resize-none mt-2 min-h-[100px]" placeholder="Message" rows="1"></textarea>
        
        <div class="pt-3 flex justify-center">
          <Button type="submit" variant="dark" class="w-[85%] md:w-[75%] lg:w-[72%]" :disabled="isLoading">
            <span v-if="isLoading">Sending...</span>
            <span v-else>{{ buttonText }}</span>
          </Button>
        </div>
      </form>
    </div>

    <!-- Success Message & Animation -->
    <div v-else class="absolute inset-0 flex flex-col items-center justify-center p-8 animate-fade-in bg-[#FBFBFB] z-10">
      <svg class="checkmark mb-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
        <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
      </svg>
      <h3 class="text-2xl font-bold text-primary mb-3 text-center">Thank You!</h3>
      <p class="text-slate-500 text-center text-[15px] leading-relaxed">
        Your message has been sent successfully.<br>We will get back to you shortly.
      </p>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'

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

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const handleSubmit = async () => {
  isLoading.value = true
  
  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData.value
    })
    
    if (response.success) {
      isSubmitted.value = true
      // Optional: reset form
      formData.value = { name: '', email: '', phone: '', service: '', message: '' }
    }
  } catch (error) {
    console.error('Failed to submit form', error)
    alert('An error occurred while sending your message. Please check the console or ensure SMTP is configured.')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
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
