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
    mood: "😊 Happy",
    note: "Chilled and read a book",
    createdAt: new Date("2025-04-22"),
  },
]

export default function CalendarPage() {
  return (
    <main className="py-10 px-4 min-h-screen flex flex-col items-center justify-start">
      <h1 className="text-3xl font-bold mb-6 text-center">Mood Calendar</h1>
      <div className="flex justify-center w-full">
        <MoodCalendar moods={mockMoodEntries} />
      </div>
    </main>
  )
}
