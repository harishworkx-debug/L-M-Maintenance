// Google Analytics 4 & Conversion Event Tracking Utilities

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Tracks tap-to-call clicks across header, hero, sticky buttons, and cards.
 * Useful for measuring Call Conversions in Google Ads and GA4.
 */
export function trackCallClick(locationName: string) {
  if (typeof window !== 'undefined') {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'phone_call_click', {
        event_category: 'Lead',
        event_label: locationName,
        value: 1,
      });
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'phone_call_click',
        event_category: 'Lead',
        event_label: locationName,
      });
    }
  }
}

/**
 * Tracks quote and service request form submissions.
 */
export function trackFormSubmission(serviceName: string, cityName: string) {
  if (typeof window !== 'undefined') {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', {
        event_category: 'Form',
        event_label: `${serviceName} - ${cityName}`,
        value: 1,
      });
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'generate_lead',
        service: serviceName,
        city: cityName,
      });
    }
  }
}
