import type { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'
import { getAllPosts, getAllTags } from '@/lib/blog'
import { getAlternateSlug, getAlternateTag } from '@/lib/blog-translations'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ethichub.com'

// Originator slugs - must match farmers/[slug]/page.tsx
const originatorSlugs = [
  'um-coffee',
  'alcala-tradewise',
  'costal-campesino',
  'fabedi',
  'codicafe',
  'san-marcos-dregalado',
  'anepaan-odeput',
  'cafe-fundadores',
  'cafe-sustentable',
  'cosechando-riqueza',
  'reserva-1920',
  'nortfruit',
  'agros',
  'productos-agroalimentarios',
]

// Static pages that exist for all locales
const staticPages = [
  '',           // homepage
  '/blog',
  '/coffee',
  '/farmers',
  '/glossary',
  '/terms',
  '/privacy',
  '/cookies',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Static pages for each locale
  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            es: `${siteUrl}/es${page}`,
            en: `${siteUrl}/en${page}`,
          },
        },
      })
    }
  }

  // Blog posts for each locale
  for (const locale of locales) {
    const posts = getAllPosts(locale)
    for (const post of posts) {
      const esSlug = locale === 'es' ? post.slug : getAlternateSlug(post.slug, 'en', 'es')
      const enSlug = locale === 'en' ? post.slug : getAlternateSlug(post.slug, 'es', 'en')
      entries.push({
        url: `${siteUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.frontmatter.date),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            es: `${siteUrl}/es/blog/${esSlug}`,
            en: `${siteUrl}/en/blog/${enSlug}`,
          },
        },
      })
    }
  }

  // Tag pages for each locale
  for (const locale of locales) {
    const tags = getAllTags(locale)
    for (const { tag } of tags) {
      const esTag = locale === 'es' ? tag : getAlternateTag(tag, 'en', 'es')
      const enTag = locale === 'en' ? tag : getAlternateTag(tag, 'es', 'en')
      entries.push({
        url: `${siteUrl}/${locale}/blog/tag/${encodeURIComponent(tag)}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
        alternates: {
          languages: {
            es: `${siteUrl}/es/blog/tag/${encodeURIComponent(esTag)}`,
            en: `${siteUrl}/en/blog/tag/${encodeURIComponent(enTag)}`,
          },
        },
      })
    }
  }

  // Farmer/originator profile pages for each locale
  for (const locale of locales) {
    for (const slug of originatorSlugs) {
      entries.push({
        url: `${siteUrl}/${locale}/farmers/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            es: `${siteUrl}/es/farmers/${slug}`,
            en: `${siteUrl}/en/farmers/${slug}`,
          },
        },
      })
    }
  }

  return entries
}
