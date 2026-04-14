import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import { FIRM } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us — Square Mile Solicitors",
  description:
    "Learn about Square Mile Solicitors, our founding story, and our commitment to accessible legal services.",
};

const VALUES = [
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

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title="About Square Mile Solicitors"
        subtitle="Fleet Street, City of London"
      />

      {/* Firm story */}
      <section className="px-6 py-24 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Our story
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-dark sm:text-4xl md:text-[38px]">
            Bridging the gap
          </h2>

          <div className="mt-8 space-y-5 text-[15px] leading-[1.75] text-body/70 sm:text-[16px]">
            <p>
              We provide legal services in areas of personal and business
              immigration, family, employment, and general litigation. Based on
              Fleet Street in the City of London, Square Mile Solicitors was
              founded to bridge the gap between high-street practices and
              expensive City firms.
            </p>
            <p>
              Our clients come to us because they want serious legal expertise
              without the impersonal service or unpredictable costs that larger
              firms often impose. We combine the technical rigour of a City
              practice with the accessibility and personal attention of a
              boutique firm.
            </p>
            <p>
              Every client works directly with a qualified solicitor who takes
              ownership of their case from start to finish. We believe in plain
              language, transparent pricing, and proactive communication — so
              you always know where your matter stands, what it will cost, and
              what happens next.
            </p>
          </div>
        </div>
      </section>

      {/* Principal solicitor */}
      <section className="bg-cream px-6 py-24 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-12 md:grid-cols-5 md:gap-16">
            {/* Photo placeholder */}
            <div className="md:col-span-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={IMAGES.shamim}
                  alt="B M A Shamim — Principal Solicitor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                Principal Solicitor
              </p>
              <h2 className="mt-4 font-heading text-2xl text-dark sm:text-3xl md:text-[34px] md:leading-tight">
                B M A Shamim
              </h2>
              <p className="mt-1 text-[14px] font-medium text-body/50">
                Solicitor, Barrister &amp; Mediator
              </p>

              <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-body/70 sm:text-[16px]">
                <p>
                  Mr Shamim is the founding principal of Square Mile Solicitors,
                  bringing extensive experience across immigration, asylum, and
                  human rights law. A dual-qualified Solicitor and Barrister, he
                  has represented clients at every level of the UK tribunal and
                  court system.
                </p>
                <p>
                  His practice focuses on complex immigration cases including
                  judicial review proceedings, asylum and protection claims, and
                  business immigration matters. He is also an accredited
                  mediator, offering alternative dispute resolution services in
                  family and civil matters.
                </p>
                <p>
                  Mr Shamim is committed to accessible legal representation and
                  founded Square Mile Solicitors with the mission of providing
                  City-quality legal services at fair, transparent prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="px-6 py-24 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Regulation &amp; accreditations
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-dark sm:text-4xl md:text-[38px]">
            Regulated &amp; recognised
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-body/60">
            Square Mile Solicitors is authorised and regulated by the Solicitors
            Regulation Authority. We maintain the highest standards of
            professional conduct and client care.
          </p>

          {/* Badge placeholders */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex h-24 w-40 items-center justify-center rounded-lg border border-lightgrey text-[12px] text-body/25">
              SRA Badge
            </div>
            <div className="flex h-24 w-40 items-center justify-center rounded-lg border border-lightgrey text-[12px] text-body/25">
              Law Society
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[14px] text-body/50">
            <span>SRA ID: {FIRM.sraId}</span>
            <span className="hidden h-4 w-px bg-lightgrey sm:block" />
            <span>Company Reg: {FIRM.companyReg}</span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream px-6 py-24 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Our values
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight text-dark sm:text-4xl md:text-[42px]">
              What we stand for
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-3 md:gap-8">
            {VALUES.map((card) => (
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
    </main>
  );
}
