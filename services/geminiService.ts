
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDesignAdvice = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are an AI assistant for Elmostafa JILIT's design portfolio. 
        Elmostafa is an expert infographic designer based in Mohammedia, Morocco.
        He uses Photoshop and Illustrator. He designs flyers, certificates, book covers, and course advertisements.
        Your goal is to answer potential clients' questions about design services, 
        provide general design tips, and represent Elmostafa professionally.
        Always answer in Arabic since the primary audience is Arabic-speaking, but be helpful and creative.
        Contact Info: Email: jilitsig@gmail.com, Phone: +212 668 09 02 85.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "عذراً، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة لاحقاً.";
  }
};
