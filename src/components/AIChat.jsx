
import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Trash2,
} from "lucide-react";

function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! 👋 Welcome to TechNova. I'm your AI assistant. How can I help you today?",
    },
  ]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, isLoading, isOpen]);

  const handleClearChat = () => {
    if (isLoading) return;

    setMessages([
      {
        sender: "ai",
        text: "Hi! 👋 Welcome to TechNova. I'm your AI assistant. How can I help you today?",
      },
    ]);
    setMessage("");
  };

  const handleSend = async (e, suggestedMessage) => {
    if (e) e.preventDefault();

    const userMessage = (suggestedMessage ?? message).trim();

    if (!userMessage || isLoading) return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage },
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://technova-gvyf.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage,
            history: messages.slice(-9).map((msg) => ({
              role: msg.sender === "ai" ? "model" : "user",
              parts: [{ text: msg.text }],
            })),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.reply || "AI request failed.");
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply || "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error("Chat Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry! I couldn't connect to the AI. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestions = [
    {
      label: "🌐 Web Development",
      question: "Tell me about your web development services.",
    },
    {
      label: "🤖 AI Solutions",
      question: "What AI solutions does TechNova offer?",
    },
    {
      label: "💰 Project Pricing",
      question: "How much does a project cost?",
    },
  ];

  return (
    <div className="ai-chat-container">
      {isOpen && (
        <div className="ai-chat-window">
          <div className="ai-chat-header">
            <div className="ai-chat-title">
              <Bot size={25} />
              <div>
                <h3>TechNova AI</h3>
                <span>Online Assistant</span>
              </div>
            </div>

            <div className="ai-chat-header-actions">
              <button
                onClick={handleClearChat}
                title="Clear Chat"
                disabled={isLoading}
              >
                <Trash2 size={19} />
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Close Chat"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          <div className="chat-suggestions">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.question}
                type="button"
                disabled={isLoading}
                onClick={() => handleSend(null, suggestion.question)}
              >
                {suggestion.label}
              </button>
            ))}
          </div>

          <div className="ai-chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender}`}
              >
                {msg.sender === "ai" ? (
                  <Bot size={18} />
                ) : (
                  <User size={18} />
                )}

                <p>{msg.text}</p>
              </div>
            ))}

            {isLoading && (
              <div className="chat-message ai typing-indicator">
                <Bot size={18} />
                <p>
                  TechNova AI is typing
                  <span className="typing-dots">...</span>
                </p>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            className="ai-chat-input"
            onSubmit={(e) => handleSend(e)}
          >
            <input
              type="text"
              placeholder="Ask me anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isLoading}
            />

            <button
              type="submit"
              disabled={isLoading || !message.trim()}
            >
              <Send size={19} />
            </button>
          </form>
        </div>
      )}

      <button
        className="ai-chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={25} /> : <MessageCircle size={25} />}
      </button>
    </div>
  );
}

export default AIChat;
