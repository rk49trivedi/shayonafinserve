import React from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Calculator,
  ClipboardCheck,
  Factory,
  HandCoins,
  Home,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users2,
  WalletCards,
} from 'lucide-react'
import './style.css'

const navItems = ['Services', 'Advantage', 'Process', 'Testimonials', 'Contact']

const partners = [
  { name: 'Prime Hospital', logo: '/partners/prime.png' },
  { name: 'Sun Pharma', logo: '/partners/sunpharma.png' },
  { name: 'Tata Motors', logo: '/partners/tata-motors.png' },
  { name: 'Bombay Dyeing', logo: '/partners/bombay.png' },
  { name: 'Aurita', logo: '/partners/aurita.png' },
  { name: 'GTPL', logo: '/partners/gtpl.png' },
]

const services = [
  ['PMEGP Loans', Landmark, 'Project finance and subsidy-linked advisory for micro-enterprises.', 'large'],
  ['MSME Loans', Factory, 'Capital support for manufacturing and service businesses ready to scale.', ''],
  ['Mudra Loans', HandCoins, 'Funding assistance for micro-units under Pradhan Mantri Mudra Yojana.', ''],
  ['Home Loans', Home, 'Secured home loan guidance designed around lender readiness.', ''],
  ['Business Loans', BriefcaseBusiness, 'Working capital and expansion finance for founders and owners.', 'wide'],
  ['Personal Loans', WalletCards, 'Flexible finance support for personal goals and planned expenses.', ''],
  ['Accounting', Calculator, 'Professional accounting that keeps business numbers decision-ready.', ''],
  ['GST Services', ReceiptText, 'GST filing, advisory, reconciliation, and compliance support.', ''],
  ['Audit Services', ClipboardCheck, 'Audit-ready records and assurance for reliable financial statements.', ''],
] as const

const stats = [
  ['1000+', 'Satisfied clients'],
  ['10+', 'Years expertise'],
  ['3000+', 'Projects completed'],
  ['86%', 'Consulting success'],
]

const expertise: Array<{ title: string; text: string; icon: React.ElementType }> = [
  {
    title: 'Strategic Capital Solutions',
    text: 'Personalized capital guidance for machinery loans, project finance, and business funding.',
    icon: Landmark,
  },
  {
    title: 'Financial Optimization',
    text: 'Accounting, GST, audit, and reporting support to keep operations clear and compliant.',
    icon: Calculator,
  },
  {
    title: 'Funding Access',
    text: 'Tailored options that make it easier for SMEs to secure the capital they need.',
    icon: TrendingUp,
  },
]

const process = [
  ['01', 'Financial discovery', 'Understand business goals, finance needs, documents, and eligibility.'],
  ['02', 'Strategy mapping', 'Match the right loan, subsidy, accounting, GST, or audit pathway.'],
  ['03', 'File architecture', 'Prepare clean, lender-ready and compliance-ready documentation.'],
  ['04', 'Guided execution', 'Support the process from submission to decision with practical clarity.'],
]

const testimonials = [
  {
    quote:
      'Their dedicated team assisted us in navigating complex financial landscapes, providing valuable insights and solutions aligned with our requirements.',
    name: 'Dr. Chirag Patel',
    company: 'Prime Hospital',
  },
  {
    quote:
      'Their expertise in handling diverse financial aspects, from loans to bookkeeping, has been instrumental in the success of our operations.',
    name: 'Nichiket Prajapati',
    company: 'N Rivival PHARMA Company',
  },
  {
    quote:
      'Their comprehensive suite of services, including MSME support and bookkeeping, significantly streamlined our financial processes.',
    name: 'Pathik Sheth',
    company: 'Snehraj Notebooks',
  },
]

const team = [
  ['Akhil Bhuva', 'Legal & Technical'],
  ['Jayesh Gohil', 'Relationship Manager'],
  ['Disha Nayi', 'Accounting & GST'],
]

