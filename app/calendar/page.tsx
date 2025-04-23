import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { db } from "@/database/db"
import { moods } from "@/database/schema/moods"
import { eq } from "drizzle-orm"
import { MoodCalendar } from "@/components/MoodCalendar"

export const dynamic = "force-dynamic"

export default async function CalendarPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  const user = session?.user

  if (!user) {
    return (
      <main className="py-10 px-4 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold mb-6">Mood Overview</h1>
        <p>Please log in to view your mood calendar.</p>
      </main>
    )
  }

  const userMoods = await db.query.moods.findMany({
    where: eq(moods.userId, user.id),
  })

  const cleanedMoods = userMoods.map((entry) => ({
    ...entry,
    note: entry.note ?? "",
  }))

  return (
    <main className="py-10 px-4 min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold mb-6 text-center">Mood Overview</h1>
      <div className="flex justify-center w-full">
        <MoodCalendar moods={cleanedMoods} />
      </div>
    </main>
  )
}
