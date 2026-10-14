<template>
  <article
    v-if="person"
    class="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300"
    :aria-label="`${titlePrefix} ${person.name}`"
  >
    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:gap-8">
      
      <!-- Circular Avatar / Firm Badge (Left Column) -->
      <NuxtLink
        :to="profileUrl"
        :aria-label="`View ${person.name}'s profile`"
        class="shrink-0 group/avatar block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-full"
      >
        <!-- Real photo if provided -->
        <div
          v-if="person.avatar"
          class="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-emerald-900/10 shadow-md group-hover/avatar:scale-105 group-hover/avatar:shadow-lg transition-all duration-300"
        >
          <NuxtImg
            :src="person.avatar"
            :alt="person.name"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Styled Circular Gradient Badge (Matching Design Screenshot) -->
        <div
          v-else
          class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary shadow-md flex items-center justify-center p-3 text-center group-hover/avatar:scale-105 group-hover/avatar:shadow-lg transition-all duration-300 relative overflow-hidden select-none"
        >
          <!-- Subtle ambient inner highlight -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none"></div>
          
          <span class="text-white font-medium text-xs sm:text-[13px] leading-tight text-center whitespace-pre-line tracking-normal relative z-10">
            {{ badgeLabel }}
          </span>
        </div>
      </NuxtLink>

      <!-- Bio Content, Divider, Heading & Subtitle (Right Column) -->
      <div class="flex-1 min-w-0 text-center sm:text-left">
        <!-- Bio Paragraph -->
        <p class="text-slate-700 text-sm sm:text-[15px] lg:text-base leading-relaxed sm:leading-[1.7] mb-6">
          {{ person.bio }}
        </p>

        <!-- Divider Line -->
        <div class="h-px bg-slate-200/80 w-full mb-5"></div>

        <!-- Heading & Role -->
        <div>
          <NuxtLink
            :to="profileUrl"
            class="group inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
          >
            <h3 class="font-serif text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-tight tracking-tight">
              {{ titlePrefix }} {{ person.name }}
            </h3>
          </NuxtLink>
          <p class="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
            {{ person.role }}{{ person.company ? `, ${person.company}` : '' }}
          </p>
        </div>
      </div>

    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  titlePrefix: {
    type: String,
    default: 'Authored by'
  },
  person: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    default: 'author' // 'author' | 'reviewer'
  }
})

const profileUrl = computed(() => {
  if (!props.person?.slug) return '/authors'
  return `/authors/${props.person.slug}`
})

const badgeLabel = computed(() => {
  if (props.person?.badgeText) return props.person.badgeText
  if (props.person?.company) {
    // If company has multiple words, format nicely across 2 lines
    const words = props.person.company.split(' ')
    if (words.length > 2) {
      return `${words.slice(0, 2).join(' ')}\n${words.slice(2).join(' ')}`
    }
    return props.person.company
  }
  return 'Tax Planning\nUAE'
})
</script>
