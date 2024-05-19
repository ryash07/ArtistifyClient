import React, { useState, useEffect } from 'react';
import './ChatBot.css' // You can style the button using CSS
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const dfMessenger = document.querySelector('df-messenger');
    console.log(dfMessenger)
    if (dfMessenger) {
      dfMessenger.style.display = isOpen ? 'block' : 'none';

      dfMessenger.addEventListener('df-messenger-loaded', function () {
        const dfMessenger = document.querySelector('df-messenger');
        const dfMessengerChat = dfMessenger.shadowRoot.querySelector('df-messenger-chat');
        
        // Apply custom styles to the chat wrapper
        const style = document.createElement('style');
        style.innerHTML = 'div.chat-wrapper[opened="true"]{height:290px;max-height:290px;}';
        dfMessengerChat.shadowRoot.appendChild(style);
      });
    }
  }, [isOpen]);

  return (
    <div>
      <button className="chat-button" onClick={toggleChat}>
        {isOpen ? <RxCross2/> : <AiOutlineMessage/>}
      </button>
      <df-messenger
        intent="WELCOME"
        chat-title="Artistify"
        agent-id="76e4638e-1183-4778-ad59-20e2528576c8"
        language-code="en"
        style={{ display: 'none',height:'200px !important' }}
      ></df-messenger>
    </div>
  );
};

export default Chatbot;
