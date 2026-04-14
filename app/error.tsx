"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="font-heading text-5xl text-navy sm:text-6xl">Oops</h1>
      <p className="mt-4 font-heading text-2xl text-dark">
        Something went wrong
      </p>
      <p className="mt-3 text-[15px] text-body/50">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-8 inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-dark transition-all duration-200 hover:bg-[#d4b374]"
      >
        Try Again
      </button>
    </main>
  );
}
