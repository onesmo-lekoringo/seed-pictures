import { Handler } from "@netlify/functions";
import nodemailer from "nodemailer";

export const handler: Handler = async (event) => {
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

    const transporter = nodemailer.createTransport({
      host: "rbx116.truehost.cloud",
      port: 465,
      secure: true,
      auth: {
        user: "info@seedpictures.co.tz",
        pass: "-y5P7qIU2r(9aM",
      },
    });

    // Sending FROM info@seedpictures.co.tz TO info@seedpictures.co.tz to bypass external spam filters
    const mailOptions = {
      from: `"Seed Pictures Website" <info@seedpictures.co.tz>`,
      to: "info@seedpictures.co.tz",
      replyTo: email,
      subject: `New website inquiry from ${name}`,
      text: `Hello,\n\nYou have received a new inquiry from the Seed Pictures contact form.\n\nSender Name: ${name}\nSender Email: ${email}\n\nProject Details:\n${details}\n\n--\nSeed Pictures Website`,
    };

    const info = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, messageId: info.messageId }),
    };
  } catch (err: any) {
    console.error("SMTP error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "Failed to send email" }),
    };
  }
};
