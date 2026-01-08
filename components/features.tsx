import { Wallet, Globe, Shield, Link2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Wallet,
    title: "Rentabilidad real",
    description:
      "Inversiones productivas con retornos sostenibles. Obtén rendimientos mientras generas impacto positivo en comunidades agrícolas.",
  },
  {
    icon: Globe,
    title: "Impacto social y ambiental",
    description:
      "Cada euro transforma vidas y territorios. Apoya a pequeños agricultores y promueve prácticas agrícolas regenerativas.",
  },
  {
    icon: Shield,
    title: "Seguridad colectiva",
    description:
      "Avales colectivos que protegen tu inversión gracias a nuestro token de impacto ETHIX. Riesgo compartido, beneficio común.",
  },
  {
    icon: Link2,
    title: "Tecnología transparente",
    description:
      "Blockchain aplicada a la trazabilidad y confianza. Cada transacción es verificable y cada impacto es medible.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">¿Por qué EthicHub?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conectamos inversores con agricultores para crear un sistema financiero más justo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
