import { Handler } from "@netlify/functions";
import { Resend } from "resend";

// Use environment variable in production, fallback to hardcoded key for now (though not recommended)
const resend = new Resend(process.env.RESEND_API_KEY || "re_ZhRmUHHU_2x6vh1hueWNGBNJyaQN7ZQYM");

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { name, email, details } = JSON.parse(event.body || "{}");

    if (!name || !email || !details) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const { data, error } = await resend.emails.send({
      from: "Seed Pictures Contact <onboarding@resend.dev>",
      to: ["lekoringoo@gmail.com"],
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; border: 1px solid #222; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #3b5bdb 0%, #6c5ce7 100%); padding: 32px 28px;">
            <h1 style="color: #fff; margin: 0; font-size: 22px; font-weight: 600;">
              🌱 New Project Inquiry
            </h1>
            <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px;">
              Someone reached out through the Seed Pictures website
            </p>
          </div>
          <div style="padding: 28px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px; width: 100px; vertical-align: top;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #f5f5f5; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #888; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #222; color: #f5f5f5; font-size: 15px;">
                  <a href="mailto:${email}" style="color: #5c7cfa; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 13px; vertical-align: top;">Details</td>
                <td style="padding: 12px 0; color: #f5f5f5; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${details}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 28px; background: #111; border-top: 1px solid #222; text-align: center;">
            <p style="margin: 0; color: #555; font-size: 12px;">
              Sent via Seed Pictures Contact Form
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to send email" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, id: data?.id }),
    };
  } catch (err) {
    console.error("Server error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
