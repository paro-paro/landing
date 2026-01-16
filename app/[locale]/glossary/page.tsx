import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import GlossaryContent from "./glossary-content"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const seo = {
    es: {
      title: "Glosario - EthicHub",
      description:
        "Glosario de términos sobre blockchain, DeFi, inversión de impacto y café de especialidad. Aprende los conceptos clave del ecosistema EthicHub.",
    },
    en: {
      title: "Glossary - EthicHub",
      description:
        "Glossary of terms about blockchain, DeFi, impact investing and specialty coffee. Learn the key concepts of the EthicHub ecosystem.",
    },
  }

  const currentSeo = seo[locale as keyof typeof seo] || seo.es
  const canonicalUrl = `${siteUrl}/${locale}/glossary`

  return {
    title: currentSeo.title,
    description: currentSeo.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${siteUrl}/es/glossary`,
        en: `${siteUrl}/en/glossary`,
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

export default async function GlossaryPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <GlossaryContent />
}
