"use client";

import { useState, type FormEvent } from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'pickup' | 'quote' | 'project' | 'conference' | 'event' | 'service' | 'subscribe';
  title?: string;
  predefinedSubject?: string;
}

export default function EnquiryModal({ 
  isOpen, 
  onClose, 
  type, 
  title,
  predefinedSubject 
}: EnquiryModalProps) {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const modalTitle = title || getDefaultTitle(type);
  const defaultSubject = predefinedSubject || getDefaultSubject(type);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim() || defaultSubject;
    const message = String(formData.get("message") ?? "").trim();

    // Collect additional data based on type
    const additionalData: Record<string, string> = {};
    if (type === 'event') {
      additionalData['Event Interest'] = String(formData.get("eventInterest") ?? "").trim();
    }

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          name,
          email,
          phone,
          organization,
          subject,
          message,
          additionalData: Object.keys(additionalData).length > 0 ? additionalData : undefined,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.message || "Thank you for your enquiry. We will get back to you within one business day.");
        event.currentTarget.reset();
        setTimeout(() => {
          onClose();
          setStatus("");
        }, 3000);
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        <h2>{modalTitle}</h2>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="enquiry-fields">
            <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
            <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" placeholder="+254" /></label>
            <label>Organization <span>(optional)</span><input name="organization" type="text" autoComplete="organization" placeholder="Company or institution" /></label>
            {type === 'event' && (
              <label>Event Interest<select name="eventInterest">
                <option value="">Select an event</option>
                <option value="Tree Planting Event">Tree Planting Event</option>
                <option value="The Rotary Event">The Rotary Event</option>
                <option value="International School of Kenya Event">International School of Kenya Event</option>
                <option value="Kilicycle">Kilicycle</option>
                <option value="Church Drives">Church Drives</option>
                <option value="Corporate Drives">Corporate Drives</option>
                <option value="School Drives">School Drives</option>
                <option value="Estate Drives">Estate Drives</option>
                <option value="Custom Event">Custom Event</option>
              </select></label>
            )}
            <label className="enquiry-field-wide">Subject<input name="subject" type="text" placeholder="How can we help?" defaultValue={defaultSubject} /></label>
            <label className="enquiry-field-wide">Message<textarea name="message" rows={4} placeholder="Tell us a little about what you need" required /></label>
          </div>
          <div className="enquiry-form-bottom">
            <button className="button button-dark" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send enquiry"} <span aria-hidden="true">&rarr;</span>
            </button>
            <p className="enquiry-form-status" role="status" aria-live="polite">{status}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

function getDefaultTitle(type: string): string {
  const titles: Record<string, string> = {
    'pickup': 'Schedule a Pickup',
    'quote': 'Request a Quote',
    'project': 'Project Partnership Enquiry',
    'conference': 'Conference Enquiry',
    'event': 'Event Enquiry',
    'service': 'Service Enquiry',
    'subscribe': 'Subscribe to Updates',
  };
  return titles[type] || 'Send us a message';
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