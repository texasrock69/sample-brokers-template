/**
 * BROKER CONFIGURATION FILE
 * ===========================
 * To set up a new broker site, update the values below.
 * Broker-specific branding, contact information, market, SEO, images,
 * marketing credentials, and form settings should live here.
 */

export const brokerConfig = {
  // Company Info
  companyName: "ABC Brokers",
  companySubtitle: "Certified, Trained & Supported by Business Broker Development Group, LLC",
  parentCompany: "Business Broker Development Group, LLC",
  affiliationLine:
    "Certified, trained, supported, and affiliated with Business Broker Development Group, LLC",

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

  // Hero image path (stored in this repository for Railway deployment)
  heroImage: "/assets/sample-broker-hero.webp",

  // Broker headshot (optional - leave empty string to hide)
  brokerPhoto: "",

  // BBDG network and marketing credentials used throughout the broker site.
  // These are network-level capabilities, not claims about the individual broker.
  network: {
    qualifiedBuyers: "6,000+",
    onlineMarketingPlatforms: "150+",
    onlineMarketingDescription:
      "Marketing exposure through BizBuySell and 150+ additional online platforms",
  },

  // SEO / sharing defaults. Update these for each broker and custom domain.
  seo: {
    title: "ABC Brokers | Business Brokerage in Your City, ST",
    description:
      "Confidential business brokerage services for buyers and sellers in Your City, ST. Certified, trained, and supported by Business Broker Development Group, LLC.",
    canonicalUrl: "", // e.g. https://www.abcbrokers.com
    socialImage: "/assets/sample-broker-hero.webp",
  },

  // Forms
  // Keep current Web3Forms behavior until a 123FormBuilder form is ready.
  // Update recipientEmail when provisioning each real broker site.
  forms: {
    recipientEmail: "toby@dallasbizbuysell.com",
    nda: {
      mode: "web3" as "web3" | "123formbuilder",
      formUrl: "",
    },
    sellerConsult: {
      mode: "web3" as "web3" | "123formbuilder",
      formUrl: "",
    },
  },

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
