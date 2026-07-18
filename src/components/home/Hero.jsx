import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../Logo';

const Hero = () => {
  const videoRef = useRef(null);

  // Background Images
 const images = [
  {
    desktop: "/image/Hero2.png",
    mobile: "/image/Heropic1.png",
  },
  {
    desktop: "/image/Hero1.png",
    mobile: "/image/Hero1.png",
  },
  {
    desktop: "/image/Stretch.png",
    mobile: "/image/Stretch.png",
  },
  {
    desktop: "/image/rgbwstretchceiling.png",
    mobile: "/image/rgbwstretchceiling.png",
  },
  {
    desktop: "/image/Hero3.png",
    mobile: "/image/Hero3.png",
  },
  {
    desktop: "/image/BarriorCeiling.png",
    mobile: "/image/BarriorCeiling.png",
  },
  {
    desktop: "/image/paintings.png",
    mobile: "/image/paintings.png",
  },
  {
    desktop: "/image/Hero5.png",
    mobile: "/image/Hero5.png",
  },
];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto Change Images Every 4 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
 <div className="absolute inset-0">
  {images.map((image, index) => (
    <picture
      key={index}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
        index === currentImage ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Mobile Image */}
      <source
        media="(max-width: 768px)"
        srcSet={image.mobile}
      />

      {/* Desktop Image */}
      <img
        src={image.desktop}
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </picture>
  ))}
</div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20 z-10" />

    

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 bg-luxury-gold rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-luxury-gold rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;