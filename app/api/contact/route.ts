import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message, service, subService } = await req.json();

  // Validate form data
  if (!name || !email || !message || !service || !subService) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    // Configure the transporter for ProtonMail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Prepare the email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Nuova richiesta da ${name}`,
      text: `Hai un nuovo messaggio dal modulo di contatto:
        Nome: ${name}
        Email: ${email}
        Servizio: ${service} - ${subService}
        Messaggio: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Respond with success
    return NextResponse.json({ message: 'Your message has been sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
