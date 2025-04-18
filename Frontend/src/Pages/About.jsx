import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToSkills = () => {
    document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white font-poppins px-6 lg:px-20 py-10">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="lg:w-2/3 space-y-10" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl text-purple-400 font-bold">
            About Me
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Hey there! 👋 I’m{" "}
            <span className="text-highlight font-semibold hover:text-purple-400 hover:cursor-pointer">Nilesh Bera</span>, a passionate second-year college student, developer, and problem solver from Kolkata, West Bengal, who loves building real-world solutions with clean and scalable code.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-purple-300 font-semibold mb-1">
                @  Who am I?
              </h2>
              <p className="text-gray-400">
                A full-stack developer diving deep into backend systems and other technologies. I'm all about using tech to solve real problems in education, health, and daily productivity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-purple-300 font-semibold mb-1">
                @  What Drives Me?
              </h2>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Hackathons & fast-paced team projects</li>
                <li>Working on real world application based projects</li>
                <li>Learning new technologies</li>
                <li>Continuous learning & building</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-purple-300 font-semibold mb-1">
                @  Tech Philosophy
              </h2>
              <p className="text-gray-400">
                Code should be clean, scalable, and fast. Project should be organised. Whether it's a chatbot using Gemini API or a full-stack web app, I like building systems that work reliably under pressure.
              </p>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className="w-full sm:w-2/3 lg:w-1/3"
          data-aos="fade-left"
        >
          <img
            src="/assets/nilesh-photo.jpg" 
            alt="Nilesh Bera"
            className="w-full h-auto rounded-xl shadow-lg drop-shadow-[5px_5px_20px_rgba(102,6,150,0.797)]"
          />
        </div>
      </section>
      <button
        onClick={scrollToSkills}
        className="animate-bounce text-purple-400 text-3xl mt-[-30px] hover:scale-110 hover:cursor-pointer transition-all mx-auto block"
        aria-label="Scroll to Education"
      >
      ↓
      </button>
      <h1 className="text-3xl sm:text-4xl text-purple-400 font-bold mt-12" id="education">
            Education
      </h1>
      <div className="relative border-l-4 border-purple-600 mt-12 pl-6 space-y-12">
  {[
    {
      level: "B.Tech - Computer Science",
      institution: {
        name: "VIT-AP University",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vgn5Cj83ERlIbXqZRI400ocOEbaXn3IibQ&s", 
      },
      location: "Amaravati, Andhra Pradesh",
      duration: "2024 – 2028",
      marks: "Current CGPA: 9.14",
      highlights: [
        "Core Computer Science Student.",
        "Projects in full-stack & AI-powered apps.",
        "Core courses: DSA, DBMS, OOPs, Web Technologies, OS.",
      ],
    },
    {
      level: "Class 12 (CBSE)",
      institution: {
        name: "Indira Gandhi Memorial High School",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLViMWoe7kqHd9tg0U9vaNv9d1FOZmJBlO3w&s", // Add your school logo here
      },
      location: "Kolkata, West Bengal",
      duration: "2023 – 2024",
      marks: "Percentage: 82%",
      highlights: [
        "Science stream with CS as elective.",
        "Focused on physical and biological science.",
      ],
    },
    {
      level: "Class 10 (CBSE)",
      institution: {
        name: "Indira Gandhi Memorial High School",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLViMWoe7kqHd9tg0U9vaNv9d1FOZmJBlO3w&s", // Same logo reused
      },
      location: "Kolkata, West Bengal",
      duration: "2021 – 2022",
      marks: "Percentage: 94.2%",
      highlights: [
        "Participated in science exhibitions.",
        "Awarded scholar certificates for good performance in boards.",
      ],
    },
  ].map(({ level, institution, location, duration, marks, highlights }, idx) => (
    <div className="relative" data-aos="fade-up" key={idx}>
      <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2.5 top-1.5 shadow-md" />
      <div className="bg-[#1a1a1a] p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-purple-800 transition-all">
        <h2 className="text-lg sm:text-xl font-semibold text-white pb-3">
          {level}
        </h2>
        <div className="flex items-center space-x-2 mb-1">
          <img
            src={institution.logo}
            alt={institution.name}
            className="w-6 h-6 object-contain"
          />
          <p className="text-gray-300 text-sm">{institution.name}</p>
        </div>
        <p className="text-gray-400 text-xs mb-1 italic">{location}</p>
        <p className="text-purple-300 text-sm mb-2">
          {duration} | {marks}
        </p>
        <ul className="list-disc ml-6 text-gray-400 space-y-1 text-sm">
          {highlights.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default About;
