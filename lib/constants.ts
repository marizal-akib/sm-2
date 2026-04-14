export const FIRM = {
  name: "Square Mile Solicitors",
  tagline: "Immigration, Family and Employment Solicitors",
  address: "Office 209, 107-111 Fleet Street, London EC4A 2AB",
  phone: "020 8050 4005",
  email: "info@square-mile.uk",
  sraId: "8006865",
  companyReg: "15169742",
} as const;

export const LINKS = {
  booking: "https://squaremile.eu.cliogrow.com/book",
  clientLogin: "https://eu.clients.clio.com/",
  payment:
    "https://paymentrequest.natwestpayit.com/reusable-links/3e248f01-3d5c-4f0a-8160-1ae2811800da",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Solicitors", href: "/solicitors" },
  { label: "Blog", href: "/blog" },
  { label: "Fees", href: "/fees" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_FIRM_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Solicitors", href: "/solicitors" },
  { label: "Blog", href: "/blog" },
] as const;

export const FOOTER_RESOURCE_LINKS = [
  { label: "Fees", href: "/fees" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms", href: "/terms" },
  { label: "Complaints Process", href: "/complaints" },
] as const;

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/square-mile-uk/",
  instagram: "https://www.instagram.com/squaremilesol/",
  facebook: "https://www.facebook.com/squaremilesolicitors/",
  youtube: "https://www.youtube.com/@SquareMileUK",
} as const;
