import Script from "next/script";
import { GA_MEASUREMENT_ID } from "@/lib/site";

/**
 * Google tag (gtag.js) for Google Analytics 4.
 *
 * Loaded with the `afterInteractive` strategy — the strategy Next.js
 * recommends for analytics and tag managers: it loads as soon as possible
 * without blocking hydration of first-party code. GA4 tracks client-side
 * route changes automatically via Enhanced Measurement, so no manual
 * pageview wiring is needed for the App Router.
 */
export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
