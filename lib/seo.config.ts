// lib/seo.config.ts

export const siteConfig = {
  name: "NeySax",
  title: "NeySax - Premium Event Entertainment & Booking Services",
  description:
    "Book world-class musicians, DJs, saxophonists, and entertainment services for your events. Professional performers for weddings, corporate events, and celebrations.",
  url: "https://neysax.com", // Replace with your actual domain
  ogImage: "https://neysax.com/og-image.jpg", // Create this image
  links: {
    twitter: "https://twitter.com/neysax",
    instagram: "https://instagram.com/neysax",
    facebook: "https://facebook.com/neysax",
  },
  keywords: [
    "event booking",
    "wedding entertainment",
    "live music booking",
    "saxophonist for hire",
    "DJ booking",
    "corporate event entertainment",
    "party entertainment",
    "musician booking",
    "event performers",
    "live band booking",
  ],
  creator: "@neysax",
  businessInfo: {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    name: "NeySax",
    description:
      "Premium event entertainment and booking services for all occasions",
    url: "https://neysax.com",
    telephone: "+1-XXX-XXX-XXXX", // Add your phone
    email: "contact@neysax.com", // Add your email
    address: {
      "@type": "PostalAddress",
      addressLocality: "Your City",
      addressRegion: "Your State",
      addressCountry: "Db",
    },
    priceRange: "$$",
    image: "https://neysax.com/logo.png",
  },
};

export type SiteConfig = typeof siteConfig;
