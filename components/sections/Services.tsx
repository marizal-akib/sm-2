"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

const TABS = [
  {
    id: "immigration",
    label: "Immigration",
    heading: "Clear pathways to the UK",
    description:
      "From visa applications and sponsor licences to asylum, settlement, and judicial review. We handle every stage of the immigration journey with precision.",
    href: "/services#immigration",
    image: IMAGES.immigration,
  },
  {
    id: "family",
    label: "Family",
    heading: "Protecting what matters most",
    description:
      "Divorce, child arrangements, financial settlements, and domestic abuse protection. Sensitive counsel when your family needs it.",
    href: "/services#family",
    image: IMAGES.family,
  },
  {
    id: "employment",
    label: "Employment",
    heading: "Your rights at work",
    description:
      "Unfair dismissal, discrimination, settlement agreements, and tribunal representation. For employees and employers alike.",
    href: "/services#employment",
    image: IMAGES.employment,
  },
  {
    id: "disputes",
    label: "Disputes",
    heading: "Resolution that moves forward",
    description:
      "Pre-action protocols, appeals, administrative reviews, and judicial review. Strategic litigation when negotiation isn't enough.",
    href: "/services#disputes",
    image: IMAGES.disputes,
  },
] as const;

export default function Services() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Our services
          </p>
          <h2 className="mt-4 font-heading text-3xl leading-tight text-dark sm:text-4xl md:text-[42px]">
            You focus on your life.
            <br />
            We handle the legal work.
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-12 border-b border-lightgrey">
          <div className="-mb-px flex gap-0 overflow-x-auto">
            {TABS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(i)}
                className={`relative cursor-pointer whitespace-nowrap px-5 pb-4 text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 sm:px-7 ${
                  active === i
                    ? "text-dark"
                    : "text-body/40 hover:text-body/70"
                }`}
              >
                {t.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gold transition-opacity duration-200 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div
          key={tab.id}
          className="mt-12 grid items-center gap-10 md:mt-16 md:grid-cols-2 md:gap-16 lg:gap-20"
        >
          {/* Left — image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={tab.image}
              alt={`${tab.label} legal services`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right — copy */}
          <div>
            <h3 className="font-heading text-2xl text-dark sm:text-3xl md:text-[34px] md:leading-tight">
              {tab.heading}
            </h3>
            <p className="mt-5 text-[16px] leading-relaxed text-body/70">
              {tab.description}
            </p>
            <Link
              href={tab.href}
              className="group mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-gold transition-colors duration-200 hover:text-gold/80"
            >
              <span className="border-b border-gold/0 transition-all duration-200 group-hover:border-gold">
                Discover more
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
        </div>
      </div>
    </section>
  );
}
