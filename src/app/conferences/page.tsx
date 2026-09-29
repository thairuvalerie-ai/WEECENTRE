import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteHeader from "../site-header";
import EnquiryModal from "../../components/enquiry-modal";

export const metadata: Metadata = {
  title: "Conferences & Summits | WEEE Centre",
  description: "Join Africa's leading e-waste conference, bringing together sustainability leaders, ITAD professionals, and policymakers to advance the circular electronics economy.",
};

const pastConferences = [
  {
    number: "05",
    title: "The 5th Edition of the Africa International E-Waste Conference",
    date: "Oct 16–17, 2025",
    time: "10:00 AM – 6:00 PM",
    venue: "PrideInn Paradise, Mombasa, Kenya",
    audience: "CISOs, IT & Compliance Leaders",
    description: "The 5th International E-Waste Conference focused on the theme Adapting to Global E-Waste Trends: Challenges and Opportunities. The event addressed the growing global e-waste crisis, including off-grid solar and battery waste connected to Africa’s renewable energy growth and the shift toward stricter e-waste regulations through Basel Convention amendments. It brought participants together to explore solutions and reduce environmental and social impacts.",
    topics: [
      "Global e-waste trends",
      "The impact of technological advancements on recycling",
      "The role of government, the private sector, and international collaborations in building scalable, sustainable solutions",
    ],
    image: "5th-Africa-International-E-Waste-Conference-GsI3Ebwi.jpeg",
    imageAlt: "Attendees at the 5th Africa International E-Waste Conference",
  },
  {
    number: "04",
    title: "The 4th Africa International E-Waste Conference",
    date: "Oct 16, 2024",
    time: "9:00 AM – 4:00 PM",
    venue: "Shamba Events, Loresho, Nairobi, Kenya",
    audience: "Households & Small Businesses",
    description: "The 4th Africa International E-Waste Conference brought together stakeholders, experts, policymakers, and industry leaders from across the globe to address critical e-waste management issues and sustainable solutions in a hybrid event.",
    topics: [
      "Foster Inter-African Collaboration",
      "Bridge Africa with Global Efforts",
      "Strengthen E-Waste Legislation",
      "Promote Extended Producer Responsibility (EPR)",
      "Enhance Intersectoral Collaboration",
      "Unlock Financing for E-Waste Management",
    ],
    image: "4th-CONFERENCE-2024-DnPFn7sA.png",
    imageAlt: "Conference participants discuss responsible e-waste management",
  },
  {
    number: "03",
    title: "The Third Africa International E-Waste Conference",
    date: "Nov 29, 2023",
    time: "Half-day sessions",
    venue: "Hybrid",
    audience: "K-12 & Universities",
    description: "Join the 3rd Africa International E-Waste Conference, where industry experts and thought leaders convened for a panel on the role of digital technology and innovation in accelerating the transition to a circular economy.",
    topics: [
      "Curriculum-ready educator toolkit",
      "Device donation matching program",
      "Student ambassador certifications",
    ],
    image: "3rd-CONFERENCE-2024-CWfC3Fm4.jpg",
    imageAlt: "Participants at the 3rd Africa International E-Waste Conference",
  },
];

const featuredTopics = [
  "From Compliance to Competitiveness",
  "Regional Harmonization and Alignment in Extended Producer Responsibility (EPR)",
  "Circularity in the ICT & Telecommunications Sector",
  "Climate-Smart Logistics",
  "Digital Circularity",
  "Youth Futures",
  "Financing the Transition",
  "Urban Mining, Metal Recycling & Circular Manufacturing",
];

