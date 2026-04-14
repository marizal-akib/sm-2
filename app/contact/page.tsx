"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import { FIRM, LINKS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";

const SERVICE_OPTIONS = [
  "Immigration",
  "Family",
  "Employment",
  "Disputes & Litigation",
  "Other",
] as const;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — wire up to an API route or email service later
    alert("Thank you for your message. We will be in touch shortly.");
  };

  return (
    <main>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help"
      />

      {/* Contact form + details */}
      <section className="px-6 py-24 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl text-dark sm:text-3xl">
              Send us a message
            </h2>
            <p className="mt-3 text-[15px] text-body/60">
              Fill out the form below and we&apos;ll get back to you within one
              working day.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-1.5 block text-[13px] font-medium text-body/70"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-lightgrey bg-white px-4 py-3 text-[15px] text-dark outline-none transition-colors focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-1.5 block text-[13px] font-medium text-body/70"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-md border border-lightgrey bg-white px-4 py-3 text-[15px] text-dark outline-none transition-colors focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/30"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[13px] font-medium text-body/70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-md border border-lightgrey bg-white px-4 py-3 text-[15px] text-dark outline-none transition-colors focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1.5 block text-[13px] font-medium text-body/70"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-md border border-lightgrey bg-white px-4 py-3 text-[15px] text-dark outline-none transition-colors focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/30"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-[13px] font-medium text-body/70"
                >
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-md border border-lightgrey bg-white px-4 py-3 text-[15px] text-dark outline-none transition-colors focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/30"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[13px] font-medium text-body/70"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-md border border-lightgrey bg-white px-4 py-3 text-[15px] text-dark outline-none transition-colors focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/30"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-sm bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-dark transition-all duration-200 hover:bg-[#d4b374]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Details sidebar — 2 cols */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-lightgrey bg-cream p-7 sm:p-8">
              <h3 className="font-heading text-xl text-dark">
                Contact details
              </h3>

              <div className="mt-6 space-y-5 text-[15px] text-body/70">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-body/35">
                    Address
                  </p>
                  <p className="mt-1.5 leading-relaxed">{FIRM.address}</p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-body/35">
                    Phone
                  </p>
                  <p className="mt-1.5">
                    <a
                      href={`tel:${FIRM.phone.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-gold"
                    >
                      {FIRM.phone}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-body/35">
                    Email
                  </p>
                  <p className="mt-1.5">
                    <a
                      href={`mailto:${FIRM.email}`}
                      className="transition-colors hover:text-gold"
                    >
                      {FIRM.email}
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-body/35">
                    Office hours
                  </p>
                  <p className="mt-1.5">Monday – Friday: 9:00am – 6:00pm</p>
                  <p>Saturday – Sunday: Closed</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={LINKS.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-sm bg-gold px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-dark transition-all duration-200 hover:bg-[#d4b374]"
                >
                  Book a Consultation
                </a>
              </div>
            </div>

            {/* Map area — London skyline placeholder */}
            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={IMAGES.fleetStreet}
                alt="London cityscape near Fleet Street"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/60 to-transparent p-4">
                <p className="text-[12px] font-medium text-white/70">
                  Fleet Street, City of London EC4
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
