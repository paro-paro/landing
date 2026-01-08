import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background border-b border-border">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Inversiones con impacto real
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-4xl text-balance">
            Invierte con propósito. Genera rentabilidad. Cambia vidas.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl text-pretty">
            EthicHub te permite invertir en proyectos agrícolas sostenibles de pequeños productores de café, generando
            impacto social, rentabilidad financiera y regeneración ambiental.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="gap-2 px-8">
              Empieza a invertir
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
            {[
              { value: "+500", label: "Proyectos financiados" },
              { value: "100%", label: "Retorno de inversión" },
              { value: "+6M€", label: "Capital total invertido" },
              { value: "+2000", label: "Inversores de impacto" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
