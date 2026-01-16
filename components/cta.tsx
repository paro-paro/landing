"use client"

import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { NewsletterDialog } from "@/components/newsletter-dialog"
import { ArrowRight, Mail } from "lucide-react"

export function CTA() {
  const t = useTranslations("cta")
  const locale = useLocale()

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 sm:px-16 sm:py-24">
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground max-w-2xl text-balance">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl">
              {t("subtitle")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2 px-8" asChild>
                <Link href="https://app.ethichub.com/" target="_blank" rel="noopener noreferrer">
                  {t("invest")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <NewsletterDialog
                trigger={
                  <Button
                    size="lg"
                    variant="ghost"
                    className="text-primary-foreground hover:text-primary-foreground hover:bg-primary-foreground/10 gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    {t("newsletter")}
                  </Button>
                }
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        </div>
      </div>
    </section>
  )
}
