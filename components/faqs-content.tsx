"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

interface FaqItem {
  slug: string
  title: string
  html: string
}

interface FaqCategory {
  slug: string
  title: string
  items: FaqItem[]
}

interface FaqsContentProps {
  categories: FaqCategory[]
}

export function FaqsContent({ categories }: FaqsContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const activeCategory = categories.find((c) => c.slug === selectedCategory)

  return (
    <div className="pt-24 sm:pt-32 pb-12 sm:pb-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más frecuentes sobre EthicHub.
          </p>
        </div>

        {!activeCategory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className="p-6 rounded-xl bg-white dark:bg-card border border-border text-center text-foreground font-medium hover:border-primary/40 hover:text-primary transition-colors"
              >
                {category.title}
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver</span>
            </button>

            <h2 className="text-xl font-semibold text-foreground mb-6">
              {activeCategory.title}
            </h2>

            <Accordion type="single" collapsible className="rounded-xl bg-white dark:bg-card border border-border">
              {activeCategory.items.map((item) => (
                <AccordionItem key={item.slug} value={item.slug} className="px-6">
                  <AccordionTrigger className="text-base text-left text-foreground hover:no-underline hover:text-primary">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div
                      className="text-base text-muted-foreground leading-relaxed [&_strong]:text-foreground [&_a]:text-primary [&_a:hover]:underline [&_p+p]:mt-4"
                      dangerouslySetInnerHTML={{ __html: item.html }}
                    />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  )
}
