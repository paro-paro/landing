import { setRequestLocale, getTranslations } from "next-intl/server"
import { TermsContentEs } from "./terms-content-es"
import { TermsContentEn } from "./terms-content-en"
import { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "legal" })

  const seo = {
    es: {
      title: "Términos y Condiciones",
      description: "Términos y condiciones de uso de la plataforma EthicHub. Información sobre servicios de préstamos colaborativos, riesgos, obligaciones y política de privacidad.",
    },
    en: {
      title: "Terms and Conditions",
      description: "Terms and conditions for using the EthicHub platform. Information about collaborative loan services, risks, obligations, and privacy policy.",
    },
  }

  const currentSeo = seo[locale as keyof typeof seo] || seo.es

  return {
    title: `${currentSeo.title} - EthicHub`,
    description: currentSeo.description,
    alternates: {
      canonical: `${siteUrl}/${locale}/terms`,
      languages: {
        es: `${siteUrl}/es/terms`,
        en: `${siteUrl}/en/terms`,
      },
    },
    openGraph: {
      title: `${currentSeo.title} - EthicHub`,
      description: currentSeo.description,
      url: `${siteUrl}/${locale}/terms`,
      siteName: "EthicHub",
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${currentSeo.title} - EthicHub`,
      description: currentSeo.description,
    },
  }
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("legal")

  return (
    <div className="pt-24 sm:pt-32 pb-12 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-12">
          {t("terms.title")}
        </h1>

        {locale === "en" ? (
          <TermsContentEn locale={locale} />
        ) : (
          <TermsContentEs locale={locale} />
        )}
      </div>
    </div>
  )
}
