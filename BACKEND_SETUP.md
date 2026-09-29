# Backend Setup Guide

## Complete Email Integration with Resend

The WEEE Centre website now has a complete backend implementation with email integration using Resend. All contact forms and enquiry buttons have been converted from mailto: links to proper API-driven forms.

## API Endpoints

### 1. Contact Form API (`/api/contact`)
- **Purpose:** Dedicated contact form submissions
- **Method:** POST
- **Fields:** name, email, phone, organization, subject, message
- **Validation:** Required fields, email format validation

### 2. General Enquiry API (`/api/enquiry`)
- **Purpose:** Unified endpoint for all enquiry types
- **Method:** POST
- **Enquiry Types:** pickup, quote, project, conference, event, service, subscribe
- **Fields:** name, email, phone, organization, subject, message, additionalData
- **Features:** Type-specific handling, custom success messages

## Setup Instructions

### 1. Get a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to [API Keys](https://resend.com/api-keys)
3. Create a new API key
4. Copy the API key

### 2. Configure Environment Variables

Update the `.env.local` file in your project root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxx
FROM_EMAIL=noreply@weeecentre.com
TO_EMAIL=info@weeecentre.com
```

**Important:**
- Replace `re_xxxxxxxxxxxxxx` with your actual Resend API key
- Update `FROM_EMAIL` with your verified sender email
- Update `TO_EMAIL` with the email that should receive contact form submissions

### 3. Verify Your Sender Domain

Before sending emails, you need to verify your sender domain:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain (e.g., weeecentre.com)
3. Add the DNS records provided by Resend to your domain's DNS settings
4. Wait for DNS propagation (usually takes a few minutes to a few hours)

**Alternative:** Use Resend's free @resend.dev domain for testing:
- Set `FROM_EMAIL=noreply@your-name.resend.dev`

### 4. Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Test different enquiry types across the website:
   - **Home page:** Schedule Pickup, Request Quote, Subscribe
   - **Services page:** Get a Quote, Talk to our team
   - **Projects page:** Discuss a project
   - **Events page:** Ask about events, Plan an event
   - **Conferences page:** Contact the team
   - **Contact page:** Subscribe to updates

3. Check the recipient email for test messages

## Features Implemented

### ✅ Backend Features
- **Unified API Routes:** `/api/contact` and `/api/enquiry`
- **Email Integration:** Resend for reliable email delivery
- **Form Validation:** Required fields, email format validation
- **Error Handling:** Comprehensive error handling with user feedback
- **Type-Specific Handling:** Different success messages for each enquiry type
- **Timestamp Logging:** All submissions include timestamps

### ✅ Frontend Features
- **Modal Forms:** Professional modal forms for all enquiry types
- **Loading States:** Visual feedback during form submission
- **Auto-close:** Modals close automatically after successful submission
- **Form Reset:** Forms reset after successful submission
- **Responsive Design:** Mobile-friendly modal forms
- **Event-Specific Fields:** Additional fields for event enquiries

### ✅ Conversion Summary
- **25 mailto: links converted** to API-driven forms
- **6 main pages updated** with modal integration
- **7 enquiry types supported:** pickup, quote, project, conference, event, service, subscribe
- **Universal subscribe buttons** across all pages

## File Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts          # Contact form API
│   │   └── enquiry/
│   │       └── route.ts          # General enquiry API
│   ├── components/
│   │   └── enquiry-modal.tsx     # Reusable modal component
│   ├── globals.css              # Modal and button styles
│   ├── site-header.tsx          # Header with modal integration
│   ├── page.tsx                 # Home page with modals
│   ├── about/page.tsx           # About page with modals
│   ├── services/page.tsx        # Services page with modals
│   ├── projects/page.tsx        # Projects page with modals
│   ├── events/page.tsx          # Events page with modals
│   ├── conferences/page.tsx     # Conferences page with modals
│   └── contact/
│       ├── page.tsx             # Contact page with modals
│       └── contact-form.tsx     # Dedicated contact form
.env.local                       # Environment variables
BACKEND_SETUP.md                 # This file
```

## Email Format Examples

### Contact Form Email
```
Subject: Contact Form: [user's subject]

New Contact Form Submission

Name: [User Name]
Email: [user@email.com]
Phone: [optional phone]
Organization: [optional organization]

Message:
[user's message]

---
Submitted at: 2026-09-29T12:34:56.789Z
```

### Event Enquiry Email
```
Subject: Event Enquiry: [event name]

New Event Enquiry

Name: [User Name]
Email: [user@email.com]
Phone: [optional phone]
Organization: [optional organization]

Additional Information:
Event Interest: [selected event]

Message:
[user's message]

---
Submitted at: 2026-09-29T12:34:56.789Z
```

## Production Deployment

### 1. Environment Variables
Set up environment variables in your production environment:
- **Vercel:** Add in project settings → Environment Variables
- **Other hosting:** Configure according to your platform's documentation

### 2. Security Enhancements
- **Rate Limiting:** Implement rate limiting to prevent form spam
- **CSRF Protection:** Add CSRF tokens for form submissions
- **CAPTCHA:** Consider adding CAPTCHA for high-traffic forms
- **Input Sanitization:** Additional input validation and sanitization

### 3. Monitoring
- **Email Delivery:** Monitor Resend dashboard for delivery rates
- **Error Tracking:** Set up error tracking (e.g., Sentry)
- **Analytics:** Track form submissions and conversion rates

### 4. Backup Options
- **Database Storage:** Consider storing submissions in a database
- **Webhook Integration:** Set up webhooks for real-time notifications
- **Fallback System:** Implement backup email service

## Troubleshooting

### Email Not Sending
- Check your API key is correct in `.env.local`
- Verify your sender domain is verified in Resend
- Check Resend dashboard for error logs
- Ensure environment variables are loaded (restart dev server)

### Forms Not Submitting
- Check browser console for JavaScript errors
- Verify API routes are accessible
- Check network tab for failed requests
- Ensure modal component is properly imported

### Modal Not Opening
- Check that `EnquiryModal` component is imported
- Verify state management (`modalOpen`, `modalType`)
- Check for CSS conflicts in modal styling
- Ensure click handlers are properly attached

### Environment Variables Not Loading
- Restart the development server after changing `.env.local`
- Ensure `.env.local` is in the project root
- Check that variables are properly formatted (no spaces around `=`)
- Verify `.env.local` is not in `.gitignore` for local development

## Next Steps

### Phase 2: Database Integration
- Add Supabase or PostgreSQL for submission storage
- Implement user authentication for conference registration
- Create admin dashboard for managing submissions

### Phase 3: Advanced Features
- Add file upload capability for documents
- Implement multi-step forms for complex enquiries
- Add calendar integration for scheduling pickups
- Create email templates for different enquiry types

### Phase 4: Analytics & Optimization
- Implement Google Analytics for form tracking
- Add A/B testing for form layouts
- Optimize email delivery with smart retry logic
- Set up automated follow-up emails

## Support

For issues or questions:
- Check Resend documentation: [docs.resend.com](https://docs.resend.com)
- Next.js API routes: [nextjs.org/docs/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- Review this document for common issues