import { brokerConfig } from "@/brokerConfig";
import Layout from "@/components/Layout";
import BrokerForm from "@/components/BrokerForm";

export default function Sell() {
  return (
    <Layout>
      <div
        className="py-16 px-4"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #0d2030 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-[#00b4c8] text-xs uppercase tracking-[0.2em] font-semibold mb-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            For Business Sellers
          </p>
          <h1
            className="text-white font-extrabold text-4xl mb-3"
            style={{ fontFamily: "Raleway, sans-serif", letterSpacing: "-0.02em" }}
          >
            Free Business Valuation
          </h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            No obligation · 100% confidential · No upfront fees
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-gray-900 font-extrabold text-2xl mb-4" style={{ fontFamily: "Raleway, sans-serif" }}>
          Request Your No-Cost Business Valuation
        </h2>
        <div className="w-12 h-1 bg-[#00b4c8] mb-6" />

        <p className="text-gray-500 leading-relaxed mb-4">
          Thinking about selling your business? Get started with a FREE, confidential business
          valuation. There is absolutely no cost and no obligation. We will review your information
          and contact you to discuss what your business is worth in today's market.
        </p>
        <p className="text-gray-500 leading-relaxed mb-8">
          We never charge upfront fees — our services are 100% performance based. You only pay when
          your business sells.
        </p>

        <BrokerForm formId={brokerConfig.sellerFormId} purpose="valuation" />
      </div>
    </Layout>
  );
}
