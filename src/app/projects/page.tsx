import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteHeader from "../site-header";
import EnquiryModal from "../../components/enquiry-modal";

export const metadata: Metadata = {
  title: "Projects | WEEE Centre",
  description: "Explore WEEE Centre projects advancing e-waste infrastructure, youth skills, green jobs, and circular systems across East Africa.",
};

const projects = [
  {
    number: "01",
    category: "Education",
    title: "E-Waste Infrastructure & Systems Feasibility Study — Uganda (UDAP-GOVNET)",
    overview: "Consultancy services for the feasibility study and design of e-waste infrastructure and systems for sustainable management of waste from electrical and electronic equipment in Uganda, under the Uganda Digital Acceleration Project Government Network (UDAP-GOVNET).",
    solution: "WEEE Centre led a feasibility and design study for Uganda’s national e-waste management infrastructure.",
    results: [
      "Situational analysis of Uganda’s e-waste practices, policies, and institutions",
      "Technical, financial, and institutional feasibility study of the proposed system",
      "Environmental and Social Impact Assessment across all four regions of Uganda",
      "Draft designs for national and regional processing facilities, collection mechanisms, and treatment technologies",
      "Stakeholder validation workshops aligned with national priorities and community needs",
      "Consolidated final report with actionable implementation recommendations",
    ],
    image: "hero-recycling-CQta8Vpp.jpg",
    imageAlt: "WEEE Centre electronics recycling facility, representative of infrastructure planning work",
    impact: "186 t",
    impactLabel: "CO₂ avoided",
  },
  {
    number: "02",
    category: "Corporate",
    title: "Youth Empowerment through E-Waste Management — Kakuma & Kalobeyei, Kenya",
    overview: "Kakuma Kalobeyei Challenge Fund (KKCF), supported by the Africa Enterprise Challenge Fund (AECF) in partnership with the International Finance Corporation (IFC).",
    solution: "A three-year program turned e-waste into opportunity for refugee and host communities, building skills, jobs, and a collection network from the ground up.",
    results: [
      "2,080 young people trained in hands-on e-waste management skills",
      "An extensive e-waste collection network established across the camps and host community",
      "New green jobs created locally through the resulting e-waste value chain",
    ],
    image: "hero-2-pBQlfe__.jpg",
    imageAlt: "WEEE Centre team sorting e-waste, representative of skills and collection work",
    impact: "640 t",
    impactLabel: "CO₂ avoided",
  },
  {
    number: "03",
    category: "Government",
    title: "Human Capacity Development: Demand-Driven Skills Training for Youth in E-Waste Management — GIZ E4D Project",
    overview: "In partnership with GIZ VET Toolbox 2 and Kenya’s National Industrial Training Authority (NITA).",
    solution: "WEEE Centre worked with NITA and key stakeholders to design a demand-driven vocational training curriculum, establishing e-waste management as a recognized skills pathway in Kenya.",
    results: [
      "A national curriculum for vocational e-waste management training",
      "A framework to formally institutionalize the skill within Kenya’s vocational training system",
      "New job opportunities for youth across informal and formal e-waste sectors",
    ],
    image: "International-CvuqmrNp.jpg",
    imageAlt: "WEEE Centre e-waste learning event at the International School of Kenya",
    impact: "98 t",
    impactLabel: "Materials recovered",
  },
  {
    number: "04",
    category: "Government",
    title: "E-Waste Market Assessment & Youth Green Jobs — IKEA Foundation Power Up Consortium, Kenya",
    overview: "A federal agency needed compliant disposal of legacy storage with classified data.",
    solution: "WEEE Centre assessed the viability of youth engagement in e-waste value chains and translated the findings into practical infrastructure, training, and jobs.",
    results: [
      "Market assessment on youth engagement across e-waste value chains",
      "Scoping study mapping e-waste concentration and potential management-facility sites",
      "One e-waste pre-processing facility and three collection centres constructed",
      "600 young people trained in e-waste management and business development",
    ],
    image: "Corporatedrive-D-4BViVb.jpg",
    imageAlt: "WEEE Centre corporate e-waste collection drive, representative of collection-centre work",
    impact: "98 t",
    impactLabel: "Materials recovered",
  },
  {
    number: "05",
    category: "Government",
    title: "Scoping Study on E-Waste in Kakuma & Kalobeyei Refugee Camps, Kenya",
    overview: "GIZ-funded, with WEEE Centre as technical lead alongside SNV.",
    solution: "WEEE Centre led a technical assessment of e-waste management conditions across Kakuma and Kalobeyei refugee camps, laying the groundwork for safer and more sustainable practices in a complex humanitarian setting.",
    results: [
      "Situation analysis of e-waste flows, disposal practices, and related health and environmental risks",
      "Mapping of institutional and technical capacity gaps",
      "Community awareness assessment on e-waste handling",
      "Action-oriented recommendations for sustainable collection, safe disposal, and resource recovery in refugee settings",
    ],
    image: "Kilicycle-CX5ygv-f.jpeg",
    imageAlt: "WEEE Centre community collection drive, representative of community e-waste engagement",
    impact: "98 t",
    impactLabel: "Materials recovered",
  },
];

