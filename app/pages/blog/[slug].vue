<template>
  <div v-if="blog" class="bg-white">
    <!-- Hero Header -->
    <section class="relative bg-[#071721] overflow-hidden pt-36 sm:pt-40 lg:pt-48 pb-14 sm:pb-16 lg:pb-20">
      <div class="absolute inset-0 bg-gradient-to-b from-[#0c1e2e]/50 via-transparent to-transparent pointer-events-none"></div>

      <div class="container mx-auto px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10">
        <!-- Back Link & Breadcrumb -->
        <div class="mb-6 flex items-center gap-2 text-white/70 text-xs sm:text-sm font-medium">
          <NuxtLink to="/blog" class="hover:text-lime-400 transition-colors flex items-center gap-1.5">
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
          <span>{{ blog.readTime }}</span>
          <span class="text-white/30">•</span>
          <span>By {{ blog.author?.name || 'Tax Planning Editorial' }}</span>
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

        <!-- Author Bio Card -->
        <div class="mt-14 pt-8 border-t border-slate-200 flex items-center justify-between flex-wrap gap-4">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-[#071721] text-white flex items-center justify-center font-bold text-lg">
              TP
            </div>
            <div>
              <p class="font-bold text-slate-900">{{ blog.author?.name || 'Tax Planning Editorial' }}</p>
              <p class="text-xs sm:text-sm text-slate-500">{{ blog.author?.role || 'Tax Advisory Specialist' }}</p>
            </div>
          </div>

          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary hover:underline transition-all"
          >
            <span>&larr; More Articles</span>
          </NuxtLink>
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
    <NuxtLink to="/blog" class="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-secondary">
      Return to Blog
    </NuxtLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import rawBlogs from '~/data/blogs.json'

definePageMeta({
  alias: ['/blogs/:slug']
})

const route = useRoute()
const slug = computed(() => route.params.slug)

const blog = computed(() => {
  return rawBlogs.find(item => item.slug === slug.value)
})

// Set SEO for article
const siteUrl = 'https://taxplanning.ae'

if (blog.value) {
  useSeoMeta({
    title: `${blog.value.title} | Tax Planning UAE`,
    description: blog.value.excerpt,
    ogTitle: blog.value.title,
    ogDescription: blog.value.excerpt,
    ogUrl: `${siteUrl}/blog/${blog.value.slug}`,
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
      { rel: 'canonical', href: `${siteUrl}/blog/${blog.value.slug}` }
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
