import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type BookingRequest = {
  name?: string;
  email?: string;
  phone?: string;
  training?: string;
  message?: string;
};

const trainingLabels: Record<string, string> = {
  nelson: 'Nelson Handwriting Training',
  print: 'Print Handwriting Training',
  inclusive: 'Inclusive Education',
  literacy: 'Literacy & Mathematics Training',
  book: 'Interested in our Book',
  all: 'All Programs',
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as BookingRequest;
    const name = data.name?.trim();
    const email = data.email?.trim();
    const phone = data.phone?.trim();
    const training = data.training?.trim();
    const message = data.message?.trim() || 'No additional message provided.';

    if (!name || !email || !phone || !training) {
      return NextResponse.json(
        { error: 'Please fill in your name, email, phone number, and training interest.' },
        { status: 400 }
      );
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email sending is not configured yet.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT || 465),
      secure: process.env.EMAIL_SECURE !== 'false',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const recipient = process.env.BOOKING_TO_EMAIL || 'joshuauka0@gmail.com';
    const selectedTraining = trainingLabels[training] || training;

    await transporter.sendMail({
      from: `"Soundskill Hub Bookings" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `New booking request from ${name}`,
      text: [
        'New booking request',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Training Interest: ${selectedTraining}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <h2>New booking request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Training Interest:</strong> ${escapeHtml(selectedTraining)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Booking email error:', error);
    return NextResponse.json(
      { error: 'Could not send your booking request. Please try again.' },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
