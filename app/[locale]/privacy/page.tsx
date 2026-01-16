import { setRequestLocale, getTranslations } from "next-intl/server"
import { PrivacyContentEs } from "./privacy-content-es"
import { PrivacyContentEn } from "./privacy-content-en"
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
      title: "Política de Privacidad",
      description: "Política de privacidad de EthicHub. Información sobre el tratamiento de datos personales, derechos del usuario, medidas de seguridad y contacto para ejercer sus derechos.",
    },
    en: {
      title: "Privacy Policy",
      description: "EthicHub Privacy Policy. Information about personal data processing, user rights, security measures, and contact for exercising your rights.",
    },
  }

  const currentSeo = seo[locale as keyof typeof seo] || seo.es

  return {
    title: `${currentSeo.title} - EthicHub`,
    description: currentSeo.description,
    alternates: {
      canonical: `${siteUrl}/${locale}/privacy`,
      languages: {
        es: `${siteUrl}/es/privacy`,
        en: `${siteUrl}/en/privacy`,
      },
    },
    openGraph: {
      title: `${currentSeo.title} - EthicHub`,
      description: currentSeo.description,
      url: `${siteUrl}/${locale}/privacy`,
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

export default async function PrivacyPage({
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
          {t("privacy.title")}
        </h1>

        {locale === "en" ? (
          <PrivacyContentEn />
        ) : (
          <PrivacyContentEs />
        )}
      </div>
    </div>
  )
}
