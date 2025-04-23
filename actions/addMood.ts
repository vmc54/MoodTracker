"use server"

import { revalidatePath } from "next/cache"
import { auth } from "@/lib/auth"
import { db } from "@/database/db"
import { moods } from "@/database/schema/moods"
import { headers } from "next/headers"

export async function addMood(formData: FormData) {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const user = session?.user

  if (!user) {
    return { error: "Not authenticated" }
  }

  const mood = formData.get("mood")?.toString()
  const note = formData.get("note")?.toString()

  if (!mood) {
    return { error: "Mood is required" }
  }

  await db.insert(moods).values({
    mood,
    note,
    userId: user.id,
  })

  revalidatePath("/log")

  return { success: true }
}
