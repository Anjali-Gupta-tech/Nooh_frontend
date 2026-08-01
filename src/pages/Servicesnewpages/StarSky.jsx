import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Sparkles, Star } from "lucide-react";

const StarSky = () => {
  return (
    <>
      <Helmet>
        <title>STRETCHE™ Star Sky | NOOH Living Elevated</title>

        <meta
          name="description"
          content="Experience the beauty of a realistic night sky with STRETCHE™ Star Sky. Premium fiber optic stretch ceilings for luxury homes, hotels, spas, home theatres and commercial interiors."
        />
      </Helmet>

      <div className="min-h-screen text-white pt-24">
          
<section className="section-padding bg-luxury-gray">
         <section className="py-20 bg-luxury-black">
       
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
                     transition={{ duration: .7 }}
                     className="text-5xl md:text-7xl font-luxury font-bold mb-6"
                   >
                     STRETCHÉ
                     <sup className="relative -top-5 ml-1 text-xl md:text-3xl">
                       ™
                     </sup>{" "}
                     Star Sky
                   </motion.h1>
       
                  
       
                   <motion.p
                     initial={{ opacity: 0, y: 25 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: .3 }}
                     className="max-w-5xl mx-auto text-white/70 text-xl leading-relaxed"
                   >
                     STRETCHE™ Star Sky  is a premium fiber optic stretch ceiling solution designed to recreate the mesmerizing beauty of a clear, star-filled night sky within luxury interiors.
                   </motion.p>
       
                 </div>
       
               </section>

       {/* design variations */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mb-36"
>

  <div className="text-center mb-20">

    

    <h2 className="text-5xl font-luxury font-bold mb-8">
      Design Variations
    </h2>

    <p className="max-w-4xl mx-auto text-white/70 text-lg leading-relaxed">

      Every STRETCHE™ Star Sky ceiling is custom designed to suit the
      ambience of your space. Choose from elegant night skies,
      cinematic galaxy effects or completely personalized star
      compositions.

    </p>

  </div>

  {[
    {
      title: "Classic Star Sky",
      image: "/images/star-sky/classic.jpg",
      desc:
        "A timeless arrangement of scattered stars inspired by the natural night sky. Perfect for bedrooms, lounges and premium residences where a calm, elegant atmosphere is desired."
    },
    {
      title: "Dense Star Sky",
      image: "/images/star-sky/dense.jpg",
      desc:
        "Features a much higher concentration of fiber optic stars to create a dramatic luxury ceiling with exceptional depth and visual richness."
    },
    {
      title: "Twinkling Star Sky",
      image: "/images/star-sky/twinkling.jpg",
      desc:
        "Dynamic fiber optic programming creates subtle shimmering stars that replicate the gentle movement of a real night sky."
    },
    {
      title: "Milky Way Star Sky",
      image: "/images/star-sky/milkyway.jpg",
      desc:
        "Inspired by the Milky Way galaxy, this design combines dense star clusters with artistic lighting patterns for a breathtaking celestial experience."
    },
    {
      title: "RGB Star Sky",
      image: "/images/star-sky/rgb.jpg",
      desc:
        "Color-changing fiber optic technology allows users to switch between multiple ambient lighting moods using RGB illumination."
    },
    {
      title: "Custom Pattern Star Sky",
      image: "/images/star-sky/custom.jpg",
      desc:
        "Create personalized constellations, company logos, zodiac patterns or custom artistic layouts tailored specifically for your project."
    }
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
          className="w-full h-[500px] object-cover transition duration-700 hover:scale-105"
        />

      </motion.div>

      {/* CONTENT */}

      <div>

        <p className="uppercase tracking-[4px] text-gold-300 font-semibold mb-3">

          Design Variation {index + 1}

        </p>

        <h3 className="text-4xl font-luxury font-bold mb-6">

          {item.title}

        </h3>

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

    Why Choose STRETCHE™

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
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="grid lg:grid-cols-2 gap-20 items-center mb-36"
>

  <div>

    <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
      Technology
    </p>

    <h2 className="text-5xl font-luxury font-bold mb-6">
      Precision Fiber Optic Technology
    </h2>

    <div className="w-24 h-[2px] bg-gold-300 rounded-full mb-8" />

    <p className="text-white/70 text-lg leading-loose mb-6">
      STRETCHE™ Star Sky utilizes advanced fiber optic lighting technology,
      where thousands of ultra-fine optical fibers are connected to a centralized
      LED light engine. The fibers transmit light without carrying electricity,
      making the system exceptionally safe, energy-efficient, and long-lasting.
    </p>

    <p className="text-white/70 text-lg leading-loose mb-8">
      Every installation is engineered to create a seamless constellation of
      stars that can be customized with varying densities, brightness levels,
      twinkling effects, and RGB color options.
    </p>

    <div className="grid sm:grid-cols-2 gap-5">

      {[
        "Fiber Optic Light Engine",
        "Safe Low Voltage System",
        "Twinkling Star Controller",
        "50,000+ Hour LED Life"
      ].map((item,index)=>(
        <div
          key={index}
          className="glass rounded-xl p-4 text-center"
        >
          {item}
        </div>
      ))}

    </div>

  </div>

  <motion.div
    whileHover={{ scale:1.02 }}
    className="overflow-hidden rounded-3xl shadow-2xl"
  >

    <img
      src="/images/star-sky/technology.jpg"
      alt="Fiber Optic Technology"
      className="w-full h-[550px] object-cover transition duration-700 hover:scale-105"
    />

  </motion.div>

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

export default StarSky;