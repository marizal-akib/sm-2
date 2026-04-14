const CARDS = [
  {
    title: "Transparent fees",
    description:
      "Every matter quoted upfront. No hidden costs, no hourly surprises. You'll know what you're paying before we start.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M4 12h24" stroke="currentColor" strokeWidth="1.3" />
        <path d="M10 18h4M10 22h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Dedicated case manager",
    description:
      "One solicitor owns your case from start to finish. You'll always know who to call and what's happening.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    title: "Fast & clear communication",
    description:
      "We respond within 24 hours. Updates in plain English, not legal jargon. Your case, demystified.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <path d="M6 8h20v14a2 2 0 01-2 2H8a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.3" />
        <path d="M6 8l10 8 10-8" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
] as const;

export default function Promise() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Our promise
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-dark sm:text-4xl md:text-[42px]">
            Commitments you can rely on.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-3 md:gap-8">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-lg border border-lightgrey bg-white px-7 py-8 sm:px-8 sm:py-9"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-lightgrey text-gold">
                {card.icon}
              </div>
              <h3 className="mt-6 font-heading text-xl text-dark">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body/60">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
