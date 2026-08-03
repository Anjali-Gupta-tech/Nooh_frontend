import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaEnvelope,
   FaYoutube
} from "react-icons/fa";

const FloatingContactButtons = () => {
  const phoneNumber = "919958748979";

  const buttons = [
    {
      icon: <FaInstagram size={24} />,
      link: "https://www.instagram.com/noohlivingelevated/",
      color: "bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500",
      hover: "hover:opacity-90",
      label: "Instagram",
    },
   {
  icon: <FaYoutube size={22} />,
  link: "https://www.youtube.com/@noohliving",
  color: "bg-red-600",
  hover: "hover:bg-red-700",
  label: "YouTube",
},
    {
      icon: <FaPhoneAlt size={22} />,
      link: `tel:+${phoneNumber}`,
      color: "bg-red-500",
      hover: "hover:bg-red-600",
      label: "Call",
    },
    {
      icon: <FaWhatsapp size={28} />,
      link: `https://wa.me/${phoneNumber}?text=Hello! I would like to inquire about NOOH Living Elevated services.`,
      color: "bg-green-500",
      hover: "hover:bg-green-600",
      label: "WhatsApp",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      {buttons.map((btn, index) => (
        <motion.a
          key={index}
          href={btn.link}
          target={btn.link.startsWith("http") ? "_blank" : ""}
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.15 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl ${btn.color} ${btn.hover}`}
          aria-label={btn.label}
        >
          {/* Pulse Animation */}
          <motion.div
            className={`absolute inset-0 rounded-full ${btn.color}`}
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

          <span className="relative z-10">{btn.icon}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default FloatingContactButtons;