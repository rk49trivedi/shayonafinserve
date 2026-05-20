import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  HandCoins,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users2,
} from 'lucide-react'
import './style.css'

const services = [
  {
    title: 'PMEGP Loans',
    image: '/services/pmegp-loans.png',
    icon: Landmark,
    text: 'Guidance for government-backed project finance, eligibility, documentation, and subsidy-linked planning.',
  },
  {
    title: 'MSME Loans',
    image: '/services/msme-loan.png',
    icon: Building2,
    text: 'Structured capital support for growing manufacturers, traders, and service businesses.',
  },
  {
    title: 'Mudra Loans',
    image: '/services/mudra-loan.png',
    icon: HandCoins,
    text: 'Small business financing support with clear file preparation and practical advisory.',
  },
  {
    title: 'Home Loans',
    image: '/services/home-loan.png',
    icon: Banknote,
    text: 'End-to-end loan assistance designed around affordability, documentation, and approval readiness.',
  },
  {
    title: 'Business Loans',
    image: '/services/business-loan.png',
    icon: BarChart3,
    text: 'Working capital and expansion finance for ambitious entrepreneurs and established teams.',
  },
  {
    title: 'Accounting, GST & Audit',
    image: '/services/accounting.png',
    icon: Calculator,
    text: 'Reliable compliance, bookkeeping, GST, audit support, and financial clarity for daily operations.',
  },
]

const proof = [
  { value: '10+', label: 'Years of advisory experience' },
  { value: '1000+', label: 'Satisfied business clients' },
  { value: '9', label: 'Core finance and tax services' },
  { value: '360°', label: 'Loan, subsidy and compliance support' },
]

const partners = [
  { name: 'Prime Hospital', logo: '/partners/prime.png' },
  { name: 'Sun Pharma', logo: '/partners/sunpharma.png' },
  { name: 'Tata Motors', logo: '/partners/tata-motors.png' },
  { name: 'Bombay Dyeing', logo: '/partners/bombay.png' },
  { name: 'Aurita', logo: '/partners/aurita.png' },
  { name: 'GTPL', logo: '/partners/gtpl.png' },
]

const testimonials = [
  {
    quote:
      'Their team helped us navigate complex financial requirements with practical insights and a professional approach.',
    name: 'Dr. Chirag Patel',
    company: 'Prime Hospital',
  },
  {
    quote:
      'Shayona Finserve has been instrumental across loans and bookkeeping. Their personalized guidance sets them apart.',
    name: 'Nichiket Prajapati',
    company: 'N Rivival Pharma Company',
  },
  {
    quote:
      'Their MSME, GST, and financial support streamlined our processes and gave us a trusted long-term partner.',
    name: 'Pathik Sheth',
    company: 'Snehraj Notebooks',
  },
]

const projects = ['Prime Hospital', 'Sunflower Hospital', 'Manyur Fashion', 'Bombay Dyeing', 'Sun Pharma', 'Tata Motors']

