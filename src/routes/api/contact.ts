import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const form = await request.formData()

        const firstName = (form.get('firstName') as string) || ''
        const lastName = (form.get('lastName') as string) || ''
        const email = (form.get('email') as string) || ''
        const company = (form.get('company') as string) || ''
        const service = (form.get('service') as string) || ''
        const message = (form.get('message') as string) || ''

        if (!email || !message) {
          return new Response('Email and message are required.', { status: 400 })
        }

        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Virtuoso Website <tanja@virtuosovirtualassistants.com>',
            to: ['tanja@virtuosovirtualassistants.com'],
            reply_to: email,
            subject: `New website inquiry from ${firstName} ${lastName}`,
            text: `New website inquiry\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\nMessage:\n${message}`,
          }),
        })

        if (!resendResponse.ok) {
          const details = await resendResponse.text()
          console.error('Resend error:', details)
          return new Response('Email failed to send.', { status: 500 })
        }

        return Response.redirect(
          new URL('/?success=true#contact', request.url).toString(),
          303,
        )
      },
    },
  },
})
