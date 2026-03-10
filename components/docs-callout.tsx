import { AlertTriangle, Info, Lightbulb } from "lucide-react"
import { cn } from "@/lib/utils"

const variants = {
  warning: {
    icon: AlertTriangle,
    className: "border-amber-500/30 bg-amber-50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200",
    iconClassName: "text-amber-500",
  },
  info: {
    icon: Info,
    className: "border-blue-500/30 bg-blue-50 dark:bg-blue-950/20 text-blue-900 dark:text-blue-200",
    iconClassName: "text-blue-500",
  },
  tip: {
    icon: Lightbulb,
    className: "border-emerald-500/30 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200",
    iconClassName: "text-emerald-500",
  },
}

interface CalloutProps {
  variant?: keyof typeof variants
  children: React.ReactNode
}

export function Callout({ variant = "info", children }: CalloutProps) {
  const { icon: Icon, className, iconClassName } = variants[variant]

  return (
    <div className={cn("my-6 flex gap-3 rounded-lg border p-4", className)}>
      <Icon className={cn("h-5 w-5 mt-0.5 shrink-0", iconClassName)} />
      <div className="text-sm leading-relaxed [&>p]:m-0">{children}</div>
    </div>
  )
}
