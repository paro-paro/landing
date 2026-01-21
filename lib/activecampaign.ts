"use server"

const API_URL = process.env.ACTIVE_CAMPAIGN_API_URL
const API_KEY = process.env.ACTIVE_CAMPAIGN_API_KEY
const LIST_ID_NEWSLETTER = '54'
const LIST_ID_MARKETING = '23'
const LIST_ID_GREEN_COFFEE = '9'
const FIELD_ID_LANGUAGE = '75'
const FIELD_ID_GREEN_COFFEE_MESSAGE = '3'
const TAG_ID_GREEN_COFFEE = '132'
const TAG_ID_SUBSCRIBER = '187'

type SubmitResult = {
  success: boolean
  error?: string
}

type NewsletterData = {
  name: string
  email: string
  language: string
  interests?: string[]
}

type ContactData = {
  name: string
  email: string
  phone: string
  language: string
  message?: string
}

type Contact = {
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  fieldValues?: Array<{
    field: string;
    value: string
  }>
}

type SyncOptions = {
  listIds?: string[]
  tagIds?: string[]
}

async function syncContact(contact: Contact, options?: SyncOptions): Promise<SubmitResult> {
  if (!API_URL || !API_KEY) {
    return { success: false, error: "ActiveCampaign API not configured" }
  }

  const headers = { "Api-Token": API_KEY, "Content-Type": "application/json" }

  try {
    // 1. Create/update contact
    const syncResponse = await fetch(`${API_URL}/api/3/contact/sync`, {
      headers,
      method: "POST",
      body: JSON.stringify({ contact }),
    })

    if (!syncResponse.ok) {
      const errorData = await syncResponse.json().catch(() => ({}))
      return {
        success: false,
        error: errorData.message || `HTTP ${syncResponse.status}`,
      }
    }

    const syncData = await syncResponse.json()
    const contactId = syncData.contact?.id as string | undefined

    if (!contactId) {
      return { success: false, error: "No contact ID returned" }
    }

    // 2. Subscribe to lists and add tags (parallel)
    const promises: Promise<Response>[] = []

    if (options?.listIds?.length) {
      for (const listId of options.listIds) {
        promises.push(
          fetch(`${API_URL}/api/3/contactLists`, {
            method: "POST",
            headers,
            body: JSON.stringify({
              contactList: {
                list: listId,
                contact: contactId,
                status: 1,
              },
            }),
          })
        )
      }
    }

    if (options?.tagIds?.length) {
      for (const tagId of options.tagIds) {
        promises.push(
          fetch(`${API_URL}/api/3/contactTags`, {
            method: "POST",
            headers,
            body: JSON.stringify({
              contactTag: {
                contact: contactId,
                tag: tagId,
              },
            }),
          })
        )
      }
    }

    await Promise.all(promises)
    return { success: true }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

export async function submitNewsletterForm(data: NewsletterData): Promise<SubmitResult> {
  const { firstName, lastName } = splitName(data.name)
  const fieldValues: Array<{ field: string; value: string }> = []

  if (data.language && FIELD_ID_LANGUAGE) {
    fieldValues.push({
      field: FIELD_ID_LANGUAGE,
      value: data.language,
    })
  }

  const contact: Contact = {
    email: data.email,
    firstName,
    lastName,
    ...(fieldValues.length > 0 && {
      fieldValues,
    }),
  }

  const tagIds = [TAG_ID_SUBSCRIBER, ...(data.interests ?? [])]

  return syncContact(contact, {
    listIds: [LIST_ID_NEWSLETTER, LIST_ID_MARKETING],
    tagIds,
  })
}

export async function submitContactForm(data: ContactData): Promise<SubmitResult> {
  const { firstName, lastName } = splitName(data.name)
  const fieldValues: Array<{ field: string; value: string }> = []

  if (data.language && FIELD_ID_LANGUAGE) {
    fieldValues.push({
      field: FIELD_ID_LANGUAGE,
      value: data.language,
    })
  }

  if (data.message && FIELD_ID_GREEN_COFFEE_MESSAGE) {
    fieldValues.push({
      field: FIELD_ID_GREEN_COFFEE_MESSAGE,
      value: data.message,
    })
  }

  const contact: Contact = {
    email: data.email,
    firstName,
    lastName,
    phone: data.phone,
    ...(fieldValues.length > 0 && {
      fieldValues,
    }),
  }

  return syncContact(contact, {
    listIds: [LIST_ID_GREEN_COFFEE],
    tagIds: [TAG_ID_GREEN_COFFEE],
  })
}

function splitName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/)
  if (parts.length === 1) {
    return {
      firstName: parts[0],
      lastName: '',
    }
  }

  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  }
}
