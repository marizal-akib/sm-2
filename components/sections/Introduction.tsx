import Link from "next/link";

export default function Introduction() {
  return (
    <section className="bg-cream px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-heading text-[22px] leading-[1.65] text-body sm:text-[26px] md:text-[30px] md:leading-[1.6]">
          Square Mile Solicitors sits between high-street generalists and
          expensive City firms. We provide practical, personal legal counsel for
          individuals and businesses navigating immigration, family, employment,
          and litigation matters.
        </p>

        <Link
          href="/about"
          className="group mt-10 inline-flex items-center gap-2 text-[14px] font-medium text-gold transition-colors duration-200 hover:text-gold/80"
        >
          <span className="border-b border-gold/0 transition-all duration-200 group-hover:border-gold">
            About our practice
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
    </section>
  );
}
