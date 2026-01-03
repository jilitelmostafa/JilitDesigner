
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const Clients: React.FC = () => {
  // Triple the logos for a truly seamless loop
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h3 className="text-[#1abf96] font-bold uppercase tracking-widest text-sm mb-4">شركاء النجاح</h3>
        <h2 className="text-3xl font-black text-slate-900 dark:text-white">العملاء والشركاء</h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
          {logos.map((logo, index) => (
            <div 
              key={`${logo.name}-${index}`} 
              className="mx-12 w-32 md:w-40 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-8 md:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Second set for seamless loop handled by animation CSS in index.html, 
            but for RTL/LTR safety we sometimes double items in the same div or use CSS tricks. 
            The index.html has a simple 0% to 100% animation. Let's optimize it. */}
        <div className="absolute top-0 py-12 animate-marquee whitespace-nowrap flex items-center" aria-hidden="true">
          {logos.map((logo, index) => (
            <div 
              key={`${logo.name}-clone-${index}`} 
              className="mx-12 w-32 md:w-40 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-8 md:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
