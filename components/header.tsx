"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "¿Qué es EthicHub?" },
  { href: "/farmers", label: "Nuestros Agricultores" },
  { href: "/coffee", label: "Café Verde" },
  { href: "https://cryptocafe.madrid/", label: "Café Tostado", external: true },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <Leaf className="h-5 w-5 text-accent-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">EthicHub</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isExternal = 'external' in link && link.external
              const isActive = !isExternal && (pathname === link.href || 
                (link.href !== "/" && pathname.startsWith(link.href)))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                  className={cn(
                    "relative text-sm font-medium transition-colors py-1 inline-flex items-center gap-1",
                    isActive 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground",
                    "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300",
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                  )}
                >
                  {link.label}
                  {isExternal && <ExternalLink className="h-3 w-3" />}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button size="sm">Invertir ahora</Button>
          </div>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isExternal = 'external' in link && link.external
                const isActive = !isExternal && (pathname === link.href || 
                  (link.href !== "/" && pathname.startsWith(link.href)))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                    className={cn(
                      "text-sm font-medium transition-colors inline-flex items-center gap-1",
                      isActive 
                        ? "text-foreground border-l-2 border-accent pl-3" 
                        : "text-muted-foreground hover:text-foreground pl-3"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                    {isExternal && <ExternalLink className="h-3 w-3" />}
                  </Link>
                )
              })}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button size="sm">Invertir ahora</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
