"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Sprout,
  AlertTriangle,
  Eye,
  RefreshCw,
  Users,
  TrendingUp,
  Handshake,
  Shield,
  Coins,
  NotebookPen,
  FileText,
  Award,
  Target,
  LogIn,
  IdCard,
  Wallet,
  Globe,
  CircleHelp,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  sprout: Sprout,
  "alert-triangle": AlertTriangle,
  eye: Eye,
  "refresh-cw": RefreshCw,
  users: Users,
  "trending-up": TrendingUp,
  handshake: Handshake,
  shield: Shield,
  coins: Coins,
  "notebook-pen": NotebookPen,
  "file-text": FileText,
  award: Award,
  target: Target,
  "log-in": LogIn,
  "id-card": IdCard,
  wallet: Wallet,
  globe: Globe,
  "circle-help": CircleHelp,
}

interface DocPage {
  slug: string[]
  frontmatter: {
    title: string
    icon: string
    section: string
    sectionTitle: string
    order: number
  }
}

interface DocSection {
  id: string
  title: string
  pages: DocPage[]
}

interface DocsSidebarProps {
  sections: DocSection[]
  locale: string
}

export function DocsSidebar({ sections, locale }: DocsSidebarProps) {
  const pathname = usePathname()

  return (
    <nav className="space-y-6">
      {/* Homepage link section */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2 px-2">
          {locale === "es" ? "Página Web" : "Website"}
        </h3>
        <ul className="space-y-0.5">
          <li>
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <Globe className="h-4 w-4 shrink-0" />
              <span>{locale === "es" ? "Inicio" : "Home"}</span>
            </Link>
          </li>
        </ul>
      </div>

      {sections.map((section) => (
        <div key={section.id}>
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2 px-2">
            {section.title}
          </h3>
          <ul className="space-y-0.5">
            {section.pages.map((page) => {
              const href = `/${locale}/docs/${page.slug.join("/")}`
              const isActive = pathname === href
              const IconComponent = iconMap[page.frontmatter.icon]

              return (
                <li key={page.slug.join("/")}>
                  <Link
                    href={href}
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    {IconComponent && <IconComponent className="h-4 w-4 shrink-0" />}
                    <span>{page.frontmatter.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
