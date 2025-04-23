"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoodItem } from "./MoodItem"

export function MoodList({ moods }: { moods: { id: string; mood: string; note: string; createdAt: Date }[] }) {
  const [entries, setEntries] = useState(moods)
  const [moodText, setMoodText] = useState("")
  const [noteText, setNoteText] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!moodText) return

    const newEntry = {
      id: crypto.randomUUID(),
      mood: moodText,
      note: noteText,
      createdAt: new Date(),
    }

    setEntries([newEntry, ...entries])
    setMoodText("")
    setNoteText("")
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 items-stretch">
        <select
          className="border rounded px-4 py-2"
          value={moodText}
          onChange={(e) => setMoodText(e.target.value)}
        >
          <option value="">Select a mood...</option>
          <option value="😊 Happy">😊 Happy</option>
          <option value="😩 Stressed">😩 Stressed</option>
          <option value="😌 Calm">😌 Calm</option>
          <option value="😢 Sad">😢 Sad</option>
          <option value="😴 Tired">😴 Tired</option>
        </select>

        <Input
          name="note"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder="Optional note..."
        />

        <Button type="submit">Log Mood</Button>
      </form>

      <ul className="space-y-2">
        {entries.map((entry) => (
          <MoodItem key={entry.id} moodEntry={entry} />
        ))}
      </ul>
    </div>
  )
}
