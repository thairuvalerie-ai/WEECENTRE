"use client";

import { useState } from "react";

interface SocialShareProps {
  url?: string;
  title?: string;
}

export default function SocialShare({ url, title }: SocialShareProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || 'WEEE Centre - Responsible E-Waste Management';

  const shareLinks = [
    {
      name: 'facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      label: 'Share on Facebook',
    },
    {
      name: 'twitter',
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      label: 'Share on Twitter',
    },
    {
      name: 'linkedin',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      label: 'Share on LinkedIn',
    },
    {
      name: 'whatsapp',
      href: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
      label: 'Share on WhatsApp',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="social-share">
      <span className="share-label">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="share-link"
          aria-label={link.label}
        >
          {link.name.charAt(0).toUpperCase() + link.name.slice(1)}
        </a>
      ))}
      <button
        onClick={copyToClipboard}
        className="share-link copy-link"
        aria-label="Copy link"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
}
