import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const CloudwaveGloss = () => {
  return (
    <>
      <Helmet>
        <title>
          CLOUDWAVE™ GLOSS | NOOH Living Elevated
        </title>

        <meta
          name="description"
          content="Experience sculptural elegance with CLOUDWAVE™ GLOSS. A premium glossy textile ceiling solution featuring flowing architectural forms, seamless curves and integrated lighting for luxury interiors."
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
              src="/service/cloudwave-gloss.png"
              alt="CLOUDWAVE GLOSS Textile Ceiling"
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
                GLOSS
              </motion.h1>


              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-5xl mx-auto text-white/70 text-xl leading-relaxed"
              >
                CLOUDWAVE™ GLOSS is a premium sculptural textile ceiling
                solution designed to transform interiors with elegant flowing
                forms, seamless architectural curves and a luxurious glossy
                visual finish.
              </motion.p>


            </div>

          </div>

        </section>



        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <section className="section-padding bg-luxury-gray">


          {/* ================================================= */}
          {/* DESIGN INTRODUCTION */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-36"
          >

            {[
              {
                title: "CLOUDWAVE™ GLOSS TEXTILE CEILING",

                image: "/service/cloudwave-gloss-detail.png",

                desc:
                  "CLOUDWAVE™ GLOSS transforms ordinary ceilings into extraordinary architectural statements. Designed with flowing sculptural forms and a refined glossy finish, the system creates a sense of movement, depth and visual sophistication within luxury interiors. The seamless textile surface allows designers to move beyond traditional flat ceilings and explore elegant waves, curves and immersive ceiling compositions."
              },

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
                      "Gloss Textile Finish",
                      "Sculptural Curves",
                      "Custom Design",
                      "Premium Quality",
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
          {/* DESIGN POSSIBILITIES */}
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

              Designed Beyond Flat Ceilings

            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">


              {[
                {
                  title: "Flowing Ceiling Waves",

                  desc:
                    "Create elegant flowing forms that introduce movement and artistic character into the architectural space."
                },

                {
                  title: "Seamless Sculptural Forms",

                  desc:
                    "The flexible textile system allows smooth transitions between curves and surfaces for a refined architectural finish."
                },

                {
                  title: "Gloss Visual Finish",

                  desc:
                    "The luxurious glossy surface reflects ambient light and enhances the depth and visual richness of the ceiling design."
                },

                {
                  title: "Custom Ceiling Geometry",

                  desc:
                    "Every CLOUDWAVE™ installation can be designed according to the dimensions, layout and architectural character of the interior."
                },

                {
                  title: "Integrated Architectural Lighting",

                  desc:
                    "LED lighting can be carefully integrated within and around the ceiling forms to highlight curves and create dramatic illumination."
                },

                {
                  title: "Luxury Design Freedom",

                  desc:
                    "From subtle flowing patterns to bold sculptural installations, CLOUDWAVE™ GLOSS allows exceptional creative freedom."
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

              Why Choose CLOUDWAVE™ GLOSS

            </p>


            <h2 className="text-5xl font-luxury text-center font-bold mb-14">

              Where Design Becomes Architecture

            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">


              {[
                {
                  title: "Premium Textile Technology",

                  desc:
                    "Advanced architectural textile materials deliver a refined and seamless ceiling finish designed for premium interiors."
                },

                {
                  title: "Lightweight Construction",

                  desc:
                    "The system provides dramatic visual impact without the excessive structural weight associated with many traditional ceiling constructions."
                },

                {
                  title: "Customised Installation",

                  desc:
                    "Each installation is planned according to the specific dimensions, design concept and architectural requirements of the project."
                },

                {
                  title: "Clean Architectural Finish",

                  desc:
                    "Precision installation creates clean transitions and carefully finished details throughout the ceiling composition."
                },

                {
                  title: "Integrated Lighting Options",

                  desc:
                    "Compatible lighting solutions can enhance the ceiling geometry, creating soft ambient illumination and dramatic highlights."
                },

                {
                  title: "Low Maintenance",

                  desc:
                    "Designed for practical long-term performance, the ceiling system requires minimal routine maintenance."
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
          {/* LIGHTING POSSIBILITIES */}
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

              Light That Follows the Form

            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">


              {[
                {
                  title: "Warm White Lighting",

                  desc:
                    "Creates a soft and luxurious atmosphere while enhancing the sculptural depth of the ceiling."
                },

                {
                  title: "Cove Lighting",

                  desc:
                    "Hidden linear lighting highlights the flowing perimeter and creates a beautiful floating ceiling effect."
                },

                {
                  title: "Dimmable Lighting",

                  desc:
                    "Control brightness levels to create different atmospheres throughout the day and evening."
                },

                {
                  title: "Tunable White",

                  desc:
                    "Adjust the colour temperature from warm to cool white depending on the desired ambience and application."
                },

                {
                  title: "Accent Lighting",

                  desc:
                    "Focused lighting can emphasise specific curves, architectural layers and sculptural ceiling elements."
                },

                {
                  title: "Smart Integration",

                  desc:
                    "Selected lighting systems can be integrated with intelligent controls and modern home automation environments."
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

              Transform Your Ceiling Into Art

            </h2>


            <p className="max-w-4xl mx-auto text-white/70 text-lg leading-relaxed mb-10">

              CLOUDWAVE™ GLOSS brings together advanced textile technology,
              sculptural architectural design and refined lighting to create
              extraordinary ceiling experiences. From elegant flowing curves
              to dramatic custom installations, our design specialists can
              help you develop a ceiling concept perfectly tailored to your
              interior.

            </p>


            <div className="flex flex-col sm:flex-row justify-center gap-5">


              <a
                href="/contact"
                className="btn-luxury"
              >

                Request Free Consultation

              </a>


              <a
                href="/catalogue/CLOUDWAVE_GLOSS.pdf"
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

export default CloudwaveGloss;