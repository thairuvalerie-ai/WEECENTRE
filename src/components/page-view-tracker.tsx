"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view
    const trackPageView = async () => {
      try {
        await fetch('/api/analytics/page-view', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            path: pathname,
            userAgent: navigator.userAgent,
            referrer: document.referrer,
          }),
        });
      } catch (error) {
        // Silently fail - analytics shouldn't break the app
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to track page view:', error);
        }
      }
    };

    trackPageView();
  }, [pathname]);

  return null;
}
