export function MoodItem({ moodEntry }: { moodEntry: { id: string; mood: string; note: string; createdAt: Date } }) {
    return (
      <li
        key={moodEntry.id}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-lg border px-4 py-2"
      >
        <div>
          <span className="text-lg font-semibold">{moodEntry.mood}</span>
          <p className="text-sm text-muted-foreground">{moodEntry.note}</p>
        </div>
        <span className="text-xs text-muted-foreground whitespace-nowrap">
          {moodEntry.createdAt.toLocaleDateString()}
        </span>
      </li>
    )
  }
  