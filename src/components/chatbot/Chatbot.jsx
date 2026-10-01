import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const quickQuestions = [
  "What is Stretch Ceiling?",
  "Tell me about NOOH products",
  "I want a quotation",
  "Book a consultation",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hello 👋",
    },
    {
      id: 2,
      type: "bot",
      text: "Welcome to NOOH — Living Elevated. How can I help you today?",
    },
  ]);

  const sendMessage = (text = message) => {
    const value = text.trim();

    if (!value) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "user",
        text: value,
      },
    ]);

    setMessage("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "bot",
          text: "Thank you for your message. Our AI assistant will be connected shortly.",
        },
      ]);
    }, 700);
  };

  return (
    <>
      {/* =====================================================
          CHAT WINDOW
          Opens LEFT of the existing floating buttons
      ===================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: 30,
              scale: 0.95,
            }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              z-[9999]

              bottom-8
              right-[92px]

              w-[390px]
              h-[560px]

              max-w-[calc(100vw-110px)]
              max-h-[calc(100vh-32px)]

              overflow-hidden

              rounded-[26px]

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
                from-[#181818]
                to-[#101010]

                border-b
                border-white/10
              "
            >

              <div className="flex items-center justify-between">

                {/* BRAND */}

                <div className="flex items-center gap-3">

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

                        tracking-[0.15em]
                      "
                    >
                      N
                    </span>

                    {/* ONLINE */}

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

                    <div
                      className="
                        flex
                        items-center
                        gap-1.5
                        mt-0.5
                      "
                    >

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


                {/* CLOSE */}

                <button
                  onClick={() => setIsOpen(false)}
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

                    transition-all
                  "
                  aria-label="Close chatbot"
                >

                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6L18 18" />
                  </svg>

                </button>

              </div>


              {/* GOLD LINE */}

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
                CHAT BODY
            ================================================= */}

            <div
              className="
                flex-1

                overflow-y-auto

                px-4
                py-5

                space-y-3

                scrollbar-thin
                scrollbar-thumb-white/10
              "
            >

              {/* BADGE */}

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

                    tracking-[0.22em]

                    uppercase
                  "
                >
                  Living Elevated
                </div>

              </div>


              {/* MESSAGES */}

              {messages.map((msg) => (

                <motion.div
                  key={msg.id}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={`flex ${
                    msg.type === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >

                  <div
                    className={`
                      max-w-[82%]

                      px-4
                      py-3

                      text-[13px]

                      leading-relaxed

                      ${
                        msg.type === "user"
                          ? `
                            bg-[#C9A86A]

                            text-[#101010]

                            rounded-2xl
                            rounded-br-md
                          `
                          : `
                            bg-[#191919]

                            text-white/80

                            border
                            border-white/[0.08]

                            rounded-2xl
                            rounded-bl-md
                          `
                      }
                    `}
                  >
                    {msg.text}
                  </div>

                </motion.div>

              ))}


              {/* QUICK QUESTIONS */}

              {messages.length <= 2 && (

                <div className="pt-5">

                  <p
                    className="
                      px-1
                      mb-3

                      text-[9px]

                      tracking-[0.18em]

                      text-white/30

                      uppercase
                    "
                  >
                    Suggested questions
                  </p>


                  <div className="space-y-2">

                    {quickQuestions.map((question) => (

                      <button
                        key={question}
                        onClick={() => sendMessage(question)}
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
                        "
                      >
                        {question}
                      </button>

                    ))}

                  </div>

                </div>

              )}

            </div>


            {/* =================================================
                INPUT
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
                "
              >

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
                  "
                />


                <button
                  onClick={() => sendMessage()}
                  disabled={!message.trim()}
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

                    disabled:opacity-25

                    hover:bg-[#D8B878]

                    transition-all
                  "
                  aria-label="Send message"
                >

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>

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
          CHATBOT BUTTON
      ===================================================== */}

      <motion.button
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.94,
        }}
        className="
          fixed

          z-[10000]

          bottom-8
          right-8

          w-[62px]
          h-[62px]

          rounded-full

          flex
          items-center
          justify-center

          bg-[#0D0D0D]

          border
          border-[#C9A86A]/70

          shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        "
        aria-label="Open NOOH chatbot"
      >

        {/* GOLD RING */}

        <span
          className="
            absolute

            inset-[-5px]

            rounded-full

            border
            border-[#C9A86A]/20
          "
        />


        <AnimatePresence mode="wait">

          {isOpen ? (

            <motion.svg
              key="close"

              initial={{
                rotate: -90,
                opacity: 0,
              }}

              animate={{
                rotate: 0,
                opacity: 1,
              }}

              exit={{
                rotate: 90,
                opacity: 0,
              }}

              width="24"
              height="24"

              viewBox="0 0 24 24"

              fill="none"

              stroke="#D8B878"

              strokeWidth="1.7"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6L18 18" />
            </motion.svg>

          ) : (

            <motion.svg
              key="chat"

              initial={{
                scale: 0.7,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.7,
                opacity: 0,
              }}

              width="25"
              height="25"

              viewBox="0 0 24 24"

              fill="none"

              stroke="#D8B878"

              strokeWidth="1.6"
            >

              <path
                d="
                  M20 11.5
                  C20 15.64 16.42 19 12 19
                  C10.75 19 9.57 18.73 8.53 18.25
                  L4 21
                  L4.8 16.25
                  C3.68 15.01 3 13.35 3 11.5
                  C3 7.36 6.58 4 11 4
                  H12
                  C16.42 4 20 7.36 20 11.5Z
                "
              />

              <circle
                cx="8"
                cy="11.5"
                r="0.7"
                fill="#D8B878"
                stroke="none"
              />

              <circle
                cx="12"
                cy="11.5"
                r="0.7"
                fill="#D8B878"
                stroke="none"
              />

              <circle
                cx="16"
                cy="11.5"
                r="0.7"
                fill="#D8B878"
                stroke="none"
              />

            </motion.svg>

          )}

        </AnimatePresence>

      </motion.button>
    </>
  );
}