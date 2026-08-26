import { createFileRoute } from '@tanstack/react-router'
import { ContactForm } from '../components/ContactForm'
import { LogoSvg, MARQUEE_ITEMS, TESTIMONIALS } from '../data/site-content'
import { useReveal } from '../hooks/useReveal'

const LP_TITLE = 'Get a Free VA Quote | Virtuoso Virtual Assistants'
const LP_DESCRIPTION =
  'Tell us what you need help with — social media, admin, content, or more — and get a tailored quote from a vetted Europe-based VA specialist.'
const LP_URL = 'https://virtuosovirtualassistants.com/get-started'

export const Route = createFileRoute('/get-started')({
  component: GetStarted,
  head: () => ({
    meta: [
      { title: LP_TITLE },
      { name: 'description', content: LP_DESCRIPTION },
      // Kept out of search results and site nav on purpose — this page exists only
      // for paid-ad traffic, so it stays message-matched to the ad instead of
      // competing with the homepage for organic rankings.
      { name: 'robots', content: 'noindex, follow' },
      { property: 'og:title', content: LP_TITLE },
      { property: 'og:description', content: LP_DESCRIPTION },
      { property: 'og:url', content: LP_URL },
    ],
    links: [{ rel: 'canonical', href: LP_URL }],
  }),
})

const LP_WHY = [
  { i: '🎯', t: 'Specialists, Not Generalists', d: 'Each service is owned by someone who does it every day — not a jack-of-all-trades.' },
  { i: '⚡', t: 'Fast to Get Started', d: 'No lengthy processes. We onboard quickly so support begins almost immediately.' },
  { i: '🔒', t: 'Trustworthy & Confidential', d: 'NDAs and secure workflows — your information stays safe, always.' },
]

const testimonial = TESTIMONIALS.find((t) => t.name === 'Mary Hunt')!

