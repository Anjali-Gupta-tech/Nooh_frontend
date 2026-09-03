import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';

import PremiumCatalogueButton from "../components/PremiumCatalogueButton";

const Services = () => {
    const location = useLocation();
  const services = [
  {
    id: "stretch-ceiling",

    title: (
      <>
        STRETCHE<sup>™</sup> Stretch Ceiling Specialist by NOOH
      </>
    ),

    subheading: "Premium Architectural Stretch Ceiling Systems",

    description: (
      <>
        STRETCH<sup>™</sup> by NOOH is a premium, lightweight and seamless
        ceiling system designed to transform ordinary ceilings into modern
        architectural features. Its flexible membrane offers fast installation,
        easy maintenance and exceptional design freedom for residential and
        commercial interiors.
      </>
    ),

    categories: [
      {
        title: (
          <>
            STRETCHE<sup>™</sup> TRANSLUCENT
          </>
        ),
        subtitle: "Translucent & Illuminated Ceiling",
        link: "/products/stretch-ceiling/translucent",
      },

      {
        title: (
          <>
            STRETCHE<sup>™</sup> PRINT
          </>
        ),
        subtitle: "Customized Printed Stretch Ceiling",
        link: "/products/stretch-ceiling/print",
      },

      {
        title: (
          <>
            STRETCHE<sup>™</sup> GLOSS
          </>
        ),
        subtitle: "High-Gloss Reflective Ceiling",
        link: "/products/stretch-ceiling/gloss",
      },

      {
        title: (
          <>
            STRETCHE<sup>™</sup> PANEL
          </>
        ),
        subtitle: "Premium Decorative Ceiling Panel",
        link: "/products/stretch-ceiling/panel",
      },
    ],

    image: "/images/Stretch-Ceiling.jpeg",

    pdf: "/catalogue/STRETCHE_TM_STRETCH_CEILING_PANEL.pdf",
  },

  {
    id: "fiber-optic",

    title: (
      <>
        FIBERSKY<sup>™</sup> Fiber Optic Star Ceiling
      </>
    ),

    subheading: "Premium Fiber Optic Star Ceiling Systems",

    description: (
      <>
        STRETCHE<sup>™</sup> Fiber Optic Star Ceiling by NOOH creates stunning
        starry sky effects using advanced fiber optic lighting technology.
        Designed for luxury homes, hotels, cinemas, spas, and commercial spaces,
        it delivers a magical ambiance with customizable star patterns,
        shooting stars, and dynamic lighting effects.
      </>
    ),

    categories: [
      {
        title: (
          <>
            FIBERSKY<sup>™</sup> STATIC
          </>
        ),
        subtitle: "Realistic Starry Night Ceiling",
        link: "/products/fiber-optic/star-sky",
      },

      {
        title: (
          <>
            FIBERSKY<sup>™</sup> TWINKLE
          </>
        ),
        subtitle: "Dynamic Twinkling Star Ceiling",
        link: "/products/fiber-optic/twinkling-star",
      },

      {
        title: (
          <>
            FIBERSKY<sup>™</sup> RGB
          </>
        ),
        subtitle: "Color-Changing RGB Star Ceiling",
        link: "/products/fiber-optic/rgb-star",
      },

      {
        title: (
          <>
            FIBERSKY<sup>™</sup> GALAXY PRO
          </>
        ),
        subtitle: "Milky Way & Galaxy Ceiling",
        link: "/products/fiber-optic/galaxy-star",
      },
    ],

    image: "/images/fiber-optics-hero.png",

    pdf: "/catalogue/fiber-optic-star-lights.pdf",
  },

{
  id: "architectural-wall-art",

  title: (
    <>
       ARCHITECTURAL WALL ART<sup>™</sup>
    </>
  ),

  subheading:
    "Customized Wallpaper & Premium Architectural Wall Décor",

  description: (
    <>
      NOOH ARCHITECTURAL WALL ART<sup>™</sup> transforms ordinary walls into
      distinctive interior experiences through customized murals, seamless
      repeat patterns, exclusive embroidered wall coverings, and architectural
      decorative panels. Each solution can be developed according to wall
      dimensions, interior style, colour palette, customer preference, and
      project requirements.
    </>
  ),

  categories: [
    {
      title: (
        <>
          BESPOKEWALL<sup>™</sup>
        </>
      ),
      subtitle: "Customized Wallpaper & Personalized Murals",
      link: "/products/bespokewall",
    },

    {
      title: (
        <>
          PATTERNLINE<sup>™</sup>
        </>
      ),
      subtitle: "Seamless Repeat Pattern Wallpaper",
      link: "/products/patternline",
    },

    {
      title: (
        <>
          EMBROWALL<sup>™</sup>
        </>
      ),
      subtitle: "Exclusive Embroidery Wallpaper",
      link: "/products/emborwall",
    },

    {
      title: (
        <>
          WALLSCULPT<sup>™</sup>
        </>
      ),
      subtitle: "Architectural Wall Murals & Decorative Panels",
      link: "/product/wallscript",
    },
  ],

  image: "/images/embroidery-wall.png",

  pdf: "/catalogue/NOOH_ARCHITECTURAL_WALL_ART.pdf",
},

{
  id: "mirrora",

  title: (
    <>
      MIRRORA<sup>™</sup> Illuminated Architectural Surface System
    </>
  ),

  subheading: "Flexible Illuminated Architectural Surface System",

  description: (
    <>
      MIRRORA<sup>™</sup> is a flexible illuminated architectural surface
      system that transforms light, form and graphics into immersive
      architectural experiences. Designed for ceilings, suspended features,
      walls, partitions and decorative installations, MIRRORA<sup>™</sup>
      combines translucent surfaces with integrated LED illumination,
      customized forms, printing and programmable lighting.
    </>
  ),

  categories: [
    {
      title: (
        <>
          MIRRORA<sup>™</sup> WAVE
        </>
      ),
      subtitle: "Flowing Illuminated Architectural Forms",
      link: "/products/mirrora/wave",
    },

    {
      title: (
        <>
          MIRRORA<sup>™</sup> RIBBON
        </>
      ),
      subtitle: "Continuous Suspended Illuminated Forms",
      link: "/products/mirrora/ribbon",
    },

    {
      title: (
        <>
          MIRRORA<sup>™</sup> LOOP
        </>
      ),
      subtitle: "Circular & Elliptical Architectural Forms",
      link: "/products/mirrora/loop",
    },

    {
      title: (
        <>
          MIRRORA<sup>™</sup> SPIRAL
        </>
      ),
      subtitle: "Sculptural Hanging Illuminated Forms",
      link: "/products/mirrora/spiral",
    },

    {
      title: (
        <>
          MIRRORA<sup>™</sup> WALL
        </>
      ),
      subtitle: "Illuminated Vertical Architectural Features",
      link: "/products/mirrora/wall",
    },

    {
      title: (
        <>
          MIRRORA<sup>™</sup> PRINT
        </>
      ),
      subtitle: "Customized Printed Illuminated Surfaces",
      link: "/products/mirrora/print",
    },

    {
      title: (
        <>
          MIRRORA<sup>™</sup> RGB
        </>
      ),
      subtitle: "RGB & RGBW Colour-Changing Illumination",
      link: "/products/mirrora/rgb",
    },

    {
      title: (
        <>
          MIRRORA<sup>™</sup> DYNAMIC
        </>
      ),
      subtitle: "Programmable & Chasing Light Effects",
      link: "/products/mirrora/dynamic",
    },
  ],

  image: "/hero-images/mirrora-main.png",

  pdf: "/catalogue/mirrora-architecture.pdf",
},


{
  id: "cloudwave-gloss-textile",

  title: (
    <>
      CLOUDWAVE<sup>™</sup>  Textile Ceiling
    </>
  ),

  subheading: "Premium Gloss Textile Ceiling Systems",

  description: (
    <>
      CLOUDWAVE<sup>™</sup> by NOOH is a premium decorative ceiling solution
      designed with sophisticated textile-inspired finishes and seamless
      architectural detailing. From high-gloss reflective surfaces to satin,
      textured, and custom-printed designs, CLOUDWAVE<sup>™</sup> transforms
      ordinary ceilings into elegant visual features for luxury residential,
      hospitality, and commercial interiors.
    </>
  ),

  categories: [
    {
      title: (
        <>
          CLOUDWAVE<sup>™</sup> GLOSS
        </>
      ),
      subtitle: "Premium High-Gloss Textile Ceiling",
      link: "/products/cloudwave-gloss",
    },

    {
      title: (
        <>
          CLOUDWAVE<sup>™</sup> SATIN
        </>
      ),
      subtitle: "Soft Silk-Like Textile Ceiling Finish",
      link: "/products/cloudwave/satin",
    },

    {
      title: (
        <>
          CLOUDWAVE<sup>™</sup> TEXTURE
        </>
      ),
      subtitle: "Decorative Textured Ceiling Finishes",
      link: "/products/cloudwave/texture",
    },

    {
      title: (
        <>
          CLOUDWAVE<sup>™</sup> PRINT
        </>
      ),
      subtitle: "Custom Printed Architectural Ceiling",
      link: "/products/cloudwave/print",
    },
  ],

  image: "/images/cloudwave-gloss.png",

  pdf: "/catalogue/cloudwave-gloss-textile-ceiling.pdf",
},

{
  id: "panel-lighting",

  title: (
    <>
      STRETCHÉ<sup>™</sup> Panel Lighting
    </>
  ),

  subheading: "Premium Backlit Stretch Panel Lighting Systems",

  description: (
    <>
      STRETCHÉ<sup>™</sup> Panel Lighting by NOOH combines premium stretch
      surfaces with advanced LED illumination to create seamless and visually
      striking architectural lighting solutions. From elegant white lighting
      and tunable colour temperatures to printed designs and dynamic RGBW
      effects, each panel transforms ceilings and interiors into immersive
      luminous experiences.
    </>
  ),

  categories: [
    {
      title: (
        <>
          STRETCHÉ<sup>™</sup> PANEL WHITE
        </>
      ),
      subtitle: "Uniform Backlit White Panel Lighting",
      link: "/products/panel-lighting/white",
    },

    {
      title: (
        <>
          STRETCHÉ<sup>™</sup> PANEL TUNABLE
        </>
      ),
      subtitle: "Adjustable Warm-to-Cool White Lighting",
      link: "/products/panel-lighting/tunable",
    },

    {
      title: (
        <>
          STRETCHÉ<sup>™</sup> PANEL PRINT
        </>
      ),
      subtitle: "Custom Backlit Printed Panel Ceiling",
      link: "/products/panel-lighting/print",
    },

    {
      title: (
        <>
          STRETCHÉ<sup>™</sup> PANEL RGBW
        </>
      ),
      subtitle: "Dynamic Colour-Changing Panel Lighting",
      link: "/products/panel-lighting/rgbw",
    },
  ],

  image: "/service/product-panel.png",

  pdf: "/catalogue/stretche-panel-lighting.pdf",
},

  {
    id: "modular-kitchen",

    title: "Modular Kitchen",

    description:
      "Functional and stylish modular kitchens designed to maximize space and efficiency.",

    features: [
      "Custom Layouts",
      "Premium Hardware",
      "Smart Storage",
      "Modern Finishes",
    ],

    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068",

    pdf: "modular-kitchen.pdf",
  },


  {
    id: "luxury-furniture",

    title: "Luxury Furniture",

    description:
      "Bespoke luxury furniture pieces that combine comfort, style, and craftsmanship.",

    features: [
      "Custom Design",
      "Premium Materials",
      "Expert Craftsmanship",
      "Unique Pieces",
    ],

    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070",

    pdf: "luxury-furniture.pdf",
  },


  {
    id: "turnkey-construction",

    title: "Turnkey Construction",

    description:
      "End-to-end project management from concept to completion for residential and commercial spaces.",

    features: [
      "Complete Project Management",
      "Quality Assurance",
      "Timely Delivery",
      "Post-Delivery Support",
    ],

    image: "/image/tumkey-img.png",

    pdf: "turnkey-construction.pdf",
  },
];
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [location.hash]);
  return (
    <>
      <Helmet>
        <title>Our Services - NOOH Living Elevated</title>
        <meta name="description" content="Explore our comprehensive luxury interior design services including stretch ceilings, fiber optic systems, and turnkey projects." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
<div className="absolute inset-0">
  {/* Desktop Image */}
  <img
    src="/hero-images/products.png"
    alt="NOOH Premium Services"
    className="hidden md:block w-full h-full object-cover object-center"
  />

  {/* Mobile Image */}
  <img
    src="/images/service-hero-mobile.png"
    alt="NOOH Premium Services"
    className="block md:hidden w-full h-full object-cover object-center"
  />
</div>

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-black/20"></div>

  {/* Gold Gradient Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r"></div>

  {/* Content */}

  <div className="relative z-10 container-custom mx-auto text-center px-6">


  </div>

</section>
      
{/* Services Grid */}

<section className="section-padding bg-luxury-gray">

  <div className="container-custom mx-auto">

    <div className="space-y-24">

      {services.map((service, index) => (

        <motion.div
          key={service.id}
          id={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className={
              index % 2 === 1
                ? "lg:order-2"
                : ""
            }
          >

            <h2 className="text-3xl md:text-5xl font-luxury font-bold text-white mb-4">
              {service.title}
            </h2>


            {service.subheading && (
              <p className="text-gold-300 text-xl mb-5">
                {service.subheading}
              </p>
            )}


            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {service.description}
            </p>


            {/* =================================================
                PRODUCT CATEGORIES
            ================================================= */}

            {service.categories ? (

              <>

                <h4 className="text-gold-300 uppercase tracking-[3px] text-sm font-semibold mb-6">
                  Product Categories
                </h4>


                <div className="grid md:grid-cols-2 gap-5">

                  {service.categories.map((item, idx) => (

                    <Link
                      key={idx}
                      to={item.link}
                      className="group rounded-2xl border border-gold-300/20 bg-white/[0.03] p-6 hover:border-gold-300 hover:bg-gold-300/10 transition"
                    >

                      <h3 className="text-xl font-bold text-gold-300">
                        {item.title}
                      </h3>

                      <p className="text-white/60 mt-2">
                        {item.subtitle}
                      </p>

                    </Link>

                  ))}

                </div>

              </>

            ) : (

              /* =================================================
                 FEATURES
              ================================================= */

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

                {service.features?.map((feature, idx) => (

                  <div
                    key={idx}
                    className="flex items-center space-x-3"
                  >

                    <div className="w-2 h-2 rounded-full bg-luxury-gold" />

                    <span className="text-white/90">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

            )}


            {/* =================================================
                DOWNLOAD BUTTON
            ================================================= */}

            {service.pdf && (
              <div className="mt-10">

                <PremiumCatalogueButton
                  pdf={service.pdf}
                />

              </div>
            )}

          </div>


          {/* =================================================
              RIGHT IMAGE
          ================================================= */}

          <div
            className={
              index % 2 === 1
                ? "lg:order-1"
                : ""
            }
          >

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[650px] object-cover"
              />

            </motion.div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

        {/* CTA Section */}      

        <section className="section-padding">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-gold rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and let's bring your vision to life
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="btn-luxury">
                  Schedule Consultation
                </Link>
                <a href="tel:+919540060180" className="btn-outline-gold">
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
