import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteHeader from "../site-header";
import EnquiryModal from "../../components/enquiry-modal";

export const metadata: Metadata = {
  title: "Services | WEEE Centre",
  description: "Certified e-waste collection, IT asset disposal, data destruction, recycling, refurbishment, and asset recovery services across East Africa.",
};

const services = [
  {
    number: "01",
    title: "E-Waste Collection & Logistics",
    summary: "Scheduled and on-demand pickup with full chain of custody documentation. We handle volumes from a single laptop to multi-truck decommissions.",
    points: ["Collection of end-of-life electrical and electronic equipment", "Corporate and institutional e-waste take-back programs", "Flexible pickup scheduling for single-site and multi-site operations"],
    image: "hero-2-pBQlfe__.jpg",
    imageAlt: "WEEE Centre team sorting collected electronic waste",
  },
  {
    number: "02",
    title: "IT Asset Disposal (ITAD)",
    summary: "Complete lifecycle management of retired IT equipment, with clear reporting and value recovery at every step.",
    points: ["Serial-level reporting", "Value recovery share", "Compliance audit trail", "Multi-site coordination"],
    image: "hero-recycling-CQta8Vpp.jpg",
    imageAlt: "Electronics moving through a responsible recycling process",
  },
  {
    number: "03",
    title: "Data Destruction & Asset Disposal",
    summary: "Protect sensitive information with on-site or in-facility shredding, degaussing, and certified wiping aligned to NIST 800-88.",
    points: ["Secure data wiping and destruction services", "Certified destruction of hard drives and storage devices", "IT asset disposition with documented handling"],
    image: "hero-3-D2n5pWdH.jpg",
    imageAlt: "Storage devices prepared for secure data destruction",
  },
  {
    number: "04",
    title: "E-Waste Recycling",
    summary: "R2-certified downstream processing recovers ferrous and non-ferrous metals, precious materials, and plastics responsibly.",
    points: ["Environmentally sound dismantling and recycling", "Recovery of valuable materials and components", "Safe handling of hazardous fractions"],
    image: "hero-recycling-CQta8Vpp.jpg",
    imageAlt: "Electronics recycling facility and material recovery",
  },
  {
    number: "05",
    title: "Refurbishment & Reuse",
    summary: "Our technicians restore and warranty devices for resale or donation to schools and NGOs, extending useful life and access.",
    points: ["Cosmetic and functional restoration", "90-day warranty", "Donation programs", "Bulk B2B refurbishment"],
    image: "hero-5-CuD3nSAk.jpg",
    imageAlt: "Technician refurbishing a laptop for reuse",
  },
  {
    number: "06",
    title: "Asset Recovery",
    summary: "Transparent valuation and remarketing help maximize the residual value of your retired technology assets.",
    points: ["Market-based pricing", "Revenue share", "Global remarketing", "Real-time reporting"],
    image: "hero-4-DAiewKAf.jpg",
    imageAlt: "Technician inspecting equipment for recovery and reuse",
  },
];

function quoteHref(title: string) {
  return `Quote request: ${title}`;
}

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'pickup' | 'quote' | 'project' | 'conference' | 'event' | 'service' | 'subscribe'>('quote');
  const [modalTitle, setModalTitle] = useState('');
  const [predefinedSubject, setPredefinedSubject] = useState('');

  function openModal(type: typeof modalType, title?: string, subject?: string) {
    setModalType(type);
    setModalTitle(title || '');
    setPredefinedSubject(subject || '');
    setModalOpen(true);
  }
  return (
    <>
      <SiteHeader />
      <main>
        <section className="services-hero" aria-labelledby="services-page-title">
          <div className="services-hero-image" />
          <div className="container services-hero-content">
            <p className="eyebrow eyebrow-light">Services</p>
            <h1 id="services-page-title">Certified e-waste services,<br /><span>end to end.</span></h1>
            <p>From a single device to a full data center decommission, secure, compliant, sustainable.</p>
            <a className="button button-lime" href="#service-list">Explore services <span aria-hidden="true">&darr;</span></a>
          </div>
          <span className="hero-caption">COLLECT &nbsp; / &nbsp; RECOVER &nbsp; / &nbsp; REUSE</span>
        </section>

        <section className="services-overview" aria-label="Service standards">
          <div className="container services-overview-inner"><span>One accountable partner</span><span>Documented chain of custody</span><span>Certified downstream processing</span><span>Built for circularity</span></div>
        </section>

        <section className="service-details" id="service-list" aria-label="Our e-waste services">
          <div className="container">
            {services.map((service) => (
              <article className="service-detail" id={`service-${service.number}`} key={service.number}>
                <div className="service-detail-image"><Image src={`https://weeecentre.com/assets/${service.image}`} alt={service.imageAlt} width={620} height={430} sizes="(max-width: 760px) 100vw, 48vw" unoptimized /></div>
                <div className="service-detail-content">
                  <p className="service-detail-number">SERVICE &nbsp; / &nbsp; {service.number}</p>
                  <h2>{service.title}</h2>
                  <p className="service-detail-summary">{service.summary}</p>
                  <ul>{service.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  <button className="button button-dark" onClick={() => openModal('quote', 'Get a Quote', quoteHref(service.title))}>Get a quote <span aria-hidden="true">&rarr;</span></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="services-contact" aria-labelledby="services-contact-title">
          <div className="container services-contact-inner"><div><p className="eyebrow">Have a specific requirement?</p><h2 id="services-contact-title">Let&apos;s plan the right recovery.</h2><p>Tell us what you need to collect, protect, or recover. Our team can help scope a solution for your organization.</p></div><div className="services-contact-actions"><button className="button button-lime" onClick={() => openModal('service')}>Talk to our team <span aria-hidden="true">&rarr;</span></button><a className="services-phone" href="tel:+254701819559">+254 701 819 559</a></div></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="services-footer-grid">
            <div className="footer-about"><Link className="footer-brand" href="/"><Image src="https://weeecentre.com/assets/WeeCenter-zGgClq1S.png" alt="WEEE Centre" width={158} height={46} unoptimized /></Link><p>We collect, recycle, refurbish, and responsibly dispose of electronic waste, building a circular economy for a sustainable future.</p><button className="subscribe-link" onClick={() => openModal('subscribe')}>Subscribe to updates <span aria-hidden="true">&rarr;</span></button></div>
            <div className="footer-col"><h3>Quick links</h3><Link href="/about">About</Link><Link href="/#impact">Sustainability</Link><Link href="/#impact">Blog</Link><Link href="/projects">Projects</Link><Link href="/events">Events</Link><Link href="/conferences">Conferences</Link><Link href="/#contact">Contact</Link></div>
            <div className="footer-col"><h3>Services</h3>{services.map((service) => <Link href={`/services#service-${service.number}`} key={service.number}>{service.title}</Link>)}</div>
            <div className="footer-col"><h3>Contact</h3><a href="tel:+254701819559">+254 701 819 559</a><a href="mailto:info@weeecentre.com">info@weeecentre.com</a><address>Mihango, Embakasi<br />Off the Eastern By-pass<br />Kenya</address></div>
          </div>
          <div className="services-credit"><span>Built &amp; developed by <a href="tel:+254752225283">Valerie Ngatha -0752225283</a></span></div>
          <div className="footer-bottom"><span>&copy; 2026 WEEE CENTRE. Managing e-Waste for a Safe Environment.</span><span className="certifications">ISO 14001:2015 &nbsp;·&nbsp; ISO 9001:2015</span></div>
        </div>
      </footer>
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} title={modalTitle} predefinedSubject={predefinedSubject} />
    </>
  );
}