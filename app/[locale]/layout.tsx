import type React from "react"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/sonner"
import { Nunito } from "next/font/google"
import { locales } from "@/i18n/config"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "../globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const seo = {
    es: {
      title:
        "EthicHub - Inversión en Préstamos Agrícolas | Impacto Financiero y Social",
      description:
        "Descubre a nuestros originadores y empieza a generar Impacto Ambiental, Financiero y Social. Únete a la innovación y conviértete en activista con EthicHub",
    },
    en: {
      title:
        "EthicHub - Create social impact investing online or buying to our farmers",
      description:
        "Discover our originators and start generating Environmental, Financial and Social Impact. Join the innovation and become an activist with EthicHub",
    },
  }

  const currentSeo = seo[locale as keyof typeof seo] || seo.es
  const canonicalUrl = `${siteUrl}/${locale}`

  return {
    title: currentSeo.title,
    description: currentSeo.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${siteUrl}/es`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: currentSeo.title,
      description: currentSeo.description,
      url: canonicalUrl,
      siteName: "EthicHub",
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [
        {
          url: `${siteUrl}/home.avif`,
          width: 1200,
          height: 630,
          alt: "EthicHub - Impact Investment Platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: currentSeo.title,
      description: currentSeo.description,
      images: [`${siteUrl}/home.avif`],
    },
    verification: {
      google: "qZHWwkQe7A-JcXzT4T_xRpMC3dJ_IZc8cLmcNy_bPuQ",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        {
          url: "/ethichub.svg",
          type: "image/svg+xml",
        },
      ],
      apple: "/apple-icon.png",
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={nunito.variable}>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
        <Analytics />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
