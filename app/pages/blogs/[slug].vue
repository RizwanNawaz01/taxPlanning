<template>
  <div v-if="blog" class="bg-white">
    <!-- Hero Header -->
    <section class="relative bg-[#071721] overflow-hidden pt-36 sm:pt-40 lg:pt-48 pb-14 sm:pb-16 lg:pb-20">
      <div class="absolute inset-0 bg-gradient-to-b from-[#0c1e2e]/50 via-transparent to-transparent pointer-events-none"></div>

      <div class="container mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <!-- Back Link & Breadcrumb -->
        <div class="mb-6 flex items-center gap-2 text-white/70 text-xs sm:text-sm font-medium">
          <NuxtLink to="/blogs" class="hover:text-lime-400 transition-colors flex items-center gap-1.5">
            <span>&larr;</span>
            <span>Back to all insights</span>
          </NuxtLink>
          <span class="text-white/30">•</span>
          <span class="text-lime-400 font-semibold">{{ blog.category }}</span>
        </div>

        <!-- Post Title -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-4xl mb-6">
          {{ blog.title }}
        </h1>

        <!-- Post Meta -->
        <div class="flex flex-wrap items-center gap-4 text-white/70 text-xs sm:text-sm">
          <span class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-lime-400"></span>
            <span>{{ blog.date }}</span>
          </span>
          <span class="text-white/30">•</span>
          <span>{{ readTime }}</span>
          <span class="text-white/30">•</span>
          <NuxtLink
            v-if="resolvedAuthor?.slug"
            :to="`/authors/${resolvedAuthor.slug}`"
            class="hover:text-lime-400 transition-colors underline-offset-2 hover:underline"
          >
            By {{ resolvedAuthor.name }}
          </NuxtLink>
          <span v-else>By {{ blog.author?.name || 'Tax Planning Editorial' }}</span>
        </div>
      </div>
    </section>

    <!-- Post Featured Image & Article Body -->
    <article class="py-12 sm:py-16 lg:py-20">
      <div class="container mx-auto px-6 lg:px-8 xl:px-12 max-w-4xl">
        <!-- Featured Image -->
        <div class="overflow-hidden rounded-2xl lg:rounded-3xl shadow-xl bg-slate-100 aspect-[16/9] mb-10 sm:mb-14">
          <NuxtImg
            :src="blog.image"
            :alt="blog.imageAlt || blog.title"
            priority
            format="webp"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content Body -->
        <div class="prose prose-slate lg:prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
          <template v-for="(block, idx) in blog.content" :key="idx">
            <h2 v-if="block.type === 'heading'" class="text-2xl sm:text-3xl font-bold text-slate-900 mt-8 mb-4">
              {{ block.text }}
            </h2>

            <p v-else-if="block.type === 'paragraph'" class="text-base sm:text-lg text-slate-700 leading-relaxed">
              {{ block.text }}
            </p>

            <ul v-else-if="block.type === 'list'" class="space-y-3 my-4 pl-5 list-disc marker:text-lime-500">
              <li v-for="(item, itemIdx) in block.items" :key="itemIdx" class="text-base sm:text-lg text-slate-700">
                {{ item }}
              </li>
            </ul>
          </template>
        </div>

        <!-- Author & Legal Reviewer Cards (Matching Design Screenshot) -->
        <div v-if="shouldShowReviewer || shouldShowAuthor" class="mt-14 space-y-6 sm:space-y-8">
          <!-- 1. Legally Reviewed by Section (Can be shown/hidden individually via showReviewer) -->
          <BlogAuthorReviewerCard
            v-if="shouldShowReviewer"
            title-prefix="Legally Reviewed by"
            :person="resolvedReviewer"
            type="reviewer"
          />

          <!-- 2. Authored by Section (Can be shown/hidden individually via showAuthor) -->
          <BlogAuthorReviewerCard
            v-if="shouldShowAuthor"
            title-prefix="Authored by"
            :person="resolvedAuthor"
            type="author"
          />
        </div>

        <!-- Navigation back to blogs -->
        <div class="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
          <NuxtLink
            to="/blogs"
            class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary hover:underline transition-all"
          >
            <span>&larr; More Articles</span>
          </NuxtLink>

          <span class="text-xs text-slate-400">
            Published on {{ blog.date }}
          </span>
        </div>
      </div>
    </article>

    <!-- Partner with Us Section -->
    <CommonPartner
      title="Need Advice on This Topic?"
      description="Speak directly with our qualified UAE Corporate Tax and VAT consultants for tailored strategic advisory."
      button-text="Book a Consultation"
      bg-class="bg-[#F8F9FA]"
    />
  </div>

  <!-- Fallback if not found -->
  <div v-else class="min-h-[50vh] flex flex-col items-center justify-center py-20 text-center px-4">
    <h1 class="text-3xl font-bold text-slate-900 mb-4">Article Not Found</h1>
    <p class="text-slate-600 mb-6">The blog post you are looking for does not exist or has been moved.</p>
    <Button to="/blogs" variant="dark">
      Return to Blog
    </Button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import rawBlogs from '~/data/blogs.json'
