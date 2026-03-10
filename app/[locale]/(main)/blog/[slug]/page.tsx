import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { Badge } from "@/components/ui/badge"
import { getAllSlugs, getPostBySlug } from "@/lib/blog"
import { getAlternateSlug } from "@/lib/blog-translations"
import { Calendar, Clock, ArrowLeft, User } from "lucide-react"
import { ArticleSchema } from "@/components/structured-data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com"

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
  // Generate params for both locales
  const esSlugs = getAllSlugs("es")
  const enSlugs = getAllSlugs("en")
  
  const params = [
    ...esSlugs.map((slug) => ({ locale: "es", slug })),
    ...enSlugs.map((slug) => ({ locale: "en", slug })),
  ]
  
  return params
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: "blog" })
  const post = getPostBySlug(slug, locale)

  if (!post) {
    return {
      title: `${t("postNotFound")} - EthicHub`,
    }
  }

  const canonicalUrl = `${siteUrl}/${locale}/blog/${slug}`
  const ogImage = post.frontmatter.image
    ? `${siteUrl}${post.frontmatter.image}`
    : `${siteUrl}/home.avif`

  // Get translated slugs for alternate language URLs
  const esSlug = locale === "es" ? slug : getAlternateSlug(slug, "en", "es")
  const enSlug = locale === "en" ? slug : getAlternateSlug(slug, "es", "en")

  return {
    title: `${post.frontmatter.title} - EthicHub`,
    description: post.frontmatter.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${siteUrl}/es/blog/${esSlug}`,
        en: `${siteUrl}/en/blog/${enSlug}`,
      },
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: canonicalUrl,
      siteName: "EthicHub",
      type: "article",
      locale: locale === "es" ? "es_ES" : "en_US",
      publishedTime: post.frontmatter.date,
      authors: ["EthicHub"],
      tags: post.frontmatter.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations("blog")

  const post = getPostBySlug(slug, locale)

  if (!post) {
    notFound()
  }

  const dateLocale = locale === "en" ? "en-US" : "es-ES"
  const canonicalUrl = `${siteUrl}/${locale}/blog/${slug}`
  const ogImage = post.frontmatter.image
    ? `${siteUrl}${post.frontmatter.image}`
    : `${siteUrl}/home.avif`

  return (
    <>
      <ArticleSchema
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        url={canonicalUrl}
        image={ogImage}
        datePublished={post.frontmatter.date}
        tags={post.frontmatter.tags}
      />
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-6 lg:px-8">
          <article className="mx-auto max-w-3xl">
            {/* Back link */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToBlog")}
          </Link>

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.frontmatter.tags?.map((tag) => (
                <Link key={tag} href={`/${locale}/blog/tag/${tag}`}>
                  <Badge variant="secondary" className="border border-border hover:bg-secondary/80 cursor-pointer">
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {post.frontmatter.title}
            </h1>

            <p className="text-lg text-muted-foreground mb-6">
              {post.frontmatter.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-b pb-6">
              {post.frontmatter.author && (
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.frontmatter.author}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.frontmatter.date).toLocaleDateString(dateLocale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
          </header>

          {/* Featured Image */}
          {post.frontmatter.image && (
            <div className="relative w-full h-64 sm:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-primary prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:italic prose-blockquote:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-table:text-sm">
            <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("seeMoreArticles")}
            </Link>
          </footer>
        </article>
      </div>
    </>
  )
}
