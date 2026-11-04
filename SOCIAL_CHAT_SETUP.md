# Social Media Integration & Live Chat Setup

This document explains the social media integration and live chat support added to the WEEE Centre website.

## ✅ What Was Implemented

### 1. Social Media Icons Component
**File:** `src/components/social-icons.tsx`

A reusable social media icon component with support for:
- Facebook
- Twitter/X
- LinkedIn
- Instagram
- YouTube
- WhatsApp

Features:
- SVG icons for each platform
- Proper accessibility labels
- Hover effects
- Responsive sizing
- Opens in new tab with security attributes

### 2. Social Media Links in Footer
**File:** `src/app/page.tsx`

Added a "Follow us" section in the footer with:
- Facebook link
- Twitter/X link
- LinkedIn link
- Instagram link

The social links are displayed in a clean grid layout with hover effects.

### 3. Social Share Component
**File:** `src/components/social-share.tsx`

A share component that allows users to share pages on:
- Facebook
- Twitter/X
- LinkedIn
- WhatsApp
- Copy link to clipboard

Features:
- Automatically uses current page URL
- Customizable title
- Copy-to-clipboard functionality
- Visual feedback when link is copied
- Responsive design

### 4. Live Chat Widget
**File:** `src/components/live-chat.tsx`

Integrated Tawk.to live chat widget:
- Loads chat widget on all pages
- Clean, non-intrusive implementation
- Client-side only (no SSR issues)
- Easy to configure

### 5. Styling
**File:** `src/app/globals.css`

Added comprehensive styling for:
- Social icons (circle design with hover effects)
- Social share buttons (modern, clean design)
- Responsive mobile optimization
- Consistent with brand colors

## 🔧 Configuration Required

### 1. Update Social Media URLs

The social media links in the footer currently use placeholder URLs. Update them in `src/app/page.tsx`:

```tsx
<SocialIcon name="facebook" href="https://facebook.com/weeecentre" ariaLabel="Follow us on Facebook" />
<SocialIcon name="twitter" href="https://twitter.com/weeecentre" ariaLabel="Follow us on Twitter" />
<SocialIcon name="linkedin" href="https://linkedin.com/company/weeecentre" ariaLabel="Follow us on LinkedIn" />
<SocialIcon name="instagram" href="https://instagram.com/weeecentre" ariaLabel="Follow us on Instagram" />
```

Replace the URLs with your actual social media profiles.

### 2. Configure Tawk.to Live Chat

#### Step 1: Get Your Tawk.to ID
1. Go to https://www.tawk.to
2. Sign up for a free account
3. Create a new widget
4. Copy your Property ID (looks like: `67a1b2c3d4e5f6g7h8i9j0`)

#### Step 2: Update the Component
In `src/components/live-chat.tsx`, replace `YOUR_TAWK_TO_ID` with your actual ID:

```tsx
tawkToScript.src = "https://embed.tawk.to/YOUR_TAWK_TO_ID/default";
```

Example:
```tsx
tawkToScript.src = "https://embed.tawk.to/67a1b2c3d4e5f6g7h8i9j0/default";
```

#### Step 3: Customize Chat Widget (Optional)
In your Tawk.to dashboard, you can customize:
- Widget colors
- Position (bottom-right, bottom-left)
- Language
- Pre-chat survey
- Away message
- Operating hours

### 3. Add Social Share to Pages

To add social share buttons to a page, import and use the component:

```tsx
import SocialShare from "@/components/social-icons";

// In your component
<SocialShare title="Your Page Title" />
```

If no title is provided, it defaults to "WEEE Centre - Responsible E-Waste Management".

## 📱 Features

### Social Icons
- **Platform Support:** Facebook, Twitter/X, LinkedIn, Instagram, YouTube, WhatsApp
- **Accessibility:** ARIA labels for screen readers
- **Security:** `rel="noopener noreferrer"` for external links
- **Performance:** Inline SVGs (no external requests)
- **Responsive:** Adapts to mobile screens

### Social Share
- **One-click sharing:** Direct share to popular platforms
- **Copy link:** Easy clipboard copy with visual feedback
- **Customizable:** Title and URL can be customized
- **Mobile-friendly:** Touch-friendly buttons

