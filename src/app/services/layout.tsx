import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | WEEE Centre",
  description: "Certified e-waste collection, IT asset disposal, data destruction, recycling, refurbishment, and asset recovery services across East Africa.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
