import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <h1 className="font-serif text-5xl font-semibold tracking-tight">
        AI Portfolio Generator
      </h1>
      <p className="mt-3 max-w-md text-lg text-neutral-500">
        For actresses, models, influencers & creators. Fill a short form and get
        a professional, shareable portfolio in under two minutes.
      </p>
      <Link
        href="/create"
        className="mt-8 inline-flex h-11 items-center justify-center rounded-md bg-black px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
      >
        Create your portfolio →
      </Link>
    </div>
  );
}
