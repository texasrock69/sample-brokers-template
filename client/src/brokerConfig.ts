/**
 * BROKER CONFIGURATION FILE
 * ===========================
 * To set up a new broker site, simply update the values below.
 * All pages pull their broker-specific information from this single file.
 */

export const brokerConfig = {
  // Company Info
  companyName: "Main Street Business Brokers",
  companySubtitle: "a Business Broker Development Group, LLC Company",
  parentCompany: "Business Broker Development Group, LLC",

  // Broker Info
  brokerName: "Alecia Lue",
  brokerTitle: "Principal Broker/Owner",
  brokerPhone: "215-272-4336",
  brokerPhoneDisplay: "215-272-4336",
  brokerEmail: "alecia@mainstreetbbrokers.com",
  brokerEmail2: "", // optional second email

  websiteUrl: "https://www.mainstreetbbrokers.com",

  // Form IDs are added after the broker-specific forms are supplied.
  ndaFormId: "",
  sellerFormId: "",

  // Location
  location: "Philadelphia and Surrounding Areas",
  locationShort: "Philadelphia and Surrounding Areas",

  // Hero image path (stored in this repository for Railway deployment)
  heroImage: "/assets/sample-broker-hero.webp",

  // Broker headshot (optional - leave empty string to hide)
  brokerPhoto: "",

  // No broker-specific testimonial has been supplied.
  testimonial: null as { quote: string; author: string } | null,

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
