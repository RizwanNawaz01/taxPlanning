<template>
  <div v-if="author" class="bg-white min-h-screen">
    <!-- Hero Header -->
    <section class="relative bg-[#071721] overflow-hidden pt-36 sm:pt-40 lg:pt-48 pb-14 sm:pb-16 lg:pb-24">
      <div class="absolute inset-0 bg-gradient-to-b from-[#0c1e2e]/50 via-transparent to-transparent pointer-events-none"></div>

      <div class="container mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <!-- Breadcrumbs -->
        <nav aria-label="Breadcrumb" class="mb-6 flex items-center flex-wrap gap-2 text-white/70 text-xs sm:text-sm font-medium">
          <NuxtLink to="/" class="hover:text-lime-400 transition-colors">Home</NuxtLink>
          <span class="text-white/30">•</span>
          <NuxtLink to="/blogs" class="hover:text-lime-400 transition-colors">Insights</NuxtLink>
          <span class="text-white/30">•</span>
          <span class="text-lime-400 font-semibold">Author Profile</span>
        </nav>

        <!-- Profile Showcase Header -->
        <div class="flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 lg:gap-10">
          <!-- Circular Badge / Photo -->
          <div class="shrink-0">
            <div
              v-if="author.avatar"
              class="w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
            >
              <NuxtImg
                :src="author.avatar"
                :alt="author.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              v-else
              class="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#0c3a2e] via-[#093126] to-[#041a14] border-2 border-emerald-500/40 shadow-2xl flex items-center justify-center p-4 text-center select-none"
            >
              <span class="text-white font-semibold text-xs sm:text-sm leading-snug whitespace-pre-line text-center">
                {{ author.badgeText || author.company || 'Tax Planning\nUAE' }}
              </span>
            </div>
          </div>

          <!-- Profile Details -->
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                <svg class="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Verified Contributor</span>
              </span>

              <span v-if="author.experience" class="text-white/60 text-xs sm:text-sm">
                {{ author.experience }}
              </span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-2">
              {{ author.name }}
            </h1>

            <p class="text-lime-400 font-medium text-base sm:text-lg mb-4">
              {{ author.fullRole || author.role }} • {{ author.company || 'Tax Planning UAE' }}
            </p>

            <div class="flex flex-wrap items-center gap-4 text-white/70 text-xs sm:text-sm">
              <span v-if="author.location" class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ author.location }}</span>
              </span>

              <span class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span>{{ authoredBlogs.length + reviewedBlogs.length }} Published Insights</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Author Biography & Areas of Expertise Section -->
    <section class="py-12 sm:py-16 bg-[#F8F9FA] border-b border-slate-200">
      <div class="container mx-auto px-6 lg:px-8 xl:px-12 max-w-4xl">
        <div class="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            About {{ author.name }}
          </h2>

          <p class="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
            {{ author.bio }}
          </p>

          <!-- Specialties Tags -->
          <div v-if="author.specialties && author.specialties.length > 0" class="pt-6 border-t border-slate-100">
            <h3 class="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">
              Areas of Expertise
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="(spec, idx) in author.specialties"
                :key="idx"
                class="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
              >
                {{ spec }}
              </span>
            </div>
          </div>

          <!-- Contact Buttons -->
          <div class="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
            <Button to="/contact" variant="dark">
              Consult with {{ author.name.split(' ')[0] }}
            </Button>
            <NuxtLink
              to="/blogs"
              class="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            >
              <span>&larr; Back to all Insights</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Section -->
    <section class="py-14 sm:py-18 lg:py-20">
      <div class="container mx-auto px-6 lg:px-8 xl:px-12 max-w-5xl">
        
        <!-- Tab selector if author has both authored & reviewed articles -->
        <div v-if="authoredBlogs.length > 0 && reviewedBlogs.length > 0" class="mb-10 flex border-b border-slate-200">
          <button
            class="py-3 px-6 text-base font-bold border-b-2 transition-all -mb-px flex items-center gap-2"
            :class="activeTab === 'authored' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-800'"
            @click="activeTab = 'authored'"
          >
            <span>Authored Articles</span>
            <span class="px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-700">{{ authoredBlogs.length }}</span>
          </button>
          
          <button
            class="py-3 px-6 text-base font-bold border-b-2 transition-all -mb-px flex items-center gap-2"
            :class="activeTab === 'reviewed' ? 'border-primary text-primary' : 'border-transparent text-slate-500 hover:text-slate-800'"
            @click="activeTab = 'reviewed'"
          >
            <span>Legally Reviewed</span>
            <span class="px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-700">{{ reviewedBlogs.length }}</span>
          </button>
        </div>

        <!-- Section Heading if single tab -->
        <div v-else class="mb-10">
          <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">
            {{ authoredBlogs.length > 0 ? 'Articles Authored' : 'Articles Legally Reviewed' }}
          </h2>
          <p class="text-slate-600 text-sm sm:text-base mt-1">
            Practical publications, legal analyses, and tax advisory guides.
          </p>
        </div>

        <!-- Articles Grid / List -->
        <div v-if="displayedArticles.length > 0" class="space-y-8 sm:space-y-10">
          <article
            v-for="article in displayedArticles"
            :key="article.id"
            class="group flex flex-col md:flex-row md:items-center gap-6 lg:gap-8 bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <!-- Thumbnail Image -->
            <NuxtLink
              :to="`/blogs/${article.slug}`"
              class="w-full md:w-[260px] lg:w-[290px] shrink-0 aspect-[16/10] overflow-hidden rounded-xl lg:rounded-2xl bg-slate-100 block"
            >
              <NuxtImg
                :src="article.image"
                :alt="article.imageAlt || article.title"
                loading="lazy"
                format="webp"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </NuxtLink>

            <!-- Card Content -->
            <div class="flex-1 flex flex-col justify-center">
              <div class="flex items-center gap-3 text-xs sm:text-sm text-slate-500 mb-2">
                <span class="text-emerald-700 font-semibold">{{ article.category }}</span>
                <span>•</span>
                <span>{{ article.date }}</span>
                <span>•</span>
                <span>{{ article.readTime }}</span>
              </div>

              <NuxtLink :to="`/blogs/${article.slug}`" class="block">
                <h3 class="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug mb-2 sm:mb-3">
                  {{ article.title }}
                </h3>
              </NuxtLink>

              <p class="text-slate-600 text-sm line-clamp-2 mb-4 leading-relaxed">
                {{ article.excerpt }}
              </p>

              <div>
                <NuxtLink
                  :to="`/blogs/${article.slug}`"
                  class="inline-flex items-center gap-1.5 text-primary font-semibold text-sm sm:text-base group-hover:underline"
                >
                  <span>Read Full Article</span>
                  <span class="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200/70 p-8">
          <p class="text-slate-600 text-base mb-4">No published articles under this category yet.</p>
          <NuxtLink to="/blogs" class="text-primary font-bold hover:underline">
            Explore All Blog Posts &rarr;
          </NuxtLink>
        </div>

      </div>
    </section>

    <!-- Partner CTA -->
    <CommonPartner
      title="Looking for Expert Legal or Tax Advisory?"
      description="Connect directly with our senior consultants for strategic corporate tax, VAT, and estate planning advisory in the UAE."
      button-text="Book a Consultation"
      bg-class="bg-[#F8F9FA]"
    />
  </div>

  <!-- Fallback if Author Not Found -->
  <div v-else class="min-h-[50vh] flex flex-col items-center justify-center py-24 text-center px-4">
    <h1 class="text-3xl font-bold text-slate-900 mb-4">Author Profile Not Found</h1>
    <p class="text-slate-600 mb-6">The author or reviewer you are looking for does not exist or has been moved.</p>
    <Button to="/blogs" variant="dark">
      Return to Insights
    </Button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import rawBlogs from '~/data/blogs.json'
