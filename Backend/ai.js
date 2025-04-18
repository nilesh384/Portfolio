import { GoogleGenAI } from "@google/genai";
import removeMd from 'remove-markdown';
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_PROMPT = {
  role: "user",
  parts: [{ text: "About Me\nHey there! I’m Nilesh Bera, a passionate second-year college student, developer, and problem solver from Kolkata, West Bengal, who loves building real-world solutions with clean and scalable code.\n\n@ Who am I?\nA full-stack developer diving deep into backend systems and other technologies. I'm all about using tech to solve real problems in education, health, and daily productivity.\n\n@ What Drives Me?\nHackathons & fast-paced team projects\nWorking on real world application based projects\nLearning new technologies\nContinuous learning & building\n\n@ Tech Philosophy\nCode should be clean, scalable, and fast. Project should be organised. Whether it's a chatbot using Gemini API or a full-stack web app, I like building systems that work reliably under pressure.\n\nNilesh Bera\n↓\n\nEducation\nB.Tech - Computer Science\nVIT-AP University\nAmaravati, Andhra Pradesh\n2024 – 2028 | Current CGPA: 9.14\nCore Computer Science Student.\nProjects in full-stack & AI-powered apps.\nCore courses: DSA, DBMS, OOPs, Web Technologies, OS.\n\nClass 12 (CBSE)\nIndira Gandhi Memorial High School\nKolkata, West Bengal\n2023 – 2024 | Percentage: 82%\nScience stream with CS as elective.\nFocused on physical and biological science.\n\nClass 10 (CBSE)\nIndira Gandhi Memorial High School\nKolkata, West Bengal\n2021 – 2022 | Percentage: 94.2%\nParticipated in science exhibitions.\nAwarded scholar certificates for good performance in boards.\n\n@ Note The owner of this website is Nilesh Bera. Try to answer in points always. Dont say these details unnecessarily until asked for." }]
};

async function main(messages) {
 
  const userMessages = messages
  .filter(msg => msg.message?.trim()) // skip blank messages
  .map(msg => {
    let role = msg.role?.toLowerCase();

    // Gemini only accepts 'user' or 'model'
    const geminiRole = role === 'user' ? 'user' : 'model'; // ✅ Only user/model allowed

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
