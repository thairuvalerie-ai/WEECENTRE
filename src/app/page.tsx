            <div className="footer-col"><h3>Quick links</h3><Link href="/about">About</Link><Link href="#impact">Sustainability</Link><Link href="#impact">Blog</Link><Link href="/projects">Projects</Link><Link href="#process">Events</Link><Link href="#partners">Conferences</Link><Link href="#contact">Contact</Link></div>
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteHeader from "./site-header";
import EnquiryModal from "../components/enquiry-modal";

const services = [
  ["01", "E-Waste Collection", "On-demand and scheduled pickup for any volume.", "collection"],
  ["02", "Secure Data Destruction", "NAID AAA-certified shredding and wiping.", "data"],
  ["03", "IT Asset Disposal", "End-to-end ITAD with a full chain of custody.", "assets"],
  ["04", "Electronics Recycling", "R2-certified material recovery, zero landfill.", "recycling"],
  ["05", "Refurbishment & Reuse", "Devices restored and given a second life.", "reuse"],
  ["06", "Asset Recovery", "Maximize residual value with revenue share.", "recovery"],
] as const;

const stages = ["Collection", "Sorting", "Data destruction", "Refurbishment", "Material recovery", "Recycling"];

const partners = [
  { name: "Mama Doing Good", logo: "Mama-doing-good-PCk-1--M.png" },
  { name: "GIZ", logo: "giz-C2hgdo_y.png" },
  { name: "Carrefour", logo: "carrefour-ylgbnMA7.png" },
  { name: "Safaricom", logo: "safaricom-Bz2FYfTs.jpeg" },
  { name: "Huawei", logo: "huawei-D31uPxMj.png" },
  { name: "Elemental", logo: "elemental-CNpXXzHV.png" },
  { name: "Yunus", logo: null },
  { name: "American", logo: "american-X93XfjoR.jpg" },
  { name: "Doen", logo: "doen-DMBfwUx5.png" },
  { name: "German", logo: "german-yYcyItbt.jpg" },
  { name: "HP", logo: "hp-CjxMkGz5.png" },
  { name: "ISK", logo: "isk-BnodnZjA.jpg" },
  { name: "Nice", logo: "nice-BD-YeLS6.jpg" },
  { name: "Rome", logo: "rome-WAg3TvCV.png" },
  { name: "Oracle", logo: "oracle-CDaOdw7d.png" },
  { name: "Revivo", logo: "REV-DafWrogm.jpg" },
  { name: "IBM", logo: "ibm-D-leXzJM.png" },
  { name: "AECF", logo: "aecf-dsGp44t4.svg" },
  { name: "Mr.Green", logo: null },
  { name: "NEMA", logo: "nema-B5iX8Rhw.png" },
  { name: "IKEA", logo: "ikea-FZy1oGJs.png" },
  { name: "Back Market", logo: null },
  { name: "DTB", logo: null },
  { name: "Government of Kenya", logo: "government-B7xmvaNh.png" },
  { name: "I&M", logo: "i_and_m-CvTSTsJi.png" },
  { name: "Kilimani", logo: "kilimani-DjrVQ11t.jpg" },
  { name: "Premier", logo: "premier-CMjVveDW.jpg" },
  { name: "TakaTaka", logo: "takataka-vIU2ectV.png" },
  { name: "Rotary", logo: "rotary-C70agCr7.svg" },
  { name: "CIH", logo: "CIH_LOGO-Pmmy6yvj.jpeg" },
  { name: "ICRC", logo: null },
  { name: "UNDP", logo: "undp-D7YuimEK.svg" },
  { name: "Netfund", logo: "netfund-CO4il3nb.png" },
  { name: "Foreign & Commonwealth", logo: "foreign-common-wealth-DCvx6yek.png" },
  { name: "Absa", logo: "absa-B1pMRpYx.png" },
  { name: "BD", logo: "bd-CVwZOR14.png" },
  { name: "GRPC", logo: null },
  { name: "Icer", logo: "icer-B2n8Qqfo.png" },
  { name: "MSF", logo: "msf-EF6XFeQj.png" },
  { name: "Prime", logo: "prime-El1net1i.png" },
];

