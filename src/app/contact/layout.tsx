import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Plan an e-waste pickup or contact WEEE Centre about collection, recycling, refurbishment, or asset recovery in Kenya. Call +254 701 819 559.",
  openGraph: {
    title: "Contact | WEEE Centre",
    description: "Plan an e-waste pickup or contact WEEE Centre about collection, recycling, refurbishment, or asset recovery in Kenya.",
    url: "https://weeecentre.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
