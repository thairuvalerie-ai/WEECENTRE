import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "./contact-form";
import SiteHeader from "../site-header";
import EnquiryModal from "../../components/enquiry-modal";

export const metadata: Metadata = {
  title: "Contact | WEEE Centre",
  description: "Plan an e-waste pickup or contact WEEE Centre about collection, recycling, refurbishment, or asset recovery in Kenya.",
};

export default function ContactPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'pickup' | 'quote' | 'project' | 'conference' | 'event' | 'service' | 'subscribe'>('subscribe');
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
        <section className="contact-page-hero" aria-labelledby="contact-page-title">
          <div className="contact-page-hero-image" />
          <div className="container contact-page-hero-content">
            <p className="eyebrow eyebrow-light">Contact WEEE Centre</p>
            <h1 id="contact-page-title">Let&apos;s plan your<br /><span>next pickup.</span></h1>
            <p>Tell us what you need to collect, recover, or responsibly recycle. We respond within one business day.</p>
          </div>
          <span className="hero-caption">HERE TO HELP &nbsp; / &nbsp; NAIROBI, KENYA</span>
        </section>

        <section className="contact-page-main" aria-label="Contact details and message form">
          <div className="container contact-page-grid">
            <aside className="contact-details">
              <p className="eyebrow">Talk to our team</p>
              <h2>We&apos;re ready<br />when you are.</h2>
              <p className="contact-response">We respond within one business day.</p>
              <dl className="contact-detail-list">
                <div><dt>Phone</dt><dd><a href="tel:+254701819559">+254 701 819 559</a></dd></div>
                <div><dt>Email</dt><dd><a href="mailto:info@weeecentre.com">info@weeecentre.com</a></dd></div>
                <div><dt>Office</dt><dd>Mihango, Embakasi,<br />Off the Eastern By-pass</dd></div>
                <div><dt>Hours</dt><dd>Mon–Fri · 8:00–18:00</dd></div>
              </dl>
              <a className="whatsapp-link" href="https://wa.me/254701819559" target="_blank" rel="noreferrer"><span className="whatsapp-symbol" aria-hidden="true">W</span><span>Chat on WhatsApp<small>Usually the quickest way to reach us</small></span><span className="whatsapp-arrow" aria-hidden="true">↗</span></a>
            </aside>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="services-footer-grid">
            <div className="footer-about"><Link className="footer-brand" href="/"><Image src="https://weeecentre.com/assets/WeeCenter-zGgClq1S.png" alt="WEEE Centre" width={158} height={46} unoptimized /></Link><p>We collect, recycle, refurbish, and responsibly dispose of electronic waste, building a circular economy for a sustainable future.</p><button className="subscribe-link" onClick={() => openModal('subscribe')}>Subscribe to updates <span aria-hidden="true">&rarr;</span></button></div>
            <div className="footer-col"><h3>Quick links</h3><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/events">Events</Link><Link href="/conferences">Conferences</Link></div>
            <div className="footer-col"><h3>Services</h3><Link href="/services">E-Waste Collection</Link><Link href="/services">Secure Data Destruction</Link><Link href="/services">IT Asset Disposal</Link><Link href="/services">Electronics Recycling</Link><Link href="/services">Refurbishment &amp; Reuse</Link><Link href="/services">Asset Recovery</Link></div>
            <div className="footer-col"><h3>Contact</h3><a href="tel:+254701819559">+254 701 819 559</a><a href="mailto:info@weeecentre.com">info@weeecentre.com</a><address>Mihango, Embakasi<br />Off the Eastern By-pass<br />Kenya</address></div>
          </div>
          <div className="services-credit"><span>Built &amp; developed by <a href="tel:+254752225283">Valerie Ngatha-0752225283</a></span></div>
          <div className="footer-bottom"><span>&copy; 2026 WEEE CENTRE. Managing e-Waste for a Safe Environment.</span><span className="certifications">ISO 14001:2015 &nbsp;·&nbsp; ISO 9001:2015</span></div>
        </div>
      </footer>
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} title={modalTitle} predefinedSubject={predefinedSubject} />
    </>
  );
}