import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Associate = () => {
  return (
    <div className="min-h-screen bg-luxury-black text-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[560px] overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">

          <img
            src="/franchaise-hero/associate.png"
            alt="NOOH Associate Program"
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

          <div className="mx-auto max-w-5xl">

            {/* Small Label */}
        

            {/* Main Heading */}
          

            {/* Gold Line */}
           
             


            {/* Tagline */}
         

            {/* Description */}
          

            {/* Buttons */}
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
            to="/franchise/associateform"
            className="group inline-flex items-center gap-3 bg-[#d6af45] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
          >
            Become a Associate
          
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          
                        {/* How It Works */}
                        <a
                          href="#how-it-works"
                          className="group inline-flex items-center gap-3 border border-luxury-gold/50 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-luxury-gold hover:text-black"
                        >
                          Download pdf
          
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </a>
          
                      </motion.div>
          
                    </div>
          

          </div>

        </div>

      </section>


      {/* =====================================================
          INVESTMENT OVERVIEW
      ===================================================== */}

      <section
        id="investment"
        className="section-padding bg-luxury-black"
      >

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
                INVESTMENT
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              Start With{" "}
              <span className="text-gold-300">
                NOOH
              </span>
            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

          </motion.div>


          {/* Investment Card */}
          <motion.div
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
              duration: 0.8,
            }}
            className="glass-gold overflow-hidden"
          >

            <div className="grid lg:grid-cols-2">

              {/* Left */}
              <div className="flex flex-col items-center justify-center border-b border-luxury-gold/20 p-10 text-center lg:border-b-0 lg:border-r">

                <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                  ONE-TIME INVESTMENT
                </span>


                <div className="mt-6">

                  <span className="font-luxury text-5xl font-bold text-white md:text-6xl">
                    ₹50,000
                  </span>

                  <span className="ml-2 text-xl font-bold text-gold-300">
                    + GST
                  </span>

                </div>


                <div className="mx-auto mt-7 h-[2px] w-16 bg-luxury-gold" />


                <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
                  Join the NOOH Associate Program with a
                  one-time investment of ₹50,000 + GST.
                </p>

              </div>


              {/* Right */}
              <div className="flex flex-col justify-center p-10">

                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                    ✦
                  </div>


                  <div>

                    <h3 className="font-luxury text-2xl font-bold text-gold-300">
                      Zero Royalty
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/60">
                      No recurring royalty is required under the
                      Associate Program.
                    </p>

                  </div>

                </div>


                <div className="mt-8 flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                    ✦
                  </div>


                  <div>

                    <h3 className="font-luxury text-2xl font-bold text-gold-300">
                      Dedicated Manager
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/60">
                      Get dedicated assistance for your projects,
                      quotations and coordination.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

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
                WHAT YOU GET
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              More Than Just{" "}
              <span className="text-gold-300">
                A Partnership
              </span>
            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />


            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              Build your business with the NOOH brand while we
              support you with the complete project journey.
            </p>

          </motion.div>


          {/* =================================================
              BENEFIT CARDS
          ================================================= */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Dedicated Manager",
                description:
                  "Get dedicated assistance for project coordination, quotations and business support.",
              },
              {
                number: "02",
                title: "Fixed Price System",
                description:
                  "Work with a structured pricing system that makes project discussions and quotations easier.",
              },
              {
                number: "03",
                title: "Complete Project Support",
                description:
                  "NOOH supports the project from quotation and execution through completion.",
              },
              {
                number: "04",
                title: "Zero Royalty",
                description:
                  "Join the Associate Program without recurring royalty obligations.",
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
          COMPLETE PROJECT SUPPORT
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <div className="grid items-center gap-12 lg:grid-cols-2">


            {/* =================================================
                LEFT — IMAGE
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
              className="relative order-2 lg:order-1"
            >

              <div className="glass-gold overflow-hidden p-2">

                <div className="relative h-[430px] overflow-hidden">

                  <img
                    src="/franchaise-hero/associate.png"
                    alt="NOOH Associate Project Support"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40" />


                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                        NOOH ASSOCIATE
                      </p>

                      <p className="mt-4 font-luxury text-3xl font-bold text-white md:text-4xl">
                        Complete Project
                      </p>

                      <p className="mt-1 font-luxury text-2xl font-bold text-gold-300">
                        Support
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>


            {/* =================================================
                RIGHT — CONTENT
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
              className="order-1 lg:order-2"
            >

              {/* Label */}
              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-12 bg-luxury-gold/60" />

                <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
                  COMPLETE PROJECT SUPPORT
                </span>

              </div>


              {/* Heading */}
              <h2 className="font-luxury text-4xl font-bold leading-tight md:text-5xl">

                You Bring The{" "}
                <span className="text-gold-300">
                  Opportunity.
                </span>

                <br />

                We Handle The{" "}
                <span className="text-gold-300">
                  Project.
                </span>

              </h2>


              {/* Gold Line */}
              <div className="mt-7 h-[2px] w-14 bg-luxury-gold" />


              {/* Description */}
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                As an Associate, you can focus on bringing projects
                and customers while NOOH supports the project with
                quotation, technical coordination and execution.
              </p>


              {/* Support Points */}
              <div className="mt-8 space-y-4">

                {[
                  "Quotation support",
                  "Technical project support",
                  "Project execution",
                  "Dedicated coordination",
                ].map((point, index) => (

                  <motion.div
                    key={point}
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
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-4"
                  >

                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-luxury-gold/40 text-xs text-luxury-gold">
                      ✓
                    </span>

                    <span className="text-sm text-white/75">
                      {point}
                    </span>

                  </motion.div>

                ))}

              </div>


              {/* Highlight */}
              <div className="glass-gold mt-8 border-l-2 border-luxury-gold p-6">

                <p className="font-luxury text-xl font-bold text-white">
                  Your Referral. Our Execution.
                </p>

                <p className="mt-2 text-sm leading-6 text-white/55">
                  Work together with NOOH to deliver a professional
                  project experience for your client.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>
            {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section
        id="how-it-works"
        className="section-padding bg-luxury-black"
      >

        <div className="container-custom mx-auto">

          {/* =================================================
              SECTION HEADING
          ================================================= */}

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
            className="mb-16 text-center"
          >

            <div className="mb-5 flex items-center justify-center gap-4">

              <span className="h-px w-12 bg-luxury-gold/60" />

              <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
                HOW IT WORKS
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              A Simple Path To{" "}
              <span className="text-gold-300">
                Success
              </span>
            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />


            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              Bring the opportunity to NOOH and let our team
              handle the project journey from quotation to execution.
            </p>

          </motion.div>


          {/* =================================================
              PROCESS FLOW
          ================================================= */}

          <div className="relative">

            {/* Connecting Line — Desktop */}
            <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent lg:block" />


            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">

              {[
                {
                  number: "01",
                  title: "You Refer",
                  description:
                    "Bring a potential client or project opportunity to NOOH.",
                },
                {
                  number: "02",
                  title: "We Quote",
                  description:
                    "NOOH prepares the quotation using the fixed-price system.",
                },
                {
                  number: "03",
                  title: "We Execute",
                  description:
                    "Our team handles the technical and project execution.",
                },
                {
                  number: "04",
                  title: "Client Satisfied",
                  description:
                    "The project is completed professionally for your client.",
                },
                {
                  number: "05",
                  title: "You Earn",
                  description:
                    "Earn from the successful project you referred to NOOH.",
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
                  className="relative text-center"
                >

                  {/* Number Circle */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-luxury-gold bg-luxury-black font-luxury text-xl font-bold text-luxury-gold"
                  >
                    {item.number}
                  </motion.div>


                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className="glass-gold mt-7 min-h-[220px] p-7 transition-all duration-500"
                  >

                    {/* Icon */}
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/40 text-sm text-luxury-gold">
                      ✦
                    </div>


                    {/* Title */}
                    <h3 className="mt-5 font-luxury text-xl font-bold text-gold-300">
                      {item.title}
                    </h3>


                    {/* Line */}
                    <div className="mx-auto mt-4 h-px w-8 bg-luxury-gold/60" />


                    {/* Description */}
                    <p className="mt-4 text-sm leading-6 text-white/60">
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
          BUSINESS MODEL HIGHLIGHT
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

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
              duration: 0.7,
            }}
            className="glass-gold overflow-hidden"
          >

            <div className="grid items-stretch lg:grid-cols-2">


              {/* =================================================
                  LEFT
              ================================================= */}

              <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden">

                <img
                  src="/franchaise-hero/associate.png"
                  alt="NOOH Associate Business Model"
                  className="absolute inset-0 h-full w-full object-cover"
                />


                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60" />


                {/* Content */}
                <div className="relative z-10 px-8 text-center">

                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                    THE ASSOCIATE MODEL
                  </p>


                  <h3 className="mt-5 font-luxury text-4xl font-bold text-white md:text-5xl">
                    Refer.
                  </h3>

                  <h3 className="font-luxury text-4xl font-bold text-gold-300 md:text-5xl">
                    Earn.
                  </h3>

                </div>

              </div>


              {/* =================================================
                  RIGHT
              ================================================= */}

              <div className="flex flex-col justify-center p-8 md:p-12">

                <div className="flex items-center gap-4">

                  <span className="h-px w-12 bg-luxury-gold/60" />

                  <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-luxury-gold">
                    BUSINESS OPPORTUNITY
                  </span>

                </div>


                <h2 className="mt-6 font-luxury text-3xl font-bold md:text-4xl">

                  Your Network.
                  <br />

                  <span className="text-gold-300">
                    Your Opportunity.
                  </span>

                </h2>


                <div className="mt-6 h-[2px] w-12 bg-luxury-gold" />


                <p className="mt-6 text-sm leading-7 text-white/60 md:text-base">
                  The Associate Program allows you to bring
                  projects to NOOH while our team supports the
                  quotation, technical coordination and execution.
                </p>


                {/* Key Points */}
                <div className="mt-8 space-y-4">

                  {[
                    "No recurring royalty",
                    "Dedicated project support",
                    "Fixed-price system",
                    "Professional execution",
                  ].map((point, index) => (

                    <motion.div
                      key={point}
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
                        delay: index * 0.08,
                      }}
                      className="flex items-center gap-4"
                    >

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-luxury-gold/40 text-xs text-luxury-gold">
                        ✓
                      </span>

                      <span className="text-sm text-white/75">
                        {point}
                      </span>

                    </motion.div>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>
            {/* =====================================================
          WHO CAN BECOME AN ASSOCIATE
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* =================================================
                LEFT — CONTENT
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

                <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
                  WHO CAN BECOME AN ASSOCIATE
                </span>

              </div>


              {/* Heading */}
              <h2 className="font-luxury text-4xl font-bold leading-tight md:text-5xl">

                Turn Your{" "}
                <span className="text-gold-300">
                  Network
                </span>

                <br />

                Into An{" "}
                <span className="text-gold-300">
                  Opportunity
                </span>

              </h2>


              {/* Gold Line */}
              <div className="mt-7 h-[2px] w-14 bg-luxury-gold" />


              {/* Description */}
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                The NOOH Associate Program is an opportunity for
                people who can connect customers and projects with
                premium interior and ceiling solutions.
              </p>


              {/* Highlight */}
              <div className="glass-gold mt-8 border-l-2 border-luxury-gold p-6">

                <p className="font-luxury text-xl font-bold text-white">
                  Bring The Client.
                </p>

                <p className="mt-1 font-luxury text-xl font-bold text-gold-300">
                  Let NOOH Handle The Project.
                </p>

                <p className="mt-3 text-sm leading-6 text-white/55">
                  Build an association with NOOH without having to
                  manage the complete project execution yourself.
                </p>

              </div>

            </motion.div>


            {/* =================================================
                RIGHT — ASSOCIATE TYPES
            ================================================= */}

            <div className="grid grid-cols-2 gap-5">

              {[
                {
                  title: "Interior Designers",
                  icon: "✦",
                },
                {
                  title: "Architects",
                  icon: "◇",
                },
                {
                  title: "Contractors",
                  icon: "▣",
                },
                {
                  title: "Consultants",
                  icon: "◈",
                },
                {
                  title: "Sales Professionals",
                  icon: "◆",
                },
                {
                  title: "Business Networks",
                  icon: "⌂",
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
                    y: -6,
                  }}
                  className="glass-gold p-6 text-center transition-all duration-500"
                >

                  {/* Icon */}
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold/40 text-lg text-luxury-gold">
                    {item.icon}
                  </div>


                  {/* Title */}
                  <h3 className="mt-5 font-luxury text-base font-bold leading-6 text-gold-300">
                    {item.title}
                  </h3>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ASSOCIATE BENEFITS
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          {/* =================================================
              HEADING
          ================================================= */}

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
                ASSOCIATE BENEFITS
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              Why Become A{" "}
              <span className="text-gold-300">
                NOOH Associate?
              </span>
            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

          </motion.div>


          {/* =================================================
              BENEFIT GRID
          ================================================= */}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                number: "01",
                title: "Low Entry Investment",
                description:
                  "Start your association with a one-time investment of ₹50,000 + GST.",
              },
              {
                number: "02",
                title: "Zero Royalty",
                description:
                  "No recurring royalty requirement under the Associate Program.",
              },
              {
                number: "03",
                title: "Dedicated Manager",
                description:
                  "Get dedicated support for your projects and coordination.",
              },
              {
                number: "04",
                title: "Fixed Price System",
                description:
                  "A structured pricing system makes quotation and project discussions easier.",
              },
              {
                number: "05",
                title: "Project Execution Support",
                description:
                  "NOOH supports technical coordination and execution of the project.",
              },
              {
                number: "06",
                title: "Earn From Referrals",
                description:
                  "Generate business opportunities by referring suitable projects to NOOH.",
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
                  delay: index * 0.08,
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


                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                    ✦
                  </span>

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
          ASSOCIATE PROMISE
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="glass-gold relative overflow-hidden px-7 py-14 text-center md:px-12"
          >

            {/* Gold Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/5 blur-[100px]" />


            <div className="relative z-10">

              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                THE NOOH ASSOCIATE PROMISE
              </p>


              <h2 className="mx-auto mt-6 max-w-3xl font-luxury text-3xl font-bold leading-tight text-white md:text-5xl">
                You Focus On{" "}
                <span className="text-gold-300">
                  Relationships.
                </span>

                <br />

                We Focus On{" "}
                <span className="text-gold-300">
                  Projects.
                </span>
              </h2>


              <div className="mx-auto mt-7 h-[2px] w-14 bg-luxury-gold" />


              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                Together, we create a professional experience for
                your clients while creating new business
                opportunities through the NOOH Associate Program.
              </p>

            </div>

          </motion.div>

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
                FREQUENTLY ASKED QUESTIONS
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">
              Associate{" "}
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
                question: "What is the Associate Program?",
                answer:
                  "The NOOH Associate Program allows you to bring project opportunities to NOOH while our team supports the quotation, technical coordination and project execution.",
              },
              {
                question: "What is the investment?",
                answer:
                  "The Associate Program requires a one-time investment of ₹50,000 + GST.",
              },
              {
                question: "Is there any royalty?",
                answer:
                  "No. The Associate Program is offered with zero royalty.",
              },
              {
                question: "Will I get project support?",
                answer:
                  "Yes. NOOH provides project and technical support, along with dedicated coordination.",
              },
              {
                question: "How does the referral process work?",
                answer:
                  "You refer a suitable customer or project opportunity to NOOH. NOOH handles the quotation and project execution, and you earn from the successful project.",
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
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
              PARTNER WITH NOOH
            </p>


            {/* Heading */}
            <h2 className="mt-6 font-luxury text-4xl font-bold text-white md:text-6xl">
              Build Connections.
            </h2>


            <p className="mt-3 font-luxury text-2xl font-bold text-gold-300 md:text-3xl">
              Grow With NOOH.
            </p>


            {/* Gold Line */}
            <div className="mx-auto mt-7 h-[2px] w-14 bg-luxury-gold" />


            {/* Description */}
            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Bring your next opportunity to NOOH and become
              part of our growing Associate network.
            </p>


            {/* Buttons */}
            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                to="/franchise/associate"
                className="group inline-flex items-center gap-3 bg-[#d6af45] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
              >
                Become An Associate

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


      {/* =====================================================
          PAGE END
      ===================================================== */}

    </div>
  );
};

export default Associate;