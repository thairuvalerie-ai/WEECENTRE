import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit, getClientIdentifier } from '@/lib/rate-limiter';
import { validateCSRFRequest } from '@/lib/csrf';
import { verifyRecaptchaToken } from '@/lib/recaptcha';
import { addContactSubmission } from '@/lib/analytics';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .trim()
    .slice(0, 1000); // Limit length
}

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured. Please add RESEND_API_KEY to environment variables.' },
        { status: 500 }
      );
    }

    // Rate limiting
    const identifier = getClientIdentifier(request);
    const rateLimitResult = rateLimit(identifier, 5, 60000); // 5 requests per minute

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // CSRF validation
    const csrfToken = request.headers.get('x-csrf-token');
    if (!csrfToken || !(await validateCSRFRequest(csrfToken))) {
      return NextResponse.json(
        { error: 'Invalid CSRF token. Please refresh the page and try again.' },
        { status: 403 }
      );
    }

    // reCAPTCHA verification (skip if not configured)
    if (process.env.RECAPTCHA_SECRET_KEY) {
      if (!recaptchaToken) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed. Please complete the reCAPTCHA challenge.' },
          { status: 400 }
        );
      }

      const isValidRecaptcha = await verifyRecaptchaToken(recaptchaToken);
      if (!isValidRecaptcha) {
        return NextResponse.json(
          { error: 'reCAPTCHA verification failed. Please try again.' },
          { status: 400 }
        );
      }
    }

    const body = await request.json();
    const { name, email, phone, organization, subject, message, recaptchaToken } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = phone ? sanitizeInput(phone) : '';
    const sanitizedOrganization = organization ? sanitizeInput(organization) : '';
    const sanitizedSubject = sanitizeInput(subject);
    const sanitizedMessage = sanitizeInput(message);

    // Format the email body
    const emailBody = `
New Contact Form Submission

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone || 'Not provided'}
Organization: ${sanitizedOrganization || 'Not provided'}

Message:
${sanitizedMessage}

---
Submitted at: ${new Date().toISOString()}
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@weeecentre.com',
      to: process.env.TO_EMAIL || 'info@weeecentre.com',
      subject: `Contact Form: ${sanitizedSubject}`,
      text: emailBody,
      replyTo: sanitizedEmail,
    });

    if (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Resend error:', error);
      }
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('Email sent successfully:', data);
    }

    // Log contact submission for analytics
    addContactSubmission({
      timestamp: Date.now(),
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      organization: sanitizedOrganization,
      subject: sanitizedSubject,
    });

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you within one business day.' 
      },
      { status: 200 }
    );

  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing contact form:', error);
    }
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}