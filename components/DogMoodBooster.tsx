"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function DogMoodBooster() {
  const [dogUrl, setDogUrl] = useState("")

  const fetchDog = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await res.json()
    setDogUrl(data.message)
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={fetchDog}>Cheer Me Up 🐶</Button>
      {dogUrl && <img src={dogUrl} alt="A cute dog" className="rounded-xl w-64" />}
    </div>
  )
}
