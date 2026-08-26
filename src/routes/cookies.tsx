import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cookies')({
  component: Cookies,
  head: () => ({
    meta: [
      { title: 'Cookie Policy | Virtuoso Virtual Assistants' },
      {
        name: 'description',
        content: 'How Virtuoso Virtual Assistants uses cookies on our website.',
      },
      { name: 'robots', content: 'noindex, follow' },
    ],
    links: [{ rel: 'canonical', href: 'https://virtuosovirtualassistants.com/cookies' }],
  }),
})

function Cookies() {
  return (
    <main className="legal-page">
      <h1>Cookie Policy</h1>
      <p>Last updated: May 2026</p>

      <p>
        This Cookie Policy explains how Virtuoso may use cookies and similar technologies on our website.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small files stored on your device that help websites function, remember preferences,
        and understand how visitors use the site.
      </p>

      <h2>How We Use Cookies</h2>
      <p>
        We may use cookies to improve website performance, understand visitor behavior, support analytics,
        and improve user experience.
      </p>

      <h2>Analytics and Advertising</h2>
      <p>
        If we use analytics or advertising tools in the future, those tools may set cookies to measure
        traffic, conversions, and campaign performance.
      </p>

      <h2>Managing Cookies</h2>
      <p>
        You can control or disable cookies through your browser settings. Some website features may not
        work properly if cookies are disabled.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about cookies, contact us at{' '}
        <a href="mailto:tanja@virtuosovirtualassistants.com">
          tanja@virtuosovirtualassistants.com
        </a>.
      </p>
    </main>
  )
}
