import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dealership = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[560px] overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">

          <img
            src="/franchaise-hero/dealership-hero.png"
            alt="NOOH dealer Program"
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Premium Gradient */}
          <div className="absolute inset-0 " />

        </div>


        {/* Gold Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-[#d6af45]" />


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="relative z-10 flex min-h-[560px] items-center justify-center px-6 text-center">

          <div className="mx-auto max-w-5xl mt-96">
            {/* Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
              className="mt-9 flex flex-wrap justify-center gap-4"
            >

              {/* Investment */}
          <Link
    to="/franchise/dealershipform"
    className="group inline-flex items-center gap-3 bg-[#d6af45] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
>
  Become a Dealer

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>

              
{/* PDF Download */}
<a
  href="/FRANCHISE_BUSINESS_PARTNER.pdf"
  download="FRANCHISE_BUSINESS_PARTNER.pdf"
  className="group inline-flex items-center gap-3 bg-[#d6af45] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
>
  Download PDF

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
    DEALERSHIP OPPORTUNITY
===================================================== */}

<section
  id="dealership-opportunity"
  className="section-padding bg-luxury-black"
>

  <div className="container-custom mx-auto">

    {/* Section Heading */}
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
          DEALERSHIP OPPORTUNITY
        </span>

        <span className="h-px w-12 bg-luxury-gold/60" />

      </div>


      <h2 className="font-luxury text-4xl font-bold md:text-5xl">
        Grow With{" "}
        <span className="text-gold-300">
          NOOH
        </span>
      </h2>


      <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

    </motion.div>


    {/* Main Card */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-gold overflow-hidden"
    >

      <div className="grid lg:grid-cols-2">

        {/* LEFT — PROGRAM */}
        <div className="border-b border-luxury-gold/20 p-10 lg:border-b-0 lg:border-r">

          <div className="flex items-start gap-5">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
              01
            </div>

            <div>

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                DEALERSHIP PROGRAM
              </span>

              <h3 className="mt-3 font-luxury text-2xl font-bold text-white">
                Build Your NOOH Business
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Designed for entrepreneurs who want to establish
                a complete NOOH business setup in their city.
              </p>

            </div>

          </div>


          {/* Eligibility */}

          <div className="mt-9 border-t border-luxury-gold/15 pt-7">

            <div className="flex items-start gap-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                ✓
              </div>

              <div>

                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                  ELIGIBILITY
                </span>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-white/60">

                  <li>• GST Registration — Mandatory</li>

                  <li>• Small Office or Showroom</li>

                  <li>• Basic knowledge of Interior Decoration Industry</li>

                  <li>• Passion to build a premium interior business</li>

                </ul>

              </div>

            </div>

          </div>

        </div>


        {/* RIGHT — INVESTMENT */}

        <div className="flex items-center justify-center p-10">

          <div className="w-full max-w-sm border border-luxury-gold/40 p-8 text-center">

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
              DEALERSHIP INVESTMENT
            </span>

            <div className="mt-6">

              <span className="font-luxury text-4xl font-bold text-white md:text-5xl">
                ₹1,00,000
              </span>

              <span className="ml-2 text-xl font-bold text-gold-300">
                + GST
              </span>

            </div>

            <div className="mx-auto mt-6 h-[2px] w-16 bg-luxury-gold" />

            <p className="mt-5 text-sm leading-6 text-white/50">
              One-time investment to establish your
              NOOH dealership in your city.
            </p>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>


{/* =====================================================
    DEALERSHIP BENEFITS
===================================================== */}

<section
  id="dealership-benefits"
  className="section-padding bg-luxury-black"
>

  <div className="container-custom mx-auto">

    {/* Section Heading */}
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
          WHAT YOU RECEIVE
        </span>

        <span className="h-px w-12 bg-luxury-gold/60" />

      </div>


      <h2 className="font-luxury text-4xl font-bold md:text-5xl">
        Dealership{" "}
        <span className="text-gold-300">
          Benefits
        </span>
      </h2>


      <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

    </motion.div>


    {/* Benefits Grid */}

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {[
        {
          number: "01",
          icon: "◈",
          title: "Raw Material",
          value: "₹50,000",
          text: "Worth of raw material included in the dealership package.",
        },

        {
          number: "02",
          icon: "⚒",
          title: "Professional Tool Kit",
          value: "₹25,000",
          text: "Professional installation tool kit worth ₹25,000.",
        },

        {
          number: "03",
          icon: "▣",
          title: "Display Kit",
          value: "₹5,000",
          text: "Stretch Ceiling Display Kit worth ₹5,000.",
        },

        {
          number: "04",
          icon: "✦",
          title: "Professional Training",
          value: "₹20,000 Worth",
          text: "One person — Complete Installation Training. One person — Business Development & Sales Training.",
        },

        {
          number: "05",
          icon: "◉",
          title: "Dedicated Manager",
          text: "Every dealer receives a dedicated relationship manager for technical support, project queries, material guidance, order processing, business assistance and customer support.",
        },

        {
          number: "06",
          icon: "✦",
          title: "Official Authorization",
          text: "Dealers receive Authorized Dealership Certificate, Raw Material Price List and Dealer Support Documents.",
        },

        {
          number: "07",
          icon: "◇",
          title: "Material Purchase",
          text: "Dealers can purchase raw materials at dealer prices according to the official company price list.",
        },

        {
          number: "08",
          icon: "⌖",
          title: "Exclusive Territory",
          text: "One City — One Authorized Dealership. Exclusive dealership rights are provided city-wise, subject to company approval.",
        },
   
// =================================================
// ADDITIONAL ADVANTAGES
// =================================================

{
  number: "09",
  icon: "◎",
  title: "Company Website Visibility",
  text:
    "Your dealer name and city will be showcased on the official NOOH company website.",
},

{
  number: "10",
  icon: "↗",
  title: "100% Profit & Margin",
  text:
    "Associates and dealers can earn 100% profit and margin on material and services. ",
},



{
  number: "11",
  icon: "◫",
  title: "Product Training & Upgradation",
  text:
    "Receive regular product training and timely updates on new products, technologies and solutions.", 
},

{
  number: "12",
  icon: "◇",
  title: "Business Development",
  text:
    "Get access to regular business development guidance and training programs designed.",
},

{
  number: "13",
  icon: "⚒",
  title: "Installation Support",
  text:
    "Get professional installation support from experienced company technicians whenever required.",
},
  
{
  number: "14",
  icon: "◈",
  title: "Skilled Technician Training",
  text: "Professional training to develop skilled technicians for NOOH product installation, technical execution and on-site project requirements.",
},



      ].map((item, index) => (

        <motion.div
          key={item.number}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
          }}
          whileHover={{ y: -5 }}
          className="glass-gold p-7"
        >

          <div className="flex items-center justify-between">

            <span className="text-[10px] font-bold tracking-[0.2em] text-luxury-gold">
              {item.number}
            </span>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
              {item.icon}
            </div>

          </div>


          <h3 className="mt-6 font-luxury text-lg font-bold text-white">
            {item.title}
          </h3>


          {item.value && (
            <p className="mt-3 font-luxury text-xl font-bold text-gold-300">
              {item.value}
            </p>
          )}


          <p className="mt-4 text-sm leading-6 text-white/55">
            {item.text}
          </p>

        </motion.div>

      ))}

    </div>
      

  </div>

