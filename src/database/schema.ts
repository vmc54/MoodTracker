import { pgTable, text, date } from 'drizzle-orm/pg-core';

export const moods = pgTable('moods', {
  userId: text().notNull(),
  mood: text().notNull(),
  date: date().notNull()
});
