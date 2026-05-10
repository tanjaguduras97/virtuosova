import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  component: Terms,
})

function Terms() {
  return (
    <main className="legal-page">
      <h1>Terms of Service</h1>
      <p>Last updated: May 2026</p>

      <p>
        These Terms of Service govern your use of the Virtuoso website and services.
        By contacting us or working with us, you agree to these terms.
      </p>

      <h2>Services</h2>
      <p>
        Virtuoso provides virtual assistant and business support services, including but not limited
        to project management, executive support, content creation, website support, automation setup,
        customer support, and related services.
      </p>

      <h2>Custom Proposals</h2>
      <p>
        Services, timelines, scope, and pricing are provided through custom proposals based on each
        client’s needs.
      </p>

      <h2>Client Responsibilities</h2>
      <p>
        Clients are responsible for providing accurate information, timely feedback, and access to
        any tools or materials required to complete agreed services.
      </p>

      <h2>Payments</h2>
      <p>
        Payment terms are agreed individually before work begins. Work may pause if payments are late
        or required information is not provided.
      </p>

      <h2>Results</h2>
      <p>
        While we aim to provide high-quality support, we cannot guarantee specific business, financial,
        or marketing results.
      </p>

      <h2>Confidentiality</h2>
      <p>
        We respect client confidentiality and handle business information with care. Additional NDA
        agreements may be arranged when needed.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        Unless otherwise agreed, completed client work belongs to the client after full payment has
        been received.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about these terms, contact us at{' '}
        <a href="mailto:tanja@virtuosovirtualassistants.com">
          tanja@virtuosovirtualassistants.com
        </a>.
      </p>
    </main>
  )
}
