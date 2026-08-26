import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: 'Privacy Policy | Virtuoso Virtual Assistants' },
      {
        name: 'description',
        content: 'How Virtuoso collects, uses, and protects information submitted through our website.',
      },
      { name: 'robots', content: 'noindex, follow' },
    ],
    links: [{ rel: 'canonical', href: 'https://virtuosovirtualassistants.com/privacy-policy' }],
  }),
})

function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <h1>Privacy Policy</h1>
      <p>Last updated: May 2026</p>

      <p>
        Virtuoso respects your privacy and is committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and protect information submitted through our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect your name, email address, company name, service interests, and any message
        or information you submit through our contact form.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        We use your information to respond to inquiries, provide proposals, communicate with you,
        deliver services, and improve our website and client experience.
      </p>

      <h2>Sharing Your Information</h2>
      <p>
        We do not sell your personal information. We may share information only when necessary to
        provide our services, comply with legal obligations, or protect our business.
      </p>

      <h2>Cookies and Analytics</h2>
      <p>
        Our website may use cookies or analytics tools to understand website performance and improve
        the user experience. You can adjust cookie settings in your browser at any time.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable steps to protect your information, but no online transmission or storage
        system can be guaranteed to be completely secure.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may contact us to request access, correction, or deletion of your personal information.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, contact us at{' '}
        <a href="mailto:tanja@virtuosovirtualassistants.com">
          tanja@virtuosovirtualassistants.com
        </a>.
      </p>
    </main>
  )
}
