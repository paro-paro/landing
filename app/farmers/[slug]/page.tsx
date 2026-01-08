import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Coffee } from "lucide-react"

// Originator data - in a real app this would come from a CMS or database
const originadores: Record<string, {
  name: string
  country: string
  flag: string
  region: string
  since: string
  image: string
  description: string
  specialties: string[]
}> = {
  "um-coffee": {
    name: "Um Coffee",
    country: "Brasil",
    flag: "🇧🇷",
    region: "Minas Gerais y Espírito Santo",
    since: "2021",
    image: "/placeholder.jpg",
    description: "Um Coffee es un originador liderado por Boram Um, productor de café, tostador, barista y Q-grader. Trabaja con pequeños productores en las regiones de Minas Gerais y Espírito Santo, conectándolos con mercados internacionales y ayudándoles a mejorar la calidad de sus cafés.",
    specialties: ["Café arábica", "Procesamiento natural", "Microlotes"],
  },
  "alcala-tradewise": {
    name: "Alcalá - Tradewise Green Coffee Import & Export",
    country: "Colombia",
    flag: "🇨🇴",
    region: "Alcalá, Valle del Cauca",
    since: "2022",
    image: "/placeholder.jpg",
    description: "Tradewise conecta a pequeños productores colombianos con compradores internacionales, garantizando precios justos y trazabilidad completa. Trabajan principalmente con caficultores de la región de Alcalá en el Valle del Cauca.",
    specialties: ["Café de altura", "Variedades exóticas", "Comercio directo"],
  },
  "costal-campesino": {
    name: "Costal Campesino",
    country: "Honduras",
    flag: "🇭🇳",
    region: "Honduras",
    since: "2022",
    image: "/placeholder.jpg",
    description: "Costal Campesino trabaja directamente con familias campesinas hondureñas, proporcionando acceso a financiamiento y mercados internacionales para su café de especialidad.",
    specialties: ["Café orgánico", "Cooperativas familiares", "Sostenibilidad"],
  },
  "fabedi": {
    name: "Fabedi",
    country: "Honduras",
    flag: "🇭🇳",
    region: "Honduras",
    since: "2022",
    image: "/placeholder.jpg",
    description: "Fabedi es una organización que apoya a productores hondureños en la comercialización de su café, mejorando sus prácticas agrícolas y conectándolos con el mercado internacional.",
    specialties: ["Café de especialidad", "Capacitación agrícola", "Exportación directa"],
  },
  "codicafe": {
    name: "CODICAFE",
    country: "Honduras",
    flag: "🇭🇳",
    region: "Honduras",
    since: "2023",
    image: "/placeholder.jpg",
    description: "CODICAFE es una cooperativa de productores de café hondureños comprometidos con la calidad y la sostenibilidad, produciendo cafés de especialidad con puntuaciones superiores a 84 SCA.",
    specialties: ["Cooperativa", "Alta puntuación SCA", "Café lavado"],
  },
  "san-marcos-dregalado": {
    name: "San Marcos - D'Regalado Consulting",
    country: "Honduras",
    flag: "🇭🇳",
    region: "Finca La Fortuna, Honduras",
    since: "2023",
    image: "/placeholder.jpg",
    description: "Delmi y Nicolle Regalado lideran esta comercializadora y exportadora de café, apoyando la sostenibilidad de las familias cafetaleras hondureñas con pasión por el café y el servicio.",
    specialties: ["Finca propia", "Exportación directa", "Café de especialidad"],
  },
  "anepaan-odeput": {
    name: "Anepaan O'Depüt",
    country: "México",
    flag: "🇲🇽",
    region: "Chiapas",
    since: "2020",
    image: "/placeholder.jpg",
    description: "Anepaan O'Depüt es una organización de productores indígenas de café en la región de Chiapas, México, que preserva tradiciones ancestrales mientras produce café de alta calidad.",
    specialties: ["Café indígena", "Producción tradicional", "Comercio justo"],
  },
  "cafe-fundadores": {
    name: "Café Fundadores",
    country: "México",
    flag: "🇲🇽",
    region: "Chiapas",
    since: "2021",
    image: "/placeholder.jpg",
    description: "Café Fundadores trabaja con productores fundadores del movimiento de café de especialidad en Chiapas, garantizando la más alta calidad y prácticas sostenibles.",
    specialties: ["Café de origen", "Trazabilidad", "Calidad premium"],
  },
  "cafe-sustentable": {
    name: "Café Sustentable",
    country: "México",
    flag: "🇲🇽",
    region: "Chiapas",
    since: "2022",
    image: "/placeholder.jpg",
    description: "Café Sustentable promueve prácticas agrícolas regenerativas y sostenibles entre pequeños productores mexicanos, produciendo café que beneficia tanto al medio ambiente como a las comunidades locales.",
    specialties: ["Agricultura regenerativa", "Café orgánico", "Impacto ambiental"],
  },
  "cosechando-riqueza": {
    name: "Cosechando Riqueza",
    country: "México",
    flag: "🇲🇽",
    region: "Chiapas",
    since: "2021",
    image: "/placeholder.jpg",
    description: "Cosechando Riqueza conecta a pequeños productores de café en Chiapas con mercados internacionales, ayudándoles a obtener mejores precios por su trabajo y producto de calidad.",
    specialties: ["Comercio directo", "Desarrollo comunitario", "Café de altura"],
  },
  "reserva-1920": {
    name: "Reserva 1920",
    country: "México",
    flag: "🇲🇽",
    region: "Chiapas",
    since: "2022",
    image: "/placeholder.jpg",
    description: "Reserva 1920 produce café de especialidad con más de un siglo de tradición cafetalera, combinando técnicas ancestrales con innovación para crear perfiles únicos.",
    specialties: ["Herencia cafetalera", "Microlotes", "Perfiles únicos"],
  },
  "nortfruit": {
    name: "Nortfruit",
    country: "Ecuador",
    flag: "🇪🇨",
    region: "Ecuador",
    since: "2023",
    image: "/placeholder.jpg",
    description: "Nortfruit es un originador ecuatoriano que trabaja con productores locales para exportar café de especialidad, aprovechando las condiciones únicas de las tierras altas ecuatorianas.",
    specialties: ["Café ecuatoriano", "Tierras altas", "Exportación"],
  },
  "agros": {
    name: "Agros",
    country: "Perú",
    flag: "🇵🇪",
    region: "Perú",
    since: "2023",
    image: "/placeholder.jpg",
    description: "Agros trabaja con comunidades agrícolas peruanas, proporcionando acceso a financiamiento y mercados para su café de especialidad cultivado en las montañas andinas.",
    specialties: ["Café andino", "Cooperativas", "Desarrollo rural"],
  },
}

export function generateStaticParams() {
  return Object.keys(originadores).map((slug) => ({ slug }))
}

export default async function OriginadorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const originador = originadores[slug]

  if (!originador) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background border-b border-border">
          <div className="mx-auto max-w-7xl">
            <Link
              href="/farmers"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Link>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-accent/10">
                <Image
                  src={originador.image}
                  alt={originador.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-2xl">{originador.flag}</span>
                  <span className="text-white font-medium">{originador.country}</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  {originador.name}
                </h1>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{originador.region}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span>Originador desde {originador.since}</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {originador.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Especialidades
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {originador.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium"
                      >
                        <Coffee className="h-3.5 w-3.5" />
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Button size="lg" className="px-8">
                  Invertir en este originador
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
