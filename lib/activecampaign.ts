"use server"

const API_URL = ''
const API_KEY = ''
const NEWSLETTER_LIST_ID = '54'
const CONTACT_LIST_ID = '9'
const MESSAGE_FIELD_ID = ''

const LANGUAGE_FIELD_ID = '75'

type SubmitResult = {
  success: boolean
  error?: string
}

type NewsletterData = {
  name: string
  email: string
  language?: string
}

type ContactData = {
  name: string
  email: string
  phone?: string
  message?: string
}

type ContactPayload = {
  contact: {
    email: string
    firstName?: string
    lastName?: string
    phone?: string
    fieldValues?: Array<{ field: string; value: string }>
  }
}

async function syncContact(payload: ContactPayload, listId?: string): Promise<SubmitResult> {
  if (!API_URL || !API_KEY) {
    return { success: false, error: "ActiveCampaign API not configured" }
  }

  try {
    // 1. Create or update the contact
    const syncResponse = await fetch(`${API_URL}/api/3/contact/sync`, {
      method: "POST",
      headers: {
        "Api-Token": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!syncResponse.ok) {
      const errorData = await syncResponse.json().catch(() => ({}))
      return {
        success: false,
        error: errorData.message || `HTTP ${syncResponse.status}`,
      }
    }

    const syncData = await syncResponse.json()
    const contactId = syncData.contact?.id

    // 2. Subscribe to list if listId provided
    if (listId && contactId) {
      const listResponse = await fetch(`${API_URL}/api/3/contactLists`, {
        method: "POST",
        headers: {
          "Api-Token": API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactList: {
            list: listId,
            contact: contactId,
            status: 1, // 1 = subscribed
          },
        }),
      })

      if (!listResponse.ok) {
        // Contact created but list subscription failed - still consider partial success
        console.error("Failed to subscribe contact to list")
      }
    }

    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

function splitName(fullName: string): { firstName: string; lastName?: string } {
  const parts = fullName.trim().split(/\s+/)
  if (parts.length === 1) {
    return { firstName: parts[0] }
  }
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  }
}

export async function submitNewsletterForm(data: NewsletterData): Promise<SubmitResult> {
  const { firstName, lastName } = splitName(data.name)

  const fieldValues: Array<{ field: string; value: string }> = []

  if (data.language && LANGUAGE_FIELD_ID) {
    fieldValues.push({
      field: LANGUAGE_FIELD_ID,
      value: data.language,
    })
  }

  const payload: ContactPayload = {
    contact: {
      email: data.email,
      firstName,
      ...(lastName && { lastName }),
      ...(fieldValues.length > 0 && { fieldValues }),
    },
  }

  return syncContact(payload, NEWSLETTER_LIST_ID)
}

export async function submitContactForm(data: ContactData): Promise<SubmitResult> {
  const { firstName, lastName } = splitName(data.name)

  const fieldValues: Array<{ field: string; value: string }> = []

  if (data.message && MESSAGE_FIELD_ID) {
    fieldValues.push({ field: MESSAGE_FIELD_ID, value: data.message })
  }

  const payload: ContactPayload = {
    contact: {
      email: data.email,
      firstName,
      ...(lastName && { lastName }),
      ...(data.phone && { phone: data.phone }),
      ...(fieldValues.length > 0 && { fieldValues }),
    },
  }

  return syncContact(payload, CONTACT_LIST_ID)
}
