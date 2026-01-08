import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ArrowRight } from "lucide-react"

const originadores = [
  {
    country: "Brasil",
    flag: "🇧🇷",
    farmers: [
      { name: "Um Coffee", slug: "um-coffee" },
    ],
  },
  {
    country: "Colombia",
    flag: "🇨🇴",
    farmers: [
      { name: "Alcalá - Tradewise Green Coffee Import & Export", slug: "alcala-tradewise" },
    ],
  },
  {
    country: "Honduras",
    flag: "🇭🇳",
    farmers: [
      { name: "Costal Campesino", slug: "costal-campesino" },
      { name: "Fabedi", slug: "fabedi" },
      { name: "CODICAFE", slug: "codicafe" },
      { name: "San Marcos - D'Regalado Consulting", slug: "san-marcos-dregalado" },
    ],
  },
  {
    country: "México",
    flag: "🇲🇽",
    farmers: [
      { name: "Anepaan O'Depüt", slug: "anepaan-odeput" },
      { name: "Café Fundadores", slug: "cafe-fundadores" },
      { name: "Café Sustentable", slug: "cafe-sustentable" },
      { name: "Cosechando Riqueza", slug: "cosechando-riqueza" },
      { name: "Reserva 1920", slug: "reserva-1920" },
    ],
  },
  {
    country: "Ecuador",
    flag: "🇪🇨",
    farmers: [
      { name: "Nortfruit", slug: "nortfruit" },
    ],
  },
  {
    country: "Perú",
    flag: "🇵🇪",
    farmers: [
      { name: "Agros", slug: "agros" },
    ],
  },
]

const testimonials = [
  {
    quote:
      "Demasiado agradecidas con todos los Ethichubbers por su apoyo, el café y servir son nuestras pasiones, gracias a iniciativas como estas, podemos seguir apoyando a la sostenibilidad de las familias cafetaleras.",
    author: "Delmi & Nicolle Regalado",
    role: "Comercializadora y Exportadora de café en EthicHub desde 2023",
    location: "Finca La Fortuna, Honduras",
  },
  {
    quote:
      "Agradecemos el apoyo que nos ha permitido realizar nuestra pasión por producir café de especialidad.",
    author: "Neri Ortiz",
    role: "Productor EthicHub desde 2022",
    location: "San José Ixtepec, Chiapas, México",
  },
  {
    quote:
      "Trabajar con Ethichub ha sido transformador para muchos productores en nuestro programa. Muchas historias desconocidas de pequeños productores que ahora pueden tener una mayor libertad financiera para dirigir sus granjas. ¡No solo ha mejorado sus vidas al tener acceso a microfinanciación, sino que también ha mejorado la calidad de sus cafés producidos! Ha sido increíble trabajar con Ethichub durante más de 3 años.",
    author: "Boram Um",
    role: "Productor de café, tostador, barista y Q-grader. Originador EthicHub desde 2021",
    location: "Minas Gerais y Esprito Santo, Brasil",
  },
]

export default function FarmersPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background border-b border-border">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4">
              Somos Agricultores
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-primary mb-6">de EthicHub</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
              Tus préstamos ayudan a financiar nuestras actividades productivas y de exportación.
              Conseguimos una mejor calidad y precio por nuestros productos, al mismo tiempo que
              conservamos nuestra tierra, fuente de sustento y riqueza.
            </p>
            <Button size="lg" className="px-8">
              Presta ahora
            </Button>
          </div>
        </section>

        {/* Originadores Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-4">
              Originadores
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Conoce a las comunidades y organizaciones que hacen posible nuestro café de especialidad
            </p>
            
            {/* Country Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
              {originadores.map((origin) => (
                <div
                  key={origin.country}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/60 border border-border"
                >
                  <span className="text-3xl">{origin.flag}</span>
                  <span className="text-sm font-medium text-foreground">{origin.country}</span>
                  <span className="text-xs text-muted-foreground">{origin.farmers.length} originador{origin.farmers.length > 1 ? 'es' : ''}</span>
                </div>
              ))}
            </div>

            {/* All Originators Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {originadores.flatMap((origin) =>
                origin.farmers.map((farmer) => (
                  <Link
                    key={farmer.slug}
                    href={`/farmers/${farmer.slug}`}
                    className="group"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-background border border-border p-6 h-full transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/5 group-hover:-translate-y-1">
                      <div className="absolute top-4 right-4 text-2xl opacity-50 group-hover:opacity-100 transition-opacity">
                        {origin.flag}
                      </div>
                      <div className="pr-10">
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                          {farmer.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{origin.country}</p>
                      </div>
                      <div className="mt-4 flex items-center gap-2 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Ver perfil</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Café Verde Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Café Verde</h2>
              <p className="text-xl sm:text-2xl font-semibold text-primary mb-6">de especialidad</p>
              <p className="text-muted-foreground mb-10">
                Cultivado de forma sostenible por pequeños productores cuyo esfuerzo crece uno de los
                mejores cafés del mundo. El clima y la geografía dan a los granos su particular
                cuerpo y agradable acidez, produciendo la excelente calidad, todos ellos con
                resultados en cata superiores a 82 puntos bajo los estándares de la SCA.
              </p>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <Link href="/coffee">Ver Café Verde</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-accent/5 border-b border-border">
          <div className="mx-auto max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.author} className="bg-card border-border">
                  <CardContent className="p-8">
                    <Quote className="h-8 w-8 text-accent/30 mb-4" />
                    <p className="text-foreground leading-relaxed mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-accent mt-1">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
