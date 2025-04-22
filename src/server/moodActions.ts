'use server';
import { db } from '@/database/db';
import { moods } from '@/database/schema';
import { eq } from 'drizzle-orm';

export async function submitMood(userId: string, mood: string) {
  await db.insert(moods).values({ userId, mood, date: new Date().toISOString().split("T")[0] });
}

export async function getMoodsByUser(userId: string) {
  return db.select().from(moods).where(eq(moods.userId, userId));
}