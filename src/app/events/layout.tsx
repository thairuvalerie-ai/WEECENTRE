import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | WEEE Centre",
  description: "Join WEEE Centre community recycling drives, environmental workshops, school events, and e-waste collection programs in Kenya.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
