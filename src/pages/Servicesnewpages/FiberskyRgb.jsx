import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Sparkles, Star } from "lucide-react";

const FiberskyRgb= () => {
  return (
    <>
      <Helmet>
        <title>Fibersky RGB | NOOH Living Elevated</title>

        <meta
          name="description"
          content="Experience the beauty of a realistic night sky with STRETCHE™ Star Sky. Premium fiber optic stretch ceilings for luxury homes, hotels, spas, home theatres and commercial interiors."
        />
      </Helmet>

      <div className="min-h-screen text-white pt-24 bg-luxury-black">
        
        
<section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}

  <div className="absolute inset-0">

    <img
      src="/images/fibersky-rgb-bg.jpg"
      alt="FIBERSKY RGB"
      className="h-full w-full object-cover"
    />

    {/* Dark Overlay */}

    <div className="absolute inset-0 bg-black/50" />

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
        FIBERSKY
        <sup className="relative -top-5 ml-1 text-xl md:text-3xl">
          ™
        </sup>{" "}
        RGB
      </motion.h1>


      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-5xl mx-auto text-white/70 text-xl leading-relaxed"
      >
        FIBERSKY™ RGB is a premium fiber optic stretch ceiling solution
        designed to recreate the mesmerizing beauty of a clear,
        star-filled night sky within luxury interiors.
      </motion.p>


    </div>

  </div>

</section>

 




       {/* design variations */}

         <section className="section-padding bg-luxury-gray">
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-36"
>

  

  {[
 
  
  {
    title: "FIBERSKY™ RGB ",
    image: "/service/rgb-sky-star.png",
    desc:
      "Twinkling Star Sky recreates the magical movement of real stars through advanced programmable fiber optic technology. Intelligent lighting controllers gently vary the brightness of selected fiber optic points, producing a soft shimmering effect that closely resembles a naturally sparkling night sky."
  },
  
  
  
].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .6 }}
      className={`grid lg:grid-cols-2 gap-16 items-center mb-28 ${
        index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
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
           className="w-full h-[500px] rounded-3xl transition-transform duration-500 hover:scale-105"
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
            "Luxury Finish",
            "Custom Design",
            "Fiber Optic",
            "Premium Quality"
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
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-32"
>

  <p className="uppercase tracking-[5px] text-gold-300 text-center font-semibold mb-4">

    Why Choose FIBERSKY™ RGB

  </p>

  <h2 className="text-5xl font-luxury text-center font-bold mb-14">

    Designed for Luxury Interiors

  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

    {[
      {
        title: "Realistic Star Effect",
        desc: "Thousands of precision fiber optic points recreate the appearance of a natural night sky."
      },
      {
        title: "Twinkling Animation",
        desc: "Dynamic lighting creates subtle shimmering stars for a calming and immersive experience."
      },
      {
        title: "Premium Stretch Ceiling",
        desc: "Seamless stretch membrane provides a flawless finish with concealed lighting components."
      },
      {
        title: "Energy Efficient",
        desc: "Fiber optic technology consumes minimal energy while delivering exceptional visual performance."
      },
      {
        title: "Custom Star Layouts",
        desc: "Every ceiling can be uniquely designed with different star densities and artistic compositions."
      },
      {
        title: "Minimal Maintenance",
        desc: "Long-lasting lighting components require very little maintenance and provide years of reliable performance."
      }
    ].map((item, index) => (

      <motion.div
        key={index}
        whileHover={{
          y: -8,
          scale: 1.03
        }}
        transition={{ duration: .35 }}
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


<motion.section
  initial={{ opacity:0,y:40 }}
  whileInView={{ opacity:1,y:0 }}
  viewport={{ once:true }}
  className="text-center mb-36"
>

  <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
    Ideal Applications
  </p>

  <h2 className="text-5xl font-luxury font-bold mb-14">
    Designed for Premium Spaces
  </h2>

  <div className="flex flex-wrap justify-center gap-5">

    {[
      "Luxury Homes",
      "Master Bedrooms",
      "Home Theatre",
      "Luxury Villas",
      "Hotel Suites",
      "Restaurants",
      "Spa & Wellness",
      "Meditation Rooms",
      "Luxury Lounges",
      "Corporate Experience Centres",
      "Private Cinema",
      "Premium Showrooms"
    ].map((item,index)=>(

      <motion.div

        key={index}

        whileHover={{
          scale:1.08,
          y:-5
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
  initial={{ opacity:0,y:40 }}
  whileInView={{ opacity:1,y:0 }}
  viewport={{ once:true }}
  className="glass-gold rounded-3xl p-14 text-center"
>

  <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">

    Let's Create Something Extraordinary

  </p>

  <h2 className="text-5xl font-luxury font-bold mb-8">

    Bring the Beauty of the Night Sky Indoors

  </h2>

  <p className="max-w-4xl mx-auto text-white/70 text-lg leading-relaxed mb-10">

    From elegant residential interiors to luxury hospitality projects,
    STRETCHE™ Star Sky transforms ceilings into breathtaking architectural
    experiences. Our design specialists will help you create a completely
    customized fiber optic ceiling that perfectly complements your space.

  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-5">

    <a
      href="/contact"
      className="btn-luxury"
    >
      Request Free Consultation
    </a>

    <a
      href="/catalogue/STRETCHE_STAR_SKY.pdf"
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

export default FiberskyRgb;