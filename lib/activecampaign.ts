"use server"

const ACTIVECAMPAIGN_URL = process.env.ACTIVECAMPAIGN_URL
const NEWSLETTER_FORM_ID = process.env.ACTIVECAMPAIGN_NEWSLETTER_FORM_ID
const CONTACT_FORM_ID = process.env.ACTIVECAMPAIGN_CONTACT_FORM_ID

type SubmitResult = {
  success: boolean
  error?: string
}

type NewsletterData = {
  name: string
  email: string
}

type ContactData = {
  name: string
  email: string
  phone?: string
  message?: string
}

export async function submitNewsletterForm(data: NewsletterData): Promise<SubmitResult> {
  if (!ACTIVECAMPAIGN_URL || !NEWSLETTER_FORM_ID) {
    return { success: false, error: "Newsletter form not configured" }
  }

  const formData = new URLSearchParams()

  // ActiveCampaign required fields
  formData.append("u", NEWSLETTER_FORM_ID)
  formData.append("f", NEWSLETTER_FORM_ID)
  formData.append("s", "")
  formData.append("c", "0")
  formData.append("m", "0")
  formData.append("act", "sub")
  formData.append("v", "2")

  // Form fields - field names may need adjustment based on your AC form setup
  formData.append("fullname", data.name)
  formData.append("email", data.email)

  try {
    const response = await fetch(ACTIVECAMPAIGN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })

    if (!response.ok) {
      return { success: false, error: `HTTP ${response.status}` }
    }

    const text = await response.text()

    // ActiveCampaign returns HTML - check for error indicators
    if (text.includes("error") || text.includes("Error")) {
      return { success: false, error: "Submission rejected" }
    }

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

export async function submitContactForm(data: ContactData): Promise<SubmitResult> {
  if (!ACTIVECAMPAIGN_URL || !CONTACT_FORM_ID) {
    return { success: false, error: "Contact form not configured" }
  }

  const formData = new URLSearchParams()

  // ActiveCampaign required fields
  formData.append("u", CONTACT_FORM_ID)
  formData.append("f", CONTACT_FORM_ID)
  formData.append("s", "")
  formData.append("c", "0")
  formData.append("m", "0")
  formData.append("act", "sub")
  formData.append("v", "2")

  // Form fields - field names may need adjustment based on your AC form setup
  formData.append("fullname", data.name)
  formData.append("email", data.email)
  if (data.phone) formData.append("phone", data.phone)
  if (data.message) formData.append("field[1]", data.message) // Custom field - adjust ID as needed

  try {
    const response = await fetch(ACTIVECAMPAIGN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    })

    if (!response.ok) {
      return { success: false, error: `HTTP ${response.status}` }
    }

    const text = await response.text()

    if (text.includes("error") || text.includes("Error")) {
      return { success: false, error: "Submission rejected" }
    }

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}
