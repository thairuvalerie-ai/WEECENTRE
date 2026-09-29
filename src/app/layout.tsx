import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WEEE Centre | Responsible E-Waste Management",
  description: "We collect, recycle, refurbish, and responsibly dispose of electronic waste for a safer, more sustainable future.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth"><body>{children}</body></html>
  );
}
