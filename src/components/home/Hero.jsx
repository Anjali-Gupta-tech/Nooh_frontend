import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../Logo";

const Hero = () => {
  const videoRef = useRef(null);

  // Background Images
  const images = [

     {
      desktop: "/images/Ceiling-hero.webp",
      mobile: "/images/cloudwave-mobile.webp",
      title: "CLOUDWAVE™ TEXTILE CEILING",
      description:"It is a premium decorative fabric ceiling system creating elegant wave effects, visual depth, and stunning illuminated architectural interiors",
    },

{
  desktop: "/images//embroidary-wallpaper-mobile.webp",
  mobile: "/images/embroidary-wallpaper-mobile.webp",
  title: "EMBROIDERY WALLPAPER",

  description:
    "Elevate your interiors with premium embroidered wallpapers that blend intricate craftsmanship, luxurious textures, and timeless elegance. Designed to create sophisticated feature walls, they add depth, warmth, and a distinctive artistic character to luxury residential and commercial spaces.",
},


    {
  desktop: "/images/mural_images-hero.webp",
  mobile: "/images/mural-wall-mobile.webp",
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
  desktop: "/images/warm-hero-img.webp",
  mobile: "/images/warm-hero-mobile.webp",
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
  desktop: "/images/ceiling_collage_hero.webp",
  mobile: "/images/ceiling-collage-mobile.webp",
 title: "PREMIUM CEILING SOLUTION",
  description: "Innovative ceiling systems crafted for modern luxury interiors.",
   },
    
 {
  desktop: "/images/living-illusion.webp",
  mobile: "/images/living-illusion-mobile.webp",
  title: "WALL ILLUSION™ LIVING ART",
  description:
    "Transform your interiors with luxury panoramic wall murals featuring breathtaking artwork.",
},
    
  {
  desktop: "/images/mural_ceiling.webp",
  mobile: "/images/mural-ceiling-mobile.webp",
 title: "3D MURAL CEILING",
  description:
  "Enhance your interiors with premium 3D mural ceilings featuring stunning high-definition artwork, seamless finishes, and realistic depth.",
   },
   {
  desktop: "/images/3d_epoxy_flooring_combined_3500x1000_HD.webp",
  mobile: "/images/epoxy-mobile.webp",
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
  desktop: "/images/wallmural.webp",
  mobile: "/images/wall-mural-mobile.webp",
   title: "Luxury 3D Wall Craft",
  description:"Transform Blank Walls into Timeless Masterpieces",
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
const [isPaused, setIsPaused] = useState(false);

// Auto Slider
useEffect(() => {
  if (isPaused) return;

  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 4000);

  return () => clearInterval(interval);
}, [currentImage, isPaused, images.length]);

const nextSlide = () => {
  setCurrentImage((prev) => (prev + 1) % images.length);
};

const prevSlide = () => {
  setCurrentImage((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};

return (
  <section
  className="relative h-screen overflow-hidden cursor-pointer"
  onClick={() => setIsPaused((prev) => !prev)}
>
    {/* Background Images */}

    <div className="absolute inset-0">

      {images.map((image, index) => (

        <picture
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >

          <source
            media="(max-width:768px)"
            srcSet={image.mobile}
          />

          <img
            src={image.desktop}
            alt={image.title}
            className="w-full h-full object-cover"
          />

        </picture>

      ))}

    </div>

    {/* Overlay */}

    <div className="absolute inset-0 bg-black/40 z-10" />

    {/* Content */}

    <div className="relative z-20 h-full flex items-center justify-center">

      <div className="container-custom mx-auto px-6 text-center">

        <motion.h2
          key={currentImage}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-5"
        >

          {images[currentImage].title}

        </motion.h2>

        <motion.p
          key={`desc-${currentImage}`}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="max-w-3xl mx-auto text-white/80 text-lg md:text-xl leading-relaxed"
        >

          {images[currentImage].description}

        </motion.p>

      </div>

    </div>

    {/* Controls */}

    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-5">

      {/* Previous */}

      <button
        onClick={prevSlide}
        className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-gold-300 hover:text-black transition"
      >
        ❮
      </button>

      {/* Dots */}

      <div className="flex gap-2">

        {images.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-300 rounded-full ${
              currentImage === index
                ? "w-8 h-2 bg-gold-300"
                : "w-2 h-2 bg-white/50 hover:bg-white"
            }`}
          />

        ))}

      </div>

      {/* Play Pause */}

      {/* Next */}

      <button
        onClick={nextSlide}
        className="w-11 h-11 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-gold-300 hover:text-black transition"
      >
        ❯
      </button>

    </div>

  </section>
);
}
export default Hero;

