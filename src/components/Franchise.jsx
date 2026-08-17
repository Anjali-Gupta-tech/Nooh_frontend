import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Franchise = () => {
  const franchiseOptions = [
    {
      title: "DEALERSHIP PROGRAM",
      description:
        "Build your own NOOH business with premium products, professional training and dedicated business support.",
      image: "/franchaise-hero/dealership.png",
      link: "/franchise/dealership",
    },
    {
      title: "ASSOCIATE PROGRAM",
      description:
        "Partner with NOOH to offer premium ceiling solutions with complete project and technical support.",
      image: "/franchaise-hero/associate-hero.png",
      link: "/franchise/associate",
    },
    {
      title: "TRAINING PROGRAM",
      description:
        "Learn product knowledge, installation, estimation, sales and project execution through professional training.",
      image: "/franchaise-hero/training-hero.png",
      link: "/franchaise/training",
    },
  ];

  return (
    <div className="min-h-screen bg-luxury-black text-white">

      {/* =====================================================
          HERO / HEADER SECTION
      ===================================================== */}

      <section className="relative min-h-[560px] overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
<img
  src="/franchaise-hero/franchise-hero.png"
  alt="NOOH Luxury Interior"
  className="h-full w-full object-cover "
/>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Premium Gradient */}
          <div className="absolute inset-0 " />

        </div>


        {/* Hero Content */}
       


        {/* Gold Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#d6af45]" />

      </section>


      {/* =====================================================
          OPPORTUNITIES SECTION
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          {/* Section Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-14 text-center"
          >

            <div className="mb-5 flex items-center justify-center gap-4">

              <span className="h-px w-12 bg-luxury-gold/60" />

              <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
                EXPLORE
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              Choose Your{" "}
              <span className="text-gold-300">
                Opportunity
              </span>
            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

          </motion.div>


          {/* =================================================
              OPPORTUNITY CARDS
          ================================================= */}

          <div className="grid gap-7 md:grid-cols-3">

            {franchiseOptions.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                }}
                className="group"
              >

                <Link
                  to={item.link}
                  className="block overflow-hidden glass-gold transition-all duration-500"
                >

                  {/* Image */}
                  <div className="relative h-[270px] overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />


                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


                    {/* Gold Circle */}
                    <div className="absolute bottom-[-25px] left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-luxury-black bg-[#c9a43a] text-black shadow-lg">

                      <span className="text-lg">
                        ✦
                      </span>

                    </div>

                  </div>


                  {/* Card Content */}
                  <div className="px-7 pb-8 pt-10 text-center">

                    {/* Title */}
                    <h3 className="font-luxury text-xl font-bold tracking-wide text-gold-300">
                      {item.title}
                    </h3>


                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/60">
                      {item.description}
                    </p>


                    {/* Explore */}
                    <div className="mt-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-luxury-gold">

                      <span>
                        Explore
                      </span>

                      <motion.span
                        initial={{
                          x: 0,
                        }}
                        whileHover={{
                          x: 5,
                        }}
                        className="text-base"
                      >
                        →
                      </motion.span>

                    </div>

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

{/* =====================================================
    ABOUT NOOH
===================================================== */}

<section

  className="section-padding bg-luxury-black"
>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-14 text-center"
    >

      


      <h2 className="font-luxury text-4xl font-bold md:text-5xl">

     OUR   PRODUCT{" "}

        <span className="text-gold-300">
          PORTFOLIO
        </span>

      </h2>


      <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

    </motion.div>

 {/* =================================================
    PRODUCT CARDS
================================================= */}

<div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

 {[
  {
    number: "01",
    title: <>STRETCHÉ<sup>™</sup></>,
    type: "Stretch Ceiling",
    image: "/images/stretch-ceiling-manufacted.png",
  },

  {
    number: "02",
    title: <>Cloudwave<sup>™</sup></>,
    type: "Textile Ceiling",
    image: "/service/cloudewave.png",
  },

  {
    number: "03",
    title: <>WindFabric<sup>™</sup></>,
    type: "Architectural Fabric Ceiling",
    image: "/hero-images/windfabric.png",
  },

  {
    number: "04",
    title: "Virtual Sky",
    type: "Virtual Sky Ceiling",
    image: "/hero-images/virtualsky.png",
  },

  {
    number: "05",
    title: <>SkyLume<sup>™</sup></>,
    type: "Panel Light Ceiling",
    image: "/hero-images/SKY-LUME-PANEL-LIGHTING.png",
  },

  {
    number: "06",
    title: "Fiber Optic Star",
    type: "Fiber Optic Ceiling",
    image: "/images/FIBER-OPTIC-NOOH.webp",
  },

].map((item, index) => (

    <motion.div
      key={item.number}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
      }}
      whileHover={{
        y: -7,
      }}
      className="group relative h-[360px] overflow-hidden rounded-xl border border-white/10 transition-all duration-500 hover:border-luxury-gold/70"
    >

      {/* =================================================
          BACKGROUND IMAGE
      ================================================= */}

      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />


      {/* =================================================
          DARK OVERLAY
      ================================================= */}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10 transition-all duration-500 group-hover:via-black/65" />


      {/* =================================================
          GOLD HOVER GLOW
      ================================================= */}

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 border border-luxury-gold/50 rounded-xl" />
      </div>


      {/* =================================================
          CARD CONTENT
      ================================================= */}

      <div className="relative z-10 flex h-full flex-col justify-between p-7">


        {/* Number */}

        <div className="flex items-center justify-between">

          <span className="text-[10px] font-bold tracking-[0.25em] text-white/70">
            {item.number}
          </span>

          <div className="h-px w-12 bg-luxury-gold/70 transition-all duration-500 group-hover:w-20" />

        </div>


        {/* Bottom Content */}

        <div>

          <div className="mb-4 h-[2px] w-10 bg-luxury-gold transition-all duration-500 group-hover:w-16" />

          <h3 className="font-luxury text-2xl font-bold text-white md:text-3xl">
            {item.title}
          </h3>

          <p className="mt-2 text-sm tracking-wide text-white/65">
            {item.type}
          </p>

        </div>

      </div>

    </motion.div>

  ))}

</div>
</section>
      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-luxury-black px-6 py-20 text-center">

        {/* Subtle Gold Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/5 blur-[120px]" />


        <div className="container-custom relative z-10 mx-auto">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
              PARTNER WITH NOOH
            </p>


            <h2 className="mt-5 font-luxury text-4xl font-bold text-white md:text-5xl">
              Build Your Business.
            </h2>


            <p className="mt-3 font-luxury text-2xl font-bold text-gold-300">
              Grow With NOOH.
            </p>


            {/* Gold Line */}
            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default Franchise;