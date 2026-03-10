import type React from "react"
import Link from "next/link"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { ArrowLeft } from "lucide-react"

export default async function DocsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("docs")

  return (
    <>
      <div className="bg-card/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>{t("back")}</span>
          </Link>
        </div>
      </div>
      {children}
    </>
  )
}
