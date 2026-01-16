"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"
import { Send, Instagram, Youtube, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewsletterDialog } from "@/components/newsletter-dialog"

export function Footer() {
  const t = useTranslations("footer")
  const locale = useLocale()

  const socialLinks = [
    { label: "Telegram", href: locale === "en" ? "https://t.me/ethichubeng" : "https://t.me/ethichub", icon: Send },
    { label: "Instagram", href: "https://www.instagram.com/ethichub/", icon: Instagram },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCxLXFp8x93-ua34yZdHR-lA", icon: Youtube },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/ethichub/", icon: Linkedin },
    { label: "X", href: "https://x.com/ethichub", icon: Twitter },
  ]

  const footerLinks = {
    [t("sections.company")]: [
      { label: t("links.blog"), href: `/${locale}/blog` },
      { label: t("links.forum"), href: "https://forum.ethichub.com/" },
      { label: t("links.faqs"), href: "https://help.ethichub.com/" },
    ],
    [t("sections.resources")]: [
      { label: t("links.documentation"), href: locale === "en" ? "https://ethichub.gitbook.io/ethichub/en" : "https://ethichub.gitbook.io/ethichub/" },
      { label: t("links.glossary"), href: `/${locale}/glossary` },
      { label: t("links.brandKit"), href: "/brandkit.pptx", download: true },
    ],
    [t("sections.platforms")]: [
      { label: t("links.lending"), href: "https://app.ethichub.com/lending" },
      { label: t("links.staking"), href: "https://app.ethichub.com/staking" },
      { label: t("links.greenCoffeeShop"), href: "https://greencoffee.ethichub.com/" },
      { label: t("links.roastedCoffeeShop"), href: "https://cryptocafe.madrid/" },
    ],
    [t("sections.legal")]: [
      { label: t("links.terms"), href: `/${locale}/terms` },
      { label: t("links.privacy"), href: `/${locale}/privacy` },
      { label: t("links.cookies"), href: `/${locale}/cookies` },
      { label: t("links.risks"), href: locale === "en" ? "https://help.ethichub.com/hc/es/articles/18096369276189-What-are-the-risks-of-your-investment" : "https://help.ethichub.com/hc/es/articles/360006540037--Cu%C3%A1les-son-los-riesgos-de-tu-inversi%C3%B3n" },
    ],
  }

  const risksUrl = locale === "en" 
    ? "https://help.ethichub.com/hc/es/articles/18096369276189-What-are-the-risks-of-your-investment" 
    : "https://help.ethichub.com/hc/es/articles/360006540037--Cu%C3%A1les-son-los-riesgos-de-tu-inversi%C3%B3n"

  return (
    <footer className="bg-card border-t border-border">
      {/* Disclaimer Banner */}
      <Link 
        href={risksUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-primary/90 py-4 px-4 sm:px-6 lg:px-8 hover:bg-primary transition-colors"
      >
        <p className="text-center text-sm text-primary-foreground/90 max-w-5xl mx-auto">
          {t("disclaimer")}{" "}
          <span className="text-accent underline">{t("disclaimerLink")}</span>
        </p>
      </Link>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
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
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {t("tagline")}
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                {links.map((link) => {
                  const isExternal = link.href.startsWith("http")
                  
                  if ('download' in link && link.download) {
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          download
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    )
                  }
                  
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        prefetch={!isExternal}
                        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
                {category === t("sections.company") && (
                  <li>
                    <NewsletterDialog
                      trigger={
                        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                          Newsletter
                        </button>
                      }
                    />
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EthicHub. {t("copyright")}
          </p>
          <p className="text-sm text-muted-foreground">{t("slogan")}</p>
        </div>
      </div>
    </footer>
  )
}
