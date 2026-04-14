import Link from "next/link";

const FEE_ITEMS = [
  { service: "Spouse Visa", range: "£1,000 – £3,000" },
  { service: "Skilled Worker Visa", range: "£900 – £2,500" },
  { service: "ILR (Settlement)", range: "£1,000 – £5,000" },
  { service: "Sponsor Licence", range: "£1,500 – £5,000" },
  { service: "Asylum", range: "£2,500 – £10,000" },
  { service: "Appeals (Tribunal)", range: "£3,000 – £15,000" },
] as const;

export default function Fees() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Fee estimates
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-dark sm:text-4xl md:text-[42px]">
            Transparent fee estimates
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-body/60">
            We believe in upfront pricing. Here are our starting ranges for
            common immigration matters.
          </p>
        </div>

        {/* Fee grid */}
        <div className="mt-12 grid gap-3 sm:mt-14 sm:grid-cols-2 md:gap-4">
          {FEE_ITEMS.map((item) => (
            <div
              key={item.service}
              className="flex items-center justify-between rounded-lg border border-lightgrey bg-white px-6 py-5"
            >
              <span className="text-[15px] font-medium text-dark">
                {item.service}
              </span>
              <span className="ml-4 whitespace-nowrap font-heading text-[17px] text-gold">
                {item.range}
              </span>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-10 text-center">
          <Link
            href="/fees"
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-gold transition-colors duration-200 hover:text-gold/80"
          >
            <span className="border-b border-gold/0 transition-all duration-200 group-hover:border-gold">
              View full fee schedule
            </span>
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3.5 8h9M8.5 4l4 4-4 4" />
            </svg>
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-[12px] leading-relaxed text-body/35">
          Fees are estimates and may vary based on case complexity. A detailed
          quote is provided after initial consultation.
        </p>
      </div>
    </section>
  );
}
