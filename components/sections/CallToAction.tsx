import { FIRM, LINKS } from "@/lib/constants";

export default function CallToAction() {
  return (
    <section className="bg-dark px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl leading-tight text-white sm:text-4xl md:text-[48px] md:leading-[1.15]">
          Ready to discuss
          <br />
          your case?
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-white/45 sm:text-[17px]">
          Book a free initial consultation. We&apos;ll assess your situation and
          give you clear, honest advice — no obligation.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <a
            href={LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-dark transition-all duration-200 hover:bg-[#d4b374]"
          >
            Book a Consultation
          </a>
          <a
            href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center rounded-sm border border-white/20 px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-dark"
          >
            Call {FIRM.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
