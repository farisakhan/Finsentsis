import React from "react";
import checkIcon from "../../assets/list-checkmark.png";

/**
 * Props definition for PlanFeatureList
 * This component expects an array of feature strings
 */
interface PlanFeatureListProps {
  features: string[];
}

/**
 * PlanFeatureList
 * Renders a vertical list of pricing features with check icons
 */
const PlanFeatureList: React.FC<PlanFeatureListProps> = ({ features }) => {
  return (
    <ul className="mt-6 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          {/* Check icon */}
          <img
            src={checkIcon}
            alt="check"
            className="mt-1 h-5 w-5 flex-shrink-0"
          />

          {/* Feature text */}
          <span className="text-sm text-gray-300 leading-relaxed">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PlanFeatureList;