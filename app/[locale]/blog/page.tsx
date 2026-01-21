import Link from "next/link"
import Image from "next/image"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllPosts, getAllTags } from "@/lib/blog"
import { Calendar, Clock, User } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  const seo = {
    es: {
      title: "Blog - EthicHub",
      description:
        "Descubre artículos sobre inversiones con impacto, café, agricultura sostenible y de cómo tu dinero puede generar un cambio positivo.",
    },
    en: {
      title: "Blog - EthicHub",
      description:
        "Explore articles about impact investing, coffee, sustainable agriculture and how your money can drive positive change.",
    },
  }

  const currentSeo = seo[locale as keyof typeof seo] || seo.es
  const canonicalUrl = `${siteUrl}/${locale}/blog`

  return {
    title: currentSeo.title,
    description: currentSeo.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${siteUrl}/es/blog`,
        en: `${siteUrl}/en/blog`,
      },
    },
    openGraph: {
      title: currentSeo.title,
      description: currentSeo.description,
      url: canonicalUrl,
      siteName: "EthicHub",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: currentSeo.title,
      description: currentSeo.description,
    },
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("blog")

  const posts = getAllPosts(locale)
  const tags = getAllTags(locale)

  const dateLocale = locale === "en" ? "en-US" : "es-ES"

  return (
    <div className="pt-24 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 sm:mb-12">
            <div className="flex items-center gap-2 sm:gap-5 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground">{t("title")}</h1>
              <Badge variant="secondary" className="text-sm sm:text-lg px-2 sm:px-3 py-0.5 sm:py-1 border border-border">
                {posts.length} {posts.length === 1 ? t("article") : t("articles")}
              </Badge>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Main content - Posts */}
            <div className="lg:col-span-3 space-y-6 sm:space-y-12">
              {posts.length === 0 ? (
                <p className="text-muted-foreground">{t("noArticles")}</p>
              ) : (
                posts.map((post) => (
                  <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="block">
                    <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {post.frontmatter.tags?.map((tag) => (
                            <Badge key={tag} variant="secondary" className="border border-border">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className="text-xl sm:text-2xl hover:text-primary transition-colors">
                          {post.frontmatter.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {post.frontmatter.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
                      </CardContent>
                    </Card>
                  </Link>
                ))
              )}
            </div>

            {/* Sidebar - Tags */}
            <aside className="lg:col-span-1 order-first lg:order-last">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-lg font-semibold mb-4">{t("categories")}</h2>
                {tags.length === 0 ? (
                  <p className="text-sm text-muted-foreground">{t("noCategories")}</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {tags.map(({ tag, count }) => (
                      <Link key={tag} href={`/${locale}/blog/tag/${tag}`}>
                        <Badge variant="outline" className="border-border hover:bg-accent hover:text-primary cursor-pointer">
                          {tag} ({count})
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
    </div>
  )
}
