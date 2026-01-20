"use client"

import { useTranslations } from "next-intl"

export function About() {
  const t = useTranslations("about")

  const cards = [
    {
      title: t("cards.whatIs.title"),
      descriptionKey: "cards.whatIs.description",
    },
    {
      title: t("cards.mission.title"),
      descriptionKey: "cards.mission.description",
    },
    {
      title: t("cards.whyMatters.title"),
      descriptionKey: "cards.whyMatters.description",
    },
  ]

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3 mb-12 sm:mb-16">
          {cards.map((card, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 text-center shadow-sm border border-border">
              <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">{card.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t(card.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        {/* YouTube Video */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/VfcWRORcQnE"
              title={t("videoTitle")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
