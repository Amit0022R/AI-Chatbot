import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm"
import ChatMessage from "./components/ChatMessage"
import { useRef, useState , useEffect, use } from "react"

const App = () => {

  const [chatHistory, setChatHistory] = useState([])
  const chatBodyRef = useRef()

  const BotResponse = async (history) => {

    const updateHistory = (text) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Wait 1sec.."), {role: "model", text}])
    }

    history = history.map(({role,text}) => ({role , parts: [{text}]}) )
    const requestOptions = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents : history })
    }
    
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error.message || "Something went wrong");
      
        const apiResponseText = data.candidates[0].content.parts[0].text.replace(/<[^>]+>/g, '').trim();
        updateHistory(apiResponseText);
    } catch (error) {
        updateHistory(apiResponseText);
        
    }

  }

  useEffect(() => {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth" })
  } , [chatHistory] )


  return <div className="container" >
    <div className="chatbot-popup">
      {/* Chatbot header */}
      <div className="chat-header">
        <div className="header-info">
            <ChatbotIcon/>
            <h3 className="logo-text" ><i>ChatBot</i></h3>
        </div>
        <button className="material-symbols-rounded">
              keyboard_arrow_down
        </button>
      </div>

        {/* Chatbot body */}  
       <div ref={chatBodyRef} className="chat-body">
            <div className="message bot-message" >
                <ChatbotIcon/>
                <p className="message-text">
                    Hello! 🖐 How can I assist you today?
                </p>
            </div>

            {chatHistory.map((chat,index) =>(
                <ChatMessage key={index} chat={chat} />
            ))}
          </div>

        {/* Chatbot footer */}
          <div className="chat-footer">
            <ChatForm 
            setChatHistory={setChatHistory}
            BotResponse={BotResponse} 
            chatHistory={chatHistory}
            />
          </div>


    </div>
  </div>
}

export default App