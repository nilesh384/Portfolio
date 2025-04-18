import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "HospitalCare – Java-Based Hospital Management System",
    cover: "/assets/hospitalJdbc.png",
    images: ["/assets/hospitalJdbc.png", "/assets/hospitalJdbc2.png"],
    description:
      "A complete hospital management system built using Java, JDBC, and MySQL. It allows hospitals to manage patients, doctors, and appointments efficiently through a command-line interface.",
    tech: ["Java", "JDBC", "MySQL", "CLI"],
    features: [
      "Register new patients and manage their data",
      "Book and cancel appointments",
      "View doctor schedules",
      "Validation for real-time doctor availability",
    ],
    useCases: [
      "Can be used in low-resource environments",
      "Ideal for hospitals with CLI or remote server access",
      "Extendable for pharmacy and billing modules",
    ],
    link: "https://github.com/nilesh384/Hospital-Management-System",
  },
  {
    title: "Password Generator",
    cover: "/assets/PassGen.png",
    images: ["/assets/PassGen.png"],
    description:
      "A sleek and functional password generator built with React. This app lets users create secure passwords with customizable options like length, numbers, and special characters.",
    tech: ["React", "useState", "useEffect", "useCallback", "Tailwind CSS"],
    features: [
      "Custom length",
      "Special character toggles",
      "Copy to clipboard",
    ],
    useCases: [
      "Browser-based password generator",
      "Safe for sharing with non-tech users",
    ],
    link: "https://github.com/nilesh384/Password-Genrator",
  },
  {
    title: "DeepSeek AI VS Code Extension",
    cover: "/assets/deepSeek.png",
    images: ["/assets/deepSeek.png"],
    description:
      "DeepSeek AI is a powerful VS Code extension that brings conversational AI capabilities directly into your coding environment.",
    tech: ["Typescript", "VsCode Webview", "Ollama", "deepseek api"],
    features: ["Custom WebView", "LLM-powered chat", "Easy integration"],
    useCases: [
      "Dev assistants in VS Code",
      "Lightweight AI helpdesk for developers",
    ],
    link: "#",
  },
  {
    title: "Google Gemini Chatbot Server",
    cover: "/assets/geminiChat.png",
    images: ["/assets/geminiChat.png"],
    description:
      "AI chatbot backend built using Node.js, Express, Gemini API, and MongoDB. Supports contextual replies, roles, and chat history.",
    tech: ["Node js", "Express", "MongoDB", "Gemini 2.0 Flash", "Mongoose"],
    features: [
      "Role-based messages",
      "Mongo-backed memory",
      "Secure endpoints",
      "Remember chat history",
    ],
    useCases: ["AI-powered support bots", "Chatbot microservices"],
    link: "#",
  },
  {
    title: "Weather App",
    cover: "/assets/weather.png",
    images: ["/assets/weather.png"],
    description:
      "Modern weather UI built with CSS3 animations, designed for API integration. Visually pleasing and highly responsive.",
    tech: ["HTML", "CSS", "Javascript", "RapidAPI"],
    features: ["Live forecast-ready", "Animated UI", "Mobile friendly"],
    useCases: ["Weather dashboards", "Mobile web apps"],
    link: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-20 py-16 font-poppins">
      <h2
        className="text-4xl font-bold text-purple-400 text-center mb-12"
        data-aos="fade-up"
      >
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-purple-800 transition-transform transform hover:-translate-y-2 cursor-pointer"
            data-aos="fade-up"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.cover}
              alt={project.title}
              className="rounded-t-xl h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <div className="flex flex-wrap gap-2 text-xs text-purple-300 mt-2">
                {project.tech.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#2a2a2a] px-2 py-1 rounded-md border border-purple-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#111] rounded-xl w-full max-w-6xl max-h-[95vh] overflow-y-auto p-6 sm:p-10 relative text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="sticky top-0 left-full float-right z-10 text-white hover:text-purple-300 text-3xl hover:cursor-pointer"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <h3 className="text-3xl font-bold mb-4 text-purple-400">
                {selectedProject.title}
              </h3>
              <img
                src={selectedProject.cover}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-md mb-6"
              />
              <p className="text-gray-300 mb-6">
                {selectedProject.description}
              </p>

              <div className="space-y-6">
                <section>
                  <h4 className="text-lg text-purple-300 font-semibold mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {selectedProject.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#2a2a2a] px-2 py-1 rounded-md border border-purple-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>

                {selectedProject.features?.length > 0 && (
                  <section>
                    <h4 className="text-lg text-purple-300 font-semibold mb-2">
                      Features:
                    </h4>
                    <ul className="list-disc list-inside text-gray-300">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {selectedProject.useCases?.length > 0 && (
                  <section>
                    <h4 className="text-lg text-purple-300 font-semibold mb-2">
                      Use Cases:
                    </h4>
                    <ul className="list-disc list-inside text-gray-300">
                      {selectedProject.useCases.map((use, i) => (
                        <li key={i}>{use}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {selectedProject.images?.length > 1 && (
                  <section>
                    <h4 className="text-lg text-purple-300 font-semibold mb-2">
                      More Screenshots:
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedProject.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Screenshot ${i + 1}`}
                          className="rounded-md w-full h-32 object-cover"
                        />
                      ))}
                    </div>
                  </section>
                )}

                {selectedProject.link && selectedProject.link !== "#" && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-purple-400 underline hover:text-purple-300 text-sm mt-4"
                  >
                    Visit Project ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
