import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-poppins px-6 lg:px-20 py-16">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="lg:w-2/3 space-y-10" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl text-purple-400 font-bold">
            About Me
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            Hey there! 👋 I’m{" "}
            <span className="text-highlight font-semibold">Nilesh Bera</span>, a passionate second-year college student, developer, and problem solver who loves building real-world solutions with clean and scalable code.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-purple-300 font-semibold mb-1">
                👨‍💻 Who am I?
              </h2>
              <p className="text-gray-400">
                A full-stack and Android developer diving deep into AI and backend systems. I'm all about using tech to solve real problems in education, health, and daily productivity.
              </p>
            </div>

            <div>
              <h2 className="text-2xl text-purple-300 font-semibold mb-1">
                🚀 What Drives Me?
              </h2>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Hackathons & fast-paced team projects</li>
                <li>Shipping usable products quickly</li>
                <li>Continuous learning & building</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl text-purple-300 font-semibold mb-1">
                🌐 Tech Philosophy
              </h2>
              <p className="text-gray-400">
                Code should be clean, scalable, and fast. Whether it's a chatbot using Gemini API or a real-time app with Socket.io, I like building systems that work reliably under pressure.
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
            src="/assets/nilesh-photo.jpg" // 👈 Replace this with the actual path to your photo
            alt="Nilesh Bera"
            className="w-full h-auto rounded-xl shadow-lg drop-shadow-[5px_5px_20px_rgba(102,6,150,0.797)]"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
