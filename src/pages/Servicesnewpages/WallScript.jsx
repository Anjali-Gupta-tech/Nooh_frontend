import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";


/* =========================================================
   WALLSCRIPT™
   PERSONALIZED ARCHITECTURAL WALL ART
========================================================= */

const personalization = [
  {
    number: "01",
    title: "Names",
    description:
      "Create wall compositions around names, family names or meaningful words.",
  },
  {
    number: "02",
    title: "Initials",
    description:
      "Add customized initials as part of the overall wall composition.",
  },
  {
    number: "03",
    title: "Quotations",
    description:
      "Turn favourite quotations and meaningful words into architectural artwork.",
  },
  {
    number: "04",
    title: "Family Stories",
    description:
      "Bring family memories and meaningful details into the wall design.",
  },
  {
    number: "05",
    title: "Maps",
    description:
      "Customized maps can become part of a personalized visual composition.",
  },
  {
    number: "06",
    title: "Personal Artwork",
    description:
      "Develop a wall around artwork, sketches or creative references.",
  },
  {
    number: "07",
    title: "Business Logos",
    description:
      "Integrate suitable logos and brand graphics for commercial spaces.",
  },
  {
    number: "08",
    title: "Brand Stories",
    description:
      "Create visual walls around timelines, milestones and brand identity.",
  },
];


const applications = [
  {
    title: "Bedrooms",
    description:
      "Personal names, initials, quotations and meaningful compositions.",
  },
  {
    title: "Living Rooms",
    description:
      "Statement typography and personalized family wall artwork.",
  },
  {
    title: "Kids Rooms",
    description:
      "Names, imaginative typography and personalized creative walls.",
  },
  {
    title: "Home Offices",
    description:
      "Quotes, initials and personal visual statements.",
  },
  {
    title: "Hotels",
    description:
      "Customized wall graphics for hospitality interiors.",
  },
  {
    title: "Restaurants",
    description:
      "Typography-led feature walls that support the identity of the space.",
  },
  {
    title: "Retail & Showrooms",
    description:
      "Brand names, statements and graphic compositions.",
  },
  {
    title: "Corporate Spaces",
    description:
      "Logos, brand stories, timelines and institutional graphics.",
  },
];


const process = [
  {
    number: "01",
    title: "Share Your Idea",
    description:
      "Share names, quotations, photographs, logos or any visual reference.",
  },
  {
    number: "02",
    title: "Define the Wall",
    description:
      "Provide the wall dimensions and photographs of the space.",
  },
  {
    number: "03",
    title: "Develop the Composition",
    description:
      "The artwork is arranged according to the wall and interior character.",
  },
  {
    number: "04",
    title: "Choose Colour",
    description:
      "Coordinate typography, graphics and background with the interior palette.",
  },
  {
    number: "05",
    title: "Digital Preview",
    description:
      "Review how the personalized artwork will appear on the wall.",
  },
  {
    number: "06",
    title: "Approval",
    description:
      "The approved composition is finalized for production.",
  },
  {
    number: "07",
    title: "Production",
    description:
      "The final wall artwork is produced according to the approved design.",
  },
  {
    number: "08",
    title: "Installation",
    description:
      "The finished wall covering is professionally installed at the site.",
  },
];


