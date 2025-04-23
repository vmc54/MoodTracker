"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

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

      <div className="w-64 h-64 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {dogUrl && (
            <motion.img
              key={dogUrl}
              src={dogUrl}
              alt="A cute dog"
              className="rounded-xl shadow-md object-cover w-full h-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}