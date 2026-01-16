"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"
import { locales, type Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"
import { getAlternateSlug, getAlternateTag } from "@/lib/blog-translations"

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const handleLocaleChange = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/"
    
    // Handle blog post routes: /blog/[slug]
    const blogPostMatch = pathWithoutLocale.match(/^\/blog\/(?!tag\/)([^/]+)$/)
    if (blogPostMatch) {
      const currentSlug = blogPostMatch[1]
      const translatedSlug = getAlternateSlug(currentSlug, locale, newLocale)
      router.push(`/${newLocale}/blog/${translatedSlug}`)
      return
    }
    
    // Handle blog tag routes: /blog/tag/[tag]
    const blogTagMatch = pathWithoutLocale.match(/^\/blog\/tag\/([^/]+)$/)
    if (blogTagMatch) {
      const currentTag = decodeURIComponent(blogTagMatch[1])
      const translatedTag = getAlternateTag(currentTag, locale, newLocale)
      router.push(`/${newLocale}/blog/tag/${encodeURIComponent(translatedTag)}`)
      return
    }
    
    // Default behavior for non-blog routes
    router.push(`/${newLocale}${pathWithoutLocale}`)
  }

  return (
    <div className="flex items-center text-sm">
      {locales.map((loc, index) => (
        <span key={loc} className="flex items-center">
          <button
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              "relative px-2 py-0.5 cursor-pointer transition-colors",
              "after:absolute after:left-2 after:right-2 after:bottom-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
              locale === loc
                ? "text-foreground font-medium after:w-[calc(100%-1rem)]"
                : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-[calc(100%-1rem)]"
            )}
          >
            {loc.toUpperCase()}
          </button>
          {index < locales.length - 1 && (
            <span className="text-muted-foreground/40 select-none">|</span>
          )}
        </span>
      ))}
    </div>
  )
}
