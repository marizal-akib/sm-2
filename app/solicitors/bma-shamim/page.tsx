import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { LINKS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "B M A Shamim — Square Mile Solicitors",
  description:
    "Solicitor, Barrister & Mediator specialising in immigration, asylum, and human rights law.",
};

const EXPERTISE = [
  {
    label: "Immigration",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6">
        <rect x="5" y="8" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "Asylum & Human Rights",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6">
        <path d="M16 4v24M8 8l8-4 8 4v12a12 12 0 01-8 8 12 12 0 01-8-8V8z" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "Family Law",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6">
        <path d="M16 26s-10-5.9-10-12.7a5.7 5.7 0 0110-3.7 5.7 5.7 0 0110 3.7C26 20.1 16 26 16 26z" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "Employment Law",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6">
        <rect x="7" y="12" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M12 12V9a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    label: "General Litigation",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6">
        <path d="M7 26l9-18 9 18H7z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M16 18v4M16 24v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

const QUALIFICATIONS = [
  "Solicitor of the Senior Courts of England and Wales",
  "Called to the Bar of England and Wales",
  "Accredited Mediator",
  "Member of the Law Society of England and Wales",
  "Member of the Immigration Law Practitioners' Association (ILPA)",
] as const;

const LANGUAGES = ["English", "Bengali", "Hindi", "Urdu"] as const;

export default function ShamimProfilePage() {
  return (
    <main>
      <PageHero
        title="B M A Shamim"
        subtitle="Solicitor, Barrister & Mediator"
      />

      {/* Profile section */}
      <section className="px-6 py-24 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-12 md:grid-cols-5 md:gap-16 lg:gap-20">
            {/* Photo — 2 cols */}
            <div className="md:col-span-2">
              <div className="sticky top-28 relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={IMAGES.shamim}
                  alt="B M A Shamim — Principal Solicitor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>

            {/* Details — 3 cols */}
            <div className="md:col-span-3">
              <span className="inline-block rounded-full border border-gold/20 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-gold">
                Principal
              </span>
              <h2 className="mt-3 font-heading text-3xl text-dark sm:text-4xl md:text-[38px] md:leading-tight">
                B M A Shamim
              </h2>
              <p className="mt-1 text-[15px] font-medium text-body/50">
                Solicitor, Barrister &amp; Mediator
              </p>

              {/* Bio */}
              <div className="mt-8 space-y-4 text-[15px] leading-[1.75] text-body/70 sm:text-[16px]">
                <p>
                  Mr. Shamim provides expert legal services across various
                  practice areas, with particular specialisation in immigration,
                  asylum, and human rights law. His extensive experience enables
                  him to handle complex legal matters with precision and
                  dedication.
                </p>
                <p>
                  As the founding principal of Square Mile Solicitors, Mr. Shamim
                  established the firm with a clear mission: to deliver
                  City-quality legal representation at fair, transparent prices.
                  He brings a dual qualification as both Solicitor and Barrister,
                  giving him unique insight into both advisory and advocacy work.
                </p>
                <p>
                  He has represented clients at every level of the UK tribunal
                  and court system, from First-tier Tribunal hearings to judicial
                  review proceedings in the High Court. His practice encompasses
                  complex immigration cases, asylum and protection claims, and
                  business immigration matters.
                </p>
              </div>

              {/* Areas of expertise */}
              <div className="mt-12">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Areas of expertise
                </h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {EXPERTISE.map((area) => (
                    <div
                      key={area.label}
                      className="flex items-center gap-3 rounded-lg border border-lightgrey px-4 py-3"
                    >
                      <span className="text-gold">{area.icon}</span>
                      <span className="text-[14px] font-medium text-dark">
                        {area.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualifications */}
              <div className="mt-12">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Qualifications &amp; memberships
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {QUALIFICATIONS.map((q) => (
                    <li
                      key={q}
                      className="flex items-start gap-2.5 text-[15px] text-body/70"
                    >
                      <span className="mt-[7px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/50" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              <div className="mt-12">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Languages
                </h3>
                <p className="mt-4 text-[15px] text-body/70">
                  {LANGUAGES.join(", ")}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 rounded-lg border border-lightgrey bg-cream p-6 sm:p-8">
                <p className="font-heading text-lg text-dark">
                  Book a consultation with Mr. Shamim
                </p>
                <p className="mt-2 text-[14px] text-body/50">
                  Discuss your case in a confidential initial consultation.
                </p>
                <a
                  href={LINKS.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-dark transition-all duration-200 hover:bg-[#d4b374] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-16 border-t border-lightgrey pt-8">
            <Link
              href="/solicitors"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-gold transition-colors duration-200 hover:text-gold/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            >
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12.5 8h-9M7.5 4l-4 4 4 4" />
              </svg>
              <span className="border-b border-gold/0 transition-all duration-200 group-hover:border-gold">
                Back to all solicitors
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
