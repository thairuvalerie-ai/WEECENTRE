"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteHeader from "../site-header";
import EnquiryModal from "../../components/enquiry-modal";

const events = [
  {
    number: "01",
    category: "Tree planting",
    title: "Tree Planting Event",
    date: "Sept 26",
    duration: "Half-day sessions",
    venue: "The WEEE Centre HQ",
    audience: "Community, partners & schools",
    description: "Be part of the Tree Planting Ceremony at WEEE Centre, Embakasi Utawala, from 8:00 AM, in collaboration with PACJA. This initiative is more than planting trees — it’s about:",
    activities: [
      "Contributing to Kenya’s 15 billion trees by 2032 target",
      "Launching the countdown to the 5th Africa International E-Waste Conference",
      "Driving climate justice and circular economy solutions for Africa",
    ],
    image: "3rd-CONFERENCE-2024-CWfC3Fm4.jpg",
    imageAlt: "WEEE Centre community event bringing partners together",
  },
  {
    number: "02",
    category: "Environmental",
    title: "The Rotary Event",
    date: "June 6, 2025",
    duration: "Full-day session",
    venue: "Hybrid",
    audience: "Stakeholders",
    description: "We work with different Rotary clubs during World Environmental Day to raise awareness about responsible e-waste disposal and recycling. The event includes:",
    activities: ["Greenstep Run", "E-Waste Training", "E-Waste Collection Drive"],
    image: "Rotary-vgvmaoJU.jpeg",
    imageAlt: "Rotary environmental event and community participants",
  },
  {
    number: "03",
    category: "Environmental",
    title: "The International School of Kenya Event",
    date: "April 24, 2023",
    duration: "Full-day session",
    venue: "Hybrid",
    audience: "K-12 & universities",
    description: "For World Environmental Day, students and staff took part in e-waste management training and IT equipment destruction to experience how e-waste dismantling is done. Activities included:",
    activities: [
      "Dismantling obsolete laptops and desktops",
      "Segregating e-waste into different categories",
      "Safe, environmentally friendly e-waste disposal",
    ],
    image: "International-CvuqmrNp.jpg",
    imageAlt: "International School of Kenya students taking part in an event",
  },
  {
    number: "04",
    category: "Drives",
    title: "Kilicycle",
    date: "3rd Saturday of every month",
    duration: "11 am – 3 pm",
    venue: "Kiota School",
    audience: "Everyone",
    description: "Every third Saturday of the month, we organize a Kilicycle event to collect e-waste from the community and raise awareness about responsible disposal and recycling. Here’s a quick refresher on what we collect:",
    activities: ["Paper", "E-waste", "Plastics", "Glass bottles", "Sunglasses", "Used textiles"],
    image: "Kilicycle-CX5ygv-f.jpeg",
    imageAlt: "Kilicycle community collection drive",
  },
  {
    number: "05",
    category: "Drives",
    title: "Church Drives",
    date: "To be announced",
    duration: "Half-day sessions",
    venue: "On location",
    audience: "Everyone",
    description: "We conduct church drives to collect e-waste from congregations and raise awareness about responsible disposal and recycling.",
    activities: ["E-waste collection", "Training on e-waste management", "Safe e-waste disposal"],
    image: "Church-CLPseC9d.jpg",
    imageAlt: "Community participating in a church e-waste collection drive",
  },
  {
    number: "06",
    category: "Drives",
    title: "Corporate Drives",
    date: "To be announced",
    duration: "Half-day sessions",
    venue: "On location",
    audience: "Corporate organizations",
    description: "We conduct corporate drives to collect e-waste from businesses and raise awareness about responsible disposal and recycling.",
    activities: ["E-waste collection and recycling", "E-waste management training for employees"],
    image: "Corporatedrive-D-4BViVb.jpg",
    imageAlt: "Corporate staff taking part in an e-waste collection drive",
  },
  {
    number: "07",
    category: "Drives",
    title: "School Drives",
    date: "To be announced",
    duration: "Half-day sessions",
    venue: "On site",
    audience: "Schools",
    description: "We put collection bins in schools to collect e-waste from students and staff, while building awareness about responsible disposal and recycling.",
    activities: ["Curriculum-ready educator toolkit", "Device donation matching program", "Student ambassador certifications"],
    image: "Schooldrive-BHW12nxs.jpg",
    imageAlt: "School e-waste collection drive for students and staff",
  },
  {
    number: "08",
    category: "Drives",
    title: "Estate Drives",
    date: "To be announced",
    duration: "Half-day sessions",
    venue: "On site",
    audience: "Residents",
    description: "We set up temporary collection points for residents, raising awareness about responsible e-waste disposal and recycling.",
    activities: ["E-waste collection and recycling", "E-waste management training for residents", "Permanent e-waste collection points in estates"],
    image: "Edenville-pkWhCElF.jpeg",
    imageAlt: "Residential community e-waste drive",
  },
];

