const ALLOWED_ORIGINS = new Set([
  "https://virtuosovirtualassistants.com",
  "https://www.virtuosovirtualassistants.com",
]);
const MIN_SUBMIT_MS = 1500;

export async function onRequestPost({ request, env }) {
  try {
    const origin = request.headers.get("origin");
    if (origin && !ALLOWED_ORIGINS.has(origin)) {
      return Response.json({ error: "Invalid origin." }, { status: 403 });
    }

    const form = await request.formData();

    // Honeypot: bots that autofill every field trip this hidden input.
    // Pretend success so they don't learn to skip it.
    if (form.get("website")) {
      return Response.json({ success: true });
    }

    const elapsedMs = Number(form.get("elapsedMs") || 0);
    if (elapsedMs > 0 && elapsedMs < MIN_SUBMIT_MS) {
      return Response.json({ success: true });
    }

    const firstName = form.get("firstName") || "";
    const lastName = form.get("lastName") || "";
    const email = form.get("email") || "";
    const company = form.get("company") || "";
    const service = form.get("service") || "";
    const message = form.get("message") || "";

    if (!email || !message) {
      return Response.json(
        { error: "Email and message are required." },
        { status: 400 }
      );
    }

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

    return Response.redirect("https://virtuosovirtualassistants.com/?success=true#contact", 303);
  } catch (error) {
    return Response.json(
      { error: "Something went wrong.", details: error.message },
      { status: 500 }
    );
  }
}
