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
import { Checkbox } from "@/components/ui/checkbox"
import { submitNewsletterForm } from "@/lib/activecampaign"

const TAG_ID_INTEREST_COFFEE = '221'
const TAG_ID_INTEREST_WEB3 = '222'
const TAG_ID_INTEREST_IMPACT_INVESTMENT = '223'

const INTEREST_TAG_IDS = {
  impactInvesting: TAG_ID_INTEREST_IMPACT_INVESTMENT,
  web3: TAG_ID_INTEREST_WEB3,
  coffee: TAG_ID_INTEREST_COFFEE,
} as const

type NewsletterDialogProps = {
  trigger: React.ReactElement
}

export function NewsletterDialog({ trigger }: NewsletterDialogProps) {
  const t = useTranslations("footer")
  const locale = useLocale()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [interests, setInterests] = React.useState<string[]>([])

  function handleInterestChange(tagId: string, checked: boolean) {
    setInterests((prev) =>
      checked ? [...prev, tagId] : prev.filter((id) => id !== tagId)
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)

    const formData = new FormData(form)
    const name = formData.get("name")?.toString() ?? ""
    const email = formData.get("email")?.toString() ?? ""

    const [result] = await Promise.all([
      submitNewsletterForm({ name, email, language: locale, interests }),
      new Promise((resolve) => setTimeout(resolve, 250)),
    ])

    setIsSubmitting(false)

    if (result.success) {
      toast.success(t("newsletter.success"))
      form.reset()
      setInterests([])
      setOpen(false)
    } else {
      toast.error(t("newsletter.error"))
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-lg p-8 bg-card max-h-[90vh] overflow-y-auto">
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
          <div className="grid gap-3">
            <div>
              <Label id="interests-label">{t("newsletter.interestsLabel")}</Label>
              <p className="text-sm italic text-muted-foreground/80 mt-1">
                {t("newsletter.interestsHint")}
              </p>
            </div>
            <div className="space-y-4" role="group" aria-labelledby="interests-label">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="interest-impact"
                  checked={interests.includes(INTEREST_TAG_IDS.impactInvesting)}
                  onCheckedChange={(checked) =>
                    handleInterestChange(INTEREST_TAG_IDS.impactInvesting, !!checked)
                  }
                  disabled={isSubmitting}
                />
                <Label htmlFor="interest-impact" className="font-normal cursor-pointer">
                  {t("newsletter.interests.impactInvesting")}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="interest-web3"
                  checked={interests.includes(INTEREST_TAG_IDS.web3)}
                  onCheckedChange={(checked) =>
                    handleInterestChange(INTEREST_TAG_IDS.web3, !!checked)
                  }
                  disabled={isSubmitting}
                />
                <Label htmlFor="interest-web3" className="font-normal cursor-pointer">
                  {t("newsletter.interests.web3")}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="interest-coffee"
                  checked={interests.includes(INTEREST_TAG_IDS.coffee)}
                  onCheckedChange={(checked) =>
                    handleInterestChange(INTEREST_TAG_IDS.coffee, !!checked)
                  }
                  disabled={isSubmitting}
                />
                <Label htmlFor="interest-coffee" className="font-normal cursor-pointer">
                  {t("newsletter.interests.coffee")}
                </Label>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            {t("newsletter.noSpam")}
          </p>
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
