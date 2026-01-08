export function About() {
  const cards = [
    {
      title: "¿Qué es EthicHub?",
      description: (
        <>
          EthicHub es <strong>una plataforma de inversión colaborativa</strong> que <strong>conecta</strong> a pequeños
          agricultores con <strong>financiación justa</strong> y <strong>acceso a mercados</strong> internacionales,
          generando rentabilidad e impacto positivo.
        </>
      ),
    },
    {
      title: "Nuestra misión",
      description: (
        <>
          Impulsar la inclusión financiera, el comercio directo y la regeneración agrícola a través de{" "}
          <strong>blockchain y tecnología descentralizada.</strong>
        </>
      ),
    },
    {
      title: "¿Por qué importa?",
      description: (
        <>
          En el mundo, más de 25 millones de pequeños agricultores de café <strong>pagan intereses abusivos</strong> por
          falta de acceso al sistema financiero tradicional. <strong>En EthicHub cambiamos eso.</strong>
        </>
      ),
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary/30 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 text-center shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
