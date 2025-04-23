import { MoodList } from "@/components/MoodList"

const mockMoodEntries = [
  {
    id: "1",
    mood: "😊 Happy",
    note: "Went on a walk and it was sunny!",
    createdAt: new Date(),
  },
  {
    id: "2",
    mood: "😩 Stressed",
    note: "Too many deadlines.",
    createdAt: new Date(),
  },
  {
    id: "3",
    mood: "😌 Calm",
    note: "Finished all my tasks early today.",
    createdAt: new Date(),
  },
]

export default function MoodPage() {
  return (
    <main className="py-8 px-4">
      <section className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">My Mood Log</h1>
        <MoodList moods={mockMoodEntries} />
      </section>
    </main>
  )
}
