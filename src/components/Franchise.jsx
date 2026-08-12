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
  src="/franchaise-hero/franchise-image-hero.png"
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
  id="about-nooh"
  className="section-padding bg-luxury-black"
>

  <div className="container-custom mx-auto">


    {/* =================================================
        SECTION HEADING
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-14 text-center"
    >

      <div className="mb-5 flex items-center justify-center gap-4">

        <span className="h-px w-12 bg-luxury-gold/60" />

        <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
          ABOUT NOOH
        </span>

        <span className="h-px w-12 bg-luxury-gold/60" />

      </div>


      <h2 className="font-luxury text-4xl font-bold md:text-5xl">

        About{" "}

        <span className="text-gold-300">
          NOOH
        </span>

      </h2>


      <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

    </motion.div>



    {/* =================================================
        INTRODUCTION CARD
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-gold overflow-hidden"
    >

      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">


        {/* LEFT — ABOUT */}

        <div className="border-b border-luxury-gold/20 p-8 md:p-10 lg:border-b-0 lg:border-r">

          <div className="flex items-start gap-5">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-luxury-gold/40 text-xl text-luxury-gold">
              N
            </div>


            <div>

              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                NOOH ELEVATED LIVING LLP
              </span>


              <h3 className="mt-3 font-luxury text-2xl font-bold text-white md:text-3xl">
                Innovative Interior Ceiling Solutions
              </h3>

            </div>

          </div>


          <p className="mt-7 text-sm leading-7 text-white/60 md:text-base">

            <span className="font-semibold text-gold-300">
              NOOH Elevated Living LLP
            </span>{" "}
            is a premium interior ceiling solutions company
            specializing in innovative decorative ceiling systems
            for residential, commercial, hospitality, healthcare,
            retail, and luxury interior projects across India.

          </p>


          <div className="mt-7 h-[2px] w-14 bg-luxury-gold" />

        </div>



        {/* RIGHT — POSITIONING */}

        <div className="flex items-center p-8 md:p-10">

          <div className="w-full">

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
              OUR APPROACH
            </span>


            <h3 className="mt-4 font-luxury text-2xl font-bold text-white">
              Premium Spaces.
              <br />

              <span className="text-gold-300">
                Innovative Ceilings.
              </span>
            </h3>


            <p className="mt-5 text-sm leading-7 text-white/50">
              NOOH focuses on innovative decorative ceiling
              systems designed for modern residential,
              commercial and luxury interior environments.
            </p>

          </div>

        </div>

      </div>

    </motion.div>



    {/* =================================================
        PRODUCT PORTFOLIO
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-20 mb-10 text-center"
    >

      <div className="mb-5 flex items-center justify-center gap-4">

        <span className="h-px w-12 bg-luxury-gold/60" />

        <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
          OUR PRODUCT PORTFOLIO
        </span>

        <span className="h-px w-12 bg-luxury-gold/60" />

      </div>


      <h2 className="font-luxury text-3xl font-bold md:text-4xl">

        Our Product{" "}

        <span className="text-gold-300">
          Portfolio
        </span>

      </h2>


      <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

    </motion.div>



    {/* =================================================
        PRODUCT CARDS
    ================================================= */}

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          number: "01",
          icon: "◈",
          title: "STRETCHÉ™",
          type: "Stretch Ceiling",
        },

        {
          number: "02",
          icon: "≋",
          title: "Cloudwave™",
          type: "Textile Ceiling",
        },

        {
          number: "03",
          icon: "◇",
          title: "WindFabric™",
          type: "Ceiling",
        },

        {
          number: "04",
          icon: "☁",
          title: "Virtual Sky",
          type: "Ceiling",
        },

        {
          number: "05",
          icon: "▱",
          title: "SkyLume™",
          type: "Panel Light Ceiling",
        },

        {
          number: "06",
          icon: "✦",
          title: "Fiber Optic Star",
          type: "Ceiling",
        },

      ].map((item, index) => (

        <motion.div
          key={item.number}
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
            duration: 0.5,
            delay: index * 0.07,
          }}
          whileHover={{
            y: -5,
          }}
          className="glass-gold p-6 transition-all duration-300 hover:border-luxury-gold/60"
        >

          <div className="flex items-center justify-between">

            <span className="text-[10px] font-bold tracking-[0.2em] text-luxury-gold">
              {item.number}
            </span>


            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
              {item.icon}
            </div>

          </div>


          <h3 className="mt-6 font-luxury text-xl font-bold text-white">
            {item.title}
          </h3>


          <p className="mt-2 text-sm text-white/50">
            {item.type}
          </p>


          <div className="mt-5 h-px w-full bg-luxury-gold/15" />

        </motion.div>

      ))}

    </div>



    {/* =================================================
        OUR MISSION
    ================================================= */}

    <motion.div
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
        duration: 0.8,
      }}
      className="mt-20"
    >

      <div className="glass-gold overflow-hidden">

        <div className="grid items-center lg:grid-cols-[110px_1fr]">


          {/* Mission Icon */}

          <div className="flex items-center justify-center border-b border-luxury-gold/20 bg-luxury-gold/5 p-8 lg:border-b-0 lg:border-r">

            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-luxury-gold/50 text-2xl text-luxury-gold">
              ◎
            </div>

          </div>


          {/* Mission Content */}

          <div className="p-8 md:p-10">

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
              OUR MISSION
            </span>


            <h3 className="mt-3 font-luxury text-2xl font-bold text-white md:text-3xl">
              Building Successful Businesses
            </h3>


            <div className="mt-5 h-[2px] w-14 bg-luxury-gold" />


            <p className="mt-6 max-w-4xl text-sm leading-7 text-white/60 md:text-base">

              Our mission is to help entrepreneurs, architects,
              interior designers, contractors, and business owners
              build a successful business in the growing premium
              interior industry through professional training,
              technical support, and complete business guidance.

            </p>

          </div>

        </div>

      </div>

    </motion.div>


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