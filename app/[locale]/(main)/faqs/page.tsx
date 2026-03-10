import type { Metadata } from "next"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { getAllFaqs } from "@/lib/faqs"
import { FaqsContent } from "@/components/faqs-content"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com"

interface FaqsPageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: FaqsPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "faqs" })
  const title = `${t("title")} - EthicHub`
  const description = t("description")
  const canonicalUrl = `${siteUrl}/${locale}/faqs`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${siteUrl}/es/faqs`,
        en: `${siteUrl}/en/faqs`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "EthicHub",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
    },
  }
}

export default async function FaqsPage({ params }: FaqsPageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const categories = getAllFaqs(locale)

  const categoriesData = categories.map((category) => ({
    slug: category.slug,
    title: category.title,
    items: category.items.map((item) => ({
      slug: item.slug,
      title: item.title,
      html: item.html,
    })),
  }))

  return <FaqsContent categories={categoriesData} />
}
