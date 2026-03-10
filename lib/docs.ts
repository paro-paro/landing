import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/docs')

export interface DocFrontmatter {
  title: string
  description: string
  icon: string
  section: string
  sectionTitle: string
  order: number
}

export interface Doc {
  slug: string[]
  frontmatter: DocFrontmatter
  content: string
}

export interface DocMeta {
  slug: string[]
  frontmatter: DocFrontmatter
}

export interface DocSection {
  id: string
  title: string
  pages: DocMeta[]
}

function getDocsDir(locale: string): string {
  return path.join(CONTENT_DIR, locale)
}

export function getDocBySlug(slugParts: string[], locale: string): Doc | null {
  const docsDir = getDocsDir(locale)
  const filePath = path.join(docsDir, ...slugParts.slice(0, -1), `${slugParts[slugParts.length - 1]}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: slugParts,
    frontmatter: data as DocFrontmatter,
    content,
  }
}

export function getAllDocSlugs(locale: string): string[][] {
  const docsDir = getDocsDir(locale)
  if (!fs.existsSync(docsDir)) {
    return []
  }

  const slugs: string[][] = []

  function scanDir(dir: string, prefix: string[]) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.mdx')) {
        slugs.push([...prefix, entry.name.replace('.mdx', '')])
      } else if (entry.isDirectory()) {
        scanDir(path.join(dir, entry.name), [...prefix, entry.name])
      }
    }
  }

  scanDir(docsDir, [])
  return slugs
}

export function getDocsNavigation(locale: string): DocSection[] {
  const docsDir = getDocsDir(locale)
  if (!fs.existsSync(docsDir)) {
    return []
  }

  const sectionsMap: Record<string, DocSection> = {}

  function scanDir(dir: string, prefix: string[]) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    const mdxFiles = entries.filter(e => e.isFile() && e.name.endsWith('.mdx'))
    const subDirs = entries.filter(e => e.isDirectory())

    // Process MDX files in this directory
    for (const file of mdxFiles) {
      const filePath = path.join(dir, file.name)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(fileContents)
      const frontmatter = data as DocFrontmatter
      const slug = [...prefix, file.name.replace('.mdx', '')]

      const sectionId = frontmatter.section
      if (!sectionsMap[sectionId]) {
        sectionsMap[sectionId] = {
          id: sectionId,
          title: frontmatter.sectionTitle,
          pages: [],
        }
      }
      sectionsMap[sectionId].pages.push({ slug, frontmatter })
    }

    // Recurse into subdirectories
    for (const subDir of subDirs) {
      scanDir(path.join(dir, subDir.name), [...prefix, subDir.name])
    }
  }

  scanDir(docsDir, [])

  // Sort pages within each section
  const sections = Object.values(sectionsMap)
  for (const section of sections) {
    section.pages.sort((a, b) => a.frontmatter.order - b.frontmatter.order)
  }

  // Sort sections by the order of their first page
  sections.sort((a, b) => a.pages[0].frontmatter.order - b.pages[0].frontmatter.order)

  return sections
}

export function getAllDocsFlat(locale: string): DocMeta[] {
  const sections = getDocsNavigation(locale)
  return sections.flatMap(section => section.pages)
}

export function getAdjacentDocs(slugParts: string[], locale: string): { prev: DocMeta | null; next: DocMeta | null } {
  const allDocs = getAllDocsFlat(locale)
  const currentSlug = slugParts.join('/')
  const currentIndex = allDocs.findIndex(doc => doc.slug.join('/') === currentSlug)

  return {
    prev: currentIndex > 0 ? allDocs[currentIndex - 1] : null,
    next: currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null,
  }
}
