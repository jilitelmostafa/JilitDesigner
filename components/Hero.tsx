
import React, { useState, useEffect } from 'react';
import { DESIGNER_INFO } from '../constants';
import { ChevronDown, ArrowLeft, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Jilit Designer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 dark:bg-slate-950 text-white pt-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#1abf96] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-800 rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1 text-center md:text-right space-y-8">
          <div className="space-y-4">
            <h2 className="text-[#1abf96] font-bold tracking-widest text-lg md:text-xl uppercase">مرحبـاً بكم في عـالم التصميـم</h2>
            <div className="min-h-[4rem] md:min-h-[6rem] flex items-center justify-center md:justify-start">
               <h1 className="text-5xl md:text-7xl font-black leading-tight inline-block border-l-4 border-[#1abf96] pr-2">
                 <span className="text-transparent bg-clip-text bg-gradient-to-l from-teal-300 to-[#1abf96]">
                   {displayText}
                 </span>
               </h1>
            </div>

            {/* Social Media Links - Real Brand Colors */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
              <a 
                href="https://facebook.com/Jilitelmostafa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-slate-800 rounded-full text-[#1877F2] border border-slate-200 dark:border-slate-700 shadow-lg transition-all hover:scale-110 hover:bg-[#1877F2] hover:text-white" 
                title="Facebook"
              >
                <Facebook size={20} fill="currentColor" className="fill-transparent hover:fill-white" />
              </a>
              <a 
                href="https://instagram.com/jilitsig" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-slate-800 rounded-full text-[#E4405F] border border-slate-200 dark:border-slate-700 shadow-lg transition-all hover:scale-110 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white" 
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/Jilitelmostafa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-slate-800 rounded-full text-[#0A66C2] border border-slate-200 dark:border-slate-700 shadow-lg transition-all hover:scale-110 hover:bg-[#0A66C2] hover:text-white" 
                title="LinkedIn"
              >
                <Linkedin size={20} fill="currentColor" className="fill-transparent hover:fill-white" />
              </a>
              <a 
                href="https://x.com/jilitmostafa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-slate-800 rounded-full text-black dark:text-white border border-slate-200 dark:border-slate-700 shadow-lg transition-all hover:scale-110 hover:bg-black hover:text-white" 
                title="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://tiktok.com/@jilitelmostafa" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-slate-800 rounded-full text-black dark:text-white border border-slate-200 dark:border-slate-700 shadow-lg transition-all hover:scale-110 hover:bg-black hover:text-white" 
                title="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
              <a 
                href="https://wa.me/212668090285" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white dark:bg-slate-800 rounded-full text-[#25D366] border border-slate-200 dark:border-slate-700 shadow-lg transition-all hover:scale-110 hover:bg-[#25D366] hover:text-white" 
                title="WhatsApp"
              >
                <MessageCircle size={20} fill="currentColor" className="fill-transparent hover:fill-white" />
              </a>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed font-light mt-8">
              مصمم انفوغرافي متخصص في تحويل الأفكار إلى تصاميم بصرية مبهرة. أصمم الفلايرات، الشواهد، وأغلفة الكتب بأحدث الأدوات العالمية.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-[#1abf96] hover:bg-[#15a382] text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-[#1abf96]/30 flex items-center gap-2"
            >
              عرض أعمالي <ArrowLeft size={20} />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-white/10 hover:border-[#1abf96] text-white rounded-full font-bold transition-all hover:bg-white/5"
            >
              أطلب تصميمك الان
            </a>
          </div>

          <div className="pt-6">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {DESIGNER_INFO.tools.map(tool => (
                <span key={tool} className="text-[10px] md:text-xs font-mono px-3 py-1 bg-white/5 rounded-full border border-white/5 text-gray-400">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96 group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1abf96] to-teal-700 rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-500 shadow-2xl"></div>
            <div className="absolute inset-2 bg-slate-900 rounded-full z-0 overflow-hidden border-4 border-white/10">
              <img 
                src={DESIGNER_INFO.photo} 
                alt={DESIGNER_INFO.name}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
            </div>
            {/* Status Badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#1abf96] text-white px-6 py-3 rounded-2xl shadow-xl font-black animate-bounce hidden md:block">
               متوفر للعمل الحر
            </div>
          </div>
        </div>
      </div>

      <a href="#services" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-teal-500/50 hover:text-teal-500 transition-colors animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
