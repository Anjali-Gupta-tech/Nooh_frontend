
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const StretchPanel = () => {
  return (
    <>
    
      <Helmet>
        <title>STRETCH™ PANEL | NOOH Living Elevated</title>
        <meta
          name="description"
          content="Premium LED Backlit Printed Ceiling Panels with Custom Graphics by NOOH Living Elevated."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black text-white pt-24"></div>
<section className="py-20 border-b border-white/10">

  <div className="section-padding mx-auto text-center">

    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4"
    >
      STRETCH<sup>™</sup> Collection
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-5xl md:text-7xl font-luxury font-bold mb-6"
    >
      STRETCH<sup>™</sup> PANEL
    </motion.h1>

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .15 }}
      className="text-2xl md:text-3xl text-gold-300 font-semibold mb-8"
    >
      Premium Backlit Printed Panel Ceiling Systems by NOOH
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: .25 }}
      className="max-w-5xl mx-auto text-white/70 text-xl leading-relaxed"
    >
      Transform ordinary ceilings into extraordinary architectural
      statements with STRETCH<sup>™</sup> PANEL by NOOH. Combining
      advanced LED backlighting with premium custom-printed graphics,
      these decorative ceiling panels deliver bright, uniform,
      glare-free illumination for residential, commercial,
      hospitality, healthcare and retail environments.
    </motion.p>

  </div>

</section>
{/* ================= AVAILABLE SIZES ================= */}

<section className="py-24 bg-luxury-gray">

  <div className="container-custom mx-auto">

    <div className="text-center mb-20">

      <p className="text-gold-300 uppercase tracking-[5px] font-semibold mb-4">
        Product Specifications
      </p>

      <h2 className="text-5xl md:text-6xl font-luxury font-bold mb-6">
        Available Sizes
      </h2>

      <p className="text-white/70 max-w-3xl mx-auto leading-relaxed text-lg">
        STRETCH<sup>™</sup> PANEL is manufactured in multiple standard sizes
        to suit residential, commercial and architectural ceiling applications.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="glass rounded-3xl p-10 text-center">

        <h3 className="text-4xl font-bold text-gold-300 mb-4">
          2' × 2'
        </h3>

        <p className="text-white/70">
          600 × 600 mm
        </p>

      </div>

      <div className="glass rounded-3xl p-10 text-center">

        <h3 className="text-4xl font-bold text-gold-300 mb-4">
          1' × 1'
        </h3>

        <p className="text-white/70">
          300 × 300 mm
        </p>

      </div>

      <div className="glass rounded-3xl p-10 text-center">

        <h3 className="text-4xl font-bold text-gold-300 mb-4">
          4' × 1'
        </h3>

        <p className="text-white/70">
          1200 × 300 mm
        </p>

      </div>

    </div>

  </div>

</section>



{/* ================= KEY FEATURES ================= */}

