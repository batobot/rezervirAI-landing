import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Basic validation
    if (!data.name || !data.email || !data.organization) {
      return NextResponse.json(
        { ok: false, error: 'Name, email, and organization are required' },
        { status: 400 }
      );
    }

    // Log the submission (in production, integrate with email service)
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      organization: data.organization,
      message: data.message,
      consent: data.consent,
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service provider
    // Example integration with Resend:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'contact@rezervirai.com',
      to: 'team@rezervirai.com',
      subject: `New Contact Form Submission - ${data.organization}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Organization:</strong> ${data.organization}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <p><strong>Consent:</strong> ${data.consent ? 'Yes' : 'No'}</p>
      `,
    });
    */

    return NextResponse.json({ ok: true });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
