<template>
  <div class="bg-white">
    <!-- Hero Section (Matches Mockup Desktop & Mobile) -->
    <section class="relative bg-[#071721] overflow-hidden pt-36 sm:pt-40 lg:pt-60 pb-14 sm:pb-16 lg:pb-24">
      <!-- Subtle Ambient Glow -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#0c1e2e]/50 via-transparent to-transparent pointer-events-none"></div>

      <div class="container mx-auto px-6 lg:px-8 xl:px-12 2xl:px-12 relative z-10">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 lg:gap-12" data-aos="blur-in">
          <!-- Title on Left -->
          <div>
            <h1 class="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white tracking-tight leading-tight">
              Blogs
            </h1>
          </div>

          <!-- Subtitle on Right (Desktop) / Below (Mobile) -->
          <div class="lg:max-w-xl">
            <p class="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
              Expert insights, practical guides, and the latest updates on UAE tax, accounting, VAT, and business finance.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts List Section -->
    <section class="py-12 sm:py-16 lg:py-20">
      <div class="container mx-auto px-16">
        <!-- Vertical List of Blog Cards -->
        <div class="space-y-8 sm:space-y-10 lg:space-y-12">
          <article
            v-for="(blog, index) in visibleBlogs"
            :key="blog.id"
            class="group flex flex-col md:flex-row md:items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10"
            data-aos="fade-up"
            :data-aos-delay="index * 80"
          >
            <!-- Thumbnail Image -->
            <NuxtLink
              :to="`/blogs/${blog.slug}`"
              :aria-label="blog.title"
              class="w-full md:w-[280px] lg:w-[330px] xl:w-[380px] shrink-0 aspect-[16/10] overflow-hidden rounded-2xl lg:rounded-2xl bg-slate-100 shadow-sm group-hover:shadow-md transition-all duration-300 block"
            >
              <NuxtImg
                :src="blog.image"
                :alt="blog.imageAlt || blog.title"
                loading="lazy"
                format="webp"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </NuxtLink>

            <!-- Card Content (Title & Read More) -->
            <div class="flex-1 flex flex-col justify-center">
              <NuxtLink :to="`/blogs/${blog.slug}`" class="block">
                <h2 class="text-lg sm:text-xl lg:text-[1.5rem] xl:text-[1.65rem] font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug sm:leading-snug lg:leading-tight mb-2 sm:mb-3">
                  {{ blog.title }}
                </h2>
              </NuxtLink>

              <div>
                <NuxtLink
                  :to="`/blogs/${blog.slug}`"
                  class="inline-flex items-center gap-1.5 text-slate-600 font-medium text-sm sm:text-base group-hover:text-primary transition-all duration-200"
                >
                  <span>Read More</span>
                  <span class="group-hover:translate-x-1 transition-transform duration-200 leading-none text-base">&rarr;</span>
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>

        <!-- Load More Button (Centered) -->
        <div v-if="hasMore" class="flex justify-center mt-12 sm:mt-16 lg:mt-20" data-aos="fade-up">
          <Button
            variant="dark"
            size="lg"
            @click="loadMore"
          >
            Load More
          </Button>
        </div>
      </div>
    </section>

    <!-- Partner with Us Section (Reusable Component matching mockups) -->
    <CommonPartner
      title="Partner with Us"
      description="For lawyers, accountants, auditors, corporate advisers, private bankers, and wealth managers with clients who need tax expertise."
      button-text="Book a Consultation"
      bg-class="bg-[#F5F5F5]"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import rawBlogs from '~/data/blogs.json'
import { calculateReadTime } from '~/utils/readTime'

definePageMeta({
  alias: ['/blog', '/blogs']
})

// Blog data sourced directly from JSON with dynamic readTime calculation
const blogs = ref(
  (rawBlogs || []).map(blog => ({
    ...blog,
    readTime: calculateReadTime(blog.content) || blog.readTime
  }))
)

// Initially display 5 blogs as shown in the desktop/mobile mockups
const visibleCount = ref(5)

const visibleBlogs = computed(() => {
  return blogs.value.slice(0, visibleCount.value)
})

const hasMore = computed(() => {
  return visibleCount.value < blogs.value.length
})

const loadMore = () => {
  visibleCount.value += 5
}

// SEO & Structured Data
const siteUrl = 'https://taxplanning.ae'
const pageTitle = 'Blog | Tax Planning UAE'
const pageDescription = 'Expert insights, practical guides, and the latest updates on UAE tax, accounting, VAT, and business finance.'

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogUrl: `${siteUrl}/blog`,
  ogType: 'website',
  ogImage: `${siteUrl}/Blog/uae-corporate-tax-guide-2026.webp`,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: `${siteUrl}/Blog/uae-corporate-tax-guide-2026.webp`
})

useHead({
  title: pageTitle,
  link: [
    { rel: 'canonical', href: `${siteUrl}/blog` }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: pageTitle,
        description: pageDescription,
        url: `${siteUrl}/blog`,
        publisher: {
          '@type': 'Organization',
          name: 'taxplanning.ae',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.webp`
          }
        },
        blogPost: blogs.value.map(blog => ({
          '@type': 'BlogPosting',
          headline: blog.title,
          description: blog.excerpt,
          url: `${siteUrl}/blog/${blog.slug}`,
          image: `${siteUrl}${blog.image}`,
          datePublished: blog.date,
          author: {
            '@type': 'Person',
            name: blog.author?.name || 'Tax Planning UAE Editorial Team'
          }
        }))
      })
    }
  ]
})
</script>
