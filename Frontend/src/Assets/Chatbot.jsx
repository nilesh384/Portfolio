import React, { useState, useEffect, useRef } from "react";
import { Trash2 } from "lucide-react";

function Chatbot({ onClose }) {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const chatEndRef = useRef(null);

  // 🔁 Ensure each user gets a persistent, unique userId
  useEffect(() => {
    let id = localStorage.getItem("chatbot_userId");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("chatbot_userId", id);
    }
    setUserId(id);
  }, []);

  const fetchMessages = async () => {
    const res = await fetch(
      `https://portfolio-amber-ten-47.vercel.app/api/messages?userId=${userId}`
    );
    const data = await res.json();
    setMessages(data);
  };

  const handleClear = async () => {
    try {
      await fetch(`https://portfolio-amber-ten-47.vercel.app/api/messages?userId=${userId}`, {
        method: "DELETE",
      });
      setMessages([]);
    } catch (err) {
      console.error("Error clearing chat:", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://portfolio-amber-ten-47.vercel.app/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, userId }),
      });
      await fetchMessages();
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
    setQuestion("");
  };

  return (
    <div className="fixed bottom-20 right-6 w-[360px] h-[600px] rounded-2xl shadow-2xl p-5 z-[999] flex flex-col bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 animate-fade-slide-up glass-effect">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold text-white">🤖 CHATBOT</h2>
        <button
          onClick={onClose}
          className="text-gray-400 text-2xl transition-transform duration-300 hover:portal-collapse hover:rotate-180 hover:text-red-400 hover:cursor-pointer hover:scale-110"
        >
          ×
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden mb-3 pr-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {messages.length === 0 && !loading && (
          <p className="text-gray-500 text-center mt-4">
            No messages yet. Start chatting!
          </p>
        )}
        {messages
          .filter((msg) => msg.role === "user" || msg.role === "ai")
          .map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl mb-2 border border-gray-700 ${
                msg.role === "user"
                  ? "bg-blue-600 text-right ml-auto text-white"
                  : "bg-gray-700 text-left mr-auto text-gray-100"
              }`}
            >
              <div className="p-2 rounded-md break-words whitespace-pre-wrap">
                <p className="m-0">{msg.message}</p>
                <small className="text-xs text-gray-400 mt-1 block text-right">
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </small>
              </div>
            </div>
          ))}
        <div ref={chatEndRef} />
      </div>

      <button
        onClick={handleClear}
        className="absolute right-[70px] top-[20px] z-[1000]  text-white text-lg p-1 rounded-md flex items-center justify-center transition-transform duration-300 hover:bg-red-400 hover:cursor-pointer hover:scale-110"
      >
        <Trash2 color="white" size={20} />
      </button>

      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSubmit(e)}
        className="flex flex-col gap-2"
      >
        <textarea
          className="border border-gray-600 bg-gray-800 text-white rounded-xl p-3 min-h-[80px] resize-none text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask me anything..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-3 text-base font-semibold rounded-xl hover:from-blue-800 hover:to-blue-950 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center space-x-1">
              <span>Thinking</span>
              <span className="animate-bounce">.</span>
              <span className="animate-bounce delay-200">.</span>
              <span className="animate-bounce delay-400">.</span>
            </span>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
