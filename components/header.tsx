"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useTranslations, useLocale } from "next-intl"
import { Button } from "@/components/ui/button"
import { Menu, X, ExternalLink, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { LanguageSwitcher } from "./language-switcher"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const t = useTranslations("nav")
  const locale = useLocale()

  const toggleLanguage = () => {
    const newLocale = locale === "es" ? "en" : "es"
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/"
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  const navLinks = [
    { href: `/${locale}`, label: t("whatIsEthicHub") },
    { href: `/${locale}/farmers`, label: t("farmers") },
    { href: `/${locale}/coffee`, label: t("greenCoffee") },
    { href: "https://cryptocafe.madrid/", label: t("roastedCoffee"), external: true, hideBelow: "xl" as const },
    { href: `/${locale}/blog`, label: t("blog"), hideBelow: "lg" as const },
  ]

  const isCoffeePage = pathname.includes('/coffee')
  const ctaText = isCoffeePage ? t("buyCoffee") : t("investNow")
  const ctaHref = isCoffeePage ? "https://greencoffee.ethichub.com/" : "https://app.ethichub.com/"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/ethichub.svg"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <span className="text-lg font-semibold text-foreground">EthicHub</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isExternal = 'external' in link && link.external
              const hideBelow = 'hideBelow' in link ? link.hideBelow : null
              const isActive = !isExternal && (pathname === link.href || 
                (link.href !== `/${locale}` && pathname.startsWith(link.href)))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={!isExternal}
                  {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                  className={cn(
                    "relative text-sm font-medium transition-colors py-1 inline-flex items-center gap-1",
                    isActive 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground",
                    "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
                    hideBelow === "lg" && "hidden lg:inline-flex",
                    hideBelow === "xl" && "hidden xl:inline-flex"
                  )}
                >
                  {link.label}
                  {isExternal && <ExternalLink className="h-3 w-3" />}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Button size="sm" asChild>
              <Link href={ctaHref} target="_blank" rel="noopener noreferrer">
                {ctaText}
              </Link>
            </Button>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-1">
            <button
              className="p-2 text-foreground"
              onClick={toggleLanguage}
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isExternal = 'external' in link && link.external
                const isActive = !isExternal && (pathname === link.href || 
                  (link.href !== `/${locale}` && pathname.startsWith(link.href)))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                    className={cn(
                      "text-sm font-medium transition-colors inline-flex items-center gap-1",
                      isActive 
                        ? "text-foreground border-l-2 border-primary pl-3" 
                        : "text-muted-foreground hover:text-foreground pl-3"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                    {isExternal && <ExternalLink className="h-3 w-3" />}
                  </Link>
                )
              })}
              <div className="pt-4 border-t border-border">
                <Button size="sm" className="w-full" asChild>
                  <Link href={ctaHref} target="_blank" rel="noopener noreferrer">
                    {ctaText}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
