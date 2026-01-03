
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Clients from './components/Clients';
import ChatAssistant from './components/ChatAssistant';
import ScrollToTop from './components/ScrollToTop';
import { DESIGNER_INFO } from './constants';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`${isDark ? 'dark' : ''} selection:bg-[#1abf96] selection:text-white`}>
      <div className="min-h-screen font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-gray-100 transition-colors duration-300">
        <Navigation isDark={isDark} toggleTheme={toggleTheme} />
        
        <main>
          <Hero />
          
          {/* Stats Section */}
          <div className="py-8 bg-[#1abf96] relative z-10 -mt-10 mx-6 md:mx-20 rounded-3xl shadow-2xl flex flex-wrap justify-around items-center gap-6 px-10">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-white">{DESIGNER_INFO.stats.projects}</span>
              <span className="text-teal-50 font-bold uppercase tracking-wider text-[10px] md:text-xs">مشروع منجز</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-white">{DESIGNER_INFO.stats.satisfaction}</span>
              <span className="text-teal-50 font-bold uppercase tracking-wider text-[10px] md:text-xs">رضا العملاء</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-white">{DESIGNER_INFO.stats.experience}</span>
              <span className="text-teal-50 font-bold uppercase tracking-wider text-[10px] md:text-xs">سنوات خبرة</span>
            </div>
          </div>

          <Services />
          
          <Portfolio />
          
          <Clients />

          <Contact />
        </main>

        <footer className="py-12 bg-gray-50 dark:bg-slate-950 border-t border-gray-100 dark:border-slate-900">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-right">
              <h4 className="text-2xl font-black text-[#1abf96] mb-2">{DESIGNER_INFO.name}</h4>
              <p className="text-gray-500 text-sm">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
            </div>
            
            <div className="flex gap-8 font-bold text-gray-600 dark:text-gray-400">
              <a href="#home" className="hover:text-[#1abf96] transition-colors">الرئيسية</a>
              <a href="#services" className="hover:text-[#1abf96] transition-colors">خدماتي</a>
              <a href="#portfolio" className="hover:text-[#1abf96] transition-colors">الأعمال</a>
              <a href="#contact" className="hover:text-[#1abf96] transition-colors">اتصل بي</a>
            </div>
          </div>
        </footer>

        <ChatAssistant />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default App;
