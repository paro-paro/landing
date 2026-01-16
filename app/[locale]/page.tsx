import { setRequestLocale } from "next-intl/server"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { OrganizationSchema, WebSiteSchema } from "@/components/structured-data"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  )
}
