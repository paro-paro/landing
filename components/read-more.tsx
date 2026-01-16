"use client"

import { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

type ReadMoreProps = {
  text: string
  maxHeight?: number
  className?: string
  paragraphClassName?: string
  moreLabel?: string
  lessLabel?: string
}

export function ReadMore({
  text,
  maxHeight = 200,
  className,
  paragraphClassName,
  moreLabel = "Read more",
  lessLabel = "Read less",
}: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false)

  const paragraphs = useMemo(
    () => text.split(/\n\n+/).filter(Boolean),
    [text]
  )

  // Only show toggle if text is long enough to be clamped (roughly 8 lines at ~100 chars per line)
  const shouldShowToggle = text.length > 800

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "space-y-4 text-base text-muted-foreground leading-relaxed transition-all duration-300",
          shouldShowToggle && !expanded && "line-clamp-[8]",
          paragraphClassName
        )}
      >
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {shouldShowToggle && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-3 text-sm font-medium text-primary inline-flex items-center gap-1"
        >
          {expanded ? lessLabel : moreLabel}
          <ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
        </button>
      )}
    </div>
  )
}
