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

        </div>

      </section>

{/* ============================================================
    ASSOCIATE PROGRAM — GROW TOGETHER
============================================================ */}

<section
  id="associate-program"
  className="section-padding bg-luxury-black"
>
  <div className="container-custom mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="glass-gold overflow-hidden"
    >

      <div className="grid lg:grid-cols-[1.4fr_0.8fr]">

        {/* LEFT */}
        <div className="p-8 md:p-12">

          <div className="mb-5 flex items-center gap-4">

            <span className="h-px w-12 bg-luxury-gold/60" />

            <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
              ASSOCIATE PROGRAM
            </span>

          </div>


          <h2 className="font-luxury text-4xl font-bold md:text-5xl">
            Partner With{" "}
            <span className="text-gold-300">
              NOOH
            </span>
          </h2>


          <p className="mt-3 font-luxury text-xl font-semibold text-white/80">
            Grow Together.
          </p>


          <div className="mt-6 h-[2px] w-14 bg-luxury-gold" />


          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60">
            Join the NOOH Associate Program and start building
            business opportunities with NOOH products, project
            support and professional guidance.
          </p>

        </div>


        {/* RIGHT — FREE */}
        <div className="flex items-center justify-center border-t border-luxury-gold/20 p-8 lg:border-l lg:border-t-0">

          <div className="w-full max-w-sm border border-luxury-gold/40 bg-white/[0.02] p-8 text-center">

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
              ASSOCIATE INVESTMENT
            </span>


            <div className="mt-5">

              <span className="font-luxury text-5xl font-bold text-white">
                FREE
              </span>

            </div>


            <div className="mx-auto mt-5 h-[2px] w-14 bg-luxury-gold" />


            <p className="mt-5 text-sm leading-6 text-white/50">
              Join the NOOH Associate Program absolutely FREE
              and start earning with zero investment.
            </p>

          </div>

        </div>

      </div>

    </motion.div>

  </div>
</section>


{/* ============================================================
    ASSOCIATE BENEFITS
============================================================ */}

<section
  id="associate-benefits"
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
        Associate{" "}
        <span className="text-gold-300">
          Benefits
        </span>
      </h2>

      <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

    </motion.div>


    {/* Benefits Cards */}

    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          number: "01",
          icon: "▣",
          title: "Associate Code",
          text: "Receive your official NOOH Associate ID and become an authorized associate partner of NOOH Elevated Living LLP.",
        },

        {
          number: "02",
          icon: "◆",
          title: "Fixed Price Structure",
          text: "NOOH provides a fixed project price list. Associates are free to sell projects at their own market price and retain their own profit margin.",
        },

        {
          number: "03",
          icon: "◉",
          title: "Complete Project Support",
          text: "Get complete support including client consultation, site survey, design support, material supply, installation, project execution and technical support.",
        },

        {
          number: "04",
          icon: "♙",
          title: "Dedicated Manager",
          text: "Every associate receives a dedicated manager for client handling, quotation support, project coordination, technical guidance and order management.",
        },

        {
          number: "05",
          icon: "▤",
          title: "Certification",
          text: "Receive an official Associate Certificate from NOOH Elevated Living LLP as recognition of your association with the brand.",
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
            delay: index * 0.06,
          }}
          whileHover={{
            y: -5,
          }}
          className="glass-gold group relative overflow-hidden p-7 transition-all duration-300"
        >

          {/* Number + Icon */}

          <div className="flex items-center justify-between">

            <span className="text-[10px] font-bold tracking-[0.2em] text-luxury-gold">
              {item.number}
            </span>

            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold/40 bg-black/20 text-lg text-luxury-gold transition-all duration-300 group-hover:bg-luxury-gold group-hover:text-black">
              {item.icon}
            </div>

          </div>


          {/* Title */}

          <h3 className="mt-6 font-luxury text-xl font-bold text-white">
            {item.title}
          </h3>


          {/* Gold Divider */}

          <div className="mt-4 h-[2px] w-10 bg-luxury-gold transition-all duration-300 group-hover:w-14" />


          {/* Description */}

          <p className="mt-5 text-sm leading-7 text-white/60">
            {item.text}
          </p>

        </motion.div>

      ))}

    </div>

  </div>
</section>
{/* ============================================================
    COMPLETE PROJECT SUPPORT
============================================================ */}


<section
  id="project-support"
  className="section-padding bg-luxury-black"
