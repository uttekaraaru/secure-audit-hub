import { useState, useRef, useEffect } from "react";
import "../styles/chatbot.css";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I'm Secure Audit AI. Ask me anything about ISO standards.",
    },
  ]);

  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const getReply = (question) => {
    const q = question.toLowerCase();

    if (q.includes("27001"))
      return "ISO 27001 is the international standard for Information Security Management Systems (ISMS).";

    if (q.includes("27002"))
      return "ISO 27002 provides guidance for implementing information security controls.";

    if (q.includes("42001"))
      return "ISO 42001 is the international standard for Artificial Intelligence Management Systems.";

    if (q.includes("annex"))
      return "Annex A contains 93 security controls divided into Organizational, People, Physical and Technological categories.";

    if (q.includes("clause 6"))
      return "Clause 6 covers Planning, Risk Assessment, Risk Treatment and Security Objectives.";

    if (q.includes("risk"))
      return "Risk Assessment identifies, evaluates and treats information security risks.";

    return "I'm still learning. Future versions will use real AI to answer every ISO question.";
  };

  const ask = (text) => {
    const userMsg = {
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);

    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: getReply(text),
        },
      ]);
    }, 900);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    ask(input);

    setInput("");
  };

  return (
    <>
      <button
        className="chat-btn"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {open && (
        <div className="chat-box">

          <div className="chat-header d-flex justify-content-between align-items-center">

            <span>🤖 Secure Audit AI</span>

            <button
              className="btn btn-sm btn-light"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>

          </div>

          <div className="chat-body">

            <div className="mb-3">

              <button
                className="btn btn-outline-primary btn-sm me-2 mb-2"
                onClick={() => ask("What is ISO 27001?")}
              >
                ISO 27001
              </button>

              <button
                className="btn btn-outline-primary btn-sm me-2 mb-2"
                onClick={() => ask("Explain Clause 6")}
              >
                Clause 6
              </button>

              <button
                className="btn btn-outline-primary btn-sm me-2 mb-2"
                onClick={() => ask("What is Annex A?")}
              >
                Annex A
              </button>

              <button
                className="btn btn-outline-primary btn-sm mb-2"
                onClick={() => ask("What is ISO 42001?")}
              >
                ISO 42001
              </button>

            </div>

            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "user-msg"
                    : "bot-msg"
                }
              >
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="bot-msg">
                ⏳ AI is typing...
              </div>
            )}

            <div ref={chatEndRef}></div>

          </div>

          <div className="chat-footer">

            <input
              value={input}
              placeholder="Ask about ISO..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
            />

            <button onClick={sendMessage}>
              Send
            </button>

          </div>

          <div className="p-2 text-center">

            <button
              className="btn btn-danger btn-sm"
              onClick={() =>
                setMessages([
                  {
                    sender: "bot",
                    text: "👋 Chat cleared. Ask me anything!",
                  },
                ])
              }
            >
              🗑 Clear Chat
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default ChatBot;