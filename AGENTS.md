# AGENTS.md - EthicHub Landing Page

This document provides AI agents with comprehensive context about the EthicHub landing page codebase.

## Project Overview

EthicHub is a **collaborative investment platform** that connects small-scale farmers (primarily coffee producers) with fair financing and international market access. This landing page showcases the platform's mission, products, and community.

**Key Business Concepts:**
- **Lending**: Users lend to small farmers at ~8% annual return
- **Staking**: Users stake ETHIX tokens to provide guarantees for loans
- **Green Coffee**: Direct trade specialty coffee from producer communities
- **Originators**: Local trusted actors who identify and accompany farmer borrowers

## Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | React framework with App Router |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first CSS |
| next-intl | 4.7.x | Internationalization |
| shadcn/ui | new-york style | Component library (Radix UI based) |
| MDX | via next-mdx-remote | Blog content |
| Vercel Analytics | 1.3.x | Analytics |

## Project Structure

```
landing/
├── app/
│   ├── [locale]/              # Locale-based routing (es, en)
│   │   ├── blog/              # Blog listing and posts
│   │   │   ├── [slug]/        # Individual blog post
│   │   │   └── tag/[tag]/     # Posts filtered by tag
│   │   ├── coffee/            # Green coffee page
│   │   ├── cookies/           # Cookie policy
│   │   ├── farmers/           # Originators/farmers page
│   │   │   └── [slug]/        # Individual originator profile
│   │   ├── glossary/          # Blockchain/DeFi glossary
│   │   ├── privacy/           # Privacy policy
│   │   ├── terms/             # Terms and conditions
│   │   ├── layout.tsx         # Locale layout with providers
│   │   └── page.tsx           # Homepage
│   ├── globals.css            # Global styles & CSS variables
│   └── layout.tsx             # Root layout (minimal)
├── components/
│   ├── ui/                    # shadcn/ui components
│   └── *.tsx                  # Page-level components
├── content/
│   └── blog/
│       ├── en/                # English blog posts (MDX)
│       └── es/                # Spanish blog posts (MDX)
├── i18n/
│   ├── config.ts              # Locale configuration
│   └── request.ts             # next-intl request config
├── lib/
│   ├── blog.ts                # Blog utilities (getAllPosts, etc.)
│   └── utils.ts               # cn() utility function
├── messages/
│   ├── en.json                # English translations
│   └── es.json                # Spanish translations
├── public/                    # Static assets
└── middleware.ts              # i18n middleware
```

## Internationalization (i18n)

**Supported Locales:**
- `es` - Spanish (default)
- `en` - English

**Configuration:** `i18n/config.ts`
```typescript
export const locales = ['es', 'en'] as const
export const defaultLocale: Locale = 'es'
```

**Usage Patterns:**

Server Components:
```typescript
import { getTranslations, setRequestLocale } from "next-intl/server"

export default async function Page({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations("namespace")
  return <h1>{t("key")}</h1>
}
```

Client Components:
```typescript
"use client"
import { useTranslations, useLocale } from "next-intl"

export function Component() {
  const t = useTranslations("namespace")
  const locale = useLocale()
  return <p>{t("key")}</p>
}
```

**Translation Files:** `messages/{locale}.json`

Namespaces: `nav`, `hero`, `about`, `features`, `pricing`, `testimonials`, `cta`, `footer`, `coffee`, `farmers`, `blog`, `glossary`, `legal`, `common`, `languageSwitcher`

**Arrays in Translations:** Access with `t.raw()`:
```typescript
const features = t.raw("features") as string[]
```

## Styling System

### CSS Variables (Brand Colors)

Defined in `app/globals.css`:

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|-------|
| `--primary` | `#062F4F` (Navy) | `#74D7DC` (Teal) | Main brand, text, buttons |
| `--accent` | `#87F96E` (Bright Green) | `#87F96E` | CTAs, highlights |
| `--highlight` | `#74D7DC` (Teal) | `#74D7DC` | Secondary accent, icons |
| `--background` | `#F9FAF8` (Off-white) | `#041E32` | Page background |
| `--secondary` | `#E6EAE5` (Sage) | `#0A3D5F` | Section backgrounds |

### Tailwind CSS 4

Uses the new `@theme inline` directive and `@custom-variant dark` for dark mode.

**Font:** Nunito (`--font-nunito`)

**Common Patterns:**
```tsx
// Section with alternating background
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-b border-border">

// Container
<div className="mx-auto max-w-7xl">

// Card with hover
<Card className="bg-card border-border hover:border-highlight transition-all">

// Icon in circle
<div className="h-12 w-12 rounded-full bg-highlight/20 flex items-center justify-center">
  <Icon className="h-6 w-6 text-highlight" />
</div>
```

## Component Patterns

### Page Structure

Every page follows this pattern:
```tsx
<div className="min-h-screen">
  <Header />
  <main>
    {/* Page content */}
  </main>
  <Footer />
</div>
```

### UI Components (shadcn/ui)

