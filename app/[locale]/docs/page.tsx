import { permanentRedirect } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { getDocsNavigation } from "@/lib/docs"

interface DocsIndexProps {
  params: Promise<{ locale: string }>
}

export default async function DocsIndex({ params }: DocsIndexProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const sections = getDocsNavigation(locale)
  if (sections.length > 0 && sections[0].pages.length > 0) {
    const firstPage = sections[0].pages[0]
    permanentRedirect(`/${locale}/docs/${firstPage.slug.join("/")}`)
  }

  permanentRedirect(`/${locale}`)
}
