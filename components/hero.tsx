"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 500, prefix: "+", suffix: "", labelKey: "projectsFunded" },
  { value: 100, prefix: "", suffix: "%", labelKey: "investmentReturn" },
  { value: 6, prefix: "+", suffix: "M€", labelKey: "totalCapital" },
  { value: 2000, prefix: "+", suffix: "", labelKey: "impactInvestors" },
]

function AnimatedCounter({ 
  value, 
  prefix = "", 
  suffix = "",
  duration = 2000 
}: { 
  value: number
  prefix?: string
  suffix?: string
  duration?: number 
}) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const startTime = performance.now()
    let animationFrame: number

    const animate = () => {
      const now = performance.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.round(easeOutQuart * value)
      
      setCount(currentValue)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        // Ensure we end on exact value
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, value, duration])

  return (
    <div ref={ref} className="text-2xl sm:text-3xl font-bold text-primary tabular-nums">
      {prefix}{count}{suffix}
    </div>
  )
}

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)] py-12 pt-24 sm:py-20 sm:pt-32">
          {/* Left: Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-highlight/15 border border-highlight/50 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              {t("badge")}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              {t("title")}
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl text-pretty">
              {t("description")}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <Button size="lg" className="gap-2 px-8" asChild>
                <Link href="https://app.ethichub.com/" target="_blank" rel="noopener noreferrer">
                  {t("cta")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.labelKey} 
                  className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <AnimatedCounter 
                    value={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix}
                    duration={2000}
                  />
                  <div className="mt-1 text-sm text-muted-foreground">{t(`stats.${stat.labelKey}`)}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-[400px] lg:h-full">
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/50">
                <Image
                  src="/home.avif"
                  alt="Farmers and investors working together"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
