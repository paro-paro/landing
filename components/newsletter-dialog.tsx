"use client"

import * as React from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { submitNewsletterForm } from "@/lib/activecampaign"

type NewsletterDialogProps = {
  trigger: React.ReactElement
}

export function NewsletterDialog({ trigger }: NewsletterDialogProps) {
  const t = useTranslations("footer")
  const locale = useLocale()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)

    const formData = new FormData(form)
    const name = formData.get("name")?.toString() ?? ""
    const email = formData.get("email")?.toString() ?? ""

    const [result] = await Promise.all([
      submitNewsletterForm({ name, email, language: locale }),
      new Promise((resolve) => setTimeout(resolve, 250)),
    ])

    setIsSubmitting(false)

    if (result.success) {
      toast.success(t("newsletter.success"))
      form.reset()
      setOpen(false)
    } else {
      toast.error(t("newsletter.error"))
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md p-8 bg-card">
        <DialogHeader>
          <DialogTitle>{t("newsletter.title")}</DialogTitle>
          <DialogDescription>{t("newsletter.description")}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="newsletter-name">
              <span>
                {t("newsletter.nameLabel")} <span className="text-red-500">*</span>
              </span>
            </Label>
            <Input
              id="newsletter-name"
              name="name"
              placeholder={t("newsletter.namePlaceholder")}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="newsletter-email">
              <span>
                {t("newsletter.emailLabel")} <span className="text-red-500">*</span>
              </span>
            </Label>
            <Input
              id="newsletter-email"
              name="email"
              type="email"
              placeholder={t("newsletter.emailPlaceholder")}
              required
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("newsletter.submitting")}
              </>
            ) : (
              t("newsletter.submit")
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            {t("newsletter.privacyNote")}{" "}
            <Link href={`/${locale}/privacy`} className="text-primary hover:underline">
              {t("newsletter.privacyLink")}
            </Link>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
