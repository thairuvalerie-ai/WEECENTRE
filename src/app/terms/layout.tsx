import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read WEEE Centre's terms and conditions for e-waste management services, including service terms, privacy, data protection, and user responsibilities.",
  openGraph: {
    title: "Terms and Conditions | WEEE Centre",
    description: "Read WEEE Centre's terms and conditions for e-waste management services.",
    url: "https://weeecentre.com/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
