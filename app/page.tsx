import Image from "next/image"

export default function Home() {
    return (
        <div className="grid grow grid-rows-[auto_1fr_auto] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
            <main className="row-start-2 flex flex-col items-center gap-8 text-center">
                <Image
                    src="/mood.png"
                    alt="Mood Tracker Logo"
                    width={400}
                    height={400}
                    priority
                />

                <h1 className="text-4xl font-bold">Welcome to Mood Tracker!</h1>

                <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
                    This app helps you log and reflect on your daily moods. Whether you&apos;re feeling joyful, anxious, calm, or anything in between — tracking your emotions can help build awareness and improve well-being over time.
                </p>

                <ol className="list-decimal list-inside text-sm font-[family-name:var(--font-geist-mono)] text-left">
                    <li className="mb-2">Log your mood each day to build your history.</li>
                    <li className="mb-2">Add a note if you want to reflect or explain.</li>
                    <li className="mb-2">Review your emotional patterns over time.</li>
                </ol>
            </main>

            <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <span>Built with ❤️ using Next.js</span>
                <a
                    href="https://vercel.com/"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hosted on Vercel
                </a>
            </footer>
        </div>
    )
}
