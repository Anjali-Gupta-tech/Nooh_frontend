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
      image: "/franchaise-hero/associate.png",
      link: "/franchise/associate",
    },
    {
      title: "TRAINING PROGRAM",
      description:
        "Learn product knowledge, installation, estimation, sales and project execution through professional training.",
      image: "/franchaise-hero/training.png",
      link: "/franchaise-hero/training",
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
            src="/franchaise-hero/franchaise-hero.png"
            alt="NOOH Luxury Interior"
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Premium Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

        </div>


        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[560px] items-center justify-center px-6 text-center">

          <div className="mx-auto max-w-5xl">

            {/* Small Label */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mb-6 text-[11px] font-medium uppercase tracking-[0.45em] text-luxury-gold"
            >
              NOOH ELEVATED LIVING LLP
            </motion.p>


            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="font-luxury text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[78px]"
            >
              Franchise &{" "}
              <span className="text-gold-300">
                Business Opportunities
              </span>
            </motion.h1>


            {/* Gold Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 70 }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="mx-auto mt-8 h-[1px] bg-[#d6af45]"
            />


            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.6,
              }}
              className="mx-auto mt-7 max-w-2xl text-sm font-light leading-7 tracking-wide text-white/75 md:text-base"
            >
              Join one of India's growing luxury interior brands and build
              your premium interior business with innovative ceiling
              solutions, professional training and trusted support.
            </motion.p>

          </div>

        </div>


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