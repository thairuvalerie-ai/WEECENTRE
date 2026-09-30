import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | WEEE Centre",
  description: "Learn about WEEE Centre's mission, vision, values, and work advancing responsible e-waste management in East Africa since 2012.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
