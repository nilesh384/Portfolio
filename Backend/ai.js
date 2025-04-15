import { GoogleGenAI } from "@google/genai";
import removeMd from 'remove-markdown';
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_PROMPT = {
  role: "system",
  parts: [{ text: "The owner of this website is Nilesh Bera. He is a second year college student of 18 years. Try to answer in points always." }]
};

async function main(messages) {
  // const geminiMessages = messages.map(msg => ({
  //   role: msg.role === 'user' ? 'user' : 'model',
  //   parts: [{ text: msg.message }]
  // }));

  const userMessages = messages
  .filter(msg => msg.message?.trim()) // skip blank messages
  .map(msg => {
    let role = msg.role?.toLowerCase();

    // Gemini only accepts 'user' or 'model'
    const geminiRole = role === 'user' ? 'user' :
                       role === 'ai' ? 'model' :
                       'user'; // Treat system/custom as 'system' input to set context

    return {
      role: geminiRole,
      parts: [{ text: msg.message }],
    };
  });

  const geminiMessages = [SYSTEM_PROMPT, ...userMessages];
  

  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: geminiMessages,
  });

  const text = result.text;  // ✅ FIXED this line
  return removeMd(text);
}

export default main;
