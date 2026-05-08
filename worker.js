export default {
  async fetch(request, env) {

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*", // ← your domain
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    // Parse form data (supports both FormData and JSON)
    let fields = {};
    const contentType = request.headers.get("Content-Type") || "";

    if (contentType.includes("application/json")) {
      fields = await request.json();
    } else {
      const formData = await request.formData();
      for (const [key, value] of formData.entries()) {
        fields[key] = value;
      }
    }

    const {
      first_name = "",
      last_name  = "",
      email      = "",
      company    = "",
      service    = "",
      needs      = "",
    } = fields;

    // Send email via MailChannels (free on Cloudflare)
    const mailRes = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: "guduras27@gmail.com", name: "Virtuoso VA" }], // ← CHANGE to your inbox
          },
        ],
        from: {
          email: "tanja@virtuosovirtualassistants.com", // ← must be your domain
          name: "Virtuoso Website Form",
        },
        reply_to: {
          email: email,
          name: `${first_name} ${last_name}`,
        },
        subject: `New Enquiry from ${first_name} ${last_name}${company ? " — " + company : ""}`,
        content: [
          {
            type: "text/plain",
            value: `New form submission:\n\nName: ${first_name} ${last_name}\nEmail: ${email}\nCompany: ${company}\nService of Interest: ${service}\n\nNeeds:\n${needs}`,
          },
          {
            type: "text/html",
            value: `
              <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
                <h2 style="color:#333;">New Form Submission</h2>
                <table style="width:100%;border-collapse:collapse;font-size:14px;">
                  <tr style="background:#f9f9f9;">
                    <td style="padding:10px;font-weight:bold;color:#555;width:180px;">First Name</td>
                    <td style="padding:10px;">${first_name}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px;font-weight:bold;color:#555;">Last Name</td>
                    <td style="padding:10px;">${last_name}</td>
                  </tr>
                  <tr style="background:#f9f9f9;">
                    <td style="padding:10px;font-weight:bold;color:#555;">Email</td>
                    <td style="padding:10px;"><a href="mailto:${email}">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:10px;font-weight:bold;color:#555;">Company</td>
                    <td style="padding:10px;">${company || "—"}</td>
                  </tr>
                  <tr style="background:#f9f9f9;">
                    <td style="padding:10px;font-weight:bold;color:#555;">Service of Interest</td>
                    <td style="padding:10px;">${service || "—"}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px;font-weight:bold;color:#555;vertical-align:top;">Needs</td>
                    <td style="padding:10px;white-space:pre-wrap;">${needs || "—"}</td>
                  </tr>
                </table>
              </div>
            `,
          },
        ],
      }),
    });

    if (!mailRes.ok) {
      const error = await mailRes.text();
      console.error("MailChannels error:", error);
      return new Response(JSON.stringify({ success: false, error }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  },
};
