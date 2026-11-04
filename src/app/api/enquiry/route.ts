import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit, getClientIdentifier } from '@/lib/rate-limiter';
import { validateCSRFRequest } from '@/lib/csrf';
import { verifyRecaptchaToken } from '@/lib/recaptcha';

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

    const body = await request.json();
    const {
      type,
      name,
      email,
      phone,
      organization,
      subject,
      message,
      additionalData,
      recaptchaToken
    } = body;

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

    // Basic validation
    if (!name || !email || !message) {
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
    const sanitizedSubject = subject ? sanitizeInput(subject) : '';
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedType = type ? sanitizeInput(type) : 'General';

    // Generate subject based on enquiry type
    const enquirySubject = sanitizedSubject || getDefaultSubject(sanitizedType);
    
    // Format the email body
    let emailBody = `
New ${sanitizedType} Enquiry

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone || 'Not provided'}
Organization: ${sanitizedOrganization || 'Not provided'}
    `.trim();

    // Add type-specific information
    if (additionalData) {
      emailBody += '\n\nAdditional Information:\n';
      Object.entries(additionalData).forEach(([key, value]) => {
        const sanitizedKey = sanitizeInput(key);
        const sanitizedValue = sanitizeInput(String(value));
        emailBody += `${sanitizedKey}: ${sanitizedValue}\n`;
      });
    }

    emailBody += `\n\nMessage:\n${sanitizedMessage}\n\n---\nSubmitted at: ${new Date().toISOString()}`;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@weeecentre.com',
      to: process.env.TO_EMAIL || 'info@weeecentre.com',
      subject: enquirySubject,
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

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: getSuccessMessage(type) 
      },
      { status: 200 }
    );

  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing enquiry:', error);
    }
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}

function getDefaultSubject(type: string): string {
  const subjects: Record<string, string> = {
    'pickup': 'Schedule a Pickup Request',
    'quote': 'Quote Request',
    'project': 'Project Partnership Enquiry',
    'conference': 'Conference Enquiry',
    'event': 'Event Enquiry',
    'service': 'Service Enquiry',
    'subscribe': 'Subscribe to Updates',
  };
  return subjects[type] || 'General Enquiry';
}

function getSuccessMessage(type: string): string {
  const messages: Record<string, string> = {
    'pickup': 'Thank you for your pickup request. We will contact you within one business day to schedule the collection.',
    'quote': 'Thank you for your quote request. We will get back to you within one business day with a detailed quote.',
    'project': 'Thank you for your project enquiry. We will review your request and get back to you within one business day.',
    'conference': 'Thank you for your conference enquiry. We will get back to you within one business day.',
    'event': 'Thank you for your event enquiry. We will get back to you within one business day.',
    'service': 'Thank you for your service enquiry. We will get back to you within one business day.',
    'subscribe': 'Thank you for subscribing to our updates. You will receive our latest news and updates.',
  };
  return messages[type] || 'Thank you for your message. We will get back to you within one business day.';
}