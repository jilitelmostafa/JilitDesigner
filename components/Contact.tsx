
import React from 'react';
import { DESIGNER_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-6 text-right">
              <h3 className="text-[#1abf96] dark:text-[#1abf96] font-bold uppercase tracking-widest text-sm">تواصل معي</h3>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">أطلب تصميمك الان</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                أنا متاح دائماً للمشاريع الجديدة والأفكار المبدعة. تواصل معي وسأقوم بالرد عليك في أقرب وقت ممكن.
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

              <div className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-slate-900 rounded-3xl group hover:bg-teal-50 dark:hover:bg-[#1abf96]/5 transition-colors border border-transparent dark:border-white/5">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-[#1abf96] shadow-sm group-hover:bg-[#1abf96] group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 dark:text-gray-500 font-bold uppercase mb-1">الموقع</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">{DESIGNER_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-end">
              <a href={`https://wa.me/${DESIGNER_INFO.phone.replace(/\s+/g, '')}`} className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <MessageCircle size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-[#1abf96] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-[3rem] p-10 relative border border-gray-100 dark:border-white/5 shadow-xl dark:shadow-2xl">
             <form className="space-y-6 text-right">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-gray-400">الاسم الكامل</label>
                      <input type="text" className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl p-4 focus:ring-2 focus:ring-[#1abf96] focus:outline-none transition-all" placeholder="أدخل اسمك" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-gray-400">البريد الإلكتروني</label>
                      <input type="email" className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl p-4 focus:ring-2 focus:ring-[#1abf96] focus:outline-none transition-all" placeholder="example@mail.com" />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700 dark:text-gray-400">الموضوع</label>
                   <input type="text" className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl p-4 focus:ring-2 focus:ring-[#1abf96] focus:outline-none transition-all" placeholder="كيف يمكنني مساعدتك؟" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold text-slate-700 dark:text-gray-400">الرسالة</label>
                   <textarea rows={4} className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl p-4 focus:ring-2 focus:ring-[#1abf96] focus:outline-none transition-all resize-none" placeholder="اكتب تفاصيل مشروعك هنا..."></textarea>
                </div>
                <button className="w-full py-5 bg-[#1abf96] text-white font-black rounded-2xl hover:bg-[#15a382] transition-all shadow-xl shadow-[#1abf96]/20 flex items-center justify-center gap-3">
                   أرسل الآن <Send size={20} />
                </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
