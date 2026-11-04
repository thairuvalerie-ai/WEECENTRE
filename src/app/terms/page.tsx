"use client";

import Link from "next/link";
import SiteHeader from "../site-header";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="container">
          <div className="legal-header">
            <p className="eyebrow">Legal</p>
            <h1>Terms and Conditions</h1>
            <p className="legal-date">Last updated: October 15, 2026</p>
          </div>

          <div className="legal-content">
            <section className="legal-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to WEEE Centre ("we," "our," or "us"). By accessing or using our website at weeecentre.com and our services, you agree to be bound by these Terms and Conditions. Please read them carefully. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section className="legal-section">
              <h2>2. Acceptance of Terms</h2>
              <p>
                By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. We reserve the right to modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="legal-section">
              <h2>3. Services Provided</h2>
              <p>
                WEEE Centre provides electronic waste management services including but not limited to:
              </p>
              <ul>
                <li>E-waste collection and logistics</li>
                <li>IT Asset Disposal (ITAD)</li>
                <li>Secure data destruction</li>
                <li>Electronics recycling</li>
                <li>Refurbishment and reuse</li>
                <li>Asset recovery</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
              </p>
            </section>

            <section className="legal-section">
              <h2>4. User Responsibilities</h2>
              <p>
                Users of our website and services agree to:
              </p>
              <ul>
                <li>Provide accurate and complete information when requesting services</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with the operation of our website or services</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Properly prepare e-waste for collection according to our guidelines</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>5. Data Privacy and Protection</h2>
              <p>
                We are committed to protecting your privacy. Our collection, use, and disclosure of personal information is governed by our Privacy Policy, which forms part of these Terms. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
              <p>
                We implement industry-standard security measures to protect your data, including NAID AAA-certified data destruction services. However, we cannot guarantee absolute security of data transmitted over the internet.
              </p>
            </section>

            <section className="legal-section">
              <h2>6. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, software, and code, is the property of WEEE Centre or its licensors and is protected by copyright and other intellectual property laws.
              </p>
              <p>
                You may not:
              </p>
              <ul>
                <li>Reproduce, distribute, or modify any content without our written permission</li>
                <li>Use our logos or trademarks without authorization</li>
                <li>Reverse engineer any software on our website</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>7. Service Terms and Conditions</h2>
              <h3>7.1 E-Waste Collection</h3>
              <p>
                Collection services are subject to availability and geographic coverage. We reserve the right to refuse collection of materials that do not meet our acceptance criteria or pose safety risks.
              </p>

              <h3>7.2 Data Destruction</h3>
              <p>
                Our data destruction services are performed in accordance with NAID AAA certification standards. We provide certificates of destruction upon request. However, we are not liable for any data breaches that occur before materials reach our facility.
              </p>

              <h3>7.3 Asset Recovery</h3>
              <p>
                Asset recovery value is determined based on market conditions and device condition. Revenue sharing terms will be specified in individual service agreements. We cannot guarantee recovery values.
              </p>

              <h3>7.4 Refurbishment</h3>
              <p>
                Refurbished devices are tested and come with a 90-day warranty unless otherwise specified. We do not guarantee complete restoration of device functionality.
              </p>
            </section>

            <section className="legal-section">
              <h2>8. Payment Terms</h2>
              <p>
                Payment terms for our services will be specified in individual service agreements or quotes. For paid services:
              </p>
              <ul>
                <li>Payment is due within 30 days of invoice unless otherwise agreed</li>
                <li>Late payments may incur interest at a rate of 5% per month</li>
                <li>We reserve the right to suspend services for non-payment</li>
                <li>All prices are quoted in Kenyan Shillings (KES) unless otherwise specified</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, WEEE Centre shall not be liable for:
              </p>
              <ul>
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of data, revenue, or business opportunity</li>
                <li>Damages exceeding the total fees paid for our services</li>
                <li>Any damage to equipment not caused by our negligence</li>
              </ul>
              <p>
                Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
              </p>
            </section>

            <section className="legal-section">
              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless WEEE Centre, its officers, directors, employees, and agents from any claims, damages, or expenses arising from:
              </p>
              <ul>
                <li>Your use of our website or services</li>
                <li>Your violation of these Terms and Conditions</li>
                <li>Your violation of any third-party rights</li>
                <li>Any materials you provide to us</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>11. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any proprietary or confidential information shared during the course of our business relationship. This includes but is not limited to:
              </p>
              <ul>
                <li>Business processes and methods</li>
                <li>Customer information</li>
                <li>Financial information</li>
                <li>Technical specifications</li>
              </ul>
              <p>
                This obligation survives the termination of our business relationship.
              </p>
            </section>

            <section className="legal-section">
              <h2>12. Environmental Compliance</h2>
              <p>
                WEEE Centre is committed to environmental responsibility. All e-waste is processed in accordance with:
              </p>
              <ul>
                <li>ISO 14001:2015 Environmental Management System</li>
                <li>R2 (Responsible Recycling) standards</li>
                <li>Kenyan environmental regulations</li>
                <li>International best practices for e-waste management</li>
              </ul>
              <p>
                We maintain a zero-landfill policy and ensure all materials are processed responsibly.
              </p>
            </section>

            <section className="legal-section">
              <h2>13. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for any reason, including but not limited to:
              </p>
              <ul>
                <li>Breach of these Terms and Conditions</li>
                <li>Violation of applicable laws</li>
                <li>Fraudulent or suspicious activity</li>
                <li>Non-payment for services</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>14. Governing Law and Jurisdiction</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Kenya.
              </p>
            </section>

            <section className="legal-section">
              <h2>15. Force Majeure</h2>
              <p>
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, war, strikes, or government regulations.
              </p>
            </section>

            <section className="legal-section">
              <h2>16. Waiver and Severability</h2>
              <p>
                The failure of either party to enforce any provision of these Terms shall not constitute a waiver of such provision. If any provision is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section className="legal-section">
              <h2>17. Entire Agreement</h2>
              <p>
                These Terms and Conditions, together with our Privacy Policy and any specific service agreements, constitute the entire agreement between you and WEEE Centre regarding the use of our website and services.
              </p>
            </section>

            <section className="legal-section">
              <h2>18. Contact Information</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> info@weeecentre.com</li>
                <li><strong>Phone:</strong> +254 701 819 559</li>
                <li><strong>Address:</strong> Mihango, Embakasi, Off the Eastern By-pass, Kenya</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>19. Changes to Terms</h2>
              <p>
                We may update these Terms and Conditions from time to time. The updated version will be indicated by a revised "Last updated" date. Your continued use of our website and services after such changes constitutes acceptance of the updated terms.
              </p>
            </section>
          </div>

          <div className="legal-footer">
            <Link href="/" className="button button-outline-dark">Back to Home</Link>
            <Link href="/privacy" className="button button-dark">View Privacy Policy</Link>
          </div>
        </div>
      </main>
    </>
  );
}