### Live Chat
- **Free:** Tawk.to has a generous free tier
- **Real-time:** Instant chat with visitors
- **Customizable:** Colors, position, messages
- **Mobile app:** Chat on the go
- **Analytics:** Chat history and visitor data

## 🎨 Styling

### Brand Colors Used
- Primary: `var(--green)` - for icons and hover states
- Accent: `var(--lime)` - for hover effects
- Background: `var(--white)` - for icon backgrounds
- Border: `var(--line)` - for share button borders

### Responsive Breakpoints
- Desktop: 40px icons
- Mobile: 36px icons
- Adjusts gracefully on smaller screens

## 🚀 Alternative Live Chat Options

If you prefer not to use Tawk.to, here are alternatives:

### 1. Intercom
- Popular for B2B
- Paid with free trial
- More features (CRM integration, etc.)

### 2. Drift
- Conversational marketing
- Free tier available
- Good for lead generation

### 3. Crisp
- Free forever
- Modern interface
- Good for startups

### 4. WhatsApp Chat Button
- Direct WhatsApp integration
- Popular in Kenya
- Can use the existing WhatsApp icon

To switch providers, replace the script in `src/components/live-chat.tsx` with the provider's embed code.

## 📊 Analytics & Tracking

### Social Media Tracking
Consider adding tracking parameters to your social links:

```tsx
const utmSource = "website";
const utmMedium = "social";
const utmCampaign = "footer_link";

<SocialIcon 
  name="facebook" 
  href={`https://facebook.com/weeecentre?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}`} 
  ariaLabel="Follow us on Facebook" 
/>
```

### Chat Analytics
Tawk.to provides built-in analytics:
- Chat volume
- Response time
- Visitor demographics
- Chat satisfaction

## 🔒 Security Considerations

### External Scripts
The live chat widget loads an external script. Consider:
- Only load from trusted domains
- Monitor for script changes
- Use CSP to restrict script sources

### External Links
All social links use:
- `target="_blank"` - Opens in new tab
- `rel="noopener noreferrer"` - Security best practice

## 📝 Implementation Files

### Created Files
1. `src/components/social-icons.tsx` - Social media icon component
2. `src/components/social-share.tsx` - Social share component
3. `src/components/live-chat.tsx` - Live chat widget
4. `SOCIAL_CHAT_SETUP.md` - This documentation

### Modified Files
1. `src/app/layout.tsx` - Added LiveChat component import and usage
2. `src/app/page.tsx` - Added social media links to footer
3. `src/app/globals.css` - Added styling for social icons and share buttons

## 🎯 Next Steps

1. **Configure Social URLs** - Update with actual social media profiles
2. **Set Up Tawk.to** - Get your ID and configure the widget
3. **Add Share Buttons** - Add SocialShare to key pages (services, projects, events)
4. **Test Chat** - Test the live chat widget on different devices
5. **Monitor Analytics** - Set up tracking for social and chat interactions
6. **Customize Styling** - Adjust colors and sizes to match your brand

## 💡 Tips

### Social Media Best Practices
- Keep social profiles active and updated
- Respond to messages promptly
- Share website content on social media
- Use consistent branding across platforms

### Live Chat Best Practices
- Set clear response time expectations
- Use auto-replies for off-hours
- Train staff on chat etiquette
- Monitor chat quality regularly

### Social Share Best Practices
- Add share buttons to high-value pages
- Use compelling titles for shares
- Include relevant hashtags in Twitter shares
- Track share analytics to optimize

## 🆘 Troubleshooting

### Social Icons Not Showing
- Check that component is imported correctly
- Verify CSS is loaded
- Check browser console for errors

### Live Chat Not Loading
- Verify Tawk.to ID is correct
- Check that script is not blocked by CSP
- Verify internet connection
- Check browser console for script errors

### Share Links Not Working
- Verify URLs are properly encoded
- Check that new tab blocking is disabled
- Test on different browsers

## 📞 Support

For questions about this implementation:
- Email: info@weeecentre.com
- Phone: +254 701 819 559

For Tawk.to support:
- https://www.tawk.to/knowledgebase/
