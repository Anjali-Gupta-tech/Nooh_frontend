import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Sparkles, Star } from "lucide-react";

const MuralLiving = () => {
    return(
        <>
        <Helmet>
  <title>WALLMURAL™ Living | NOOH Living Elevated</title>

  <meta
    name="description"
    content="Luxury Living Room Wall Collection featuring custom architectural HDMR wall panels, CNC craftsmanship, premium decorative finishes and UV printed artwork."
  />
</Helmet>

<div className="min-h-screen bg-luxury-black text-white pt-24">
    <section className="py-20 border-b border-white/10">
       
                 <div className="container-custom mx-auto text-center">
                  
                            <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-luxury font-bold mb-6"
                  >
                    WALLMURAL<sup className="text-[35%] align-super ml-1">™</sup> LIVING
                  </motion.h2>

       
                   <motion.p
                     initial={{ opacity: 0, y: 25 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: .3 }}
                     className="max-w-5xl mx-auto text-white/70 text-xl leading-relaxed"
                   >
                        WALLMURAL™ LIVING is a luxury living room wall collection featuring custom architectural HDMR wall panels, precision CNC craftsmanship, premium decorative finishes, and high-resolution UV printed artwork.
                   </motion.p>
       
                 </div>
       
               </section>
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="section-padding bg-luxury-gray"
>
  <div className="container-custom">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* IMAGE */}

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="overflow-hidden rounded-3xl shadow-2xl"
      >
        <img
          src="/muralimages/livingroom1.png"
          alt="WALLMURAL Living"
          className="w-full h-[600px] object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
        />
      </motion.div>

      {/* CONTENT */}

      <div>

        <p className="uppercase tracking-[4px] text-gold-300 font-semibold mb-4">
          Signature Collection
        </p>

        <h2 className="text-5xl font-luxury font-bold mb-6">
          WALLMURAL
          <sup className="relative -top-4 ml-1 text-lg">™</sup>{" "}
          LIVING
        </h2>

        <div className="w-24 h-[2px] bg-gold-300 rounded-full mb-8" />

        <p className="text-white/70 text-lg leading-loose mb-6">
          Designed to become the focal point of your home, WALLMURAL™
          LIVING combines premium HDMR architectural panels, precision CNC
          craftsmanship, decorative mouldings, luxury paint finishes, and
          high-resolution UV printed artwork to create bespoke feature
          walls that reflect your personal style.
        </p>

        <p className="text-white/60 leading-loose mb-10">
          Every installation is custom-designed according to your
          architecture, interior theme, and lifestyle, ensuring a unique
          masterpiece for every living space.
        </p>

        {/* FEATURES */}

        <div className="grid grid-cols-2 gap-4">

          {[
            "HDMR Panels",
            "CNC Crafted",
            "Luxury Finish",
            "UV Printed Artwork",
            "Decorative Mouldings",
            "Optional LED Lighting",
          ].map((item) => (

            <div
              key={item}
              className="glass rounded-xl px-5 py-4 text-center text-sm font-medium"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

    </div>

  </div>
</motion.section>
{/* ================================================= */}
{/* FEATURED COLLECTION */}
{/* ================================================= */}

{/* ================================================= */}
{/* DESIGN GALLERY */}
{/* ================================================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="section-padding"
>
  <div className="container-custom">

    {/* Heading */}

    <div className="text-center mb-16">

      <p className="uppercase tracking-[4px] text-gold-300 font-semibold mb-3">
        Project Gallery
      </p>

      <h2 className="text-5xl font-luxury font-bold mb-6">
        Luxury Living Room Inspirations
      </h2>

      <p className="max-w-3xl mx-auto text-white/70 text-lg">
        Explore a curated collection of bespoke architectural wall murals
        designed to transform luxury living spaces into timeless works of art.
      </p>

    </div>

    {/* Gallery */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        "/muralimages/livingroom2.png",
        "/muralimages/livingroom3.png",
        "/muralimages/livingroom4.png",
      
       
      ].map((img, index) => (

        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.35 }}
          className="overflow-hidden rounded-3xl shadow-xl"
        >

          <img
            src={img}
            alt={`Living Wall Mural ${index + 1}`}
            className="w-full h-[380px] object-cover transition-transform duration-700 hover:scale-110"
          />

        </motion.div>

      ))}

    </div>

  </div>
</motion.section>
{/* ================================================= */}
{/* OUR CRAFTSMANSHIP */}
{/* ================================================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="section-padding bg-luxury-gray"
>
  <div className="container-custom">

    {/* Heading */}

    <div className="text-center mb-16">

      <p className="uppercase tracking-[4px] text-gold-300 font-semibold mb-3">
        Craftsmanship
      </p>

      <h2 className="text-5xl font-luxury font-bold mb-6">
        From Vision to Reality
      </h2>

      <p className="max-w-3xl mx-auto text-white/70 text-lg">
        Every WALLMURAL™ project is meticulously crafted through a
        combination of precision engineering, artistic detailing,
        and luxury finishing techniques.
      </p>

    </div>

    {/* Process */}

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          no: "01",
          title: "Design Consultation",
          desc: "Understanding your space, lifestyle, and architectural vision."
        },
        {
          no: "02",
          title: "Concept Development",
          desc: "Creating bespoke wall concepts tailored exclusively for your interior."
        },
        {
          no: "03",
          title: "Precision CNC Crafting",
          desc: "HDMR panels are CNC machined with exceptional detailing."
        },
        {
          no: "04",
          title: "Luxury Finishing",
          desc: "Premium paint finishes, textures, mouldings, and decorative treatments."
        },
        {
          no: "05",
          title: "UV Artwork Integration",
          desc: "High-resolution artwork is seamlessly integrated into the architectural wall."
        },
        {
          no: "06",
          title: "Professional Installation",
          desc: "Expert installation ensures a flawless luxury finish."
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          transition={{ duration: 0.35 }}
          className="glass rounded-3xl p-8"
        >

          <div className="text-5xl font-bold text-gold-300/30 mb-6">
            {item.no}
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            {item.title}
          </h3>

          <p className="text-white/70 leading-relaxed">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>
</motion.section>
{/* ================================================= */}
{/* IDEAL APPLICATIONS */}
{/* ================================================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="section-padding"
>
  <div className="container-custom">

    {/* Heading */}

    <div className="text-center mb-16">

      <p className="uppercase tracking-[4px] text-gold-300 font-semibold mb-3">
        Applications
      </p>

      <h2 className="text-5xl font-luxury font-bold mb-6">
        Perfect for Luxury Living Spaces
      </h2>

      <p className="max-w-3xl mx-auto text-white/70 text-lg">
        WALLMURAL™ LIVING is designed to elevate residential interiors with
        bespoke architectural wall solutions that blend timeless elegance
        with modern craftsmanship.
      </p>

    </div>

    {/* Cards */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {[
        {
          icon: "🏡",
          title: "Living Rooms",
          desc: "Create elegant feature walls for modern luxury homes."
        },
        {
          icon: "🛋",
          title: "Family Lounges",
          desc: "Warm and inviting architectural wall compositions."
        },
        {
          icon: "📺",
          title: "TV Unit Walls",
          desc: "Custom statement walls designed around entertainment spaces."
        },
        {
          icon: "🏠",
          title: "Luxury Villas",
          desc: "Premium handcrafted walls tailored for exclusive residences."
        },
        {
          icon: "🏢",
          title: "Luxury Apartments",
          desc: "Contemporary wall designs for premium urban interiors."
        },
        {
          icon: "🏨",
          title: "Penthouses",
          desc: "Sophisticated architectural finishes for high-end living."
        },
        {
          icon: "🎨",
          title: "Designer Interiors",
          desc: "Unlimited customization to match every design concept."
        },
        {
          icon: "✨",
          title: "Feature Walls",
          desc: "Transform ordinary walls into luxurious focal points."
        },
      ].map((item, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          transition={{ duration: 0.35 }}
          className="glass rounded-3xl p-8 text-center"
        >

          <div className="text-5xl mb-6">
            {item.icon}
          </div>

          <h3 className="text-2xl font-semibold mb-4">
            {item.title}
          </h3>

          <p className="text-white/70 leading-relaxed">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </div>
</motion.section>
{/* ================================================= */}
{/* CTA */}
{/* ================================================= */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="pb-24"
>
  <div className="container-custom">

    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#181818] via-[#111111] to-black">


      {/* Content */}

      <div className="relative z-10 px-10 py-20 lg:px-24 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4"
        >
          Let's Create Something Extraordinary
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-luxury font-bold mb-8"
        >
          Design Your Dream
          <br />
          Living Room Wall
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
          className="max-w-3xl mx-auto text-white/70 text-lg leading-loose mb-12"
        >
          Every WALLMURAL™ LIVING installation is uniquely designed for
          your space using premium HDMR panels, precision CNC
          craftsmanship, decorative finishes, and luxury UV printed
          artwork. Let our design specialists create a bespoke wall
          masterpiece tailored exclusively for your interior.
        </motion.p>

        {/* Buttons */}

        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="/contact"
            className="btn-luxury"
          >
            Request Design Consultation
          </a>

          <a
            href="/catalogue/NOOH_WALLMURAL_LIVING.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            Download Catalogue
          </a>

        </div>

      </div>

    </div>

  </div>
</motion.section>
</div>
        </>
    )
}
export default MuralLiving;