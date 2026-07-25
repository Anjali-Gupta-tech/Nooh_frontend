import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Stretchprint = () => {
  return (
    <>
      <Helmet>
        <title>STRETCHÉ™ GLOSS | NOOH Living Elevated</title>
        <meta
          name="description"
          content="Premium high-gloss stretch ceiling with Mirror-Like finish and advanced lighting technology."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black text-white pt-24">

        {/* HERO */}

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
      STRETCHÉ™ GLOSS
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="max-w-4xl mx-auto text-white/70 text-xl leading-relaxed"
    >
      STRETCHÉ™ GLOSS transforms ceilings into stunning architectural
      features using high-resolution customised artwork combined with
      advanced backlighting technology. 
    </motion.p>

  </div>

</section>


        {/* LIGHTING */}

        <section className="section-padding  mx-auto py-24 bg-luxury-gray">

          <div className="text-center mb-20">

            <p className="text-gold-300 uppercase tracking-[5px] font-semibold mb-4">
              Advanced Lighting System
            </p>

            <h2 className="text-5xl md:text-6xl font-luxury font-bold mb-6">
              Lighting Technology
            </h2>

            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed text-lg">
              Four intelligent lighting systems designed for different
              architectural applications.
            </p>

          </div>



          {/* TYPE 1 */}
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
    transition={{ duration: .5 }}
    className="group relative"
  >

    <div className="absolute -inset-5 bg-gold-300/10 blur-[80px] opacity-0 group-hover:opacity-100 duration-700 rounded-full" />

    <img
      src="/image/gloss-main.webp"
      alt="Stretch Gloss Ceiling"
      className="relative rounded-3xl h-[520px] w-full object-cover shadow-2xl"
    />

  </motion.div>

  {/* CONTENT */}

  <motion.div>

    <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
      STRETCHÉ™ GLOSS
    </p>

    <h2 className="text-5xl font-luxury font-bold mb-5">
      Mirror-Like Luxury Finish
    </h2>

    <div className="w-24 h-[2px] bg-gold-300 rounded-full mb-8" />

    <p className="text-white/70 text-lg leading-loose mb-6">

      <strong>STRETCHÉ™ GLOSS</strong> is a premium high-gloss stretch
      ceiling system engineered to create a smooth, seamless and highly
      reflective surface. Its mirror-like finish reflects light,
      furniture and architectural elements, creating an impressive
      feeling of depth, height and spaciousness.

    </p>

    <p className="text-white/70 text-lg leading-loose mb-8">

      Unlike conventional painted or gypsum ceilings, STRETCHÉ™ GLOSS
      becomes a striking architectural feature that enhances interior
      brightness while delivering a sophisticated luxury appearance.

    </p>

  </motion.div>

</motion.section>
{/* ================= TYPE 2 ================= */}

<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-32"
>

  <h2 className="text-4xl font-luxury text-center mb-14">
    Key Benefits
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        title:"High Reflection",
        desc:"Mirror-like glossy finish creates premium interiors."
      },
      {
        title:"Enhanced Space",
        desc:"Rooms appear taller, wider and more spacious."
      },
      {
        title:"Luxury Finish",
        desc:"Perfect for contemporary luxury architecture."
      },
      {
        title:"Light Enhancement",
        desc:"Reflects natural and artificial lighting beautifully."
      },
      {
        title:"Fast Installation",
        desc:"Installed without heavy construction work."
      },
      {
        title:"Design Flexibility",
        desc:"Compatible with chandeliers, spotlights and linear lighting."
      }

    ].map((item,index)=>(

      <motion.div
        key={index}
        whileHover={{ y:-8, scale:1.03 }}
        className="glass rounded-3xl p-8"
      >

        <h3 className="text-gold-300 text-2xl font-semibold mb-4">
          {item.title}
        </h3>

        <p className="text-white/70 leading-relaxed">
          {item.desc}
        </p>

      </motion.div>

    ))}

  </div>

</motion.section>



{/* ================= TYPE 3 ================= */}

<motion.section
className="grid lg:grid-cols-[1fr_1fr] gap-20 items-center mb-32"
>

<div>

<h2 className="text-5xl font-luxury mb-5">
Visual Depth Effect
</h2>

<div className="w-24 h-[2px] bg-gold-300 rounded-full mb-8" />

<p className="text-white/70 leading-loose mb-6">

One of the most striking applications of STRETCHÉ™ GLOSS is
its ability to create the visual illusion of additional
height and depth. Reflections of chandeliers, decorative
lighting and surrounding interiors make the ceiling become
part of the overall luxury experience.

</p>

<p className="text-white/70 leading-loose">

Perfect for hotel lobbies, restaurants, villas,
reception areas and premium commercial interiors where
dramatic visual impact is desired.

</p>

</div>

<motion.img

whileHover={{scale:1.03}}

src="/image/gloss-depth.webp"

className="rounded-3xl h-[520px] w-full object-cover shadow-2xl"

/>

</motion.section>
{/* ================= TYPE 4 ================= */}
<motion.section
className="text-center mb-28"
>

<h2 className="text-4xl font-luxury mb-12">
Ideal Applications
</h2>

<div className="flex flex-wrap justify-center gap-4">

{[
"Luxury Homes",
"Hotel Lobbies",
"Restaurants",
"Lounges",
"Retail Stores",
"Jewellery Showrooms",
"Corporate Offices",
"Salons",
"Spas",
"Reception Areas",
"Premium Villas",
"Commercial Spaces"
].map((item,index)=>(

<div
key={index}
className="glass px-6 py-3 rounded-full text-white hover:bg-gold-300 hover:text-black duration-300"
>

{item}

</div>

))}

</div>

</motion.section>


{/* ================= CTA ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="glass-gold rounded-3xl p-12 text-center"
>

  <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
    Bring Your Designs to Life with STRETCHÉ™ GLOSS
  </h2>

  <p className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
    Transform ordinary ceilings into extraordinary architectural features
    with high-resolution customised printed stretch ceilings. From elegant
    backlit artwork to intelligent RGBW and Dynamic Pixel lighting,
    STRETCHÉ™ GLOSS delivers limitless design possibilities for luxury
    residential, commercial and hospitality interiors.
  </p>

  <div className="flex flex-col sm:flex-row gap-5 justify-center">

    <a
      href="/contact"
      className="btn-luxury"
    >
      Request a Free Consultation
    </a>

    <a
      href="/catalogue.pdf"
      className="btn-outline-gold"
    >
      Download Catalogue
    </a>

  </div>

</motion.div>

</section>

</div>

</>
);
};

export default Stretchprint;

