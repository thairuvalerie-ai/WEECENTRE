interface StructuredDataProps {
  data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      suppressHydrationWarning
    />
  );
}

// Organization structured data
export function OrganizationStructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WEEE Centre',
    url: 'https://weeecentre.com',
    logo: 'https://weeecentre.com/assets/WeeCenter-zGgClq1S.png',
    description: 'We collect, recycle, refurbish, and responsibly dispose of electronic waste for a safer, more sustainable future.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mihango, Embakasi, Off the Eastern By-pass',
      addressLocality: 'Nairobi',
      addressCountry: 'KE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254701819559',
      contactType: 'customer service',
      email: 'info@weeecentre.com',
    },
    sameAs: [
      // Add social media links when available
      // 'https://facebook.com/weeecentre',
      // 'https://twitter.com/weeecentre',
      // 'https://linkedin.com/company/weeecentre',
    ],
  };

  return <StructuredData data={organizationData} />;
}

// LocalBusiness structured data (more specific for local SEO)
export function LocalBusinessStructuredData() {
  const businessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'WEEE Centre',
    image: 'https://weeecentre.com/assets/WeeCenter-zGgClq1S.png',
    url: 'https://weeecentre.com',
    telephone: '+254701819559',
    email: 'info@weeecentre.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mihango, Embakasi, Off the Eastern By-pass',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi',
      postalCode: '',
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      // Add actual coordinates when available
      // latitude: '-1.2921',
      // longitude: '36.8219',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '08:00',
      closes: '17:00',
    },
    priceRange: '$$',
  };

  return <StructuredData data={businessData} />;
}

// Service structured data for services page
export function ServiceStructuredData() {
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

  return <StructuredData data={serviceData} />;
}
