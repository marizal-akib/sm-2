"use client";

import { useRef, useState, useCallback, useEffect } from "react";

const REVIEWS = [
  {
    quote:
      "Square Mile handled my spouse visa application with incredible attention to detail. They kept me informed at every stage and the visa was approved first time.",
    initials: "A.R.",
    category: "Spouse Visa",
  },
  {
    quote:
      "After being let go unfairly, I didn't know where to turn. The team at Square Mile secured a settlement that exceeded my expectations.",
    initials: "M.K.",
    category: "Employment",
  },
  {
    quote:
      "Professional, responsive, and genuinely caring. They made a stressful asylum process feel manageable.",
    initials: "S.H.",
    category: "Asylum",
  },
  {
    quote:
      "The sponsor licence application was complex but Square Mile handled everything. We had our licence within 8 weeks.",
    initials: "J.P.",
    category: "Business Immigration",
  },
] as const;

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const distance = card ? card.offsetWidth + 24 : 380;
    el.scrollBy({ left: dir === "left" ? -distance : distance, behavior: "smooth" });
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header + arrows */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Testimonials
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight text-dark sm:text-4xl md:text-[42px]">
              What our clients say
            </h2>
          </div>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 ${
                canScrollLeft
                  ? "border-lightgrey text-dark hover:border-gold hover:text-gold"
                  : "border-lightgrey/60 text-body/20 cursor-default"
              }`}
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M10 3l-5 5 5 5" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200 ${
                canScrollRight
                  ? "border-lightgrey text-dark hover:border-gold hover:text-gold"
                  : "border-lightgrey/60 text-body/20 cursor-default"
              }`}
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable track — full bleed, content aligned with the grid via padding */}
      <div
        ref={scrollRef}
        role="region"
        aria-label="Client testimonials"
        className="scrollbar-hide mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-2 sm:mt-14 lg:px-10"
        style={{
          scrollPaddingLeft: "1.5rem",
          maskImage: "linear-gradient(to right, transparent 0, black 1.5rem, black calc(100% - 3rem), transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0, black 1.5rem, black calc(100% - 3rem), transparent 100%)",
        }}
      >
        {/* Left spacer to align first card with the max-w-7xl grid */}
        <div className="hidden w-0 flex-shrink-0 lg:block" style={{ minWidth: "calc((100vw - 80rem) / 2)" }} />

        {REVIEWS.map((r, i) => (
          <div
            key={i}
            data-card
            className="w-[320px] flex-shrink-0 snap-start rounded-lg border border-lightgrey bg-white p-7 sm:w-[380px] sm:p-8"
          >
            {/* Category badge */}
            <span className="inline-block rounded-full border border-gold/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-gold">
              {r.category}
            </span>

            {/* Quote */}
            <blockquote className="mt-5 font-heading text-[17px] italic leading-relaxed text-dark/80 sm:text-[18px]">
              &ldquo;{r.quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-[12px] font-semibold text-dark/50">
                {r.initials}
              </div>
              <span className="text-[13px] text-body/40">{r.category} Client</span>
            </div>
          </div>
        ))}

        {/* Right spacer */}
        <div className="w-6 flex-shrink-0 lg:hidden" />
        <div className="hidden w-0 flex-shrink-0 lg:block" style={{ minWidth: "calc((100vw - 80rem) / 2)" }} />
      </div>
    </section>
  );
}
