// GA4 Event Tracking Functions

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, formStatus: 'success' | 'error') => {
  trackEvent('form_submission', {
    form_name: formName,
    form_status: formStatus,
  });
};

// Track outbound link clicks
export const trackOutboundLink = (url: string, linkText: string) => {
  trackEvent('outbound_link_click', {
    url: url,
    link_text: linkText,
  });
};
