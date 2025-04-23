"use client"

import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoodItem } from "./MoodItem"
import { addMood } from "@/actions/addMood"

export function MoodList({
  moods,
}: {
  moods: { id: string; mood: string; note: string; createdAt: Date }[]
}) {
  const [isPending, startTransition] = useTransition()

  return (
    <div className="space-y-4">
      <form
        action={(formData) =>
          startTransition(() => {
            addMood(formData)
          })
        }
        className="flex flex-col sm:flex-row gap-2 items-stretch"
      >
        <select name="mood" className="border rounded px-4 py-2" required>
          <option value="">Select a mood...</option>
          <option value="😊 Happy">😊 Happy</option>
          <option value="😩 Stressed">😩 Stressed</option>
          <option value="😌 Calm">😌 Calm</option>
          <option value="😢 Sad">😢 Sad</option>
          <option value="😴 Tired">😴 Tired</option>
        </select>

        <Input name="note" placeholder="Optional note..." />

        <Button type="submit" disabled={isPending}>
          {isPending ? "Logging..." : "Log Mood"}
        </Button>
      </form>

      <ul className="space-y-2">
        {moods.map((entry) => (
          <MoodItem key={entry.id} moodEntry={entry} />
        ))}
      </ul>
    </div>
  )
}