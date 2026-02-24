import React from "react";
import PlanFeatureList from "./PlanFeatureList";
import logoIcon from "../../assets/logo-in-pricingcards.png";

/**
 * Props for PricingCard component
 */
interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  billingNote?: string;
  buttonText: string;
  features: string[];
  highlighted?: boolean;
}

/**
 * PricingCard
 * Renders a single pricing plan card
 */
const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  billingNote,
  buttonText,
  features,
  highlighted = false,
}) => {
  return (
    <div
  className={`relative overflow-hidden rounded-2xl border p-6
    bg-[#171717] border-[#3B3B3B]
    ${highlighted ? "shadow-[0_0_60px_rgba(154,255,46,0.35)]" : ""}
  `}
>
    {/* Green gradient glow */}
<div
  className="pointer-events-none absolute bottom-[-40%] left-1/2
  h-[80%] w-[140%] -translate-x-1/2
  rounded-full bg-[radial-gradient(circle,rgba(154,255,46,0.35),transparent_70%)]
  blur-3xl"
/>
      {/* Top content */}
      <div>
        {/* Logo */}
        <img src={logoIcon} alt="Finsentsis" className="h-8 w-8 mb-4" />

        {/* Title */}
        <h3 className="text-xl font-semibold text-white">{title}</h3>

        {/* Description */}
        <p className="mt-1 text-sm text-gray-400">{description}</p>

        {/* Price */}
        <div className="mt-4">
          <span className="text-3xl font-bold text-white">{price}</span>
          {billingNote && (
            <p className="mt-1 text-xs text-gray-400">{billingNote}</p>
          )}
        </div>

        {/* CTA Button */}
        <button
          className="mt-6 w-full rounded-lg bg-[#9AFF2E] py-2.5
          text-sm font-medium text-black transition
          hover:bg-[#8BE629]"
        >
          {buttonText}
        </button>

        {/* Feature list */}
        <PlanFeatureList features={features} />
      </div>
    </div>
  );
};

export default PricingCard;