import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaTools,
  FaUsers,
  FaBullseye,
  FaEye,
  FaBuilding,
  FaChartLine,
  FaGraduationCap,
} from "react-icons/fa";

const Training = () => {
  const trainingModules = [
    {
      number: "01",
      title: "Product Knowledge",
      description:
        "Understand Stretch Ceilings, Textile Ceilings, Fiber Optic, 3D Epoxy Flooring and other innovative interior solutions.",
      icon: <FaLightbulb />,
    },
    {
      number: "02",
      title: "Installation Training",
      description:
        "Learn practical installation techniques, tools, site preparation and professional execution standards.",
      icon: <FaTools />,
    },
    {
      number: "03",
      title: "Site & Project Skills",
      description:
        "Understand site requirements, measurements, material calculation, project planning and quality standards.",
      icon: <FaBuilding />,
    },
    {
      number: "04",
      title: "Sales & Customer Handling",
      description:
        "Learn how to understand customer requirements, present solutions and handle project discussions professionally.",
      icon: <FaUsers />,
    },
    {
      number: "05",
      title: "Business Development",
      description:
        "Develop practical knowledge to confidently start, expand and manage a premium interior business.",
      icon: <FaChartLine />,
    },
    {
      number: "06",
      title: "Real-World Learning",
      description:
        "Gain practical exposure through real-world projects and understand how professional interior solutions are delivered.",
      icon: <FaEye />,
    },
  ];

  const benefits = [
    {
      icon: <FaLightbulb />,
      title: "Innovation-Driven Learning",
      description:
        "Learn innovative decorative interior technologies and their practical applications.",
    },
    {
      icon: <FaTools />,
      title: "Practical Installation",
      description:
        "Develop hands-on understanding of installation techniques and professional tools.",
    },
    {
      icon: <FaUsers />,
      title: "Expert Guidance",
      description:
        "Learn product knowledge, installation and customer handling from experienced professionals.",
    },
    {
      icon: <FaBullseye />,
      title: "Business Focus",
      description:
        "Understand how technical skills can be converted into real business opportunities.",
    },
    {
      icon: <FaBuilding />,
      title: "Project Experience",
      description:
        "Understand real project requirements, execution processes and quality standards.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Complete Learning",
      description:
        "A combination of product, technical, sales and business development training.",
    },
  ];

  return (
    <div className=" min-h-screen pt-20 bg-luxury-black text-white">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">

          <img
            src="/franchaise-hero/training-hero-img.png"
            alt="NOOH Training Program"
            className="h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Premium Gradient */}
          <div className="absolute inset-0" />

        </div>

        {/* Gold Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-[#d6af45]" />


        {/* Hero Content */}
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
                      to="/franchise/trainingform"
                      className="group inline-flex items-center gap-3 bg-[#d6af45] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
                    >
                      Apply for Training
                    
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

      </section>


      {/* =====================================================
          TRAINING INTRODUCTION
      ===================================================== */}

      <section
        id="training"
        className="section-padding bg-luxury-black"
      >

        <div className="container-custom mx-auto">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left Content */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-12 bg-luxury-gold/60" />

                <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
                  TRAINING PROGRAM
                </span>

              </div>


              <h2 className="font-luxury text-4xl font-bold leading-tight md:text-5xl">

                Learn The Skills.
                <br />

                <span className="text-gold-300">
                  Build The Business.
                </span>

              </h2>


              <div className="mt-7 h-[2px] w-14 bg-luxury-gold" />


              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                NOOH provides practical learning across premium interior
                technologies, installation techniques and business development.
              </p>


              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                Participants learn through real-world projects to confidently
                start or expand their interior business.
              </p>


              <div className="glass-gold mt-8 border-l-2 border-luxury-gold p-6">

                <p className="font-luxury text-xl font-bold text-white">
                  Practical Knowledge.
                </p>

                <p className="mt-1 font-luxury text-xl font-bold text-gold-300">
                  Real-World Experience.
                </p>

              </div>

            </motion.div>


            {/* Right Highlight */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-5"
            >

              {[
                {
                  icon: <FaLightbulb />,
                  title: "Product Knowledge",
                },
                {
                  icon: <FaTools />,
                  title: "Installation",
                },
                {
                  icon: <FaUsers />,
                  title: "Customer Handling",
                },
                {
                  icon: <FaChartLine />,
                  title: "Business Development",
                },
              ].map((item, index) => (

                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -6 }}
                  className="glass-gold p-7 text-center transition-all duration-500"
                >

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-luxury-gold/40 text-xl text-luxury-gold">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 font-luxury text-base font-bold text-gold-300">
                    {item.title}
                  </h3>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTS COVERED
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

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
                TRAINING COVERAGE
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">

              Products &{" "}
              <span className="text-gold-300">
                Skills
              </span>

            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

          </motion.div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Stretch Ceilings",
              "Textile Ceilings",
              "Fiber Optic",
              "3D Epoxy Flooring",
              "Installation Training",
              "Business Training",
            ].map((item, index) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="glass-gold p-7 transition-all duration-500"
              >

                <div className="flex items-center justify-between">

                  <span className="font-luxury text-3xl font-bold text-luxury-gold/40">
                    0{index + 1}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                    ✦
                  </span>

                </div>


                <div className="mt-6 h-px w-10 bg-luxury-gold/60" />


                <h3 className="mt-6 font-luxury text-xl font-bold text-gold-300">
                  {item}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CURRICULUM
      ===================================================== */}

      <section
        id="curriculum"
        className="section-padding bg-luxury-black"
      >

        <div className="container-custom mx-auto">

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
                THE LEARNING JOURNEY
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-4xl font-bold md:text-5xl">

              From Knowledge To{" "}
              <span className="text-gold-300">
                Execution
              </span>

            </h2>

            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />

          </motion.div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {trainingModules.map((item, index) => (

              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -7 }}
                className="glass-gold p-7 transition-all duration-500"
              >

                <div className="flex items-center justify-between">

                  <span className="font-luxury text-3xl font-bold text-luxury-gold/40">
                    {item.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-luxury-gold/40 text-luxury-gold">
                    {item.icon}
                  </div>

                </div>


                <div className="mt-6 h-px w-10 bg-luxury-gold/60" />


                <h3 className="mt-6 font-luxury text-xl font-bold text-gold-300">
                  {item.title}
                </h3>


                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          TRAINERS
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="glass-gold overflow-hidden p-2">

                <div className="relative h-[420px] overflow-hidden">

                  <img
                    src="/franchaise-hero/training.png"
                    alt="NOOH Training"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/45" />

                  <div className="absolute inset-0 flex items-center justify-center text-center">

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                        NOOH TRAINING
                      </p>

                      <h3 className="mt-4 font-luxury text-4xl font-bold text-white">
                        Learn From
                      </h3>

                      <h3 className="font-luxury text-4xl font-bold text-gold-300">
                        Experience.
                      </h3>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>


            {/* Content */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-12 bg-luxury-gold/60" />

                <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
                  EXPERT GUIDANCE
                </span>

              </div>


              <h2 className="font-luxury text-4xl font-bold leading-tight md:text-5xl">

                Guided By{" "}
                <span className="text-gold-300">
                  Experience.
                </span>

              </h2>


              <div className="mt-7 h-[2px] w-14 bg-luxury-gold" />


              <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                Training is guided by Asif Ali & Kapil Verma through product
                knowledge, installation techniques, quality standards and
                customer handling.
              </p>


              <div className="mt-8 space-y-4">

                {[
                  "Product knowledge",
                  "Installation techniques",
                  "Quality standards",
                  "Customer handling",
                ].map((item, index) => (

                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
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
                      {item}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE NOOH
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >

            <div className="mb-5 flex items-center justify-center gap-4">

              <span className="h-px w-12 bg-luxury-gold/60" />

              <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
                WHY NOOH
              </span>

              <span className="h-px w-12 bg-luxury-gold/60" />

            </div>


            <h2 className="font-luxury text-5xl font-bold text-white md:text-6xl">

              Why Choose{" "}
              <span className="text-gold-300">
                NOOH
              </span>

            </h2>


            <div className="mx-auto mt-6 h-[2px] w-12 bg-luxury-gold" />


            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/65 md:text-base">
              Experience innovation, premium craftsmanship and complete
              interior excellence through practical industry-focused training.
            </p>

          </motion.div>


          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {benefits.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -7 }}
                className="glass-gold p-8 text-center transition-all duration-500"
              >

                <div className="flex justify-center text-5xl text-luxury-gold">
                  {item.icon}
                </div>


                <h3 className="mt-6 font-luxury text-xl font-bold text-gold-300">
                  {item.title}
                </h3>


                <div className="mx-auto mt-5 h-px w-8 bg-luxury-gold/60" />


                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          INNOVATION
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-gold relative overflow-hidden px-7 py-14 text-center md:px-12"
          >

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/5 blur-[100px]" />

            <div className="relative z-10">

              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-luxury-gold">
                CONTINUOUS INNOVATION
              </p>


              <h2 className="mx-auto mt-6 max-w-3xl font-luxury text-3xl font-bold leading-tight text-white md:text-5xl">

                New Products.
                <br />

                <span className="text-gold-300">
                  New Opportunities.
                </span>

              </h2>


              <div className="mx-auto mt-7 h-[2px] w-14 bg-luxury-gold" />


              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
                Every year NOOH develops innovative decorative interior
                products, creating new opportunities for partners and
                professionals.
              </p>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-luxury-black px-6 py-24 text-center">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-luxury-gold/5 blur-[120px]" />


        <div className="container-custom relative z-10 mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
              START YOUR JOURNEY
            </p>


            <h2 className="mt-6 font-luxury text-4xl font-bold text-white md:text-6xl">
              Learn.
            </h2>

            <p className="mt-3 font-luxury text-2xl font-bold text-gold-300 md:text-3xl">
              Build. Grow.
            </p>


            <div className="mx-auto mt-7 h-[2px] w-14 bg-luxury-gold" />


            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Gain the skills, knowledge and confidence to enter or expand
              your business in the premium interior industry.
            </p>


            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <a
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#d6af45] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
              >
                Enquire About Training

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>


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

export default Training;