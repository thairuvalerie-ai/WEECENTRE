import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore WEEE Centre projects advancing e-waste infrastructure, youth skills, green jobs, and circular systems across East Africa.",
  openGraph: {
    title: "Projects | WEEE Centre",
    description: "Explore WEEE Centre projects advancing e-waste infrastructure, youth skills, green jobs, and circular systems across East Africa.",
    url: "https://weeecentre.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