const partnerLanes = [0, 1, 2].map((lane) => partners.filter((_, index) => index % 3 === lane));

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'pickup' | 'quote' | 'project' | 'conference' | 'event' | 'service' | 'subscribe'>('pickup');
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
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-shade" />
          <div className="container hero-content">
            <p className="eyebrow eyebrow-light">Managing e-waste for a safe environment</p>
            <h1 id="hero-title">Responsible E-Waste<br />Management for a<br /><span>Sustainable Future</span></h1>
            <p className="hero-copy">We collect, recycle, refurbish, and responsibly dispose of electronic waste for businesses, institutions, and households.</p>
            <div className="hero-actions">
              <button className="button button-lime" onClick={() => openModal('pickup')}>Schedule Pickup <span aria-hidden="true">&rarr;</span></button>
              <button className="button button-outline-light" onClick={() => openModal('quote')}>Request Quote</button>
            </div>
            <div className="hero-note"><span aria-hidden="true">&#10003;</span> Certified, secure, and built around circularity</div>
          </div>
          <span className="hero-caption">WEEE CENTRE &nbsp; / &nbsp; KENYA</span>
        </section>

        <section className="proof-strip" id="about" aria-label="WEEE Centre at a glance">
          <div className="container proof-grid">
            <div className="proof-item"><strong>Zero</strong><span>Landfill</span></div>
            <div className="proof-item"><strong>100%</strong><span>Responsibly processed</span></div>
            <div className="proof-item"><strong>25,000+</strong><span>Devices recycled</span></div>
            <div className="proof-item"><strong>1,200+</strong><span>Corporate clients</span></div>
            <div className="proof-item"><strong>500+</strong><span>Collection drives</span></div>
            <div className="proof-item"><strong>14,000+</strong><span>Tons diverted</span></div>
          </div>
        </section>

        <section className="section services" id="services" aria-labelledby="services-title">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">What we do</p><h2 id="services-title">The whole electronics lifecycle.</h2></div>
              <p className="section-intro">Certified, secure, and sustainable services for every stage of your hardware&apos;s journey.</p>
            </div>
            <div className="service-grid">
              {services.map(([number, title, description, subject]) => (
                <article className="service-item" key={number}>
                  <div className="service-meta"><span>{number} / 06</span><span className="service-mark" aria-hidden="true">{number === "01" ? "↗" : number === "02" ? "◎" : number === "03" ? "⇄" : number === "04" ? "◌" : number === "05" ? "⟳" : "↓"}</span></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <button className="text-link" onClick={() => openModal('service', 'Learn More', subject)}>Learn more <span aria-hidden="true">&rarr;</span></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process-section" id="process" aria-labelledby="process-title">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">From collection to circularity</p><h2 id="process-title">A process you can trace.</h2></div>
              <p className="section-intro">A transparent, traceable process gives every device a clear and accountable next step.</p>
            </div>
            <ol className="process-list">
              {stages.map((stage, index) => <li key={stage}><span>0{index + 1}</span><strong>{stage}</strong></li>)}
            </ol>
          </div>
        </section>

        <section className="impact-section" id="impact" aria-labelledby="impact-title">
          <div className="container">
            <p className="eyebrow eyebrow-muted">Sustainability impact</p>
            <div className="impact-heading"><h2 id="impact-title">Real numbers.<br /><span>Real planet.</span></h2><p>Every recovered device is a little less waste and a little more possibility.</p></div>
            <div className="impact-grid">
              <div><strong>14,000 t</strong><span>CO&#8322; prevented</span></div>
              <div><strong>20,000+</strong><span>Trees saved</span></div>
              <div><strong>8,400</strong><span>Devices refurbished</span></div>
              <div><strong>$10.6M</strong><span>Materials recovered</span></div>
            </div>
            <p className="impact-note">10,000 tonnes of e-waste diverted from landfill.</p>
          </div>
        </section>

        <section className="partners-section" id="partners" aria-labelledby="partners-title">
          <div className="container">
            <div className="section-heading partner-heading"><div><p className="eyebrow">Better together</p><h2 id="partners-title">Our partners</h2></div><p className="section-intro">Working together to build a more circular future.</p></div>
            <div className="partner-list" role="list" aria-label="WEEE Centre partners">
              {partnerLanes.map((lane, laneIndex) => (
                <div className={`partner-lane partner-lane-${laneIndex + 1}`} key={laneIndex}>
                  <div className="partner-track">
                    {[0, 1].map((copy) => lane.map((partner) => (
                      <div className={`partner-logo${copy ? " partner-logo-copy" : ""}`} key={`${copy}-${partner.name}`} role={copy ? undefined : "listitem"} aria-hidden={copy ? true : undefined}>
                        {partner.logo ? <Image src={`https://weeecentre.com/assets/${partner.logo}`} alt={copy ? "" : partner.name} width={145} height={60} sizes="(max-width: 760px) 136px, (max-width: 1040px) 170px, 190px" loading="eager" unoptimized /> : <span className="partner-wordmark">{partner.name}</span>}
                      </div>
                    )))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-inner">
            <div><p className="eyebrow">Take the next step</p><h2 id="contact-title">Ready to recycle responsibly?</h2><p>Schedule a pickup or talk to our team about enterprise programs.</p></div>
            <div className="contact-actions"><button className="button button-dark" onClick={() => openModal('pickup')}>Schedule Pickup <span aria-hidden="true">&rarr;</span></button><button className="button button-outline-dark" onClick={() => openModal('quote')}>Request Quote</button></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about"><a className="footer-brand" href="#home"><Image src="https://weeecentre.com/assets/WeeCenter-zGgClq1S.png" alt="WEEE Centre" width={158} height={46} unoptimized /></a><p>We collect, recycle, refurbish, and responsibly dispose of electronic waste, building a circular economy for a sustainable future.</p><button className="subscribe-link" onClick={() => openModal('subscribe')}>Subscribe to updates <span aria-hidden="true">&rarr;</span></button></div>
            <div className="footer-col"><h3>Quick links</h3><Link href="/about">About</Link><a href="#impact">Sustainability</a><a href="#impact">Blog</a><Link href="/projects">Projects</Link><Link href="/events">Events</Link><Link href="/conferences">Conferences</Link><a href="#contact">Contact</a></div>
            <div className="footer-col"><h3>Services</h3><a href="#services">E-Waste Collection</a><a href="#services">Secure Data Destruction</a><a href="#services">IT Asset Disposal</a><a href="#services">Electronics Recycling</a><a href="#services">Refurbishment &amp; Reuse</a><a href="#services">Asset Recovery</a></div>
            <div className="footer-col"><h3>Contact</h3><a href="tel:+254701819559">+254 701 819 559</a><a href="mailto:info@weeecentre.com">info@weeecentre.com</a><address>Mihango, Embakasi<br />Off the Eastern By-pass<br />Kenya</address></div>
          </div>
          <div className="footer-bottom"><span>&copy; 2026 WEEE CENTRE. Managing e-Waste for a Safe Environment.</span><span className="certifications">ISO 14001:2015 &nbsp;·&nbsp; ISO 9001:2015</span></div>
        </div>
      </footer>
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} title={modalTitle} predefinedSubject={predefinedSubject} />
    </>
  );
}
