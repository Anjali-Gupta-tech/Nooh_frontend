import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaMapMarkerAlt,
  FaCalendar,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Video references for mute/unmute
  const videoRefs = useRef({});
  const [soundOn, setSoundOn] = useState({});

  const toggleSound = (id) => {
    const video = videoRefs.current[id];

    if (!video) return;

    const newSoundState = !soundOn[id];

    video.muted = !newSoundState;

    // Keep video playing when sound is toggled
    if (video.paused) {
      video.play().catch(() => {});
    }

    setSoundOn((prev) => ({
      ...prev,
      [id]: newSoundState,
    }));
  };

  const categories = [
    "all",
    "Residential",
    "Commercial",
    "Hospitality",
    "Product",
  ];

  /* =====================================================
      PROJECTS DATA
  ===================================================== */

  const projects = [
   
 
  ];

  /* =====================================================
      PRODUCT VIDEOS DATA
  ===================================================== */

  const productVideos = [
    {
      id: 101,
      title: "CLOUDWAVE™ Ceiling",
      category: "Product",
      productCategory: "Textile Ceiling",
      type: "video",
      media: "/video/cloudwave-ceiling.mp4",
      description:
        "A premium textile ceiling solution designed to create elegant flowing forms, soft architectural curves, and immersive interior spaces.",
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
  title: "Stretché™ Translucent Ceiling",
  category: "product",
  type: "video",
  media: "/video/project1.mp4",
  description:
    "a premium translucent stretch ceiling solution with seamless backlighting, creating a bright, elegant, and immersive architectural surface.",
},
    {
  id: "106",
  title: "Stretché™ 3d Galaxy Printed",
  category: "printed stretch ceiling",
  type: "video",
  media: "/video/galaxy-stretch.mp4",
  description:
    "a premium 3d printed stretch ceiling featuring immersive galaxy-inspired visuals, creating a deep, luxurious and futuristic ceiling experience."
},

    {
      id: 107,
      title: "Printed Stretch Ceiling",
      category: "Product",
      productCategory: "Ceiling Solutions",
      type: "video",
      media: "/video/stretch-printed.mp4",
      description:
        "A premium decorative ceiling solution featuring high-quality customised printed designs. Printed Stretch Ceiling transforms ordinary interiors into visually striking spaces with detailed artwork, creative patterns, and seamless architectural finishes.",
    },

    {
      id: 108,
      title: "Stretché™ Print Ceiling",
      category: "Product",
      productCategory: "Ceiling Solutions",
      type: "video",
      media: "/video/stretch-marble-print.mp4",
      description:
        "A premium decorative stretch ceiling solution featuring high-quality customised printed designs. STRETCHÉ™ PRINT transforms ordinary interiors into visually striking spaces with detailed artwork, creative patterns, and seamless architectural finishes.",
    },

    {
      id: 109,
      title: "Fibersky™ Static",
      category: "Product",
      productCategory: "Fiber Optic Ceiling",
      type: "video",
      media: "/video/static-fibersky.mp4",
      description:
        "A premium fiber optic ceiling solution featuring evenly distributed points of light across the surface, creating a refined starry-sky effect with a subtle and elegant ambience.",
    },

    {
      id: 110,
      title: "Fibersky™ Galaxy",
      category: "Product",
      productCategory: "Fiber Optic Ceiling",
      type: "video",
      media: "/video/galaxy.mp4",
      description:
        "An immersive fiber optic ceiling solution inspired by the depth and beauty of a galaxy, combining dynamic points of light to create a dramatic celestial experience.",
    },

    {
      id: 111,
      title: "Stretché™ Translucent",
      category: "Product",
      productCategory: "Ceiling Solutions",
      type: "video",
      media: "/video/white-translucent.mp4",
      description:
        "A premium translucent stretch ceiling designed for seamless backlighting, delivering a bright, uniform, and elegant illuminated architectural surface.",
    },

    {
      id: 112,
      title: "Cloudwave™ Ceiling",
      category: "Product",
      productCategory: "Textile Ceiling",
      type: "video",
      media: "/video/wave.mp4",
      description:
        "A premium wave-form textile ceiling solution featuring flowing architectural curves that create a soft, sculptural, and visually dynamic ceiling design.",
    },
    {
  id: "113",
  title: "Stretché™ Ceiling",
  category: " Stretch Ceiling",
  type: "video",
  media: "/video/ceiling-solution.mp4",
  description:
    "a premium printed stretch ceiling featuring high-resolution custom designs for a seamless, elegant and visually immersive architectural finish."
},
  {
    id: 114,
    title: "Cloudwave™ Gloss Ceiling",
    category: "product",
    type: "video",
    media: "/video/cloudwave-gloss.mp4",
    description:
      "a premium gloss ceiling solution designed to create a sleek, reflective and luxurious architectural finish.",
  },

  {
    id: 115,
    title: "Cloudwave™ Windfabric Textile Ceiling",
    category: "product",
    type: "video",
    media: "/video/wave-textile.mp4",
    description:
      "a premium wave textile ceiling featuring elegant flowing forms for a soft, contemporary and sculptural interior finish.",
  },

  {
    id: 116,
    title: "Stretché™ Translucent Ceiling",
    category: "product",
    type: "video",
    media: "/video/Translucent-2.mp4",
    description:
      "a premium translucent stretch ceiling with seamless backlighting, creating a bright, elegant and immersive architectural surface.",
  },

  {
    id: 117,
    title: "Stretché™ Marble Printed Ceiling",
    category: "product",
    type: "video",
    media: "/video/marble-printed-1.mp4",
    description:
      "a premium marble printed stretch ceiling featuring realistic marble textures for a sophisticated and luxurious architectural finish.",
  },

  {
    id: 118,
    title: "Stretché™ Marble Printed Ceiling",
    category: "product",
    type: "video",
    media: "/video/marble-printed-2.mp4",
    description:
      "a premium marble printed stretch ceiling featuring realistic marble textures for a sophisticated and luxurious architectural finish.",
  },

  {
    id: 119,
    title: "Stretché™ Marble Printed Ceiling",
    category: "product",
    type: "video",
    media: "/video/marble-printed-3.mp4",
    description:
      "a premium marble printed stretch ceiling featuring realistic marble textures for a sophisticated and luxurious architectural finish.",
  },
   {
  id: 120,
  title: "NOOH™ printed wallpaper",
  category: "product",
  type: "video",
  media: "/video/wallpaper-print.mp4",
  description:
    "a premium printed wallpaper solution featuring high-resolution custom designs for elegant and immersive interior spaces.",
},





  {
  id: 121,
  title: "Architectural wall Art™",
  category: "product",
  type: "video",
  media: "/video/wallpaper-2.mp4",
},

{
  id: 122,
  title: "Architectural wall Art™",
  category: "product",
  type: "video",
  media: "/video/wallpaper-4.mp4",
},

{
  id: 123,
  title: "Architectural wall Art™",
  category: "product",
  type: "video",
  media: "/video/wallpaper-5.mp4",
},
{
  id: 124,
  title: "Architectural Wall Art™",
  category: "product",
  type: "video",
  media: "/videos/architectural-wall-art.mp4",
},
{
 id:125,
  title: "Stretché™ Printed Ceiling",
  category: "product",
  type: "video",
  media: "/videos/architectural-walll-art-1.mp4",
},
{
 id:126,
  title: "Stretché™ Printed Ceiling",
  category: "product",
  type: "video",
  media: "/videos/believe-in.mp4",
},
{
 id:127,
  title: "Stretché™ Backlit Wall",
  category: "product",
  type: "video",
  media: "/videos/wall-6.mp4",
},
{
 id:128,
  title: "Stretché™ Printed Ceiling",
  category: "product",
  type: "video",
  media: "/videos/ceiling-4.mp4",
},
{
 id:129,
  title: "",
  category: "product",
  type: "video",
  media: "/videos/ceiling-7.mp4",
},
{
 id:130,
  title: "Cloudwave™ Ceiling",
  category: "product",
  type: "video",
  media: "/videos/cloudwave-3.mp4",
},
{
 id:131,
  title: "Creative Wallpaper™",
  category: "product",
  type: "video",
  media: "/videos/creative-wallpaper.mp4",
},
{
 id:132,
  title: "Nooh™ Marble Art",
  category: "product",
  type: "video",
  media: "/videos/marble-art.mp4",
},
{
 id:133,
  title: "Stretché™ Marble Printed Ceiling",
  category: "product",
  type: "video",
  media: "/videos/marble-printed-art.mp4",
},
{
 id:134,
  title: "Stretché™ Panel Light",
  category: "product",
  type: "video",
  media: "/videos/panel-5.mp4",
},
{
 id:134,
  title: "Diamond Shaped RGBW Ceiling",
  category: "product",
  type: "video",
  media: "/videos/panel-8.mp4",
},
{
 id:135,
  title: "Stretché™ Printed Skylume Ceiling",
  category: "product",
  type: "video",
  media: "/videos/printed-ceilin8.mp4",
},
{
 id:136,
  title: "Stretché™ Printed Skylume Ceiling",
  category: "product",
  type: "video",
  media: "/videos/printed-ceiling-1.mp4",
},
{
 id:137,
  title: "Nooh™ Printed Wallpaper",
  category: "product",
  type: "video",
  media: "/videos/printed-wallpaper.mp4",
},
{
 id:138,
  title: "Stretché™ Translucent RGBW Ceiling",
  category: "product",
  type: "video",
  media: "/videos/rbgw-1.mp4",
},
{
 id:139,
  title: "Stretché™ Translucent RGBW Ceiling",
  category: "product",
  type: "video",
  media: "/videos/rgbw-7.mp4",
},
{
 id:140,
  title: "Stretché™ Translucent RGBW Ceiling",
  category: "product",
  type: "video",
  media: "/videos/rwbg-4.mp4",
},{
 id:141,
  title: "Cloudwave™ Textile Ceiling",
  category: "product",
  type: "video",
  media: "/videos/textile-wave.mp4",
},{
 id:142,
  title: "Fibersky™ Static Ceiling",
  category: "product",
  type: "video",
  media: "/videos/star-static.mp4",
},{
 id:143,
  title: "Stretché™ Backlit Wall",
  category: "product",
  type: "video",
  media: "/videos/stretch-backlit-wall.mp4",
},{
 id:144,
  title: "Stretché™ Printed Skylume Ceiling",
  category: "product",
  type: "video",
  media: "/videos/stretch-printed-skylume-ceiling.mp4",
},
{
 id:145,
  title: "Translucent Ceiling",
  category: "product",
  type: "video",
  media: "/videos/translucent.mp4",
},
{
 id:146,
  title: "Fibersky™ Twinkle Ceiling",
  category: "product",
  type: "video",
  media: "/videos/twinking-star.mp4",
},
{
 id:147,
  title: "",
  category: "product",
  type: "video",
  media: "/videos/rbgw.mp4",
},
{
 id:148,
  title: "",
  category: "product",
  type: "video",
  media: "/videos/budha-wallpaper.mp4",
},
{
 id:149,
  title: "",
  category: "product",
  type: "video",
  media: "/videos/ceiling-fabric.mp4",
},
{
 id:150,
  title: "",
  category: "product",
  type: "video",
  media: "/videos/wallpaper-printed.mp4",
},
{
 id:151,
  title: "",
  category: "product",
  type: "video",
  media: "/videos/city-wallpaper.mp4",
},
{
 id:152,
  title: "Cloudwave™ Ceiling",
  category: "product",
  type: "video",
  media: "/videos/cloudwave.mp4",
},
{
 id:153,
  title: "Nooh Rockscape™",
  category: "product",
  type: "video",
  media: "/videos/rockscape.mp4",
},
{
 id:154,
  title: "Dome Ceiling",
  category: "product",
  type: "video",
  media: "/videos/dome-ceiling.mp4",
},
{
 id:155,
  title: "Fibersky™ Twinkle Ceiling",
  category: "product",
  type: "video",
  media: "/videos/fiber-optics.mp4",
},
{
 id:156,
  title: "Fibersky™ Galaxy Pro Ceiling",
  category: "product",
  type: "video",
  media: "/videos/galaxy-star.mp4",
},
{
 id:157,
  title: "Stretché™ Translucent RGBW Ceiling",
  category: "product",
  type: "video",
  media: "/videos/gim-ceiling.mp4",
},
{
 id:158,
  title: "Stretché™ Printed Ceiling",
  category: "product",
  type: "video",
  media: "/videos/machine-printed.mp4",
},
{
 id:159,
  title: "Mirrora™ Ceiling",
  category: "product",
  type: "video",
  media: "/videos/mirrora.mp4",
},{
 id:160,
  title: "",
  category: "product",
  type: "video",
  media: "/videos/mural-ceiling.mp4",
},{
 id:161,
  title: "Stretché™ Translucent RGBW Ceiling",
  category: "product",
  type: "video",
  media: "/videos/rgbw-5.mp4",
},
{
 id:162,
  title: "RWBG Textile Stretch Ceiling",
  category: "product",
  type: "video",
  media: "/videos/rwbg-textile-ceiling.mp4",
},{
 id:163,
  title: "Mirrora™ Spiral Ceiling",
  category: "product",
  type: "video",
  media: "/videos/spiral-rwbg.mp4",
},{
 id:164,
  title: "Fibersky™ Twinkle Ceiling",
  category: "product",
  type: "video",
  media: "/videos/twinking-star.mp4",
},

{
 id:165,
  title: "Fibersky™ Twinkle Ceiling",
  category: "product",
  type: "video",
  media: "/videos/twinkling-star-2.mp4",
},
{
 id:166,
  title: "Fibersky™ Twinkle Ceiling",
  category: "product",
  type: "video",
  media: "/videos/twinkling-star-3.mp4",
},
{
 id:167,
  title: "",
  category: "product",
  type: "video",
  media: "/videos/virtual-window-5.mp4",
},
{
 id:168,
  title: "Stretché™ Printed Ceiling",
  category: "product",
  type: "video",
  media: "/videos/virtual-window.mp4",
},
{
 id:169,
  title: "",
  category: "product",
  type: "video",
  media: "/videos/yellow-ceiling.mp4",
},
{
 id:170,
  title: "",
  category: "product",
  type: "video",
  media: "/videos/yoga-ceiling.mp4",
},
{
 id:171,
  title: "Virtual Window™ ",
  category: "product",
  type: "video",
  media: "/videos/virtual-window-4.mp4",
},
{
 id:172,
  title: "Virtual Window™ ",
  category: "product",
  type: "video",
  media: "/videos/virtual-window-8.mp4",
},
{
 id:173,
  title: "Stretché™ Translucent Ceiling",
  category: "product",
  type: "video",
  media: "/videos/translucent-ceiling-9.mp4",
},
{
 id:174,
  title: "RGBW Translucent Ceiling",
  category: "product",
  type: "video",
  media: "/videos/rgbw-translucent-ceiling.mp4",
},
{
 id:176,
  title: "Stretché™ Fabric Backlit Wall",
  category: "product",
  type: "video",
  media: "/videos/Stretche-fabric-backlit-wall.mp4",
},



];
  

  /* =====================================================
      COMBINE PRODUCTS FIRST + PROJECTS AFTER
  ===================================================== */

  const allItems = [
    ...productVideos,
    ...projects,
  ];

  /* =====================================================
      FILTER DATA
  ===================================================== */

  const filteredItems =
    activeCategory === "all"
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

       {/* =====================================================
    PROJECTS HERO SECTION
===================================================== */}

