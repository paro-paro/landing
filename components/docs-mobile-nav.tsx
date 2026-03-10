"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { DocsSidebar } from "@/components/docs-sidebar"

interface DocSection {
  id: string
  title: string
  pages: {
    slug: string[]
    frontmatter: {
      title: string
      icon: string
      section: string
      sectionTitle: string
      order: number
    }
  }[]
}

interface DocsMobileNavProps {
  sections: DocSection[]
  locale: string
}

export function DocsMobileNav({ sections, locale }: DocsMobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        Menu
      </button>
      {open && (
        <div className="px-4 pb-4" onClick={() => setOpen(false)}>
          <DocsSidebar sections={sections} locale={locale} />
        </div>
      )}
    </div>
  )
}