</section>


{/* =====================================================
    DEALER MATERIAL & PRICING
===================================================== */}

<section
  id="dealer-material-pricing"
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
          DEALER MATERIALS
        </span>

        <span className="h-px w-12 bg-luxury-gold/60" />

      </div>


      <h2 className="font-luxury text-4xl font-bold md:text-5xl">

        Stretch Ceiling{" "}

        <span className="text-gold-300">
          Material & Pricing
        </span>

      </h2>


      <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

    </motion.div>



    {/* =================================================
        MAIN CARD
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-gold overflow-hidden"
    >

      <div className="grid gap-0 lg:grid-cols-[1.55fr_0.8fr]">


        {/* =================================================
            LEFT — PRODUCT LIST & PRICING
        ================================================= */}

        <div className="border-b border-luxury-gold/20 p-6 md:p-8 lg:border-b-0 lg:border-r">


          {/* Product List Header */}

          <div className="mb-7">

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
              PRODUCT LIST & PRICING
            </span>

            <h3 className="mt-3 font-luxury text-2xl font-bold text-white">
              Dealer Price List
            </h3>

            <div className="mt-4 h-[2px] w-12 bg-luxury-gold" />

          </div>



          {/* =================================================
              FABRIC MATERIALS
          ================================================= */}

          <div className="overflow-hidden border border-luxury-gold/20">

            {/* Header */}

            <div className="flex items-center gap-4 border-b border-luxury-gold/20 px-5 py-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
                ◈
              </div>

              <h4 className="font-luxury text-base font-bold uppercase tracking-wide text-white">
                Fabric Materials
              </h4>

            </div>


            {/* Rows */}

            <div>

              {[
                ["White Fabric 120 Inch", "₹35 – 45", "/ Sqft"],
                ["White Fabric 196 Inch", "₹45 – 55", "/ Sqft"],
                ["UV Printed Fabric 120 Inch", "₹55 – 65", "/ Sqft"],
                ["UV Printed Fabric 196 Inch", "₹80 – 90", "/ Sqft"],
                ["UV Printed Fabric 196 Inch", "₹120", "/ Sqft"],
              ].map(([name, price, unit], index) => (

                <div
                  key={`${name}-${index}`}
                  className="group flex items-center justify-between gap-4 border-b border-luxury-gold/10 px-5 py-3.5 transition-all duration-300 last:border-b-0 hover:bg-luxury-gold/5"
                >

                  <div className="flex items-center gap-2">

                    {(index === 3 || index === 4) && (
                      <span className="rounded bg-luxury-gold px-1.5 py-0.5 text-[7px] font-bold uppercase text-black">
                        NEW
                      </span>
                    )}

                    <span className="text-sm text-white/65 transition-colors duration-300 group-hover:text-white">
                      {name}
                    </span>

                  </div>


                  <div className="shrink-0">

                    <span className="font-semibold text-gold-300">
                      {price}
                    </span>

                    <span className="ml-1 text-xs text-white/40">
                      {unit}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>



          {/* =================================================
              LED COMPONENTS
          ================================================= */}

          <div className="mt-5 overflow-hidden border border-luxury-gold/20">

            {/* Header */}

            <div className="flex items-center gap-4 border-b border-luxury-gold/20 px-5 py-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
                ◉
              </div>

              <h4 className="font-luxury text-base font-bold uppercase tracking-wide text-white">
                LED Components
              </h4>

            </div>


            {/* Rows */}

            <div>

              {[
                ["LED Direct Block Light", "₹35", "/ Pcs"],
                ["LED 8 Eye Block Light", "₹75", "/ Pcs", "Dimmable & Tunable"],
                ["RGBW 6 Eye Block LED", "₹75", "/ Pcs", "NEW"],
                ["LED Block Light Controller", "₹1250", "/ Pcs"],
                ["LED Block Light Remote", "₹850", "/ Pcs"],
              ].map(([name, price, unit, tag], index) => (

                <div
                  key={`${name}-${index}`}
                  className="group flex items-center justify-between gap-4 border-b border-luxury-gold/10 px-5 py-3.5 transition-all duration-300 last:border-b-0 hover:bg-luxury-gold/5"
                >

                  <div>

                    <div className="flex flex-wrap items-center gap-2">

                      <span className="text-sm text-white/65 transition-colors duration-300 group-hover:text-white">
                        {name}
                      </span>


                      {tag === "NEW" && (
                        <span className="rounded bg-luxury-gold px-1.5 py-0.5 text-[7px] font-bold uppercase text-black">
                          NEW
                        </span>
                      )}

                    </div>


                    {tag === "Dimmable & Tunable" && (
                      <span className="mt-1 block text-[10px] text-white/35">
                        ({tag})
                      </span>
                    )}

                  </div>


                  <div className="shrink-0">

                    <span className="font-semibold text-gold-300">
                      {price}
                    </span>

                    <span className="ml-1 text-xs text-white/40">
                      {unit}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>



          {/* =================================================
              INSTALLATION ACCESSORIES
          ================================================= */}

          <div className="mt-5 overflow-hidden border border-luxury-gold/20">

            {/* Header */}

            <div className="flex items-center gap-4 border-b border-luxury-gold/20 px-5 py-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
                ⚒
              </div>

              <h4 className="font-luxury text-base font-bold uppercase tracking-wide text-white">
                Installation Accessories
              </h4>

            </div>


            {/* Rows */}

            <div>

              {[
                ["Profile PVC 48 Inch", "₹50", "/ Running Foot"],
                ["Harpoon", "₹15", "/ Running Foot"],
              ].map(([name, price, unit]) => (

                <div
                  key={name}
                  className="group flex items-center justify-between gap-4 border-b border-luxury-gold/10 px-5 py-3.5 transition-all duration-300 last:border-b-0 hover:bg-luxury-gold/5"
                >

                  <span className="text-sm text-white/65 transition-colors duration-300 group-hover:text-white">
                    {name}
                  </span>


                  <div className="shrink-0">

                    <span className="font-semibold text-gold-300">
                      {price}
                    </span>

                    <span className="ml-1 text-xs text-white/40">
                      {unit}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>



          {/* =================================================
              PREMIUM PRODUCT
          ================================================= */}

          <div className="mt-5 overflow-hidden border border-luxury-gold/20">

            {/* Header */}

            <div className="flex items-center gap-4 border-b border-luxury-gold/20 px-5 py-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
                ◆
              </div>

              <h4 className="font-luxury text-base font-bold uppercase tracking-wide text-white">
                Premium Product
              </h4>

            </div>


            <div className="flex items-center justify-between gap-4 px-5 py-4">

              <span className="text-sm text-white/65">
                2×2 Backlit Printed Panel
              </span>


              <div className="shrink-0">

                <span className="font-semibold text-gold-300">
                  ₹1800
                </span>

                <span className="ml-1 text-xs text-white/40">
                  / Panel
                </span>

              </div>

            </div>

          </div>

        </div>



        {/* =================================================
            RIGHT — WHY CHOOSE OUR MATERIALS
        ================================================= */}

        <div className="p-6 md:p-8">


          {/* Heading */}

          <div className="mb-8">

            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
              WHY CHOOSE US
            </span>

            <h3 className="mt-3 font-luxury text-2xl font-bold text-white">

              Why Choose Our{" "}

              <span className="text-gold-300">
                Materials?
              </span>

            </h3>

            <div className="mt-4 h-[2px] w-12 bg-luxury-gold" />

          </div>



          {/* =================================================
              BENEFITS
          ================================================= */}

          <div className="space-y-4">

            {[
              {
                icon: "✦",
                title: "Premium Quality Guaranteed",
                text: "Quality-focused materials for premium projects.",
              },

              {
                icon: "▣",
                title: "Factory Direct Pricing",
                text: "Competitive dealer pricing directly from the source.",
              },

              {
                icon: "◈",
                title: "Consistent Stock Supply",
                text: "Reliable availability to support your ongoing projects.",
              },

              {
                icon: "➜",
                title: "Fast & Safe Delivery",
                text: "Efficient and secure material delivery.",
              },

              {
                icon: "◉",
                title: "Technical Support",
                text: "Professional technical assistance whenever required.",
              },

            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  x: 4,
                }}
                className="group flex gap-4 border border-luxury-gold/20 p-5 transition-all duration-300 hover:border-luxury-gold/50 hover:bg-luxury-gold/5"
              >

                {/* Icon */}

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-luxury-gold/40 text-white/70 transition-all duration-300 group-hover:text-luxury-gold">
                  {item.icon}
                </div>


                {/* Text */}

                <div>

                  <h4 className="font-luxury text-base font-bold text-white transition-colors duration-300 group-hover:text-gold-300">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-white/45">
                    {item.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>



          {/* =================================================
              SUPPORT FEATURES
          ================================================= */}

          <div className="mt-8 border-t border-luxury-gold/15 pt-7">

            <div className="grid grid-cols-3 gap-3">


              {/* Installation */}

              <div className="text-center">

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                  ⚒
                </div>

                <p className="mt-3 text-[9px] font-semibold uppercase leading-4 tracking-wide text-white/60">
                  Professional
                  <br />
                  Installation Support
                </p>

              </div>


              {/* Training */}

              <div className="border-x border-luxury-gold/15 px-2 text-center">

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                  ◉
                </div>

                <p className="mt-3 text-[9px] font-semibold uppercase leading-4 tracking-wide text-white/60">
                  Training &
                  <br />
                  Workshop
                </p>

              </div>


              {/* Catalog */}

              <div className="text-center">

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                  ▣
                </div>

                <p className="mt-3 text-[9px] font-semibold uppercase leading-4 tracking-wide text-white/60">
                  Free
                  <br />
                  Dealership Catalog
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>


{/* =====================================================
    OUR DEALERSHIPS
===================================================== */}

<section
  id="our-dealerships"
  className="section-padding bg-luxury-black"
>
  <div className="container-custom mx-auto">

    {/* =================================================
        SECTION HEADER
    ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-12 text-center"
    >
      <div className="mb-5 flex items-center justify-center gap-4">

        <span className="h-px w-12 bg-luxury-gold/60" />

        <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
          NOOH NETWORK
        </span>

        <span className="h-px w-12 bg-luxury-gold/60" />

      </div>

      <h2 className="font-luxury text-4xl font-bold md:text-5xl">
        Our{" "}
        <span className="text-gold-300">
          Dealerships
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/50 md:text-base">
        Find our authorized dealership locations across different cities.
      </p>

      <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

    </motion.div>


    {/* =================================================
        DEALERSHIP DATA
    ================================================= */}

    {(() => {

      const dealerships = [
  {
    id: 1,
    name: "Shree Balaji Traders",
    location: "Panipat, Haryana",
    state: "Haryana",
    city: "Panipat",
    lat: 29.3909,
    lng: 76.9635,
  },
  {
    id: 2,
    name: "Kumar Sales Corporation",
    location: "Jaipur, Rajasthan",
    state: "Rajasthan",
    city: "Jaipur",
    lat: 26.9124,
    lng: 75.7873,
  },
  {
    id: 3,
    name: "Maa Durga Automobiles",
    location: "Lucknow, Uttar Pradesh",
    state: "Uttar Pradesh",
    city: "Lucknow",
    lat: 26.8467,
    lng: 80.9462,
  },
  {
    id: 4,
    name: "Shiv Shakti Agencies",
    location: "New Delhi, Delhi",
    state: "Delhi",
    city: "New Delhi",
    lat: 28.6139,
    lng: 77.209,
  },
  {
    id: 5,
    name: "Gupta Automobiles",
    location: "Ahmedabad, Gujarat",
    state: "Gujarat",
    city: "Ahmedabad",
    lat: 23.0225,
    lng: 72.5714,
  },
  {
    id: 6,
    name: "S.S. Industrial Solutions",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    city: "Mumbai",
    lat: 19.076,
    lng: 72.8777,
  },
  {
    id: 7,
    name: "R.K. Enterprises",
    location: "Bengaluru, Karnataka",
    state: "Karnataka",
    city: "Bengaluru",
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    id: 8,
    name: "Jai Mata Di Traders",
    location: "Kolkata, West Bengal",
    state: "West Bengal",
    city: "Kolkata",
    lat: 22.5726,
    lng: 88.3639,
  },
  {
    id: 9,
    name: "Om Sai Agencies",
    location: "Hyderabad, Telangana",
    state: "Telangana",
    city: "Hyderabad",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    id: 10,
    name: "NOOH Living Solutions",
    location: "Chandigarh, Chandigarh",
    state: "Chandigarh",
    city: "Chandigarh",
    lat: 30.7333,
    lng: 76.7794,
  },
  {
    id: 11,
    name: "Elite Space Traders",
    location: "Kochi, Kerala",
    state: "Kerala",
    city: "Kochi",
    lat: 9.9312,
    lng: 76.2673,
  },
  {
    id: 12,
    name: "Prime Interior Solutions",
    location: "Pune, Maharashtra",
    state: "Maharashtra",
    city: "Pune",
    lat: 18.5204,
    lng: 73.8567,
  },
];


      const [search, setSearch] = useState("");
      const [stateFilter, setStateFilter] = useState("All States");
      const [cityFilter, setCityFilter] = useState("All Cities");
      const [currentPage, setCurrentPage] = useState(1);
      const [selectedDealer, setSelectedDealer] = useState(dealerships[0]);

      const itemsPerPage = 6;


      /* =================================================
          STATES
      ================================================= */

      const states = [
        "All States",
        ...new Set(dealerships.map((dealer) => dealer.state)),
      ];


      /* =================================================
          CITIES
      ================================================= */

      const cities = [
        "All Cities",
        ...new Set(
          dealerships
            .filter(
              (dealer) =>
                stateFilter === "All States" ||
                dealer.state === stateFilter
            )
            .map((dealer) => dealer.city)
        ),
      ];


      /* =================================================
          FILTER
      ================================================= */

      const filteredDealers = dealerships.filter((dealer) => {

        const searchMatch =
          dealer.name.toLowerCase().includes(search.toLowerCase()) ||
          dealer.location.toLowerCase().includes(search.toLowerCase());

        const stateMatch =
          stateFilter === "All States" ||
          dealer.state === stateFilter;

        const cityMatch =
          cityFilter === "All Cities" ||
          dealer.city === cityFilter;

        return searchMatch && stateMatch && cityMatch;

      });


      /* =================================================
          PAGINATION
      ================================================= */

      const totalPages = Math.ceil(
        filteredDealers.length / itemsPerPage
      );

      const startIndex =
        (currentPage - 1) * itemsPerPage;

      const visibleDealers =
        filteredDealers.slice(
          startIndex,
          startIndex + itemsPerPage
        );


      /* =================================================
          RESET PAGE
      ================================================= */

      const handleSearch = (value) => {
        setSearch(value);
        setCurrentPage(1);
      };

      const handleState = (value) => {
        setStateFilter(value);
        setCityFilter("All Cities");
        setCurrentPage(1);
      };

      const handleCity = (value) => {
        setCityFilter(value);
        setCurrentPage(1);
      };


      return (
        <>

          {/* =================================================
              SEARCH & FILTER
          ================================================= */}

          <div className="mb-8">

            <div className="grid gap-3 md:grid-cols-[1.5fr_1fr_1fr_auto]">

              {/* Search */}

              <div className="relative">

                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
                  ⌕
                </span>

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    handleSearch(e.target.value)
                  }
                  placeholder="Search by Business Name or City"
                  className="h-12 w-full border border-luxury-gold/20 bg-white/[0.03] pl-11 pr-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-luxury-gold/60"
                />

              </div>


              {/* State */}

              <select
                value={stateFilter}
                onChange={(e) =>
                  handleState(e.target.value)
                }
                className="h-12 border border-luxury-gold/20 bg-[#111] px-4 text-sm text-white/60 outline-none focus:border-luxury-gold/60"
              >

                {states.map((state) => (
                  <option
                    key={state}
                    value={state}
                    className="bg-[#111] text-white"
                  >
                    {state}
                  </option>
                ))}

              </select>


              {/* City */}

              <select
                value={cityFilter}
                onChange={(e) =>
                  handleCity(e.target.value)
                }
                className="h-12 border border-luxury-gold/20 bg-[#111] px-4 text-sm text-white/60 outline-none focus:border-luxury-gold/60"
              >

                {cities.map((city) => (
                  <option
                    key={city}
                    value={city}
                    className="bg-[#111] text-white"
                  >
                    {city}
                  </option>
                ))}

              </select>


              {/* Search Button */}

              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className="h-12 bg-[#d6af45] px-7 text-[10px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
              >
                Search
              </button>

            </div>

          </div>


          {/* =================================================
              MAIN DEALERSHIP AREA
          ================================================= */}

          <div className="grid gap-7 lg:grid-cols-[1.8fr_0.75fr]">


            {/* =================================================
                LEFT — DEALERSHIP CARDS
            ================================================= */}

            <div>

              <div className="mb-5 flex items-center justify-between">

                <div>

                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-luxury-gold">
                    DEALERSHIP NETWORK
                  </span>

                  <h3 className="mt-2 font-luxury text-xl font-bold text-white">
                    Authorized Locations
                  </h3>

                </div>

                <div className="text-right">

                  <span className="text-xl font-bold text-gold-300">
                    {filteredDealers.length}
                  </span>

                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/30">
                    Dealerships
                  </p>

                </div>

              </div>


              {/* Cards */}

              <div className="grid gap-4 md:grid-cols-2">

                {visibleDealers.length > 0 ? (

                  visibleDealers.map((dealer, index) => (

                    <motion.button
                      key={dealer.id}
                      type="button"
                      onClick={() =>
                        setSelectedDealer(dealer)
                      }
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
                        delay: index * 0.05,
                      }}
                      whileHover={{
                        y: -4,
                      }}
                      className={`group w-full border p-5 text-left transition-all duration-300 ${
                        selectedDealer.id === dealer.id
                          ? "border-luxury-gold/70 bg-luxury-gold/[0.05]"
                          : "border-white/10 bg-white/[0.02] hover:border-luxury-gold/40"
                      }`}
                    >

                      <div className="flex items-start gap-4">

                        {/* Location Icon */}

                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            selectedDealer.id === dealer.id
                              ? "border-luxury-gold bg-luxury-gold text-black"
                              : "border-luxury-gold/30 text-luxury-gold group-hover:border-luxury-gold"
                          }`}
                        >
                          <span className="text-lg">
                            ◉
                          </span>
                        </div>


                        {/* Details */}

                        <div className="min-w-0">

                          <h4 className="font-luxury text-base font-bold text-white transition-colors duration-300 group-hover:text-gold-300">
                            {dealer.name}
                          </h4>

                          <p className="mt-2 text-sm leading-6 text-white/45">
                            {dealer.location}
                          </p>

                        </div>

                      </div>

                    </motion.button>

                  ))

                ) : (

                  <div className="border border-white/10 p-10 text-center md:col-span-2">

                    <p className="text-sm text-white/40">
                      No dealerships found.
                    </p>

                  </div>

                )}

              </div>


              {/* =================================================
                  PAGINATION
              ================================================= */}

              {totalPages > 1 && (

                <div className="mt-8 flex items-center justify-center gap-2">

                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.max(page - 1, 1)
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/50 transition hover:border-luxury-gold/50 hover:text-luxury-gold disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    ←
                  </button>


                  {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                  ).map((page) => (

                    <button
                      key={page}
                      type="button"
                      onClick={() =>
                        setCurrentPage(page)
                      }
                      className={`flex h-9 w-9 items-center justify-center border text-[10px] font-bold transition ${
                        currentPage === page
                          ? "border-luxury-gold bg-luxury-gold text-black"
                          : "border-white/10 text-white/50 hover:border-luxury-gold/50 hover:text-luxury-gold"
                      }`}
                    >
                      {page}
                    </button>

                  ))}


                  <button
                    type="button"
                    disabled={
                      currentPage === totalPages
                    }
                    onClick={() =>
                      setCurrentPage((page) =>
                        Math.min(
                          page + 1,
                          totalPages
                        )
                      )
                    }
                    className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/50 transition hover:border-luxury-gold/50 hover:text-luxury-gold disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    →
                  </button>

                </div>

              )}

            </div>


            {/* =================================================
                RIGHT — MAP + CTA
            ================================================= */}

            <div className="space-y-5">


              {/* MAP */}

              <div className="relative h-[430px] overflow-hidden border border-luxury-gold/20 bg-[#111]">

                <iframe
                  key={`${selectedDealer.lat}-${selectedDealer.lng}`}
                  title={`${selectedDealer.name} Location`}
                  src={`https://www.google.com/maps?q=${selectedDealer.lat},${selectedDealer.lng}&z=13&output=embed`}
                  className="h-full w-full border-0 grayscale-[25%]"
                  loading="lazy"
                />


                {/* Map Label */}

                <div className="pointer-events-none absolute left-4 top-4">

                  <div className="border border-luxury-gold/30 bg-black/80 px-4 py-3 backdrop-blur-md">

                    <p className="text-[8px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                      SELECTED LOCATION
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white">
                      {selectedDealer.city}
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  BECOME DEALER CTA
              ================================================= */}

           

            </div>

          </div>


          {/* =================================================
              BOTTOM NOTE
          ================================================= */}


        </>

      );

    })()}

  </div>
</section>

{/* =====================================================
    ABOUT NOOH
===================================================== */}


{/* =====================================================
    WHY PARTNER WITH NOOH
===================================================== */}

<section
  id="why-partner"
  className="section-padding bg-luxury-black"
>

  <div className="container-custom mx-auto">

    {/* Section Heading */}

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
          PARTNERSHIP
        </span>

        <span className="h-px w-12 bg-luxury-gold/60" />

      </div>


      <h2 className="font-luxury text-4xl font-bold md:text-5xl">
        Why Partner With{" "}
        <span className="text-gold-300">
          NOOH?
        </span>
      </h2>


      <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

    </motion.div>


    {/* Partner Benefits */}

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

      {[
        {
          icon: "✦",
          title: "Strong Brand Support",
        },

        {
          icon: "✓",
          title: "Quality Products",
        },

        {
          icon: "◉",
          title: "Complete Support System",
        },

        {
          icon: "↗",
          title: "High Business Potential",
        },

        {
          icon: "∞",
          title: "Long-Term Partnership",
        },

      ].map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.07,
          }}
          whileHover={{ y: -6 }}
          className="glass-gold p-8 text-center"
        >

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-luxury-gold/40 text-xl text-luxury-gold">
            {item.icon}
          </div>


          <h3 className="mt-6 font-luxury text-lg font-bold leading-6 text-white">
            {item.title}
          </h3>

        </motion.div>

      ))}

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