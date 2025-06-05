import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, price, features, isFeatured }) => {
  return (
    <div
      className={`
        flex flex-col items-center
        w-80 
        py-8  
        mx-2 
        rounded-md  
        relative 
        hover:-translate-y-2 hover:shadow-xl
        ${isFeatured 
          ? 'bg-[#313C50] text-white z-10 transform scale-105 shadow-2xl'
          : 'bg-white text-gray-800 shadow-lg' 
        }
      `}
      tabIndex={0} 
      role="region"
      aria-labelledby={`${plan}-plan-heading`}
    >
      {/* Plan Name */}
      <h2 id={`${plan}-plan-heading`} className={`
        text-xl font-normal mb-8 uppercase tracking-wider 
        ${isFeatured ? 'text-white' : 'text-gray-800'} 
      `}>
        {plan}
      </h2>

      {/* Price */}
      <p className={`
        text-6xl font-bold mb-8
        ${isFeatured ? 'text-white' : 'text-gray-800'}
      `}>
        {price}
      </p>

      {/* Features List */}
      <ul className="text-center w-full mb-8 border-y border-gray-600">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`
              py-3
              ${isFeatured ? 'text-white' : 'text-gray-700'} 
              ${index < features.length - 1 ? 'border-b border-gray-600' : ''} 
            `}
          >
            {feature}
          </li>
        ))}
      </ul>

      {/* Subscribe Button */}
      <button
        className={`
          px-10 py-3 rounded-md font-semibold text-sm
          tracking-wider uppercase 
          transition-colors duration-300 
          ${isFeatured 
            ? 'bg-white text-gray-800 hover:bg-gray-200'
            : 'bg-[#313C50] text-white hover:bg-gray-700' 
          }
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        `}
        aria-label={`Subscribe to ${plan} plan`} 
      >
        SUBSCRIBE
      </button>
    </div>
  );
};

export default PricingCard;
