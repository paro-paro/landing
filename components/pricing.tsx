"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

const planKeys = [
  { key: "lending", href: "https://app.ethichub.com/lending" },
  { key: "staking", href: "https://app.ethichub.com/staking" },
  { key: "coffee", href: "https://greencoffee.ethichub.com/" },
]

export function Pricing() {
  const t = useTranslations("pricing")

  return (
    <section id="pricing" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {planKeys.map((plan) => {
            const features = t.raw(`plans.${plan.key}.features`) as string[]
            return (
              <Card key={plan.key} className="relative bg-card border-border flex flex-col">
                <CardHeader className="p-8 pb-0">
                  <h3 className="text-2xl font-bold text-foreground">{t(`plans.${plan.key}.name`)}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{t(`plans.${plan.key}.price`)}</span>
                    <span className="text-muted-foreground">{t(`plans.${plan.key}.period`)}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{t(`plans.${plan.key}.description`)}</p>
                </CardHeader>
                <CardContent className="p-8 flex-1">
                  <ul className="space-y-3">
                    {features.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-highlight shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button className="w-full gap-2" asChild>
                    <Link href={plan.href} target="_blank" rel="noopener noreferrer">
                      {t(`plans.${plan.key}.cta`)}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
