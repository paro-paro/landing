import { setRequestLocale, getTranslations } from "next-intl/server"
import { CookiesContentEs } from "./cookies-content-es"
import { CookiesContentEn } from "./cookies-content-en"
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
      title: "Política de Cookies",
      description: "Política de cookies de EthicHub. Información sobre qué son las cookies, tipos de cookies utilizadas, cómo desactivarlas y cookies de terceros.",
    },
    en: {
      title: "Cookies Policy",
      description: "EthicHub Cookies Policy. Information about what cookies are, types of cookies used, how to deactivate them and third-party cookies.",
    },
  }

  const currentSeo = seo[locale as keyof typeof seo] || seo.es

  return {
    title: `${currentSeo.title} - EthicHub`,
    description: currentSeo.description,
    alternates: {
      canonical: `${siteUrl}/${locale}/cookies`,
      languages: {
        es: `${siteUrl}/es/cookies`,
        en: `${siteUrl}/en/cookies`,
      },
    },
    openGraph: {
      title: `${currentSeo.title} - EthicHub`,
      description: currentSeo.description,
      url: `${siteUrl}/${locale}/cookies`,
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

export default async function CookiesPage({
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
          {t("cookies.title")}
        </h1>

        {locale === "en" ? (
          <CookiesContentEn />
        ) : (
          <CookiesContentEs />
        )}
      </div>
    </div>
  )
}
