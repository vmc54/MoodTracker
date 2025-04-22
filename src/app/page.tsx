import { auth } from "@/lib/auth";
import { getMoodsByUser } from "@/server/moodActions";
import MoodCalendar from "@/components/MoodCalendar";
import MoodForm from "@/components/MoodForm";

export default async function HomePage() {
  const session = await auth();
  const moods = session?.user ? await getMoodsByUser(session.user.id) : [];

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mood Tracker</h1>
      {session?.user ? (
        <>
          <MoodForm userId={session.user.id} />
          <MoodCalendar moods={moods} />
        </>
      ) : (
        <p>Please sign in to track your mood.</p>
      )}
    </main>
  );
}