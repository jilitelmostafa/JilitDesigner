
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
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
          
          {/* Social Proof Bar */}
          <div className="py-8 bg-[#1abf96] relative z-10 -mt-10 mx-6 md:mx-20 rounded-3xl shadow-2xl flex flex-wrap justify-around items-center gap-6 px-10">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-white">{DESIGNER_INFO.stats.projects}</span>
              <span className="text-teal-50 font-bold uppercase tracking-wider text-[10px] md:text-xs">مشروع منجز</span>
            </div>
            <div className="w-px h-10 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-white">{DESIGNER_INFO.stats.satisfaction}</span>
              <span className="text-teal-50 font-bold uppercase tracking-wider text-[10px] md:text-xs">رضا العملاء</span>
            </div>
            <div className="w-px h-10 bg-white/20 hidden md:block"></div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-white">{DESIGNER_INFO.stats.experience}</span>
              <span className="text-teal-50 font-bold uppercase tracking-wider text-[10px] md:text-xs">سنوات خبرة</span>
            </div>
          </div>

          <Services />
          
          <Portfolio />
          
          {/* Call to Action Banner */}
          <section className="py-20 bg-slate-900 dark:bg-slate-950 text-white">
            <div className="container mx-auto px-6 flex flex-col items-center text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-black max-w-2xl leading-tight">جاهز لنقل مشروعك إلى المستوى التالي من الاحترافية؟</h2>
              <p className="text-gray-400 text-lg max-w-xl">ابدأ اليوم تصميمك الجديد الذي سيميز علامتك التجارية عن المنافسين.</p>
              <a href="#contact" className="px-12 py-5 bg-[#1abf96] text-white rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-[#1abf96]/30">أطلب تصميمك الان</a>
            </div>
          </section>

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
            
            <div className="text-gray-400 text-sm italic">
              بني بكل حب بواسطة {DESIGNER_INFO.name}
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
