import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../Logo";

const Hero = () => {
  const videoRef = useRef(null);

  // Background Images
  const images = [
    
     {
      desktop: "/images/stretch-ceiling.png",
      mobile: "/images/cloudwave-mobile.webp",
      title: "STRETCHE™ CEILING",
      description:"It is a premium decorative fabric ceiling system creating elegant wave effects, visual depth, and stunning illuminated architectural interiors",
    },
    {
  desktop: "/hero-images/translucent-stretch-ceiling.png",
  mobile: "/images/translucent-stretch-ceiling-mobile.webp",
  title: "STRETCHE™ TRANSLUCENT CEILING",
  description:
    "A premium translucent stretch ceiling system with integrated LED backlighting, creating soft, uniform illumination, seamless finishes, and luxurious architectural interiors."
},
{
  desktop: "/images//embroidary-wallpaper-mobile.webp",
  mobile: "/images/embroidary-wallpaper-mobile.webp",
  title: "EMBROIDERY WALLPAPER",

  description:
    "Elevate your interiors with premium embroidered wallpapers that blend intricate craftsmanship, luxurious textures, and timeless elegance. Designed to create sophisticated feature walls, they add depth, warmth, and a distinctive artistic character to luxury residential and commercial spaces.",
},


  



{
  desktop: "/images/backlite-by-nooh.png",
  mobile: "/images/stretch-backlit-wall-mobile.webp",

  title: "STRETCHE™ BACKLIT WALL",

  description:
    "Illuminate your interiors with STRETCHE™ Backlit Wall, a premium architectural lighting solution that combines seamless stretch fabric with high-performance LED illumination. "
},

      {
  desktop: "/images/warm-hero-img.webp",
  mobile: "/images/warm-hero-mobile.webp",
   title: "Warm Mural-Filled Heritage Living Room",
  description:"Luxury heritage living room with handcrafted murals and rich artistic details.",
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
      desktop: "/image/paintings.webp",
      mobile: "/image/paintingspic.webp",
        title:"VIRTUAL WINDOW COLLECTION",
      description:"Bring breathtaking outdoor views indoors with illuminated virtual windows that create a realistic daylight experience.",
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

