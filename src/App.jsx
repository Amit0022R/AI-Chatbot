import ChatbotIcon from "./components/ChatbotIcon"


const App = () => {
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
       <div className="chat-body">
            <div className="message bot-message" >
                <ChatbotIcon/>
                <p className="message-text">
                    Hello! 🖐 How can I assist you today?
                </p>
            </div>
            <div className="message user-message" >
                <p className="message-text">
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
       </div>

        {/* Chatbot footer */}
          <div className="chat-footer">
           <form action="" className="chat-form">
            <input type="text" placeholder="Any Message..." className="message-input" required />
            <button>
               <span class="material-icons">keyboard_arrow_up</span>
            </button>

           </form>
          </div>


    </div>
  </div>
}

export default App