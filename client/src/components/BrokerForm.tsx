import { brokerConfig } from "@/brokerConfig";
import { useEffect, useRef } from "react";

export default function BrokerForm({ formId, purpose }: { formId: string; purpose: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !formId) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.defer = true;
    script.src = `https://form.123formbuilder.com/embed/${formId}.js`;
    script.setAttribute("data-role", "form");
    script.setAttribute("data-default-width", "800px");
    script.setAttribute("data-custom-vars", "hasEmbedFormStyle=1");
    container.appendChild(script);
    return () => container.replaceChildren();
  }, [formId]);

  if (!formId) {
    return (
      <div className="rounded border border-gray-200 bg-gray-50 p-6 text-gray-600">
        <p className="mb-4">Please contact {brokerConfig.brokerName} to request your {purpose === "NDA" ? "Non-Disclosure Agreement" : "confidential business valuation"}.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <a className="text-[#00b4c8] font-semibold hover:underline" href={`tel:${brokerConfig.brokerPhone}`}>{brokerConfig.brokerPhoneDisplay}</a>
          <a className="text-[#00b4c8] hover:underline break-all" href={`mailto:${brokerConfig.brokerEmail}`}>{brokerConfig.brokerEmail}</a>
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className="w-full min-w-0" />;
}
