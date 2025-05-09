import nodemailer from 'nodemailer';

export async function POST(req) {
  const formData = await req.formData();

  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const date = formData.get('date');
  const coverLetter = formData.get('cover_letter');
  const appliedFor = formData.get('applied_for');
  const resumeFile = formData.get('resume');

  if (!firstname || !email || !phone || !resumeFile) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
    });
  }

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 10 MB
  
if (resumeFile.size > MAX_FILE_SIZE) {
  return new Response(JSON.stringify({ error: 'Resume file size exceeds 5 MB limit' }), {
    status: 400,
  });
}

  const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // use correct Gmail SMTP
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, // e.g., 'atulyakrishi67@gmail.com'
      pass: process.env.EMAIL_PASS, // App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Website Career Form" <${process.env.EMAIL_USER}>`,
    // from: `"Website Career Form" <atulyakrishi67@gmail.com>`,
      to: 'hrteam@mkac.in',
      
      subject: `New Career Application from ${firstname} ${lastname}`,
      html: `
        <h2>Career Application Details</h2>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Applied For:</strong> ${appliedFor}</p>
        <p><strong>Start Date:</strong> ${date}</p>
        <p><strong>Cover Letter:</strong><br/>${coverLetter}</p>
      `,
      attachments: [
        {
          filename: resumeFile.name,
          content: resumeBuffer,
        },
      ],
    });

    return new Response(JSON.stringify({ success:true,message: 'Resume sent successfully' }), {
      status: 200,
    });
  } catch (err) {
    console.error('Error sending career email:', err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
    });
  }
}