import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Square Mile Solicitors",
  description:
    "Get in touch with Square Mile Solicitors. Book a consultation or send us a message.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
