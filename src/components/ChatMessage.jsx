import React from 'react'
import ChatbotIcon from './ChatbotIcon'

const ChatMessage = ({chat}) => {
  return ( 
    <div className={`message ${chat.role === "mode" ? 'bot' : 'user'}-message`} >
        {chat.role === "mode" && <ChatbotIcon/>}
        <p className="message-text">
            {chat.text}
        </p>
    </div>

  )
}

export default ChatMessage
