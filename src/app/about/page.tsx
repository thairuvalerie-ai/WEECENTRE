"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteHeader from "../site-header";
import EnquiryModal from "../../components/enquiry-modal";

const values = [
  ["01", "Sustainability", "Advancing environmentally responsible solutions."],
  ["02", "Innovation", "Driving new approaches to circular economy challenges."],
  ["03", "Collaboration", "Building partnerships for greater impact."],
  ["04", "Impact", "Creating measurable environmental, social, and economic benefits."],
];

export default function AboutPage() {
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
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero-image" />
          <div className="container about-hero-content">
            <p className="eyebrow eyebrow-light">About us</p>
            <h1 id="about-title">Pioneering the<br /><span>circular electronics</span><br />economy.</h1>
            <p>Founded in 2012, WEEE CENTRE has grown into a trusted partner for organizations who refuse to send hardware to landfill.</p>
            <div className="founded-note"><strong>2012</strong><span>Building a circular future in East Africa</span></div>
          </div>
        </section>

        <section className="about-story section" aria-labelledby="who-title">
          <div className="container story-grid">
            <div className="story-label"><p className="eyebrow">Who we are</p><span className="story-index">EAST AFRICA<br />01 — 04</span></div>
            <div className="story-copy"><h2 id="who-title">Pioneering E-Waste Management</h2><p>The Waste Electrical and Electronic Equipment (WEEE) Centre is a leading e-waste management organization in East Africa, dedicated to providing sustainable solutions for the collection, refurbishment, recycling, and environmentally sound disposal of electrical and electronic waste.</p><p>Established to address the growing challenge of e-waste, the Centre works closely with governments, private sector organizations, producers, development partners, educational institutions, and communities. Through innovation, capacity building, research, and advocacy, we support the transition towards a circular economy while protecting human health and advancing responsible resource recovery across Africa.</p></div>
          </div>
        </section>

        <section className="purpose-section" aria-label="Our mission and vision">
          <div className="container purpose-grid">
            <article className="purpose-card"><p className="eyebrow">Our mission</p><h2>Responsible recovery.<br />Lasting opportunity.</h2><p>To provide innovative, environmentally sound, and socially responsible solutions for the collection, refurbishment, recycling, and management of electronic waste while promoting circular economy practices, creating green jobs, and protecting the environment.</p></article>
            <article className="purpose-card purpose-card-vision"><p className="eyebrow">Our vision</p><h2>Waste transformed<br />into possibility.</h2><p>A world where electrical and electronic waste is transformed into resources for sustainable development through circular economy principles.</p><Image src="https://weeecentre.com/assets/Recycle-C1GMMEg-.png" alt="Illustration of recycling and circular resource recovery" width={110} height={118} unoptimized /></article>
          </div>
        </section>

        <section className="commitment-section" aria-labelledby="commitment-title">
          <div className="container commitment-inner"><p className="eyebrow eyebrow-light">Our promise</p><div><h2 id="commitment-title">A better standard<br />for every recovery.</h2><p>Net-zero operations by 2030, 100% renewable energy at all facilities, and a guaranteed zero-landfill policy on every contract.</p></div><div className="commitment-stats"><div><strong>2030</strong><span>Net-zero operations</span></div><div><strong>100%</strong><span>Renewable energy</span></div><div><strong>Zero</strong><span>Landfill on every contract</span></div></div></div>
        </section>

        <section className="values-section section" aria-labelledby="values-title">
          <div className="container">
            <div className="section-heading"><div><p className="eyebrow">What guides us</p><h2 id="values-title">Our core values.</h2></div><p className="section-intro">The principles behind every partnership, recovery, and decision.</p></div>
            <div className="values-grid">{values.map(([number, title, description]) => <article className="value-item" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
          </div>
        </section>

        <section className="certification-section" aria-labelledby="certifications-title">
          <div className="container certification-inner"><div><p className="eyebrow">Certifications &amp; licenses</p><h2 id="certifications-title">Standards you can trust.</h2></div><div className="certification-list"><div><Image src="https://weeecentre.com/assets/iso14001-ARU4Lm7p.png" alt="ISO 14001:2015 certified" width={46} height={46} unoptimized /><span>ISO 14001:2015</span></div><div><Image src="https://weeecentre.com/assets/iso9001-SmVC0YKf.jpg" alt="ISO 9001:2015 certified" width={46} height={46} unoptimized /><span>ISO 9001:2015</span></div></div></div>
        </section>

        <section className="about-credit" aria-label="Website credit"><div className="container"><span>Website</span><p>Built &amp; developed by <a href="tel:+254752225283">Valerie Ngatha - 0752225283</a></p></div></section>
      </main>
      <footer className="site-footer"><div className="container"><div className="about-footer-row"><Link className="footer-brand" href="/"><Image src="https://weeecentre.com/assets/WeeCenter-zGgClq1S.png" alt="WEEE Centre" width={158} height={46} unoptimized /></Link><p>We collect, recycle, refurbish, and responsibly dispose of electronic waste, building a circular economy for a sustainable future.</p><button className="subscribe-link" onClick={() => openModal('subscribe')}>Subscribe to updates <span aria-hidden="true">&rarr;</span></button></div><div className="footer-bottom"><span>&copy; 2026 WEEE CENTRE. Managing e-Waste for a Safe Environment.</span><span className="certifications">ISO 14001:2015 &nbsp;·&nbsp; ISO 9001:2015</span></div></div></footer>
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} title={modalTitle} predefinedSubject={predefinedSubject} />
    </>
  );
}