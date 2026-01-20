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
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/lib/activecampaign"

type ContactDialogProps = {
  trigger: React.ReactElement
}

export function ContactDialog({ trigger }: ContactDialogProps) {
  const t = useTranslations("coffee")
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
    const phone = formData.get("phone")?.toString() ?? ""
    const message = formData.get("message")?.toString() || undefined

    const [result] = await Promise.all([
      submitContactForm({ name, email, phone, language: locale, message }),
      new Promise((resolve) => setTimeout(resolve, 250)),
    ])

    setIsSubmitting(false)

    if (result.success) {
      toast.success(t("contact.success"))
      form.reset()
      setOpen(false)
    } else {
      toast.error(t("contact.error"))
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md p-8">
        <DialogHeader>
          <DialogTitle>{t("contact.title")}</DialogTitle>
          <DialogDescription>
            {t("contact.description")}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid gap-2">
            <Label htmlFor="contact-name">
              <span>{t("contact.name")} <span className="text-red-500">*</span></span>
            </Label>
            <Input
              id="contact-name"
              name="name"
              placeholder={t("contact.name")}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-email">
              <span>{t("contact.email")} <span className="text-red-500">*</span></span>
            </Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder={t("contact.email")}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-phone">
              <span>{t("contact.phone")} <span className="text-red-500">*</span></span>
            </Label>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder={t("contact.phonePlaceholder")}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-message">{t("contact.message")}</Label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder={t("contact.messagePlaceholder")}
              className="min-h-[100px]"
              disabled={isSubmitting}
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t("contact.submitting")}
              </>
            ) : (
              t("contact.submit")
            )}
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            {t("contact.privacyNote")}{" "}
            <Link href={`/${locale}/privacy`} className="text-primary hover:underline">
              {t("contact.privacyLink")}
            </Link>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
