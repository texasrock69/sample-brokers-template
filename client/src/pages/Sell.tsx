import Layout from "@/components/Layout";
import { useEffect, useRef } from "react";

export default function Sell() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = formContainerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.defer = true;
    script.src = "https://form.123formbuilder.com/embed/6987914.js";
    script.setAttribute("data-role", "form");
    script.setAttribute("data-default-width", "800px");
    script.setAttribute("data-custom-vars", "hasEmbedFormStyle=1");
    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

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

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div ref={formContainerRef} className="w-full min-w-0" />
      </div>
    </Layout>
  );
}
