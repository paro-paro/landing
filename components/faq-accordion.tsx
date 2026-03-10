"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

interface FaqItem {
  slug: string
  title: string
  html: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion type="multiple" className="rounded-lg border border-border">
      {items.map((item) => (
        <AccordionItem key={item.slug} value={item.slug} className="px-4">
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
  )
}
