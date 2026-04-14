import { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { LINKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services — Square Mile Solicitors",
  description:
    "Expert legal support across immigration, family, employment, and litigation.",
};

const SERVICES = [
  {
    id: "immigration",
    label: "Immigration",
    heading: "Clear pathways to the UK",
    paragraphs: [
      "Our immigration team advises individuals, families, and businesses on the full spectrum of UK immigration law. Whether you are applying for your first visa, sponsoring overseas workers, or facing removal proceedings, we provide precise, strategic representation at every stage.",
      "We understand that immigration matters are deeply personal and often time-sensitive. Our solicitors combine thorough knowledge of the Immigration Rules with a practical, client-first approach — keeping you informed, prepared, and confident throughout the process.",
      "From straightforward applications to complex appeals before the First-tier and Upper Tribunals, we have the expertise to handle cases of all levels of complexity. We also advise on nationality and citizenship matters, EU Settlement Scheme applications, and points-based system routes.",
    ],
    items: [
      "Spouse & Partner Visas",
      "Skilled Worker Visas",
      "Student Visas",
      "Visit Visas",
      "Indefinite Leave to Remain (ILR)",
      "British Citizenship & Naturalisation",
      "Sponsor Licence Applications",
      "Asylum & Protection Claims",
      "Human Rights Applications",
      "Appeals & Judicial Review",
      "Administrative Reviews",
      "EU Settlement Scheme",
    ],
  },
  {
    id: "family",
    label: "Family",
    heading: "Protecting what matters most",
    paragraphs: [
      "Family law matters require sensitivity, discretion, and clear-headed advice. Our solicitors help clients navigate divorce, separation, child arrangements, and financial disputes with a focus on achieving the best possible outcome while minimising conflict.",
      "We understand the emotional weight of family proceedings. That's why we take time to listen, explain your options in plain language, and build a strategy that reflects your priorities — whether that means negotiating a fair settlement or representing you robustly in court.",
      "Our family team also handles domestic abuse injunctions, cohabitation disputes, and prenuptial agreements. We work with mediators and other professionals where appropriate to resolve matters efficiently and cost-effectively.",
    ],
    items: [
      "Divorce & Dissolution",
      "Child Arrangement Orders",
      "Financial Settlements",
      "Consent Orders",
      "Domestic Abuse & Non-Molestation Orders",
      "Occupation Orders",
      "Prenuptial & Postnuptial Agreements",
      "Cohabitation Disputes",
      "Mediation & Alternative Dispute Resolution",
    ],
  },
  {
    id: "employment",
    label: "Employment",
    heading: "Your rights at work",
    paragraphs: [
      "Employment law governs the relationship between employers and employees — and when that relationship breaks down, the consequences can be significant. We advise both individuals and businesses on their rights and obligations under UK employment law.",
      "For employees, we handle claims of unfair dismissal, discrimination, harassment, whistleblowing, and redundancy disputes. For employers, we provide guidance on contracts, disciplinary procedures, settlement agreements, and tribunal defence.",
      "Our goal is always to achieve the best practical outcome, whether through early negotiation, ACAS conciliation, or full tribunal representation. We provide clear, honest advice about the strength of your position and the options available to you.",
    ],
    items: [
      "Unfair & Wrongful Dismissal",
      "Discrimination Claims",
      "Settlement Agreements",
      "Employment Tribunal Representation",
      "Redundancy Advice",
      "Whistleblowing Claims",
      "Contract Disputes",
      "Disciplinary & Grievance Procedures",
      "TUPE Transfers",
      "Employer Advisory Services",
    ],
  },
  {
    id: "disputes",
    label: "Disputes & Litigation",
    heading: "Resolution that moves forward",
    paragraphs: [
      "When disputes cannot be resolved through negotiation, our litigation team provides strategic, tenacious representation. We handle civil disputes, regulatory challenges, and public law matters with a focus on achieving practical results.",
      "Our approach is to assess each case on its merits, advise honestly on prospects, and pursue the most effective route to resolution — whether that means pre-action negotiation, mediation, or proceedings before the courts and tribunals.",
      "We have particular expertise in immigration-related judicial review proceedings, challenging unlawful decisions by the Home Office and other public bodies. We also assist with general civil litigation, contractual disputes, and debt recovery.",
    ],
    items: [
      "Judicial Review",
      "Pre-Action Protocols",
      "Administrative Reviews & Appeals",
      "Civil Litigation",
      "Contractual Disputes",
      "Debt Recovery",
      "Regulatory Challenges",
      "Mediation & Negotiation",
    ],
  },
] as const;

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Our Services"
        subtitle="Expert legal support across immigration, family, employment, and litigation"
      />

      {SERVICES.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`px-6 py-24 sm:py-28 lg:px-10 ${
            i % 2 === 0 ? "bg-white" : "bg-cream"
          }`}
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              {service.label}
            </p>
            <h2 className="mt-4 font-heading text-3xl leading-tight text-dark sm:text-4xl md:text-[38px]">
              {service.heading}
            </h2>

            <div className="mt-8 space-y-4">
              {service.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="text-[15px] leading-[1.75] text-body/70 sm:text-[16px]"
                >
                  {p}
                </p>
              ))}
            </div>

            <ul className="mt-8 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] text-body/70"
                >
                  <span className="mt-[7px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold/50" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href={LINKS.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-dark transition-all duration-200 hover:bg-[#d4b374]"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
