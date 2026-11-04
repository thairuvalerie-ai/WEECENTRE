"use client";

import { useEffect } from "react";

export default function LiveChat() {
  useEffect(() => {
    // Tawk.to script - Replace with your actual Tawk.to ID
    const tawkToScript = document.createElement("script");
    tawkToScript.src = "https://embed.tawk.to/YOUR_TAWK_TO_ID/default";
    tawkToScript.async = true;
    tawkToScript.charset = "UTF-8";
    tawkToScript.setAttribute("crossorigin", "*");
    
    document.body.appendChild(tawkToScript);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(tawkToScript);
    };
  }, []);

  return null; // This component doesn't render anything visible
}
