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
      mobile: "/images/stretch-ceiling-mobile.png",
      title: "STRETCHE™ CEILING",
      description:"It is a premium decorative fabric ceiling system creating elegant wave effects, visual depth, and stunning illuminated architectural interiors",
    },
    {
  desktop: "/hero-images/translucent-stretch-ceiling.png",
  mobile: "/images/translucent-mobile.png",
  title: "STRETCHE™ TRANSLUCENT CEILING",
  description:
    "A premium translucent stretch ceiling system with integrated LED backlighting, creating soft, uniform illumination, seamless finishes, and luxurious architectural interiors."
},

{
  desktop: "/hero-images/stretch-skylume.png",
  mobile: "/images/skylume-mobile.png",
  title: "STRETCHE™ SKYLUME CEILING",
  description:
    "A premium printed translucent stretch ceiling with integrated LED backlighting, creating a realistic open-sky illusion that brings natural brightness."
},

{
  desktop: "/hero-images/3d-mural-ceiling.png",
  mobile: "/images/embodry-mobile.png",
  title: "STRETCHE™ 3D CEILING MURAL",
  description:
    "A premium custom-printed stretch ceiling featuring stunning 3D visual effects that create depth, realism, and an immersive architectural experience for residential, commercial, and luxury interiors."
},

{
  desktop: "/hero-images/3D-GALAXY-PRINTING-CEILING.png",
  mobile: "/images/3-d-stretch.png",
  title: "STRETCHE™ 3D GALAXY PRINTED CEILING",
  description:
    "A premium custom-printed stretch ceiling featuring breathtaking 3D galaxy visuals with integrated LED illumination, creating a spectacular cosmic ambiance and immersive architectural experience."
},
{
  desktop: "/hero-images/EMBRODIARY-CEILING-SYSTEMS.png",
  mobile: "/hero-images/embordery.png",
  title: "STRETCHE™ EMBROIDERY CEILING SYSTEM",
  description:
    "A premium stretch ceiling system featuring custom embroidered fabric designs that combine artistic craftsmanship with modern architecture, creating elegant, luxurious, and visually distinctive interior spaces."
},
{
  desktop: "/hero-images/STRETCHE-PANEL-LIGHT.png",
  mobile: "/hero-images/panel-hero-img.png",
  title: "STRETCHE™ PANEL LIGHT",
  description:
    "A premium ultra-slim LED panel lighting solution engineered to deliver uniform illumination, high energy efficiency, and a sleek architectural finish for residential, commercial, and luxury interiors."
},
{
  desktop: "/hero-images/Architechtural.png",
  mobile: "/images/architectural-wall-art-mobile.webp",
  title: "ARCHITECTURAL WALL ART™",
  description:
    "Premium wall art solutions transforming architectural spaces through immersive visuals, artistic expression, and innovative surface design."
},
{
  desktop: "/hero-images/STRETCH-GLOSS-STRETCH-CEILING.png",
  mobile: "/images/stretche-gloss-ceiling-mobile.webp",
  title: "STRETCHE™ GLOSS CEILING",
  description:
    "A premium high-gloss stretch ceiling system with a mirror-like finish that enhances brightness, creates a sense of spaciousness, and adds a sleek, luxurious touch to modern interiors."
},
{
  desktop: "/hero-images/noohlivingrock.png",
  mobile: "/images/nooh-rockscape-mobile.webp",
  title: "NOOH ROCKSCAPE™",
  description:
    "Architectural artificial rock systems creating realistic, sculptural environments through innovative textures, forms, and immersive surface design."
},

{
  desktop: "/hero-images/STRETCH-CEILING-MANUFACTURER-DELHI-NCR-NOIDA-DELHI.png",
  mobile: "/images/sky-garden-ceiling-mobile.webp",
  title: "STRETCHE™ CEILING",
  description:
    "A premium printed translucent stretch ceiling featuring nature-inspired artwork and integrated LED backlighting, creating the illusion of an open sky while bringing elegance, tranquility, and biophilic design into modern interiors."
},
  {
  desktop: "/hero-images/STRETCHE-BACKLIT-STRETCH-CEILING.png",
  mobile: "/images/backlit-stretch-ceiling-mobile.webp",
  title: "STRETCHE™ BACKLIT STRETCH CEILING",
  description:
    "A premium LED backlit stretch ceiling system designed to deliver seamless illumination, soft diffused lighting, and a sophisticated architectural finish for residential, commercial, and luxury interiors."
},
{
  desktop: "/hero-images/STRETCHE-UV-PRINTING.png",
  mobile: "/images/uv-printed-stretch-ceiling-mobile.webp",
  title: "STRETCHE™ UV PRINTED  CEILING",
  description:
    "A premium stretch ceiling featuring high-definition UV printing technology that delivers vibrant colors, exceptional durability, and custom-designed artwork for elegant residential, commercial, and luxury interiors."
},
{
  desktop: "/hero-images/STARRY-LIGHT-PRINTING-STRETCH-CEILING.png",
  mobile: "/images/starry-light-printed-stretch-ceiling-mobile.webp",
  title: "STRETCHE™ STARRY LIGHT PRINTED STRETCH CEILING",
  description:
    "A premium printed stretch ceiling featuring a mesmerizing starry sky design with integrated LED illumination, creating a magical nighttime ambiance and luxurious architectural interiors."
},
{
  desktop: "/hero-images/SKY-LUME-PANEL-LIGHTING.png",
  mobile: "/images/sky-lume-panel-lighting-mobile.webp",
  title: "STRETCHE™ SKYLUME PANEL LIGHTING",
  description:
    "A premium LED panel lighting system engineered to deliver uniform illumination, exceptional energy efficiency, and a realistic daylight effect, creating bright, elegant, and modern architectural interiors."
},
{
  desktop: "/hero-images/STRETCHE-TRANSLITE-STRE.png",
  mobile: "/images/translite-stretch-ceiling-mobile.webp",
  title: "STRETCHE™ TRANSLITE STRETCH CEILING",
  description:
    "A premium translucent stretch ceiling system designed to diffuse light evenly, delivering seamless illumination, elegant aesthetics, and high-performance architectural lighting for luxury interiors."
},
{
  desktop: "/hero-images/STRETCHE-DECORATIVE-CEILING (1).png",
  mobile: "/images/decorative-stretch-ceiling-mobile.webp",
  title: "STRETCHE™ DECORATIVE STRETCH CEILING",
  description:
    "A premium decorative stretch ceiling system designed to enhance interiors with elegant finishes, custom designs, and modern architectural aesthetics for residential, commercial, and luxury spaces."
},

