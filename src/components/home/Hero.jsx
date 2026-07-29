import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../Logo";

const Hero = () => {
  const videoRef = useRef(null);

  // Background Images
  const images = [

     {
      desktop: "/images/Ceiling-hero.jpeg",
      mobile: "/images/cloudwave-mobile.png",
      title: "CLOUDWAVE™ TEXTILE CEILING",
      description:"It is a premium decorative fabric ceiling system creating elegant wave effects, visual depth, and stunning illuminated architectural interiors",
    },
    {
  desktop: "/images/mural_images-hero.png",
  mobile: "/images/mural-wall-mobile.png",
  title: "WALL CRAFTING",

  description:
    "Transform your interiors with bespoke wall crafting solutions featuring artistic textures, decorative finishes, and premium craftsmanship that bring elegance, character, and timeless luxury to every space.",
},
     {
      desktop: "/images/hero-image-10.png",
      mobile: "/images/luxury-wall-mural-mobile.png",
     title: "LUXURY WALL MURAL",

  description:
    "Transform your interiors with premium luxury wall murals featuring timeless artwork, nature-inspired designs, and museum-quality printing."
     },
     
      {
  desktop: "/images/warm-hero-img.png",
  mobile: "/images/.png",
   title: "Warm Mural-Filled Heritage Living Room",
  description:"Luxury heritage living room with handcrafted murals and rich artistic details.",
   },
    
    {
  desktop: "/images/bathroom_stretch_ceiling.jpeg",
  mobile: "/images/bathroom-ceiling-mobile.png",
   title: "BATHROOM STRETCH CEILING",
  description: "Moisture-resistant ceilings with a seamless luxury finish.",
   },

     {
  desktop: "/images/ceiling_collage_hero.png",
  mobile: "/images/ceiling-collage-mobile.png",
 title: "PREMIUM CEILING SOLUTION",
  description: "Innovative ceiling systems crafted for modern luxury interiors.",
   },
    
 {
  desktop: "/images/living-illusion.png",
  mobile: "/images/living-illusion-mobile.png",
  title: "WALL ILLUSION™ LIVING ART",
  description:
    "Transform your interiors with luxury panoramic wall murals featuring breathtaking artwork.",
},
    
  {
  desktop: "/images/mural_ceiling.png",
  mobile: "/images/mural-ceiling-mobile.png",
 title: "3D MURAL CEILING",
  description:
  "Enhance your interiors with premium 3D mural ceilings featuring stunning high-definition artwork, seamless finishes, and realistic depth.",
   },



   {
  desktop: "/images/3d_epoxy_flooring_combined_3500x1000_HD.jpeg",
  mobile: "/images/epoxy-mobile.png",
  title: "3D EPOXY FLOORING",
  description:
    "Transform ordinary floors into stunning architectural masterpieces with seamless 3D Epoxy Flooring.",
   },
    {
  desktop: "/images/stretch_ceiling_combined.jpeg",
  mobile: "/images/ceiling-hero-next.png",
  title: "STRETCHE™ PRINTED CEILING",

description:
"Transform ordinary interiors into extraordinary spaces with customized printed stretch ceilings.",
    },   
    {
      desktop: "/image/Hero1.webp",
      mobile: "/image/Hero1pic.webp",
      title: "STRETCH CEILING SOLUTIONS",
      description: "Elegant, Seamless & Premium Ceiling Systems",
    },
    {
      desktop: "/image/Hero2.webp",
      mobile: "/image/Heropic2.webp",
      title:"DESIGNER CEILING COLLECTION",
      description:"Innovative ceiling concepts that redefine spaces with artistic forms, ambient lighting, and premium finishes."
    },

    {
      desktop: "/image/Stretch.webp",
      mobile: "/image/Stretchupdatedpic.webp",
        title:"LUXURY INTERIOR DESIGN",
      description:"Thoughtfully designed interiors that blend timeless aesthetics with modern luxury and functionality.",
    },
    
    {
      desktop: "/image/rgbwstretchceiling.webp",
      mobile: "/image/rbgwupdatedpic.webp",
        title:"RGBW STRETCH CEILING",
      description:"Dynamic color-changing stretch ceilings that create immersive lighting experiences for commercial and luxury spaces.",
    },
    {
      desktop: "/image/Hero3.webp",
      mobile: "/image/Heroipic3.webp",
        title:"LUXURY CEILING & INTERIOR",
      description:"Bespoke ceiling designs crafted to add elegance, depth, and architectural character to premium interiors.",
    },

    {
      desktop: "/image/paintings.webp",
      mobile: "/image/paintingspic.webp",
        title:"VIRTUAL WINDOW COLLECTION",
      description:"Bring breathtaking outdoor views indoors with illuminated virtual windows that create a realistic daylight experience.",
    },
    {
      desktop: "/image/Hero5.webp",
      mobile: "/image/Heropic5.webp",
        title:"TRADITIONAL WALL ART",
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
