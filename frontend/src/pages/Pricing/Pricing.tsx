import React from "react";
import PricingCard from "../../components/pricing/PricingCard";

/**
 * Pricing Page
 * Displays pricing plans and CTA section
 */
const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Essentials",
      description: "For SMBs and small teams using basic compliance automation",
      price: "$499",
      billingNote: "/month or $4,990/year (save 2 months)",
      buttonText: "Start Free Trial",
      features: [
        "Core regulatory intelligence",
        "Audit-ready reporting",
        "Single-country coverage",
        "Email support",
        "Basic compliance monitoring",
        "API access",
      ],
    },
    {
      title: "Professional",
      description:
        "For mid-market enterprises with multi-domain and multi-country needs",
      price: "$2,499",
      billingNote: "/month or $24,990/year",
      buttonText: "Start Free Trial",
      highlighted: true,
      features: [
        "Everything in Essentials",
        "Policy-to-process automation",
        "Multi-country coverage (50+ countries)",
        "Advanced dashboards & risk simulation",
        "Real-time alerts & automation",
        "Priority support",
        "Advanced integrations",
        "Custom workflows",
      ],
    },
    {
      title: "Enterprise / Elite",
      description:
        "For large global organizations with deep integration and custom needs",
      price: "Custom",
      billingNote: "Starting at $10,000/month or $120,000/year",
      buttonText: "Schedule Demo",
      features: [
        "All modules + custom integrations",
        "Dedicated support",
        "SLA guarantees",
        "Premium features",
        "Global jurisdiction support (190+ countries)",
        "Enterprise AI & predictive analytics",
        "Fully autonomous execution",
        "Real-time dashboards & reporting",
        "Dedicated compliance consultant",
        "Custom integrations & APIs",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-[#111111] px-6 py-20">
      {/* Header Section */}
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-7xl font-inter display text-white">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-8 text-sm text-gray-400">
          From tax and payroll laws to ESG regulations and labor standards,
          everything <br/>runs autonomously through the Finsentsis engine.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>

     
    </section>
  );
};

export default Pricing;