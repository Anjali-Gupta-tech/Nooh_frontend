import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Dealership = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[600px] overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">

         <img
  src="/franchaise-hero/dealership-hero.png"
  alt="NOOH Dealership Program"
  className="h-full w-full object-cover mt-2"
/>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Soft Gradient */}
          <div className="absolute inset-0 " />

        </div>


        {/* Gold Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-[#d6af45]" />


        {/* =================================================
            STATIC HERO CONTENT
        ================================================= */}

      </section>


      {/* =====================================================
          BENEFITS STRIP
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "PREMIUM PRODUCTS",
                description:
                  "High-quality products with proven market demand.",
              },
              {
                title: "STRONG SUPPORT",
                description:
                  "Training, marketing, installation and after-sales support.",
              },
              {
                title: "HIGH RETURNS",
                description:
                  "Excellent margins and recurring business opportunities.",
              },
              {
                title: "EXCLUSIVE TERRITORY",
                description:
                  "One City. One Dealership — you are the only one.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.title}
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
                  delay: index * 0.1,
                }}
                className="text-center"
              >

                {/* Icon */}
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                  ✦
                </div>


                {/* Title */}
                <h3 className="font-luxury text-sm font-bold tracking-[0.15em] text-gold-300">
                  {item.title}
                </h3>


                {/* Description */}
                <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/60">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    {/* =====================================================
          INVESTMENT SECTION
      ===================================================== */}

      <section
        id="investment"
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

              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-luxury-gold">
                INVESTMENT
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              Start Your{" "}
              <span className="text-gold-300">
                NOOH Business
              </span>
            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />


            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              A complete dealership package designed to help you
              start your NOOH business with the essential resources
              required to get started.
            </p>

          </motion.div>


          {/* =================================================
              MAIN INVESTMENT CARD
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-gold overflow-hidden"
          >

            <div className="grid lg:grid-cols-2">


              {/* =================================================
                  LEFT — TOTAL INVESTMENT
              ================================================= */}

              <div className="flex flex-col items-center justify-center border-b border-luxury-gold/20 p-10 text-center lg:border-b-0 lg:border-r">

                <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                  TOTAL INVESTMENT
                </span>


                <div className="mt-6">

                  <span className="font-luxury text-5xl font-bold text-white md:text-6xl">
                    ₹1,00,000
                  </span>

                  <span className="ml-2 text-xl font-bold text-gold-300">
                    + GST
                  </span>

                </div>


                <div className="mx-auto mt-7 h-[2px] w-16 bg-luxury-gold" />


                <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
                  The dealership program requires a one-time
                  investment of ₹1,00,000 + GST.
                </p>

              </div>


              {/* =================================================
                  RIGHT — PACKAGE BREAKDOWN
              ================================================= */}

              <div className="grid md:grid-cols-4">

                {/* Raw Material */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="border-b border-luxury-gold/15 p-8 text-center transition-all duration-300 md:border-b-0 md:border-r"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
                    ◈
                  </div>


                  <p className="mt-6 font-luxury text-2xl font-bold text-white">
                    ₹50,000
                  </p>


                  <h3 className="mt-3 font-luxury text-sm font-bold uppercase tracking-[0.15em] text-gold-300">
                    Raw Material
                  </h3>


                  <p className="mt-4 text-sm leading-6 text-white/55">
                    Initial raw material included as part of the
                    dealership package.
                  </p>

                </motion.div>


                {/* Tool Kit */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="border-b border-luxury-gold/15 p-8 text-center transition-all duration-300 md:border-b-0 md:border-r"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
                    ⚒
                  </div>


                  <p className="mt-6 font-luxury text-2xl font-bold text-white">
                    ₹25,000
                  </p>


                  <h3 className="mt-3 font-luxury text-sm font-bold uppercase tracking-[0.15em] text-gold-300">
                    Tool Kit
                  </h3>


                  <p className="mt-4 text-sm leading-6 text-white/55">
                    Professional tool kit included to support
                    dealership operations.
                  </p>

                </motion.div>


                {/* Display Kit */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-8 text-center transition-all duration-300"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
                    ▣
                  </div>


                  <p className="mt-6 font-luxury text-2xl font-bold text-white">
                    ₹5,000
                  </p>


                  <h3 className="mt-3 font-luxury text-sm font-bold uppercase tracking-[0.15em] text-gold-300">
                    Display Kit
                  </h3>


                  <p className="mt-4 text-sm leading-6 text-white/55">
                    Display kit included to help showcase NOOH
                    products professionally.
                  </p>

                </motion.div>
{/* bussiness installation  */}
<motion.div
  whileHover={{ y: -4 }}
  className="p-8 text-center transition-all duration-300"
>
  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
    ◈
  </div>

  <p className="mt-6 font-luxury text-2xl font-bold text-white">
    ₹20,000
  </p>

  <h3 className="mt-3 font-luxury text-sm font-bold uppercase tracking-[0.15em] text-gold-300">
    Business & Installation Training
  </h3>

  <p className="mt-4 text-sm leading-6 text-white/55">
    Complete business setup guidance along with professional training.
  </p>
</motion.div>
              </div>

            </div>

          </motion.div>


          {/* =================================================
              INVESTMENT NOTE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-center"
          >

            <p className="text-[11px] tracking-wide text-white/40">
              Investment: ₹1,00,000 + GST
            </p>

          </motion.div>


          {/* =================================================
              PACKAGE HIGHLIGHTS
          ================================================= */}

          <div className="mt-14 grid gap-5 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "RAW MATERIAL",
                text: "₹50,000",
              },
              {
                number: "02",
                title: "TOOL KIT",
                text: "₹25,000",
              },
              {
                number: "03",
                title: "DISPLAY KIT",
                text: "₹5,000",
              },
                {
                number: "04",
                title: "Bussiness and Installation Training",
                text: "₹20,000",
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
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                }}
                className="glass-gold p-7"
              >

                <div className="flex items-center justify-between">

                  <span className="font-luxury text-3xl font-bold text-luxury-gold/40">
                    {item.number}
                  </span>

                  <span className="h-px w-10 bg-luxury-gold/50" />

                </div>


                <h3 className="mt-6 font-luxury text-sm font-bold tracking-[0.18em] text-gold-300">
                  {item.title}
                </h3>


                <p className="mt-3 font-luxury text-2xl font-bold text-white">
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
      {/* =====================================================
          WHY PARTNER WITH NOOH
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          {/* Heading */}
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

              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-luxury-gold">
                WHY PARTNER WITH NOOH
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              Build With{" "}
              <span className="text-gold-300">
                Confidence
              </span>
            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

          </motion.div>


          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            {[
              {
                title: "Trusted Brand",
                description:
                  "High-quality products with proven market demand.",
              },
              {
                title: "High Profit Potential",
                description:
                  "Excellent margins and recurring business opportunities.",
              },
              {
                title: "Complete Support",
                description:
                  "Training, marketing, installation guidance and after-sales support.",
              },
              {
                title: "Exclusive Territory",
                description:
                  "One City, One Dealership — you are the only one.",
              },
              {
                title: "Timely Supply",
                description:
                  "Consistent product availability and fast delivery.",
              },
            ].map((item, index) => (

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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="glass-gold p-7 text-center transition-all duration-500"
              >

                {/* Icon */}
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-luxury-gold/40 text-xl text-luxury-gold">
                  ✦
                </div>


                {/* Title */}
                <h3 className="mt-6 font-luxury text-xl font-bold text-gold-300">
                  {item.title}
                </h3>


                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
        
            {/* =====================================================
          WHAT YOU GET
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

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

              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-luxury-gold">
                WHAT YOU GET
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              Everything You Need{" "}
              <span className="text-gold-300">
                To Begin
              </span>
            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

          </motion.div>


          {/* =================================================
              BENEFIT CARDS
          ================================================= */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">

            {[
              {
                number: "01",
                title: "High Quality Products",
                description:
                  "Access high-quality NOOH products designed to meet market demand.",
              },
              {
                number: "02",
                title: "Training & Installation Support",
                description:
                  "Receive training and installation guidance to help you and your team get started.",
              },
              {
                number: "03",
                title: "Marketing & Promotional Support",
                description:
                  "Get marketing and promotional support to help build your local NOOH presence.",
              },
              {
                number: "04",
                title: "Best Price Advantage",
                description:
                  "Benefit from the best price advantage available through the dealership program.",
              },
              {
                number: "05",
                title: "Dedicated Support",
                description:
                  "Receive dedicated support from the NOOH team throughout your business journey.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -7,
                }}
                className="glass-gold p-7 transition-all duration-500"
              >

                {/* Number */}
                <div className="flex items-center justify-between">

                  <span className="font-luxury text-3xl font-bold text-luxury-gold/40">
                    {item.number}
                  </span>


                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                    ✦
                  </div>

                </div>


                {/* Gold Line */}
                <div className="mt-6 h-px w-10 bg-luxury-gold/60" />


                {/* Title */}
                <h3 className="mt-6 font-luxury text-xl font-bold text-gold-300">
                  {item.title}
                </h3>


                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          EXCLUSIVE TERRITORY
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <div className="grid items-center gap-12 lg:grid-cols-2">


            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              {/* Label */}
              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-12 bg-luxury-gold/60" />

                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-luxury-gold">
                  EXCLUSIVE TERRITORY
                </span>

              </div>


              {/* Heading */}
              <h2 className="font-luxury text-4xl font-bold leading-tight md:text-5xl">

                One City.
                <br />

                <span className="text-gold-300">
                  One Dealership.
                </span>

              </h2>


              {/* Gold Line */}
              <div className="mt-7 h-[2px] w-14 bg-luxury-gold" />


              {/* Description */}
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                Operate exclusively in your assigned city and become
                the sole NOOH representative in your territory.
              </p>


              {/* Highlight */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
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
                  delay: 0.2,
                }}
                className="glass-gold mt-8 border-l-2 border-luxury-gold p-6"
              >

                <p className="font-luxury text-xl font-bold text-white">
                  Your City. Your Territory.
                </p>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  Build your local presence with the NOOH brand
                  and grow your business within your assigned city.
                </p>

              </motion.div>

            </motion.div>


            {/* =================================================
                RIGHT IMAGE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative"
            >

              <div className="glass-gold overflow-hidden p-2">

                <div className="relative h-[380px] overflow-hidden">

                  <img
                    src="/franchaise-hero/dealership.png"
                    alt="NOOH Exclusive Dealership"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/45" />


                  {/* Center Badge */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.85,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                      className="flex h-40 w-40 flex-col items-center justify-center rounded-full border border-luxury-gold bg-black/70 text-center"
                    >

                      <span className="text-3xl text-luxury-gold">
                        ✦
                      </span>

                      <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                        ONE CITY
                      </span>

                      <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-gold-300">
                        ONE DEALERSHIP
                      </span>

                    </motion.div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>
            {/* =====================================================
          COMPLETE SUPPORT
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

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

              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-luxury-gold">
                COMPLETE SUPPORT
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              Support At{" "}
              <span className="text-gold-300">
                Every Step
              </span>
            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              From training and installation to marketing and
              after-sales support, NOOH stands with you throughout
              your dealership journey.
            </p>

          </motion.div>


          {/* =================================================
              SUPPORT GRID
          ================================================= */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                number: "01",
                title: "Training & Knowledge",
                description:
                  "Product, installation and business training to help you confidently represent NOOH.",
              },
              {
                number: "02",
                title: "Installation Support",
                description:
                  "Installation guidance and technical assistance to support smooth project execution.",
              },
              {
                number: "03",
                title: "Marketing Support",
                description:
                  "Marketing and promotional support to help build awareness and establish your local presence.",
              },
              {
                number: "04",
                title: "Supply Chain Support",
                description:
                  "Consistent product availability and timely supply to support your customer projects.",
              },
              {
                number: "05",
                title: "After-Sales Support",
                description:
                  "Continued assistance and customer support even after project installation.",
              },
              {
                number: "06",
                title: "Business Growth",
                description:
                  "Guidance and brand support to help you build and grow your NOOH dealership.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -7,
                }}
                className="glass-gold p-7 transition-all duration-500"
              >

                {/* Number + Icon */}
                <div className="flex items-center justify-between">

                  <span className="font-luxury text-3xl font-bold text-luxury-gold/40">
                    {item.number}
                  </span>


                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                    ✦
                  </div>

                </div>


                {/* Gold Line */}
                <div className="mt-6 h-px w-10 bg-luxury-gold/60" />


                {/* Title */}
                <h3 className="mt-6 font-luxury text-xl font-bold text-gold-300">
                  {item.title}
                </h3>


                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO CAN JOIN
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <div className="grid items-center gap-12 lg:grid-cols-2">


            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -35,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >

              {/* Label */}
              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-12 bg-luxury-gold/60" />

                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-luxury-gold">
                  WHO CAN JOIN
                </span>

              </div>


              {/* Heading */}
              <h2 className="font-luxury text-4xl font-bold leading-tight md:text-5xl">
                Is NOOH Dealership
                <br />

                <span className="text-gold-300">
                  Right For You?
                </span>
              </h2>


              {/* Gold Line */}
              <div className="mt-7 h-[2px] w-14 bg-luxury-gold" />


              {/* Description */}
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                The NOOH Dealership opportunity is designed for
                entrepreneurs and professionals who are passionate
                about quality products and customer satisfaction.
              </p>


              {/* Highlight */}
              <div className="glass-gold mt-8 border-l-2 border-luxury-gold p-6">

                <p className="font-luxury text-xl font-bold text-white">
                  Build. Represent. Grow.
                </p>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  Become part of the NOOH business network and
                  build your presence in your city.
                </p>

              </div>

            </motion.div>


            {/* =================================================
                RIGHT — PROFESSIONAL TYPES
            ================================================= */}

            <div className="grid grid-cols-2 gap-5">

              {[
                {
                  title: "Retailers",
                  icon: "◈",
                },
                {
                  title: "Interior Designers",
                  icon: "✦",
                },
                {
                  title: "Architects",
                  icon: "◇",
                },
                {
                  title: "Civil Engineers",
                  icon: "⌂",
                },
                {
                  title: "Contractors",
                  icon: "▣",
                },
                {
                  title: "Entrepreneurs",
                  icon: "◆",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.title}
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
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="glass-gold p-6 text-center transition-all duration-500"
                >

                  {/* Icon */}
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
                    {item.icon}
                  </div>


                  {/* Title */}
                  <h3 className="mt-5 font-luxury text-lg font-bold text-gold-300">
                    {item.title}
                  </h3>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>
            {/* =====================================================
          HOW TO JOIN
      ===================================================== */}

      <section
        id="how-to-join"
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

              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-luxury-gold">
                HOW TO JOIN
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              Your Journey With{" "}
              <span className="text-gold-300">
                NOOH
              </span>
            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />


            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              Four simple steps to begin your dealership journey
              with NOOH.
            </p>

          </motion.div>


          {/* =================================================
              FOUR STEPS
          ================================================= */}

          <div className="relative">

            {/* Connecting Line — Desktop */}
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-luxury-gold/30 lg:block" />


            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  number: "01",
                  title: "Apply",
                  description:
                    "Submit your interest and basic details to begin your dealership journey with NOOH.",
                },
                {
                  number: "02",
                  title: "Discussion",
                  description:
                    "Connect with the NOOH team and discuss the dealership opportunity and your business requirements.",
                },
                {
                  number: "03",
                  title: "Agreement",
                  description:
                    "Complete the agreement and investment process to officially begin your association with NOOH.",
                },
                {
                  number: "04",
                  title: "Get Started",
                  description:
                    "Receive your setup and training and start building your NOOH dealership business.",
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
                    delay: index * 0.1,
                  }}
                  className="relative text-center"
                >

                  {/* Number */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-luxury-gold bg-luxury-black font-luxury text-xl font-bold text-luxury-gold">
                    {item.number}
                  </div>


                  {/* Step Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-gold mt-7 p-7 transition-all duration-500"
                  >

                    <h3 className="font-luxury text-2xl font-bold text-gold-300">
                      {item.title}
                    </h3>


                    <div className="mx-auto mt-5 h-px w-10 bg-luxury-gold/60" />


                    <p className="mt-5 text-sm leading-7 text-white/60">
                      {item.description}
                    </p>

                  </motion.div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto max-w-5xl">

          {/* =================================================
              FAQ HEADING
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

              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-luxury-gold">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              Dealership{" "}
              <span className="text-gold-300">
                FAQ
              </span>
            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

          </motion.div>


          {/* =================================================
              FAQ ITEMS
          ================================================= */}

          <div className="space-y-4">

            {[
              {
                question: "Is there any renewal fee?",
                answer:
                  "The dealership program is presented as a one-time investment, with no renewal fee mentioned in the program information.",
              },
              {
                question: "Will I get exclusive rights?",
                answer:
                  "Yes. The dealership program follows the One City, One Dealership model, providing an exclusive territory for the assigned city.",
              },
              {
                question: "Do you provide training?",
                answer:
                  "Yes. NOOH provides product, installation and business training to help you and your team get started.",
              },
              {
                question: "What support will I receive?",
                answer:
                  "The dealership program includes marketing, installation, supply and after-sales support.",
              },
              {
                question: "Who can become a NOOH dealer?",
                answer:
                  "The opportunity is designed for entrepreneurs and professionals interested in building a NOOH business and serving customers with quality products.",
              },
            ].map((item, index) => (

              <motion.details
                key={item.question}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  delay: index * 0.08,
                }}
                className="glass-gold group overflow-hidden"
              >

                {/* Question */}
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 md:p-7">

                  <span className="font-luxury text-lg font-bold text-white transition-colors duration-300 group-hover:text-gold-300 md:text-xl">
                    {item.question}
                  </span>


                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-luxury-gold/40 text-xl font-light text-luxury-gold transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>

                </summary>


                {/* Answer */}
                <div className="border-t border-luxury-gold/15 px-6 pb-6 pt-5 md:px-7">

                  <p className="text-sm leading-7 text-white/60">
                    {item.answer}
                  </p>

                </div>

              </motion.details>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-luxury-black px-6 py-24 text-center">

        {/* Subtle Gold Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/5 blur-[120px]" />


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

            {/* Label */}
            <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-luxury-gold">
              PARTNER WITH NOOH
            </p>


            {/* Heading */}
            <h2 className="mt-6 font-luxury text-4xl font-bold text-white md:text-6xl">
              Build Your Business.
            </h2>


            <p className="mt-3 font-luxury text-2xl font-bold text-gold-300 md:text-3xl">
              Grow With NOOH.
            </p>


            {/* Gold Line */}
            <div className="mx-auto mt-7 h-[2px] w-14 bg-luxury-gold" />


            {/* Description */}
            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Take the next step towards building your own NOOH
              dealership and growing your business in your city.
            </p>


            {/* Buttons */}
            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                to="/franchise/dealershipform"
                className="group inline-flex items-center gap-3 bg-[#d6af45] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
              >
                Become A Dealer

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>


              <Link
                to="/franchise"
                className="group inline-flex items-center gap-3 border border-luxury-gold/50 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-luxury-gold hover:text-black"
              >
                Back To Opportunities

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </motion.div>

        </div>

      </section>


    </div>
  );
};

export default Dealership;