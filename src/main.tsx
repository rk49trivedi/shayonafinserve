import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileCheck2,
  HandCoins,
  Landmark,
  LineChart,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users2,
  WalletCards,
} from 'lucide-react'
import './style.css'

const serviceCards = [
  {
    title: 'PMEGP Loans',
    image: '/services/pmegp-loans.png',
    icon: Landmark,
    text: 'Project finance guidance with eligibility, file preparation, and subsidy-linked support.',
    meta: 'Project subsidy',
  },
  {
    title: 'MSME Loans',
    image: '/services/msme-loan.png',
    icon: Factory,
    text: 'Capital support for manufacturers, traders, and service businesses ready to scale.',
    meta: 'Growth capital',
  },
  {
    title: 'Mudra Loans',
    image: '/services/mudra-loan.png',
    icon: HandCoins,
    text: 'Small business funding assistance with practical advisory and clean documentation.',
    meta: 'Micro business',
  },
  {
    title: 'Home Loans',
    image: '/services/home-loan.png',
    icon: Building2,
    text: 'Approval-ready home loan assistance built around affordability and lender fit.',
    meta: 'Property finance',
  },
  {
    title: 'Business Loans',
    image: '/services/business-loan.png',
    icon: WalletCards,
    text: 'Working capital and expansion finance for founders, owners, and established teams.',
    meta: 'Business growth',
  },
  {
    title: 'Accounting',
    image: '/services/accounting.png',
    icon: Calculator,
    text: 'Reliable bookkeeping, reporting, and financial clarity for day-to-day operations.',
    meta: 'Compliance desk',
  },
  {
    title: 'GST',
    image: '/services/gst.png',
    icon: FileCheck2,
    text: 'GST filing, advisory, reconciliation, and compliance support for Indian businesses.',
    meta: 'Tax support',
  },
  {
    title: 'Audit',
    image: '/services/audit.png',
    icon: ClipboardCheck,
    text: 'Audit-ready records and assurance support for accurate, reliable financial statements.',
    meta: 'Assurance',
  },
]

const groupBrands = [
  '/group/brand-1.png',
  '/group/brand-2.png',
  '/group/brand-3.png',
  '/group/brand-4.png',
]

const partners = [
  { name: 'Prime Hospital', logo: '/partners/prime.png' },
  { name: 'Sun Pharma', logo: '/partners/sunpharma.png' },
  { name: 'Tata Motors', logo: '/partners/tata-motors.png' },
  { name: 'Bombay Dyeing', logo: '/partners/bombay.png' },
  { name: 'Aurita', logo: '/partners/aurita.png' },
  { name: 'GTPL', logo: '/partners/gtpl.png' },
]

const metrics = [
  { value: '3000+', label: 'Projects completed' },
  { value: '2800+', label: 'Satisfied customers' },
  { value: '2500+', label: 'Expert consultations' },
  { value: '86%', label: 'Consulting success' },
]

const process = [
  ['01', 'Decode the goal', 'We understand your business, funding requirement, eligibility, and documentation position.'],
  ['02', 'Build the file', 'The team prepares a clear, lender-ready finance, subsidy, tax, or compliance roadmap.'],
  ['03', 'Move with precision', 'You get follow-through from submission to decision, with clarity at every step.'],
]

const testimonials = [
  {
    quote:
      'Their dedicated team helped us navigate complex financial requirements with valuable insights and professional commitment.',
    name: 'Dr. Chirag Patel',
    company: 'Prime Hospital',
  },
  {
    quote:
      'From loans to bookkeeping, their personalized approach and industry understanding has been instrumental for our operations.',
    name: 'Nichiket Prajapati',
    company: 'N Rivival Pharma Company',
  },
  {
    quote:
      'Shayona gave us the confidence to streamline MSME, GST, and financial processes with a reliable advisory partner.',
    name: 'Pathik Sheth',
    company: 'Snehraj Notebooks',
  },
]

