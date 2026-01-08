import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Prestar",
    price: "8%",
    period: "rentabilidad anual",
    description: "Presta a pequeños agricultores y recibe intereses sobre tu inversión.",
    features: [
      "Inversión mínima desde 50€",
      "Retornos mensuales",
      "Proyectos verificados",
      "Trazabilidad blockchain",
      "Impacto social directo",
    ],
    cta: "Empieza a prestar",
    popular: false,
  },
  {
    name: "Avalar",
    price: "ETHIX",
    period: "token de impacto",
    description: "Avala préstamos con ETHIX y gana recompensas mientras proteges inversiones.",
    features: [
      "Recompensas por avalar",
      "Protege a los prestamistas",
      "Gobernanza de la plataforma",
      "Economía regenerativa",
      "Rendimiento con propósito",
    ],
    cta: "Empieza a avalar",
    popular: false,
  },
  {
    name: "Café de Impacto",
    price: "Directo",
    period: "del productor",
    description: "Compra café verde de especialidad directamente de nuestros agricultores.",
    features: [
      "Café de especialidad",
      "Envío desde Barcelona",
      "Precios justos al productor",
      "Trazabilidad completa",
      "Certificación orgánica",
    ],
    cta: "Comprar café",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-accent/5 border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3">Cómo participar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tú eliges cómo empezar a generar impacto y rentabilidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative bg-background border-border flex flex-col">
              <CardHeader className="p-8 pb-0">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="p-8 flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button className="w-full gap-2">
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
