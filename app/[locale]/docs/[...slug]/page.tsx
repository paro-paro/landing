import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { getDocBySlug, getAllDocSlugs, getDocsNavigation, getAdjacentDocs } from "@/lib/docs"
import { DocsSidebar } from "@/components/docs-sidebar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DocsMobileNav } from "@/components/docs-mobile-nav"
import { Callout } from "@/components/docs-callout"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com"

interface DocsPageProps {
  params: Promise<{ locale: string; slug: string[] }>
}

export async function generateStaticParams() {
  const esSlugs = getAllDocSlugs("es")
  const enSlugs = getAllDocSlugs("en")

  return [
    ...esSlugs.map((slug) => ({ locale: "es", slug })),
    ...enSlugs.map((slug) => ({ locale: "en", slug })),
  ]
}

export async function generateMetadata({ params }: DocsPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const doc = getDocBySlug(slug, locale)

  if (!doc) {
    return { title: "Not Found - EthicHub" }
  }

  const canonicalUrl = `${siteUrl}/${locale}/docs/${slug.join("/")}`

  return {
    title: `${doc.frontmatter.title} - EthicHub Docs`,
    description: doc.frontmatter.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${doc.frontmatter.title} - EthicHub Docs`,
      description: doc.frontmatter.description,
      url: canonicalUrl,
      siteName: "EthicHub",
      type: "article",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  }
}

export default async function DocsPage({ params }: DocsPageProps) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations("docs")

  const doc = getDocBySlug(slug, locale)
  if (!doc) {
    notFound()
  }

  const sections = getDocsNavigation(locale)
  const { prev, next } = getAdjacentDocs(slug, locale)

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-80 shrink-0 border-r border-border">
          <div className="sticky top-0 h-screen overflow-y-auto py-8 px-4">
            <DocsSidebar sections={sections} locale={locale} />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Mobile Nav */}
          <DocsMobileNav sections={sections} locale={locale} />

          <div className="px-4 sm:px-8 py-8 sm:py-12">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-sm mb-6">
                <Link href={`/${locale}/docs`} className="text-muted-foreground hover:text-primary underline underline-offset-2 decoration-muted-foreground/40 hover:decoration-primary transition-colors">
                  {t("title")}
                </Link>
                <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
                <span className="text-muted-foreground">{doc.frontmatter.sectionTitle}</span>
                <ChevronRight className="h-3 w-3 text-muted-foreground/50" />
                <span className="font-medium text-foreground">{doc.frontmatter.title}</span>
              </nav>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {doc.frontmatter.title}
              </h1>

              {doc.frontmatter.description && (
                <p className="text-lg text-muted-foreground pb-6 mb-8 border-b border-border">
                  {doc.frontmatter.description}
                </p>
              )}

              {/* Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-primary prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline prose-a:hover:underline prose-blockquote:border-l-primary prose-blockquote:italic prose-blockquote:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-table:text-sm">
                <MDXRemote source={doc.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} components={{ Callout }} />
              </div>

              {/* Prev/Next Navigation */}
              <div className="mt-12 grid grid-cols-2 gap-4">
                {prev ? (
                  <Link
                    href={`/${locale}/docs/${prev.slug.join("/")}`}
                    className="group flex items-center gap-4 rounded-lg border border-border p-4 hover:border-primary/40 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="text-right flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground">{t("previous")}</div>
                      <div className="text-sm font-semibold text-foreground truncate">{prev.frontmatter.title}</div>
                    </div>
                  </Link>
                ) : <div />}
                {next ? (
                  <Link
                    href={`/${locale}/docs/${next.slug.join("/")}`}
                    className="group flex items-center gap-4 rounded-lg border border-border p-4 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-muted-foreground">{t("next")}</div>
                      <div className="text-sm font-semibold text-foreground truncate">{next.frontmatter.title}</div>
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                ) : <div />}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
