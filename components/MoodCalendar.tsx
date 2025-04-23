"use client"

import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import { useState } from "react"

type MoodEntry = {
  id: string
  mood: string
  note: string
  createdAt: Date
}

export function MoodCalendar({ moods }: { moods: MoodEntry[] }) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

  const getEmojiForDate = (date: Date) => {
    const entry = moods.find(
      (m) => new Date(m.createdAt).toDateString() === date.toDateString()
    )
    return entry?.mood.split(" ")[0] || null
  }

  return (
    <div className="pt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">Mood Calendar</h2>
      <Calendar
        value={selectedDate}
        onChange={(value) => {
          if (value instanceof Date) {
            setSelectedDate(value)
          }
        }}
        tileContent={({ date }) => {
          const emoji = getEmojiForDate(date)
          return emoji ? <div className="text-center">{emoji}</div> : null
        }}
      />
    </div>
  )
}