const team = [
  { name: 'Akhil Bhuva', role: 'Legal & Technical' },
  { name: 'Jayesh Gohil', role: 'Relationship Manager' },
  { name: 'Disha Nayi', role: 'Accounting & GST' },
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfaf6] text-slate-950">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/40 bg-white/85 backdrop-blur-xl">
        <div className="page-shell flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="Shayona Finserve home">
            <img className="h-12 w-auto" src="/brand/shayona-logo.png" alt="Shayona Finserve" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#services">Services</a>
            <a href="#advantage">Advantage</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a className="text-sm font-bold text-[#07007a]" href="tel:+918866577663">
              +91 88665 77663
            </a>
            <a className="gold-button" href="#contact">
              Consult Now <ArrowRight size={17} />
            </a>
          </div>
          <button className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-[#07007a] lg:hidden" aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </header>

      <section id="home" className="relative pt-28 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,161,40,0.22),transparent_28%),linear-gradient(135deg,#fffaf0_0%,#ffffff_45%,#eef0ff_100%)]" />
        <div className="absolute right-0 top-28 h-72 w-72 rounded-full border border-[#d8a128]/25 opacity-60 lg:h-[34rem] lg:w-[34rem]" />
        <div className="page-shell relative grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <div className="min-w-0">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d8a128]/30 bg-white/80 px-4 py-2 text-sm font-bold text-[#07007a] shadow-sm">
              <Sparkles size={17} className="text-[#d8a128]" />
              Your vision, our finance expertise
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-normal text-[#07007a] sm:text-5xl md:text-7xl">
              Funding clarity for businesses ready to grow.
            </h1>
            <p className="mt-7 max-w-full break-words text-lg leading-8 text-slate-650 md:max-w-2xl">
              Shayona Finserve brings loans, subsidies, taxation, accounting, GST, and audit guidance under one sharp advisory desk for entrepreneurs and established companies.
            </p>
            <div className="mt-9 flex min-w-0 flex-col gap-4 sm:flex-row">
              <a className="gold-button h-14 w-full px-7 text-base sm:w-auto" href="#services">
                Explore Services <ChevronRight size={19} />
              </a>
              <a className="outline-button h-14 w-full min-w-0 px-4 text-sm sm:w-auto sm:px-7 sm:text-base" href="mailto:admin@shayonafinserve.com">
                <Mail size={19} /> admin@shayonafinserve.com
              </a>
            </div>
            <div className="mt-11 grid max-w-full grid-cols-2 gap-4 sm:grid-cols-4 md:max-w-2xl">
              {proof.map((item) => (
                <div key={item.label} className="border-l-2 border-[#d8a128] pl-4">
                  <p className="text-3xl font-black text-[#07007a]">{item.value}</p>
                  <p className="mt-1 text-sm leading-5 text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="hero-frame">
              <img className="h-full w-full object-cover" src="/services/bannerimage.png" alt="Financial consulting team planning business growth" />
              <div className="absolute inset-x-5 bottom-5 rounded-md bg-white/92 p-5 shadow-2xl backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase text-[#d8a128]">Shayona Advantage</p>
                    <h2 className="mt-1 text-2xl font-black text-[#07007a]">From insight to action.</h2>
                  </div>
                  <img className="h-12 w-12" src="/brand/shayona-mark.png" alt="" />
                </div>
                <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm font-bold text-slate-700">
                  <span className="rounded bg-[#07007a]/7 py-3">Loans</span>
                  <span className="rounded bg-[#d8a128]/15 py-3">Subsidy</span>
                  <span className="rounded bg-[#07007a]/7 py-3">Tax</span>
                </div>
              </div>
            </div>
            <div className="floating-card left-0 top-12 -translate-x-3 lg:-translate-x-10">
              <ShieldCheck className="text-[#d8a128]" size={22} />
              <span>Trusted file preparation</span>
            </div>
            <div className="floating-card bottom-20 right-0 translate-x-2 lg:translate-x-10">
              <BadgeCheck className="text-[#d8a128]" size={22} />
              <span>Client-first advisory</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-8">
        <div className="page-shell flex flex-wrap items-center justify-center gap-x-12 gap-y-7">
          {partners.map((partner) => (
            <img key={partner.name} className="max-h-12 max-w-36 object-contain grayscale transition hover:grayscale-0" src={partner.logo} alt={partner.name} />
          ))}
        </div>
      </section>

      <section id="advantage" className="relative bg-[#07007a] py-20 text-white lg:py-28">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="page-shell relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Get to know us</p>
            <h2 className="section-title text-white">Discover the Shayona Advantage</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              A decade of financial expertise, a young multidisciplinary team, and a reputation built on customer satisfaction, quality work, and practical guidance.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Strategic capital solutions', 'Machinery loans, project finance, and business funding options aligned to growth goals.'],
              ['Government subsidy expertise', 'State and central subsidy guidance with careful documentation and process clarity.'],
              ['Financial optimization', 'Accounting, GST, and audit support that makes the numbers decision-ready.'],
              ['Risk-aware consulting', 'Guidance from finance, legal, technical, engineering, and management professionals.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-md border border-white/12 bg-white/8 p-6 backdrop-blur">
                <CheckCircle2 className="mb-5 text-[#d8a128]" size={27} />
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/68">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20 lg:py-28">
        <div className="page-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Bridging the gap</p>
            <h2 className="section-title">Connecting business goals with expert finance services</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="service-card group">
                  <div className="relative h-48 overflow-hidden rounded-md bg-slate-100">
                    <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={service.image} alt={service.title} />
                    <div className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded bg-white text-[#07007a] shadow-lg">
                      <Icon size={23} />
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-[#07007a]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                  <a className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#d8a128]" href="#contact">
                    Start the conversation <ArrowRight size={17} />
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f0e7] py-20 lg:py-28">
        <div className="page-shell grid items-center gap-12 lg:grid-cols-2">
          <div className="relative grid grid-cols-2 gap-4">
            <img className="mt-10 h-80 w-full rounded-md object-cover shadow-xl" src="/services/about-one-img-1.jpg" alt="Shayona consultation discussion" />
            <img className="h-80 w-full rounded-md object-cover shadow-xl" src="/services/about-one-img-2.jpg" alt="Financial advisory planning" />
          </div>
          <div>
            <p className="eyebrow">Beyond numbers</p>
            <h2 className="section-title">Financial expertise that empowers business growth</h2>
            <p className="mt-6 text-lg leading-8 text-slate-650">
              Shayona Consultancy goes beyond crunching numbers. The team helps entrepreneurs unlock capital, manage compliance, and approach decisions with confidence.
            </p>
            <div className="mt-8 space-y-4">
              {['Strategic Capital Solutions', 'Financial Optimization', 'Risk Management'].map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-md bg-white p-4 shadow-sm">
                  <Target className="text-[#d8a128]" size={22} />
                  <span className="font-black text-[#07007a]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white py-20 lg:py-28">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">From vision to reality</p>
              <h2 className="section-title">Completed projects that inspire transformation</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project} className="rounded-md border border-slate-200 p-5 transition hover:border-[#d8a128] hover:shadow-lg">
                  <FileCheck2 className="mb-5 text-[#d8a128]" size={26} />
                  <p className="text-sm font-bold uppercase text-slate-400">Finance</p>
                  <h3 className="mt-1 text-xl font-black text-[#07007a]">{project}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-md bg-[#fbfaf6] p-7">
                <p className="text-lg leading-8 text-slate-700">"{item.quote}"</p>
                <div className="mt-7 border-t border-slate-200 pt-5">
                  <h3 className="font-black text-[#07007a]">{item.name}</h3>
                  <p className="text-sm font-semibold text-slate-500">{item.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#07007a] py-20 text-white">
        <div className="page-shell">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Team Shayona</p>
              <h2 className="section-title text-white">People who make it happen</h2>
            </div>
            <p className="max-w-2xl leading-7 text-white/70">
              Passionate financial experts and dedicated professionals committed to helping businesses reach their full potential.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-md border border-white/12 bg-white/8 p-7">
                <div className="mb-7 grid h-16 w-16 place-items-center rounded-full bg-[#d8a128] text-[#07007a]">
                  <Users2 size={28} />
                </div>
                <h3 className="text-2xl font-black">{member.name}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-normal text-white/62">{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative bg-[#d8a128] py-20 lg:py-24">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#07007a]/70">Experience the difference</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight text-[#07007a] md:text-6xl">
              Schedule a consultation with Shayona Finserve.
            </h2>
          </div>
          <div className="rounded-md bg-white p-6 shadow-2xl">
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

      <footer className="bg-slate-950 py-10 text-white">
        <div className="page-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <img className="h-12 w-auto" src="/brand/shayona-logo.png" alt="Shayona Finserve" />
            <p className="max-w-md text-sm leading-6 text-white/58">Your financial compass guiding you through loans, taxes, and beyond.</p>
          </div>
          <p className="text-sm text-white/45">© 2026 Shayona Finserve. Modern redesign concept.</p>
        </div>
      </footer>
    </main>
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
    <div className="flex gap-4 border-b border-slate-100 py-5 last:border-b-0">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded bg-[#07007a] text-white">
        <Icon size={22} />
      </div>
      <div>
        <p className="text-sm font-black uppercase text-[#d8a128]">{label}</p>
        <p className="mt-1 text-lg font-black leading-7 text-[#07007a]">{value}</p>
      </div>
    </div>
  )

  return href ? (
    <a className="block transition hover:opacity-80" href={href}>
      {content}
    </a>
  ) : (
    content
  )
}

createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
