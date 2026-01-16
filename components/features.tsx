"use client"

import { useTranslations } from "next-intl"
import { Wallet, Globe, Shield, Link2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const featureKeys = [
  { icon: Wallet, key: "profitability" },
  { icon: Globe, key: "impact" },
  { icon: Shield, key: "security" },
  { icon: Link2, key: "transparency" },
]

export function Features() {
  const t = useTranslations("features")

  return (
    <section id="features" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureKeys.map((feature) => (
            <Card key={feature.key} className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-highlight/20 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-highlight" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t(`items.${feature.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`items.${feature.key}.description`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
