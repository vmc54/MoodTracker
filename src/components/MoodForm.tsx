'use client';
import { useState } from 'react';
import { submitMood } from '@/server/moodActions';

const moods = ["😊", "😐", "😔", "😡", "😴"];

export default function MoodForm({ userId }: { userId: string }) {
  const [mood, setMood] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!mood) return;
    await submitMood(userId, mood);
    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-2">Select your mood:</label>
      <div className="flex gap-2 mb-4">
        {moods.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMood(m)}
            className={`text-2xl ${mood === m ? 'border-2 border-black' : ''}`}
          >{m}</button>
        ))}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Mood</button>
    </form>
  );
}
