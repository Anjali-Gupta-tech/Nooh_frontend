import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Stretchgloss = () => {
  return (
    <>
      <Helmet>
        <title>STRETCHÉ™ GLOSS | NOOH Living Elevated</title>

        <meta
          name="description"
          content="Premium High-Gloss Reflective Stretch Ceiling with Mirror Finish Technology by NOOH Living Elevated."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black text-white pt-24">

        {/* ================= HERO ================= */}

    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

{/* Background Image */}

  <div className="absolute inset-0">
    <img
      src="/service/stretch-gloss-head.png"
      alt="STRETCHÉ GLOSS"
      className="h-full w-full object-cover"
    />


{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/40" />


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
    STRETCHÉ™ Collection
  </motion.p>


  <motion.h1
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-5xl md:text-7xl font-luxury font-bold mb-6"
  >
    STRETCHÉ
    <sup className="relative -top-5 ml-1 text-xl md:text-3xl">
      ™
    </sup>{" "}
    GLOSS
  </motion.h1>


  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15 }}
    className="text-2xl md:text-3xl text-gold-300 font-semibold mb-8"
  >
    Premium High-Gloss Reflective Stretch Ceiling
  </motion.h2>


  <motion.p
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="max-w-5xl mx-auto text-white/70 text-xl leading-relaxed"
  >
    STRETCHÉ™ GLOSS is a premium stretch ceiling system designed
    to create exceptionally smooth, seamless and mirror-like
    reflective ceiling surfaces.
  </motion.p>

</div>


  </div>

</section>



        {/* ================= INTRO ================= */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

          
            {/* ================= SECTION 1 ================= */}

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
    src="/images/gloss.jpeg"
    alt="translucent-image"
    className="w-full h-[500px] rounded-3xl transition-transform duration-500 hover:scale-105"
  />
</div>
  
  </motion.div>

  {/* CONTENT */}

  <motion.div>

    <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
      STRETCHÉ™ GLOSS
    </p>

    <h2 className="text-5xl font-luxury font-bold mb-5">
      Premium High-Gloss Reflective Ceiling
    </h2>

    <div className="w-24 h-[2px] bg-gold-300 rounded-full mb-8" />

    <p className="text-white/70 text-lg leading-loose mb-6">

      <strong>STRETCHÉ™ GLOSS</strong> is designed to create an
      exceptionally smooth, seamless and mirror-like ceiling surface.
      Its glossy finish beautifully reflects chandeliers, decorative
      lighting, furniture and surrounding architectural elements,
      transforming ordinary interiors into elegant luxury spaces.

    </p>

    <p className="text-white/70 text-lg leading-loose mb-8">

      The specially engineered stretch membrane is precisely tensioned
      over an aluminium perimeter profile to produce a flawless finish
      without visible joints, cracks or uneven surfaces. The result is a
      sophisticated ceiling that enhances both daylight and artificial
      lighting while making interiors appear larger and brighter.

    </p>

  </motion.div>

</motion.section>



{/* ================= KEY FEATURES ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-32"
>

  <h2 className="text-4xl font-luxury text-center mb-14">

    Key Features

  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

    {[
      {
        title:"Mirror-Like Finish",
        desc:"Creates a luxurious reflective ceiling with exceptional visual appeal."
      },
      {
        title:"Smooth & Seamless",
        desc:"Joint-free premium finish without cracks, peeling or paint issues."
      },
      {
        title:"Visual Depth",
        desc:"Makes interiors appear taller, brighter and significantly more spacious."
      },
      {
        title:"Reflective Lighting",
        desc:"Enhances chandeliers, pendant lights, spotlights and decorative lighting."
      },
      {
        title:"Easy Maintenance",
        desc:"Durable surface that is easy to clean and maintain."
      },
      {
        title:"Custom Design",
        desc:"Available in multiple colours, shapes and architectural concepts."
      }

    ].map((item,index)=>(

      <motion.div

        key={index}

        whileHover={{
          y:-8,
          scale:1.03
        }}

        transition={{duration:.35}}

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
{/* ================= THE BEAUTY OF REFLECTION ================= */}

<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: .8 }}
  className="grid lg:grid-cols-[1fr_1fr] gap-20 items-center mb-32"
>

  <div>

    <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
      Reflection • Depth • Luxury
    </p>

    <h2 className="text-5xl font-luxury font-bold mb-5">
      The Beauty of Reflection
    </h2>

    <div className="w-24 h-[2px] bg-gold-300 rounded-full mb-8" />

    <p className="text-white/70 leading-loose mb-6">

      The defining feature of <strong>STRETCHÉ™ GLOSS</strong> is its
      spectacular mirror-like reflective finish. Chandeliers, pendant
      lights, spotlights, decorative lighting and interior elements are
      reflected beautifully across the ceiling, creating an additional
      architectural dimension throughout the space.

    </p>

    <p className="text-white/70 leading-loose mb-6">

      This elegant reflection visually increases ceiling height while
      making rooms feel brighter, larger and significantly more luxurious.
      Every lighting element becomes part of the overall interior design
      experience.

    </p>

    <p className="text-white/70 leading-loose">

      STRETCHÉ™ GLOSS transforms ordinary ceilings into statement
      architectural features that immediately enhance the character of
      premium interiors.

    </p>

  </div>

  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.5 }}
    className="group relative"
  >

    <div className="absolute -inset-5 bg-gold-300/10 blur-[80px] opacity-0 group-hover:opacity-100 duration-700 rounded-full" />
 <div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/images/gloss-ceiling2.png"
    alt="gloss-ceiling"
    className="w-full h-[500px] rounded-3xl transition-transform duration-500 hover:scale-105"
  />
</div>
  
  </motion.div>


</motion.section>



{/* ================= APPLICATIONS ================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-32"
>

  <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
    Perfect For
  </p>

  <h2 className="text-5xl font-luxury font-bold mb-12">
    Ideal Applications
  </h2>

  <div className="flex flex-wrap justify-center gap-5">

    {[
      "Luxury Residences",
      "Premium Villas",
      "Hotels",
      "Restaurants",
      "Lounges",
      "Reception Areas",
      "Retail Stores",
      "Showrooms",
      "Corporate Offices",
      "Salons",
      "Spas",
      "Entertainment Spaces"
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
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="glass-gold rounded-3xl p-12 text-center"
>

  <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
    Transform Your Space with STRETCHÉ™ GLOSS
  </h2>

  <p className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">

    More than a ceiling, STRETCHÉ™ GLOSS becomes a reflective
    architectural design element that interacts beautifully with lighting,
    furniture and surrounding interiors. Experience exceptional depth,
    elegance and seamless luxury with NOOH Living Elevated.

  </p>

  <div className="flex flex-col sm:flex-row gap-5 justify-center">

    <a
      href="/contact"
      className="btn-luxury"
    >
      Request Free Consultation
    </a>

    <a
      href="/catalogue/STRETCHE_TM_GLOSS.pdf"
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

export default Stretchgloss;














