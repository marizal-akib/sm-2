import { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Blog — Square Mile Solicitors",
  description:
    "Legal updates, practical guidance, and insights on immigration, family, and employment law.",
};

const POSTS = [
  {
    slug: "uk-spouse-visa-process-2026",
    title: "Understanding the UK Spouse Visa Process in 2026",
    excerpt:
      "A step-by-step guide to the UK spouse visa application process, including eligibility requirements, financial thresholds, and common reasons for refusal.",
    category: "Immigration",
    date: "12 March 2026",
    image: IMAGES.blog1,
  },
  {
    slug: "sponsor-licence-applications",
    title: "Sponsor Licence Applications: What Employers Need to Know",
    excerpt:
      "Everything employers need to understand before applying for a sponsor licence — from eligibility and compliance duties to processing times and common pitfalls.",
    category: "Business Immigration",
    date: "28 February 2026",
    image: IMAGES.blog2,
  },
  {
    slug: "employment-tribunal-rights",
    title: "Your Rights During Employment Tribunal Proceedings",
    excerpt:
      "An overview of the employment tribunal process, what to expect at each stage, and how to prepare your case effectively — whether you are an employee or employer.",
    category: "Employment",
    date: "15 February 2026",
    image: IMAGES.blog3,
  },
  {
    slug: "immigration-rules-spring-2026",
    title: "Changes to Immigration Rules: Spring 2026 Update",
    excerpt:
      "A summary of the latest changes to the UK Immigration Rules, including updates to salary thresholds, skilled worker requirements, and family visa provisions.",
    category: "Immigration",
    date: "1 February 2026",
    image: IMAGES.blog4,
  },
] as const;

export default function BlogPage() {
  return (
    <main>
      <PageHero
        title="Legal Updates & Insights"
        subtitle="Practical guidance on immigration, family, and employment law"
      />

      <section className="px-6 py-24 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-lg border border-lightgrey bg-white transition-shadow duration-200 hover:shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Meta */}
                  <div className="flex items-center gap-3">
                    <span className="inline-block rounded-full border border-gold/20 px-3 py-0.5 text-[11px] font-medium uppercase tracking-[0.08em] text-gold">
                      {post.category}
                    </span>
                    <span className="text-[12px] text-body/30">
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 font-heading text-xl leading-snug text-dark sm:text-[22px]">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-body/55">
                    {post.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="mt-5">
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gold transition-colors duration-200 group-hover:text-gold/80">
                      Read more
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
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
