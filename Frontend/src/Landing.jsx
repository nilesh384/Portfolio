// Landing.jsx
import React, { useState } from 'react'
import Chatbot from './App'
import './App.css'

function Landing() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => setIsChatOpen(!isChatOpen)

  return (
    <div>
      <h1 className='text-3xl bg-amber-500'>Landing Page</h1>

      <button className="chat-float-button" onClick={toggleChat}>
        💬
      </button>

      {isChatOpen && <Chatbot onClose={toggleChat} />}
    </div>
  )
}

export default Landing
