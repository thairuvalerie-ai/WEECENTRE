"use client";

import Link from "next/link";
import SiteHeader from "../site-header";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="container">
          <div className="legal-header">
            <p className="eyebrow">Legal</p>
            <h1>Privacy Policy</h1>
            <p className="legal-date">Last updated: October 15, 2026</p>
          </div>

          <div className="legal-content">
            <section className="legal-section">
              <h2>1. Introduction</h2>
              <p>
                WEEE Centre ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this policy carefully.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Information We Collect</h2>
              <h3>2.1 Personal Information</h3>
              <p>
                We may collect the following types of personal information:
              </p>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, organization name</li>
                <li><strong>Service Information:</strong> E-waste collection requests, service preferences, pickup locations</li>
                <li><strong>Account Information:</strong> Username, password (encrypted), authentication tokens</li>
                <li><strong>Communication:</strong> Messages sent through our contact forms</li>
              </ul>

              <h3>2.2 Device and Usage Information</h3>
              <p>
                We automatically collect certain information about your device and how you use our website:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages visited and time spent</li>
                <li>Device identifiers</li>
              </ul>

              <h3>2.3 Cookies and Tracking Technologies</h3>
              <p>
                We use cookies and similar technologies to collect information about your browsing activities. This includes:
              </p>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our website</li>
                <li><strong>Security Cookies:</strong> Protect against fraud and CSRF attacks</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect for the following purposes:
              </p>
              <ul>
                <li><strong>Service Provision:</strong> To provide e-waste collection and management services</li>
                <li><strong>Communication:</strong> To respond to your inquiries and service requests</li>
                <li><strong>Service Improvement:</strong> To improve our services and website functionality</li>
                <li><strong>Analytics:</strong> To analyze usage patterns and optimize our services</li>
                <li><strong>Security:</strong> To detect and prevent fraud, abuse, and security threats</li>
                <li><strong>Legal Compliance:</strong> To comply with legal obligations and regulations</li>
                <li><strong>Marketing:</strong> To send you relevant updates and promotional content (with your consent)</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your information:
              </p>
              <ul>
                <li><strong>Encryption:</strong> Data is encrypted in transit using HTTPS/TLS</li>
                <li><strong>Secure Storage:</strong> Sensitive data is stored securely with access controls</li>
                <li><strong>Data Destruction:</strong> We use NAID AAA-certified data destruction methods for physical media</li>
                <li><strong>Access Control:</strong> Only authorized personnel can access your information</li>
                <li><strong>Regular Audits:</strong> We conduct regular security reviews and audits</li>
              </ul>
              <p>
                Despite our best efforts, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.
              </p>
            </section>

            <section className="legal-section">
              <h2>5. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law:
              </p>
              <ul>
                <li><strong>Service Records:</strong> Retained for 7 years for accounting and legal purposes</li>
                <li><strong>Communication:</strong> Retained for 2 years unless related to ongoing services</li>
                <li><strong>Analytics Data:</strong> Retained for 26 months (Google Analytics default)</li>
                <li><strong>Account Data:</strong> Retained until account deletion request</li>
              </ul>
              <p>
                When we delete your information, we take reasonable steps to ensure it is permanently deleted from our systems or rendered irretrievable.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Information Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>

              <h3>6.1 Service Providers</h3>
              <p>
                We may share information with trusted third-party service providers who assist us in operating our website and services, such as:
              </p>
              <ul>
                <li>Email service providers (Resend)</li>
                <li>Analytics services (Google Analytics)</li>
                <li>Hosting services (Vercel)</li>
                <li>Security services (reCAPTCHA)</li>
              </ul>
              <p>
                These service providers are bound by confidentiality obligations and may only use your information to provide services to us.
              </p>

              <h3>6.2 Legal Requirements</h3>
              <p>
                We may disclose your information if required by law or in response to valid legal requests, including:
              </p>
              <ul>
                <li>Court orders or subpoenas</li>
                <li>Law enforcement requests</li>
                <li>Regulatory requirements</li>
                <li>To protect our rights, property, or safety</li>
              </ul>

              <h3>6.3 Business Transfers</h3>
              <p>
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owner. We will notify you of any such transfer.
              </p>

              <h3>6.4 With Your Consent</h3>
              <p>
                We may share your information with your explicit consent for specific purposes.
              </p>
            </section>

            <section className="legal-section">
              <h2>7. Your Rights and Choices</h2>
              <p>
                You have the following rights regarding your personal information:
              </p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Objection:</strong> Object to processing of your information</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p>
                To exercise these rights, please contact us at info@weeecentre.com. We will respond to your request within 30 days.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Data Destruction Services</h2>
              <p>
                For our data destruction services, we follow strict protocols:
              </p>
              <ul>
                <li><strong>NAID AAA Certification:</strong> Our data destruction processes are certified by the National Association for Information Destruction</li>
                <li><strong>Certificate of Destruction:</strong> We provide certificates of destruction upon request</li>
                <li><strong>Chain of Custody:</strong> Full documentation of the destruction process</li>
                <li><strong>Secure Processing:</strong> Data-bearing devices are processed in secure facilities</li>
              </ul>
              <p>
                We do not access or view the content of your data during the destruction process unless required for troubleshooting with your explicit consent.
              </p>
            </section>

            <section className="legal-section">
              <h2>9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 18, we will take steps to delete such information.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. International Data Transfers</h2>
              <p>
                Your information is primarily stored and processed in Kenya. We may transfer your information to other countries for the purposes described in this policy. When we do so, we ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
              </p>
            </section>

            <section className="legal-section">
              <h2>11. California Consumer Privacy Act (CCPA)</h2>
              <p>
                If you are a resident of California, you have additional rights under the CCPA:
              </p>
              <ul>
                <li>Right to know what personal information we collect</li>
                <li>Right to delete your personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>
              <p>
                To exercise these CCPA rights, please contact us at info@weeecentre.com.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be indicated by a revised "Last updated" date. We will notify you of significant changes by:
              </p>
              <ul>
                <li>Posting the new policy on our website</li>
                <li>Sending an email notification (if you have provided your email)</li>
                <li>Displaying a prominent notice on our website</li>
              </ul>
              <p>
                Your continued use of our website and services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="legal-section">
              <h2>13. Cookie Preferences</h2>
              <p>
                You can manage your cookie preferences through your browser settings. However, please note that disabling certain cookies may affect the functionality of our website.
              </p>
              <ul>
                <li>To disable cookies in Chrome: Settings → Privacy and security → Cookies and other site data</li>
                <li>To disable cookies in Firefox: Options → Privacy & Security → Cookies and Site Data</li>
                <li>To disable cookies in Safari: Preferences → Privacy → Manage Website Data</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>14. Third-Party Websites</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section className="legal-section">
              <h2>15. Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> info@weeecentre.com</li>
                <li><strong>Phone:</strong> +254 701 819 559</li>
                <li><strong>Address:</strong> Mihango, Embakasi, Off the Eastern By-pass, Kenya</li>
                <li><strong>Data Protection Officer:</strong> privacy@weeecentre.com</li>
              </ul>
              <p>
                For data subject requests, please include "Privacy Request" in your email subject line.
              </p>
            </section>
          </div>

          <div className="legal-footer">
            <Link href="/" className="button button-outline-dark">Back to Home</Link>
            <Link href="/terms" className="button button-dark">View Terms and Conditions</Link>
          </div>
        </div>
      </main>
    </>
  );
}
