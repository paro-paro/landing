"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Quote } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const partners = [
  { name: "BGA", href: "https://chainforgood.org/", image: "/bga.avif" },
  { name: "Celo", href: "https://celo.org/", image: "/celo.png" },
  { name: "Heifer", href: "https://www.heifer.org/", image: "/heifer.png" },
  { name: "IICA", href: "https://iica.int/", image: "/iica.png" },
  { name: "Cerulean", href: "https://cerulean.vc/", image: "/cerulean.png" },
  { name: "Flori", href: "https://www.floriventures.com/", image: "/flori.png" },
  { name: "Cuatrecasas", href: "https://www.cuatrecasas.com/", image: "/cuatrecasas.png" },
  { name: "BID Lab", href: "https://bidlab.org/", image: "/bidlab.png" },
]

const avatars = [
  "/gustavo.jpg",
  "/isabel.jpg",
  "/luisal.jpg",
  "/gary.png",
]

export function Testimonials() {
  const t = useTranslations("testimonials")
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const testimonials = t.raw("items") as Array<{
    quote: string
    author: string
    role: string
  }>

  useEffect(() => {
    if (!api) return

    const onSelect = () => setCurrent(api.selectedScrollSnap())
    setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section id="testimonials" className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">{t("title")}</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative md:px-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.author} className="basis-[85%] sm:basis-[90%] md:basis-1/2">
                  <Card className="bg-card border-border h-full">
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      <Quote className="h-6 w-6 md:h-8 md:w-8 text-highlight mb-4 shrink-0" />
                      <p className="text-sm md:text-base text-foreground leading-relaxed mb-6 grow">{testimonial.quote}"</p>
                      <div className="flex items-center gap-3 md:gap-4">
                        <Avatar className="h-10 w-10 md:h-12 md:w-12">
                          <AvatarImage src={avatars[index] || "/placeholder.svg"} alt={testimonial.author} />
                          <AvatarFallback className="bg-secondary text-secondary-foreground">
                            {testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.author}</p>
                          <p className="text-xs md:text-sm text-muted-foreground whitespace-pre-line">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="p-2"
                aria-label={`${t("goToSlide")} ${index + 1}`}
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    current === index ? "w-6 bg-highlight" : "w-2 bg-highlight/30"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Partners - Infinite Marquee */}
        <div className="mt-12 sm:mt-24 overflow-hidden">
          <div className="flex animate-marquee w-max">
            {[...partners, ...partners].map((partner, index) => (
              <Link
                key={`${partner.name}-${index}`}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 mx-12 shrink-0"
              >
                <div className="relative h-12 w-32 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="128px"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
