
import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto mb-16 space-y-4">
          <h3 className="text-[#1abf96] dark:text-[#1abf96] font-bold uppercase tracking-widest text-sm">خدماتي الإبداعية</h3>
          
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white pt-8">ماذا يمكنني أن أقدم لك؟</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">أقدم مجموعة متكاملة من خدمات التصميم الجرافيكي بأعلى جودة لخدمة أهدافك التسويقية والمهنية.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const Icon = (Icons as any)[service.icon];
            return (
              <div 
                key={service.id} 
                className="group p-8 bg-gray-50 dark:bg-slate-900 rounded-3xl hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-[#1abf96]/10 transition-all border border-transparent dark:border-white/5 hover:border-teal-100 dark:hover:border-[#1abf96]/30 flex flex-col items-center text-center space-y-6"
              >
                <div className="w-16 h-16 bg-white dark:bg-slate-800 shadow-sm rounded-2xl flex items-center justify-center text-[#1abf96] group-hover:bg-[#1abf96] group-hover:text-white transition-all duration-500">
                  {Icon && <Icon size={32} strokeWidth={1.5} />}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#1abf96] transition-colors">{service.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