export default function ConferencesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'pickup' | 'quote' | 'project' | 'conference' | 'event' | 'service' | 'subscribe'>('conference');
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
        <section className="conferences-hero" aria-labelledby="conferences-title">
          <div className="conferences-hero-image" />
          <div className="container conferences-hero-content">
            <p className="eyebrow eyebrow-light">Conferences &amp; summits</p>
            <h1 id="conferences-title">Industry conferences<br /><span>&amp; summits.</span></h1>
            <p>Where sustainability leaders, ITAD professionals, and policymakers gather to shape the circular electronics economy.</p>
            <a className="button button-lime" href="#conference-2026">See the 2026 conference <span aria-hidden="true">&darr;</span></a>
          </div>
          <span className="hero-caption">IDEAS &nbsp; / &nbsp; POLICY &nbsp; / &nbsp; CIRCULARITY</span>
        </section>

        <section className="conference-feature-section" id="conference-2026" aria-labelledby="conference-2026-title">
          <div className="container">
            <div className="conference-feature-image"><Image src="https://weeecentre.com/assets/conference_6_1-CboloJJQ.jpeg" alt="The 6th Africa International E-Waste Conference" width={1500} height={820} sizes="(max-width: 760px) 100vw, 1240px" unoptimized /><span className="conference-image-label">THE 6TH AFRICA INTERNATIONAL E-WASTE CONFERENCE</span></div>
            <div className="conference-feature-content">
              <div className="conference-feature-main">
                <div className="conference-meta"><span className="conference-tag">2026 Conference</span><span>OCT 15—16, 2026</span></div>
                <h2 id="conference-2026-title">The 6th Africa International E-Waste Conference</h2>
                <div className="conference-facts"><span><small>When</small>9:00 AM – 5:00 PM</span><span><small>Where</small>Diamonds Leisure Beach &amp; Golf Resort</span><span><small>For</small>Enterprise &amp; Government</span></div>
                <p className="conference-description">The 6th Africa International E-Waste Conference is Africa’s premier platform for advancing sustainable electronics management and the circular economy. Bringing together policymakers, regulators, industry leaders, development partners, academia, innovators, investors, and youth, the conference will showcase practical solutions that transform e-waste into opportunities for green industrialization, investment, job creation, and climate action.</p>
                <div className="conference-topics"><h3>Topics in focus</h3><ul>{featuredTopics.map((topic) => <li key={topic}>{topic}</li>)}</ul></div>
                <div className="conference-actions"><a className="button button-dark" href="https://luma.com/africa-ewaste-2026" target="_blank" rel="noreferrer">Register now <span aria-hidden="true">↗</span></a><a className="button button-outline-dark" href="https://weeecentre.com/contact" target="_blank" rel="noreferrer">Become a sponsor <span aria-hidden="true">↗</span></a></div>
              </div>
              <aside className="conference-aside"><span>01 / 04</span><strong>One continent.<br />A circular future.</strong><p>Connect with the people shaping policy, investment, innovation, and practical action on e-waste across Africa.</p></aside>
            </div>
          </div>
        </section>

        <section className="past-conferences" aria-labelledby="past-conferences-title">
          <div className="container">
            <div className="past-conferences-heading"><div><p className="eyebrow">From the archive</p><h2 id="past-conferences-title">Ideas that brought us here.</h2></div><p>Previous editions convened the people and perspectives moving Africa’s circular electronics economy forward.</p></div>
            <div className="past-conference-grid">
              {pastConferences.map((conference) => (
                <article className="past-conference-card" key={conference.number}>
                  <div className="past-conference-image"><Image src={`https://weeecentre.com/assets/${conference.image}`} alt={conference.imageAlt} width={900} height={610} sizes="(max-width: 760px) 100vw, (max-width: 1040px) 50vw, 33vw" unoptimized /><span>CONFERENCE &nbsp; / &nbsp; {conference.number}</span></div>
                  <div className="past-conference-content">
                    <div className="conference-meta"><span>{conference.date}</span><span>{conference.time}</span></div>
                    <h3>{conference.title}</h3>
                    <div className="past-conference-facts"><span><small>Venue</small>{conference.venue}</span><span><small>Audience</small>{conference.audience}</span></div>
                    <p>{conference.description}</p>
                    <div className="past-topics"><h4>Conference themes</h4><ul>{conference.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="conference-contact"><div className="container conference-contact-inner"><div><p className="eyebrow">Be part of the conversation</p><h2>Bring your ideas to the table.</h2><p>Connect with the WEEE Centre team about participating, partnering, or supporting the next conference.</p></div><button className="button button-dark" onClick={() => openModal('conference')}>Contact the team <span aria-hidden="true">&rarr;</span></button></div></section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="services-footer-grid">
            <div className="footer-about"><Link className="footer-brand" href="/"><Image src="https://weeecentre.com/assets/WeeCenter-zGgClq1S.png" alt="WEEE Centre" width={158} height={46} unoptimized /></Link><p>We collect, recycle, refurbish, and responsibly dispose of electronic waste, building a circular economy for a sustainable future.</p><button className="subscribe-link" onClick={() => openModal('subscribe')}>Subscribe to updates <span aria-hidden="true">&rarr;</span></button></div>
            <div className="footer-col"><h3>Quick links</h3><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/events">Events</Link></div>
            <div className="footer-col"><h3>Conferences</h3><Link href="#conference-2026">6th Africa International E-Waste Conference</Link><Link href="#past-conferences-title">Previous editions</Link><a href="https://luma.com/africa-ewaste-2026" target="_blank" rel="noreferrer">Register now</a></div>
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