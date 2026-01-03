
import React, { useState, useEffect } from 'react';
import { DESIGNER_INFO } from '../constants';
import { Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'خدماتي', href: '#services' },
    { label: 'معرض الأعمال', href: '#portfolio' },
    { label: 'أطلب تصميمك الان', href: '#contact' },
    { label: 'سيرتي الذاتية', href: 'https://jilit.netlify.app/', external: true },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-100 dark:border-white/5 py-3 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-black tracking-tighter transition-colors ${
          isScrolled 
            ? 'text-[#1abf96]' 
            : 'text-[#1abf96] md:text-white'
        }`}>
          JilitDesigner<span className="text-[#1abf96]">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className={`font-semibold hover:text-[#1abf96] transition-colors flex items-center gap-1 ${
                isScrolled ? 'text-slate-700 dark:text-gray-300' : 'text-white'
              }`}
            >
              {link.label}
              {link.external && <ExternalLink size={14} />}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all hover:bg-teal-50 dark:hover:bg-slate-800 ${
              isScrolled ? 'text-slate-700 dark:text-gray-300' : 'text-white'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle Group */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isScrolled ? 'text-slate-700 dark:text-gray-300' : 'text-white'}`}
          >
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>
          
          <button 
            className={`p-2 rounded-lg ${isScrolled ? 'text-slate-700 dark:text-white' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl p-6 border-t border-gray-100 dark:border-white/5 animate-in fade-in zoom-in duration-200">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-lg font-bold text-slate-900 dark:text-gray-100 py-2 border-b border-gray-50 dark:border-white/5 last:border-0 hover:text-[#1abf96] flex items-center justify-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                {link.external && <ExternalLink size={16} />}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