export default function EventsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'pickup' | 'quote' | 'project' | 'conference' | 'event' | 'service' | 'subscribe'>('event');
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
        <section className="events-hero" aria-labelledby="events-title">
          <div className="events-hero-image" />
          <div className="container events-hero-content">
            <p className="eyebrow eyebrow-light">Meet, learn, take action</p>
            <h1 id="events-title">Community drives<br /><span>&amp; workshops.</span></h1>
            <p>Join our local recycling drives, workshops, and webinars. Looking for conferences? Visit our Conferences page.</p>
            <div className="events-hero-actions"><a className="button button-lime" href="#event-list">Explore events <span aria-hidden="true">&darr;</span></a><Link className="events-conference-link" href="/conferences">Explore conferences <span aria-hidden="true">↗</span></Link></div>
          </div>
          <span className="hero-caption">COMMUNITY &nbsp; / &nbsp; LEARNING &nbsp; / &nbsp; ACTION</span>
        </section>

        <section className="events-overview" aria-label="Events overview"><div className="container events-overview-inner"><span><strong>08</strong> ways to take part</span><span>Schools, estates &amp; workplaces</span><span>Across our community</span></div></section>

        <section className="events-section" id="event-list" aria-label="Community events and collection drives">
          <div className="container">
            <div className="events-section-heading"><div><p className="eyebrow">Upcoming &amp; ongoing</p><h2>Come be part of it.</h2></div><p>From hands-on school workshops to recurring community collections, there’s a way for everyone to contribute.</p></div>
            <div className="events-grid">
              {events.map((event) => (
                <article className="event-card" key={event.number}>
                  <div className="event-card-image"><Image src={`https://weeecentre.com/assets/${event.image}`} alt={event.imageAlt} width={900} height={620} sizes="(max-width: 760px) 100vw, (max-width: 1040px) 50vw, 33vw" unoptimized /><span className="event-category">{event.category}</span><span className="event-number">{event.number}</span></div>
                  <div className="event-card-content">
                    <div className="event-meta"><span>{event.date}</span><span>{event.duration}</span></div>
                    <h3>{event.title}</h3>
                    <div className="event-facts"><span><small>Where</small>{event.venue}</span><span><small>Who</small>{event.audience}</span></div>
                    <p className="event-description">{event.description}</p>
                    <ul>{event.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
                    <button className="event-contact" onClick={() => openModal('event', 'Event Enquiry', `Event enquiry: ${event.title}`)}>Ask about this event <span aria-hidden="true">&rarr;</span></button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="events-contact"><div className="container events-contact-inner"><div><p className="eyebrow">Bring a drive to your community</p><h2>Let&apos;s make it happen.</h2><p>Partner with us to organize a collection, training, or environmental event.</p></div><button className="button button-dark" onClick={() => openModal('event')}>Plan an event <span aria-hidden="true">&rarr;</span></button></div></section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="services-footer-grid">
            <div className="footer-about"><Link className="footer-brand" href="/"><Image src="https://weeecentre.com/assets/WeeCenter-zGgClq1S.png" alt="WEEE Centre" width={158} height={46} unoptimized /></Link><p>We collect, recycle, refurbish, and responsibly dispose of electronic waste, building a circular economy for a sustainable future.</p><button className="subscribe-link" onClick={() => openModal('subscribe')}>Subscribe to updates <span aria-hidden="true">&rarr;</span></button></div>
            <div className="footer-col"><h3>Quick links</h3><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/conferences">Conferences</Link></div>
            <div className="footer-col"><h3>Events</h3>{events.slice(0, 5).map((event) => <Link href={`/events#event-${event.number}`} key={event.number}>{event.title}</Link>)}</div>
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