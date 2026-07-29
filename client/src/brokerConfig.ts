/**
 * BROKER CONFIGURATION FILE
 * ===========================
 * To set up a new broker site, simply update the values below.
 * All pages pull their broker-specific information from this single file.
 */

export const brokerConfig = {
  // Company Info
  companyName: "ABC Brokers",
  companySubtitle: "a Business Broker Development Group, LLC Company",
  parentCompany: "Business Broker Development Group, LLC",

  // Broker Info
  brokerName: "John Smith",
  brokerTitle: "Principal Broker/Owner",
  brokerPhone: "555-1212",
  brokerPhoneDisplay: "555-1212",
  brokerEmail: "john@abcbrokers.com",
  brokerEmail2: "", // optional second email

  // Location
  location: "Your City, ST",
  locationShort: "Your City, ST",

  // Hero image path (upload your city skyline here)
  heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80",

  // Broker headshot (optional - leave empty string to hide)
  brokerPhoto: "",

  // Testimonial (optional)
  testimonial: {
    quote:
      "Working with ProPlus Business Alliance made our business buying experience very enjoyable. The team was professional, confidential, and helped us find the right opportunity.",
    author: "Richard and Darby P., Business Owners",
  },

  // "Become a Broker" link - links to your main site
  becomeBrokerUrl: "#",

  // Copyright year
  copyrightYear: "2026",

  // Stats shown in the teal bar on homepage
  stats: [
    "FREE BUSINESS VALUATION",
    "NO UPFRONT FEES · 100% PERFORMANCE BASED",
    "NETWORK OF OVER 6,000 BUYERS",
  ],
};
