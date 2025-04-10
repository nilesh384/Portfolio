

import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function Chatbot({ onClose }) {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null); // 🆕 Ref for auto-scroll

  const fetchMessages = async () => {
    const res = await fetch('http://localhost:8000/api/messages');
    const data = await res.json();
    setMessages(data);
  };

  const handleClear = async () => {
    try {
      await fetch('http://localhost:8000/api/messages', {
        method: 'DELETE',
      });
      setMessages([]);
    } catch (err) {
      console.error('Error clearing chat:', err);
    }
  };
  

  useEffect(() => {
    fetchMessages();
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      await fetchMessages(); // refresh messages after response
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
    setQuestion('');
  };

  return (
    <div className="chatbot-panel">
      <div className="chat-header">
        <h2>🤖CHATBOT</h2>
        <button onClick={onClose} className="close-button">×</button>
      </div>

      
  

      <div className="chat-content">
      {messages
  .filter(msg => msg.role === 'user' || msg.role === 'ai') // ⛔ Exclude 'system'
  .map((msg, index) => (
    <div key={index} className={`chat-message ${msg.role}`}>
      <div className="chat-message-content">
        <p>{msg.message}</p>
        <small>
          {new Date(msg.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </small>
      </div>
    </div>
))}

  <div ref={chatEndRef} /> {/* 🆕 Scroll anchor */}
</div>


        <button onClick={handleClear} className="clear-button">Delete all</button>

      <form onSubmit={handleSubmit} className="chat-form">
        <textarea
          className="chat-input"
          placeholder="Ask me anything..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="chat-button"
        >
          {loading ? <span className="dots">Thinking<span>.</span><span>.</span><span>.</span></span> : 'Send'}

        </button>
      </form>
    </div>
  );
}

export default Chatbot;