function GetStarted() {
  useReveal()

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,600;1,9..144,700&family=Outfit:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* NAV — logo only, no site links, single CTA back into this page's own form */}
      <nav className="v-nav">
        <span className="logo-wrap">
          <LogoSvg />
          <span className="logo-name">
            Virtu<span>o</span>so
          </span>
        </span>
        <a href="#contact-form" className="nav-cta">Get My Quote</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-kicker">Virtual Assistant Agency</div>
          <h1 className="hero-title">
            Your Business,<br />
            <em>Fully Supported.</em>
          </h1>
          <p className="hero-sub">
            Get matched with a vetted Europe-based VA specialist — social media,
            content creation, executive support, automation, and more. Tell us
            what's on your plate, get a tailored quote back within 1 business day.
          </p>
          <div className="hero-actions">
            <a href="#contact-form" className="btn-terra">Get My Free Quote</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-card">
            <div className="hc-top">
              <span className="hc-label">Your VA Team</span>
              <span className="hc-badge">Europe-Based</span>
            </div>
            <div className="hc-stats">
              <div className="hcs accent">
                <div className="hcs-n">8+</div>
                <div className="hcs-l">Services</div>
              </div>
              <div className="hcs">
                <div className="hcs-n">98%</div>
                <div className="hcs-l">Satisfaction</div>
              </div>
              <div className="hcs">
                <div className="hcs-n">100+</div>
                <div className="hcs-l">Clients Served</div>
              </div>
              <div className="hcs">
                <div className="hcs-n">Fast</div>
                <div className="hcs-l">Onboarding</div>
              </div>
            </div>
            <div className="hc-foot">
              <div className="hcf-avs">
                {['specialist-1.png', 'specialist-2.png', 'specialist-3.png', 'specialist-4.png', 'specialist-5.png'].map((src) => (
                  <div key={src} className="hcf-av">
                    <img src={`/${src}`} alt="Specialist" loading="lazy" style={src === 'specialist-4.png' ? { objectPosition: 'center 70%' } : undefined} />
                  </div>
                ))}
              </div>
              <div className="hcf-t">
                <strong>Matched to your needs</strong>
                Specialists ready to start
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap" aria-hidden>
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <b>·</b>
            </span>
          ))}
        </div>
      </div>

      {/* WHY US (condensed) */}
      <section className="why" id="why">
        <div className="why-left reveal">
          <span className="sec-label">Why Virtuoso</span>
          <h2 className="sec-title">
            One Team.<br />
            <em>Everything</em>
            <br />Covered.
          </h2>
          <p>
            Instead of juggling multiple freelancers or agencies, Virtuoso gives you
            one dedicated team that handles everything — cohesively, reliably, and
            cost-effectively.
          </p>
          <a href="#contact-form" className="btn-terra" style={{ marginTop: '0.8rem', display: 'inline-block' }}>
            Get My Free Quote
          </a>
        </div>
        <div className="why-list reveal">
          {LP_WHY.map((w) => (
            <div key={w.t} className="wr">
              <div className="wi">{w.i}</div>
              <div className="wt">
                <h4>{w.t}</h4>
                <p>{w.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="pr-left reveal">
          <span className="sec-label">Investment</span>
          <h2 className="sec-title">
            Affordable Support,<br /><em>No Surprises.</em>
          </h2>
          <p>
            A fraction of the cost of hiring in-house — with the quality of a dedicated specialist.
            We offer both hourly rates and monthly packages depending on the service and what works
            best for your needs. Every quote is tailored and transparent before anything starts.
          </p>
          <div className="pr-checks">
            {['No lock-in contracts', 'Scale up or down anytime', 'Full quote before you commit', 'Fraction of in-house costs'].map((t) => (
              <div key={t} className="pr-check-row">
                <div className="av-dot" />
                <span>{t}</span>
              </div>
            ))}
          </div>
          <a href="#contact-form" className="btn-terra" style={{ marginTop: '2rem', display: 'inline-block' }}>Get a Custom Quote</a>
        </div>
        <div className="pr-right reveal">
          <div className="why-list">
            {[
              { i: '⏱', t: 'Hourly Rates', d: 'Pay only for the hours you need — ideal for focused tasks or getting started without commitment.' },
              { i: '📦', t: 'Monthly Packages', d: 'Consistent, predictable support at a fixed monthly cost. Great for ongoing services.' },
              { i: '🎯', t: 'Project-Based', d: 'A clear scope and a clear price. Perfect for one-off projects like website builds or content campaigns.' },
            ].map((w) => (
              <div key={w.t} className="wr">
                <div className="wi">{w.i}</div>
                <div className="wt">
                  <h4>{w.t}</h4>
                  <p>{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SINGLE TESTIMONIAL */}
      <section className="testimonials">
        <div className="sh reveal">
          <div>
            <span className="sec-label">Client Stories</span>
            <h2 className="sec-title">The <em>Results</em> Speak.</h2>
          </div>
        </div>
        <div className="t-stage">
          <div className="t-card-wrap t-active">
            <div className="t-card">
              <div className="t-body">
                <div className="t-top">
                  <div className="t-av-lg">
                    <img src={testimonial.photo} alt={testimonial.name} loading="lazy" style={{ objectPosition: 'center 30%' }} />
                  </div>
                  <div>
                    <div className="t-name">{testimonial.name}</div>
                    <div className="t-role">{testimonial.role}</div>
                  </div>
                </div>
                <div className="t-stars">★★★★★</div>
                <p className="t-text">{testimonial.text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-left reveal">
          <span className="sec-label">Get In Touch</span>
          <h2 className="sec-title">
            Ready for the<br />Support You<br />
            <em>Deserve?</em>
          </h2>
          <p>
            Tell us about your business and what you need. We'll come back with a
            tailored proposal — no pressure, no one-size-fits-all packages.
          </p>
          <div className="c-next">
            <div className="cn-label">What happens next</div>
            {[
              { n: '1', t: 'We review your enquiry', d: 'Usually within a few hours on business days.' },
              { n: '2', t: 'Discovery call', d: '30 minutes to align on your needs and find the right specialists.' },
              { n: '3', t: 'Custom proposal', d: 'A tailored plan with your team, services, and pricing — ready to start.' },
            ].map((s) => (
              <div key={s.n} className="cn-row">
                <div className="cn-num">{s.n}</div>
                <div>
                  <div className="cn-t">{s.t}</div>
                  <div className="cn-d">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm title="Get My Free Quote" subtitle="Free discovery call · No commitment required" />
      </section>

      {/* MINIMAL FOOTER — no site nav, just brand + required legal link */}
      <footer>
        <div>
          <span className="logo-wrap">
            <LogoSvg color="#b85070" />
            <span className="logo-name" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Virtu<span style={{ color: '#b85070', fontStyle: 'italic' }}>o</span>so
            </span>
          </span>
          <p className="f-tagline">
            A network of vetted specialists helping entrepreneurs and executives get
            the right support — matched to their exact needs.
          </p>
          <div className="f-location">
            <span>📍 Banja Luka, Bosnia &amp; Herzegovina</span>
            <span>🕐 CET Timezone</span>
          </div>
        </div>
        <div className="fc">
          <h5>Legal</h5>
          <ul>
            <a href="/privacy-policy">Privacy Policy</a>
          </ul>
        </div>
      </footer>
      <div className="f-bottom">
        <p>© 2026 Virtuoso. All rights reserved.</p>
      </div>
    </>
  )
}