const team = [
  { name: 'Akhil Bhuva', role: 'Legal & Technical' },
  { name: 'Jayesh Gohil', role: 'Relationship Manager' },
  { name: 'Disha Nayi', role: 'Accounting & GST' },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ec] text-[#07112f]">
      <Header />
      <Hero />
      <GroupMarquee />
      <Advantage />
      <Services />
      <GrowthEngine />
      <Testimonials />
      <ProjectsAndTeam />
      <Contact />
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/60 bg-[#fffdf8]/88 backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between">
        <a href="#home" aria-label="Shayona Finserve home" className="flex items-center">
          <img className="h-12 w-auto" src="/brand/shayona-logo.png" alt="Shayona Finserve" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-black text-[#13213f] lg:flex">
          <a href="#advantage">Advantage</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a className="text-sm font-black text-[#07007a]" href="tel:+918866577663">
            +91 88665 77663
          </a>
          <a className="gold-button" href="#contact">
            Get Consultation <ArrowRight size={17} />
          </a>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-[#d8a128]/30 bg-white text-[#07007a] shadow-sm lg:hidden" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero-stage relative pt-28 lg:pt-32">
      <div className="hero-grid" />
      <div className="page-shell relative grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28">
        <div className="relative z-10">
          <div className="reveal-chip mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8a128]/35 bg-white/92 px-4 py-2 text-sm font-black text-[#07007a] shadow-sm">
            <Sparkles size={17} className="text-[#d8a128]" />
            Your financial compass, redesigned
          </div>
          <h1 className="max-w-4xl text-[2.72rem] font-black leading-[0.93] tracking-normal text-[#07007a] sm:text-6xl lg:text-[5.7rem]">
            Finance that moves with your ambition.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-650">
            Loans, subsidies, accounting, GST, audit, and consulting shaped into one confident growth desk for modern Indian businesses.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="gold-button h-14 w-full px-7 text-base sm:w-auto" href="#services">
              Explore Services <ArrowRight size={19} />
            </a>
            <a className="outline-button h-14 w-full px-7 text-base sm:w-auto" href="#process">
              See Our Method <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label} className="metric-tile">
                <p>{item.value}</p>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-card">
            <img src="/services/bannerimage.png" alt="Finance consultation with happy clients" />
          </div>
          <div className="hero-dashboard">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-[#d8a128]">Growth Command Center</p>
                <h2 className="mt-1 text-2xl font-black text-white">Loan to compliance, one route.</h2>
              </div>
              <img className="h-12 w-12" src="/brand/shayona-mark.png" alt="" />
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {['Capital', 'Subsidy', 'Tax'].map((item, index) => (
                <div key={item} className="pulse-cell" style={{ animationDelay: `${index * 180}ms` }}>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-7 flex items-end gap-2" aria-hidden="true">
              {[42, 68, 50, 86, 62, 94, 74].map((height, index) => (
                <span key={index} className="chart-bar" style={{ height: `${height}px`, animationDelay: `${index * 90}ms` }} />
              ))}
            </div>
          </div>
          <div className="orbit-card orbit-one">
            <ShieldCheck size={20} />
            <span>Risk-aware files</span>
          </div>
          <div className="orbit-card orbit-two">
            <BadgeCheck size={20} />
            <span>Approval-ready flow</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function GroupMarquee() {
  return (
    <section className="border-y border-[#d8a128]/20 bg-white py-8">
      <div className="page-shell">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-sm font-black uppercase text-[#07007a]">Our Group</p>
          <p className="hidden text-sm font-semibold text-slate-500 sm:block">A connected ecosystem for finance, consulting, and business growth.</p>
        </div>
        <div className="logo-rail">
          <div className="logo-track">
            {[...groupBrands, ...groupBrands].map((logo, index) => (
              <div className="brand-pill" key={`${logo}-${index}`}>
                <img src={logo} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Advantage() {
  return (
    <section id="advantage" className="bg-[#fffdf8] py-20 lg:py-28">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="image-stack">
          <img className="stack-main" src="/services/about-one-img-2.jpg" alt="Shayona advisory meeting" />
          <img className="stack-float" src="/services/about-one-img-1.jpg" alt="Business finance discussion" />
        </div>
        <div>
          <p className="eyebrow">Discover the Shayona advantage</p>
          <h2 className="section-title">A sharper way to turn plans into finance decisions.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-650">
            For over a decade, Shayona Finserve has helped businesses move through loans, government subsidies, taxation, accounting, GST, and audit with practical clarity.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              ['Strategic capital', 'Machinery loans, project finance, working capital, and growth funding.'],
              ['Subsidy expertise', 'State and central subsidy guidance with process-focused support.'],
              ['Tax clarity', 'GST, accounting, and audit support that keeps operations decision-ready.'],
              ['Trusted team', 'Chartered accountants, MBAs, engineers, lawyers, and relationship experts.'],
            ].map(([title, text]) => (
              <article className="advantage-card" key={title}>
                <CheckCircle2 size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="service-section py-20 lg:py-28">
      <div className="page-shell">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">Bridging the gap</p>
          <h2 className="section-title">Expert consulting and finance services without the old paperwork maze.</h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {serviceCards.map((service, index) => {
            const Icon = service.icon
            return (
              <article className="service-card group" key={service.title} style={{ animationDelay: `${index * 70}ms` }}>
                <div className="service-media">
                  <img src={service.image} alt={service.title} />
                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                </div>
                <p className="mt-5 text-xs font-black uppercase text-[#d8a128]">{service.meta}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact">
                  Start here <ArrowRight size={17} />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function GrowthEngine() {
  return (
    <section id="process" className="bg-[#07112f] py-20 text-white lg:py-28">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">Growth engine</p>
            <h2 className="section-title text-white">Financial expertise that empowers your business growth.</h2>
            <p className="mt-6 text-lg leading-8 text-white/70">
              A modern advisory workflow: less confusion, cleaner documents, stronger follow-through, and a more confident decision path.
            </p>
            <div className="mt-9 grid gap-4">
              {process.map(([num, title, text]) => (
                <article className="process-card" key={num}>
                  <span>{num}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="dashboard-panel">
            <img src="/services/dashboard-screen.png" alt="Financial dashboard analytics" />
            <div className="panel-strip">
              <div>
                <LineChart size={24} />
                <strong>Live clarity</strong>
                <span>Numbers, filings, files, and finance direction in sync.</span>
              </div>
              <div>
                <Target size={24} />
                <strong>Focused execution</strong>
                <span>Designed around outcomes, not confusing checklists.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-band mt-16">
          <div>
            <p>Ready for a cleaner finance route?</p>
            <h3>Take the first step with Shayona Finserve.</h3>
          </div>
          <a className="gold-button" href="#contact">
            Send a Message <MessageSquare size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="bg-[#f7f4ec] py-20 lg:py-28">
      <div className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Real voices, real results</p>
          <h2 className="section-title">Testimonial spotlight</h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <div className="mb-6 flex items-center gap-1 text-[#d8a128]">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={17} fill="currentColor" />
                ))}
              </div>
              <p>"{item.quote}"</p>
              <div className="mt-8 flex items-center gap-4">
                <img src="/brand/shayona-mark.png" alt="" />
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsAndTeam() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="eyebrow">Completed projects</p>
            <h2 className="section-title">Projects that inspire transformation.</h2>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {['/services/meeting-wide.jpg', '/services/about-one-img-1.jpg', '/services/about-one-img-2.jpg'].map((src, index) => (
                <div className="project-tile" key={src}>
                  <img src={src} alt={`Completed finance project ${index + 1}`} />
                  <span>{['Prime Hospital', 'Sun Pharma', 'Tata Motors'][index]}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Team Shayona</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#07007a]">Meet the people who make it happen.</h2>
            <div className="mt-8 grid gap-4">
              {team.map((person) => (
                <article className="team-row" key={person.name}>
                  <div>
                    <Users2 size={22} />
                  </div>
                  <span>
                    <strong>{person.name}</strong>
                    <small>{person.role}</small>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 rounded-lg bg-[#fff8e7] p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {partners.map((partner) => (
              <div className="partner-cell" key={partner.name}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section py-20 lg:py-28">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Schedule a consultation</p>
          <h2 className="section-title text-white">Move your next finance decision with expert guidance.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Speak with Shayona Finserve for loans, subsidy support, accounting, GST, audit, and advisory planning.
          </p>
        </div>
        <div className="contact-card">
          <ContactLine icon={Phone} label="Call Us" value="+91 88665 77663" href="tel:+918866577663" />
          <ContactLine icon={Mail} label="Email Us" value="admin@shayonafinserve.com" href="mailto:admin@shayonafinserve.com" />
          <ContactLine
            icon={MapPin}
            label="Visit Us"
            value="516 & 517, Sahitya Arcade, Opp Shelby Hospital, Haridarshan Cross Road, Naroda, Ahmedabad - 382 330"
          />
        </div>
      </div>
    </section>
  )
}

type ContactLineProps = {
  icon: React.ElementType
  label: string
  value: string
  href?: string
}

function ContactLine({ icon: Icon, label, value, href }: ContactLineProps) {
  const content = (
    <div className="contact-line">
      <div>
        <Icon size={22} />
      </div>
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
    </div>
  )

  return href ? (
    <a href={href} className="block transition hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  )
}

function Footer() {
  return (
    <footer className="bg-[#07112f] py-10 text-white">
      <div className="page-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <img className="h-12 w-auto" src="/brand/shayona-logo.png" alt="Shayona Finserve" />
          <p className="max-w-md text-sm leading-6 text-white/58">Your financial compass guiding you through loans, taxes, and beyond.</p>
        </div>
        <p className="text-sm text-white/45">Copyright 2026 Shayona Finserve. Modern redesign concept.</p>
      </div>
    </footer>
  )
}

createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
