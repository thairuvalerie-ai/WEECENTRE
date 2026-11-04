import type { Metadata } from "next";
import "./globals.css";
import LiveChat from "@/components/live-chat";
import PageViewTracker from "@/components/page-view-tracker";

const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WEEE Centre',
  alternateName: 'WEEE Centre - Managing E-waste For A Safe Environment',
  url: 'https://weeecentre.com',
  logo: 'https://weeecentre.com/assets/WeeCenter-zGgClq1S.png',
  description: 'We collect, recycle, refurbish, and responsibly dispose of electronic waste for a safer, more sustainable future. Specializing in renewable energy semiconductor manufacturing.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mihango, Embakasi, Off the Eastern By-pass',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi',
    addressCountry: 'KE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254701819559',
    contactType: 'customer service',
    email: 'info@weeecentre.com',
  },
  sameAs: [
    'https://www.linkedin.com/company/weeecentre',
    'https://www.instagram.com/weeecentre',
    // Add other social media links when available
    // 'https://facebook.com/weeecentre',
    // 'https://twitter.com/weeecentre',
  ],
  employeeCount: {
    '@type': 'QuantitativeValue',
    minValue: 51,
    maxValue: 200,
  },
};

export const metadata: Metadata = {
  title: {
    default: "WEEE Centre | Responsible E-Waste Management",
    template: "%s | WEEE Centre",
  },
  description: "We collect, recycle, refurbish, and responsibly dispose of electronic waste for businesses, institutions, and households in Kenya. ISO 14001:2015 & ISO 9001:2015 certified.",
  keywords: [
    "e-waste recycling",
    "electronic waste management",
    "IT asset disposal",
    "data destruction",
    "electronics recycling Kenya",
    "WEEE Centre",
    "sustainable e-waste",
    "circular economy",
    "responsible e-waste disposal",
    "electronics refurbishment",
  ],
  authors: [{ name: "WEEE Centre" }],
  creator: "WEEE Centre",
  publisher: "WEEE Centre",
  metadataBase: new URL("https://weeecentre.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://weeecentre.com",
    title: "WEEE Centre | Responsible E-Waste Management",
    description: "We collect, recycle, refurbish, and responsibly dispose of electronic waste for a safer, more sustainable future.",
    siteName: "WEEE Centre",
    images: [
      {
        url: "https://weeecentre.com/assets/WeeCenter-zGgClq1S.png",
        width: 158,
        height: 46,
        alt: "WEEE Centre Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WEEE Centre | Responsible E-Waste Management",
    description: "We collect, recycle, refurbish, and responsibly dispose of electronic waste for a safer, more sustainable future.",
    images: ["https://weeecentre.com/assets/WeeCenter-zGgClq1S.png"],
    creator: "@weeecentre", // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    }),
  },
  other: {
    'application/ld+json': JSON.stringify(organizationData),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z6DD8WRFT8"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z6DD8WRFT8');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <LiveChat />
        <PageViewTracker />
      </body>
    </html>
  );
}
