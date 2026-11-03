import { clevelandHero } from "@/assets/clevelandHeroData";

/**
 * BROKER CONFIGURATION FILE
 * ===========================
 * Broker-specific information for Excel Business Brokers.
 */

export const brokerConfig = {
  // Company Info
  companyName: "Excel Business Brokers",
  companySubtitle: "a Business Broker Development Group, LLC Company",
  parentCompany: "Business Broker Development Group, LLC",

  // Broker Info
  brokerName: "Don Stuczynski",
  brokerTitle: "Broker/Partner",
  brokerPhone: "330-671-2630",
  brokerPhoneDisplay: "330-671-2630",
  brokerEmail: "Don@excelbizbrokers.com",
  brokerEmail2: "",

  // Location
  location: "Cleveland, OH",
  locationShort: "Cleveland, OH",

  // Cleveland skyline hero image
  heroImage: clevelandHero,

  // Broker headshot (optional)
  brokerPhoto: "",

  // Testimonial (optional)
  testimonial: {
    quote:
      "Professional, confidential guidance from first conversation through closing — focused on helping business owners and buyers reach the right outcome.",
    author: "Excel Business Brokers",
  },

  // "Become a Broker" link
  becomeBrokerUrl: "https://www.bizbrokersuccess.com",

  // Copyright year
  copyrightYear: "2026",

  // Stats shown in the teal bar on homepage
  stats: [
    "FREE BUSINESS VALUATION",
    "NO UPFRONT FEES · 100% PERFORMANCE BASED",
    "NETWORK OF OVER 6,000 BUYERS",
  ],
};
