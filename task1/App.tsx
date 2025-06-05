import React from 'react';
import PricingCard from './PricingCard'; 
import './index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Pricing</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-5xl">
        <PricingCard
          plan="Standard"
          price="$100"
          features={[
            '50,000 Requests',
            '4 contributors',
            'Up to 3 GB storage space',
          ]}
        />
        <PricingCard
          plan="Pro"
          price="$200"
          features={[
            '100,000 Requests',
            '7 contributors',
            'Up to 6 GB storage space',
          ]}
          isFeatured
        />
        <PricingCard
          plan="Expert"
          price="$500"
          features={[
            '200,000 Requests',
            '11 contributors',
            'Up to 10 GB storage space',
          ]}
        />
      </div>
    </div>
  );
};

export default App;