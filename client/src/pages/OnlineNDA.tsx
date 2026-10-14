import Layout from "@/components/Layout";
import { brokerConfig } from "@/brokerConfig";
import BrokerForm from "@/components/BrokerForm";

export default function OnlineNDA() {
  return (
    <Layout>
      {/* Page Header */}
      <div
        className="py-16 px-4"
        style={{ background: "linear-gradient(135deg, #0a0a1a 0%, #0d2030 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-[#00b4c8] text-xs uppercase tracking-[0.2em] font-semibold mb-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            For Buyers
          </p>
          <h1
            className="text-white font-extrabold text-4xl mb-3"
            style={{ fontFamily: "Raleway, sans-serif", letterSpacing: "-0.02em" }}
          >
            Online Non-Disclosure Agreement
          </h1>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            A Non-Disclosure Agreement is required before we can share confidential details about
            any business for sale. Complete the form below to get started — there is no obligation
            and no cost.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <BrokerForm formId={brokerConfig.ndaFormId} purpose="NDA" />
      </div>
    </Layout>
  );
}