const materials = [
  {
    title: "Non-Woven Wallpaper",
    description:
      "A versatile wall-covering option for smooth and refined applications.",
  },
  {
    title: "Premium Canvas",
    description:
      "A textured artistic surface suited to statement personalized artwork.",
  },
  {
    title: "Textured Wallpaper",
    description:
      "Adds visual depth to customized typographic compositions.",
  },
  {
    title: "Fabric Wall Covering",
    description:
      "A soft premium decorative surface for sophisticated interiors.",
  },
  {
    title: "Washable Vinyl",
    description:
      "A practical surface option where easier maintenance is required.",
  },
  {
    title: "Metallic Finish",
    description:
      "Decorative metallic-inspired finishes for luxury statement walls.",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

function WallScript() {
  return (
    <>
      <Helmet>

        <title>
          WALLSCRIPT™ | Personalized Architectural Wall Art | NOOH
        </title>

        <meta
          name="description"
          content="WALLSCRIPT™ by NOOH — personalized wall art developed around names, initials, quotations, memories, maps, artwork and brand stories."
        />

      </Helmet>


      <div className="min-h-screen bg-luxury-black text-white pt-24">


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative min-h-[78vh] flex items-center overflow-hidden">

          {/* HERO IMAGE */}

          <img
            src="/service/wallscript.png"
            alt="WALLSCRIPT™ personalized wall art"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />


          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-black/40" />


          {/* CINEMATIC GRADIENT */}

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


          {/* CONTENT */}

          <div className="relative z-10 container-custom mx-auto px-6 py-28">

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl"
            >

              <p
                className="
                  uppercase
                  tracking-[5px]
                  text-gold-300
                  font-semibold
                  mb-5
                "
              >
                Architectural Wall Art™ · Personalized Collection
              </p>


              <h1
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
                WALLSCRIPT
                <sup className="text-[30%] align-super ml-1">
                  ™
                </sup>
              </h1>


              <h2
                className="
                  text-2xl
                  md:text-4xl
                  text-gold-200
                  font-luxury
                  font-semibold
                  mb-7
                "
              >
                Your Story. Written on Your Wall.
              </h2>


              <p
                className="
                  max-w-3xl
                  text-white/80
                  text-lg
                  md:text-xl
                  leading-relaxed
                "
              >
                Personalized wall artwork developed around names,
                initials, quotations, memories, maps, artwork and
                meaningful visual details.
              </p>


              {/* TAGS */}

              <div className="flex flex-wrap gap-3 mt-9">

                {[
                  "Personalized Artwork",
                  "Names & Initials",
                  "Custom Quotations",
                  "Brand Graphics",
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

              </div>


              {/* GOLD LINE */}

              <div className="w-28 h-px bg-gold-300 mt-10" />

            </motion.div>

          </div>


          {/* BOTTOM FADE */}

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

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">


              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                  Personalized Wall Art
                </p>


                <h2 className="text-5xl md:text-6xl font-luxury font-bold mb-7">

                  MAKE THE

                  <br />

                  <span className="text-gold-300">
                    DESIGN PERSONAL
                  </span>

                </h2>


                <p className="text-white/70 text-lg leading-loose mb-6">
                  WALLSCRIPT™ transforms meaningful words, names,
                  quotations and visual references into personalized
                  architectural wall compositions.
                </p>


                <p className="text-white/60 leading-loose">
                  Instead of choosing a completely generic wall design,
                  the composition can be developed around the people,
                  memories, identity or story connected with the space.
                </p>


                <div className="grid grid-cols-2 gap-5 mt-9">

                  {[
                    ["01", "Personal"],
                    ["02", "Meaningful"],
                    ["03", "Custom"],
                    ["04", "Architectural"],
                  ].map(([number, title]) => (

                    <div
                      key={number}
                      className="glass rounded-2xl p-5"
                    >

                      <p className="text-gold-300 text-sm mb-2">
                        {number}
                      </p>

                      <h3 className="text-lg font-semibold">
                        {title}
                      </h3>

                    </div>

                  ))}

                </div>

              </motion.div>



              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >

                <img
                  src="/images/wallscript-intro.png"
                  alt="WALLSCRIPT™ personalized interior"
                  className="
                    w-full
                    h-[600px]
                    object-cover
                    rounded-3xl
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />

              </motion.div>

            </div>

          </div>

        </section>



        {/* =====================================================
            PERSONALIZATION OPTIONS
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">


            <div className="text-center max-w-4xl mx-auto mb-16">

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                Personalization
              </p>


              <h2 className="text-5xl md:text-7xl font-luxury font-bold mb-6">

                YOUR STORY.

                <br />

                <span className="text-gold-300">
                  YOUR WALL.
                </span>

              </h2>


              <p className="text-white/65 text-lg leading-relaxed">
                Personal memories, meaningful words and brand stories
                can become part of the final wall composition.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {personalization.map((item, index) => (

                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className="
                    glass
                    rounded-2xl
                    p-6
                    border
                    border-white/10
                    hover:border-gold-300/40
                    transition-all
                    duration-300
                  "
                >

                  <span className="text-gold-300 text-sm font-semibold">
                    {item.number}
                  </span>


                  <h3 className="text-xl font-semibold mt-6 mb-3">
                    {item.title}
                  </h3>


                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>



        {/* =====================================================
            PERSONALIZATION EXAMPLES
        ===================================================== */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-20 items-center">


              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >

                <img
                  src="/images/wallscript-detail.png"
                  alt="WALLSCRIPT™ typography wall"
                  className="
                    w-full
                    h-[620px]
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />

              </motion.div>



              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  What Can Become Part of the Wall
                </p>


                <h2 className="text-5xl md:text-6xl font-luxury font-bold mb-7">

                  TURN MEANING

                  <br />

                  INTO

                  <br />

                  <span className="text-gold-300">
                    ART
                  </span>

                </h2>


                <p className="text-white/70 text-lg leading-loose mb-8">
                  WALLSCRIPT™ can be developed around a wide range of
                  personal, artistic and commercial references.
                </p>


                <div className="grid grid-cols-2 gap-4">

                  {[
                    "Family Photographs",
                    "Wedding Memories",
                    "Children's Names",
                    "Customized Initials",
                    "Favourite Quotations",
                    "Personal Artwork",
                    "Travel Photographs",
                    "Family Trees",
                    "Customized Maps",
                    "Business Logos",
                    "Brand Timelines",
                    "Institutional Graphics",
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="
                        glass
                        rounded-xl
                        p-4
                        border
                        border-white/10
                      "
                    >

                      <span className="text-gold-300 text-xs">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-white/70 text-sm mt-2">
                        {item}
                      </p>

                    </div>

                  ))}

                </div>

              </motion.div>

            </div>

          </div>

        </section>



        {/* =====================================================
            CUSTOMIZATION PROCESS
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-20 items-center">


              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  From Idea to Wall
                </p>


                <h2 className="text-5xl md:text-6xl font-luxury font-bold mb-7">

                  DESIGNED

                  <br />

                  AROUND

                  <br />

                  <span className="text-gold-300">
                    YOUR STORY
                  </span>

                </h2>


                <p className="text-white/65 text-lg leading-loose mb-9">
                  The artwork moves from the initial idea through
                  composition, colour development, digital preview,
                  approval and final production.
                </p>


                <div className="grid sm:grid-cols-2 gap-4">

                  {[
                    "Exact Wall Size",
                    "Custom Composition",
                    "Colour Coordination",
                    "Element Placement",
                    "Digital Preview",
                    "Design Approval",
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="glass rounded-2xl p-5"
                    >

                      <p className="text-gold-300 text-xs mb-2">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="font-semibold">
                        {item}
                      </h3>

                    </div>

                  ))}

                </div>

              </motion.div>



              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >

                <img
                  src="/images/wallscript-process.png"
                  alt="WALLSCRIPT™ design process"
                  className="
                    w-full
                    h-[620px]
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />

              </motion.div>

            </div>


            {/* PROCESS CARDS */}

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-20">

              {process.map((step, index) => (

                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className="glass rounded-2xl p-6"
                >

                  <p className="text-gold-300 font-semibold text-sm">
                    {step.number}
                  </p>


                  <h3 className="text-lg font-semibold mt-5 mb-3">
                    {step.title}
                  </h3>


                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.description}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>



        {/* =====================================================
            MATERIALS
        ===================================================== */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">


            <div className="text-center max-w-3xl mx-auto mb-14">

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                Materials & Finish
              </p>


              <h2 className="text-5xl md:text-6xl font-luxury font-bold">

                SELECT YOUR

                <br />

                <span className="text-gold-300">
                  FINISH
                </span>

              </h2>

            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              {materials.map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  className="glass rounded-2xl p-6"
                >

                  <p className="text-gold-300 text-sm mb-4">
                    {String(index + 1).padStart(2, "0")}
                  </p>


                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>


                  <p className="text-white/50 leading-relaxed text-sm">
                    {item.description}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>



        {/* =====================================================
            APPLICATIONS
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">


            <div className="grid lg:grid-cols-2 gap-20 items-center">


              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl"
              >

                <img
                  src="/images/wallscript-application.png"
                  alt="WALLSCRIPT™ applications"
                  className="
                    w-full
                    h-[620px]
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />

              </motion.div>



              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  Applications
                </p>


                <h2 className="text-5xl md:text-6xl font-luxury font-bold mb-7">

                  MADE FOR

                  <br />

                  <span className="text-gold-300">
                    MEANINGFUL SPACES
                  </span>

                </h2>


                <p className="text-white/65 text-lg leading-loose mb-8">
                  WALLSCRIPT™ can be adapted for residential,
                  hospitality, retail and professional environments.
                </p>


                <div className="grid sm:grid-cols-2 gap-4">

                  {applications.map((item, index) => (

                    <div
                      key={item.title}
                      className="glass rounded-2xl p-5"
                    >

                      <p className="text-gold-300 text-xs mb-2">
                        {String(index + 1).padStart(2, "0")}
                      </p>


                      <h3 className="text-gold-200 font-semibold mb-2">
                        {item.title}
                      </h3>


                      <p className="text-white/45 text-sm leading-relaxed">
                        {item.description}
                      </p>

                    </div>

                  ))}

                </div>

              </motion.div>

            </div>

          </div>

        </section>



        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                glass-gold
                rounded-3xl
                p-12
                md:p-20
                text-center
              "
            >

              <div className="relative z-10">

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-5">
                  WALLSCRIPT™
                </p>


                <h2 className="text-4xl md:text-6xl font-luxury font-bold">

                  YOUR STORY.

                  <br />

                  <span className="text-gold-300">
                    WRITTEN ON YOUR WALL.
                  </span>

                </h2>


                <p className="max-w-2xl mx-auto text-white/65 text-lg leading-loose mt-7">
                  Turn meaningful words, memories, names and visual
                  identity into a wall created specifically for your space.
                </p>


                <div className="w-20 h-px bg-gold-300 mx-auto mt-9" />

              </div>

            </motion.div>

          </div>

        </section>



        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto text-center">

            <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
              Start Your WallScript™
            </p>


            <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">

              MAKE YOUR WALL

              <br />

              <span className="text-gold-300">
                MEAN SOMETHING
              </span>

            </h2>


            <p className="max-w-2xl mx-auto text-white/60 text-lg leading-relaxed mb-10">
              Share your idea, wall dimensions or personal reference
              and develop a customized wall composition with NOOH.
            </p>


            <div className="flex flex-col sm:flex-row gap-5 justify-center">

              <a
                href="/contact"
                className="btn-luxury"
              >
                Start Your Design
              </a>


              <a
                href="/products/architectural-wall-art"
                className="btn-outline-gold"
              >
                Explore Architectural Wall Art™
              </a>

            </div>

          </div>

        </section>


      </div>
    </>
  );
}


export default WallScript;