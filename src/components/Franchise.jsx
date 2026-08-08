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
    <div className="min-h-screen text-white bg-white ">

      {/* =====================================================
          HERO / HEADER SECTION
      ===================================================== */}
      <section className="relative min-h-[540px] overflow-hidden ">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/franchaise-hero/franchaise-hero.png"
            alt="NOOH Luxury Interior"
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/65" />

          {/* Soft center gradient */}
          <div className="absolute inset-0 " />
        </div>


        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[540px] items-center justify-center px-6 text-center bg-black">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-4xl"
          >

            {/* Small Label */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6 text-[11px] font-medium uppercase tracking-[0.45em] text-luxury-gold"
            >
              NOOH ELEVATED LIVING LLP
            </motion.p>


            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-serif text-5xl font-normal leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[82px]"
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
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mx-auto mt-8 h-[1px] bg-[#d6af45]"
            />


            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mx-auto mt-7 max-w-2xl text-sm font-light leading-7 tracking-wide text-white/75 md:text-base"
            >
              Join one of India's growing luxury interior brands and build
              your premium interior business with innovative ceiling
              solutions, professional training and trusted support.
            </motion.p>

          </motion.div>

        </div>


        {/* Gold Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#d6af45]" />

      </section>


      {/* =====================================================
          OPPORTUNITIES SECTION
      ===================================================== */}
      <section className="bg-[#f7f5f0] px-6 py-20 text-[#171717] md:px-10 md:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >

            <div className="mb-5 flex items-center justify-center gap-4">

              <span className="h-px w-12 bg-[#c9a43a]" />

              <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
                EXPLORE
              </span>

              <span className="h-px w-12 bg-[#c9a43a]" />

            </div>


            <h2 className="font-serif text-4xl font-normal md:text-5xl">
              Choose Your{" "}
              <span className="text-gold-300">
                Opportunity
              </span>
            </h2>

            <div className="mx-auto mt-6 h-[2px] w-12 bg-[#c9a43a]" />

          </motion.div>


          {/* Cards */}
          <div className="grid gap-7 md:grid-cols-3">

            {franchiseOptions.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8 }}
              >

                <Link
                  to={item.link}
                  className="group block overflow-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                >

                  {/* Image */}
                  <div className="relative h-[260px] overflow-hidden">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Gold Circle */}
                    <div className="absolute bottom-[-25px] left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-[#c9a43a] text-white shadow-lg">

                      <span className="text-lg">
                        ✦
                      </span>

                    </div>

                  </div>


                  {/* Card Content */}
                  <div className="px-7 pb-8 pt-10 text-center">

                    <h3 className="font-serif text-xl text-gold-300">
                      {item.title}
                    </h3>

                    <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-neutral-600">
                      {item.description}
                    </p>


                    {/* Link */}
                    <div className="mt-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-300">

                      <span>
                        Explore
                      </span>

                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
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
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#0d0d0d] px-6 py-20 text-center"
      >

        <p className="text-[11px] uppercase tracking-[0.4em]  ">
          PARTNER WITH NOOH
        </p>

        <h2 className="mt-5 font-serif text-4xl text-white md:text-5xl">
          Build Your Business.
        </h2>

        <p className="mt-3 font-serif text-2xl text-luxury-gold">
          Grow With NOOH.
        </p>

      </motion.section>

    </div>
  );
};

export default Franchise;