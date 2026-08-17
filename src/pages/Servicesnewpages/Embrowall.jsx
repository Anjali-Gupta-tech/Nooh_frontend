import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

/* =========================================================
   EMBROWALL™
========================================================= */

const EmbroWall = () => {
  return (
    <>
      <Helmet>
        <title>EMBROWALL™ | NOOH Living Elevated</title>

        <meta
          name="description"
          content="EMBROWALL™ — exclusive embroidery wallpaper combining fabric, thread and art to create premium architectural wall experiences."
        />
      </Helmet>


      <div className="min-h-screen bg-luxury-black text-white pt-24">


        {/* =====================================================
            HERO
        ===================================================== */}

     {/* =====================================================
    EMBROWALL™ HERO
===================================================== */}

<section className="relative min-h-[78vh] flex items-center overflow-hidden">

  {/* =====================================================
      HERO BACKGROUND IMAGE
  ===================================================== */}

  <img
    src="/service/embrowall.png"
    alt="EMBROWALL™"
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
    "
  />


  {/* =====================================================
      DARK OVERLAY
  ===================================================== */}

  <div className="absolute inset-0 bg-black/40" />


  {/* =====================================================
      CINEMATIC GRADIENT
  ===================================================== */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-black/90
      via-black/60
      to-transparent
    "
  />


  {/* =====================================================
      HERO CONTENT
  ===================================================== */}

  <div className="relative z-10 container-custom mx-auto px-6 py-28">

    <motion.div
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl"
    >

      {/* EYEBROW */}

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          uppercase
          tracking-[5px]
          text-gold-300
          font-semibold
          mb-5
        "
      >
        Architectural Wall Art™ · Division 03
      </motion.p>


      {/* MAIN TITLE */}

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
        }}
        className="
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-luxury
          font-bold
          leading-[0.95]
          mb-7
        "
      >
        EMBROWALL
        <sup className="text-[30%] align-super ml-1">
          ™
        </sup>
      </motion.h1>


      {/* SUBTITLE */}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        className="
          text-2xl
          md:text-4xl
          text-gold-200
          font-luxury
          font-semibold
          mb-7
        "
      >
        Exclusive Embroidery Wallpaper
      </motion.h2>


      {/* DESCRIPTION */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
        }}
        className="
          max-w-3xl
          text-white/80
          text-lg
          md:text-xl
          leading-relaxed
        "
      >
        Where fabric, thread and art meet architecture.
        Premium embroidered wall coverings created with
        tactile texture, thread depth and refined craftsmanship.
      </motion.p>


      {/* =================================================
          HERO TAGS
      ================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.4,
        }}
        className="flex flex-wrap gap-3 mt-9"
      >

        {[
          "Embroidery Art",
          "Tactile Texture",
          "Thread Detail",
          "Premium Finish",
        ].map((item) => (

          <span
            key={item}
            className="
              px-4
              py-2
              rounded-full
              border
              border-gold-300/40
              bg-black/30
              backdrop-blur-sm
              text-sm
              text-white/80
            "
          >
            {item}
          </span>

        ))}

      </motion.div>


      {/* =================================================
          GOLD DECORATIVE LINE
      ================================================= */}

      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "120px" }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="h-px bg-gold-300 mt-10"
      />

    </motion.div>

  </div>


  {/* =====================================================
      BOTTOM FADE
  ===================================================== */}

  <div
    className="
      absolute
      bottom-0
      left-0
      right-0
      h-32
      bg-gradient-to-t
      from-luxury-black
      to-transparent
    "
  />

