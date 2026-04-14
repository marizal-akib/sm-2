import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Fees — Square Mile Solicitors",
  description:
    "Transparent pricing for immigration, family, and employment legal services.",
};

const IMMIGRATION_FEES = [
  { service: "Spouse/Partner Visa", range: "£1,000 – £3,000" },
  { service: "Fiancé(e) Visa", range: "£1,000 – £3,000" },
  { service: "Skilled Worker Visa", range: "£900 – £2,500" },
  { service: "Student Visa", range: "£500 – £1,500" },
  { service: "Graduate Visa", range: "£500 – £1,000" },
  { service: "Visit Visa", range: "£300 – £800" },
  { service: "Indefinite Leave to Remain (ILR)", range: "£1,000 – £5,000" },
  { service: "British Citizenship / Naturalisation", range: "£800 – £2,500" },
  { service: "Sponsor Licence Application", range: "£1,500 – £5,000" },
  { service: "Sponsor Licence Compliance & Renewal", range: "£500 – £2,000" },
  { service: "Asylum & Protection Claims", range: "£2,500 – £10,000" },
  { service: "Human Rights Applications", range: "£1,500 – £5,000" },
  { service: "Appeals (First-tier Tribunal)", range: "£3,000 – £15,000" },
  { service: "Appeals (Upper Tribunal)", range: "£3,000 – £15,000" },
  { service: "Judicial Review (Permission Stage)", range: "£2,500 – £7,500" },
  { service: "Judicial Review (Full Hearing)", range: "£5,000 – £15,000" },
  { service: "Administrative Review", range: "£500 – £1,500" },
  { service: "EU Settlement Scheme", range: "£500 – £2,000" },
  { service: "EEA Family Permit", range: "£800 – £2,500" },
  { service: "Long Residence (10-Year Route)", range: "£1,000 – £3,500" },
] as const;

const HOURLY_RATES = [
  { role: "Principal Solicitor", rate: "£250 – £350 per hour" },
  { role: "Senior Solicitor", rate: "£200 – £300 per hour" },
  { role: "Solicitor", rate: "£150 – £250 per hour" },
  { role: "Paralegal / Caseworker", rate: "£80 – £150 per hour" },
] as const;

function FeeTable({
  items,
}: {
  items: ReadonlyArray<{ service?: string; role?: string; range?: string; rate?: string }>;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-lightgrey">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-center justify-between px-6 py-4 ${
            i % 2 === 0 ? "bg-white" : "bg-cream/60"
          } ${i < items.length - 1 ? "border-b border-lightgrey/60" : ""}`}
        >
          <span className="text-[15px] text-body/80">
            {item.service || item.role}
          </span>
          <span className="ml-4 whitespace-nowrap font-heading text-[16px] text-gold">
            {item.range || item.rate}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function FeesPage() {
  return (
    <main>
      <PageHero
        title="Our Fees"
        subtitle="Transparent pricing for every matter"
      />

      {/* Immigration fees */}
      <section className="px-6 py-24 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Immigration
          </p>
          <h2 className="mt-4 font-heading text-2xl leading-tight text-dark sm:text-3xl md:text-[34px]">
            Immigration fee estimates
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-body/60 sm:text-[16px]">
            The fees below are estimates for our professional charges and do not
            include Home Office application fees, Immigration Health Surcharge,
            or disbursements.
          </p>

          <div className="mt-10">
            <FeeTable items={IMMIGRATION_FEES} />
          </div>
        </div>
      </section>

      {/* Hourly rates */}
      <section className="bg-cream px-6 py-24 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Hourly rates
          </p>
          <h2 className="mt-4 font-heading text-2xl leading-tight text-dark sm:text-3xl md:text-[34px]">
            Hourly rate structure
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-body/60 sm:text-[16px]">
            For matters not covered by a fixed fee, we charge on an hourly
            basis. The applicable rate depends on the seniority of the fee
            earner handling your case.
          </p>

          <div className="mt-10">
            <FeeTable items={HOURLY_RATES} />
          </div>
        </div>
      </section>

      {/* Notes & CTA */}
      <section className="px-6 py-24 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-3 text-[13px] leading-relaxed text-body/40">
            <p>
              All fees are estimates and may vary based on case complexity. A
              detailed, written fee quote is provided after an initial
              consultation.
            </p>
            <p>
              VAT is charged at the prevailing rate (currently 20%) on all legal
              fees where applicable.
            </p>
            <p>
              Disbursements (e.g. Home Office fees, court fees, expert reports)
              are payable in addition to our professional charges.
            </p>
          </div>

          <div className="mt-10">
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-dark transition-all duration-200 hover:bg-[#d4b374]"
            >
              Get a Detailed Quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
