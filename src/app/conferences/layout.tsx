import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conferences",
  description: "Join Africa's leading e-waste conference, bringing together sustainability leaders, ITAD professionals, and policymakers to advance the circular electronics economy.",
  openGraph: {
    title: "Conferences & Summits | WEEE Centre",
    description: "Join Africa's leading e-waste conference, bringing together sustainability leaders, ITAD professionals, and policymakers to advance the circular electronics economy.",
    url: "https://weeecentre.com/conferences",
  },
};

export default function ConferencesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
