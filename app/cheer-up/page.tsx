"use client"

import { DogMoodBooster } from "@/components/DogMoodBooster"

export default function CheerUpPage() {
  return (
    <main className="py-10 px-4 min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">Need a Smile?</h1>
      <DogMoodBooster />
      <p className="text-lg font-medium mt-4">Hope this made you smile! 🐾</p>
    </main>
  )
}