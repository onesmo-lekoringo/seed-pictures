import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactPayload {
  name: string;
  email: string;
  details: string;
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const { name, email, details }: ContactPayload = await req.json();

    if (!name || !email || !details) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
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
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend API error:", data);
      return new Response(
        JSON.stringify({ error: "Failed to send email", details: data }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
