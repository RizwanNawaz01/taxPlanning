<template>
  <section ref="statsSection" class="py-10 bg-surface px-6 lg:px-8 xl:px-12 2xl:px-12">
    <div class="container flex flex-col md:flex-row justify-center items-center text-center md:divide-x divide-slate-300">
      <div v-for="(stat, index) in stats" :key="index" class="relative flex-1 w-full py-10 lg:py-8 md:py-2 px-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[1px] after:bg-slate-300 md:after:hidden last:after:hidden">
        <h3 class="text-[30px] md:text-[20px] lg:text-[26px]  xl:text-[32px] font-semibold text-black mb-2">
          {{ displayValues[index] }}
        </h3>
        <p class="text-[20px] md:text-xs lg:text-[15px] xl:text-[20px] text-black max-w-[300px] mx-auto leading-snug lg:leading-normal" v-html="stat.label"></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const stats = [
  {
    value: '2000+',
    label: 'Accounting and tax <br> consultations'
  },
  {
    value: 'Specialist Team',
    label: 'Qualified CAs, ACCAs <br> and CPAs'
  },
  {
    value: 'UAE-wide',
    label: 'Mainland and free zone <br> expertise, across all 7 emirates'
  }
]

const statsSection = ref(null)
const displayValues = ref(stats.map(s => s.value))
const hasAnimated = ref(false)

const animateValues = () => {
  stats.forEach((stat, index) => {
    // Check if the value contains digits
    const numMatch = stat.value.match(/(\d+)/)
    if (numMatch) {
      const targetNumber = parseInt(numMatch[1], 10)
      const prefix = stat.value.substring(0, numMatch.index)
      const suffix = stat.value.substring(numMatch.index + numMatch[1].length)
      
      let currentNumber = 1000
      const duration = 2000 // 2 seconds
      const interval = 20 // 50 FPS
      const step = Math.ceil(targetNumber / (duration / interval))
      
      displayValues.value[index] = `${prefix}0${suffix}`
      
      const timer = setInterval(() => {
        currentNumber += step
        if (currentNumber >= targetNumber) {
          currentNumber = targetNumber
          clearInterval(timer)
        }
        displayValues.value[index] = `${prefix}${currentNumber}${suffix}`
      }, interval)
    }
  })
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasAnimated.value) {
      hasAnimated.value = true
      animateValues()
    }
  }, { threshold: 0.5 })

  if (statsSection.value) {
    observer.observe(statsSection.value)
  }
})
</script>
