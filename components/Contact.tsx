
import React, { useEffect, useState } from 'react';
import { DESIGNER_INFO } from '../constants';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle, Twitter, Facebook } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState<'X' | 'FB'>('X');
  const googleMapsUrl = `https://www.google.com/maps/place/Mohammedia,+Morocco`;

  // Handle re-parsing of social widgets when tab or theme changes
  useEffect(() => {
    // Refresh Twitter
    if ((window as any).twttr && (window as any).twttr.widgets) {
      (window as any).twttr.widgets.load();
    }
    // Refresh Facebook
    if ((window as any).FB) {
      (window as any).FB.XFBML.parse();
    }
  }, [isDark, activeTab]);

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden border-t border-gray-50 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Information */}
          <div className="space-y-12">
            <div className="space-y-6 text-right">
              <h3 className="text-[#1abf96] dark:text-[#1abf96] font-bold uppercase tracking-widest text-sm">تواصل معي</h3>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">ابقَ على اتصال</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                تابع آخر أعمالي وتحديثاتي عبر منصات التواصل الاجتماعي، أو تواصل معي مباشرة عبر القنوات المتاحة أدناه.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-slate-900 rounded-3xl group hover:bg-teal-50 dark:hover:bg-[#1abf96]/5 transition-colors border border-transparent dark:border-white/5">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-[#1abf96] shadow-sm group-hover:bg-[#1abf96] group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 dark:text-gray-500 font-bold uppercase mb-1">البريد الإلكتروني</p>
                  <a href={`mailto:${DESIGNER_INFO.email}`} className="text-lg font-bold text-slate-900 dark:text-white hover:text-[#1abf96] transition-colors">{DESIGNER_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-slate-900 rounded-3xl group hover:bg-teal-50 dark:hover:bg-[#1abf96]/5 transition-colors border border-transparent dark:border-white/5">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-[#1abf96] shadow-sm group-hover:bg-[#1abf96] group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 dark:text-gray-500 font-bold uppercase mb-1">الهاتف / واتساب</p>
                  <a href={`tel:${DESIGNER_INFO.phone}`} className="text-lg font-bold text-slate-900 dark:text-white hover:text-[#1abf96] transition-colors">{DESIGNER_INFO.phone}</a>
                </div>
              </div>

              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-slate-900 rounded-3xl group hover:bg-teal-50 dark:hover:bg-[#1abf96]/5 transition-colors border border-transparent dark:border-white/5 block"
              >
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-[#1abf96] shadow-sm group-hover:bg-[#1abf96] group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 dark:text-gray-500 font-bold uppercase mb-1">الموقع</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#1abf96] transition-colors">{DESIGNER_INFO.location}</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4 justify-end">
              <a href={`https://wa.me/${DESIGNER_INFO.phone.replace(/\s+/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </a>
              <a href="https://www.linkedin.com/in/Jilitelmostafa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1abf96] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </a>
              <a href="https://facebook.com/jilitelmostafa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com/jilitsig" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram size={24} />
              </a>
              <a href="https://x.com/jilitmostafa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Side: Integrated Social Feed Box */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-[3rem] p-4 relative border border-gray-100 dark:border-white/5 shadow-xl dark:shadow-2xl overflow-hidden min-h-[650px] flex flex-col">
            {/* Custom Tabs Header */}
            <div className="flex items-center justify-between px-2 mb-4 bg-white dark:bg-slate-800 p-2 rounded-full shadow-inner">
               <button 
                 onClick={() => setActiveTab('FB')}
                 className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-black text-sm transition-all duration-300 ${
                   activeTab === 'FB' 
                     ? 'bg-[#1877F2] text-white shadow-lg translate-x-0' 
                     : 'text-gray-400 hover:text-[#1877F2]'
                 }`}
               >
                 <Facebook size={18} />
                 منشورات فيسبوك
               </button>
               <button 
                 onClick={() => setActiveTab('X')}
                 className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-black text-sm transition-all duration-300 ${
                   activeTab === 'X' 
                     ? 'bg-slate-900 dark:bg-black text-white shadow-lg translate-x-0' 
                     : 'text-gray-400 hover:text-slate-900 dark:hover:text-white'
                 }`}
               >
                 <Twitter size={18} />
                 تغريدات X
               </button>
            </div>
            
            <div className="flex-grow overflow-y-auto rounded-[2rem] bg-white dark:bg-slate-950 custom-scrollbar flex flex-col items-center">
               {activeTab === 'X' ? (
                 <div className="w-full px-4 pt-4 animate-in fade-in duration-500">
                   <a 
                     className="twitter-timeline" 
                     data-height="530" 
                     data-theme={isDark ? "dark" : "light"} 
                     data-chrome="noheader nofooter noborders transparent"
                     href="https://twitter.com/jilitmostafa?ref_src=twsrc%5Etfw"
                   >
                     جاري تحميل التغريدات...
                   </a>
                 </div>
               ) : (
                 <div className="w-full h-full flex justify-center pt-2 animate-in fade-in duration-500 overflow-hidden">
                    <div 
                      className="fb-page" 
                      data-href="https://www.facebook.com/jilitelmostafa/" 
                      data-tabs="timeline" 
                      data-width="500" 
                      data-height="550" 
                      data-small-header="false" 
                      data-adapt-container-width="true" 
                      data-hide-cover="false" 
                      data-show-facepile="true"
                    >
                      <blockquote cite="https://www.facebook.com/jilitelmostafa/" className="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/jilitelmostafa/">Jilit Designer - المصطفى جليط</a>
                      </blockquote>
                    </div>
                 </div>
               )}
            </div>
            
            <div className="p-4 text-center">
               <p className="text-xs text-gray-400 font-bold mb-1">ابقَ على اطلاع دائم بآخر أعمالي</p>
               <a 
                 href={activeTab === 'X' ? "https://x.com/jilitmostafa" : "https://facebook.com/jilitelmostafa"} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className={`text-sm font-black transition-colors ${activeTab === 'X' ? 'text-slate-800 dark:text-white' : 'text-[#1877F2]'}`}
               >
                 {activeTab === 'X' ? "@jilitmostafa" : "Jilit Designer Page"}
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
