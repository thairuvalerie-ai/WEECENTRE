"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          organization,
          subject,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.message || "Thank you for your message. We will get back to you within one business day.");
        event.currentTarget.reset();
      } else {
        setStatus(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading"><span>01 / 01</span><h2>Send us a message</h2><p>Tell us how we can help. We’ll get back to you within one business day.</p></div>
      <div className="contact-fields">
        <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
        <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" placeholder="+254" /></label>
        <label>Organization <span>(optional)</span><input name="organization" type="text" autoComplete="organization" placeholder="Company or institution" /></label>
        <label className="contact-field-wide">Subject<input name="subject" type="text" placeholder="How can we help?" required /></label>
        <label className="contact-field-wide">Message<textarea name="message" rows={5} placeholder="Tell us a little about what you need" required /></label>
      </div>
      <div className="contact-form-bottom"><button className="button button-dark" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send message"} <span aria-hidden="true">&rarr;</span></button><p className="contact-form-status" role="status" aria-live="polite">{status}</p></div>
    </form>
  );
}