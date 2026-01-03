
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  // Multiply the logos for a continuous effect
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-950/80 border-y border-gray-100 dark:border-white/5 transition-colors overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white">عملاؤنا</h2>
      </div>

      <div className="relative flex flex-col gap-12">
        {/* Row 1: Moving right to left */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {marqueeLogos.map((logo, index) => (
              <div 
                key={index} 
                className="mx-12 md:mx-20 flex items-center justify-center opacity-70 dark:opacity-40 hover:opacity-100 transition-all duration-500 pointer-events-none select-none"
              >
                <img 
                  src={logo} 
                  alt="Client Logo" 
                  className="h-24 md:h-32 w-auto object-contain transition-all grayscale dark:invert dark:grayscale-0"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moving left to right */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
            {marqueeLogos.slice().reverse().map((logo, index) => (
              <div 
                key={index} 
                className="mx-12 md:mx-20 flex items-center justify-center opacity-70 dark:opacity-40 hover:opacity-100 transition-all duration-500 pointer-events-none select-none"
              >
                <img 
                  src={logo} 
                  alt="Client Logo" 
                  className="h-24 md:h-32 w-auto object-contain transition-all grayscale dark:invert dark:grayscale-0"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
