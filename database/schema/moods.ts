import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"
import { users } from "./auth"
import { createSelectSchema, createInsertSchema } from "drizzle-zod"
import { z } from "zod"

export const moods = pgTable("moods", {
  id: uuid("id").primaryKey().defaultRandom(),
  mood: text("mood").notNull(),
  note: text("note"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
})

export const usersRelations = relations(users, ({ many }) => ({
  moods: many(moods),
}))

export const moodsRelations = relations(moods, ({ one }) => ({
  user: one(users, {
    fields: [moods.userId],
    references: [users.id],
  }),
}))

export const selectMoodSchema = createSelectSchema(moods)
export type Mood = z.infer<typeof selectMoodSchema>

export const insertMoodSchema = createInsertSchema(moods, {
  mood: (schema: z.ZodString) => schema.nonempty("Mood cannot be empty"),
})
export type NewMood = z.infer<typeof insertMoodSchema>
