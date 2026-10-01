import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaRobot,
  FaTimes,
} from "react-icons/fa";

const FloatingContactButtons = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Create one session ID for this browser
  const [sessionId] = useState(() => {
    let id = localStorage.getItem("nooh_chat_session");

    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("nooh_chat_session", id);
    }

    return id;
  });

  const phoneNumber = "919958748979";

  // =====================================================
  // SEND MESSAGE TO FASTAPI
  // =====================================================

  const sendMessage = async (text = message) => {
    const question = text.trim();

    if (!question || loading) return;

    // Show user message immediately
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      console.log("Sending message to backend:", question);

      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id: sessionId,
          question: question,
        }),
      });

      console.log("Backend status:", response.status);

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      console.log("Backend response:", data);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.answer || "Sorry, I couldn't find an answer.",
        },
      ]);
    } catch (error) {
      console.error("CHATBOT ERROR:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I’m unable to connect to the NOOH Assistant right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // FLOATING CONTACT BUTTONS
  // =====================================================

  const buttons = [
    {
      icon: <FaWhatsapp size={28} />,
      link: `https://wa.me/${phoneNumber}?text=Hello! I would like to inquire about NOOH Living Elevated services.`,
      color: "bg-green-500",
      hover: "hover:bg-green-600",
      label: "WhatsApp",
    },

    {
      icon: <FaPhoneAlt size={22} />,
      link: `tel:+${phoneNumber}`,
      color: "bg-red-500",
      hover: "hover:bg-red-600",
      label: "Call",
    },

    {
      icon: <FaInstagram size={24} />,
      link:
        "https://www.instagram.com/noohlivingofficial?stkn=NzFyMDRuN2Mwc2Nt",
      color:
        "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
      hover: "hover:opacity-90",
      label: "Instagram",
    },
  ];

  const quickQuestions = [
    "What is Stretch Ceiling?",
    "Tell me about NOOH products",
    "I want a quotation",
    "Book a consultation",
  ];

  return (
    <>
      {/* =====================================================
          CHATBOT WINDOW
      ===================================================== */}

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: 30,
              scale: 0.94,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              bottom-8
              right-[100px]
              z-[99999]

              w-[380px]
              h-[560px]

              max-w-[calc(100vw-120px)]
              max-h-[calc(100vh-64px)]

              overflow-hidden

              rounded-[24px]

              border
              border-[#C9A86A]/30

              bg-[#0D0D0D]

              shadow-[0_25px_80px_rgba(0,0,0,0.55)]

              flex
              flex-col
            "
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <div
              className="
                relative
                shrink-0
                px-5
                py-4
                bg-gradient-to-b
                from-[#191919]
                to-[#101010]
                border-b
                border-white/10
              "
            >
              <div className="flex items-center justify-between">

                {/* LEFT SIDE */}

                <div className="flex items-center gap-3">

                  {/* NOOH LOGO */}

                  <div
                    className="
                      relative
                      w-11
                      h-11
                      rounded-full
                      flex
                      items-center
                      justify-center
                      border
                      border-[#C9A86A]/60
                      bg-[#C9A86A]/10
                    "
                  >
                    <span
                      className="
                        text-[#D8B878]
                        font-serif
                        text-xl
                        tracking-widest
                      "
                    >
                      N
                    </span>

                    {/* ONLINE DOT */}

                    <span
                      className="
                        absolute
                        right-0
                        bottom-0
                        w-3
                        h-3
                        rounded-full
                        bg-emerald-400
                        border-2
                        border-[#101010]
                      "
                    />
                  </div>

                  {/* TITLE */}

                  <div>
                    <h3
                      className="
                        text-white
                        font-serif
                        text-[18px]
                        tracking-wide
                      "
                    >
                      NOOH Assistant
                    </h3>

                    <div className="flex items-center gap-1.5 mt-1">

                      <span
                        className="
                          w-1.5
                          h-1.5
                          rounded-full
                          bg-emerald-400
                        "
                      />

                      <span
                        className="
                          text-[11px]
                          text-white/40
                        "
                      >
                        Online
                      </span>

                    </div>
                  </div>
                </div>

                {/* CLOSE BUTTON */}

                <button
                  onClick={() => setChatOpen(false)}
                  className="
                    w-9
                    h-9
                    rounded-full
                    flex
                    items-center
                    justify-center
                    text-white/40
                    hover:text-white
                    hover:bg-white/10
                    transition
                  "
                  aria-label="Close chatbot"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              {/* GOLD DIVIDER */}

              <div
                className="
                  absolute
                  bottom-0
                  left-8
                  right-8
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-[#C9A86A]/60
                  to-transparent
                "
              />
            </div>

            {/* =================================================
                CHAT AREA
            ================================================= */}

            <div
              className="
                flex-1
                overflow-y-auto
                px-4
                py-5
                space-y-3
              "
            >

              {/* WELCOME BADGE */}

              <div className="flex justify-center mb-5">
                <div
                  className="
                    px-3
                    py-1
                    rounded-full
                    border
                    border-[#C9A86A]/20
                    bg-[#C9A86A]/5
                    text-[#C9A86A]
                    text-[9px]
                    tracking-[0.2em]
                    uppercase
                  "
                >
                  Living Elevated
                </div>
              </div>

              {/* WELCOME MESSAGE */}

              <div className="flex justify-start">
                <div
                  className="
                    max-w-[82%]
                    px-4
                    py-3
                    rounded-2xl
                    rounded-bl-md
                    bg-[#191919]
                    border
                    border-white/[0.08]
                    text-white/80
                    text-[13px]
                    leading-relaxed
                  "
                >
                  Hello 👋
                  <br />
                  Welcome to NOOH — Living Elevated.
                  <br />
                  <br />
                  How can I help you today?
                </div>
              </div>

              {/* =================================================
                  LIVE MESSAGES
              ================================================= */}

              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[82%]
                      px-4
                      py-3
                      rounded-2xl
                      text-[13px]
                      leading-relaxed
                      ${
                        msg.role === "user"
                          ? "bg-[#C9A86A] text-[#111] rounded-br-md"
                          : "bg-[#191919] text-white/80 border border-white/[0.08] rounded-bl-md"
                      }
                    `}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* =================================================
                  LOADING
              ================================================= */}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className="
                      px-4
                      py-3
                      rounded-2xl
                      rounded-bl-md
                      bg-[#191919]
                      border
                      border-white/[0.08]
                      text-white/40
                      text-[13px]
                    "
                  >
                    Thinking...
                  </div>
                </div>
              )}

              {/* =================================================
                  QUICK QUESTIONS
              ================================================= */}

              {messages.length === 0 && (
                <div className="pt-4 space-y-2">

                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => sendMessage(question)}
                      disabled={loading}
                      className="
                        w-full
                        text-left
                        px-4
                        py-3
                        rounded-xl
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        text-white/60
                        text-xs
                        hover:text-[#D8B878]
                        hover:border-[#C9A86A]/40
                        hover:bg-[#C9A86A]/5
                        transition-all
                        disabled:opacity-40
                        disabled:cursor-not-allowed
                      "
                    >
                      {question}
                    </button>
                  ))}

                </div>
              )}

            </div>

            {/* =================================================
                INPUT AREA
            ================================================= */}

            <div
              className="
                shrink-0
                p-4
                bg-[#0A0A0A]
                border-t
                border-white/[0.08]
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#171717]
                  p-1.5
                  focus-within:border-[#C9A86A]/40
                  transition
                "
              >

                {/* INPUT */}

                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                  placeholder="Ask about NOOH..."
                  disabled={loading}
                  className="
                    flex-1
                    min-w-0
                    px-3
                    py-2
                    bg-transparent
                    outline-none
                    text-sm
                    text-white
                    placeholder:text-white/25
                    disabled:opacity-50
                  "
                />

                {/* SEND BUTTON */}

                <button
                  onClick={() => sendMessage()}
                  disabled={loading || !message.trim()}
                  className="
                    w-10
                    h-10
                    shrink-0
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    bg-[#C9A86A]
                    text-[#111]
                    hover:bg-[#D8B878]
                    transition
                    disabled:opacity-40
                    disabled:cursor-not-allowed
                  "
                  aria-label="Send message"
                >
                  <span className="text-lg">
                    {loading ? "…" : "➤"}
                  </span>
                </button>

              </div>

              <p
                className="
                  text-center
                  text-[9px]
                  text-white/20
                  mt-2
                "
              >
                NOOH — Living Elevated
              </p>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          FLOATING BUTTONS
      ===================================================== */}

      <div
        className="
          fixed
          bottom-8
          right-8
          z-[99999]
          flex
          flex-col
          gap-4
        "
      >

        {/* =================================================
            NOOH AI BUTTON — TOP
        ================================================= */}

        

        {/* =================================================
            WHATSAPP / CALL / INSTAGRAM
        ================================================= */}

        {buttons.map((btn, index) => (
          <motion.a
            key={index}
            href={btn.link}
            target={
              btn.link.startsWith("http")
                ? "_blank"
                : undefined
            }
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: (index + 1) * 0.15,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`
              relative
              w-14
              h-14
              rounded-full
              flex
              items-center
              justify-center
              text-white
              shadow-2xl
              ${btn.color}
              ${btn.hover}
            `}
            aria-label={btn.label}
          >

            {/* PULSE */}

            <motion.div
              className={`
                absolute
                inset-0
                rounded-full
                ${btn.color}
              `}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* ICON */}

            <span className="relative z-10">
              {btn.icon}
            </span>

          </motion.a>
        ))}

      </div>
    </>
  );
};

export default FloatingContactButtons;