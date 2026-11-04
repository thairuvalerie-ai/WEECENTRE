import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how WEEE Centre protects your privacy, collects, uses, and safeguards your personal information in accordance with data protection laws.",
  openGraph: {
    title: "Privacy Policy | WEEE Centre",
    description: "Learn how WEEE Centre protects your privacy and handles your personal information.",
    url: "https://weeecentre.com/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
