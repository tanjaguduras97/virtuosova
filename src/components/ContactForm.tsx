import { useRef, useState } from 'react'
import { SERVICES } from '../data/site-content'
import { trackContactFormLead } from '../lib/tracking'

export function ContactForm({
  title = "Let's Talk",
  subtitle = 'Free discovery call · No commitment required',
}: {
  title?: string
  subtitle?: string
}) {
  const [submitted, setSubmitted] = useState(false)
  const [formError, setFormError] = useState('')
  const formRenderedAt = useRef(Date.now())

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError('')
    const form = e.currentTarget
    const data = new FormData(form)
    // Honeypot: real visitors never fill this (it's visually hidden). Bots that
    // autofill every field trip it, so pretend success without sending anything.
    if (data.get('website')) {
      setSubmitted(true)
      form.reset()
      return
    }
    data.set('elapsedMs', String(Date.now() - formRenderedAt.current))
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: data })
      if (res.ok) {
        setSubmitted(true)
        form.reset()
        trackContactFormLead()
      } else {
        setFormError('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      setFormError('Could not send — please check your connection and try again.')
    }
  }

  return (
    <div className="c-form reveal" id="contact-form">
      <div className="f-title">{title}</div>
      <div className="f-sub">{subtitle}</div>
      {submitted && (
        <div className="f-success">
          Thank you! Your inquiry has been sent successfully. We’ll get back to you within 1 business day.
        </div>
      )}
      {formError && <div className="f-error">{formError}</div>}

      <form onSubmit={handleSubmit} style={{ display: 'contents' }}>

        <div className="sr-only" aria-hidden="true">
          <label htmlFor="website">Leave this field blank</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

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
  )
}
