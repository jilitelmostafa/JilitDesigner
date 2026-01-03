
import React from 'react';
import { DESIGNER_INFO } from '../constants';
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle, Twitter, Facebook, Star, Quote } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
}

const TESTIMONIALS = [
  {
    id: 1,
    name: 'أحمد العتبي',
    role: 'رائد أعمال',
    content: 'تصميمات مبهرة واحترافية عالية جداً، المصطفى فنان حقيقي يهتم بأدق التفاصيل ويقدم جودة تفوق التوقعات دائماً.',
    rating: 5
  },
  {
    id: 2,
    name: 'سارة المحمدي',
    role: 'كاتبة وروائية',
    content: 'طلبت تصميم غلاف لكتابي الجديد وكانت النتيجة مذهلة. استطاع المصمم تحويل روح الرواية إلى صورة فنية جذابة.',
    rating: 5
  },
  {
    id: 3,
    name: 'يوسف بناني',
    role: 'صاحب شركة تسويق',
    content: 'سرعة في التنفيذ وجودة عالمية. الفلايرات التي صممها لنا زادت من نسبة التفاعل والوصول لعملائنا بشكل ملحوظ.',
    rating: 5
  },
  {
    id: 4,
    name: 'منى الوجداني',
    role: 'مدربة معتمدة',
    content: 'تعامل راقي وذوق رفيع في اختيار الألوان. تصاميم الشواهد للدورات التي أقدمها نالت إعجاب جميع المتدربين.',
    rating: 5
  },
  {
    id: 5,
    name: 'خالد الصاوي',
    role: 'مدير مطعم',
    content: 'أفضل مصمم تعاملت معه، يفهم الفكرة من أول مرة ويحولها لواقع بصري قوي. احترافية تامة في المواعيد والجودة.',
    rating: 5
  }
];

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  const googleMapsUrl = `https://www.google.com/maps/place/Mohammedia,+Morocco`;

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 transition-colors overflow-hidden border-t border-gray-50 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Information */}
          <div className="space-y-12">
            <div className="space-y-6 text-right">
              <h3 className="text-[#1abf96] dark:text-[#1abf96] font-bold uppercase tracking-widest text-sm">تواصل معي</h3>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white">لنبدأ مشروعك القادم</h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                سواء كنت بحاجة إلى هوية بصرية كاملة، فلايرات إبداعية، أو أغلفة كتب مميزة، أنا هنا لمساعدتك في تحقيق رؤيتك.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-slate-900 rounded-3xl group hover:bg-teal-50 dark:hover:bg-[#1abf96]/5 transition-colors border border-transparent dark:border-white/5">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-[#1abf96] shadow-sm group-hover:bg-[#1abf96] group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div className="text-right flex-grow">
                  <p className="text-sm text-gray-400 dark:text-gray-500 font-bold uppercase mb-1">البريد الإلكتروني</p>
                  <a href={`mailto:${DESIGNER_INFO.email}`} className="text-lg font-bold text-slate-900 dark:text-white hover:text-[#1abf96] transition-colors">{DESIGNER_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-slate-900 rounded-3xl group hover:bg-teal-50 dark:hover:bg-[#1abf96]/5 transition-colors border border-transparent dark:border-white/5">
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-[#1abf96] shadow-sm group-hover:bg-[#1abf96] group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div className="text-right flex-grow">
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
                <div className="text-right flex-grow">
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

          {/* Right Side: Customer Reviews Box */}
          <div className="bg-gray-50 dark:bg-slate-900 rounded-[3rem] p-8 relative border border-gray-100 dark:border-white/5 shadow-xl dark:shadow-2xl flex flex-col min-h-[700px]">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#1abf96]/10 rounded-full flex items-center justify-center text-[#1abf96]">
                    <Quote size={20} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">تقييمات العملاء</h3>
               </div>
               <div className="flex items-center gap-1 bg-white dark:bg-slate-800 px-4 py-1 rounded-full border border-gray-100 dark:border-white/5">
                 <span className="font-bold text-[#1abf96]">5.0</span>
                 <Star size={14} className="fill-[#1abf96] text-[#1abf96]" />
               </div>
            </div>

            <div className="flex-grow space-y-4 overflow-y-auto custom-scrollbar pr-2">
              {TESTIMONIALS.map((review) => (
                <div 
                  key={review.id} 
                  className="bg-white dark:bg-slate-800 p-6 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-[#1abf96]">
                        {review.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{review.name}</h4>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">{review.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#1abf96] text-[#1abf96]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed italic">
                    "{review.content}"
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#1abf96] rounded-[2rem] text-white flex items-center justify-between">
               <div className="space-y-1">
                 <p className="font-black">هل أنت معجب بما تراه؟</p>
                 <p className="text-xs text-teal-50">انضم لأكثر من 1000 عميل سعيد</p>
               </div>
               <a href={`tel:${DESIGNER_INFO.phone}`} className="bg-white text-[#1abf96] px-6 py-2 rounded-full font-black text-sm hover:scale-105 transition-transform">
                 اتصل الآن
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
