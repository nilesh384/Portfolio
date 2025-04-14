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
      showCursor: false,
    });

    AOS.init({ duration: 1000 });
    return () => typed.destroy();
  }, []);

  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white font-poppins relative scroll-smooth">
      {/* Floating Resume Button */}
      {/* <a
        href="/assets/resume.pdf" // Replace with your actual resume path
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-full shadow-lg z-50 transition-all"
      >
        Download Resume
      </a> */}

      {/* Hero Section */}
      <main>
        <section
          className="flex flex-col-reverse lg:flex-row justify-center items-center min-h-screen px-6 lg:px-16 text-center lg:text-left"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-1/2 space-y-4 mt-8 lg:mt-0">
            <p className="text-2xl sm:text-3xl md:text-4xl">
              Hi, my name is{" "}
              <span className="text-highlight font-semibold">Nilesh Bera</span>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl">
              and I am a passionate
            </p>
            <span
              ref={typedElement}
              className="text-highlight text-2xl sm:text-3xl md:text-4xl font-semibold block h-[2.5rem] sm:h-[3rem] md:h-[3.5rem] leading-none"
            />
          </div>

          <div className="w-3/4 sm:w-2/3 lg:w-1/3">
            <img
              src="/assets/dev1.png"
              alt="developer"
              className="w-full h-auto mt-6 lg:mt-0 drop-shadow-[5px_5px_20px_rgba(102,6,150,0.797)]"
            />
          </div>
        </section>

        {/* ↓ Scroll Indicator */}
        <div className="flex justify-center mt-[-2rem] lg:mt-0">
          <button
            onClick={scrollToSkills}
            className="animate-bounce text-purple-400 text-3xl mt-[-30px] hover:scale-110 transition-all"
            aria-label="Scroll to Skills"
          >
            ↓
          </button>
        </div>

        <hr className="bg-[#7528e1] h-[2px] mx-6 sm:mx-20 mt-10" />

        {/* Experience Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-8 mt-20 min-h-screen">
          <span
            className="text-gray-400 text-base sm:text-lg"
            data-aos="fade-up"
          >
            What I have done so far
          </span>
          <h1
            className="mt-2 text-2xl sm:text-3xl text-purple-400 font-bold"
            data-aos="fade-up"
          >
            Work Experience
          </h1>

          <div className="relative border-l-4 border-purple-600 mt-12 pl-6 space-y-12">
            {[
              {
                title: "Frontend Developer Intern",
                org: "XYZ Tech Solutions | Jan 2024 – Mar 2024",
                points: [
                  "Built responsive UIs using React and Tailwind CSS.",
                  "Implemented dynamic routing with React Router.",
                  "Collaborated in a team of 5 using Git and GitHub.",
                ],
              },
              {
                title: "Backend Developer (Freelance)",
                org: "Self-employed | Apr 2024 – Present",
                points: [
                  "Built secure REST APIs using Express.js and MongoDB.",
                  "Integrated JWT-based authentication and authorization.",
                  "Optimized performance with database indexing and caching.",
                ],
              },
              {
                title: "Android App Developer",
                org: "Hackathon Projects | 2023 – 2024",
                points: [
                  "Created apps using Java & Kotlin with Firebase backend.",
                  "Designed intuitive UI/UX for health and education apps.",
                  "Won 2nd place in Smart India Hackathon regional round.",
                ],
              },
              {
                title: "AI Study Platform (StudySync)",
                org: "Personal Project | 2025",
                points: [
                  "Built a collaborative AI study tool with PDF summarizer and group task tracking.",
                  "Used React, Socket.IO, Node.js, MongoDB, Gemini API.",
                  "Implemented gamification with leaderboards and streaks.",
                ],
              },
            ].map(({ title, org, points }, idx) => (
              <div className="relative" data-aos="fade-up" key={idx}>
                <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2.5 top-1.5 shadow-md" />
                <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-purple-800 transition-all">
                  <h2 className="text-lg sm:text-xl font-semibold text-white">
                    {title}
                  </h2>
                  <p className="text-gray-300 text-sm mb-2">{org}</p>
                  <ul className="list-disc ml-6 text-gray-400 space-y-1 text-sm">
                    {points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section
          className="bg-black py-16 px-4 sm:px-10 text-center"
          id="skills"
          data-aos="fade-up"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-purple-400">
            Skills I Know
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-11 place-items-center">
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
                <img
                  src={src}
                  alt={name}
                  className="w-12 sm:w-14 h-auto mb-2"
                />
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
