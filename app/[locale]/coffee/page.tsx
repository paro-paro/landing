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
        "El café verde de EthicHub es producido con el esfuerzo de comunidades cafetaleras que reciben el 50% de beneficio de cada compra.",
    },
    en: {
      title: "Green Coffee - EthicHub",
      description:
        "EthicHub's green coffee is produced with the effort of coffee-growing communities that receive a 50% share of the profits from each purchase.",
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
