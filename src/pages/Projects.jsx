
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaMapMarkerAlt, FaCalendar, FaRuler } from 'react-icons/fa';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'all',
    'Residential',
    'Commercial',
    'Hospitality',
    'Product',
  ];


  /* =====================================================
      PROJECTS DATA
  ===================================================== */

  const projects = [
    {
      id: 1,
      title: "Luxury Villa - Greater Noida",
      category: "Residential",
      location: "Greater Noida, UP",
      area: "5000 sq.ft",
      year: "2023",
      type: "image",
      media:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=2070&auto=format&fit=crop",
      description:
        "Complete interior design with stretch ceilings and fiber optic star ceilings",
    },

    {
      id: 2,
      title: "5-Star Hotel Suite",
      category: "Hospitality",
      location: "Mumbai, Maharashtra",
      area: "3500 sq.ft",
      year: "2023",
      type: "video",
      media:
        "https://cdn.coverr.co/videos/coverr-a-modern-living-room-1576/1080p.mp4",
      description:
        "Premium hospitality interiors with LED backlit panels and custom furniture",
    },

    {
      id: 3,
      title: "Corporate Office",
      category: "Commercial",
      location: "Bangalore, Karnataka",
      area: "10000 sq.ft",
      year: "2023",
      type: "image",
      media:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=85&w=2070&auto=format&fit=crop",
      description:
        "Modern office design with acoustic stretch ceilings and smart lighting",
    },

    {
      id: 4,
      title: "Designer Penthouse",
      category: "Residential",
      location: "Gurgaon, Haryana",
      area: "4500 sq.ft",
      year: "2023",
      type: "video",
      media:
        "https://cdn.coverr.co/videos/coverr-modern-living-room-1575/1080p.mp4",
      description:
        "Ultra-luxury penthouse with NOOH SKYLUME artificial daylight systems",
    },

    {
      id: 5,
      title: "Fine Dining Restaurant",
      category: "Hospitality",
      location: "Delhi, NCR",
      area: "2500 sq.ft",
      year: "2022",
      type: "image",
      media:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=85&w=2070&auto=format&fit=crop",
      description:
        "Elegant restaurant interiors with custom wall murals and ambient lighting",
    },

    {
      id: 6,
      title: "Retail Showroom",
      category: "Commercial",
      location: "Pune, Maharashtra",
      area: "6000 sq.ft",
      year: "2022",
      type: "video",
      media:
        "https://cdn.coverr.co/videos/coverr-a-luxurious-living-room-1576/1080p.mp4",
      description:
        "Contemporary showroom with translucent stretch ceilings and branding elements",
    },
  ];


  /* =====================================================
      PRODUCT VIDEOS DATA
  ===================================================== */

  const productVideos = [

    {
      id: 101,
      title: "CLOUDWAVE™  Ceiling",
      category: "Product",
      productCategory: "Textile Ceiling",
      type: "video",
      media: "/video/cloudwave-ceiling.mp4",
      description:
        "A premium textile ceiling solution designed to create elegant flowing forms, soft architectural curves, and immersive interior spaces.",
    },
   
{
  id: 102,
  title: "Embroidery Wallpaper",
  category: "Product",
  productCategory: "Wall Solutions",
  type: "video",
  media: "/video/emboidery-wallpaper.mp4",
  description:
    "A premium decorative wall solution inspired by the intricate beauty of embroidery. Featuring rich textures, detailed patterns, and artistic craftsmanship, Embroidery Wallpaper transforms ordinary walls into elegant statement surfaces with a luxurious and sophisticated character.",
},
{
  id: 103,
  title: "Printed Wallpaper",
  category: "Product",
  productCategory: "Wall Solutions",
  type: "video",
  media: "/video/print-wallpaper.mp4",
  description:
    "A premium customised wall solution featuring high-quality printed designs, patterns, and artwork. Printed Wallpaper transforms ordinary walls into visually striking surfaces, allowing complete creative freedom to match the style and character of any interior space.",
},
 {
  id: 104,

  title: "Dimmable & Tunable Lighting",

  category: "Product",

  productCategory: "Lighting Technology",

  type: "video",

  media: "/video/tunnable-demmible.mp4",

  description:
    "An advanced intelligent lighting solution that allows complete control over brightness and colour temperature, enabling users to create the perfect lighting atmosphere for every space and moment.",
},
{
  id: 105,
  title: "Printed Stretch Ceiling",
  category: "Product",
  productCategory: "Ceiling Solutions",
  type: "video",
  media: "/video/stretch-printed.mp4",
  description:
    "A premium decorative ceiling solution featuring high-quality customised printed designs. Printed Stretch Ceiling transforms ordinary interiors into visually striking spaces with detailed artwork, creative patterns, and seamless architectural finishes.",
},
  ];


  /* =====================================================
      COMBINE PROJECTS + PRODUCT VIDEOS
  ===================================================== */

  const allItems = [
    ...productVideos,
    ...projects,
  ];


  /* =====================================================
      FILTER DATA
  ===================================================== */

  const filteredItems =
    activeCategory === 'all'
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);


  return (
    <>
      <Helmet>
        <title>Our Projects - NOOH Living Elevated</title>

        <meta
          name="description"
          content="Explore our portfolio of completed luxury interior projects and innovative NOOH product videos."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-24">

        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section className="section-padding">
          <div className="container-custom mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-luxury font-bold text-gold-300 mb-6"
            >
              Our Projects
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Showcasing excellence in luxury interior design and innovative NOOH solutions across India
            </motion.p>

          </div>
        </section>


        {/* =====================================================
            CATEGORY FILTER
        ===================================================== */}

        <section className="section-padding pt-0">

          <div className="container-custom mx-auto">

            <div className="flex flex-wrap justify-center gap-4 mb-12">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-8 py-3 rounded-full uppercase text-sm font-semibold tracking-wider smooth-transition ${
                    activeCategory === category
                      ? "bg-luxury-gold text-luxury-black"
                      : "glass text-white hover:glass-gold"
                  }`}
                >
                  {category}
                </button>

              ))}

            </div>


            {/* =====================================================
                PROJECTS + PRODUCT VIDEOS GRID
            ===================================================== */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {filteredItems.map((item, index) => (

                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass rounded-2xl overflow-hidden group cursor-pointer"
                >


                  {/* =================================================
                      MEDIA
                  ================================================= */}
<div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] bg-black overflow-hidden flex items-center justify-center">

  {item.type === "video" ? (

    <video
      src={item.media}
      muted
      loop
      autoPlay
      playsInline
      preload="metadata"
      className="w-full h-full object-contain"
    />

  ) : (

    <img
      src={item.media}
      alt={item.title}
      className="w-full h-full object-cover transform group-hover:scale-110 smooth-transition"
    />

  )}

  {/* DARK GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none" />

  {/* CATEGORY */}
  <div className="absolute top-4 right-4">
    <span className="bg-luxury-gold text-luxury-black px-4 py-2 rounded-full text-xs font-bold uppercase">
      {item.category === "Product"
        ? item.productCategory
        : item.category}
    </span>
  </div>

  {/* VIDEO INDICATOR */}
  {item.type === "video" && (
    <div className="absolute bottom-4 left-4">
      <span className="flex items-center gap-2 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">

        <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />

        {item.category === "Product"
          ? "Product Video"
          : "Project Video"}

      </span>
    </div>
  )}

</div>


                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <div className="p-8">


                    {/* TITLE */}

                    <h3 className="text-2xl font-luxury font-bold text-white mb-4 group-hover:text-luxury-gold smooth-transition">

                      {item.title}

                    </h3>


                    {/* DESCRIPTION */}

                    <p className="text-white/70 mb-6 leading-relaxed">

                      {item.description}

                    </p>


                    {/* =================================================
                        PRODUCT OR PROJECT DETAILS
                    ================================================= */}

                    {item.category === "Product" ? (

                      <div className="mb-7">

                        <p className="text-white/50 text-xs uppercase tracking-wider mb-2">

                          Product Category

                        </p>

                        <p className="text-white text-sm">

                          {item.productCategory}

                        </p>

                      </div>

                    ) : (

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-7">


                        {/* LOCATION */}

                        <div className="flex items-start space-x-2">

                          <FaMapMarkerAlt className="text-luxury-gold mt-1 flex-shrink-0" />

                          <div>

                            <p className="text-white/50 text-xs uppercase tracking-wider">
                              Location
                            </p>

                            <p className="text-white text-sm mt-1">
                              {item.location}
                            </p>

                          </div>

                        </div>


                        {/* AREA */}

                        <div className="flex items-start space-x-2">

                          <FaRuler className="text-luxury-gold mt-1 flex-shrink-0" />

                          <div>

                            <p className="text-white/50 text-xs uppercase tracking-wider">
                              Area
                            </p>

                            <p className="text-white text-sm mt-1">
                              {item.area}
                            </p>

                          </div>

                        </div>


                        {/* YEAR */}

                        <div className="flex items-start space-x-2">

                          <FaCalendar className="text-luxury-gold mt-1 flex-shrink-0" />

                          <div>

                            <p className="text-white/50 text-xs uppercase tracking-wider">
                              Year
                            </p>

                            <p className="text-white text-sm mt-1">
                              {item.year}
                            </p>

                          </div>

                        </div>

                      </div>

                    )}


                    {/* =================================================
                        MEDIA TYPE + ACTION
                    ================================================= */}

                    <div className="flex items-center justify-between">

                      <span className="text-white/40 text-xs uppercase tracking-[2px]">

                        {item.category === "Product"
                          ? "NOOH Product Video"
                          : item.type === "video"
                          ? "Video Project"
                          : "Project Gallery"}

                      </span>


                      <button
                        type="button"
                        className="text-luxury-gold font-semibold uppercase text-sm tracking-wider animated-underline"
                      >

                        {item.category === "Product"
                          ? "Watch Video →"
                          : "View Details →"}

                      </button>

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA SECTION
        ===================================================== */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-gold rounded-3xl p-12"
            >

              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                Have a Project in Mind?
              </h2>

              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with our expertise
              </p>

              <a
                href="/contact"
                className="btn-luxury"
              >
                Start Your Project
              </a>

            </motion.div>

          </div>

        </section>

      </div>
    </>
  );
};

export default Projects;
