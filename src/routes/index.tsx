import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: VirtuosoHome,
  head: () => ({
    meta: [
      { title: 'Virtuoso | Virtual Assistant Agency — Europe-Based VA Services' },
      {
        name: 'description',
        content:
          'Get matched with a vetted Europe-based VA specialist — social media, content creation, executive support, automation, and more.',
      },
    ],
  }),
})

const SERVICES = [
  {
    icon: '📊',
    name: 'Project Management',
    desc: 'Organized timelines, cross-team coordination, and task tracking so your projects ship on time.',
  },
  {
    icon: '🌐',
    name: 'Website Development',
    desc: 'Landing pages and full websites built to look great, load fast, and convert visitors into clients.',
  },
  {
    icon: '📱',
    name: 'Social Media Management',
    desc: 'Strategy, scheduling, community management, and growth across all your platforms — handled completely.',
  },
  {
    icon: '✨',
    name: 'Content Creation',
    desc: 'Engaging posts, captions, newsletters, and brand storytelling crafted to connect with your audience.',
  },
  {
    icon: '🎬',
    name: 'Photo & Video Editing',
    desc: 'Professional editing and post-production that keeps your content polished, on-brand, and scroll-stopping.',
  },
  {
    icon: '👔',
    name: 'Executive Support',
    desc: 'Calendar control, inbox management, research, and strategic admin for busy CEOs and leaders.',
  },
  {
    icon: '🎧',
    name: 'Customer Support',
    desc: 'Professional, responsive customer service via calls — keeping your clients happy and loyal.',
  },
  {
    icon: '⚙️',
    name: 'Automation Setup',
    desc: 'Smart workflow automations and tool integrations that save hours every week.',
  },
]

const TESTIMONIALS = [
  {
    text: '"Working with Tanja as my Operations Manager has been a game-changer. I didn\'t have to worry about recruitment or meetings — she handled it all. I\'ve found Eastern European VAs to be not only cost-effective but incredibly efficient."',
    name: 'Greig Wells',
    role: 'Founder, Love Thy Neighbor Marketing & Virtual Dinner Party',
    photo: '/greig-wells.png',
  },
  {
    text: '"I am very much impressed with Tanja and my virtual assistant, Una! Tanja personally took time to introduce us and make sure everything flowed smoothly. Una is smart, efficient, kind, and communicates quickly and well."',
    name: 'KennaRae Miller Thomas',
    role: 'Life & Business Coach',
    photo: '/kennarae.png',
  },
  {
    text: '"I deeply appreciate that my VA stays ahead of the curve. I ask for help, go to sleep, and wake up for it to be done! I feel like Snow White who has her 7 gnomes keeping her business house clean while she sleeps."',
    name: 'Sylvia Becker Hill',
    role: 'Authentic Living & Prosperity Neuroplastician for Professional Women',
    photo: '/sylvia.png',
  },
  {
    text: '"Tanja is a fantastic project manager. She\'s been on the team since March and is my right hand woman on all things. She\'s helped me simplify my systems, given me more free time to provide excellent care to my clients, and keeps \'Elevate Your Health Plan\' running smoothly and efficiently."',
    name: 'Mary Hunt',
    role: 'Founder, Elevate Your Health Plan',
    photo: '/mary-hunt.jpg',
  },
]

const MARQUEE_ITEMS = [
  'Social Media Management',
  'Content Creation',
  'Project Management',
  'Website Development',
  'Executive Support',
  'Automation Setup',
  'Photo & Video Editing',
  'Customer Support',
]

function LogoSvg({ color = '#7a1f3d' }: { color?: string }) {
  return (
    <svg
      className="logo-svg"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="16" y1="3" x2="16" y2="14"
        stroke={color} strokeWidth="2.8" strokeLinecap="round"
      />
      <line
        x1="16" y1="14" x2="6" y2="27"
        stroke={color} strokeWidth="2.8" strokeLinecap="round"
      />
      <line
        x1="16" y1="14" x2="26" y2="27"
        stroke={color} strokeWidth="2.8" strokeLinecap="round"
      />
      <circle cx="16" cy="3" r="2" fill={color} />
    </svg>
  )
}

function useReveal() {
useEffect(() => {
  if (window.location.search.includes('success=true')) {
    setSubmitted(true)

    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }, 300)
  }
}, [])
}

function useScrollNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

function VirtuosoHome() {
  useReveal()
  const scrolled = useScrollNav()
 const submitted =
  typeof window !== 'undefined' &&
  window.location.search.includes('success=true') }

 

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,600;1,9..144,700&family=Outfit:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap"
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
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact" className="nav-cta">Get Started</a></li>
        </ul>
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
            From social media and website development to project management and
            automation — Virtuoso brings together a pool of vetted specialists,
            each matched to your exact needs.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-terra">Work With Us</a>
            <a href="#services" className="btn-outline">Explore Services</a>
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
                {['T', 'U', 'M', 'A', 'K'].map((l) => (
                  <div key={l} className="hcf-av">{l}</div>
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

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="sh reveal">
          <div>
            <span className="sec-label">What We Do</span>
            <h2 className="sec-title">
              Eight Ways We <em>Elevate</em>
              <br />Your Business.
            </h2>
          </div>
          <p className="sd">One team. Every service. No juggling freelancers or agencies.</p>
        </div>
        <div className="svc-grid">
          {SERVICES.map((svc, i) => (
            <div key={svc.name} className="svc-card reveal">
              <div className="svc-icon">{svc.icon}</div>
              <span className="svc-num">0{i + 1}</span>
              <div className="svc-name">{svc.name}</div>
              <p className="svc-desc">{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-left reveal">
          <span className="sec-label">About Us</span>
          <h2 className="sec-title">
            The Right Support,<br />
            <em>Right When</em> You Need It.
          </h2>
          <p>
            Virtuoso is a network of vetted specialists ready to step in and handle
            the work that's holding you back. We match you with the right expert for
            your needs — so you can focus on what actually moves the needle.
          </p>
          <p>
            We work with clients across various industries, including marketing,
            health insurance, accounting, and coaching.
          </p>
          <div className="about-vals">
            {[
              { t: 'Real people, not bots', s: 'Every task handled by a skilled human who cares about quality' },
              { t: 'Flexible & scalable', s: 'Start with what you need and add more as you grow' },
              { t: 'Fast onboarding', s: 'We get started quickly so you see results from day one' },
              { t: 'Transparent communication', s: 'Regular updates, clear timelines, no surprises' },
            ].map((v) => (
              <div key={v.t} className="av-row">
                <div className="av-dot" />
                <div>
                  <div className="av-t">{v.t}</div>
                  <div className="av-s">{v.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="about-right reveal">
          <div className="about-visual">
            <div className="about-visual-body">
              <div className="about-quote about-quote-float">
                We're not just a team — we're a{' '}
                <span>family</span> passionate about making your life easier.
              </div>
              <div className="about-team-row about-team-float">
                <div className="at-ico">
                  <img src="/tanja.jpg" alt="Tanja, Founder & CEO" loading="lazy" />
                </div>
                <div>
                  <div className="at-lbl">Tanja — Founder &amp; CEO</div>
                  <div className="at-val">
                    Connecting businesses worldwide with Europe-based specialists
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="sh reveal">
          <div>
            <span className="sec-label">How It Works</span>
            <h2 className="sec-title on-dark">
              From First Call to<br />
              <em>Fully Supported.</em>
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
      </section>

      {/* WHY US */}
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
          <p>
            We don't just complete tasks. We understand your business and work as a
            true extension of your team.
          </p>
          <a href="#contact" className="btn-terra" style={{ marginTop: '0.8rem', display: 'inline-block' }}>
            Let's Talk
          </a>
        </div>
        <div className="why-list reveal">
          {[
            { i: '⚡', t: 'Fast to Get Started', d: 'No lengthy processes. We onboard quickly so support begins almost immediately.' },
            { i: '🎯', t: 'Specialists, Not Generalists', d: 'Each service is owned by someone who does it every day — not a jack-of-all-trades.' },
            { i: '💬', t: 'Clear, Consistent Communication', d: 'Regular updates and a single point of contact so you\'re always in the loop.' },
            { i: '🔒', t: 'Trustworthy & Confidential', d: 'NDAs and secure workflows — your information stays safe, always.' },
            { i: '📈', t: 'Scales With You', d: 'Start small and add services as you grow — no need to re-onboard anyone new.' },
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
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="sh reveal">
          <div>
            <span className="sec-label">Client Stories</span>
            <h2 className="sec-title">
              The <em>Results</em> Speak.
            </h2>
          </div>
          <p className="sd">
            From solopreneurs to growing teams — here's what working with Virtuoso
            looks like.
          </p>
        </div>
        <div className="t-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="t-card reveal">
              <div className="t-body">
                <div className="t-stars">★★★★★</div>
                <p className="t-text">{t.text}</p>
                <div className="t-author">
                  <div className="t-avatar">
                    <img src={t.photo} alt={t.name} loading="lazy" />
                  </div>
                  <div>
                    <div className="t-name">{t.name}</div>
                    <div className="t-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
          <div className="c-info">
            <div className="ci">
              <div className="ci-icon">✉️</div>
              <div>
                <span className="ci-lbl">Email</span>
                <span className="ci-val">tanja@virtuosovirtualassistants.com</span>
              </div>
            </div>
            <div className="ci">
              <div className="ci-icon">🕐</div>
              <div>
                <span className="ci-lbl">Response Time</span>
                <span className="ci-val">Within 1 business day</span>
              </div>
            </div>
          </div>
        </div>
        <div className="c-form reveal">
          <div className="f-title">Let's Talk</div>
          <div className="f-sub">Free discovery call · No commitment required</div>
          {submitted && (
  <div className="f-success">
    🎉 Thank you! Your inquiry has been sent successfully. We’ll get back to you within 1 business day.
  </div>
)}
      
<form
  action="https://formsubmit.co/tanja@virtuosovirtualassistants.com"
  method="POST"
  style={{ display: 'contents' }}
>
  <input type="hidden" name="_captcha" value="false" />
    <input
  type="hidden"
  name="_next"
  value="https://virtuosovirtualassistants.com/?success=true"
 />
          
            <div className="f-row">
              <div className="fg">
                <label htmlFor="fn">First Name</label>
                <input id="fn" name="firstName" type="text" placeholder="Jane" required />
              </div>
              <div className="fg">
                <label htmlFor="ln">Last Name</label>
                <input id="ln" name="lastName" type="text" placeholder="Smith" required />
              </div>
            </div>
            <div className="fg">
              <label htmlFor="em">Email Address</label>
              <input id="em" name="email" type="email" placeholder="jane@yourcompany.com" required />
            </div>
            <div className="fg">
              <label htmlFor="co">Business / Company</label>
              <input id="co" name="company" type="text" placeholder="Your Company" />
            </div>
            <div className="fg">
              <label htmlFor="sv">Service of Interest</label>
              <select id="sv" name="service" defaultValue="">
                <option value="" disabled>Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.name}>{s.name}</option>
                ))}
                <option>Multiple / Not sure yet</option>
              </select>
            </div>
            <div className="fg">
              <label htmlFor="msg">Tell Us About Your Needs</label>
              <textarea
                id="msg"
                name="message"
                placeholder="What's taking up your time? What do you wish you had more support with?"
              />
            </div>
            <button type="submit" className="f-submit">Send My Enquiry →</button>
          </form>
          <p className="f-note">We reply within 1 business day with a tailored proposal.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <a href="#" className="logo-wrap">
            <LogoSvg color="#b85070" />
            <span className="logo-name" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Virtu<span style={{ color: '#b85070', fontStyle: 'italic' }}>o</span>so
            </span>
          </a>
          <p className="f-tagline">
            A network of vetted specialists helping entrepreneurs and executives get
            the right support — matched to their exact needs.
          </p>
          <div className="f-social">
            <a href="https://www.upwork.com/agencies/virtuosovirtualassistants/" className="sl" target="_blank" rel="noopener noreferrer" aria-label="Upwork">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/></svg>
            </a>
            <a href="https://www.facebook.com/share/g/1G4xqJeqs4/" className="sl" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/99901278/admin/dashboard/" className="sl" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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
            <li><a href="#about">About Us</a></li>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#why">Why Virtuoso</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="fc">
          <h5>Legal</h5>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">NDA Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </footer>
      <div className="f-bottom">
        <p>© 2026 Virtuoso. All rights reserved.</p>
        <p>Get the support you deserve. <a href="#contact">Let's talk →</a></p>
      </div>
    </>
  )
}
