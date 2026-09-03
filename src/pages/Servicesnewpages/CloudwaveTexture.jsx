import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const CloudwaveTexture = () => {
  return (
    <>
      <Helmet>
        <title>CLOUDWAVE™ TEXTURE | NOOH Living Elevated</title>

        <meta
          name="description"
          content="Discover CLOUDWAVE™ TEXTURE, a premium sculptural textile ceiling solution combining flowing architectural forms with rich textured finishes for exceptional luxury interiors."
        />
      </Helmet>

      <div className="min-h-screen text-white pt-20 bg-luxury-black">

        {/* ================================================= */}
        {/* HERO SECTION */}
        {/* ================================================= */}

        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

          {/* Background Image */}

          <div className="absolute inset-0">
            <img
              src="/service/cloudwave-texture.png"
              alt="CLOUDWAVE TEXTURE Ceiling"
              className="h-full w-full object-cover"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/45" />
          </div>


          {/* Gold Bottom Line */}

          <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-[#d6af45]" />


          {/* HERO CONTENT */}

          <div className="relative z-10 w-full px-6 text-center">

            <div className="container-custom mx-auto text-center">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4"
              >
                CLOUDWAVE™ Collection
              </motion.p>


              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-luxury font-bold mb-6"
              >
                CLOUDWAVE
                <sup className="relative -top-5 ml-1 text-xl md:text-3xl">
                  ™
                </sup>{" "}
                TEXTURE
              </motion.h1>


              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-5xl mx-auto text-white/70 text-xl leading-relaxed"
              >
                CLOUDWAVE™ TEXTURE is a premium sculptural textile ceiling
                solution that combines flowing architectural forms with rich
                surface textures, creating exceptional depth, material
                character and visual identity within luxury interiors.
              </motion.p>

            </div>

          </div>

        </section>



        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <section className="section-padding bg-luxury-gray">


          {/* ================================================= */}
          {/* PRODUCT INTRODUCTION */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-36"
          >

            {[
              {
                title: "CLOUDWAVE™ TEXTURE CEILING",

                image: "/service/cloudwave-texture-detail.png",

                desc:
                  "CLOUDWAVE™ TEXTURE introduces a new dimension to ceiling design by combining fluid sculptural geometry with carefully selected surface finishes. The textured ceiling creates visual depth and material character, transforming ordinary overhead surfaces into distinctive architectural features. Every installation can be developed as a bespoke composition that complements the overall interior design concept."
              }

            ].map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-16 items-center mb-28 ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >


                {/* IMAGE */}

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-3xl shadow-2xl"
                >

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[500px] object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
                  />

                </motion.div>


                {/* CONTENT */}

                <div>

                  <h2 className="text-4xl font-luxury font-bold mb-6">
                    {item.title}
                  </h2>


                  <div className="w-24 h-[2px] bg-gold-300 rounded-full mb-8" />


                  <p className="text-white/70 text-lg leading-loose mb-8">
                    {item.desc}
                  </p>


                  <div className="flex flex-wrap gap-3">

                    {[
                      "Premium Texture",
                      "Architectural Depth",
                      "Custom Surface",
                      "Sculptural Curves",
                      "Bespoke Design",
                      "Luxury Finish"
                    ].map((tag) => (

                      <span
                        key={tag}
                        className="glass px-4 py-2 rounded-full text-sm"
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

              </motion.div>

            ))}

          </motion.section>



          {/* ================================================= */}
          {/* ARCHITECTURAL POSSIBILITIES */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >

            <p className="uppercase tracking-[5px] text-gold-300 text-center font-semibold mb-4">
              Architectural Possibilities
            </p>


            <h2 className="text-5xl font-luxury text-center font-bold mb-14">
              Texture Meets Architectural Form
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

              {[
                {
                  title: "Rich Surface Textures",
                  desc:
                    "Create visually expressive ceiling surfaces with refined textures that add depth and character to the architectural environment."
                },

                {
                  title: "Flowing Ceiling Geometry",
                  desc:
                    "Combine rich surface finishes with elegant waves, curves and sculptural forms."
                },

                {
                  title: "Material-Inspired Design",
                  desc:
                    "Develop ceiling concepts inspired by natural, textile and contemporary architectural surface aesthetics."
                },

                {
                  title: "Custom Ceiling Design",
                  desc:
                    "Every CLOUDWAVE™ TEXTURE installation can be designed according to the dimensions and character of the space."
                },

                {
                  title: "Light and Shadow Effects",
                  desc:
                    "Architectural lighting can enhance the visual depth of textured surfaces and highlight flowing forms."
                },

                {
                  title: "Bespoke Design Freedom",
                  desc:
                    "Combine texture, geometry and lighting to create a completely unique architectural ceiling composition."
                }

              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03
                  }}
                  transition={{ duration: 0.35 }}
                  className="glass rounded-3xl p-8"
                >

                  <h3 className="text-2xl text-gold-300 font-semibold mb-4">
                    {item.title}
                  </h3>


                  <p className="text-white/70 leading-relaxed">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.section>



          {/* ================================================= */}
          {/* WHY CHOOSE */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >

            <p className="uppercase tracking-[5px] text-gold-300 text-center font-semibold mb-4">
              Why Choose CLOUDWAVE™ TEXTURE
            </p>


            <h2 className="text-5xl font-luxury text-center font-bold mb-14">
              Designed With Depth and Character
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

              {[
                {
                  title: "Exceptional Visual Depth",
                  desc:
                    "Textured surfaces introduce layers of visual interest and create a richer architectural experience."
                },

                {
                  title: "Distinctive Surface Character",
                  desc:
                    "The surface becomes an important design element rather than simply a conventional ceiling finish."
                },

                {
                  title: "Fully Customised Design",
                  desc:
                    "Each installation can be planned around the interior concept, ceiling dimensions and design requirements."
                },

                {
                  title: "Premium Architectural Finish",
                  desc:
                    "Designed to create a refined and visually distinctive ceiling for luxury residential and commercial spaces."
                },

                {
                  title: "Enhanced by Lighting",
                  desc:
                    "Carefully planned lighting can reveal surface depth, highlight textures and enhance the sculptural form."
                },

                {
                  title: "Minimal Maintenance",
                  desc:
                    "The ceiling system is designed for long-term performance with minimal routine maintenance requirements."
                }

              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03
                  }}
                  transition={{ duration: 0.35 }}
                  className="glass rounded-3xl p-8"
                >

                  <h3 className="text-2xl text-gold-300 font-semibold mb-4">
                    {item.title}
                  </h3>


                  <p className="text-white/70 leading-relaxed">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.section>



          {/* ================================================= */}
          {/* LIGHTING INTEGRATION */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >

            <p className="uppercase tracking-[5px] text-gold-300 text-center font-semibold mb-4">
              Lighting Integration
            </p>


            <h2 className="text-5xl font-luxury text-center font-bold mb-14">
              Light That Reveals Every Detail
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

              {[
                {
                  title: "Warm White Lighting",
                  desc:
                    "Creates a comfortable and luxurious atmosphere while highlighting the richness of the textured surface."
                },

                {
                  title: "Concealed Cove Lighting",
                  desc:
                    "Hidden perimeter lighting creates elegant depth and emphasises the flowing geometry of the ceiling."
                },

                {
                  title: "Dimmable Lighting",
                  desc:
                    "Adjust brightness levels to create different moods and highlight the architectural texture."
                },

                {
                  title: "Tunable White",
                  desc:
                    "Adjust colour temperature from warm to cool white according to the desired atmosphere."
                },

                {
                  title: "Accent Lighting",
                  desc:
                    "Focused lighting can highlight selected textures, curves and architectural ceiling features."
                },

                {
                  title: "Smart Integration",
                  desc:
                    "Compatible lighting solutions can be integrated with intelligent controls and modern automation systems."
                }

              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                    scale: 1.03
                  }}
                  transition={{ duration: 0.35 }}
                  className="glass rounded-3xl p-8"
                >

                  <h3 className="text-2xl text-gold-300 font-semibold mb-4">
                    {item.title}
                  </h3>


                  <p className="text-white/70 leading-relaxed">
                    {item.desc}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.section>



          {/* ================================================= */}
          {/* IDEAL APPLICATIONS */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-36"
          >

            <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
              Ideal Applications
            </p>


            <h2 className="text-5xl font-luxury font-bold mb-14">
              Designed for Distinctive Interiors
            </h2>


            <div className="flex flex-wrap justify-center gap-5">

              {[
                "Luxury Homes",
                "Living Rooms",
                "Luxury Villas",
                "Hotel Lobbies",
                "Hotel Suites",
                "Restaurants",
                "Fine Dining Spaces",
                "Luxury Showrooms",
                "Corporate Offices",
                "Experience Centres",
                "Spa & Wellness Centres",
                "Premium Retail",
                "Private Lounges",
                "Reception Areas",
                "Banquet Spaces",
                "Architectural Feature Areas"
              ].map((item, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.08,
                    y: -5
                  }}
                  className="glass px-6 py-3 rounded-full"
                >
                  {item}
                </motion.div>

              ))}

            </div>

          </motion.section>



          {/* ================================================= */}
          {/* CTA */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-gold rounded-3xl p-14 text-center"
          >

            <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
              Let's Create Something Extraordinary
            </p>


            <h2 className="text-5xl font-luxury font-bold mb-8">
              Give Your Ceiling a New Dimension
            </h2>


            <p className="max-w-4xl mx-auto text-white/70 text-lg leading-relaxed mb-10">

              CLOUDWAVE™ TEXTURE combines expressive surface finishes,
              sculptural architectural forms and intelligent lighting
              possibilities to create extraordinary ceiling experiences.
              Our design specialists can help you develop a completely
              customised ceiling concept tailored to your interior.

            </p>


            <div className="flex flex-col sm:flex-row justify-center gap-5">

              <a
                href="/contact"
                className="btn-luxury"
              >
                Request Free Consultation
              </a>


              <a
                href="/catalogue/CLOUDWAVE_TEXTURE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                Download Catalogue
              </a>

            </div>

          </motion.section>

        </section>

      </div>
    </>
  );
};

export default CloudwaveTexture;