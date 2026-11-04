import type { Metadata } from "next";

const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'E-Waste Management Services',
  description: 'Certified e-waste collection, recycling, refurbishment, and responsible disposal services',
  provider: {
    '@type': 'Organization',
    name: 'WEEE Centre',
    url: 'https://weeecentre.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Kenya',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'E-Waste Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-Waste Collection',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Secure Data Destruction',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Asset Disposal',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Electronics Recycling',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Refurbishment & Reuse',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Asset Recovery',
        },
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Services",
  description: "Certified e-waste collection, IT asset disposal, data destruction, recycling, refurbishment, and asset recovery services across East Africa. R2-certified and ISO compliant.",
  openGraph: {
    title: "Services | WEEE Centre",
    description: "Certified e-waste collection, IT asset disposal, data destruction, recycling, refurbishment, and asset recovery services across East Africa.",
    url: "https://weeecentre.com/services",
  },
  other: {
    'application/ld+json': JSON.stringify(serviceData),
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
