import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../Logo";

const Hero = () => {
  const videoRef = useRef(null);

  // Background Images
  const images = [
    {
      desktop: "/image/Hero1.webp",
      mobile: "/image/Hero1pic.webp",
      title: "Stretch Ceiling Solutions",
      description: "Elegant, Seamless & Premium Ceiling Systems",
    },
    {
      desktop: "/image/Hero2.webp",
      mobile: "/image/Heropic2.webp",
      title:"Designer Ceiling Collection",
      description:"Innovative ceiling concepts that redefine spaces with artistic forms, ambient lighting, and premium finishes."
    },

    {
      desktop: "/image/Stretch.webp",
      mobile: "/image/Stretchupdatedpic.webp",
        title:"Luxury Interior Design",
      description:"Thoughtfully designed interiors that blend timeless aesthetics with modern luxury and functionality.",
    },
    
    {
      desktop: "/image/rgbwstretchceiling.webp",
      mobile: "/image/rbgwupdatedpic.webp",
        title:"RGBW Stretch Ceiling",
      description:"Dynamic color-changing stretch ceilings that create immersive lighting experiences for commercial and luxury spaces.",
    },
    {
      desktop: "/image/Hero3.webp",
      mobile: "/image/Heroipic3.webp",
        title:" Luxury Ceiling & Interior",
      description:"Bespoke ceiling designs crafted to add elegance, depth, and architectural character to premium interiors.",
    },

    {
      desktop: "/image/paintings.webp",
      mobile: "/image/paintingspic.webp",
        title:"Virtual Window Collection",
      description:"Bring breathtaking outdoor views indoors with illuminated virtual windows that create a realistic daylight experience.",
    },
    {
      desktop: "/image/Hero5.webp",
      mobile: "/image/Heropic5.webp",
        title:"Traditional Wall Art",
      description:"Handcrafted decorative wall panels that transform ordinary walls into elegant works of art.",
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
    <>
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
              <source media="(max-width: 768px)" srcSet={image.mobile} />

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
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/*Heading and description */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="container-custom mx-auto px-6 text-center">
            <motion.h2
              key={currentImage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-3xl lg:text-4xl font-light text-white mb-4"
            >
              {images[currentImage].title}
            </motion.h2>

            <motion.p
              key={`desc-${currentImage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            >
              {images[currentImage].description}
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
