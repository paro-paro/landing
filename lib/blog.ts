import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')

export interface PostFrontmatter {
  title: string
  description: string
  date: string
  tags: string[]
  image?: string
  author?: string
  postId?: string
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  readingTime: string
}

export interface PostMeta {
  slug: string
  frontmatter: PostFrontmatter
  readingTime: string
}

function getBlogDir(locale: string = 'es'): string {
  const localeDir = path.join(CONTENT_DIR, locale)
  // If locale-specific directory exists, use it; otherwise fall back to root
  if (fs.existsSync(localeDir)) {
    return localeDir
  }
  return CONTENT_DIR
}

function getPostFiles(locale: string = 'es'): string[] {
  const blogDir = getBlogDir(locale)
  if (!fs.existsSync(blogDir)) {
    return []
  }
  return fs.readdirSync(blogDir).filter((file) => file.endsWith('.mdx'))
}

export function getAllPosts(locale: string = 'es'): PostMeta[] {
  const blogDir = getBlogDir(locale)
  const files = getPostFiles(locale)

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const filePath = path.join(blogDir, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      readingTime: readingTime(content).text,
    }
  })

  // Sort by date descending, then by postId for consistent ordering across locales
  return posts.sort((a, b) => {
    const dateCompare =
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    if (dateCompare !== 0) return dateCompare
    // Secondary sort by postId (shared across translations) for consistent ordering
    const postIdA = a.frontmatter.postId || a.slug
    const postIdB = b.frontmatter.postId || b.slug
    return postIdA.localeCompare(postIdB)
  })
}

export function getPostBySlug(slug: string, locale: string = 'es'): Post | null {
  const blogDir = getBlogDir(locale)
  const filePath = path.join(blogDir, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    // Try fallback to root content directory
    const fallbackPath = path.join(CONTENT_DIR, `${slug}.mdx`)
    if (!fs.existsSync(fallbackPath)) {
      return null
    }
    const fileContents = fs.readFileSync(fallbackPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as PostFrontmatter,
      content,
      readingTime: readingTime(content).text,
    }
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: data as PostFrontmatter,
    content,
    readingTime: readingTime(content).text,
  }
}

export function getAllTags(locale: string = 'es'): { tag: string; count: number }[] {
  const posts = getAllPosts(locale)
  const tagCount: Record<string, number> = {}

  posts.forEach((post) => {
    post.frontmatter.tags?.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1
    })
  })

  return Object.entries(tagCount)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
}

export function getPostsByTag(tag: string, locale: string = 'es'): PostMeta[] {
  return getAllPosts(locale).filter((post) =>
    post.frontmatter.tags?.includes(tag)
  )
}

export function getAllSlugs(locale: string = 'es'): string[] {
  return getPostFiles(locale).map((file) => file.replace('.mdx', ''))
}
