import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();
  const { location, email, phone } = data;

  if (!location || !email || !phone) {
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
      from: `"Website Book a Visit" <${process.env.EMAIL_USER}>`,
      to: "info@akv.org.in", // Change to recipient email
      subject: "New Visit Booking Submission",
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
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
