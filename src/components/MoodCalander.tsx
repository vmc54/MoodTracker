export default function MoodCalendar({ moods }: { moods: { date: string, mood: string }[] }) {
    return (
      <div className="grid grid-cols-7 gap-2">
        {moods.map(({ date, mood }) => (
          <div key={date} className="p-2 border text-center">
            <div>{new Date(date).toLocaleDateString()}</div>
            <div className="text-2xl">{mood}</div>
          </div>
        ))}
      </div>
    );
  }