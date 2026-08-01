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

      <div className="min-h-screen text-white pt-24 bg-luxury-black">
        
         <section className="py-20 border-b border-white/10">
       
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

         <section className="section-padding bg-luxury-gray">
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

    

  </div>

  {[
  {
    title: "Classic Star Sky",
    image: "/images/fiber-optics-img.png",
    desc:
      "The Classic Star Sky is the purest expression of luxury fiber optic ceiling design, inspired by the timeless beauty of a naturally illuminated night sky. Thousands of precision-engineered fiber optic points are carefully integrated into a premium stretch ceiling membrane to create a realistic constellation effect that radiates elegance and serenity."
  },
  {
    title: "Dense Star Sky",
    image: "/images/fiber-optics-img.png",
    desc:
      "Dense Star Sky is designed for those who desire a richer and more dramatic celestial experience. Featuring a significantly higher concentration of precision fiber optic stars, this design creates extraordinary depth, brilliance, and visual richness that closely resembles the breathtaking appearance of the galaxy on a crystal-clear night. The increased star density transforms the ceiling into a luxurious architectural centerpiece while maintaining an elegant and sophisticated atmosphere. Ideal for premium home theatres, luxury villas, executive lounges, five-star hotel suites, restaurants, and entertainment spaces, Dense Star Sky delivers an unforgettable visual experience."

  },
  {
    title: "Twinkling Star Sky",
    image: "/images/fiber-optics-img.png",
    desc:
      "Twinkling Star Sky recreates the magical movement of real stars through advanced programmable fiber optic technology. Intelligent lighting controllers gently vary the brightness of selected fiber optic points, producing a soft shimmering effect that closely resembles a naturally sparkling night sky. The subtle animation introduces life and motion to the ceiling without becoming distracting, creating a peaceful and luxurious atmosphere. This premium design is especially suited for home theatres, wellness centers, luxury bedrooms, spas, boutique hotels, meditation spaces, and high-end residential interiors where comfort and relaxation are essential. By combining dynamic lighting effects with seamless stretch ceiling technology, Twinkling Star Sky transforms ordinary interiors into extraordinary architectural experiences.",

  },
  {
    title: "Milky Way Star Sky",
    image: "/images/fiber-optics-img.png",
    desc:
      "Inspired by the breathtaking beauty of our galaxy, the Milky Way Star Sky transforms ceilings into spectacular cosmic landscapes. Carefully arranged clusters of fiber optic stars recreate the flowing appearance of the Milky Way, adding remarkable depth, texture, and artistic character to any interior. This luxurious design combines dense star formations with carefully balanced illumination to create a dramatic visual centerpiece that immediately captures attention. Perfect for luxury residences, premium hospitality projects, cinemas, restaurants, luxury villas, and designer commercial spaces, Milky Way Star Sky delivers an immersive architectural feature unlike any conventional ceiling system. Every installation is custom designed to ensure a unique and unforgettable celestial experience.",

  },
  {
    title: "RGB Star Sky",
    image: "/images/fiber-optics-img.png",
    desc:
      "RGB Star Sky combines premium fiber optic technology with intelligent RGB LED illumination to create fully customizable lighting environments. Users can effortlessly switch between millions of colors, adjust brightness levels, and select dynamic lighting scenes to complement different moods, occasions, or interior themes. Whether creating a relaxing blue night sky, vibrant entertainment atmosphere, or elegant warm ambience, RGB Star Sky offers complete flexibility without compromising luxury aesthetics. Designed for modern residences, gaming rooms, premium lounges, bars, clubs, hospitality projects, luxury hotels, and commercial entertainment venues, this innovative ceiling system seamlessly blends sophisticated architectural design with cutting-edge lighting technology.",

  },
  {
    title: "Custom Pattern Star Sky",
    image: "/images/fiber-optics-img.png",
    desc:
      "Custom Pattern Star Sky offers complete creative freedom by transforming unique ideas into extraordinary illuminated ceiling masterpieces. From personalized constellations and zodiac formations to company logos, family initials, artistic graphics, and bespoke celestial compositions, every project is individually designed according to the client's vision. Using advanced fiber optic technology combined with precision craftsmanship, our designers create one-of-a-kind ceiling installations that become the defining feature of luxury interiors. Ideal for signature residences, luxury villas, premium hotels, corporate experience centers, restaurants, themed entertainment spaces, and exclusive commercial projects, Custom Pattern Star Sky delivers a truly personalized architectural statement that reflects individuality, innovation, and timeless elegance.",

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