>
  <div className="container-custom mx-auto">

    {/* ========================================================
        SECTION HEADING
    ======================================================== */}

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
          COMPLETE PROJECT SUPPORT
        </span>

        <span className="h-px w-12 bg-luxury-gold/60" />

      </div>


      <h2 className="font-luxury text-4xl font-bold md:text-5xl">
        We Support You{" "}
        <span className="text-gold-300">
          From Start To Finish
        </span>
      </h2>


      <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />


      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55">
        As a NOOH Associate, you don't have to manage the entire
        project alone. Our team supports you across consultation,
        planning, execution and technical requirements.
      </p>

    </motion.div>



    {/* ========================================================
        MAIN SUPPORT CARD
    ======================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-gold overflow-hidden"
    >

      <div className="grid lg:grid-cols-[0.8fr_1.7fr]">


        {/* ====================================================
            LEFT — INTRO
        ==================================================== */}

        <div className="border-b border-luxury-gold/20 p-8 md:p-10 lg:border-b-0 lg:border-r">

          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-luxury-gold/40 bg-black/20 text-xl text-luxury-gold">
            ✦
          </div>


          <h3 className="mt-7 font-luxury text-3xl font-bold text-white">
            Your Project.
            <br />

            <span className="text-gold-300">
              Our Support.
            </span>
          </h3>


          <div className="mt-6 h-[2px] w-12 bg-luxury-gold" />


          <p className="mt-6 text-sm leading-7 text-white/55">
            From the first client discussion to final installation,
            NOOH provides the required support so that you can
            confidently handle projects and focus on growing
            your business.
          </p>


          <div className="mt-8 border-t border-luxury-gold/15 pt-6">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-luxury-gold">
              PROJECT ASSISTANCE
            </p>

            <p className="mt-2 text-sm leading-6 text-white/40">
              Professional guidance at every important stage
              of your project.
            </p>

          </div>

        </div>



        {/* ====================================================
            RIGHT — SUPPORT SERVICES
        ==================================================== */}

        <div className="p-6 md:p-8">

          <div className="grid gap-4 sm:grid-cols-2">


            {/* Client Consultation */}

            <motion.div
              whileHover={{ y: -3 }}
              className="group rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-luxury-gold/40"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-gold">
                  01
                </div>

                <div>

                  <h4 className="font-luxury text-lg font-bold text-white group-hover:text-gold-300">
                    Client Consultation
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Assistance in understanding client requirements,
                    product suitability and project expectations.
                  </p>

                </div>

              </div>

            </motion.div>



            {/* Site Survey */}

            <motion.div
              whileHover={{ y: -3 }}
              className="group rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-luxury-gold/40"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-gold">
                  02
                </div>

                <div>

                  <h4 className="font-luxury text-lg font-bold text-white group-hover:text-gold-300">
                    Site Survey
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Support for understanding site conditions,
                    measurements and installation requirements.
                  </p>

                </div>

              </div>

            </motion.div>



            {/* Design Support */}

            <motion.div
              whileHover={{ y: -3 }}
              className="group rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-luxury-gold/40"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-gold">
                  03
                </div>

                <div>

                  <h4 className="font-luxury text-lg font-bold text-white group-hover:text-gold-300">
                    Design Support
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Product and design guidance to help present
                    suitable NOOH solutions to your clients.
                  </p>

                </div>

              </div>

            </motion.div>



            {/* Material Supply */}

            <motion.div
              whileHover={{ y: -3 }}
              className="group rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-luxury-gold/40"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-gold">
                  04
                </div>

                <div>

                  <h4 className="font-luxury text-lg font-bold text-white group-hover:text-gold-300">
                    Material Supply
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Access to required NOOH materials with
                    coordinated order processing and supply.
                  </p>

                </div>

              </div>

            </motion.div>



            {/* Installation */}

            <motion.div
              whileHover={{ y: -3 }}
              className="group rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-luxury-gold/40"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-gold">
                  05
                </div>

                <div>

                  <h4 className="font-luxury text-lg font-bold text-white group-hover:text-gold-300">
                    Installation Support
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Professional installation assistance and
                    technical guidance for project execution.
                  </p>

                </div>

              </div>

            </motion.div>



            {/* Project Execution */}

            <motion.div
              whileHover={{ y: -3 }}
              className="group rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-luxury-gold/40"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-gold">
                  06
                </div>

                <div>

                  <h4 className="font-luxury text-lg font-bold text-white group-hover:text-gold-300">
                    Project Execution
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Coordination support to help ensure smooth
                    execution and professional project delivery.
                  </p>

                </div>

              </div>

            </motion.div>



            {/* Technical Support */}

            <motion.div
              whileHover={{ y: -3 }}
              className="group rounded-lg border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-luxury-gold/40 sm:col-span-2"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-luxury-gold/30 text-luxury-gold">
                  07
                </div>

                <div>

                  <h4 className="font-luxury text-lg font-bold text-white group-hover:text-gold-300">
                    Technical Support
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-white/45">
                    Get technical assistance whenever required for
                    product understanding, installation requirements
                    and project-related queries.
                  </p>

                </div>

              </div>

            </motion.div>


          </div>

        </div>

      </div>

    </motion.div>

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

    </div>
  );
};

export default Associate;