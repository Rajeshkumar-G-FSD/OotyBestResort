import { GoogleGenAI } from "@google/genai";
import { IMAGES, SUITES } from "../constants";

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for Aura Resort, a luxury minimalist resort.
Your personality is professional, serene, and helpful. You speak with a touch of "zen" elegance.

Resort Information:
- Location: 123 Tranquil Bay Road, Coastal Province.
- Vibe: Minimalist luxury, glassmorphism, coastal tranquility.
- Amenities:
  * Accommodation: Panoramic ocean view suites.
  * Dining: Organic farm-to-table culinary experiences.
  * Wellness: Zen meditation, spa treatments, mineral pools.
  * Experiences: Coastal trekking, private sailing, art & pottery.
- Suites:
  * Luxury Suite: $450/night. Ocean view, king bed, 65m².
  * Grand Villa: $850/night. Private pool, butler service, 120m².

Your Goal:
1. Answer any questions about the resort based on the information above.
2. If you don't know the answer, politely suggest contacting the front desk at +1 (555) 123-4567.
3. Encourage users to book their stay.
4. If a user expresses interest in booking, guide them to use our booking form.

Interaction Guidelines:
- Keep responses concise and elegant.
- Use bullet points for features.
- If the user asks to book, tell them: "You can click the 'Book Now' button in our menu or right here in our conversation to start your journey."
`;

let aiInstance: GoogleGenAI | null = null;

const getAi = () => {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey === 'undefined') {
      console.warn("Gemini API Key is missing or invalid. AI features will be disabled.");
      return null;
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
};

export const chatWithConcierge = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[] = []) => {
  try {
    const ai = getAi();
    if (!ai) {
      return "I'm currently resting. Please contact our front desk at +1 (555) 123-4567 for assistance.";
    }

    const model = ai.getGenerativeModel({
      model: "gemini-1.5-flash", // Using a stable model name
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const response = await model.generateContent({
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: message }] }
      ],
      generationConfig: {
        temperature: 0.7,
      },
    });

    return response.response.text();
  } catch (error) {
    console.error("AI Chat Error:", error);
    return "I apologize, but I'm having trouble connecting to my thoughts. Please try again or contact us directly.";
  }
};
