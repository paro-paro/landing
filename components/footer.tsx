import Link from "next/link"
import { Leaf, Twitter, Github, Linkedin } from "lucide-react"

const footerLinks = {
  Plataforma: [
    { label: "Cómo funciona", href: "#features" },
    { label: "Participar", href: "#pricing" },
    { label: "Proyectos", href: "#" },
    { label: "ETHIX Token", href: "#" },
  ],
  Compañía: [
    { label: "Sobre nosotros", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Prensa", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  Recursos: [
    { label: "Centro de ayuda", href: "#" },
    { label: "Documentación", href: "#" },
    { label: "Comunidad", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
  Legal: [
    { label: "Privacidad", href: "#" },
    { label: "Términos", href: "#" },
    { label: "Riesgos", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

const socialLinks = [
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "GitHub", href: "#", icon: Github },
  { label: "LinkedIn", href: "#", icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <Leaf className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">EthicHub</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Plataforma de inversión colaborativa que conecta a pequeños agricultores con financiación justa.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EthicHub. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">Invierte con propósito. Cambia vidas.</p>
        </div>
      </div>
    </footer>
  )
}
