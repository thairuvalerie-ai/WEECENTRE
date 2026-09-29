"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EnquiryModal from "../components/enquiry-modal";

const links = [
  ["Home", "/#home"],
  ["About", "/about"],
  ["Services", "/services"],
    ["Projects", "/projects"],
  ["Events", "/events"],
  ["Conferences", "/conferences"],
  ["Contact", "/contact"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'pickup' | 'quote' | 'project' | 'conference' | 'event' | 'service' | 'subscribe'>('pickup');

  function openModal(type: typeof modalType) {
    setModalType(type);
    setModalOpen(true);
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-row">
          <Link className="header-brand" href="/" aria-label="WEEE Centre home"><Image src="https://weeecentre.com/assets/WeeCenter-zGgClq1S.png" alt="" width={158} height={46} unoptimized /></Link>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
          <nav className={`nav-links${menuOpen ? " nav-open" : ""}`} id="primary-navigation" aria-label="Main navigation">
            {links.map(([label, href]) => <Link href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</Link>)}
            <button className="button button-lime nav-cta" onClick={() => openModal('pickup')}>Schedule Pickup <span aria-hidden="true">&rarr;</span></button>
          </nav>
        </div>
      </header>
      <EnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} />
    </>
  );
}