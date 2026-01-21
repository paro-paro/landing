import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import CoffeeContent from "./coffee-content"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const seo = {
    es: {
      title: "Café Verde - EthicHub",
      description:
        "Café verde de especialidad con impacto social y trazabilidad real.",
    },
    en: {
      title: "Green Coffee - EthicHub",
      description:
        "Specialty green coffee with social impact and real traceability.",
    },
  }

  const currentSeo = seo[locale as keyof typeof seo] || seo.es
  const canonicalUrl = `${siteUrl}/${locale}/coffee`

  return {
    title: currentSeo.title,
    description: currentSeo.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${siteUrl}/es/coffee`,
        en: `${siteUrl}/en/coffee`,
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

export default async function CoffeePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <CoffeeContent />
}
