import Link from "next/link";
import { LINKS } from "@/lib/constants";
import HeroVideoBackground from "./HeroVideoBackground";

const STATS = [
  { label: "SRA Regulated" },
  { label: "Fleet Street, EC4" },
  { label: "Immigration Specialists" },
  { label: "Transparent Fees" },
] as const;

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #1C1C1E, #1E2B52)" }}
    >
      <HeroVideoBackground />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(28,28,30,0.6) 0%, rgba(28,28,30,0.85) 100%)",
        }}
      />

      {/* ------------------------------------------------------------------ */}
      {/* Content                                                            */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Headline */}
        <h1 className="mx-auto max-w-3xl font-heading text-4xl leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-[68px]">
          Trusted legal counsel
          <br className="hidden sm:block" /> in the heart of the City
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg md:text-[19px]">
          Immigration, Family, Employment and Litigation Solicitors
          <span className="mx-2 hidden text-white/50 sm:inline">—</span>
          <br className="sm:hidden" />
          <span className="mt-1 block sm:mt-0 sm:inline">Fleet Street, London</span>
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a
            href={LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-dark transition-all duration-200 hover:bg-[#d4b374]"
          >
            Book a Consultation
          </a>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-sm border border-white/25 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-dark"
          >
            Our Services
          </Link>
        </div>

        {/* Gold divider */}
        <div className="mt-14 h-px w-16 bg-gold/40 sm:mt-16" />

        {/* Stats ticker */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-2 sm:mt-8 sm:gap-x-3">
          {STATS.map((stat, i) => (
            <span key={stat.label} className="flex items-center">
              <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.14em] text-white/70 sm:text-[12px]">
                {stat.label}
              </span>
              {i < STATS.length - 1 && (
                <span className="ml-2 inline-block h-3.5 w-px bg-white/25 sm:ml-3" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
