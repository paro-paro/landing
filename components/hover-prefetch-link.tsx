"use client"

import { useState } from "react"
import Link, { type LinkProps } from "next/link"

type HoverPrefetchLinkProps = LinkProps & {
  children: React.ReactNode
  className?: string
}

export function HoverPrefetchLink({ children, className, ...props }: HoverPrefetchLinkProps) {
  const [shouldPrefetch, setShouldPrefetch] = useState(false)

  return (
    <Link
      {...props}
      prefetch={shouldPrefetch}
      onMouseEnter={() => setShouldPrefetch(true)}
      className={className}
    >
      {children}
    </Link>
  )
}
