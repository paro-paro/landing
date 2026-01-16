const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ethichub.com"

// Organization schema for the entire site
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "EthicHub",
    url: siteUrl,
    logo: `${siteUrl}/ethichub.svg`,
    description:
      "EthicHub is a collaborative investment platform connecting small-scale farmers with fair financing and international market access.",
    foundingDate: "2017",
    sameAs: [
      "https://x.com/ethichub",
      "https://www.instagram.com/ethichub/",
      "https://www.linkedin.com/company/ethichub/",
      "https://www.youtube.com/channel/UCxLXFp8x93-ua34yZdHR-lA",
      "https://t.me/ethichub",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://help.ethichub.com/",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Article schema for blog posts
interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  tags?: string[]
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  tags,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    image: image || `${siteUrl}/home.avif`,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "EthicHub",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "EthicHub",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/ethichub.svg`,
      },
    },
    keywords: tags?.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Local Business / Organization schema for farmer profiles
interface FarmerSchemaProps {
  name: string
  description: string
  url: string
  image: string
  country: string
  region: string
}

export function FarmerSchema({
  name,
  description,
  url,
  image,
  country,
  region,
}: FarmerSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: name,
    description: description.split("\n")[0].substring(0, 200),
    url: url,
    image: `${siteUrl}${image}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: region,
      addressCountry: country,
    },
    parentOrganization: {
      "@type": "Organization",
      name: "EthicHub",
      url: siteUrl,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// WebSite schema with search action
export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "EthicHub",
    url: siteUrl,
    description:
      "Collaborative investment platform for sustainable agriculture and fair trade coffee.",
    publisher: {
      "@type": "Organization",
      name: "EthicHub",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Breadcrumb schema
interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQ schema for glossary page
interface FAQItem {
  question: string
  answer: string
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
