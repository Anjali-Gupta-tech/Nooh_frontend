import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const CloudwavePrint = () => {
  return (
    <>
      <Helmet>
        <title>CLOUDWAVE™ PRINT | NOOH Living Elevated</title>

        <meta
          name="description"
          content="Discover CLOUDWAVE™ PRINT, a premium sculptural textile ceiling solution combining flowing architectural forms with customised high-resolution artwork, patterns and creative visual compositions."
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
              src="/service/cloudwave-print.png"
              alt="CLOUDWAVE PRINT Ceiling"
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
                PRINT
              </motion.h1>


              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-5xl mx-auto text-white/70 text-xl leading-relaxed"
              >
                CLOUDWAVE™ PRINT transforms flowing textile ceiling forms
                into immersive architectural artworks using high-resolution
                customised artwork, patterns, graphics and creative visual
                compositions designed for exceptional interiors.
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
                title: "CLOUDWAVE™ PRINT TEXTILE CEILING",

                image: "/service/cloudwave-print-detail.png",

                desc:
                  "CLOUDWAVE™ PRINT combines advanced customised printing with elegant flowing ceiling geometry. High-resolution artwork, decorative patterns, abstract compositions and bespoke visual concepts can be integrated directly into the sculptural textile surface, transforming the entire overhead space into an immersive architectural experience."
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
                      "Custom Printed Design",
                      "High-Resolution Artwork",
                      "Bespoke Graphics",
                      "Sculptural Ceiling",
                      "Creative Architecture",
                      "Premium Finish"
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
          {/* CREATIVE POSSIBILITIES */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >

            <p className="uppercase tracking-[5px] text-gold-300 text-center font-semibold mb-4">
              Creative Possibilities
            </p>


            <h2 className="text-5xl font-luxury text-center font-bold mb-14">
              Your Imagination Above You
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

              {[
                {
                  title: "Custom Artwork",
                  desc:
                    "Transform your ceiling with completely customised artwork developed specifically for your architectural space."
                },

                {
                  title: "Architectural Patterns",
                  desc:
                    "Integrate geometric, abstract and decorative patterns into flowing sculptural ceiling forms."
                },

                {
                  title: "Nature-Inspired Design",
                  desc:
                    "Create immersive visual compositions inspired by clouds, water, landscapes, skies and organic forms."
                },

                {
                  title: "Abstract Concepts",
                  desc:
                    "Develop bold contemporary ceiling designs using colours, patterns and expressive artistic compositions."
                },

                {
                  title: "Bespoke Colour Palettes",
                  desc:
                    "Artwork and graphics can be developed to harmonise perfectly with the overall interior colour palette."
                },

                {
                  title: "Immersive Environments",
                  desc:
                    "Combine custom printing with flowing geometry to create memorable and visually engaging interior experiences."
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
              Why Choose CLOUDWAVE™ PRINT
            </p>


            <h2 className="text-5xl font-luxury text-center font-bold mb-14">
              Where Architecture Meets Art
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

              {[
                {
                  title: "Unlimited Creativity",
                  desc:
                    "Transform creative ideas into customised ceiling compositions designed around your vision."
                },

                {
                  title: "High-Resolution Printing",
                  desc:
                    "Detailed artwork, patterns and graphics create rich and visually engaging ceiling surfaces."
                },

                {
                  title: "Completely Bespoke",
                  desc:
                    "Every CLOUDWAVE™ PRINT installation can be developed specifically for the individual project."
                },

                {
                  title: "Sculptural + Printed",
                  desc:
                    "The combination of flowing forms and custom artwork creates a powerful three-dimensional visual experience."
                },

                {
                  title: "Premium Architectural Feature",
                  desc:
                    "The ceiling becomes a central design element that contributes to the identity and atmosphere of the interior."
                },

                {
                  title: "Custom Colour Expression",
                  desc:
                    "Colours and visual compositions can be carefully developed to complement the overall design concept."
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
          {/* DESIGN & LIGHTING INTEGRATION */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >

            <p className="uppercase tracking-[5px] text-gold-300 text-center font-semibold mb-4">
              Design Integration
            </p>


            <h2 className="text-5xl font-luxury text-center font-bold mb-14">
              Designed Around Your Vision
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

              {[
                {
                  title: "Custom Design Development",
                  desc:
                    "Our design team can help develop artwork and ceiling compositions that complement your project."
                },

                {
                  title: "Interior Colour Coordination",
                  desc:
                    "Printed designs can be developed around the colour palette, furniture and architectural elements of the interior."
                },

                {
                  title: "Integrated Architectural Lighting",
                  desc:
                    "Lighting can be strategically integrated to enhance ceiling geometry and create additional visual depth."
                },

                {
                  title: "Feature Area Design",
                  desc:
                    "Ideal for creating a dramatic focal point within large spaces, entrances, lounges and premium interiors."
                },

                {
                  title: "Brand & Commercial Concepts",
                  desc:
                    "Custom graphics can help create memorable branded environments for hospitality, retail and commercial spaces."
                },

                {
                  title: "Bespoke Project Execution",
                  desc:
                    "Every project can be planned individually, from the initial design concept to final installation."
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
              Designed for Creative Interiors
            </h2>


            <div className="flex flex-wrap justify-center gap-5">

              {[
                "Luxury Homes",
                "Living Rooms",
                "Master Bedrooms",
                "Luxury Villas",
                "Hotel Lobbies",
                "Hotel Suites",
                "Restaurants",
                "Fine Dining Spaces",
                "Luxury Retail",
                "Experience Centres",
                "Corporate Interiors",
                "Showrooms",
                "Entertainment Spaces",
                "Private Lounges",
                "Reception Areas",
                "Banquet Spaces",
                "Premium Commercial Interiors"
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
              Turn Your Ceiling Into a Work of Art
            </h2>


            <p className="max-w-4xl mx-auto text-white/70 text-lg leading-relaxed mb-10">
              CLOUDWAVE™ PRINT combines flowing architectural forms with
              customised artwork and creative visual compositions to create
              extraordinary ceiling experiences. Our design specialists can
              help transform your concept into a completely bespoke ceiling
              designed specifically for your interior.
            </p>


            <div className="flex flex-col sm:flex-row justify-center gap-5">

              <a
                href="/contact"
                className="btn-luxury"
              >
                Request Free Consultation
              </a>


              <a
                href="/catalogue/CLOUDWAVE_PRINT.pdf"
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

export default CloudwavePrint;