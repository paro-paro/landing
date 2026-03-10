"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContactDialog } from "@/components/contact-dialog"
import { Coffee, Users, Heart, MapPin, ArrowRight } from "lucide-react"

const featureKeys = [
  { icon: Coffee, key: "specialty" },
  { icon: Users, key: "smallFarmers" },
  { icon: Heart, key: "impact" },
  { icon: MapPin, key: "origin" },
]

export default function CoffeeContent() {
  const t = useTranslations("coffee")
  const locale = useLocale()

  const buyerTypes = t.raw("marketplace.buyerTypes") as string[]
  const varietyFeatures = t.raw("variety.features") as string[]

  return (
    <>
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 border-b border-border overflow-hidden">
          {/* Decorative diamond images */}
          <div className="absolute -left-32 top-1/3 -translate-y-1/2 w-80 h-80 rotate-45 overflow-hidden rounded-3xl shadow-2xl hidden lg:block">
            <Image
              src="/coffee.avif"
              alt=""
              fill
              className="object-cover -rotate-45 scale-150"
              sizes="320px"
            />
          </div>
          <div className="absolute -right-32 top-1/3 -translate-y-1/2 w-80 h-80 rotate-45 overflow-hidden rounded-3xl shadow-2xl hidden lg:block">
            <Image
              src="/coffee.avif"
              alt=""
              fill
              className="object-cover -rotate-45 scale-150"
              sizes="320px"
            />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-highlight/15 border border-highlight/50 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                {t("badge")}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                {t("title")}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
                {t("subtitle")}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                {t("description1")}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
                {t("description2")}
              </p>
              <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4">
                <ContactDialog
                  trigger={
                    <Button size="lg" variant="secondary" className="px-8">
                      {t("contactUs")}
                    </Button>
                  }
                />
                <Button size="lg" className="gap-2 px-8" asChild>
                  <Link href="https://greencoffee.ethichub.com/" target="_blank" rel="noopener noreferrer">
                    {t("buyCoffee")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 sm:mt-16">
              {featureKeys.map((feature) => (
                <Card key={feature.key} className="bg-card border-border text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-highlight/20 flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-highlight" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{t(`features.${feature.key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`features.${feature.key}.description`)}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Online Marketplace Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-secondary/50">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">{t("marketplace.title")}</h2>
                <p className="text-lg sm:text-xl font-semibold text-primary mb-6">
                  {t("marketplace.subtitle")}
                </p>
                <p className="text-muted-foreground mb-6">
                  {t("marketplace.description")}
                </p>
                <p className="text-muted-foreground mb-4 text-left">{t("marketplace.idealFor")}</p>
                <ul className="space-y-3 mb-8 text-left">
                  {buyerTypes.map((type: string) => (
                    <li key={type} className="flex items-center gap-3 text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-highlight shrink-0" />
                      {type}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="gap-2 px-8" asChild>
                  <Link href="https://greencoffee.ethichub.com/" target="_blank" rel="noopener noreferrer">
                    {t("buyCoffee")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-4/3 rounded-2xl overflow-hidden">
                  <Image 
                    src="/greencoffee.png" 
                    alt="Green coffee beans" 
                    width={600} 
                    height={450} 
                    className="w-full h-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Coffee & Variety Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
              {/* Wholesale */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  {t("variety.title")}
                </h2>
                <p className="text-lg sm:text-xl font-semibold text-primary mb-6">
                  {t("variety.subtitle")}
                </p>
                <p className="text-muted-foreground mb-6">
                  {t("variety.description")}
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  {varietyFeatures.map((feature: string) => (
                    <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                      <span className="h-2 w-2 rounded-full bg-highlight shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <ContactDialog
                  trigger={
                    <Button size="lg" variant="secondary" className="px-8">
                      {t("contactUs")}
                    </Button>
                  }
                />
              </div>

              {/* Separator: horizontal on mobile, vertical on desktop */}
              <div className="w-full h-px md:w-px md:h-auto md:self-stretch bg-border" />

              {/* Café de Especialidad */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  {t("specialty.title")}
                </h2>
                <p className="text-lg sm:text-xl font-semibold text-primary mb-6">
                  {t("specialty.subtitle")}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t("specialty.description1")}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t("specialty.description2")}
                </p>
                <p className="text-muted-foreground mb-8">
                  {t("specialty.description3")}
                </p>
                <Button size="lg" variant="secondary" className="px-8" asChild>
                  <a href="/catalogo.pdf" download>
                    {t("marketplace.downloadCatalog")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image 
                    src="/estelafarmer.png" 
                    alt="Coffee producer" 
                    width={400} 
                    height={400} 
                    className="w-full h-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                  <Image 
                    src="/hand.png" 
                    alt="Coffee hands" 
                    width={400} 
                    height={400} 
                    className="w-full h-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden -mt-8">
                  <Image 
                    src="/handcoffee.avif" 
                    alt="Coffee hands" 
                    width={400} 
                    height={400} 
                    className="w-full h-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <Image 
                    src="/juanfarmer.png" 
                    alt="Coffee producer" 
                    width={400} 
                    height={400} 
                    className="w-full h-full object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">{t("communities.title")}</h2>
                <p className="text-lg sm:text-xl font-semibold text-primary mb-6">
                  {t("communities.subtitle")}
                </p>
                <p className="text-muted-foreground mb-6">
                  {t("communities.description1")}
                </p>
                <p className="text-muted-foreground mb-6">
                  {t("communities.description2")}
                </p>
                <p className="text-muted-foreground mb-8">
                  {t("communities.description3")}
                </p>
                <Button size="lg" variant="secondary" className="px-8" asChild>
                  <Link href={`/${locale}/farmers`}>{t("communities.learnMore")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
