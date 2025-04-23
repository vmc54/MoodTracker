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
    <main className="py-8 px-4">
      <section className="container mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Mood Calendar</h1>
        <MoodCalendar moods={mockMoodEntries} />
      </section>
    </main>
  )
}
