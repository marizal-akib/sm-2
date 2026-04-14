import { LINKS } from "@/lib/constants";

const STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Book a free consultation. We'll listen, assess your situation, and give you honest advice on your options and costs.",
  },
  {
    number: "02",
    title: "Tailored Strategy",
    description:
      "We build a legal strategy specific to your case, with clear milestones, timelines, and transparent fee structure.",
  },
  {
    number: "03",
    title: "Dedicated Representation",
    description:
      "Your solicitor handles everything — applications, correspondence, court preparation — keeping you informed at every step.",
  },
] as const;

export default function Process() {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            How it works
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-dark sm:text-4xl md:text-[42px]">
            From first call to case resolution
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-8 sm:mt-16 md:grid-cols-3 md:gap-6 lg:gap-12">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative text-center md:text-left">
              {/* Connector line — desktop only, between cards */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute right-0 top-8 hidden h-px w-6 bg-lightgrey md:block lg:w-12"
                  style={{ transform: "translateX(calc(50% + 12px))" }}
                />
              )}

              {/* Number */}
              <span className="font-heading text-[56px] leading-none text-gold/20 md:text-[64px]">
                {step.number}
              </span>

              <h3 className="mt-3 font-heading text-xl text-dark sm:text-[22px]">
                {step.title}
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-body/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center sm:mt-16">
          <a
            href={LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-dark transition-all duration-200 hover:bg-[#d4b374]"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
