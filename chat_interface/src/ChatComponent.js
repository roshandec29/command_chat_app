import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { animateScroll } from 'react-scroll';
import './ChatComponent.css';

const ChatComponent = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'chat-messages',
      duration: 500,
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      return;
    }
    const newMessages = [...messages, { text: input, sender: 'user', timestamp: new Date().toLocaleTimeString() }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post('http://localhost:8001/api/chat/', { command: input });
      const outputMessage = { text: response.data.response, sender: 'server', timestamp: new Date().toLocaleTimeString() };
      setMessages([...newMessages, outputMessage]);
    } catch (error) {
      console.error('Error sending command:', error);
    }
  };

  return (
    <div className="chat-container">
      <div id="chat-messages" className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <div className="message-content">{message.text}</div>
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
