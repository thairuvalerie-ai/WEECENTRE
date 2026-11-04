# Google Search Console Setup Guide

This guide will help you set up Google Search Console verification for the WEEE Centre website.

## 📋 Prerequisites

- Your website must be deployed and accessible at https://weeecentre.com
- You need a Google account (Gmail or Google Workspace)

## 🔧 Step-by-Step Setup

### Step 1: Go to Google Search Console

Visit: https://search.google.com/search-console

### Step 2: Add Your Property

1. Click "Add a property" or "Start now"
2. Select "URL prefix" option
3. Enter your domain: `https://weeecentre.com`
4. Click "Continue"

### Step 3: Choose Verification Method

Select **"HTML tag"** verification method (recommended for Next.js apps)

### Step 4: Copy the Verification Code

You'll see a meta tag that looks like this:

```html
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

**Copy only the content value** (the part inside the quotes after `content=`)

Example: If the tag is:
```html
<meta name="google-site-verification" content="abc123xyz456" />
```

Copy: `abc123xyz456`

### Step 5: Add Verification Code to Environment Variables

1. Open your `.env.local` file
2. Add or update this line:

```bash
NEXT_PUBLIC_GSC_VERIFICATION=abc123xyz456
```

Replace `abc123xyz456` with your actual verification code.

3. Save the file

### Step 6: Deploy the Changes

The verification code is now configured in the application. You need to:

1. **Commit the changes** to git
2. **Deploy** to your hosting platform (Vercel, Netlify, etc.)
3. **Wait for the deployment** to complete

### Step 7: Verify Your Site

1. Go back to Google Search Console
2. Click "Verify" button
3. Google will check your site for the verification meta tag
4. If successful, you'll see a verification success message

### Step 8: Submit Your Sitemap

After verification, submit your sitemap:

1. In Google Search Console, go to your property
2. Click "Sitemaps" in the left sidebar
3. Enter your sitemap URL: `sitemap.xml`
4. Click "Submit"

Your sitemap will be: `https://weeecentre.com/sitemap.xml`

## 📊 What to Do After Verification

### 1. Monitor Indexing Status

- Go to "Index" → "Pages"
- Check which pages are indexed
- Look for any errors or warnings

### 2. Submit URLs for Indexing

- Use the "URL Inspection" tool
- Enter important URLs (homepage, services, about)
- Click "Request indexing" for new pages

### 3. Check Coverage Report

- Go to "Index" → "Coverage"
- Review any indexing issues
- Fix errors as they appear

### 4. Monitor Performance

- Go to "Performance" report
- See which queries bring traffic
- Check click-through rates
- Identify improvement opportunities

### 5. Set Up Email Alerts

- Go to "Settings" → "Preferences"
- Enable email notifications for:
  - Coverage issues
  - Manual actions
  - Security issues

## 🔍 Troubleshooting

### Verification Fails

**Problem:** Verification fails even after adding the code

**Solutions:**
1. Make sure you deployed the changes
2. Clear your browser cache and retry
3. Wait a few minutes and try again
4. Check that the environment variable is set correctly
5. Try alternative verification method (DNS TXT record)

### Sitemap Submission Fails

**Problem:** Sitemap submission shows errors

**Solutions:**
1. Check that sitemap.xml is accessible: https://weeecentre.com/sitemap.xml
2. Verify sitemap.xml has valid XML
3. Check for blocked URLs in robots.txt
4. Ensure URLs in sitemap are accessible (not 404 or blocked)

### Pages Not Indexed

**Problem:** Pages not showing in index

**Solutions:**
1. Submit URLs manually using URL Inspection tool
2. Check Coverage report for errors
3. Ensure pages have internal links
4. Add more content to thin pages
5. Improve page loading speed

## 📈 Best Practices

### Regular Monitoring

Check Google Search Console weekly for:
- New indexing issues
- Manual actions (penalties)
- Security issues
- Performance changes

### Fix Issues Promptly

Address errors and warnings as soon as they appear:
- 404 errors
- Blocked resources
- Mobile usability issues
- Structured data errors

### Improve Based on Data

Use Performance report to:
- Identify high-performing keywords
- Find content gaps
- Optimize low CTR pages
- Improve page speed for slow pages

### Keep Sitemap Updated

When you add new pages:
1. Update `src/app/sitemap.ts`
2. Deploy the changes
3. Google will automatically detect changes
4. Or manually resubmit sitemap in GSC

## 🎯 Next Steps After Setup

1. **Submit all important pages** for indexing
2. **Monitor for 30 days** to establish baseline data
3. **Review Performance report** monthly
4. **Fix any issues** that appear
5. **Use data to improve** content and SEO strategy

## 📞 Additional Resources

- [Google Search Console Help](https://support.google.com/webmasters/)
- [Search Console Training](https://search.google.com/search-console/training)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

## ✅ Checklist

- [ ] Create Google Search Console account
- [ ] Add property (https://weeecentre.com)
- [ ] Choose HTML tag verification
- [ ] Copy verification code
- [ ] Add code to .env.local
- [ ] Deploy changes
- [ ] Verify site in GSC
- [ ] Submit sitemap.xml
- [ ] Submit important URLs for indexing
- [ ] Set up email alerts
- [ ] Review initial reports

## 🔐 Security Note

The verification code is public in your HTML source. This is normal and safe. It only proves you own the site and doesn't expose any sensitive information.

## 🌐 Alternative Verification Methods

If HTML tag verification doesn't work, you can use:

### DNS TXT Record
1. Choose "DNS record" verification
2. Add TXT record to your domain's DNS
3. Format: `google-site-verification=YOUR_CODE`
4. Wait for DNS propagation (can take up to 48 hours)

### Google Analytics
1. If you use GA4, you can verify through it
2. Requires GA tracking code on your site
3. Automatic verification

### Google Tag Manager
1. If you use GTM, you can verify through it
2. Requires GTM container on your site
3. Automatic verification

---

**Note:** The HTML tag method is recommended for Next.js applications as it's the easiest to implement and verify.
