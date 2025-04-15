import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "StudySync – AI Study Platform",
    image: "/assets/studysync.png",
    description:
      "Collaborative AI-powered study tool with PDF summarization, task tracking, real-time chat, and gamified streaks.",
    tech: ["React", "Socket.io", "MongoDB", "Gemini API"],
    link: "https://github.com/nilesh384/studysync",
  },
  {
    title: "FarmPolicy Portal",
    image: "/assets/farmpolicy.png",
    description:
      "A platform for farmers to view central & state policies, subsidies, and schemes in one place.",
    tech: ["React", "Express", "MongoDB"],
    link: "https://github.com/nilesh384/farm-policy",
  },
  {
    title: "Turf Booking Web App",
    image: "/assets/turfbook.png",
    description:
      "Real-time playground/turf booking system with availability checker, slots, and payment integration.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "HealthSnap",
    image: "/assets/healthsnap.png",
    description:
      "Mobile app that uses camera for visible injury detection and gives instant medical suggestions.",
    tech: ["Java", "Firebase", "ML Kit"],
    link: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 lg:px-20 py-16 font-poppins relative">
      <h2
        className="text-3xl sm:text-4xl text-purple-400 font-bold mb-10 text-center"
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
              src={project.image}
              alt={project.title}
              className="rounded-t-xl h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-purple-300 mt-4">
                {project.tech.map((tag, i) => (
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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#111] rounded-xl max-w-lg w-full p-6 shadow-xl text-white relative">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="rounded-md mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2 text-purple-400">
              {selectedProject.title}
            </h3>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-2 text-sm text-purple-300 mb-4">
              {selectedProject.tech.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#2a2a2a] px-2 py-1 rounded-md border border-purple-500"
                >
                  {tag}
                </span>
              ))}
            </div>

            {selectedProject.link && selectedProject.link !== "#" && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 underline hover:text-purple-300 text-sm"
              >
                Visit Project ↗
              </a>
            )}

            {/* Back button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