</section>


        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <section className="section-padding mx-auto py-24 bg-luxury-gray">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-20 items-center mb-32"
          >

            {/* IMAGE */}

            <div className="rounded-3xl overflow-hidden shadow-2xl">

              <img
                src="/images/embrowall-intro.png"
                alt="EMBROWALL embroidered wall"
                className="w-full h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105 object-cover"
              />

            </div>


            {/* CONTENT */}

            <div>

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-2">
                Division 03
              </p>


              <h2 className="text-5xl font-luxury font-bold mb-3">
                EMBROWALL™
              </h2>


              <h3 className="text-2xl text-gold-300 font-semibold mb-6">
                Exclusive Embroidery Wallpaper
              </h3>


              <p className="text-white/70 leading-loose mb-6">
                EMBROWALL™ is a premium decorative wall-covering
                collection combining fabric, threadwork and artistic
                detailing to create a tactile architectural surface.
              </p>


              <p className="text-white/70 leading-loose mb-8">
                Unlike conventional printed wallpaper, embroidery
                introduces physical texture, thread depth, handcrafted
                character and subtle light-and-shadow variation.
              </p>


              {/* FEATURE CARDS */}

              <div className="grid grid-cols-2 gap-5">

                <div className="glass rounded-2xl p-5">

                  <p className="text-gold-300 text-sm uppercase mb-2">
                    Texture
                  </p>

                  <h4 className="text-xl font-semibold">
                    Physical
                  </h4>

                </div>


                <div className="glass rounded-2xl p-5">

                  <p className="text-gold-300 text-sm uppercase mb-2">
                    Detail
                  </p>

                  <h4 className="text-xl font-semibold">
                    Thread Depth
                  </h4>

                </div>


                <div className="glass rounded-2xl p-5">

                  <p className="text-gold-300 text-sm uppercase mb-2">
                    Finish
                  </p>

                  <h4 className="text-xl font-semibold">
                    Premium
                  </h4>

                </div>


                <div className="glass rounded-2xl p-5">

                  <p className="text-gold-300 text-sm uppercase mb-2">
                    Character
                  </p>

                  <h4 className="text-xl font-semibold">
                    Handcrafted
                  </h4>

                </div>

              </div>

            </div>

          </motion.div>



          {/* =====================================================
              COLLECTIONS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >

            <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
              Embroidery Collections
            </p>


            <h2 className="text-5xl md:text-7xl font-luxury font-bold mb-6">
              ART CREATED
              <br />
              WITH THREAD
            </h2>


            <p className="max-w-3xl mx-auto text-white/70 text-lg leading-relaxed">
              From botanical compositions and statement florals to
              heritage motifs and personalized embroidery,
              EMBROWALL™ transforms walls into textile artworks.
            </p>

          </motion.div>



          {/* COLLECTION GRID */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "BOTANICAL THREAD™",
                subtitle: "Leaves, Branches & Garden Forms",
                image: "/images/embrowall-botanical.png",
              },
              {
                title: "FLORAL COUTURE™",
                subtitle: "Statement Floral Embroidery",
                image: "/images/embrowall-floral.png",
              },
              {
                title: "AVIAN ELEGANCE™",
                subtitle: "Peacocks, Cranes & Birds",
                image: "/images/embrowall-avian.png",
              },
              {
                title: "GOLDEN HERITAGE™",
                subtitle: "Traditional Motifs",
                image: "/images/embrowall-golden.png",
              },
              {
                title: "ROYAL GARDEN™",
                subtitle: "Palace-Inspired Florals",
                image: "/images/embrowall-royal.png",
              },
              {
                title: "CONTEMPORARY STITCH™",
                subtitle: "Modern Embroidery",
                image: "/images/embrowall-contemporary.png",
              },
              {
                title: "MONOGRAM ATELIER™",
                subtitle: "Personalized Names & Logos",
                image: "/images/embrowall-monogram.png",
              },
              {
                title: "SIGNATURE COLLECTION™",
                subtitle: "Exclusive Designer Walls",
                image: "/images/embrowall-signature.png",
              },
            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass rounded-3xl overflow-hidden"
              >

                <div className="overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[320px] object-cover transition-transform duration-500 hover:scale-105"
                  />

                </div>


                <div className="p-6">

                  <p className="uppercase tracking-[3px] text-gold-300 text-xs mb-3">
                    Embroidery Collection
                  </p>

                  <h3 className="text-xl font-luxury font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-sm">
                    {item.subtitle}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </section>



        {/* =====================================================
            WHY EMBROWALL
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-20 items-center mb-32"
          >

            <div>

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-2">
                Beyond Printed Wallpaper
              </p>


              <h2 className="text-5xl font-luxury font-bold mb-6">
                TEXTURE YOU
                <br />
                CAN <span className="text-gold-300">FEEL</span>
              </h2>


              <p className="text-white/70 leading-loose mb-8">
                Embroidery introduces a physical dimension to the wall.
                Raised threadwork catches light differently throughout
                the day, creating subtle changes in depth and appearance.
              </p>


              <div className="grid grid-cols-2 gap-5">

                {[
                  ["01", "Physical Texture"],
                  ["02", "Thread Depth"],
                  ["03", "Light & Shadow"],
                  ["04", "Premium Richness"],
                ].map(([number, title]) => (

                  <div
                    key={number}
                    className="glass rounded-2xl p-5"
                  >

                    <p className="text-gold-300 text-sm uppercase mb-2">
                      {number}
                    </p>

                    <h4 className="text-lg font-semibold">
                      {title}
                    </h4>

                  </div>

                ))}

              </div>

            </div>


            <div className="rounded-3xl overflow-hidden shadow-2xl">

              <img
                src="/images/embrowall-detail.png"
                alt="Embroidered wall detail"
                className="w-full h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105 object-cover"
              />

            </div>

          </motion.div>



          {/* =====================================================
              PROCESS
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >

            <div className="rounded-3xl overflow-hidden shadow-2xl">

              <img
                src="/images/embrowall-process.png"
                alt="Embroidery production process"
                className="w-full h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105 object-cover"
              />

            </div>


            <div>

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-2">
                From Idea to Artwork
              </p>


              <h2 className="text-5xl font-luxury font-bold mb-6">
                HOW EMBROIDERY
                <br />
                WALLPAPER IS
                <br />
                <span className="text-gold-300">
                  CREATED
                </span>
              </h2>


              <p className="text-white/70 leading-loose mb-8">
                Each EMBROWALL™ project follows a carefully developed
                process from concept and artwork development through
                embroidery production, quality inspection and installation.
              </p>


              <div className="grid grid-cols-2 gap-5">

                {[
                  ["01", "Concept"],
                  ["02", "Artwork Development"],
                  ["03", "Colour Selection"],
                  ["04", "Embroidery Planning"],
                  ["05", "Production"],
                  ["06", "Quality Inspection"],
                  ["07", "Installation"],
                ].map(([number, title]) => (

                  <div
                    key={number}
                    className="glass rounded-2xl p-5"
                  >

                    <p className="text-gold-300 text-sm uppercase mb-2">
                      {number}
                    </p>

                    <h4 className="text-lg font-semibold">
                      {title}
                    </h4>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>

        </section>



        {/* =====================================================
            APPLICATIONS
        ===================================================== */}

        <section className="section-padding bg-luxury-gray">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
              Embroidery Applications
            </p>


            <h2 className="text-5xl md:text-7xl font-luxury font-bold mb-6">
              CREATED FOR
              <br />
              EXCEPTIONAL INTERIORS
            </h2>


            <p className="max-w-3xl mx-auto text-white/70 text-lg leading-relaxed">
              Designed for luxury residential, hospitality,
              retail and premium commercial environments.
            </p>

          </motion.div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {[
              "Luxury Bedrooms",
              "Drawing Rooms",
              "Living-Room Feature Walls",
              "Hotel Suites",
              "Resort Reception Areas",
              "Premium Restaurants",
              "Luxury Salons",
              "Bridal Studios",
              "Fashion Boutiques",
              "Jewellery Showrooms",
              "Corporate Lounges",
              "Private Offices",
              "Designer Villas",
              "Experience Centres",
            ].map((item, index) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="glass rounded-2xl p-6"
              >

                <p className="text-gold-300 text-sm uppercase mb-3">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="text-lg font-semibold">
                  {item}
                </h3>

              </motion.div>

            ))}

          </div>

        </section>



        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-gold rounded-3xl p-12 text-center"
          >

            <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
              EMBROWALL™
            </p>


            <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
              SOME WALLS NEED
              <br />
              MORE THAN PRINT.
            </h2>


            <p className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              They need craftsmanship. Transform your wall with
              fabric, thread, texture and artistic detailing developed
              specifically for your interior.
            </p>


            <div className="flex flex-col sm:flex-row gap-5 justify-center">

              <a
                href="/contact"
                className="btn-luxury"
              >
                Get Free Consultation
              </a>


              <a
                href="/products/architectural-wall-art"
                className="btn-outline-gold"
              >
                Explore Architectural Wall Art™
              </a>

            </div>

          </motion.div>

        </section>


      </div>
    </>
  );
};


export default EmbroWall;