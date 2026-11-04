# Security Implementation Summary

All priority security improvements have been successfully implemented for the WEEE Centre website.

## ✅ Completed Security Features

### 1. Security Headers (via Next.js Middleware)
**File:** `src/middleware.ts`

Implemented comprehensive security headers:
- **Content Security Policy (CSP)** - Restricts sources of scripts, styles, images, etc.
- **X-Frame-Options: DENY** - Prevents clickjacking attacks
- **X-Content-Type-Options: nosniff** - Prevents MIME type sniffing
- **X-XSS-Protection** - Enables XSS filtering
- **Referrer-Policy** - Controls referrer information
- **Permissions-Policy** - Restricts access to browser features
- **Strict-Transport-Security (HSTS)** - Enforces HTTPS (production only)

### 2. Rate Limiting
**Files:** 
- `src/lib/rate-limiter.ts` - Rate limiting utility
- `src/app/api/contact/route.ts` - Applied to contact API
- `src/app/api/enquiry/route.ts` - Applied to enquiry API

**Configuration:**
- 5 requests per minute per IP/user-agent combination
- Returns HTTP 429 (Too Many Requests) when limit exceeded
- In-memory storage (note: for production with multiple serverless instances, consider using Redis)

### 3. Input Sanitization
**Files:**
- `src/app/api/contact/route.ts`
- `src/app/api/enquiry/route.ts`

**Implementation:**
- Removes `<` and `>` characters to prevent XSS attacks
- Trims whitespace
- Limits input length to 1000 characters
- Applied to all user inputs (name, email, phone, organization, subject, message)

### 4. CSRF Protection
**Files:**
- `src/lib/csrf.ts` - CSRF token generation and validation
- `src/app/api/csrf/route.ts` - API endpoint to fetch CSRF tokens
- `src/app/api/contact/route.ts` - CSRF validation in contact API
- `src/app/api/enquiry/route.ts` - CSRF validation in enquiry API
- `src/components/enquiry-modal.tsx` - CSRF token in modal forms
- `src/app/contact/contact-form.tsx` - CSRF token in contact form

**Implementation:**
- Generates time-based CSRF tokens with 1-hour expiration
- Tokens stored in httpOnly, secure, sameSite cookies
- Tokens validated on all form submissions
- Forms automatically fetch and include CSRF tokens

### 5. Console Log Sanitization
**Files:**
- `src/app/api/contact/route.ts`
- `src/app/api/enquiry/route.ts`
- `src/components/enquiry-modal.tsx`
- `src/app/contact/contact-form.tsx`

**Implementation:**
- All `console.error` and `console.log` statements wrapped in `process.env.NODE_ENV === 'development'` checks
- Prevents sensitive information from being exposed in production logs

### 6. Google reCAPTCHA (Optional)
**Files:**
- `src/lib/recaptcha.ts` - reCAPTCHA verification utility
- `src/components/recaptcha.tsx` - reCAPTCHA component
- `src/app/api/contact/route.ts` - reCAPTCHA validation in contact API
- `src/app/api/enquiry/route.ts` - reCAPTCHA validation in enquiry API
- `src/components/enquiry-modal.tsx` - reCAPTCHA in modal forms
- `src/app/contact/contact-form.tsx` - reCAPTCHA in contact form

**Implementation:**
- Only active when environment variables are configured
- Adds reCAPTCHA v2 checkbox to forms
- Validates tokens with Google's API before processing
- Gracefully degrades if not configured

## 🔧 Configuration Required

### Environment Variables

Update your `.env.local` file with the following variables:

```bash
# CSRF Secret (REQUIRED)
# Generate a strong random secret using: openssl rand -base64 32
CSRF_SECRET=your_generated_csrf_secret_here

# Google reCAPTCHA (OPTIONAL - for additional bot protection)
# Get keys from: https://www.google.com/recaptcha/admin
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here
```

### Generate CSRF Secret

Run this command to generate a secure CSRF secret:

```bash
openssl rand -base64 32
```

Or use an online random string generator to create a 32+ character random string.

### Set Up reCAPTCHA (Optional but Recommended)

1. Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Register your site (use your production domain)
3. Select "reCAPTCHA v2" → "I'm not a robot" checkbox
4. Add your domain (e.g., `weeecentre.com`, `localhost` for testing)
5. Copy the Site Key and Secret Key
6. Add them to your `.env.local` file

## 📝 Notes

### Rate Limiting in Production
The current rate limiter uses in-memory storage. If you deploy to a platform with multiple serverless instances (like Vercel), consider:
- Using Redis for distributed rate limiting
- Using a third-party service like Upstash Redis
- Implementing a token bucket algorithm with persistence

### CSP Configuration
The Content Security Policy in `src/middleware.ts` may need adjustment based on:
- Third-party scripts you add (analytics, fonts, etc.)
- External image domains
- Inline scripts you need to support

Monitor your browser console for CSP violations and adjust accordingly.

### Testing
After deployment, test:
1. Form submissions work correctly
2. CSRF protection (try submitting without valid token)
3. Rate limiting (submit rapidly to see 429 response)
4. reCAPTCHA (if configured)
5. Security headers (use browser DevTools → Network → Response headers)

## 🚀 Next Steps

The security improvements are now in place. For even better security, consider:

1. **Add authentication** for admin areas
2. **Implement API key protection** for sensitive endpoints
3. **Add CORS restrictions** if you have API consumers
4. **Set up security monitoring** (e.g., with a service like Sentry)
5. **Regular security audits** and dependency updates
6. **Implement additional logging** for security events
7. **Add DDoS protection** (e.g., Cloudflare)
8. **Enable HTTPS enforcement** at the DNS/infrastructure level

## 📄 Files Created/Modified

### Created:
- `src/middleware.ts` - Security headers middleware
- `src/lib/rate-limiter.ts` - Rate limiting utility
- `src/lib/csrf.ts` - CSRF protection utility
- `src/lib/recaptcha.ts` - reCAPTCHA verification utility
- `src/components/recaptcha.tsx` - reCAPTCHA React component
- `src/app/api/csrf/route.ts` - CSRF token endpoint

### Modified:
- `src/app/api/contact/route.ts` - Added rate limiting, CSRF, sanitization, reCAPTCHA
- `src/app/api/enquiry/route.ts` - Added rate limiting, CSRF, sanitization, reCAPTCHA
- `src/components/enquiry-modal.tsx` - Added CSRF and reCAPTCHA
- `src/app/contact/contact-form.tsx` - Added CSRF and reCAPTCHA
- `.env.example` - Added CSRF_SECRET and reCAPTCHA variables

## ⚠️ Important

Before deploying to production:
1. **Generate and set CSRF_SECRET** in your production environment variables
2. **Test all forms** to ensure they work correctly
3. **Set up reCAPTCHA** (recommended for production)
4. **Review CSP policy** and adjust if needed
5. **Monitor for issues** after deployment
