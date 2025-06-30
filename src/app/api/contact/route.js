import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();

  const { name, email, phone, city, message } = data;

  // Basic validation
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  // Setup transporter
//   const transporter = nodemailer.createTransport({
//     host: process.env.EMAIL_HOST,
//     port: parseInt(process.env.EMAIL_PORT),
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'atulyakrishi67@gmail.com',
      pass:'lcrpituapqvvbsux',
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Contact" <atulyakrishi67@gmail.com>`,
      to: "info@akv.org.in",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Mail sent successfully" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Email sending error:", err);
    return new Response(JSON.stringify({ error: "Failed to send mail" }), {
      status: 500,
    });
  }
}