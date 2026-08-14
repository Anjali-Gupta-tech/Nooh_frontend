import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const BespokeWall = () => {
  return (
    <>
      <Helmet>
        <title>BESPOKEWALL™ | NOOH Living Elevated</title>

        <meta
          name="description"
          content="BESPOKEWALL™ by NOOH — customized wallpaper and personalized murals designed around your wall, your space and your vision."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black text-white pt-24">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <section className="py-20 border-b border-white/10">
          <div className="container-custom mx-auto text-center">

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4"
            >
              Architectural Wall Art™
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-luxury font-bold mb-6"
            >
              BESPOKEWALL
              <sup className="text-[35%] align-super ml-1">™</sup>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto text-white/70 text-xl leading-relaxed"
            >
              Customized Wallpaper & Personalized Murals designed around the
              exact dimensions, character and visual identity of your space.
            </motion.p>

          </div>
        </section>


        {/* =========================================================
            SECTION 1 — CUSTOM WALL ART
        ========================================================= */}

        <section className="section-padding bg-luxury-gray">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-20 items-center mb-32"
          >

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/service/bespokeWall-img.png"
                alt="BespokeWall customized mural"
                className="w-full h-[520px] object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div>

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-2">
                Custom Creation
              </p>

              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-4">
                DESIGNED AROUND YOUR WALL
              </h2>

              <h3 className="text-2xl text-gold-300 font-semibold mb-6">
                Personalized Artwork for Every Space
              </h3>

              <p className="text-white/70 leading-loose mb-6">
                BESPOKEWALL™ allows artwork to be developed specifically for
                the dimensions and visual character of your wall. Designs can
                be selected from the NOOH collection or developed around your
                own creative direction.
              </p>

              <p className="text-white/70 leading-loose">
                The composition, colour palette and visual elements can be
                adapted to complement the architecture, furniture and overall
                interior concept.
              </p>

            </div>

          </motion.div>

          {/* =========================================================
              SECTION 3 — DESIGN COLLECTIONS
          ========================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >

            <div className="text-center mb-14">

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                Explore
              </p>

              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-5">
                DESIGN COLLECTIONS
              </h2>

              <p className="max-w-3xl mx-auto text-white/70 leading-relaxed">
                Explore curated artistic directions for residential,
                hospitality and commercial interiors.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {[
                {
                  name: "NatureCanvas™",
                  subtitle: "Landscapes & Botanical",
                  image: "/images/bespoke-nature.png",
                },
                {
                  name: "UrbanStory™",
                  subtitle: "Cities & Architecture",
                  image: "/images/bespoke-urban.png",
                },
                {
                  name: "AbstractAura™",
                  subtitle: "Abstract & Artistic",
                  image: "/images/bespoke-abstract.png",
                },
                {
                  name: "MarbleMuse™",
                  subtitle: "Marble & Mineral",
                  image: "/images/bespoke-marble.png",
                },
                {
                  name: "FloralGrande™",
                  subtitle: "Floral & Tropical",
                  image: "/images/bespoke-floral.png",
                },
                {
                  name: "HeritageWalls™",
                  subtitle: "Heritage & Culture",
                  image: "/images/bespoke-heritage.png",
                },
                {
                  name: "DivineWalls™",
                  subtitle: "Spiritual & Meditative",
                  image: "/images/bespoke-divine.png",
                },
                {
                  name: "LittleDreams™",
                  subtitle: "Kids & Nursery",
                  image: "/images/bespoke-kids.png",
                },
              ].map((collection, index) => (

                <motion.div
                  key={collection.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                >

                  <div className="h-64 overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-1">
                      {collection.name}
                    </h3>

                    <p className="text-white/50 text-sm">
                      {collection.subtitle}
                    </p>
                  </div>

                </motion.div>

              ))}

            </div>

          </motion.div>

          {/* =========================================================
              SECTION 2 — CUSTOMIZATION
          ========================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-20 items-center mb-32"
          >

            <div className="order-2 lg:order-1">

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-2">
                Customization
              </p>

              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                YOUR DESIGN.
                <br />
                YOUR DIMENSIONS.
              </h2>

              <p className="text-white/70 leading-loose mb-8">
                Every BespokeWall™ project can be adapted according to the
                requirements of the space and the desired artistic expression.
              </p>


              <div className="grid grid-cols-2 gap-5">

                <div className="glass rounded-2xl p-5">
                  <p className="text-gold-300 text-sm uppercase mb-2">
                    Artwork
                  </p>
                  <h4 className="text-lg font-semibold">
                    Custom Selection
                  </h4>
                </div>

                <div className="glass rounded-2xl p-5">
                  <p className="text-gold-300 text-sm uppercase mb-2">
                    Sizing
                  </p>
                  <h4 className="text-lg font-semibold">
                    Exact Wall Size
                  </h4>
                </div>

                <div className="glass rounded-2xl p-5">
                  <p className="text-gold-300 text-sm uppercase mb-2">
                    Colour
                  </p>
                  <h4 className="text-lg font-semibold">
                    Custom Palette
                  </h4>
                </div>

                <div className="glass rounded-2xl p-5">
                  <p className="text-gold-300 text-sm uppercase mb-2">
                    Personalization
                  </p>
                  <h4 className="text-lg font-semibold">
                    Custom Elements
                  </h4>
                </div>

              </div>

            </div>


            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/bespokewall-2.png"
                alt="Customized wall artwork"
                className="w-full h-[520px] object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
              />
            </div>

          </motion.div>


       

          {/* =========================================================
              SECTION 4 — MATERIALS
          ========================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-20 items-center mb-32"
          >

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/bespokewall-material.png"
                alt="BespokeWall material options"
                className="w-full h-[500px] object-cover rounded-3xl"
              />
            </div>

            <div>

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-2">
                Materials
              </p>

              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                SELECT YOUR FINISH
              </h2>

              <p className="text-white/70 leading-loose mb-8">
                Choose a suitable wall-covering material according to the
                desired visual character, application and project requirements.
              </p>

              <div className="grid grid-cols-2 gap-4">

                {[
                  "Non-Woven",
                  "Premium Canvas",
                  "Textured Wallpaper",
                  "Fabric Wall Covering",
                  "Embroidered Fabric",
                  "Washable Vinyl",
                  "Peel & Stick",
                  "Metallic Finish",
                ].map((material) => (

                  <div
                    key={material}
                    className="glass rounded-xl px-5 py-4"
                  >
                    <span className="text-white/80">
                      {material}
                    </span>
                  </div>

                ))}

              </div>

            </div>

          </motion.div>


          {/* =========================================================
              SECTION 5 — PROCESS
          ========================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >

            <div className="text-center mb-14">

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                Process
              </p>

              <h2 className="text-4xl md:text-5xl font-luxury font-bold">
                FROM IDEA TO WALL
              </h2>

            </div>


            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

              {[
                ["01", "Measure", "Wall dimensions"],
                ["02", "Design", "Select artwork"],
                ["03", "Material", "Choose finish"],
                ["04", "Preview", "Digital visual"],
                ["05", "Produce", "Precision production"],
                ["06", "Install", "Professional installation"],
              ].map(([number, title, subtitle]) => (

                <div
                  key={number}
                  className="glass rounded-2xl p-6 text-center"
                >

                  <div className="text-gold-300 text-sm font-semibold mb-4">
                    {number}
                  </div>

                  <h3 className="text-lg font-semibold mb-2">
                    {title}
                  </h3>

                  <p className="text-white/50 text-sm">
                    {subtitle}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>


          {/* =========================================================
              CTA
          ========================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-gold rounded-3xl p-12 text-center"
          >

            <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
              CREATE YOUR BESPOKE WALL
            </h2>

            <p className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              From a curated artwork to a completely personalized mural,
              BESPOKEWALL™ brings your wall concept to life with precision,
              creativity and premium finishes.
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

export default BespokeWall;