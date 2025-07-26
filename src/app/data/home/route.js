
// /app/api/contact/route.js (or wherever your API route is)

import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();
  const { name, email, message } = data;

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail
      pass: process.env.EMAIL_PASS, // App-specific password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.EMAIL_USER}>`,
      to: "info@akv.org.in",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: "Mail sent successfully" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Email sending error:", err);
    return new Response(JSON.stringify({ success: false, error: "Failed to send mail" }), {
      status: 500,
    });
  }
}
