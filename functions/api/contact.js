export async function onRequestPost({ request, env }) {
  try {
    const form = await request.formData();

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
      const errorText = await resendResponse.text();

      return Response.json(
        { error: "Email failed to send.", details: errorText },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong.", details: error.message },
      { status: 500 }
    );
  }
}