export default function ProjectsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'pickup' | 'quote' | 'project' | 'conference' | 'event' | 'service' | 'subscribe'>('project');
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
        <section className="projects-hero" aria-labelledby="projects-title">
          <div className="projects-hero-image" />
          <div className="container projects-hero-content">
            <p className="eyebrow eyebrow-light">Selected work &amp; outcomes</p>
            <h1 id="projects-title">Outcomes that<br /><span>prove the model.</span></h1>
            <p>Real projects, measured results, transparent reporting. Across East Africa, we turn e-waste challenges into systems, skills, and opportunity.</p>
            <a className="button button-lime" href="#case-studies">Explore projects <span aria-hidden="true">&darr;</span></a>
          </div>
          <span className="hero-caption">FIELD WORK &nbsp; / &nbsp; MEASURABLE IMPACT</span>
        </section>

        <section className="projects-index" aria-label="Project portfolio summary">
          <div className="container projects-index-inner"><span><strong>05</strong> case studies</span><span>Uganda &amp; Kenya</span><span>Infrastructure, skills &amp; circularity</span></div>
        </section>

        <section className="projects-list" id="case-studies" aria-label="WEEE Centre project case studies">
          <div className="container">
            <p className="project-image-note">Photos show representative WEEE Centre operations and community activities; they are not necessarily from the specific project locations listed.</p>
            {projects.map((project) => (
              <article className="project-case" id={`project-${project.number}`} key={project.number}>
                <div className="project-case-image">
                  <Image src={`https://weeecentre.com/assets/${project.image}`} alt={project.imageAlt} width={1200} height={850} sizes="(max-width: 760px) 100vw, 50vw" unoptimized />
                  <span className="project-image-number">{project.number} / 05</span>
                  <div className="project-impact"><span>Environmental impact</span><strong>{project.impact}</strong><span>{project.impactLabel}</span></div>
                </div>
                <div className="project-case-content">
                  <div className="project-case-meta"><span>{project.category}</span><span>CASE STUDY &nbsp; / &nbsp; {project.number}</span></div>
                  <h2>{project.title}</h2>
                  <div className="project-copy-block"><h3>Overview</h3><p>{project.overview}</p></div>
                  <div className="project-copy-block"><h3>Solution</h3><p>{project.solution}</p></div>
                  <div className="project-copy-block project-results"><h3>Results</h3><ul>{project.results.map((result) => <li key={result}>{result}</li>)}</ul></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-contact">
          <div className="container projects-contact-inner"><div><p className="eyebrow">Build impact with us</p><h2>Have a challenge to solve?</h2><p>Let&apos;s create a practical e-waste solution for your organization or community.</p></div><button className="button button-dark" onClick={() => openModal('project')}>Discuss a project <span aria-hidden="true">&rarr;</span></button></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="services-footer-grid">
            <div className="footer-about"><Link className="footer-brand" href="/"><Image src="https://weeecentre.com/assets/WeeCenter-zGgClq1S.png" alt="WEEE Centre" width={158} height={46} unoptimized /></Link><p>We collect, recycle, refurbish, and responsibly dispose of electronic waste, building a circular economy for a sustainable future.</p><button className="subscribe-link" onClick={() => openModal('subscribe')}>Subscribe to updates <span aria-hidden="true">&rarr;</span></button></div>
            <div className="footer-col"><h3>Quick links</h3><Link href="/about">About</Link><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/">Contact</Link></div>
            <div className="footer-col"><h3>Projects</h3>{projects.map((project) => <Link href={`/projects#project-${project.number}`} key={project.number}>{project.title}</Link>)}</div>
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