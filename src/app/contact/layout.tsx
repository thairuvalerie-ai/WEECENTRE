import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | WEEE Centre",
  description: "Plan an e-waste pickup or contact WEEE Centre about collection, recycling, refurbishment, or asset recovery in Kenya.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
