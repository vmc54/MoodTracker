import { MoodCalendar } from "@/components/MoodCalendar"

const mockMoodEntries = [
  {
    id: "1",
    mood: "😊 Happy",
    note: "Walked in the park",
    createdAt: new Date("2025-04-21"),
  },
  {
    id: "2",
    mood: "😩 Stressed",
    note: "Busy week",
    createdAt: new Date("2025-04-22"),
  },
]

export default function CalendarPage() {
  return (
    <main className="py-10 px-4 flex items-center justify-center min-h-screen">
      <section className="w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-6">Mood Calendar</h1>
        <MoodCalendar moods={mockMoodEntries} />
      </section>
    </main>
  )
}
