"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FIRM, NAV_LINKS, LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded-sm">
            <span className="font-heading text-xl tracking-tight text-gold sm:text-2xl">
              Square Mile
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[13px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                    isActive(link.href)
                      ? "text-gold"
                      : scrolled
                      ? "text-body hover:text-gold"
                      : "text-white/90 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm border border-gold px-5 py-2 text-[13px] font-medium uppercase tracking-[0.08em] text-gold transition-all duration-200 hover:bg-gold hover:text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              Book a Consult
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="relative z-[60] flex h-10 w-10 items-center justify-center lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="flex w-6 flex-col gap-[5px]">
              <span
                className={`block h-[1.5px] w-full transition-all duration-300 ${
                  mobileOpen
                    ? "translate-y-[6.5px] rotate-45 bg-white"
                    : scrolled
                    ? "bg-dark"
                    : "bg-white"
                }`}
              />
              <span
                className={`block h-[1.5px] w-full transition-all duration-300 ${
                  mobileOpen
                    ? "opacity-0"
                    : scrolled
                    ? "bg-dark"
                    : "bg-white"
                }`}
              />
              <span
                className={`block h-[1.5px] w-full transition-all duration-300 ${
                  mobileOpen
                    ? "-translate-y-[6.5px] -rotate-45 bg-white"
                    : scrolled
                    ? "bg-dark"
                    : "bg-white"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-dark/95 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile slide-in panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-dark transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-1 flex-col justify-center px-10">
          <ul className="space-y-6">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ${
                  mobileOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${150 + i * 50}ms` : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  className={`block font-heading text-3xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-sm ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-white/90 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`mt-10 transition-all duration-500 ${
              mobileOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{
              transitionDelay: mobileOpen
                ? `${150 + NAV_LINKS.length * 50}ms`
                : "0ms",
            }}
          >
            <a
              href={LINKS.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm border border-gold px-6 py-3 text-[13px] font-medium uppercase tracking-[0.08em] text-gold transition-all duration-200 hover:bg-gold hover:text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Book a Consult
            </a>
          </div>

          <div
            className={`mt-12 border-t border-white/10 pt-6 transition-all duration-500 ${
              mobileOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
            style={{
              transitionDelay: mobileOpen
                ? `${150 + (NAV_LINKS.length + 1) * 50}ms`
                : "0ms",
            }}
          >
            <p className="text-sm text-white/40">{FIRM.phone}</p>
            <p className="mt-1 text-sm text-white/40">{FIRM.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
