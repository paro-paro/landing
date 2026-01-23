import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { Badge } from "@/components/ui/badge"
import { getAllTags, getPostsByTag } from "@/lib/blog"
import { getAlternateTag } from "@/lib/blog-translations"
import { ArrowLeft } from "lucide-react"
import BlogPostsSearch from "../../blog-posts-search"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com"

interface TagPageProps {
  params: Promise<{ locale: string; tag: string }>
}

export async function generateStaticParams() {
  const esTags = getAllTags("es")
  const enTags = getAllTags("en")
  
  const params = [
    ...esTags.map(({ tag }) => ({ locale: "es", tag })),
    ...enTags.map(({ tag }) => ({ locale: "en", tag })),
  ]
  
  return params
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { locale, tag } = await params
  const decodedTag = decodeURIComponent(tag)

  const description = {
    es: `Artículos sobre ${decodedTag} en el blog de EthicHub. Descubre noticias y novedades sobre inversión de impacto y agricultura sostenible.`,
    en: `Articles about ${decodedTag} on EthicHub blog. Discover news and updates about impact investing and sustainable agriculture.`,
  }

  const currentDescription = description[locale as keyof typeof description] || description.es
  const canonicalUrl = `${siteUrl}/${locale}/blog/tag/${encodeURIComponent(decodedTag)}`

  // Get translated tags for alternate language URLs
  const esTag = locale === "es" ? decodedTag : getAlternateTag(decodedTag, "en", "es")
  const enTag = locale === "en" ? decodedTag : getAlternateTag(decodedTag, "es", "en")

  return {
    title: `${decodedTag} - Blog - EthicHub`,
    description: currentDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${siteUrl}/es/blog/tag/${encodeURIComponent(esTag)}`,
        en: `${siteUrl}/en/blog/tag/${encodeURIComponent(enTag)}`,
      },
    },
    openGraph: {
      title: `${decodedTag} - Blog - EthicHub`,
      description: currentDescription,
      url: canonicalUrl,
      siteName: "EthicHub",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [
        {
          url: `${siteUrl}/home.avif`,
          width: 1200,
          height: 630,
          alt: `${decodedTag} - EthicHub Blog`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${decodedTag} - Blog - EthicHub`,
      description: currentDescription,
      images: [`${siteUrl}/home.avif`],
    },
  }
}

export default async function TagPage({ params }: TagPageProps) {
  const { locale, tag } = await params
  setRequestLocale(locale)
  const t = await getTranslations("blog")

  const decodedTag = decodeURIComponent(tag)
  const posts = getPostsByTag(decodedTag, locale)
  const allTags = getAllTags(locale)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="pt-24 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Back link */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToBlog")}
          </Link>

          <div className="mb-6 sm:mb-12">
            <div className="flex items-center gap-2 sm:gap-5 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
                {decodedTag}
              </h1>
              <Badge variant="secondary" className="text-sm sm:text-lg px-2 sm:px-3 py-0.5 sm:py-1 border border-border">
                {posts.length} {posts.length === 1 ? t("article") : t("articles")}
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground">
              {t("taggedWith")} &quot;{decodedTag}&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Main content - Posts */}
            <div className="lg:col-span-3">
              <BlogPostsSearch posts={posts} activeTag={decodedTag} />
            </div>

            {/* Sidebar - All Tags */}
            <aside className="lg:col-span-1 order-first lg:order-last">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-lg font-semibold mb-4">{t("categories")}</h2>
                <div className="flex flex-wrap gap-2">
                  {allTags.map(({ tag: t, count }) => (
                    <Link key={t} href={`/${locale}/blog/tag/${t}`}>
                      <Badge
                        variant={t === decodedTag ? "default" : "outline"}
                        className={t === decodedTag ? "border border-border cursor-pointer" : "border-border hover:bg-accent hover:text-primary cursor-pointer"}
                      >
                        {t} ({count})
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
    </div>
  )
}
