const ContactMe = () => {

//   const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
//   const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <>
      <h1 className="bg-black text-4xl font-bold text-purple-500 position-relative flex items-center justify-center pt-10 ">Contact Me</h1>
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 mt-[-6rem]">
        
      <p className="text-lg text-gray-300 mb-8">You can find me on:</p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Social Links */}
        <div className="flex gap-16 mt-2">

          <a
            href="https://linkedin.com/in/nilesh-bera-2775ab313/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-200"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="Linkedin"
              width="50"
              height="50"
            />
          </a>
          <a
            href="https://github.com/nilesh384"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-200"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="Github"
              width="50"
              height="50"
            />
          </a>
          <a
            href="mailto:nileshbera258@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-200"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png" // Gmail logo
              alt="Gmail"
              width="50"
              height="50"
            />
          </a>
          {/* <a
              href={whatsappLink} // <-- Replace with your number (with country code)
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition duration-300"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                alt="WhatsApp"
                width="40"
                height="40"
              />
            </a> */}

        </div>
      </div>
    </section>
    </>
  );
};

export default ContactMe;
