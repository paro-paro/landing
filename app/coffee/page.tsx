"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Users, Heart, MapPin } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Café de especialidad",
    description: "Entre 82 y 90 SCA",
  },
  {
    icon: Users,
    title: "Pequeños agricultores",
    description: "Producido en 2-5 hectáreas",
  },
  {
    icon: Heart,
    title: "Café de impacto",
    description: "Precio y trato digno a agricultores y familias",
  },
  {
    icon: MapPin,
    title: "Café de origen",
    description: "México, Colombia, Guatemala, Brasil y Honduras",
  },
]

const buyerTypes = [
  "Pequeños tostadores",
  "Microtostadores",
  "Escuelas de barismo",
  "Profesionales que quieren probar diferentes cafés verdes",
  "Tostadores que necesitan reposición rápida",
]

export default function CoffeePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background border-b border-border">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                Café EthicHub
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
                Café verde de especialidad con impacto social y trazabilidad real
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                EthicHub ofrece <strong>café verde de especialidad</strong> producido principalmente en la región del
                Soconusco, en Chiapas (México), un origen reconocido por su excepcional calidad y condiciones ideales
                de cultivo. También contamos con café producido en Colombia, Brasil, Guatemala y Honduras.
              </p>
              <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
                Nuestros <strong>granos de café verde</strong> se cultivan de forma sostenible por comunidades
                cafetaleras que se benefician directamente de cada compra: el <strong>50% del beneficio</strong> vuelve
                a los productores para mejorar sus tierras, su calidad de vida y la conservación del entorno.
              </p>
              <Button size="lg" className="px-8">
                Contáctanos
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
              {features.map((feature) => (
                <Card key={feature.title} className="bg-card border-border text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Comunidades Productoras</h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6">
                  Apoya directamente a pequeños productores de café verde
                </h3>
                <p className="text-muted-foreground mb-6">
                  Trabajamos con comunidades agrícolas excluidas del sistema financiero tradicional, ofreciéndoles
                  acceso a financiación justa y a mercados internacionales.
                </p>
                <p className="text-muted-foreground mb-8">
                  Gracias a este modelo, los productores reciben mejores precios y pueden exportar su{" "}
                  <strong>café verde de especialidad</strong> sin intermediarios. Cada lote de café que compras
                  contribuye a mejorar prácticas agrícolas, regenerar suelos y fortalecer economías locales.
                </p>
                <Button variant="outline" size="lg">
                  Ver Comunidades
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Users className="h-16 w-16 text-accent/50" />
                </div>
                <div className="aspect-square rounded-2xl bg-accent/10 flex items-center justify-center mt-8">
                  <Coffee className="h-16 w-16 text-accent/50" />
                </div>
                <div className="aspect-square rounded-2xl bg-accent/10 flex items-center justify-center -mt-8">
                  <Heart className="h-16 w-16 text-accent/50" />
                </div>
                <div className="aspect-square rounded-2xl bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-accent/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialty Coffee Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Café de Especialidad para Todos
              </h2>
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6">
                Café verde +82 SCA disponible bajo pedido
              </h3>
              <p className="text-muted-foreground mb-6">
                Nuestros cafés tienen puntuaciones superiores a <strong>82 puntos SCA</strong>, garantizando una
                calidad excepcional. Los distintos <strong>orígenes, microclimas y condiciones de cultivo</strong> de
                las regiones donde trabajamos dan lugar a cafés con{" "}
                <strong>perfiles sensoriales únicos</strong>, excelente equilibrio, acidez definida y gran complejidad
                en taza.
              </p>
              <p className="text-muted-foreground mb-8">
                Si estás buscando <strong>comprar café verde al por mayor</strong>, ofrecemos{" "}
                <strong>sacos completos y ventas en grandes volúmenes</strong> para tostadores y distribuidores.
                Contáctanos para conocer la disponibilidad de microlotes, cafés de temporada y orígenes específicos.
              </p>
              <Button size="lg" className="px-8">
                Compra Café Verde en Sacos
              </Button>
            </div>
          </div>
        </section>

        {/* Online Marketplace Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-accent/5 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">EthicHub Green Coffee</h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6">
                  Compra café verde online en formato 5 kg, listo para enviar a toda Europa
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nuestro nuevo marketplace pensado para quienes buscan <strong>comprar café verde online</strong> de
                  forma rápida, flexible y sin necesidad de adquirir sacos completos.
                </p>
                <p className="text-muted-foreground mb-4">Ideal para:</p>
                <ul className="space-y-2 mb-8">
                  {buyerTypes.map((type) => (
                    <li key={type} className="flex items-center gap-2 text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {type}
                    </li>
                  ))}
                </ul>
                <Button size="lg" className="px-8">
                  Compra Café Verde en 5 Kilos
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Coffee className="h-24 w-24 text-accent/40" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Variety Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Gran Variedad de Cafés Verdes para Todos los Gustos
              </h2>
              <p className="text-muted-foreground mb-6">
                Explora nuestro catálogo anual de <strong>café verde de especialidad</strong>. Cada origen ofrece
                perfiles únicos gracias a su tierra, clima y métodos de cultivo. Nuestros cafés proceden de pequeños
                productores comprometidos con la calidad, la sostenibilidad y la regeneración de sus territorios.
              </p>
              <ul className="space-y-3 mb-10 text-left max-w-md mx-auto">
                <li className="flex items-center gap-3 text-foreground">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Microlotes exclusivos
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Variedades arábica de alta calidad
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  Café verde con certificaciones y trazabilidad completa
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  Tienda Café Verde
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  Contáctanos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
