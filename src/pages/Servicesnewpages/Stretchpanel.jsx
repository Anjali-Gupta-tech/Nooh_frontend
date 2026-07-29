import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const StretchBacklitPanel = () => {
  return (
    <>
      <Helmet>
        <title>STRETCHÉ™ BACKLIT PANEL | NOOH Living Elevated</title>

        <meta
          name="description"
          content="Premium Modular Printed & Illuminated Backlit Panels for Grid Ceiling Systems by NOOH Living Elevated."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black text-white pt-24">

        {/* ================= HERO ================= */}

        <section className="py-20 border-b border-white/10">

          <div className="container-custom mx-auto text-center">

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4"
            >
              STRETCHÉ™ Collection
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-luxury font-bold mb-6"
            >
              STRETCHÉ
              <sup className="relative -top-5 ml-1 text-l md:text-3xl">
                ™
              </sup>{" "}
              BACKLIT PANEL
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-2xl md:text-3xl text-gold-300 font-semibold mb-8"
            >
              Modular Printed & Illuminated Panels for Grid Ceiling Systems
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="max-w-5xl mx-auto text-white/70 text-xl leading-relaxed"
            >
              STRETCHÉ™ backlit panel is a premium modular illuminated ceiling
              panel system designed especially for Grid, T-Grid and modular
              false ceiling applications. Combining high-quality printed
              graphics with uniform LED backlighting, it transforms ordinary
              ceiling tiles into bright decorative architectural features for
              commercial, hospitality, healthcare and luxury residential
              interiors.
            </motion.p>

          </div>

        </section>
        {/* ================= GRID CEILING APPLICATION ================= */}

<section className="section-padding bg-luxury-gray">

  <div className="container-custom mx-auto">

    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid lg:grid-cols-[1fr_1fr] gap-20 items-center mb-32"
    >

      {/* IMAGE */}

      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
        className="group relative"
      >

        <div className="absolute -inset-5 bg-gold-300/10 blur-[80px] opacity-0 group-hover:opacity-100 duration-700 rounded-full" />

       
   <div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/images/STRETCHE_BACKLIT_PANEL (1).png"
    alt="translucent-image"
    className="w-full h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105"
  />
</div>

      </motion.div>

      {/* CONTENT */}

      <motion.div>

        <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
          Designed for Grid Ceiling Systems
        </p>

        <h2 className="text-5xl font-luxury font-bold mb-5">
          Premium Modular Illuminated Ceiling Panels
        </h2>

        <div className="w-24 h-[2px] bg-gold-300 rounded-full mb-8" />

        <p className="text-white/70 text-lg leading-loose mb-6">

          <strong>STRETCHÉ™ BACKLIT PANEL</strong> is specially engineered
          for Grid, T-Grid and modular false ceiling systems. Instead of
          replacing the complete ceiling, selected ceiling tiles can be
          upgraded with beautifully illuminated printed LED panels,
          instantly transforming the appearance of any interior.

        </p>

        <p className="text-white/70 text-lg leading-loose mb-6">

          Whether used in new construction projects or renovation of
          existing modular ceilings, the system delivers uniform
          illumination, premium aesthetics and fast installation with
          minimal disruption.

        </p>

        <p className="text-white/70 text-lg leading-loose">

          Perfect for creating blue sky ceilings, nature themes,
          decorative artwork, corporate branding and customised
          architectural graphics across offices, hospitals, hotels,
          showrooms and commercial buildings.

        </p>

      </motion.div>

    </motion.section>
    {/* ================= AVAILABLE STANDARD SIZES ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-32"
>

  <div className="text-center mb-16">

    <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
      Standard Configurations
    </p>

    <h2 className="text-5xl font-luxury font-bold mb-6">
      Available Standard Sizes
    </h2>

    <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
      STRETCHÉ™ backlit panel  is available in multiple modular sizes to
      suit almost every Grid and T-Grid ceiling system.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* CARD 1 */}

    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      className="glass rounded-3xl p-10 text-center"
    >

      <h3 className="text-6xl font-bold text-gold-300 mb-4">
        2'
      </h3>

      <p className="text-xl font-semibold mb-3">
        600 × 600 mm
      </p>

      <p className="text-white/70 leading-relaxed">

        The most versatile panel size for standard modular ceilings.
        Ideal for offices, hospitals, schools, retail stores,
        commercial buildings and large ceiling installations.

      </p>

    </motion.div>

    {/* CARD 2 */}

    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      className="glass rounded-3xl p-10 text-center"
    >

      <h3 className="text-6xl font-bold text-gold-300 mb-4">
        1'
      </h3>

      <p className="text-xl font-semibold mb-3">
        300 × 300 mm
      </p>

      <p className="text-white/70 leading-relaxed">

        Compact illuminated panels suitable for decorative ceiling
        layouts, customised ceiling patterns and smaller grid modules.

      </p>

    </motion.div>

    {/* CARD 3 */}

    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      className="glass rounded-3xl p-10 text-center"
    >

      <h3 className="text-6xl font-bold text-gold-300 mb-4">
        4'
      </h3>

      <p className="text-xl font-semibold mb-3">
        1200 × 300 mm
      </p>

      <p className="text-white/70 leading-relaxed">

        Perfect for corridors, reception areas, retail stores and
        continuous linear illuminated ceiling concepts.

      </p>

    </motion.div>

  </div>

</motion.section>



{/* ================= ONE PANEL OR COMPLETE CEILING ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="grid lg:grid-cols-[1fr_1fr] gap-20 items-center mb-32"
>

  {/* CONTENT */}

  <div>

    <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
      Unlimited Design Freedom
    </p>

    <h2 className="text-5xl font-luxury font-bold mb-6">
      One Panel or a Complete Ceiling
    </h2>

    <div className="w-24 h-[2px] bg-gold-300 rounded-full mb-8" />

    <p className="text-white/70 text-lg leading-loose mb-6">

      The system offers complete flexibility. Install a single panel
      as an illuminated feature, multiple panels at selected locations,
      or combine several panels together to create one continuous
      architectural ceiling design.

    </p>

    <p className="text-white/70 text-lg leading-loose mb-6">

      Multiple 600 × 600 mm panels can display different sections of
      one large artwork, producing the visual impression of a massive
      virtual ceiling.

    </p>

    <p className="text-white/70 text-lg leading-loose">

      Sky ceilings, nature scenes, decorative graphics and customised
      artwork can all be created using the same modular system.

    </p>

  </div>

  {/* IMAGE */}

 <div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/images/panel2.png"
    alt="translucent-image"
    className="w-full h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105"
  />
</div>
</motion.section>
{/* ================= CUSTOM PRINTING ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-32"
>

  <div className="text-center mb-16">

    <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
      Unlimited Creativity
    </p>

    <h2 className="text-5xl font-luxury font-bold mb-6">
      Custom Printing Possibilities
    </h2>

    <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
      Every STRETCHÉ™ BACKLIT PANEL can be customised with premium
      high-resolution artwork to create stunning illuminated ceiling
      experiences for every architectural project.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      "Blue Sky & Clouds",
      "Nature Themes",
      "Trees & Flowers",
      "Abstract Art",
      "Geometric Designs",
      "Corporate Branding",
      "Architectural Graphics",
      "Kids' Themes"
    ].map((item,index)=>(

      <motion.div

        key={index}

        whileHover={{
          y:-8,
          scale:1.04
        }}

        className="glass rounded-3xl p-8 text-center"

      >

        <div className="text-4xl mb-4">
          ✨
        </div>

        <h3 className="text-xl font-semibold text-gold-300">

          {item}

        </h3>

      </motion.div>

    ))}

  </div>

</motion.section>



{/* ================= KEY ADVANTAGES ================= */}

<motion.section

initial={{ opacity:0,y:40 }}

whileInView={{ opacity:1,y:0 }}

viewport={{ once:true }}

className="grid lg:grid-cols-[1fr_1fr] gap-20 items-center mb-32"

>

{/* IMAGE */}

<div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/images/panel3.jpeg"
    alt="translucent-image"
    className="w-full h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105"
  />
</div>
{/* CONTENT */}

<div>

<p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">

Key Advantages

</p>

<h2 className="text-5xl font-luxury font-bold mb-6">

Why Choose STRETCHÉ™ BACKLIT PANEL

</h2>

<div className="w-24 h-[2px] bg-gold-300 rounded-full mb-10" />

<div className="grid sm:grid-cols-2 gap-5">

{[
"Modular Sizes",
"Grid Ceiling Compatible",
"Premium Custom Printing",
"Uniform LED Backlighting",
"Easy Tile Replacement",
"Lightweight Construction",
"Energy Efficient",
"Low Maintenance",
"Custom Design Options",
"Architectural Flexibility"
].map((item,index)=>(

<div

key={index}

className="glass rounded-2xl p-5 flex items-center gap-4"

>

<div className="text-gold-300 text-2xl">

✔

</div>

<p className="text-white/80">

{item}

</p>

</div>

))}

</div>

</div>

</motion.section>
{/* ================= IDEAL APPLICATIONS ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-32"
>

  <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
    Ideal Applications
  </p>

  <h2 className="text-5xl font-luxury font-bold mb-8">
    Designed for Every Commercial Space
  </h2>

  <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed mb-12">

    STRETCHÉ™ BACKLIT PANEL is suitable for both new ceiling projects
    and renovation of existing Grid Ceiling systems, creating
    impressive illuminated architectural interiors.

  </p>

  <div className="flex flex-wrap justify-center gap-5">

    {[
      "Hospitals",
      "Clinics",
      "Corporate Offices",
      "Schools",
      "Hotels",
      "Restaurants",
      "Retail Stores",
      "Shopping Malls",
      "Showrooms",
      "Reception Areas",
      "Corridors",
      "Airports",
      "Commercial Buildings",
      "Residential Interiors"
    ].map((item,index)=>(

      <motion.div

        key={index}

        whileHover={{
          scale:1.08,
          y:-6
        }}

        className="glass px-6 py-3 rounded-full"

      >

        {item}

      </motion.div>

    ))}

  </div>

</motion.section>



{/* ================= CTA ================= */}

<motion.div

initial={{ opacity:0,y:40 }}

whileInView={{ opacity:1,y:0 }}

viewport={{ once:true }}

className="glass-gold rounded-3xl p-12 text-center"

>

<h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">

Turn an Ordinary Grid Ceiling
Into an Illuminated Design Experience

</h2>

<p className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">

Whether you require a single illuminated decorative panel or a
complete modular ceiling solution, STRETCHÉ™ BACKLIT PANEL
combines premium printing, advanced LED illumination and modular
design flexibility to create remarkable architectural interiors.

</p>

<div className="flex flex-col sm:flex-row gap-5 justify-center">

<a

href="/contact"

className="btn-luxury"

>

Request Free Consultation

</a>

<a

href="/catalogue/STRETCHE_TM_BACKLIT_PANEL.pdf"

target="_blank"

rel="noopener noreferrer"

className="btn-outline-gold"

>

View Catalogue

</a>

</div>

</motion.div>

</div>

</section>

</div>

</>

);

};

export default StretchBacklitPanel;