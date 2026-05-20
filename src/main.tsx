import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  HandCoins,
  HelpCircle,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  WalletCards,
} from 'lucide-react'
import './style.css'

const partners = [
  { name: 'Prime Hospital', logo: '/partners/prime.png' },
  { name: 'Sun Pharma', logo: '/partners/sunpharma.png' },
  { name: 'Tata Motors', logo: '/partners/tata-motors.png' },
  { name: 'Bombay Dyeing', logo: '/partners/bombay.png' },
  { name: 'Aurita', logo: '/partners/aurita.png' },
  { name: 'GTPL', logo: '/partners/gtpl.png' },
]

const groupBrands = [
  { name: 'Shayona Group', logo: '/group/brand-1.png' },
  { name: 'Shayona Consultants', logo: '/group/brand-2.png' },
  { name: 'Bizz Harmony', logo: '/group/brand-3.png' },
  { name: 'Shayona Finserve', logo: '/group/brand-4.png' },
]

const stats = [
  { value: '3000+', label: 'Projects completed' },
  { value: '2800+', label: 'Satisfied customers' },
  { value: '2500+', label: 'Expert consultations' },
  { value: '86%', label: 'Consulting success' },
]

const services = [
  {
    title: 'PMEGP Loans',
    icon: Landmark,
    variant: 'factory',
    text: 'Financial assistance for micro-enterprises with project cost planning and subsidy-focused file support.',
  },
  {
    title: 'MSME Loans',
    icon: Factory,
    variant: 'growth',
    text: 'Funding guidance for manufacturing and service businesses that need capital to grow with confidence.',
  },
  {
    title: 'Mudra Loans',
    icon: HandCoins,
    variant: 'coin',
    text: 'Loan support for micro-units under Pradhan Mantri Mudra Yojana with clean documentation.',
  },
  {
    title: 'Home Loans',
    icon: Home,
    variant: 'home',
    text: 'Secured home loan advisory built around affordability, property goals, and lender readiness.',
  },
  {
    title: 'Business Loans',
    icon: BriefcaseBusiness,
    variant: 'business',
    text: 'Working capital and expansion funding for new ventures and established business owners.',
  },
  {
    title: 'Personal Loans',
    icon: WalletCards,
    variant: 'personal',
    text: 'Flexible personal finance support for planned expenses, consolidation, and urgent requirements.',
  },
  {
    title: 'Accounting',
    icon: Calculator,
    variant: 'accounting',
    text: 'Professional accounting services to keep business finances organized, transparent, and useful.',
  },
  {
    title: 'GST Services',
    icon: ReceiptText,
    variant: 'gst',
    text: 'GST filing, advisory, reconciliation, and compliance support for businesses operating in India.',
  },
  {
    title: 'Audit Services',
    icon: ClipboardCheck,
    variant: 'audit',
    text: 'Audit-ready records and assurance support for accurate, reliable financial statements.',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery call',
    text: 'We understand the business, funding goal, compliance position, and approval timeline.',
  },
  {
    step: '02',
    title: 'Eligibility mapping',
    text: 'The team checks loan, subsidy, tax, GST, and audit requirements before building the route.',
  },
  {
    step: '03',
    title: 'Documentation desk',
    text: 'We prepare a lender-ready and compliance-ready file with clear next actions.',
  },
  {
    step: '04',
    title: 'Submission support',
    text: 'Shayona follows through with practical guidance until the process reaches a decision.',
  },
]

const whyChoose = [
  ['10+ years of expertise', 'A decade of financial services experience across loans, subsidies, tax, GST, and audit.'],
  ['Multi-disciplinary team', 'Chartered accountants, cost accountants, MBAs, engineers, lawyers, and finance professionals.'],
  ['Quality-first execution', 'Customer satisfaction and quality work remain the foundation of the company’s growth.'],
  ['One advisory desk', 'Finance, compliance, accounting, and government subsidy support under one clear system.'],
]

