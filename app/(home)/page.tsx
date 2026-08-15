import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center flex-1 px-6">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-4">
        Interview + Project Driven · 2 Weeks · Staff-level depth
      </p>
      <h1 className="text-4xl font-bold mb-4">ASP.NET Core Web API Mastery</h1>
      <p className="max-w-xl text-zinc-600 dark:text-zinc-300 mb-8">
        A complete, chapter-by-chapter study plan for learning ASP.NET Core Web API
        extensively — and passing the interview. Every chapter lands on one project:{' '}
        <strong>CommerceHub</strong>, an order &amp; inventory backend.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/docs/plan/"
          className="rounded-md bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2 text-sm font-medium hover:opacity-80"
        >
          Read the 2-Week Plan →
        </Link>
        <Link
          href="/docs/chapters/01-fundamentals/"
          className="rounded-md border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          Start Chapter 1
        </Link>
      </div>
    </div>
  );
}
