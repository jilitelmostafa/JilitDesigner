
import { GoogleGenAI } from "@google/genai";

export const getDesignAdvice = async (userMessage: string) => {
  // استخدام مفتاح البيئة مباشرة عند الاستدعاء لضمان التوافق
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "مرحباً! يبدو أن خدمة المساعد الذكي تحتاج إلى تهيئة المفتاح. يمكنك التواصل مع المصطفى مباشرة عبر واتساب.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [{ parts: [{ text: userMessage }] }],
      config: {
        systemInstruction: `أنت مساعد ذكي لموقع المصمم المصطفى جليت (Elmostafa JILIT).
        المصطفى مصمم انفوغرافي محترف في المحمدية، المغرب.
        يستخدم Photoshop و Illustrator.
        يصمم: فلايرات، شواهد، أغلفة كتب، وإعلانات دورات.
        أجب دائماً باللغة العربية بأسلوب مهني وودود.
        معلومات التواصل: jilitsig@gmail.com | +212 668 09 02 85`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "عذراً، المساعد منشغل حالياً. يفضل مراسلتي مباشرة عبر الواتساب.";
  }
};
