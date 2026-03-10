import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const CONTENT_DIR = path.join(process.cwd(), 'content/faqs')

export interface FaqItem {
  slug: string
  title: string
  html: string
  order: number
}

export interface FaqCategory {
  slug: string
  title: string
  items: FaqItem[]
}

const CATEGORY_ORDER = [
  'informacion-ethichub',
  'nodo-y-agricultores',
  'plataforma',
  'tecnologia',
  'xdai',
  'inversiones',
  'minimice-yield-bond',
  'portfolio',
  'token-ethix',
  'legal',
  'riesgos-en-la-inversion',
  'atencion-al-cliente',
]

function markdownToHtml(md: string): string {
  let s = md.trim()

  // Remove images
  s = s.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
  // Remove empty links [](url)
  s = s.replace(/\[\s*\]\([^)]*\)/g, '')
  // Convert [text](url) → <a>
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  // Remove bare URLs on their own line
  s = s.replace(/^\s*https?:\/\/\S+\s*$/gm, '')
  // Bold **text** or __text__
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  s = s.replace(/__([^_]+)__/g, '<strong>$1</strong>')
  // Italic *text* or _text_
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  // Remove heading markers
  s = s.replace(/^#{1,6}\s*/gm, '')
  // Clean up stray ** markers
  s = s.replace(/\*\*/g, '')

  // Split into paragraphs and wrap in <p>
  const paragraphs = s.split(/\n{2,}/).map(p => p.trim()).filter(Boolean)
  return paragraphs.map(p => `<p>${p.replace(/\n/g, '<br/>')}</p>`).join('')
}

export function getAllFaqs(): FaqCategory[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return []
  }

  const categories: FaqCategory[] = []
  const dirs = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())

  for (const dir of dirs) {
    const dirPath = path.join(CONTENT_DIR, dir.name)
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.mdx'))

    const items: FaqItem[] = files.map(file => {
      const filePath = path.join(dirPath, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug: file.replace('.mdx', ''),
        title: data.title || '',
        html: markdownToHtml(content),
        order: data.order || 0,
      }
    })

    items.sort((a, b) => a.order - b.order)

    if (items.length > 0) {
      const firstItem = files[0]
      const firstFile = fs.readFileSync(path.join(dirPath, firstItem), 'utf8')
      const { data } = matter(firstFile)

      categories.push({
        slug: dir.name,
        title: data.sectionTitle || dir.name,
        items,
      })
    }
  }

  categories.sort((a, b) => {
    const aIdx = CATEGORY_ORDER.indexOf(a.slug)
    const bIdx = CATEGORY_ORDER.indexOf(b.slug)
    return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx)
  })

  return categories
}
