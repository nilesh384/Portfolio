import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer", "Android Developer", "Backend Developer"],
      typeSpeed: 50,
    });

    AOS.init({ duration: 1000 });
    return () => typed.destroy();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-poppins scroll-smooth">
      {/* Hero Section */}
      <main>
        <section
          className="flex justify-around items-center h-screen px-10"
          data-aos="fade-up"
        >
          <div className="w-1/2 text-4xl">
            <p>
              Hi, my name is <span className="text-highlight">Nilesh Bera</span>
            </p>
            <p className="text-3xl">and I am a passionate</p>
            <span
              ref={typedElement}
              className="text-highlight text-4xl font-semibold block mt-2"
            />
          </div>

          <div className="w-1/3">
            <img
              src="/assets/dev1.png"
              alt="developer"
              className="h-[55vh] w-full mt-4 drop-shadow-[5px_5px_20px_rgba(102,6,150,0.797)]"
            />
          </div>
        </section>

        <hr className="bg-[#7528e1] h-[0.1em] mx-20 mt-10" />

        {/* Experience Section - Scroll Timeline Style */}
        <section className="max-w-[80vw] mx-auto mt-20 min-h-screen">
          <span className="text-gray-400" data-aos="fade-up">
            What I have done so far
          </span>
          <h1
            className="mt-2 text-3xl text-purple-400 font-bold"
            data-aos="fade-up"
          >
            Work Experience
          </h1>

          <div className="relative border-l-4 border-purple-600 mt-12 pl-6 space-y-12">
            {/* Timeline Item */}
            <div className="relative" data-aos="fade-up">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2.5 top-1.5 shadow-md" />
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-purple-800 transition-all">
                <h2 className="text-xl font-semibold text-white">
                  Frontend Developer Intern
                </h2>
                <p className="text-gray-300 text-sm mb-2">
                  XYZ Tech Solutions | Jan 2024 – Mar 2024
                </p>
                <ul className="list-disc ml-6 text-gray-400 space-y-1 text-sm">
                  <li>Built responsive UIs using React and Tailwind CSS.</li>
                  <li>Implemented dynamic routing with React Router.</li>
                  <li>Collaborated in a team of 5 using Git and GitHub.</li>
                </ul>
              </div>
            </div>

            <div className="relative" data-aos="fade-up">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2.5 top-1.5 shadow-md" />
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-purple-800 transition-all">
                <h2 className="text-xl font-semibold text-white">
                  Backend Developer (Freelance)
                </h2>
                <p className="text-gray-300 text-sm mb-2">
                  Self-employed | Apr 2024 – Present
                </p>
                <ul className="list-disc ml-6 text-gray-400 space-y-1 text-sm">
                  <li>Built secure REST APIs using Express.js and MongoDB.</li>
                  <li>
                    Integrated JWT-based authentication and authorization.
                  </li>
                  <li>
                    Optimized performance with database indexing and caching.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative" data-aos="fade-up">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2.5 top-1.5 shadow-md" />
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-purple-800 transition-all">
                <h2 className="text-xl font-semibold text-white">
                  Android App Developer
                </h2>
                <p className="text-gray-300 text-sm mb-2">
                  Hackathon Projects | 2023 – 2024
                </p>
                <ul className="list-disc ml-6 text-gray-400 space-y-1 text-sm">
                  <li>
                    Created apps using Java & Kotlin with Firebase backend.
                  </li>
                  <li>
                    Designed intuitive UI/UX for health and education apps.
                  </li>
                  <li>
                    Won 2nd place in Smart India Hackathon regional round.
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative" data-aos="fade-up">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2.5 top-1.5 shadow-md" />
              <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-purple-800 transition-all">
                <h2 className="text-xl font-semibold text-white">
                  AI Study Platform (StudySync)
                </h2>
                <p className="text-gray-300 text-sm mb-2">
                  Personal Project | 2025
                </p>
                <ul className="list-disc ml-6 text-gray-400 space-y-1 text-sm">
                  <li>
                    Built a collaborative AI study tool with PDF summarizer and
                    group task tracking.
                  </li>
                  <li>Used React, Socket.IO, Node.js, MongoDB, Gemini API.</li>
                  <li>
                    Implemented gamification with leaderboards and streaks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          className="bg-black py-20 text-center"
          id="skills"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-8 text-purple-400">
            Skills I Know
          </h2>
          <div className="flex justify-center gap-10 flex-wrap px-8">
            {[
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                name: "HTML",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                name: "CSS",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                name: "Tailwind CSS",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                name: "JavaScript",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                name: "React",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                name: "Node.js",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
                name: "Java",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                name: "Python",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                name: "MongoDB",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                name: "MySQL",
              },
              {
                src: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=ffffff",
                name: "Express",
              },
              
            ].map(({ src, name }) => (
              <div
                key={name}
                className="flex flex-col items-center transition-transform hover:scale-110"
              >
                <img src={src} alt={name} className="w-16 h-16 mb-2" />
                <span className="text-sm">{name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
