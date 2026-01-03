
import React, { useState } from 'react';
import { DESIGNER_INFO } from '../constants';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');

    try {
      const response = await fetch('https://formspree.io/f/jilitsig@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success message after 5 seconds to allow new messages
        setTimeout(() => setStatus('IDLE'), 5000);
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('ERROR');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const googleMapsUrl = `https://www.google.com/maps/place/Mohammedia,+Morocco`;

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
              <a href="https://instagram.com/jilitsig" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-slate-900 rounded-[3rem] p-10 relative border border-gray-100 dark:border-white/5 shadow-xl dark:shadow-2xl">
             {status === 'SUCCESS' ? (
               <div className="flex flex-col items-center justify-center h-full py-20 text-center space-y-4 animate-in zoom-in duration-300">
                 <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center shadow-lg">
                   <CheckCircle2 size={48} />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 dark:text-white">تم المراسلة بنجاح</h3>
                 <p className="text-gray-500 dark:text-gray-400">شكراً لتواصلك معنا، سأقوم بالرد عليك في أقرب وقت.</p>
                 <button 
                  onClick={() => setStatus('IDLE')}
                  className="mt-6 text-[#1abf96] font-bold hover:underline"
                 >
                   إرسال رسالة أخرى
                 </button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6 text-right">
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-gray-400">الاسم الكامل</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl p-4 focus:ring-2 focus:ring-[#1abf96] focus:outline-none transition-all" 
                          placeholder="أدخل اسمك" 
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-gray-400">البريد الإلكتروني</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl p-4 focus:ring-2 focus:ring-[#1abf96] focus:outline-none transition-all" 
                          placeholder="example@mail.com" 
                        />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 dark:text-gray-400">الموضوع</label>
                     <input 
                        type="text" 
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl p-4 focus:ring-2 focus:ring-[#1abf96] focus:outline-none transition-all" 
                        placeholder="كيف يمكنني مساعدتك؟" 
                      />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-slate-700 dark:text-gray-400">الرسالة</label>
                     <textarea 
                        rows={4} 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-2xl p-4 focus:ring-2 focus:ring-[#1abf96] focus:outline-none transition-all resize-none" 
                        placeholder="اكتب تفاصيل مشروعك هنا..."
                      ></textarea>
                  </div>
                  
                  {status === 'ERROR' && (
                    <div className="flex items-center gap-2 text-red-500 text-sm font-bold animate-in fade-in slide-in-from-top-2">
                      <AlertCircle size={16} />
                      حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={status === 'LOADING'}
                    className={`w-full py-5 bg-[#1abf96] text-white font-black rounded-2xl transition-all shadow-xl shadow-[#1abf96]/20 flex items-center justify-center gap-3 ${status === 'LOADING' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#15a382]'}`}
                  >
                     {status === 'LOADING' ? 'جاري الإرسال...' : 'أرسل الآن'} <Send size={20} className={status === 'LOADING' ? 'animate-pulse' : ''} />
                  </button>
               </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
