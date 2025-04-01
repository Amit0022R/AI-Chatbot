import React, { useRef } from 'react'
const ChatForm = ({setChatHistory , BotResponse, chatHistory }) => {

    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return; // Prevent empty messages
        console.log(userMessage);
        
        inputRef.current.value = "";

        setChatHistory(prev => [...prev, {role: "user", text: userMessage}]);
    
        setTimeout(() => {
            setChatHistory(prev => [...prev, {role: "model", text: "Wait 1sec.."}]);
            BotResponse([...chatHistory, {role: "user", text: userMessage}]);
        }, 900); 
        
    }

  return (
    <form action="" className="chat-form" onSubmit={handleFormSubmit} >
    <input ref={inputRef} type="text" placeholder="Any Message..." className="message-input" required />
    <button>
       <span className="material-icons">keyboard_arrow_up</span>
    </button>

   </form>
  )
}

export default ChatForm