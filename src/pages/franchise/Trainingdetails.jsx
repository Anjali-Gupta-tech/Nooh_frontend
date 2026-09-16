import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";

import { trainingdata } from "../../data/trainingdata";

const Trainingdetails = () => {
  const location = useLocation();
  const [openDay, setOpenDay] = useState(0);

  const trainingKey = location.pathname
    .split("/")
    .filter(Boolean)
    .pop();

  const training = trainingdata[trainingKey];

  if (!training) {
    return (
      <div className="min-h-screen bg-luxury-black text-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-luxury-gold/60" />

            <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
              NOOH TRAINING
            </span>

            <span className="h-px w-12 bg-luxury-gold/60" />
          </div>

          <h1 className="font-luxury text-5xl font-bold md:text-7xl">
            Program Not Found
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

          <Link
            to="/franchise/training"
            className="group mt-10 inline-flex items-center gap-3 bg-[#d6af45] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
          >
            Back To Training

            <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* Subtle NOOH atmosphere - NO IMAGE */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-luxury-gold/5 blur-[130px]" />

        <div className="container-custom relative mx-auto px-6 pb-24 pt-32 md:pb-28 md:pt-40">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-5xl text-center"
          >

            {/* BACK */}

            <Link
              to="/franchise/training"
              className="inline-flex items-center text-[10px] font-medium uppercase tracking-[0.35em] text-white/40 transition-colors duration-300 hover:text-luxury-gold"
            >
              ← All Training Programs
            </Link>

            {/* EYEBROW */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-20 flex items-center justify-center gap-4"
            >
              <span className="h-px w-12 bg-luxury-gold/60" />

              <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
                {training.category || "TRAINING PROGRAM"}
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />
            </motion.div>

            {/* TITLE */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-7 font-luxury text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
            >
              {training.title}
            </motion.h1>

            {/* GOLD LINE */}

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mx-auto mt-7 h-[2px] bg-luxury-gold"
            />

            {/* SUBTITLE */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-7 font-luxury text-xl font-bold text-gold-300 md:text-2xl"
            >
              {training.subtitle}
            </motion.p>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base"
            >
              {training.description}
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-9 flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/franchise/trainingform"
                className="group inline-flex items-center gap-3 bg-[#d6af45] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
              >
                Apply For Training

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/franchise/training"
                className="group inline-flex items-center gap-3 border border-luxury-gold/50 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-luxury-gold hover:text-black"
              >
                Explore Programs

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </motion.div>

          </motion.div>

          {/* META */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mx-auto mt-16 grid max-w-4xl grid-cols-1 border-y border-white/10 sm:grid-cols-3"
          >

            <MetaItem
              label="DURATION"
              value={training.duration || "7 Days"}
            />

            <MetaItem
              label="FORMAT"
              value="Theory · Workshop · Live Site"
            />

            <MetaItem
              label="CERTIFICATION"
              value="Certificate Program"
            />

          </motion.div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#d6af45]" />

      </section>


      {/* =====================================================
          COURSE OVERVIEW
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <SectionHeading
            eyebrow="THE PROGRAM"
            title="Course Overview"
          />

          <div className="mx-auto mt-14 max-w-4xl">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-gold p-8 text-center md:p-12"
            >

              <p className="mx-auto max-w-3xl text-sm leading-8 text-white/65 md:text-base">
                {training.overview}
              </p>

              <div className="mx-auto mt-8 h-[2px] w-10 bg-luxury-gold" />

            </motion.div>

          </div>

          {/* HIGHLIGHTS */}

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">

            {training.highlights?.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="glass-gold p-7 text-center transition-all duration-500"
              >

                <span className="font-luxury text-3xl font-bold text-luxury-gold/30">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mx-auto mt-5 h-px w-8 bg-luxury-gold/60" />

                <h3 className="mt-5 font-luxury text-lg font-bold text-gold-300">
                  {item}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT YOU WILL LEARN
      ===================================================== */}

      <section className="border-y border-white/10 bg-luxury-black">

        <div className="section-padding">

          <div className="container-custom mx-auto">

            <SectionHeading
              eyebrow="THE LEARNING EXPERIENCE"
              title="What You Will Learn"
            />

            <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">

              {training.learn?.map((item, index) => (

                <motion.div
                  key={index}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="glass-gold p-8 text-center transition-all duration-500"
                >

                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                    <FaCheck className="text-xs" />
                  </div>

                  <span className="mt-5 block font-luxury text-2xl font-bold text-luxury-gold/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 font-luxury text-lg font-bold text-gold-300">
                    {item}
                  </h3>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAINING SCHEDULE
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <SectionHeading
            eyebrow="THE LEARNING JOURNEY"
            title="7-Day Training"
          />

          <div className="mx-auto mt-14 max-w-4xl space-y-3">

            {training.schedule?.map((item, index) => {

              const isOpen = openDay === index;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className={`overflow-hidden border transition-all duration-500 ${
                    isOpen
                      ? "border-luxury-gold/40 bg-[#0c0c0c]"
                      : "border-white/10 bg-[#080808]"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenDay(isOpen ? -1 : index)
                    }
                    className="group flex w-full items-center justify-between px-6 py-6 text-left md:px-8"
                  >

                    <div className="flex items-center gap-5">

                      <span className="font-luxury text-3xl font-bold text-luxury-gold/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>

                        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-luxury-gold">
                          {item.day}
                        </p>

                        <h3 className="mt-2 font-luxury text-lg font-bold text-white transition-colors duration-300 group-hover:text-gold-300 md:text-xl">
                          {item.title}
                        </h3>

                      </div>

                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-luxury-gold/40 text-luxury-gold transition-all duration-300 group-hover:bg-luxury-gold group-hover:text-black">
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.4 }}
                      className="border-t border-white/10"
                    >

                      <div className="px-6 py-7 text-center md:px-10">

                        {item.topics?.map((topic, topicIndex) => (

                          <motion.div
                            key={topicIndex}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: topicIndex * 0.05,
                            }}
                            className="flex items-center justify-center gap-3 py-2 text-sm text-white/60"
                          >

                            <span className="h-1 w-1 rounded-full bg-luxury-gold" />

                            {topic}

                          </motion.div>

                        ))}

                      </div>

                    </motion.div>
                  )}

                </motion.div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CERTIFICATION
      ===================================================== */}

      <section className="border-y border-white/10 bg-luxury-black">

        <div className="section-padding">

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
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-gold relative overflow-hidden px-7 py-16 text-center md:px-12 md:py-20"
            >

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/5 blur-[100px]" />

              <div className="relative z-10">

                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                  CERTIFICATION
                </p>

                <h2 className="mt-6 font-luxury text-4xl font-bold text-white md:text-6xl">
                  Learn.
                </h2>

                <h3 className="font-luxury text-3xl font-bold text-gold-300 md:text-5xl">
                  Execute. Get Certified.
                </h3>

                <div className="mx-auto mt-7 h-[2px] w-14 bg-luxury-gold" />

                <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                  {training.certificate}
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-luxury-black px-6 py-28 text-center md:py-36">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/5 blur-[120px]" />

        <div className="container-custom relative z-10 mx-auto">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
              START YOUR JOURNEY
            </p>

            <h2 className="mt-6 font-luxury text-5xl font-bold text-white md:text-7xl">
              Learn.
            </h2>

            <p className="mt-2 font-luxury text-3xl font-bold text-gold-300 md:text-4xl">
              Build. Grow.
            </p>

            <div className="mx-auto mt-7 h-[2px] w-14 bg-luxury-gold" />

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Gain the skills, knowledge and practical experience to build your
              career or business in the premium interior industry.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                to="/franchise/trainingform"
                className="group inline-flex items-center gap-3 bg-[#d6af45] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
              >
                Apply For Training

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                to="/franchise/training"
                className="group inline-flex items-center gap-3 border border-luxury-gold/50 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-luxury-gold hover:text-black"
              >
                Back To Programs

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


/* =========================================================
   SECTION HEADING
========================================================= */

const SectionHeading = ({ eyebrow, title }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-4xl text-center"
    >

      <div className="mb-5 flex items-center justify-center gap-4">

        <span className="h-px w-12 bg-luxury-gold/60" />

        <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
          {eyebrow}
        </span>

        <span className="h-px w-12 bg-luxury-gold/60" />

      </div>

      <h2 className="font-luxury text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

    </motion.div>
  );
};


/* =========================================================
   META ITEM
========================================================= */

const MetaItem = ({ label, value }) => {
  return (
    <div className="px-6 py-7 text-center">

      <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-luxury-gold">
        {label}
      </p>

      <p className="mt-3 font-luxury text-sm font-bold text-white md:text-base">
        {value}
      </p>

    </div>
  );
};


export default Trainingdetails;