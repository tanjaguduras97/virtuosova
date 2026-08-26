// Ad conversion tracking config.
//
// Fill these in once the accounts exist, then redeploy — no other code changes needed:
//   1. GA4_MEASUREMENT_ID   — Google Analytics → Admin → Data Streams → your web stream → "Measurement ID" (starts with "G-")
//   2. GOOGLE_ADS_ID        — Google Ads → Tools & Settings → Conversions → "Google Ads Conversion ID" (starts with "AW-")
//   3. GOOGLE_ADS_CONVERSION_LABEL — Google Ads → Tools & Settings → Conversions → create a "Contact form submission"
//      conversion action → the label shown after "AW-XXXXXXX/" in its event snippet
//
// Until real values are set, the gtag script is not loaded at all, so nothing fires and no
// placeholder data pollutes any account.
export const GA4_MEASUREMENT_ID = 'G-D0YXBBV2KG'
export const GOOGLE_ADS_ID = 'AW-XXXXXXXXX'
export const GOOGLE_ADS_CONVERSION_LABEL = 'XXXXXXXXXX'

export const TRACKING_CONFIGURED = !GA4_MEASUREMENT_ID.includes('XXXX')

// Call once, after a contact-form submission succeeds.
export function trackContactFormLead() {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'generate_lead', { event_category: 'contact_form' })
  if (!GOOGLE_ADS_ID.includes('XXXX') && !GOOGLE_ADS_CONVERSION_LABEL.includes('XXXX')) {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_ADS_CONVERSION_LABEL}`,
    })
  }
}