function App() {
  return (
    <main className="dark-site">
      <Header />
      <Hero />
      <Partners />
      <Advantage />
      <Services />
      <Expertise />
      <Process />
      <Testimonials />
      <TeamFooter />
      <FloatingContact />
    </main>
  )
}

function Header() {
  return (
    <header className="glass-nav">
      <div className="shell nav-inner">
        <a href="#home" className="brand" aria-label="Shayona Finserve home">
          <img src="/brand/shayona-logo-white.png" alt="Shayona Finserve" />
        </a>
        <nav>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="nav-call" href="tel:+918866577663">
          <Phone size={16} />
          +91 88665 77663
        </a>
        <button className="menu-button" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="mesh-bg" />
      <div className="tactical-lines" />
      <div className="corner crosshair-one" />
      <div className="corner crosshair-two" />
      <div className="shell hero-grid">
        <motion.div
          initial={{ y: 28 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="hero-copy"
        >
          <div className="signal-chip">
            <Sparkles size={17} />
            From Insight to Action
          </div>
          <h1>
            <span>Your Catalyst for Success: </span>
            <span>Igniting Growth </span>
            <span>through Financial </span>
            <span>Consulting</span>
          </h1>
          <p>
            Shayona Finserve is a financial consultancy specializing in business loans, subsidies, accounting, GST, audit, and strategic financial guidance.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#contact">
              Schedule Consultation <ArrowRight size={19} />
            </a>
            <a className="secondary-cta" href="#services">
              Explore Services
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.96, y: 28 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          className="hero-orbital"
        >
          <div className="orbital-ring" />
          <div className="analytics-card">
            <div className="analytics-top">
              <span>Capital readiness</span>
              <BadgeCheck size={20} />
            </div>
            <div className="analytics-bars">
              {[42, 74, 58, 96, 68, 88].map((height, index) => (
                <i key={index} style={{ height: `${height}px`, animationDelay: `${index * 100}ms` }} />
              ))}
            </div>
            <div className="analytics-grid">
              <span>Loans</span>
              <span>Subsidy</span>
              <span>GST</span>
            </div>
          </div>
          <div className="floating-metric metric-a">
            <ShieldCheck size={20} />
            Approval-ready files
          </div>
          <div className="floating-metric metric-b">
            <TrendingUp size={20} />
            1000+ clients served
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 24 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="shell contact-bar"
      >
        <span>
          <Phone size={18} /> +91 88665 77663
        </span>
        <span>
          <Mail size={18} /> admin@shayonafinserve.com
        </span>
        <a href="#contact">
          Schedule Consultation <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  )
}

function Partners() {
  return (
    <section className="partners-section">
      <div className="shell">
        <p className="section-kicker">Trusted by businesses and institutions</p>
        <div className="partner-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div className="partner-card" key={`${partner.name}-${index}`}>
              <img src={partner.logo} alt={partner.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Advantage() {
  return (
    <section id="advantage" className="section advantage">
      <div className="shell split-layout">
        <div>
          <p className="section-kicker">The Shayona Advantage</p>
          <h2>Over a decade of financial expertise, redesigned for modern businesses.</h2>
          <p>
            Shayona Finserve has been a driving force in the realm of loans and subsidies for over a decade. With a team of Chartered Accountants, Cost and Works Accountants, MBAs, Engineers, and Lawyers, we have established a foundation of trust and success.
          </p>
        </div>
        <div className="advantage-visual">
          <div className="data-card main-data">
            <strong>1000+</strong>
            <span>Satisfied clients</span>
            <div className="data-line" />
          </div>
          <div className="data-card mini-data">
            <strong>10+</strong>
            <span>Years expertise</span>
          </div>
          <div className="data-card mini-data second">
            <strong>360</strong>
            <span>Finance support</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section services">
      <div className="shell">
        <div className="section-heading">
          <p className="section-kicker">Services Architecture</p>
          <h2>Business goals with expert consulting and finance services.</h2>
        </div>
        <div className="bento-grid">
          {services.map(([title, Icon, text, size]) => (
            <article className={`bento-card ${size}`} key={title}>
              <div className="service-line-art">
                <Icon size={34} />
                <span />
                <i />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href="#contact">
                Start inquiry <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Expertise() {
  return (
    <section className="section expertise">
      <div className="shell">
        <div className="section-heading centered">
          <p className="section-kicker">Beyond Numbers</p>
          <h2>Financial expertise that empowers your business growth.</h2>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => {
            const Icon = item.icon
            return (
            <article className="expertise-card" key={item.title}>
              <div className="line-icon">
                <Icon size={28} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="section process">
      <div className="shell">
        <div className="section-heading">
          <p className="section-kicker">Loan Process Timeline</p>
          <h2>Precision-led execution from first call to financial decision.</h2>
        </div>
        <div className="process-grid">
          {process.map(([step, title, text]) => (
            <article className="process-card" key={step}>
              <span>{step}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="stats-row">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="shell">
        <div className="section-heading centered">
          <p className="section-kicker">Social Proof</p>
          <h2>Testimonial Spotlight</h2>
        </div>
        <div className="testimonial-track">
          {testimonials.map((item, index) => (
            <article className={`testimonial-card ${index === 1 ? 'active' : ''}`} key={item.name}>
              <div className="stars">
                {[0, 1, 2, 3, 4].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p>"{item.quote}"</p>
              <h3>{item.name}</h3>
              <span>{item.company}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeamFooter() {
  return (
    <>
      <section className="section team-section">
        <div className="shell split-layout">
          <div>
            <p className="section-kicker">Team Shayona</p>
            <h2>Meet the people who make it happen.</h2>
            <p>
              Passionate financial experts and dedicated professionals committed to empowering businesses to achieve their full potential.
            </p>
          </div>
          <div className="team-grid">
            {team.map(([name, role]) => (
              <article className="team-card" key={name}>
                <div className="avatar-ring">
                  <Users2 size={32} />
                </div>
                <h3>{name}</h3>
                <span>{role}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-grid">
          <div>
            <p className="section-kicker">Experience the difference</p>
            <h2>Schedule a consultation with our team now.</h2>
            <p>Empower your financial decisions with expert guidance from Shayona Finserve.</p>
          </div>
          <div className="contact-card">
            <ContactRow icon={Phone} label="Call Us" value="+91 88665 77663" href="tel:+918866577663" />
            <ContactRow icon={Mail} label="Email Us" value="admin@shayonafinserve.com" href="mailto:admin@shayonafinserve.com" />
            <ContactRow icon={MapPin} label="Visit Us" value="516 & 517, Sahitya Arcade, Opp Shelby Hospital, Haridarshan Cross Road, Naroda, Ahmedabad - 382 330" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-grid">
          <div>
            <img src="/brand/shayona-logo-white.png" alt="Shayona Finserve" />
            <p>Your Financial Compass Guiding You Through Loans, Taxes, and Beyond.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#services">Services</a>
            <a href="#advantage">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="mailto:admin@shayonafinserve.com">admin@shayonafinserve.com</a>
            <a href="tel:+918866577663">+91 88665 77663</a>
          </div>
          <form>
            <h3>Newsletter</h3>
            <div>
              <input placeholder="Email address" aria-label="Email address" />
              <button type="button">Join</button>
            </div>
          </form>
        </div>
      </footer>
    </>
  )
}

type ContactRowProps = {
  icon: React.ElementType
  label: string
  value: string
  href?: string
}

function ContactRow({ icon: Icon, label, value, href }: ContactRowProps) {
  const content = (
    <div className="contact-row">
      <Icon size={20} />
      <span>
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
    </div>
  )

  return href ? <a href={href}>{content}</a> : content
}

function FloatingContact() {
  return (
    <a className="floating-contact" href="#contact" aria-label="Schedule consultation">
      <Phone size={22} />
    </a>
  )
}

createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
