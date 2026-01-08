"use client"

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
import { useEffect, useState } from "react"

const testimonials = [
  {
    quote:
      "EthicHub es ejemplo de cómo la innovación y la tecnología pueden ser una herramienta poderosa para resolver problemas sociales y generar un impacto positivo. En Heifer Internacional México nos sentimos orgullosos de contar con un aliado como EthicHub que contribuye eficazmente al desarrollo sostenible y la inclusión financiera de las comunidades agrícolas. Con mucho entusiasmo seguiremos en colaboración con EthicHub en el futuro a favor de las familias productoras de café.",
    author: "Gustavo Maldonado",
    role: "Director Ejecutivo de Heifer México. Ethichubber desde 2023",
    avatar: "/executive-man-portrait.png",
  },
  {
    quote:
      "Como inversora en EthicHub, me siento parte de una comunidad que está cambiando el mundo. Es emocionante ser testigo de cómo mis inversiones ayudan a mejorar la vida de pequeños agricultores y a promover prácticas agrícolas sostenibles. Además, saber que estoy contribuyendo a un futuro más verde me da una gran satisfacción. EthicHub me ha demostrado que es posible generar ganancias financieras y, al mismo tiempo, hacer del mundo un lugar mejor.",
    author: "Isabel Roselló",
    role: "Ethichubber desde 2022",
    avatar: "/professional-woman-investor.png",
  },
  {
    quote:
      "El $ETHIX es el centro del sistema de compensación, protegiendo a los prestamistas ante posibles impagos y recompensando a los participantes con intereses que compensan el riesgo que absorben. Su valor e influencia crecerán con una mayor descentralización y gobernanza, además de con el progresivo crecimiento del proyecto.",
    author: "Luis Alberto Rodrigo",
    role: "Ethichubber desde 2018",
    avatar: "/luis-alberto-rodrigo.jpg",
  },
  {
    quote:
      "Después de invertir en más de 17 proyectos en un período de 6 años, puedo decir con confianza que EthicHub es una plataforma sólida para invertir éticamente y obtener excelentes rendimientos. Obtengo un retorno anual del 8% en monedas estables y los agricultores locales tienen acceso a crédito rápido, barato y confiable. Estoy siempre muy agradecido en poder usar EthicHub.",
    author: "Gary Pierre-Louis",
    role: "Ethichubber desde 2018",
    avatar: "/professional-investor.png",
  },
]

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">Comunidad</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre por qué miles de inversores confían en EthicHub.
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
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.author} className="basis-[85%] sm:basis-[90%] md:basis-1/2">
                  <Card className="bg-card border-border h-full">
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      <Quote className="h-6 w-6 md:h-8 md:w-8 text-accent/30 mb-4 shrink-0" />
                      <p className="text-sm md:text-base text-foreground leading-relaxed mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center gap-3 md:gap-4">
                        <Avatar className="h-10 w-10 md:h-12 md:w-12">
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                          <AvatarFallback className="bg-secondary text-secondary-foreground">
                            {testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.author}</p>
                          <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
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
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index ? "w-6 bg-accent" : "w-2 bg-accent/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
