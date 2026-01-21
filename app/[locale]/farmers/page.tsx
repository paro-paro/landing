import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { Button } from "@/components/ui/button"
import { HoverPrefetchLink } from "@/components/hover-prefetch-link"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ArrowRight } from "lucide-react"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const seo = {
    es: {
      title: "Nuestros Agricultores - EthicHub",
      description:
        "Tus préstamos ayudan a financiar nuestras actividades productivas y de exportación. Conseguimos una mejor calidad y precio por nuestros productos al mismo tiempo que conservamos nuestra tierra, fuente de sustento y riqueza."
    },
    en: {
      title: "Our Farmers - EthicHub",
      description:
        "Your loans help finance our productive and export activities. We achieve better quality and prices for our products while preserving our land, source of livelihood and wealth.",
    },
  }

  const currentSeo = seo[locale as keyof typeof seo] || seo.es
  const canonicalUrl = `${siteUrl}/${locale}/farmers`

  return {
    title: currentSeo.title,
    description: currentSeo.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        es: `${siteUrl}/es/farmers`,
        en: `${siteUrl}/en/farmers`,
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

// Mapping slugs to image paths
const originatorImages: Record<string, string> = {
  "um-coffee": "/umcoffee.jpg",
  "alcala-tradewise": "/cori.jpg",
  "costal-campesino": "/costal.jpg",
  "fabedi": "/fabedi.jpg",
  "codicafe": "/dicafe.jpg",
  "san-marcos-dregalado": "/sanmarcos.jpg",
  "anepaan-odeput": "/anepaan.jpg",
  "cafe-fundadores": "/fundadores.jpg",
  "cafe-sustentable": "/sustenta.jpg",
  "cosechando-riqueza": "/sierra.jpg",
  "reserva-1920": "/reserva.jpg",
  "nortfruit": "/nortfruit.jpg",
  "agros": "/agros.jpg",
  "productos-agroalimentarios": "/prodagroal.jpg",
}

// Ordered by number of originators (most first)
const originadores = [
  {
    country: "México",
    flag: "🇲🇽",
    farmers: [
      { name: "Anepaan O'Depüt", slug: "anepaan-odeput" },
      { name: "Café Fundadores", slug: "cafe-fundadores" },
      { name: "Café Sustentable", slug: "cafe-sustentable" },
      { name: "Cosechando Riqueza", slug: "cosechando-riqueza" },
      { name: "Reserva 1920", slug: "reserva-1920" },
      { name: "Productos Agroalimentarios", slug: "productos-agroalimentarios" },
    ],
  },
  {
    country: "Colombia",
    flag: "🇨🇴",
    farmers: [
      { name: "Alcalá - Tradewise Green Coffee Import & Export", slug: "alcala-tradewise" },
      { name: "Costal Campesino", slug: "costal-campesino" },
      { name: "Fabedi", slug: "fabedi" },
    ],
  },
  {
    country: "Honduras",
    flag: "🇭🇳",
    farmers: [
      { name: "CODICAFE", slug: "codicafe" },
      { name: "San Marcos - D'Regalado Consulting", slug: "san-marcos-dregalado" },
    ],
  },
  {
    country: "Brasil",
    flag: "🇧🇷",
    farmers: [
      { name: "Um Coffee", slug: "um-coffee" },
    ],
  },
  {
    country: "Ecuador",
    flag: "🇪🇨",
    farmers: [
      { name: "Nortfruit", slug: "nortfruit" },
    ],
  },
  {
    country: "Perú",
    flag: "🇵🇪",
    farmers: [
      { name: "Agros", slug: "agros" },
    ],
  },
]

const avatars = [
  "/boram.avif",
  "/neriortiz.jpg",
  "/nicole.png",
]

export default async function FarmersPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("farmers")

  const ethixDocsUrl =
    locale === "en"
      ? "https://ethichub.gitbook.io/ethichub/en/financing-and-guarantee-mechanisms/ethix"
      : "https://ethichub.gitbook.io/ethichub/mecanismos-de-financiamiento-y-garantia/ethix"

  const testimonials = t.raw("testimonials") as Array<{
    quote: string
    author: string
    role: string
    location: string
  }>

  return (
    <>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-12 pt-24 sm:py-20 sm:pt-32">
              {/* Left: Image */}
              <div className="relative lg:h-[600px] flex items-center justify-center order-2 lg:order-1">
                <div className="relative w-full h-[400px] lg:h-full">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/50">
                    <Image
                      src="/farmers.avif"
                      alt="Coffee farmers at work"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-highlight/15 border border-highlight/50 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  {t("badge")}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
                  {t("title")}
                </h1>

                <p className="mt-4 text-2xl sm:text-3xl font-semibold text-primary">{t("subtitle")}</p>

                <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl text-pretty">
                  {t("description")}
                </p>

                <div className="mt-10 flex flex-col-reverse sm:flex-row items-center lg:items-start gap-4">
                  <Button size="lg" variant="secondary" className="gap-2 px-8" asChild>
                    <Link href="https://www.instagram.com/ethichub_greencoffee/" target="_blank" rel="noopener noreferrer">
                      {t("meetFarmers")}
                    </Link>
                  </Button>
                  <Button size="lg" className="gap-2 px-8" asChild>
                    <Link href="https://app.ethichub.com/lending" target="_blank" rel="noopener noreferrer">
                      {t("startLending")}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Originadores Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">
                {t("originators.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("originators.subtitle")}
              </p>
            </div>
            
            {/* Country Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 sm:mb-12">
              {originadores.map((origin) => (
                <div
                  key={origin.country}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border"
                >
                  <span className="text-3xl">{origin.flag}</span>
                  <span className="text-sm font-medium text-foreground">{origin.country}</span>
                  <span className="text-xs text-muted-foreground">
                    {origin.farmers.length} {origin.farmers.length > 1 ? t("originators.originators") : t("originators.originator")}
                  </span>
                </div>
              ))}
            </div>

            {/* All Originators Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {originadores.flatMap((origin) =>
                origin.farmers.map((farmer) => {
                  const imagePath = originatorImages[farmer.slug] || "/placeholder.jpg"
                  return (
                    <HoverPrefetchLink
                      key={farmer.slug}
                      href={`/${locale}/farmers/${farmer.slug}`}
                      className="group"
                    >
                      <div className="relative overflow-hidden rounded-xl bg-card border border-border p-6 h-full transition-all duration-300 hover:shadow-xl group-hover:-translate-y-1">
                        {/* Originator Image - Left Center */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 w-16 h-16 rounded-lg overflow-hidden">
                          <Image
                            src={imagePath}
                            alt={farmer.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="pl-20">
                          <h3 className="font-semibold text-foreground mb-1">
                            {farmer.name}
                          </h3>
                          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                            <span className="text-base">{origin.flag}</span>
                            <span>{origin.country}</span>
                          </p>
                        </div>
                        <div className="absolute bottom-4 right-4 flex items-center gap-2 text-sm text-primary sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                          <span className="hidden sm:inline">{t("originators.viewProfile")}</span>
                          <ArrowRight className="h-4 w-4 sm:group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </HoverPrefetchLink>
                  )
                })
              )}
            </div>
          </div>
        </section>

        {/* Café Verde & Token ETHIX Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
              {/* Café Verde */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">{t("greenCoffee.title")}</h2>
                <p className="text-xl sm:text-2xl font-semibold text-primary mb-6">{t("greenCoffee.subtitle")}</p>
                <p className="text-muted-foreground mb-8">
                  {t("greenCoffee.description")}
                </p>
                <Button size="lg" variant="secondary" className="px-8" asChild>
                  <Link href={`/${locale}/coffee`}>{t("greenCoffee.learnMore")}</Link>
                </Button>
              </div>

              {/* Separator: horizontal on mobile, vertical on desktop */}
              <div className="w-full h-px md:w-px md:h-auto md:self-stretch bg-border" />

              {/* Token ETHIX */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">{t("ethix.title")}</h2>
                <p className="text-xl sm:text-2xl font-semibold text-primary mb-6">{t("ethix.subtitle")}</p>
                <p className="text-muted-foreground mb-8">
                  {t("ethix.description")}
                </p>
                <Button size="lg" variant="secondary" className="px-8" asChild>
                  <Link href={ethixDocsUrl} target="_blank" rel="noopener noreferrer">
                    {t("ethix.learnMore")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.author} className="bg-card border-border h-full">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <Quote className="h-6 w-6 md:h-8 md:w-8 text-highlight mb-4 shrink-0" />
                    <p className="text-sm md:text-base text-foreground leading-relaxed mb-6 grow">{testimonial.quote}"</p>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="relative h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden bg-secondary/50 shrink-0">
                        <Image
                          src={avatars[index]}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 40px, 48px"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.author}</p>
                        <p className="text-xs md:text-sm text-muted-foreground whitespace-pre-line">{testimonial.role}</p>
                        <p className="text-xs md:text-sm text-muted-foreground italic mt-1">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    </>
  )
}
