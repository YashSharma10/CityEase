import React, { useState, useEffect } from "react";
import axios from "axios";
import sendIcon from "../assets/send.png";

function Chatbot({ open }) {
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [model, setModel] = useState(open);

  useEffect(() => {
    if (model) {
      setModel(true);
    }
  }, [open]);

  useEffect(() => {
    // Initial chat greeting after 2 seconds
    const initialGreeting = setTimeout(() => {
      displayMessage("ChatGPT", "Hello! How can I help you today?");
    }, 1000);

    return () => clearTimeout(initialGreeting);
  }, []);

  async function sendMessage() {
    const userMessage = userInput.trim();

    if (userMessage !== "") {
      displayMessage("You", userMessage);

      try {
        const chatResponse = await chatWithGPT(userMessage);
        displayMessage("ChatGPT", chatResponse);
      } catch (error) {
        console.error("Error in chatWithGPT:", error);
        displayMessage(
          "ChatGPT",
          "Sorry, there was an error processing your request."
        );
      }

      setUserInput("");
    }
  }

  async function chatWithGPT(prompt) {
    try {
      // Make the API request with the correct API key (replace the key below)
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: prompt,
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_API_KEY", // Replace with your actual OpenAI API key
          },
        }
      );

      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error("Error in chatWithGPT:", error);
      throw error;
    }
  }

  function displayMessage(sender, message) {
    setChatMessages((prevMessages) => [...prevMessages, { sender, message }]);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  }

  return (
    <div
      className={`fixed z-40 bottom-5 right-5  flex-col w-[90%] max-w-[350px] bg-white rounded-lg shadow-lg overflow-hidden ${
        open ? "flex" : "hidden"
      }`}
    >
      {/* Chat Messages Area */}
      <div className="h-[400px] overflow-y-auto p-4 bg-gray-100 flex flex-col gap-2">
        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[75%] px-4 py-2 text-sm rounded-xl shadow ${
              message.sender === "You"
                ? "self-end bg-green-200 text-green-800 rounded-br-none"
                : "self-start bg-blue-100 text-blue-900 rounded-bl-none"
            }`}
          >
            <span className="font-semibold">{message.sender}: </span>
            {message.message}
          </div>
        ))}
      </div>
      {/* Input and Send Button */}
      <div className="flex items-center gap-2 p-3 border-t border-gray-200">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600"
          onClick={sendMessage}
        >
          <img src={sendIcon} alt="Send" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Chatbot;