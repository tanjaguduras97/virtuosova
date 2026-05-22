import server from './dist/server/server.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle contact form
    if (url.pathname === '/api/contact') {
      if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
      }

      const form = await request.formData();
      const firstName = form.get('firstName') || '';
      const lastName  = form.get('lastName')  || '';
      const email     = form.get('email')     || '';
      const company   = form.get('company')   || '';
      const service   = form.get('service')   || '';
      const message   = form.get('message')   || '';

      if (!email || !message) {
        return new Response('Email and message are required.', { status: 400 });
      }

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Virtuoso Website <tanja@virtuosovirtualassistants.com>',
          to: ['tanja@virtuosovirtualassistants.com'],
          reply_to: email,
          subject: `New website inquiry from ${firstName} ${lastName}`,
          text: `New website inquiry\n\nName: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\nMessage:\n${message}`,
        }),
      });

      if (!resendRes.ok) {
        const details = await resendRes.text();
        console.error('Resend error:', details);
        return new Response('Email failed to send.', { status: 500 });
      }

      return Response.json({ success: true });
    }

    // All other routes: SSR
    return server.fetch(request, env, ctx);
  },
};
