import { useState, useRef, useEffect } from "react";
import "../styles/chatbot.css";
import { sendChatMessage } from "../services/api";

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

  // One session id per browser tab load — the backend uses this to store chat history.
  const sessionIdRef = useRef(
    crypto.randomUUID ? crypto.randomUUID() : `session-${Date.now()}`
  );

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const ask = (text) => {
    const userMsg = {
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);

    setTyping(true);

    sendChatMessage(sessionIdRef.current, text)
      .then((res) => {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: res.reply,
          },
        ]);
      })
      .catch(() => {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "⚠ Couldn't reach Secure Audit AI. Make sure the backend server is running.",
          },
        ]);
      });
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