const testimonials = [
  {
    quote:
      'Our experience with Shayona has been exceptionally positive. Their dedicated team helped us navigate complex financial landscapes with professionalism.',
    name: 'Dr. Chirag Patel',
    company: 'Prime Hospital',
  },
  {
    quote:
      'Shayona Finserve has been instrumental in handling diverse financial aspects, from loans to bookkeeping. Their approach sets them apart.',
    name: 'Nichiket Prajapati',
    company: 'N Rivival PHARMA Company',
  },
  {
    quote:
      'They supported our MSME, GST, and financial work with clarity. The team made the entire process more structured and reliable.',
    name: 'Pathik Sheth',
    company: 'Snehraj Notebooks',
  },
]

const faqs = [
  ['Which loan services does Shayona Finserve support?', 'PMEGP, MSME, Mudra, home, business, personal, machinery, and project finance guidance.'],
  ['Do you help with government subsidies?', 'Yes. The team supports state and central government subsidy documentation and advisory.'],
  ['Can Shayona manage GST and accounting too?', 'Yes. Accounting, GST, audit, tax planning, and financial reporting support are part of the service suite.'],
  ['How do I start?', 'Call +91 88665 77663 or send an inquiry. The team begins with a consultation and eligibility review.'],
]

const blogPosts = [
  {
    tag: 'Loans',
    title: 'How to prepare a cleaner business loan file',
    text: 'A practical checklist for founders before approaching lenders or subsidy desks.',
  },
  {
    tag: 'GST',
    title: 'Why GST reconciliation matters for growing firms',
    text: 'Small monthly discipline can prevent larger compliance issues later.',
  },
  {
    tag: 'Subsidy',
    title: 'Understanding subsidy readiness for MSME projects',
    text: 'Eligibility, timing, and documents determine how smoothly the process moves.',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-[#f8f6ef] text-[#07112f]">
      <Header />
      <Hero />
      <TrustedStrip />
      <Services />
      <WhyChoose />
      <LoanProcess />
      <Statistics />
      <Testimonials />
      <Faq />
      <BlogPreview />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  )
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/70 bg-[#fffdf8]/88 backdrop-blur-xl">
      <div className="site-shell flex h-20 items-center justify-between">
        <a href="#home" aria-label="Shayona Finserve home" className="flex items-center">
          <img className="h-12 w-auto" src="/brand/shayona-logo.png" alt="Shayona Finserve" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-black text-[#13213f] lg:flex">
          <a href="#services">Services</a>
          <a href="#why">Why Shayona</a>
          <a href="#process">Process</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a className="text-sm font-black text-[#07007a]" href="tel:+918866577663">
            +91 88665 77663
          </a>
          <a className="btn btn-gold" href="#contact">
            Get started <ArrowRight size={17} />
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
    <section id="home" className="hero-section relative overflow-hidden pt-28 lg:pt-32">
      <div className="hero-noise" />
      <div className="site-shell relative grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:pb-28">
        <div>
          <div className="premium-chip">
            <Sparkles size={17} />
            Your catalyst for success
          </div>
          <h1 className="mt-7 max-w-4xl text-[2.35rem] font-black leading-[0.95] tracking-normal text-[#07007a] sm:text-6xl lg:text-[6.25rem]">
            Igniting growth through financial consulting.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4b5874]">
            Shayona Finserve helps businesses unlock loans, subsidies, accounting, GST, audit, and strategic finance guidance through one trusted advisory desk.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a className="btn btn-gold h-14 w-full px-7 text-base sm:w-auto" href="#contact">
              Book consultation <ArrowRight size={19} />
            </a>
            <a className="btn btn-light h-14 w-full px-7 text-base sm:w-auto" href="#services">
              Explore services
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-photo">
            <img src="/assets/images/slider-1-2.jpg" alt="Professional finance consultation" />
          </div>
          <div className="hero-glass hero-glass-top">
            <ShieldCheck size={22} />
            <span>
              <strong>Trusted finance desk</strong>
              <small>Loan, subsidy and tax support</small>
            </span>
          </div>
          <div className="hero-glass hero-glass-bottom">
            <TrendingUp size={23} />
            <span>
              <strong>Growth clarity</strong>
              <small>From vision to execution</small>
            </span>
          </div>
          <div className="finance-console">
            <div className="console-head">
              <span>Finance pulse</span>
              <BadgeCheck size={20} />
            </div>
            <div className="console-bars" aria-hidden="true">
              {[38, 72, 54, 88, 62, 96, 78].map((height, index) => (
                <i key={index} style={{ height: `${height}px`, animationDelay: `${index * 120}ms` }} />
              ))}
            </div>
            <div className="console-tags">
              <span>Loans</span>
              <span>GST</span>
              <span>Audit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustedStrip() {
  return (
    <section className="bg-white py-9">
      <div className="site-shell">
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Our group</p>
            <h2 className="text-2xl font-black text-[#07007a]">A connected business ecosystem</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#65708a]">Brands and partners connected through finance, consulting, growth, and service excellence.</p>
        </div>
        <div className="group-grid">
          {groupBrands.map((brand) => (
            <div className="group-card" key={brand.name}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
        <div className="partner-rail mt-8">
          {[...partners, ...partners].map((partner, index) => (
            <div className="partner-logo" key={`${partner.name}-${index}`}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section-pad service-bg">
      <div className="site-shell">
        <div className="section-head mx-auto max-w-4xl text-center">
          <p className="eyebrow">Connecting your business goals</p>
          <h2>Expert consulting and finance services</h2>
          <span>
            Minimal, modern, and focused services for companies that want capital, compliance, and clarity without unnecessary confusion.
          </span>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article className="service-card" key={service.title}>
                <ServiceIllustration variant={service.variant} icon={Icon} />
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contact">
                    Start inquiry <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

type ServiceIllustrationProps = {
  variant: string
  icon: React.ElementType
}

function ServiceIllustration({ variant, icon: Icon }: ServiceIllustrationProps) {
  return (
    <div className={`service-illustration illustration-${variant}`} aria-hidden="true">
      <div className="illus-orb orb-one" />
      <div className="illus-orb orb-two" />
      <div className="illus-panel">
        <Icon size={38} />
      </div>
      <div className="illus-coins">
        <span />
        <span />
        <span />
      </div>
      <div className="illus-line" />
    </div>
  )
}

function WhyChoose() {
  return (
    <section id="why" className="section-pad bg-[#fffdf8]">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="about-collage">
          <img className="about-main" src="/assets/images/about-one-img-2.jpg" alt="Business advisory discussion" />
          <img className="about-float" src="/assets/images/about-one-img-1.jpg" alt="Finance client consultation" />
          <div className="about-badge">
            <img src="/brand/shayona-mark.png" alt="" />
            <span>10+ years of trusted advisory</span>
          </div>
        </div>
        <div>
          <p className="eyebrow">Discover the Shayona advantage</p>
          <h2 className="section-title">Financial expertise that empowers your business growth.</h2>
          <p className="mt-6 text-lg leading-8 text-[#526079]">
            Shayona Finserve goes beyond crunching numbers. We offer comprehensive financial expertise that empowers your business to unlock its full potential.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {whyChoose.map(([title, text]) => (
              <article className="why-card" key={title}>
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

function LoanProcess() {
  return (
    <section id="process" className="section-pad bg-[#07112f] text-white">
      <div className="site-shell">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Loan process timeline</p>
            <h2 className="section-title text-white">A clean route from inquiry to action.</h2>
            <p className="mt-6 text-lg leading-8 text-white/68">
              Every file needs a system. Shayona’s process makes funding, subsidy, and compliance decisions easier to understand and easier to move.
            </p>
          </div>
          <div className="timeline">
            {process.map((item) => (
              <article className="timeline-card" key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Statistics() {
  return (
    <section className="stats-section">
      <div className="site-shell">
        <div className="stats-panel">
          <div>
            <p className="eyebrow">Uncovering the dynamics of our industry</p>
            <h2>Numbers that speak for trust.</h2>
          </div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section-pad bg-[#f8f6ef]">
      <div className="site-shell">
        <div className="section-head mx-auto max-w-3xl text-center">
          <p className="eyebrow">Real voices, real results</p>
          <h2>Testimonial spotlight</h2>
          <span>Client trust is built through consistent advisory, clean communication, and reliable follow-through.</span>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="flex gap-1 text-[#d8a128]">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={17} fill="currentColor" />
                ))}
              </div>
              <p>"{item.quote}"</p>
              <div className="testimonial-author">
                <img src="/brand/shayona-mark.png" alt="" />
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.company}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Questions before your first consultation?</h2>
          <p className="mt-6 text-lg leading-8 text-[#526079]">
            Clear answers help visitors take the next step faster. Here are the most common starting points.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                <HelpCircle size={20} />
                {question}
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogPreview() {
  return (
    <section className="section-pad blog-bg">
      <div className="site-shell">
        <div className="section-head max-w-3xl">
          <p className="eyebrow">Insights</p>
          <h2>Finance notes for growing businesses.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.title}>
              <span>{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <a href="#contact">
                Discuss this <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact-section section-pad">
      <div className="site-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="eyebrow">Schedule a consultation</p>
          <h2 className="section-title text-white">Take the first step with Shayona Finserve.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Send a message or call the advisory desk for loans, subsidies, GST, accounting, audit, and finance consulting.
          </p>
        </div>
        <div className="lead-card">
          <div className="lead-form">
            <input placeholder="Your name" aria-label="Your name" />
            <input placeholder="Email address" aria-label="Email address" />
            <textarea placeholder="Write message" aria-label="Write message" />
            <a className="btn btn-gold" href="mailto:admin@shayonafinserve.com">
              Send a message <Mail size={18} />
            </a>
          </div>
          <div className="lead-details">
            <ContactLine icon={Phone} label="Call" value="+91 88665 77663" href="tel:+918866577663" />
            <ContactLine icon={Mail} label="Email" value="admin@shayonafinserve.com" href="mailto:admin@shayonafinserve.com" />
            <ContactLine
              icon={MapPin}
              label="Office"
              value="516 & 517, Sahitya Arcade, Opp Shelby Hospital, Haridarshan Cross Road, Naroda, Ahmedabad - 382 330"
            />
          </div>
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
      <Icon size={20} />
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
    <footer className="footer">
      <div className="site-shell">
        <div className="footer-grid">
          <div>
            <img className="h-12 w-auto" src="/brand/shayona-logo.png" alt="Shayona Finserve" />
            <p>Your financial compass guiding you through loans, taxes, and beyond.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#services">Services</a>
            <a href="#why">About</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h3>Services</h3>
            <a href="#services">Loan advisory</a>
            <a href="#services">GST and accounting</a>
            <a href="#services">Audit services</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="mailto:admin@shayonafinserve.com">admin@shayonafinserve.com</a>
            <a href="tel:+918866577663">+91 88665 77663</a>
          </div>
        </div>
        <div className="footer-bottom">Copyright 2026 Shayona Finserve. Premium homepage redesign.</div>
      </div>
    </footer>
  )
}

function FloatingActions() {
  return (
    <>
      <a className="floating-inquiry" href="#contact" aria-label="Open inquiry section">
        <MessageCircle size={22} />
      </a>
      <div className="mobile-sticky-cta">
        <a href="tel:+918866577663">
          <Phone size={18} />
          Call now
        </a>
        <a href="#contact">
          Inquiry <ArrowRight size={17} />
        </a>
      </div>
    </>
  )
}

createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