import { calculateReadTime } from '~/utils/readTime'
import { resolveAuthor } from '~/utils/author'

definePageMeta({
  alias: ['/blogs/:slug']
})

const route = useRoute()
const slug = computed(() => route.params.slug)

const blog = computed(() => {
  const found = rawBlogs.find(item => item.slug === slug.value)
  if (!found) return null
  return {
    ...found,
    readTime: calculateReadTime(found.content) || found.readTime
  }
})

// Dynamic read time computed from article content
const readTime = computed(() => blog.value?.readTime || '1 min read')

// Resolved Author & Reviewer Profiles
const resolvedAuthor = computed(() => {
  if (!blog.value?.author) return null
  return resolveAuthor(blog.value.author)
})

const resolvedReviewer = computed(() => {
  const reviewerData = blog.value?.reviewer || blog.value?.reviewedBy
  if (!reviewerData) return null
  return resolveAuthor(reviewerData)
})

// Conditions to show/hide individually
const shouldShowAuthor = computed(() => {
  if (!blog.value) return false
  if (blog.value.showAuthor === false) return false
  return Boolean(resolvedAuthor.value && (resolvedAuthor.value.bio || resolvedAuthor.value.name))
})

const shouldShowReviewer = computed(() => {
  if (!blog.value) return false
  if (blog.value.showReviewer === false) return false
  return Boolean(resolvedReviewer.value && (resolvedReviewer.value.bio || resolvedReviewer.value.name))
})

// Set SEO for article
const siteUrl = 'https://taxplanning.ae'

if (blog.value) {
  useSeoMeta({
    title: `${blog.value.title} | Tax Planning UAE`,
    description: blog.value.excerpt,
    ogTitle: blog.value.title,
    ogDescription: blog.value.excerpt,
    ogUrl: `${siteUrl}/blogs/${blog.value.slug}`,
    ogType: 'article',
    ogImage: `${siteUrl}${blog.value.image}`,
    twitterCard: 'summary_large_image',
    twitterTitle: blog.value.title,
    twitterDescription: blog.value.excerpt,
    twitterImage: `${siteUrl}${blog.value.image}`
  })

  useHead({
    title: `${blog.value.title} | Tax Planning UAE`,
    link: [
      { rel: 'canonical', href: `${siteUrl}/blogs/${blog.value.slug}` }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: blog.value.title,
          description: blog.value.excerpt,
          image: `${siteUrl}${blog.value.image}`,
          datePublished: blog.value.date,
          author: {
            '@type': 'Person',
            name: blog.value.author?.name || 'Tax Planning UAE Editorial Team'
          },
          publisher: {
            '@type': 'Organization',
            name: 'taxplanning.ae',
            logo: {
              '@type': 'ImageObject',
              url: `${siteUrl}/logo.webp`
            }
          }
        })
      }
    ]
  })
}
</script>
