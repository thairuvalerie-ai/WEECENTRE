import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | WEEE Centre",
  description: "Explore WEEE Centre projects advancing e-waste infrastructure, youth skills, green jobs, and circular systems across East Africa.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
