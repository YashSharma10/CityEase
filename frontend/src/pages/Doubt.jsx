import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './doubt.css';
import sendIcon from '../assets/send.png';

function Doubt() {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    // Initial chat greeting after 2 seconds
    const initialGreeting = setTimeout(() => {
      displayMessage('ChatGPT', 'Hello! How can I help you today?');
    }, 1000);

    return () => clearTimeout(initialGreeting);
  }, []);

  async function sendMessage() {
    const userMessage = userInput.trim();

    if (userMessage !== '') {
      displayMessage('You', userMessage);

      try {
        const chatResponse = await chatWithGPT(userMessage);
        displayMessage('ChatGPT', chatResponse);
      } catch (error) {
        console.error('Error in chatWithGPT:', error);
        displayMessage('ChatGPT', 'Sorry, there was an error processing your request.');
      }

      setUserInput('');
    }
  }

  async function chatWithGPT(prompt) {
    try {
      // Make the API request with the correct API key (replace the key below)
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: prompt,
          max_tokens: 150,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer AIzaSyBmKOwDKmWNfTQ3ZC9Mt3evtY4RAYTi8Ao', // Replace this with your actual OpenAI API key
          },
        }
      );

      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error in chatWithGPT:', error);
      throw error;
    }
  }

  function displayMessage(sender, message) {
    setChatMessages((prevMessages) => [...prevMessages, { sender, message }]);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  return (
    <div className="chat-container">
      <div className="chat-messages" id="chat-messages">
        {chatMessages.map((message, index) => (
          <div key={index} className="chat-message">
            {`${message.sender}: ${message.message}`}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        <input
          type="text"
          className="chat-input"
          id="user-input"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="send-button" onClick={sendMessage}>
          <img src={sendIcon} alt="Send" className='senddoubt'/>
        </button>
      </div>
    </div>
  );
}

export default Doubt;
