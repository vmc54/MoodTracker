import { headers } from "next/headers"
import { db } from "@/database/db"
import { moods } from "@/database/schema/moods"
import { auth } from "@/lib/auth"
import { eq, desc } from "drizzle-orm"
import { MoodList } from "@/components/MoodList"

export const dynamic = "force-dynamic"

export default async function MoodLogPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  const user = session?.user

  if (!user) {
    return (
      <main className="py-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-6">My Mood Log</h1>
        <p>Login to see your diary entries!</p>
      </main>
    )
  }

  const userMoods = await db.query.moods.findMany({
    where: eq(moods.userId, user.id),
    orderBy: [desc(moods.createdAt)],
  })

  const cleanedMoods = userMoods.map((mood) => ({
    ...mood,
    note: mood.note ?? "",
  }))

  return (
    <main className="py-8 px-4">
      <section className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">My Mood Log</h1>
        <MoodList moods={cleanedMoods} />
      </section>
    </main>
  )
}