<section className="section-padding">

  <div className="container-custom mx-auto">

    <div className="text-center mb-20">

      <p className="text-gold-300 uppercase tracking-[5px] font-semibold mb-4">
        Premium Technology
      </p>

      <h2 className="text-5xl md:text-6xl font-luxury font-bold mb-6">
        Key Features
      </h2>

      <p className="text-white/70 max-w-3xl mx-auto">
        Combining premium materials, LED technology and custom printing to
        deliver exceptional architectural ceiling solutions.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        "Premium LED Backlit Printed Ceiling Panels",
        "Fully Customizable Designs & Graphics",
        "Uniform Glare-Free Illumination",
        "Excellent Light Diffusion",
        "Energy Efficient LED Technology",
        "Slim & Lightweight Construction",
        "Premium Aluminium Frame System",
        "Quick & Hassle-Free Installation",
        "Low Maintenance",
        "Long Service Life",
        "Ideal for Renovation Projects",
        "Made-to-Order Manufacturing"
      ].map((feature, index) => (

        <div
          key={index}
          className="glass rounded-2xl p-6 hover:border hover:border-gold-300 transition"
        >

          <h4 className="text-gold-300 font-semibold text-lg mb-3">
            {String(index + 1).padStart(2, "0")}
          </h4>

          <p className="text-white/80 leading-relaxed">
            {feature}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
{/* ================= APPLICATIONS ================= */}

<section className="py-24 bg-luxury-gray">

  <div className="container-custom mx-auto">

    <div className="text-center mb-20">

      <p className="text-gold-300 uppercase tracking-[5px] font-semibold mb-4">
        Perfect Applications
      </p>

      <h2 className="text-5xl md:text-6xl font-luxury font-bold mb-6">
        Ideal Applications
      </h2>

      <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
        STRETCH<sup>™</sup> PANEL is designed for premium architectural
        interiors where aesthetics, lighting quality and durability are
        equally important.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        "Corporate Offices & Workspaces",
        "Retail Stores & Premium Showrooms",
        "Hospitals & Healthcare Facilities",
        "Schools, Colleges & Universities",
        "Hotels, Restaurants & Hospitality Projects",
        "Airports & Commercial Buildings",
        "Residential Interiors",
        "Reception Areas & Lobbies",
        "Shopping Malls & Experience Centres",
        "Salons, Spas & Luxury Interiors",
        "Exhibition Spaces",
        "Corporate Branding Areas"
      ].map((item, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="glass rounded-2xl p-6 hover:border hover:border-gold-300 transition-all duration-300"
        >

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-gold-300/10 flex items-center justify-center text-gold-300 text-xl font-bold">
              ✓
            </div>

            <h3 className="text-lg font-semibold">
              {item}
            </h3>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* ================= WHY CHOOSE ================= */}

<section className="section-padding">

  <div className="container-custom mx-auto">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
          Why Choose
        </p>

        <h2 className="text-5xl md:text-6xl font-luxury font-bold mb-8">
          STRETCH<sup>™</sup> PANEL
        </h2>

        <p className="text-white/70 leading-loose text-lg mb-6">

          STRETCH<sup>™</sup> PANEL combines innovative LED lighting,
          premium-quality printing and architectural engineering to create
          stunning illuminated ceiling systems for luxury interiors.

        </p>

        <p className="text-white/70 leading-loose text-lg mb-6">

          Whether you require a blue sky ceiling, nature-inspired artwork,
          branded graphics or completely customised visuals, every panel is
          manufactured with precision to deliver exceptional brightness,
          vibrant colours and uniform illumination.

        </p>

        <p className="text-white/70 leading-loose text-lg">

          Designed for architects, interior designers, builders and
          homeowners, STRETCH<sup>™</sup> PANEL offers a perfect balance of
          aesthetics, durability, energy efficiency and long-term reliability.

        </p>

      </motion.div>



      {/* RIGHT */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-5"
      >

        {[
          "Unlimited Custom Designs",
          "Premium Print Quality",
          "Uniform LED Illumination",
          "Energy Efficient",
          "Fast Installation",
          "Professional Finish"
        ].map((item, index) => (

          <div
            key={index}
            className="glass rounded-3xl p-8 text-center hover:border hover:border-gold-300 transition duration-300"
          >

            <h3 className="text-gold-300 text-4xl font-bold mb-5">
              {String(index + 1).padStart(2, "0")}
            </h3>

            <p className="text-white/90 leading-relaxed">
              {item}
            </p>

          </div>

        ))}

      </motion.div>

    </div>

  </div>

</section>
{/* ================= WARRANTY & CTA ================= */}

<section className="section-padding">

  <div className="container-custom mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-gold rounded-3xl p-12"
    >

      <div className="text-center mb-16">

        <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
          Warranty & Availability
        </p>

        <h2 className="text-5xl md:text-6xl font-luxury font-bold mb-6">
          Premium Quality. Trusted Performance.
        </h2>

        <p className="text-white/70 text-lg max-w-4xl mx-auto leading-loose">
          Every STRETCH<sup>™</sup> PANEL is manufactured using premium
          materials, precision engineering and advanced LED technology,
          ensuring long-lasting performance and exceptional visual quality
          for every project.
        </p>

      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

        <div className="glass rounded-2xl p-8 text-center">

          <h3 className="text-gold-300 text-5xl mb-4">
            ★
          </h3>

          <h4 className="font-bold text-xl mb-3">
            5-Year Warranty
          </h4>

          <p className="text-white/70">
            Limited Manufacturer Warranty
          </p>

        </div>

        <div className="glass rounded-2xl p-8 text-center">

          <h3 className="text-gold-300 text-5xl mb-4">
            🚚
          </h3>

          <h4 className="font-bold text-xl mb-3">
            Pan India
          </h4>

          <p className="text-white/70">
            Supply & Delivery Available
          </p>

        </div>

        <div className="glass rounded-2xl p-8 text-center">

          <h3 className="text-gold-300 text-5xl mb-4">
            🏭
          </h3>

          <h4 className="font-bold text-xl mb-3">
            Custom Manufacturing
          </h4>

          <p className="text-white/70">
            Made-to-Order Production
          </p>

        </div>

        <div className="glass rounded-2xl p-8 text-center">

          <h3 className="text-gold-300 text-5xl mb-4">
            ✔
          </h3>

          <h4 className="font-bold text-xl mb-3">
            Professional Support
          </h4>

          <p className="text-white/70">
            Design, Supply & Installation
          </p>

        </div>

      </div>



      <div className="border-t border-white/10 pt-14 text-center">

        <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
          Illuminate Your Ceiling.
          <br />
          Elevate Your Space.
        </h2>

        <p className="text-white/70 text-lg max-w-4xl mx-auto leading-loose mb-10">

          STRETCH<sup>™</sup> PANEL combines innovative lighting technology
          with unlimited design possibilities, helping architects, interior
          designers, builders and homeowners create extraordinary illuminated
          ceilings for residential and commercial interiors.

        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <a
            href="/contact"
            className="btn-luxury"
          >
            Get Free Consultation
          </a>

          <a
            href="/catalogue.pdf"
            className="btn-outline-gold"
          >
            Download Catalogue
          </a>

        </div>

      </div>

    </motion.div>

  </div>

</section>
      

    </>
  );
}

export default StretchPanel;