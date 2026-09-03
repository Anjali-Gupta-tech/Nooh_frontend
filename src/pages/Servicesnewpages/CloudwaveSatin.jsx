import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const CloudwaveSatin = () => {
  return (
    <>
      <Helmet>
        <title>CLOUDWAVE™ SATIN | NOOH Living Elevated</title>

        <meta
          name="description"
          content="Experience refined architectural elegance with CLOUDWAVE™ SATIN. A premium textile ceiling solution featuring flowing forms, soft satin surfaces and integrated lighting for luxury interiors."
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
              src="/service/cloudwave-satin.png"
              alt="CLOUDWAVE SATIN Textile Ceiling"
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
                SATIN
              </motion.h1>


              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-5xl mx-auto text-white/70 text-xl leading-relaxed"
              >
                CLOUDWAVE™ SATIN is a premium sculptural textile ceiling
                solution combining elegant flowing architectural forms with
                a soft satin finish that creates subtle reflections, visual
                depth and a calm luxurious atmosphere.
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
                title: "CLOUDWAVE™ SATIN TEXTILE CEILING",

                image: "/service/cloudwave-satin-detail.png",

                desc:
                  "CLOUDWAVE™ SATIN combines fluid architectural geometry with a beautifully refined satin surface. Designed for interiors that demand elegance without excessive reflection, the soft finish gently interacts with light and enhances the depth of every sculptural curve. The result is a sophisticated ceiling composition that feels calm, contemporary and luxurious."
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
                      "Soft Satin Finish",
                      "Silky Appearance",
                      "Sculptural Curves",
                      "Custom Design",
                      "Integrated Lighting",
                      "Luxury Architecture"
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
              Soft Forms. Refined Surfaces.
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

              {[
                {
                  title: "Flowing Ceiling Waves",
                  desc:
                    "Create elegant flowing forms that introduce movement, softness and artistic character into the architectural space."
                },

                {
                  title: "Soft Satin Finish",
                  desc:
                    "A refined satin surface creates a smooth and luxurious appearance with gentle visual depth."
                },

                {
                  title: "Subtle Light Reflection",
                  desc:
                    "The satin finish softly interacts with light, creating a sophisticated glow without strong mirror-like reflections."
                },

                {
                  title: "Custom Ceiling Geometry",
                  desc:
                    "Every CLOUDWAVE™ installation can be developed according to the dimensions and architectural concept of the interior."
                },

                {
                  title: "Integrated Lighting",
                  desc:
                    "Linear, concealed and accent lighting can enhance the sculptural geometry and visual depth of the ceiling."
                },

                {
                  title: "Bespoke Design Freedom",
                  desc:
                    "From gentle flowing compositions to bold sculptural statements, every ceiling can be uniquely designed."
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
              Why Choose CLOUDWAVE™ SATIN
            </p>


            <h2 className="text-5xl font-luxury text-center font-bold mb-14">
              Designed for Refined Luxury
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

              {[
                {
                  title: "Soft Silky Appearance",
                  desc:
                    "The satin finish creates a smooth, refined and elegant surface ideal for premium architectural environments."
                },

                {
                  title: "Gentle Light Interaction",
                  desc:
                    "Soft reflections create visual interest while maintaining a calm and sophisticated interior atmosphere."
                },

                {
                  title: "Balanced Luxury",
                  desc:
                    "The perfect choice for interiors requiring a refined appearance without the intense reflection of high-gloss finishes."
                },

                {
                  title: "Lightweight Architecture",
                  desc:
                    "Create dramatic sculptural ceiling forms with a lightweight architectural textile system."
                },

                {
                  title: "Custom Made",
                  desc:
                    "Each CLOUDWAVE™ installation is planned and designed according to the individual project requirements."
                },

                {
                  title: "Minimal Maintenance",
                  desc:
                    "The premium ceiling system is designed for long-term performance with minimal routine maintenance."
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
              Light That Enhances Every Curve
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

              {[
                {
                  title: "Warm White Lighting",
                  desc:
                    "Creates a comfortable and luxurious atmosphere while gently highlighting the sculptural ceiling forms."
                },

                {
                  title: "Concealed Cove Lighting",
                  desc:
                    "Hidden perimeter lighting enhances the flowing geometry and creates an elegant floating ceiling effect."
                },

                {
                  title: "Dimmable Lighting",
                  desc:
                    "Adjust brightness levels to create the ideal lighting atmosphere for different moments and activities."
                },

                {
                  title: "Tunable White",
                  desc:
                    "Adjust colour temperature from warm to cool white to suit the ambience and requirements of the space."
                },

                {
                  title: "Accent Lighting",
                  desc:
                    "Focused illumination can highlight selected curves, layers and sculptural ceiling features."
                },

                {
                  title: "Smart Integration",
                  desc:
                    "Compatible lighting systems can be integrated with intelligent controls and modern automation environments."
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
              Designed for Exceptional Interiors
            </h2>


            <div className="flex flex-wrap justify-center gap-5">

              {[
                "Luxury Homes",
                "Living Rooms",
                "Master Bedrooms",
                "Luxury Villas",
                "Hotel Suites",
                "Hotel Lobbies",
                "Fine Dining",
                "Private Lounges",
                "Spa & Wellness Centres",
                "Premium Retail",
                "Corporate Interiors",
                "Experience Centres"
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
              Bring Soft Architectural Luxury to Your Space
            </h2>


            <p className="max-w-4xl mx-auto text-white/70 text-lg leading-relaxed mb-10">

              CLOUDWAVE™ SATIN brings together flowing architectural forms,
              refined textile surfaces and intelligent lighting possibilities
              to create elegant ceiling experiences. Our design specialists
              can help you develop a completely customised ceiling concept
              that perfectly complements your interior.

            </p>


            <div className="flex flex-col sm:flex-row justify-center gap-5">

              <a
                href="/contact"
                className="btn-luxury"
              >
                Request Free Consultation
              </a>


              <a
                href="/catalogue/CLOUDWAVE_SATIN.pdf"
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

export default CloudwaveSatin;