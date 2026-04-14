import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Solicitors — Square Mile Solicitors",
  description:
    "Meet the experienced legal professionals at Square Mile Solicitors.",
};

const TEAM = [
  {
    name: "B M A Shamim",
    title: "Solicitor, Barrister & Mediator",
    role: "Principal",
    specialisation: "Immigration, Asylum, Human Rights Law",
    href: "/solicitors/bma-shamim",
    featured: true,
    placeholder: false,
    image: IMAGES.shamim,
  },
  {
    name: "Associate Solicitor",
    title: "Solicitor",
    role: "Associate",
    specialisation: "Immigration & Family Law",
    href: null,
    featured: false,
    placeholder: true,
    image: null,
  },
  {
    name: "Associate Solicitor",
    title: "Solicitor",
    role: "Associate",
    specialisation: "Employment & Disputes",
    href: null,
    featured: false,
    placeholder: true,
    image: null,
  },
  {
    name: "Associate Solicitor",
    title: "Solicitor",
    role: "Associate",
    specialisation: "General Litigation",
    href: null,
    featured: false,
    placeholder: true,
    image: null,
  },
] as const;

export default function SolicitorsPage() {
  return (
    <main>
      <PageHero
        title="Our Solicitors"
        subtitle="Experienced legal professionals dedicated to your case"
      />

      <section className="px-6 py-24 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => {
              const inner = (
                <>
                  {/* Photo */}
                  <div
                    className={`relative aspect-[3/4] overflow-hidden rounded-lg ${
                      member.placeholder ? "bg-lightgrey/60" : ""
                    }`}
                  >
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-body/10">
                        <div className="flex flex-col items-center gap-2">
                          <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            className="h-12 w-12"
                          >
                            <circle cx="24" cy="18" r="8" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M8 44c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                          <span className="text-[10px] font-medium uppercase tracking-[0.12em]">
                            Coming Soon
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="mt-5">
                    {member.featured && (
                      <span className="mb-2 inline-block rounded-full border border-gold/20 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-gold">
                        {member.role}
                      </span>
                    )}
                    <h2
                      className={`font-heading text-xl leading-snug ${
                        member.placeholder ? "text-body/25" : "text-dark"
                      }`}
                    >
                      {member.name}
                    </h2>
                    <p
                      className={`mt-1 text-[13px] ${
                        member.placeholder ? "text-body/15" : "text-body/50"
                      }`}
                    >
                      {member.title}
                    </p>
                    <p
                      className={`mt-2 text-[14px] leading-relaxed ${
                        member.placeholder ? "text-body/15" : "text-body/55"
                      }`}
                    >
                      {member.specialisation}
                    </p>
                    {member.href && (
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-gold transition-colors duration-200 group-hover:text-gold/80">
                        View Profile
                        <svg
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M3.5 8h9M8.5 4l4 4-4 4" />
                        </svg>
                      </span>
                    )}
                  </div>
                </>
              );

              if (member.href) {
                return (
                  <Link
                    key={i}
                    href={member.href}
                    className="group rounded-lg border border-lightgrey bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    {inner}
                  </Link>
                );
              }

              return (
                <div
                  key={i}
                  className="rounded-lg border border-lightgrey/60 bg-white/60 p-5"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