Located in `components/ui/`. Key components:
- `Button` - variants: default, secondary, outline, ghost, link
- `Card`, `CardHeader`, `CardContent`, `CardFooter`
- `Badge` - variants: default, secondary, outline
- `Dialog`, `DialogTrigger`, `DialogContent`
- `Input`, `Label`, `Textarea`

**Button with Link:**
```tsx
<Button asChild>
  <Link href="/path">Click me</Link>
</Button>
```

### Icons

Uses `lucide-react`. Common icons:
- `ArrowRight`, `ArrowLeft` - Navigation
- `Leaf` - Brand logo
- `Coffee`, `Users`, `Heart`, `MapPin` - Features
- `Calendar`, `Clock` - Blog metadata
- `Menu`, `X` - Mobile menu
- `ExternalLink` - External links

## Blog System

**Content Location:** `content/blog/{locale}/*.mdx`

**Frontmatter Schema:**
```yaml
---
title: "Post Title"
description: "Post description for SEO and previews"
date: "2026-01-05"
tags: ["tag1", "tag2"]
image: "/blog/image.jpg"  # Optional
---
```

**Utilities:** `lib/blog.ts`
- `getAllPosts(locale)` - Get all posts sorted by date
- `getPostBySlug(slug, locale)` - Get single post with content
- `getAllTags(locale)` - Get tags with counts
- `getPostsByTag(tag, locale)` - Filter posts by tag

**MDX Rendering:**
```tsx
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

<MDXRemote 
  source={post.content} 
  options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} 
/>
```

## Routing

### Dynamic Routes

| Route | Purpose |
|-------|---------|
| `/[locale]` | Homepage |
| `/[locale]/blog` | Blog listing |
| `/[locale]/blog/[slug]` | Blog post |
| `/[locale]/blog/tag/[tag]` | Posts by tag |
| `/[locale]/coffee` | Green coffee page |
| `/[locale]/farmers` | Originators listing |
| `/[locale]/farmers/[slug]` | Originator profile |
| `/[locale]/glossary` | DeFi/Blockchain glossary |
| `/[locale]/terms` | Terms of service |
| `/[locale]/privacy` | Privacy policy |
| `/[locale]/cookies` | Cookie policy |

### Redirects (next.config.mjs)

```javascript
// Old routes redirect to new routes (301)
'/[locale]/our-farmers' → '/[locale]/farmers'
'/[locale]/green-coffee' → '/[locale]/coffee'
```

## SEO & Metadata

Each page generates metadata with:
- Locale-specific title and description
- Canonical URLs
- Language alternates (hreflang)
- Open Graph tags
- Twitter cards

**Pattern:**
```typescript
export async function generateMetadata({ params }) {
  const { locale } = await params
  const seo = {
    es: { title: "...", description: "..." },
    en: { title: "...", description: "..." },
  }
  const currentSeo = seo[locale] || seo.es
  return {
    title: currentSeo.title,
    description: currentSeo.description,
    alternates: {
      canonical: `${siteUrl}/${locale}/path`,
      languages: { es: `${siteUrl}/es/path`, en: `${siteUrl}/en/path` },
    },
    // ... openGraph, twitter
  }
}
```

## External Links

| Platform | URL |
|----------|-----|
| Main App | https://app.ethichub.com/ |
| Lending | https://app.ethichub.com/lending |
| Staking | https://app.ethichub.com/staking |
| Green Coffee Shop | https://greencoffee.ethichub.com/ |
| Roasted Coffee | https://cryptocafe.madrid/ |
| Documentation | https://ethichub.gitbook.io/ethichub/ |
| Help Center | https://help.ethichub.com/hc/es |
| Forum | https://forum.ethichub.com/ |

## Development Commands

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Key Conventions

1. **Server vs Client Components**
   - Default to Server Components
   - Add `"use client"` only when using hooks, event handlers, or browser APIs

2. **Params Handling (Next.js 16)**
   - Route params are Promises: `const { locale } = await params`
   - Always call `setRequestLocale(locale)` in server components

3. **Static Generation**
   - Use `generateStaticParams()` for dynamic routes
   - Blog posts and originator pages are statically generated

4. **External Links**
   - Always use `target="_blank" rel="noopener noreferrer"`
   - Show `ExternalLink` icon for clarity

5. **Forms**
   - Forms don't have backend handlers (frontend only)
   - Use controlled components with React Hook Form for complex forms

6. **Images**
   - Use Next.js `Image` component
   - Images are unoptimized (configured in next.config.mjs)
   - Static images in `/public/images/`

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Base URL for canonical URLs (default: https://www.ethichub.com) |

## Known Quirks

1. **TypeScript Errors Ignored in Build** - `ignoreBuildErrors: true` in next.config.mjs
2. **Images Unoptimized** - `images: { unoptimized: true }`
3. **Glossary Terms** - Hardcoded in Spanish only (domain-specific terminology)
4. **Originator Data** - Hardcoded in `farmers/[slug]/page.tsx` (would ideally come from CMS)
