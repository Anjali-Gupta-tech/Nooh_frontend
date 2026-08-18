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



{/* =====================================================
    OUR DEALERSHIPS
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