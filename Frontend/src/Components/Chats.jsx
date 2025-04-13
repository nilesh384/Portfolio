import React, { useState } from 'react'
import Chatbot from "../Assets/Chatbot";

const Chats = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleChat = () => setIsChatOpen(!isChatOpen);

    return (
        <>
            <button
        className="fixed bottom-5 right-5 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-2xl rounded-full w-[55px] h-[55px] flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300 z-[999]"
        onClick={toggleChat}
      >
        💬
      </button>
      {isChatOpen && <Chatbot onClose={toggleChat} />}
        </>
    )
}

export default Chats