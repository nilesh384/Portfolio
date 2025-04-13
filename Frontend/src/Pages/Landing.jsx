import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const Landing = () => {
  // const [isChatOpen, setIsChatOpen] = useState(false);
  // const toggleChat = () => setIsChatOpen(!isChatOpen);

  const typedElement = useRef(null);
  const infoRef = useRef(null);
  const dotRefs = useRef([]);
  const colors = ['#e34c26', '#264de4', '#fbbc04', '#5382a1', '#a4c639'];

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['Web Developer', 'Android Developer', 'Backend Developer'],
      typeSpeed: 50,
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const dots = dotRefs.current;

    dots.forEach((dot, index) => {
      if (dot) {
        dot.addEventListener('click', () => {
          const info = infoRef.current;
          if (!info) return;

          if (info.classList.contains('hidden')) {
            info.classList.remove('hidden');
            info.style.borderColor = colors[index] || 'white';
            info.innerText = `Info for dot ${index + 1}`;
          } else {
            info.classList.add('hidden');
          }
        });
      }
    });

    return () => {
      dotRefs.current.forEach((dot) => {
        if (dot) {
          dot.replaceWith(dot.cloneNode(true)); // clean event listeners
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-poppins">

      {/* Hero Section */}
      <main>
        <section className="flex justify-around">
          <div className="w-1/3 mt-20 text-4xl">
            Hi, My name is <span className="text-highlight">Nilesh Bera</span>
            <div className="text-3xl">and I am a passionate</div>
            <span ref={typedElement} className="text-highlight text-4xl font-semibold" />
          </div>

          <div className="w-1/3">
            <img
              src="src/Assets/dev1.png"
              alt="developer"
              className="h-[55vh] w-[90%] mt-4 drop-shadow-[5px_5px_20px_rgba(102,6,150,0.797)]"
            />
          </div>
        </section>

        {/* Divider */}
        <hr className="bg-[#7528e1] h-[0.1em] mx-20 mt-20" />

        {/* Experience Section */}
        <section className="max-w-[80vw] mx-auto mt-4 h-[100vh]">
          <span className="text-gray-text">What I have done so far</span>
          <h1 className="mt-8 text-2xl">Work Experience</h1>

          <div className="bg-white w-[80vw] h-[0.1em] my-16 flex"></div>

          <div ref={infoRef} className="hidden border border-white w-[80vw] h-48 mt-16 info"></div>

          <div className="flex gap-4 mt-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                ref={(el) => (dotRefs.current[i] = el)}
                className={`w-6 h-6 rounded-full bg-white cursor-pointer dots${i + 1}`}
              ></div>
            ))}
          </div>
        </section>

      </main>


      {/* 💬 Floating Chat Button */}
      {/* <button
        className="fixed bottom-5 right-5 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-2xl rounded-full w-[55px] h-[55px] flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 z-[999]"
        onClick={toggleChat}
      >
        💬
      // </button> */}

      {/* Chatbot Component */}
      {/* {isChatOpen && <Chatbot onClose={toggleChat} />} */}
    </div>
  );
};

export default Landing;
