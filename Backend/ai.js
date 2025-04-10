import { GoogleGenAI } from "@google/genai";
import removeMd from 'remove-markdown';
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function main(messages) {
  // const geminiMessages = messages.map(msg => ({
  //   role: msg.role === 'user' ? 'user' : 'model',
  //   parts: [{ text: msg.message }]
  // }));

  const geminiMessages = messages
  .filter(msg => msg.message?.trim()) // skip blank messages
  .map(msg => {
    let role = msg.role?.toLowerCase();

    // Gemini only accepts 'user' or 'model'
    const geminiRole = role === 'user' ? 'user' :
                       role === 'ai' ? 'model' :
                       'user'; // Treat system/custom as 'user' input to set context

    return {
      role: geminiRole,
      parts: [{ text: msg.message }],
    };
  });

  
  

  const result = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: geminiMessages,
  });

  const text = result.text;  // ✅ FIXED this line
  return removeMd(text);
}

export default main;
