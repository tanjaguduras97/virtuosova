export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/contact") {
      if (request.method === "GET") {
        return Response.json({
          message: "Contact endpoint is working.",
        });
      }

      if (request.method !== "POST") {
        return Response.json({ error: "Method not allowed" }, { status: 405 });
      }

      const form = await request.formData();

      const firstName = form.get("firstName") || "";
      const lastName = form.get("lastName") || "";
      const email = form.get("email") || "";
      const company = form.get("company") || "";
      const service = form.get("service") || "";
      const message = form.get("message") || "";

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Virtuoso Website <tanja@virtuosovirtualassistants.com>",
          to: ["tanja@virtuosovirtualassistants.com"],
          reply_to: email,
          subject: `New website inquiry from ${firstName} ${lastName}`,
          text: `
New website inquiry

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Service: ${service}

Message:
${message}
          `,
        }),
      });

      if (!resendResponse.ok) {
        return Response.json(
          { error: "Email failed to send.", details: await resendResponse.text() },
          { status: 500 }
        );
      }

      return Response.redirect("https://virtuosovirtualassistants.com/#contact", 303);
    }

    return env.ASSETS.fetch(request);
  },
};