{
  desktop: "/hero-images/STRETCHE-GRAPHIC-CEILING.png",
  mobile: "/images/graphic-stretch-ceiling-mobile.webp",
  title: "STRETCHÉ™ GRAPHIC STRETCH CEILING",
  description:
    "Create stunning visual interiors with premium graphic stretch ceilings featuring customized artwork and seamless architectural finishes."
},

{
  desktop: "/hero-images/NOOH-EPOXY-FLOORING-INDIA.png",
  mobile: "/images/epoxy-flooring-mobile.webp",
  title: "3D EPOXY FLOORING",
  description:
    "Luxury seamless epoxy flooring designed with artistic finishes, exceptional durability, and modern decorative appeal."
},



{
  desktop: "/hero-images/3D-WALL-ART.png",
  mobile: "/images/3d-wall-art-mobile.webp",
  title: "3D DECORATIVE WALL ART",
  description:
    "Premium 3D wall art solutions crafted to add texture, depth, and architectural elegance to interior spaces."
},

{
  desktop: "/hero-images/WINDFABRIC-TEXTILE-CEILING.png",
  mobile: "/images/windfabric-textile-mobile.webp",
  title: "CLOUDWAVE™ WINDFABRIC TEXTILE CEILING",
  description:
    "Innovative textile ceiling systems offering flowing architectural designs with lightweight and elegant finishes."
},

{
  desktop: "/hero-images/STRETCHE-RGB-STRETCH-CEILING.png",
  mobile: "/images/rgb-stretch-ceiling-mobile.webp",
  title: "STRETCHÉ™ RGB STRETCH CEILING",
  description:
    "Dynamic RGB stretch ceiling solutions that transform interiors with vibrant colours and intelligent lighting effects."
},

{
  desktop: "/hero-images/STRETCHE-TEXTURED-STRETCH-CEILING.png",
  mobile: "/images/textured-stretch-ceiling-mobile.webp",
  title: "STRETCHÉ™ TEXTURED STRETCH CEILING",
  description:
    "Premium textured stretch ceilings designed to create sophisticated surfaces with unique architectural character."
},

{
  desktop: "/hero-images/STRETCHE-BACKLIT-WALL.png",
  mobile: "/images/backlit-wall-mobile.webp",
  title: "STRETCHÉ™ BACKLIT WALL",
  description:
    "Decorative illuminated wall systems featuring premium graphics with uniform LED backlighting for striking interiors."
},

{
  desktop: "/hero-images/7D-STRETCHE-CEILING-SOLUTION.png",
  mobile: "/images/7d-stretch-ceiling-mobile.webp",
  title: "7D STRETCHÉ™ CEILING SOLUTION",
  description:
    "Advanced ceiling solutions delivering immersive visual depth through innovative stretch ceiling technology."
},

{
  desktop: "/hero-images/FIBER-OPTIC-CEILING.png",
  mobile: "/images/fiber-optic-mobile.webp",
  title: " FIBERSKY™  FIBER  OPTIC CEILING",
  description:
    "Create breathtaking starry sky ceilings with premium fiber optic lighting for luxury residential and commercial spaces."
},

{
  desktop: "/hero-images/WINDFABRIC-TEXTILE-CEILING.png",
  mobile: "/images/windfabric-mobile.webp",
  title: "CLOUDWAVE™ TEXTILE CEILING",
  description:
    "Elegant textile ceiling systems that blend innovative design with lightweight architectural performance."
},

{
  desktop: "/hero-images/CLOUDWAVE-TEXTILE-CEILING.png",
  mobile: "/images/cloudwave-mobile.webp",
  title: "CLOUDWAVE™ TEXTILE CEILING",
  description:
    "Modern textile ceiling solutions featuring seamless flowing forms for premium architectural interiors."
},

{
  desktop: "/hero-images/decorative_ceiling.png",
  mobile: "/images/decorative-stretch-ceiling-mobile.webp",
  title: "STRETCHÉ™ DECORATIVE STRETCH CEILING",
  description:
    "Premium decorative stretch ceilings crafted to enhance interiors with elegant finishes and contemporary design."
},

{
  desktop: "/hero-images/STRETCHE-DECORATIVE-CEILING.png",
  mobile: "/images/decorative-ceiling-mobile.webp",
  title: "STRETCHÉ™ DECORATIVE CEILING",
  description:
    "Luxury decorative ceiling systems combining innovative materials with timeless architectural elegance."
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

    <div className="absolute inset-0 bg-black/30 z-10" />

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

