import { desc } from "drizzle-orm"
import { db } from "@/database/db"
import { moods } from "@/database/schema/moods"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  // Optional: Add auth check here

  const allMoods = await db.query.moods.findMany({
    with: {
      user: {
        columns: {
          name: true,
        },
      },
    },
    orderBy: [desc(moods.createdAt)],
  })

  return (
    <main className="py-8 px-4">
      <section className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        <div className="border rounded-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="py-2 px-4 text-left">User</th>
                <th className="py-2 px-4 text-left">Mood</th>
                <th className="py-2 px-4 text-left">Note</th>
                <th className="py-2 px-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {allMoods.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-2 px-4 text-center">
                    No moods logged
                  </td>
                </tr>
              )}
              {allMoods.map((entry) => (
                <tr key={entry.id} className="border-t">
                  <td className="py-2 px-4">{entry.user.name}</td>
                  <td className="py-2 px-4">{entry.mood}</td>
                  <td className="py-2 px-4">{entry.note}</td>
                  <td className="py-2 px-4">
                    {new Date(entry.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
