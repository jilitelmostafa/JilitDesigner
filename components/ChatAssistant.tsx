
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';
import { getDesignAdvice } from '../services/geminiService';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "مرحباً بك! أنا مساعد المصطفى جليت الذكي. كيف يمكنني مساعدتك اليوم في مشروعك القادم؟", isBot: true }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, isBot: false }]);
    setInput("");
    setIsLoading(true);

    const botResponse = await getDesignAdvice(userMsg);
    setMessages(prev => [...prev, { text: botResponse || "", isBot: true }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-80 md:w-96 mb-4 flex flex-col overflow-hidden border border-gray-100 dark:border-white/10 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-[#1abf96] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-semibold">مساعد المصطفى الذكي</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-teal-500 rounded p-1 transition-colors">
              <X size={20} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-950 scrollbar-thin"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.isBot 
                      ? 'bg-white dark:bg-slate-800 text-slate-800 dark:text-gray-100 shadow-sm border border-gray-100 dark:border-white/5 rounded-tr-none' 
                      : 'bg-[#1abf96] text-white rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 animate-pulse text-gray-400 text-xs">
                  جاري التفكير...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-white/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="اكتب سؤالك هنا..."
              className="flex-1 text-sm bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1abf96]"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-[#1abf96] text-white p-2 rounded-full hover:bg-[#15a382] transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1abf96] text-white p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all flex items-center gap-2 group"
      >
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap ml-1 text-sm font-medium">تحدث مع المساعد</span>}
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatAssistant;
