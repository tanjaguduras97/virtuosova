import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { ChevronDown, Instagram, Linkedin, Mail, Clock as ClockIcon } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import {
  FAQS,
  LogoSvg,
  ONE_TEAM_POINTS,
  PRICING_TIERS,
  SERVICE_GROUPS,
  SPECIALISTS,
  TEAM_LEAD,
  TESTIMONIALS,
  WHO_WE_HELP,
} from '../data/site-content'
import { useReveal } from '../hooks/useReveal'

// [PLACEHOLDER: Calendly link]
const CALENDLY_URL = '[PLACEHOLDER: Calendly link]'

const HOME_TITLE = 'Virtuoso | Virtual Assistant Agency — One Team for Marketing, Operations & Support'
const HOME_DESCRIPTION =
  'Vetted Europe-based specialists for social media, content, websites, executive support and automation — one team, one point of contact.'
const HOME_URL = 'https://virtuosovirtualassistants.com/'
// [PLACEHOLDER: swap for the cropped 1200×630 hero photo (virtuoso.png) once it's in /assets/brand/]
const HOME_IMAGE = 'https://virtuosovirtualassistants.com/specialist-1.png'

export const Route = createFileRoute('/')({
  component: VirtuosoHome,
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: 'description', content: HOME_DESCRIPTION },
      { property: 'og:title', content: HOME_TITLE },
      { property: 'og:description', content: HOME_DESCRIPTION },
      { property: 'og:url', content: HOME_URL },
      { property: 'og:image', content: HOME_IMAGE },
      { name: 'twitter:title', content: HOME_TITLE },
      { name: 'twitter:description', content: HOME_DESCRIPTION },
      { name: 'twitter:image', content: HOME_IMAGE },
    ],
    links: [{ rel: 'canonical', href: HOME_URL }],
  }),
})

const NAV_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#who-we-help', label: 'Who we help' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

function useScrollNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="faq-list">
      {FAQS.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.q} className={`faq-item${open ? ' open' : ''}`}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={open}
              aria-controls={`faq-a-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span>{item.q}</span>
              <ChevronDown className="faq-chevron" size={20} strokeWidth={1.75} aria-hidden />
            </button>
            {open && (
              <p className="faq-a" id={`faq-a-${i}`}>
                {item.a}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}

function VirtuosoHome() {
  useReveal()
  const scrolled = useScrollNav()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700&family=Instrument+Sans:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <nav className={`v-nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#" className="logo-wrap">
          <LogoSvg />
          <span className="logo-name">
            Virtu<span>o</span>so
          </span>
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li>
            <a href={CALENDLY_URL} className="nav-cta" target="_blank" rel="noopener noreferrer">
              Book a free call
            </a>
          </li>
        </ul>
        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span className={menuOpen ? 'hb-open' : ''} />
          <span className={menuOpen ? 'hb-open' : ''} />
          <span className={menuOpen ? 'hb-open' : ''} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)}>
          <nav className="mobile-drawer" onClick={e => e.stopPropagation()}>
            <div className="mobile-drawer-top">
              <a href="#" className="logo-wrap" onClick={() => setMenuOpen(false)}>
                <LogoSvg />
                <span className="logo-name">Virtu<span>o</span>so</span>
              </a>
              <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
            </div>
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="mobile-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a
              href={CALENDLY_URL}
              className="btn-terra mobile-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Book a free call
            </a>
          </nav>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-kicker">Virtual assistant agency</div>
          <h1 className="hero-title">
            One team.<br />Every part of your growth.
          </h1>
          <p className="hero-sub">
            Marketing, operations, systems and support — handled by vetted
            specialists who work as your team, not as eight separate
            freelancers. One point of contact. Zero juggling.
          </p>
          <div className="hero-actions">
            <a href={CALENDLY_URL} className="btn-terra" target="_blank" rel="noopener noreferrer">Book a free call</a>
            <a href="#services" className="btn-outline">See what we do</a>
          </div>
          <div className="hero-trust">
            <span>Since 2022</span>
            <span>CET — we cover your morning</span>
            <span>Vetted specialists only</span>
          </div>
        </div>
        <div className="hero-right">
          {/* [PLACEHOLDER: hero photo — crop the desk shot in virtuoso.png (trim the empty right edge) and bleed it to the edge here] */}
          <div className="hero-visual">
            <img
              src="/specialist-1.png"
              alt="[PLACEHOLDER: Virtuoso desk photo]"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="who" id="who-we-help">
        <div className="sh reveal">
          <div>
            <h2 className="sec-title">Built for businesses that have outgrown doing it all.</h2>
          </div>
          <p className="sd">
            We work with founders and small teams who are the bottleneck in their own business.
          </p>
        </div>
        <div className="who-grid reveal">
          {WHO_WE_HELP.map((w) => (
            <div key={w.title} className="who-item">
              <div className="who-icon">{w.icon}</div>
              <div className="who-title">{w.title}</div>
              <p className="who-desc">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="sh reveal">
          <div>
            <h2 className="sec-title">What we take off your plate.</h2>
          </div>
          <p className="sd">
            Eight services, one team. Pick one or combine them — the same people stay with you as you grow.
          </p>
        </div>
        <div className="svc-groups">
          {SERVICE_GROUPS.map((group) => (
            <div key={group.title} className="svc-group reveal">
              <h3 className="svc-group-title">{group.title}</h3>
              <div className="svc-list">
                {group.items.map((svc) => (
                  <div key={svc.name} className="svc-row">
                    <div className="svc-row-icon">{svc.icon}</div>
                    <div>
                      <div className="svc-row-name">{svc.name}</div>
                      <p className="svc-row-desc">{svc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ONE TEAM, NOT EIGHT FREELANCERS */}
      <section className="why" id="one-team">
        <div className="why-left reveal">
          <h2 className="sec-title">
            Why one team beats a stack of freelancers.
          </h2>
          <p>
            Freelancers come and go, and every new one starts from zero. A Virtuoso team
            keeps your context, your standards, and your history — no matter how many
            services you add.
          </p>
        </div>
        <div className="why-list reveal">
          {ONE_TEAM_POINTS.map((p) => (
            <div key={p.title} className="wr">
              <div className="wi">{p.icon}</div>
              <div className="wt">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="team" id="team">
        <div className="sh reveal">
          <div>
            <h2 className="sec-title">The people behind your account.</h2>
          </div>
        </div>
        <div className="team-lead reveal">
          <div className="team-lead-photo">
            <img src={TEAM_LEAD.photo} alt={TEAM_LEAD.name} loading="lazy" />
          </div>
          <div>
            <div className="team-lead-name">{TEAM_LEAD.name} — {TEAM_LEAD.role}</div>
            <p className="team-lead-bio">{TEAM_LEAD.bio}</p>
          </div>
        </div>
        <div className="team-grid reveal">
          {SPECIALISTS.map((s, i) => (
            <div key={i} className="team-card">
              <div className="team-card-photo">
                <img src={s.photo} alt={s.name} loading="lazy" />
              </div>
              <div className="team-card-name">{s.name} — {s.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT STORIES */}
      <section className="testimonials">
        <div className="sh reveal">
          <div>
            <h2 className="sec-title">What clients say.</h2>
          </div>
        </div>
        <div className="t-grid reveal">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="t-card-wrap t-active">
              <div className="t-card">
                <div className="t-body">
                  <div className="t-top">
                    <div className="t-av-lg">
                      <img src={t.photo} alt={t.name} loading="lazy" style={t.name === 'Mary Hunt' ? { objectPosition: 'center 30%' } : undefined} />
                    </div>
                    <div>
                      <div className="t-name">{t.name}</div>
                      <div className="t-role">{t.role}</div>
                    </div>
                  </div>
                  <div className="t-stars">★★★★★</div>
                  <p className="t-text">{t.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how-it-works">
        <div className="sh reveal">
          <div>
            <h2 className="sec-title on-dark">
              From first call to fully supported.
            </h2>
          </div>
          <p className="sd on-dark">
            A smooth, fast process — so you're not waiting to get the help you need.
          </p>
        </div>
        <div className="steps">
          {[
            { n: '01', t: 'Discovery Call', d: 'We learn about your business, goals, and which services would make the biggest impact.' },
            { n: '02', t: 'Custom Proposal', d: 'We put together a tailored plan with the right team members and service mix for your needs.' },
            { n: '03', t: 'Onboarding & Setup', d: 'We align on tools, workflows, and communication preferences so everything runs from day one.' },
            { n: '04', t: 'Ongoing Execution', d: 'Your Virtuoso team delivers consistently — with regular check-ins and room to scale anytime.' },
          ].map((s) => (
            <div key={s.n} className="step reveal">
              <div className="step-n">{s.n}</div>
              <div className="step-title">{s.t}</div>
              <p className="step-text">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="how-cta">
          <a href={CALENDLY_URL} className="btn-terra" target="_blank" rel="noopener noreferrer">Book a free call</a>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-tiers" id="pricing">
        <div className="sh reveal">
          <div>
            <h2 className="sec-title">Clear pricing, no surprises.</h2>
          </div>
          <p className="sd">
            A fraction of the cost of hiring in-house, with the quality of a dedicated specialist.
            Every quote is confirmed before anything starts.
          </p>
        </div>
        <div className="why-list reveal">
          {PRICING_TIERS.map((tier) => (
            <div key={tier.title} className="wr">
              <div className="wi">{tier.icon}</div>
              <div className="wt">
                <h4>{tier.title} — {tier.price}</h4>
                <p>{tier.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="pr-checks reveal">
          {['No lock-in contracts', 'Scale up or down anytime', 'Full quote before you commit'].map((t) => (
            <div key={t} className="pr-check-row">
              <div className="av-dot" />
              <span>{t}</span>
            </div>
          ))}
        </div>
        <a href="#contact" className="btn-terra" style={{ marginTop: '2rem', display: 'inline-block' }}>Get a custom quote</a>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="sh reveal">
          <div>
            <h2 className="sec-title">Questions people ask before booking a call.</h2>
          </div>
        </div>
        <FaqAccordion />
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-left reveal">
          <h2 className="sec-title">
            Tell us what's holding you back.
          </h2>
          <p>
            Book a free 15-minute call, or send a short note about what you need — we'll come back
            with a tailored proposal.
          </p>
          <a href={CALENDLY_URL} className="btn-terra" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginBottom: '2rem' }}>
            Book a free 15-minute call
          </a>
          <div className="c-info">
            <div className="ci">
              <div className="ci-icon"><Mail size={18} strokeWidth={1.75} /></div>
              <div>
                <span className="ci-lbl">Email</span>
                <span className="ci-val">tanja@virtuosovirtualassistants.com</span>
              </div>
            </div>
            <div className="ci">
              <div className="ci-icon"><ClockIcon size={18} strokeWidth={1.75} /></div>
              <div>
                <span className="ci-lbl">Response Time</span>
                <span className="ci-val">Within 1 business day</span>
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <a href="#" className="logo-wrap">
            <LogoSvg color="#b85070" />
            <span className="logo-name" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Virtu<span style={{ color: '#b85070' }}>o</span>so
            </span>
          </a>
          <p className="f-tagline">
            A team of vetted specialists helping entrepreneurs and small teams grow — matched to
            exactly what they need.
          </p>
          <div className="f-location">
            <span>tanja@virtuosovirtualassistants.com</span>
            <span>Banja Luka, Bosnia &amp; Herzegovina</span>
            <span>CET</span>
          </div>
          <div className="f-social">
            <a href="https://www.instagram.com/virtuosova_agency/" className="sl" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram size={16} strokeWidth={1.75} />
            </a>
            <a href="https://www.linkedin.com/company/virtuosovirtualassistants" className="sl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} strokeWidth={1.75} />
            </a>
            <a href="https://www.upwork.com/agencies/virtuosovirtualassistants/" className="sl" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
            </a>
          </div>
        </div>
        <div className="fc">
          <h5>Services</h5>
          <ul>
            <li><a href="#services">Project Management</a></li>
            <li><a href="#services">Website Development</a></li>
            <li><a href="#services">Social Media</a></li>
            <li><a href="#services">Content Creation</a></li>
            <li><a href="#services">Executive Support</a></li>
            <li><a href="#services">Automations</a></li>
          </ul>
        </div>
        <div className="fc">
          <h5>Company</h5>
          <ul>
            <li><a href="#who-we-help">Who We Help</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#team">Meet The Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="fc">
          <h5>Legal</h5>
          <ul>
           <a href="/privacy-policy">Privacy Policy</a>
<a href="/terms">Terms of Service</a>
<a href="/terms">Confidentiality</a>
<a href="/cookies">Cookie Policy</a>
          </ul>
        </div>
      </footer>
      <div className="f-bottom">
        <p>© 2026 Virtuoso. All rights reserved.</p>
      </div>
    </>
  )
}
