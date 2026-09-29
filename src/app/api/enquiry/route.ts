import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      type, 
      name, 
      email, 
      phone, 
      organization, 
      subject, 
      message,
      additionalData 
    } = body;

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

    // Generate subject based on enquiry type
    const enquirySubject = subject || getDefaultSubject(type);
    
    // Format the email body
    let emailBody = `
New ${type || 'General'} Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Organization: ${organization || 'Not provided'}
    `.trim();

    // Add type-specific information
    if (additionalData) {
      emailBody += '\n\nAdditional Information:\n';
      Object.entries(additionalData).forEach(([key, value]) => {
        emailBody += `${key}: ${value}\n`;
      });
    }

    emailBody += `\n\nMessage:\n${message}\n\n---\nSubmitted at: ${new Date().toISOString()}`;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@weeecentre.com',
      to: process.env.TO_EMAIL || 'info@weeecentre.com',
      subject: enquirySubject,
      text: emailBody,
      reply_to: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: getSuccessMessage(type) 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing enquiry:', error);
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