import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaRobot,
  FaTimes,
  FaMicrophone,
  FaVolumeUp,
  FaStop,
} from "react-icons/fa";

const FloatingContactButtons = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Automatically scroll to the latest chat message or loading indicator.
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  // =====================================================
  // SESSION ID — PRESERVE EXISTING CONVERSATION SESSION
  // =====================================================

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
  // VOICE INPUT — HINDI / ENGLISH
  // =====================================================

  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Voice input is not supported in this browser. Please use Chrome or Edge."
      );
      return;
    }

    if (listening && recognitionRef.current) {
      recognitionRef.current.stop();
      setListening(false);
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang =
      language === "hi" ? "hi-IN" : "en-IN";

    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognitionRef.current = recognition;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const transcript =
        event.results?.[0]?.[0]?.transcript || "";

      if (transcript) {
        setMessage((current) =>
          `${current}${current ? " " : ""}${transcript}`
        );
      }
    };

    recognition.onerror = (event) => {
      console.error("VOICE INPUT ERROR:", event.error);

      setListening(false);

      if (event.error === "not-allowed") {
        alert(
          "Please allow microphone access in your browser settings."
        );
      }
    };

    recognition.onend = () => {
      setListening(false);
    };

    try {
      recognition.start();
    } catch (error) {
      console.error(
        "Could not start voice input:",
        error
      );

      setListening(false);
    }
  };

  // =====================================================
  // CLEANUP VOICE FEATURES
  // =====================================================

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }

      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // =====================================================
  // VOICE OUTPUT — SPEAK BOT ANSWER
  // =====================================================

  const speakAnswer = (text) => {
    if (
      !("speechSynthesis" in window) ||
      !("SpeechSynthesisUtterance" in window)
    ) {
      alert(
        "Voice output is not supported in this browser."
      );
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    const containsHindi = /[\u0900-\u097F]/.test(text);

    utterance.lang =
      containsHindi || language === "hi"
        ? "hi-IN"
        : "en-IN";

    utterance.rate = 1;
    utterance.pitch = 1;

    const voices =
      window.speechSynthesis.getVoices();

    const wantedPrefix =
      utterance.lang.toLowerCase().startsWith("hi")
        ? "hi"
        : "en";

    const matchingVoice = voices.find((voice) =>
      voice.lang.toLowerCase().startsWith(wantedPrefix)
    );

    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }

    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  };

  // =====================================================
  // SEND MESSAGE TO FASTAPI BACKEND
  // =====================================================

  const sendMessage = async (text = message) => {
    const question = text.trim();

    if (!question || loading) return;

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
      console.log(
        "Sending message to backend:",
        question
      );

      const response = await fetch(
        "https://noohliving.com/chatbot-api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            session_id: sessionId,
            question: question,
          }),
        }
      );

      console.log(
        "Backend status:",
        response.status
      );

      if (!response.ok) {
        throw new Error(
          `Server error: ${response.status}`
        );
      }

      const data = await response.json();

      console.log("Backend response:", data);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.answer ||
            "Sorry, I couldn't find an answer.",
        },
      ]);
    } catch (error) {
      console.error("CHATBOT ERROR:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            language === "hi"
              ? "माफ़ कीजिए, अभी NOOH Assistant से कनेक्ट नहीं हो पा रहा है। कृपया थोड़ी देर बाद कोशिश करें।"
              : "Sorry, I’m unable to connect to the NOOH Assistant right now.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // WHATSAPP / CALL / INSTAGRAM BUTTONS
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

  // =====================================================
  // QUICK QUESTIONS
  // =====================================================

  const quickQuestions =
    language === "hi"
      ? [
          "NOOH कौन-कौन से products offer करता है?",
          "Stretch Ceiling क्या है?",
          "मुझे quotation चाहिए",
          "मुझे consultation बुक करनी है",
        ]
      : [
          "What is Stretch Ceiling?",
          "Tell me about NOOH products",
          "I want a quotation",
          "Book a consultation",
        ];

  // =====================================================
  // COMPONENT UI
  // =====================================================

  return (
    <>
      {/* CHATBOT WINDOW */}

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
              fixed bottom-24 right-4
              sm:bottom-8 sm:right-[100px]
              z-[99999]
              w-[calc(100vw-32px)] sm:w-[380px]
              h-[min(560px,calc(100vh-120px))]
              max-w-[380px]
              max-h-[calc(100vh-120px)]
              overflow-hidden
              rounded-[24px]
              border border-[#C9A86A]/30
              bg-[#0D0D0D]
              shadow-[0_25px_80px_rgba(0,0,0,0.55)]
              flex flex-col
            "
          >
            {/* HEADER */}

            <div
              className="
                relative shrink-0 px-5 py-4
                bg-gradient-to-b from-[#191919] to-[#101010]
                border-b border-white/10
              "
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="
                      relative w-11 h-11 rounded-full
                      flex items-center justify-center
                      border border-[#C9A86A]/60
                      bg-[#C9A86A]/10
                    "
                  >
                    <span
                      className="
                        text-[#D8B878] font-serif
                        text-xl tracking-widest
                      "
                    >
                      N
                    </span>

                    <span
                      className="
                        absolute right-0 bottom-0
                        w-3 h-3 rounded-full
                        bg-emerald-400
                        border-2 border-[#101010]
                      "
                    />
                  </div>

                  <div>
                    <h3
                      className="
                        text-white font-serif
                        text-[18px] tracking-wide
                      "
                    >
                      NOOH Assistant
                    </h3>

                    <div className="flex items-center gap-1.5 mt-1">
                      <span
                        className="
                          w-1.5 h-1.5 rounded-full
                          bg-emerald-400
                        "
                      />

                      <span className="text-[11px] text-white/40">
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                {/* LANGUAGE SELECTOR */}

                <div className="flex items-center gap-1 mr-2">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`px-2 py-1 rounded-md text-[11px] border transition ${
                      language === "en"
                        ? "bg-[#C9A86A] text-[#111] border-[#C9A86A]"
                        : "text-white/60 border-white/15 hover:border-[#C9A86A]/50"
                    }`}
                    aria-pressed={language === "en"}
                  >
                    EN
                  </button>

                  <button
                    type="button"
                    onClick={() => setLanguage("hi")}
                    className={`px-2 py-1 rounded-md text-[11px] border transition ${
                      language === "hi"
                        ? "bg-[#C9A86A] text-[#111] border-[#C9A86A]"
                        : "text-white/60 border-white/15 hover:border-[#C9A86A]/50"
                    }`}
                    aria-pressed={language === "hi"}
                  >
                    हिंदी
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setChatOpen(false)}
                  className="
                    w-9 h-9 rounded-full
                    flex items-center justify-center
                    text-white/40 hover:text-white
                    hover:bg-white/10 transition
                  "
                  aria-label="Close chatbot"
                >
                  <FaTimes size={18} />
                </button>
              </div>

              <div
                className="
                  absolute bottom-0 left-8 right-8 h-px
                  bg-gradient-to-r from-transparent
                  via-[#C9A86A]/60 to-transparent
                "
              />
            </div>

            {/* CHAT AREA */}

            <div
              ref={messagesEndRef}
              className="
                flex-1 overflow-y-auto
                px-4 py-5 space-y-3
                scrollbar-thin
                scrollbar-thumb-[#C9A86A]/30
              "
            >
              {/* BRAND BADGE */}

              <div className="flex justify-center mb-5">
                <div
                  className="
                    px-3 py-1 rounded-full
                    border border-[#C9A86A]/20
                    bg-[#C9A86A]/5 text-[#C9A86A]
                    text-[9px] tracking-[0.2em] uppercase
                  "
                >
                  Living Elevated
                </div>
              </div>

              {/* WELCOME MESSAGE */}

              <div className="flex justify-start">
                <div
                  className="
                    max-w-[82%] px-4 py-3
                    rounded-2xl rounded-bl-md
                    bg-[#191919]
                    border border-white/[0.08]
                    text-white/80 text-[13px] leading-relaxed
                  "
                >
                  {language === "hi" ? (
                    <>
                      नमस्ते 👋
                      <br />
                      NOOH — Living Elevated में आपका स्वागत है।
                      <br />
                      <br />
                      मैं आपकी क्या मदद कर सकता हूँ?
                    </>
                  ) : (
                    <>
                      Hello 👋
                      <br />
                      Welcome to NOOH — Living Elevated.
                      <br />
                      <br />
                      How can I help you today?
                    </>
                  )}
                </div>
              </div>

              {/* QUICK QUESTIONS */}

              {messages.length === 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => sendMessage(question)}
                      disabled={loading}
                      className="
                        rounded-full border border-[#C9A86A]/30
                        px-3 py-2 text-left text-[11px]
                        text-[#D8B878]
                        hover:bg-[#C9A86A]/10
                        disabled:opacity-50 transition
                      "
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}

              {/* LIVE MESSAGES */}

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
                      max-w-[85%] px-4 py-3
                      rounded-2xl text-[13px] leading-relaxed
                      whitespace-pre-wrap break-words
                      ${
                        msg.role === "user"
                          ? "bg-[#C9A86A] text-[#111] rounded-br-md"
                          : "bg-[#191919] text-white/80 border border-white/[0.08] rounded-bl-md"
                      }
                    `}
                  >
                    {msg.content}

                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          type="button"
                          onClick={() => speakAnswer(msg.content)}
                          className="
                            flex items-center gap-1
                            text-[11px] text-[#D8B878]
                            hover:text-white transition
                          "
                          aria-label="Listen to answer"
                          title="Listen to answer"
                        >
                          <FaVolumeUp size={12} />
                          Listen
                        </button>

                        <button
                          type="button"
                          onClick={stopSpeaking}
                          className="
                            flex items-center gap-1
                            text-[11px] text-white/40
                            hover:text-white transition
                          "
                          aria-label="Stop speaking"
                          title="Stop speaking"
                        >
                          <FaStop size={10} />
                          Stop
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* LOADING INDICATOR */}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className="
                      rounded-2xl rounded-bl-md
                      bg-[#191919]
                      border border-white/10
                      px-4 py-3 text-[12px]
                      text-[#D8B878]
                    "
                  >
                    {language === "hi"
                      ? "जवाब तैयार हो रहा है..."
                      : "Thinking..."}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT AREA */}

            <div
              className="
                shrink-0 border-t border-white/10
                bg-[#111111] p-3
              "
            >
              {/* INPUT AND MIC */}

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(event) =>
                    setMessage(event.target.value)
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter" &&
                      !event.shiftKey
                    ) {
                      event.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder={
                    listening
                      ? language === "hi"
                        ? "सुन रहा हूँ..."
                        : "Listening..."
                      : language === "hi"
                      ? "अपना सवाल लिखें..."
                      : "Type your message..."
                  }
                  disabled={loading}
                  className="
                    min-w-0 flex-1 rounded-full
                    border border-white/10
                    bg-[#1B1B1B]
                    px-4 py-3 text-[12px]
                    text-white placeholder:text-white/30
                    outline-none
                    focus:border-[#C9A86A]/60
                    disabled:opacity-50
                  "
                />

                {/* MICROPHONE BUTTON */}

                <button
                  type="button"
                  onClick={startVoiceInput}
                  disabled={loading}
                  className={`
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full border transition
                    ${
                      listening
                        ? "border-red-400 bg-red-500 text-white"
                        : "border-[#C9A86A]/40 bg-[#C9A86A]/10 text-[#D8B878] hover:bg-[#C9A86A]/20"
                    }
                    disabled:opacity-50
                  `}
                  aria-label={
                    listening
                      ? "Stop voice input"
                      : "Start voice input"
                  }
                  title={
                    listening
                      ? "Stop listening"
                      : "Speak your question"
                  }
                >
                  <FaMicrophone size={15} />
                </button>

                {/* SEND BUTTON */}

                <button
                  type="button"
                  onClick={() => sendMessage()}
                  disabled={!message.trim() || loading}
                  className="
                    flex h-10 w-10 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-[#C9A86A] text-[#111]
                    hover:bg-[#D8B878]
                    disabled:cursor-not-allowed
                    disabled:opacity-40 transition
                  "
                  aria-label="Send message"
                >
                  <span className="text-lg leading-none">
                    ➤
                  </span>
                </button>
              </div>

              <p className="mt-2 text-center text-[9px] text-white/25">
                {language === "hi"
                  ? "NOOH Assistant • हिंदी और English"
                  : "NOOH Assistant • Hindi & English"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING CONTACT BUTTONS */}

      <div
        className="
          fixed bottom-5 right-5 z-[99998]
          flex flex-col items-center gap-3
        "
      >
        {/* AI CHATBOT BUTTON */}

        <motion.button
          type="button"
          onClick={() => setChatOpen((prev) => !prev)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="
            relative w-14 h-14 rounded-full
            flex items-center justify-center
            bg-[#C9A86A] text-[#111]
            shadow-2xl border border-[#E5C987]
            hover:bg-[#D8B878] transition-all
          "
          aria-label={
            chatOpen
              ? "Close NOOH AI Assistant"
              : "Open NOOH AI Assistant"
          }
        >
          <motion.div
            className="
              absolute inset-0 rounded-full
              bg-[#C9A86A]
            "
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

          <span className="relative z-10">
            {chatOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaRobot size={25} />
            )}
          </span>
        </motion.button>

        {/* WHATSAPP / CALL / INSTAGRAM */}

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
              relative w-14 h-14 rounded-full
              flex items-center justify-center
              text-white shadow-2xl
              ${btn.color} ${btn.hover}
            `}
            aria-label={btn.label}
          >
            <motion.div
              className={`
                absolute inset-0 rounded-full
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