import { getAuthorBySlug } from '~/utils/author'
import { calculateReadTime } from '~/utils/readTime'

definePageMeta({
  alias: ['/author/:slug']
})

const route = useRoute()
const slug = computed(() => route.params.slug)

// Load Author Profile
const author = computed(() => {
  return getAuthorBySlug(slug.value)
})

const activeTab = ref('authored')

// Process all blogs with dynamic read time
const processedBlogs = computed(() => {
  return (rawBlogs || []).map(b => ({
    ...b,
    readTime: calculateReadTime(b.content) || b.readTime
  }))
})

// Blogs authored by this person
const authoredBlogs = computed(() => {
  if (!author.value) return []
  return processedBlogs.value.filter(blog => {
    if (!blog.author) return false
    if (typeof blog.author === 'string') return blog.author.toLowerCase() === author.value.slug.toLowerCase()
    return blog.author.slug === author.value.slug || blog.author.name?.toLowerCase() === author.value.name.toLowerCase()
  })
})

// Blogs legally reviewed by this person
const reviewedBlogs = computed(() => {
  if (!author.value) return []
  return processedBlogs.value.filter(blog => {
    const rev = blog.reviewer || blog.reviewedBy
    if (!rev) return false
    if (typeof rev === 'string') return rev.toLowerCase() === author.value.slug.toLowerCase()
    return rev.slug === author.value.slug || rev.name?.toLowerCase() === author.value.name.toLowerCase()
  })
})

// Displayed articles based on active tab
const displayedArticles = computed(() => {
  if (authoredBlogs.value.length > 0 && reviewedBlogs.value.length === 0) {
    return authoredBlogs.value
  }
  if (reviewedBlogs.value.length > 0 && authoredBlogs.value.length === 0) {
    return reviewedBlogs.value
  }
  return activeTab.value === 'authored' ? authoredBlogs.value : reviewedBlogs.value
})

// SEO & Schema
const siteUrl = 'https://taxplanning.ae'

if (author.value) {
  useSeoMeta({
    title: `${author.value.name} | ${author.value.company || 'Tax Planning UAE'}`,
    description: author.value.bio,
    ogTitle: `${author.value.name} - ${author.value.role}`,
    ogDescription: author.value.bio,
    ogUrl: `${siteUrl}/authors/${author.value.slug}`,
    ogType: 'profile',
    twitterCard: 'summary'
  })

  useHead({
    title: `${author.value.name} | Tax Planning UAE`,
    link: [
      { rel: 'canonical', href: `${siteUrl}/authors/${author.value.slug}` }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          mainEntity: {
            '@type': 'Person',
            name: author.value.name,
            jobTitle: author.value.role,
            worksFor: {
              '@type': 'Organization',
              name: author.value.company || 'Tax Planning UAE'
            },
            description: author.value.bio
          }
        })
      }
    ]
  })
}
</script>
