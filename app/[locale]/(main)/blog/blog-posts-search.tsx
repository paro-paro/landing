"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { Search, X, Calendar, Clock, User } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { PostMeta } from "@/lib/blog"

function normalizeForSearch(str: string) {
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export default function BlogPostsSearch({
  posts,
  activeTag,
}: {
  posts: PostMeta[]
  activeTag?: string
}) {
  const t = useTranslations("blog")
  const locale = useLocale()
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = useMemo(() => {
    const trimmed = searchQuery.trim()
    if (!trimmed) return posts

    const query = normalizeForSearch(trimmed)
    return posts.filter((post) =>
      normalizeForSearch(post.frontmatter.title).includes(query),
    )
  }, [posts, searchQuery])

  const dateLocale = locale === "en" ? "en-US" : "es-ES"

  return (
    <div className="space-y-6 sm:space-y-12">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder={t("searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 h-12 text-base rounded-xl bg-card border-border"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={t("clearSearch")}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {t("noResults")} &quot;{searchQuery}&quot;
          </p>
        </div>
      ) : (
        filteredPosts.map((post) => (
          <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="block">
            <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.frontmatter.tags?.map((tag) => (
                    <Badge
                      key={tag}
                      variant={activeTag && tag === activeTag ? "default" : "secondary"}
                      className="border border-border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-xl sm:text-2xl hover:text-primary transition-colors">
                  {post.frontmatter.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {post.frontmatter.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  {post.frontmatter.author && (
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.frontmatter.author}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.frontmatter.date).toLocaleDateString(dateLocale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readingTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))
      )}
    </div>
  )
}