<section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">

    {/* Desktop Image */}
    <img
      src="/image/nooh-project.png"
      alt="NOOH Projects"
      className="hidden md:block w-full h-full object-cover object-center"
    />

    {/* Mobile Image */}
    <img
      src="/projects-hero/projects-hero-mobile.png"
      alt="NOOH Projects"
      className="block md:hidden w-full h-full object-cover object-center"
    />

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

            {/* =================================================
                PRODUCTS + PROJECTS GRID
            ================================================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {filteredItems.map((item, index) => (

                <motion.div
                  key={`${item.id}-${item.title}`}
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

                  <div className="relative w-full h-[380px] sm:h-[420px] lg:h-[450px] bg-black overflow-hidden">
                          
                    {item.type === "video" ? (

                      <video
                        ref={(el) => {
                          if (el) {
                            videoRefs.current[item.id] = el;
                          }
                        }}
                        src={item.media}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />

                    ) : (

                      <img
                        src={item.media}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />

                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

                    {/* =================================================
                        MUTE / UNMUTE BUTTON
                    ================================================= */}

                    {item.type === "video" && (
                      
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSound(item.id);
                        }}
                      className="absolute bottom-4 right-4 z-30 w-11 h-11 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold transition-all duration-300"
                        aria-label={
                          soundOn[item.id]
                            ? "Mute video"
                            : "Unmute video"
                        }
                      >

                        {soundOn[item.id] ? (
                          <FaVolumeUp className="text-base" />
                        ) : (
                          <FaVolumeMute className="text-base" />
                        )}

                      </button>

                    )}

                    {/* =================================================
                        CATEGORY BADGE
                    ================================================= */}

                    <div className="absolute top-4 right-4 z-10">

                      <span className="bg-luxury-gold text-luxury-black px-4 py-2 rounded-full text-xs font-bold uppercase">

                        {item.category === "Product"
                          ? item.productCategory
                          : item.category}

                      </span>

                    </div>

                    {/* =================================================
                        VIDEO BADGE
                    ================================================= */}

                    {item.type === "video" && (

                      <div className="absolute bottom-4 left-4 z-10">

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
                      CARD INFORMATION
                  ================================================= */}

                  <div className="p-6">

                    {/* TITLE */}

                    <h3 className="text-2xl font-luxury font-bold text-white text-center mb-4 group-hover:text-luxury-gold smooth-transition">
                      {item.title}
                    </h3>

                    {/* PROJECT ONLY:
                        LOCATION + YEAR
                    */}

                    {item.category !== "Product" && (

                      <div className="flex items-center justify-center gap-6 text-white/60 text-sm">

                        {item.location && (

                          <span className="flex items-center gap-2">

                            <FaMapMarkerAlt className="text-gold-300" />

                            {item.location}

                          </span>

                        )}

                        {item.year && (

                          <span className="flex items-center gap-2">

                            <FaCalendar className="text-gold-300" />

                            {item.year}

                          </span>

                        )}

                      </div>

                    )}

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
                Let's collaborate to bring your vision to life with our
                expertise
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