import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about WEEE Centre's mission, vision, values, and work advancing responsible e-waste management in East Africa since 2012. ISO 14001:2015 & ISO 9001:2015 certified.",
  openGraph: {
    title: "About Us | WEEE Centre",
    description: "Learn about WEEE Centre's mission, vision, values, and work advancing responsible e-waste management in East Africa since 2012.",
    url: "https://weeecentre.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
