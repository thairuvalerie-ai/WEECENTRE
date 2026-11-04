"use client";

import { useEffect, useRef, useState } from "react";

interface ReCaptchaProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
}

export default function ReCaptcha({ onVerify, onExpire }: ReCaptchaProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);

  useEffect(() => {
    // Load reCAPTCHA script
    const loadScript = () => {
      if (document.querySelector('script[src*="recaptcha"]')) {
        setIsLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit`;
      script.async = true;
      script.defer = true;
      script.onload = () => setIsLoaded(true);
      document.head.appendChild(script);
    };

    loadScript();

    return () => {
      // Cleanup if needed
      if (widgetId.current && window.grecaptcha) {
        window.grecaptcha.reset(widgetId.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isLoaded && containerRef.current && window.grecaptcha && !widgetId.current) {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      
      if (!siteKey) {
        console.error('reCAPTCHA site key not configured');
        return;
      }

      widgetId.current = window.grecaptcha.render(containerRef.current, {
        sitekey: siteKey,
        callback: (token: string) => {
          onVerify(token);
        },
        'expired-callback': () => {
          if (onExpire) onExpire();
        },
      });
    }
  }, [isLoaded, onVerify, onExpire]);

  if (!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY) {
    return (
      <div className="recaptcha-error">
        reCAPTCHA not configured. Please add NEXT_PUBLIC_RECAPTCHA_SITE_KEY to environment variables.
      </div>
    );
  }

  return <div ref={containerRef} className="recaptcha-container" />;
}

// Extend window interface for grecaptcha
declare global {
  interface Window {
    grecaptcha: {
      render: (container: HTMLElement, options: any) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
  }
}
