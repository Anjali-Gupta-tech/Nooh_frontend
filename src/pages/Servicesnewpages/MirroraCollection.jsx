import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowDown,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { mirroraData } from "../../data/mirrordata";

const MirroraCollection = () => {
  const { id } = useParams();

  const product = mirroraData[id];

  /* =========================================================
     PRODUCT NOT FOUND
  ========================================================= */

  if (!product) {
    return (
      <div className="min-h-screen bg-luxury-black text-white flex items-center justify-center px-6">

        <div className="text-center">

          <p className="uppercase tracking-[5px] text-gold-300 font-semibold">
            MIRRORA™
          </p>

          <h1 className="text-4xl font-luxury font-bold mt-5">
            Product Not Found
          </h1>

          <Link
            to="/services"
            className="btn-outline-gold inline-flex items-center gap-2 mt-8"
          >
            Back to Collection
          </Link>

        </div>

      </div>
    );
  }

  return (
    <>
      {/* =====================================================
          SEO
      ===================================================== */}

      <Helmet>

        <title>
          {product.id?.toUpperCase()} | MIRRORA™ | NOOH Living Elevated
        </title>

        <meta
          name="description"
          content={product.description}
        />

      </Helmet>


      <div className="min-h-screen text-white pt-20 bg-luxury-black">


        {/* =====================================================
            HERO
            DIFFERENT BACKGROUND IMAGE
        ===================================================== */}

        <section className="relative h-[75vh] min-h-[650px] flex items-center justify-center overflow-hidden">

          {/* HERO BACKGROUND IMAGE */}

          {product.heroImage ? (
            <img
              src={product.heroImage}
              alt={product.subtitle}
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                object-center
              "
            />
          ) : (
            <div className="absolute inset-0 bg-luxury-black" />
          )}


          {/* DARK OVERLAY */}

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 " />


          {/* HERO CONTENT */}

          <div className="relative z-10 container-custom mx-auto px-6 text-center">

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                uppercase
                tracking-[5px]
                text-gold-300
                font-semibold
                mb-5
              "
            >
              MIRRORA™ Collection
            </motion.p>


            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                text-5xl
                md:text-7xl
                lg:text-8xl
                font-luxury
                font-bold
                tracking-normal
              "
            >
              {product.title}
            </motion.h1>


            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="
                text-xl
                md:text-2xl
                text-white/85
                mt-6
              "
            >
              {product.subtitle}
            </motion.p>


            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="
                max-w-4xl
                mx-auto
                text-white/70
                text-lg
                md:text-xl
                leading-relaxed
                mt-6
              "
            >
              {product.description}
            </motion.p>


            {/* EXPLORE */}

            <motion.a
              href="#product-intro"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.8,
              }}
              className="
                inline-flex
                flex-col
                items-center
                gap-3
                mt-12
                text-white/70
                hover:text-gold-300
                transition
              "
            >

              <span className="uppercase tracking-[4px] text-xs">
                Explore
              </span>

              <span
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/30
                  flex
                  items-center
                  justify-center
                "
              >
                <ArrowDown size={17} />
              </span>

            </motion.a>

          </div>

        </section>


        {/* =====================================================
            PRODUCT INTRO
            LEFT CONTENT / RIGHT CARD IMAGE
        ===================================================== */}

        <section
          id="product-intro"
          className="section-padding bg-luxury-gray"
        >

          <motion.div
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
            }}
            className="container-custom mx-auto px-6"
          >

            <div className="grid lg:grid-cols-2 gap-16 items-center">


              {/* LEFT CONTENT */}

              <div>

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                  About {product.id?.toUpperCase()}
                </p>


                <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                  {product.subtitle}
                </h2>


                <div className="w-24 h-[2px] bg-gold-300 rounded-full mb-8" />


                <p className="text-white/70 text-lg leading-loose">
                  {product.overview || product.description}
                </p>


                <p className="text-white/60 leading-loose mt-6">
                  MIRRORA™ is developed as a customized architectural
                  solution where form, illumination and spatial design
                  work together to create a distinctive interior experience.
                </p>

              </div>


              {/* RIGHT — DIFFERENT FROM HERO */}

              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  overflow-hidden
                  rounded-3xl
                  shadow-2xl
                  border
                  border-white/10
                "
              >

                <img
                  src={product.image}
                  alt={product.subtitle}
                  className="
                    w-full
                    h-[500px]
                    object-cover
                    rounded-3xl
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

              </motion.div>

            </div>

          </motion.div>

        </section>


        {/* =====================================================
            TECHNICAL INFORMATION
        ===================================================== */}

        {product.technical?.length > 0 && (

          <section className="section-padding bg-luxury-black">

            <motion.div
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
              className="container-custom mx-auto px-6"
            >

              <div className="text-center mb-14">

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                  Technical Information
                </p>

                <h2 className="text-4xl md:text-5xl font-luxury font-bold">
                  Product Specifications
                </h2>

              </div>


              <div className="max-w-5xl mx-auto">

                {product.technical.map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -20,
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
                      delay: index * 0.05,
                    }}
                    className="
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      justify-between
                      gap-4
                      py-6
                      border-b
                      border-white/10
                    "
                  >

                    <span className="uppercase tracking-[3px] text-gold-300 text-sm">
                      {item.label}
                    </span>

                    <span className="text-white/75 text-base md:text-right">
                      {item.value}
                    </span>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </section>

        )}


        {/* =====================================================
            FEATURES
        ===================================================== */}

        {product.features?.length > 0 && (

          <section className="section-padding bg-luxury-black">

            <motion.div
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
              className="container-custom mx-auto px-6"
            >

              <div className="text-center mb-14">

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                  Why Choose {product.id?.toUpperCase()}
                </p>

                <h2 className="text-4xl md:text-5xl font-luxury font-bold">
                  Designed for Luxury Interiors
                </h2>

              </div>


              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                {product.features.map((feature, index) => (

                  <motion.div
                    key={index}
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
                      duration: 0.5,
                      delay: index * 0.05,
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="
                      glass
                      rounded-3xl
                      p-8
                    "
                  >

                    <div
                      className="
                        w-11
                        h-11
                        rounded-full
                        bg-gold-300/10
                        border
                        border-gold-300/30
                        flex
                        items-center
                        justify-center
                        mb-6
                      "
                    >

                      <Check
                        size={19}
                        className="text-gold-300"
                      />

                    </div>


                    <h3 className="text-xl text-gold-300 font-semibold mb-4">
                      {feature}
                    </h3>


                    <p className="text-white/65 leading-relaxed">
                      {feature} is carefully integrated into the MIRRORA™
                      system to maintain a refined architectural finish
                      and premium visual experience.
                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </section>

        )}


        {/* =====================================================
            APPLICATIONS
        ===================================================== */}

        {product.applications?.length > 0 && (

          <section className="section-padding bg-luxury-gray">

            <motion.div
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
              className="
                container-custom
                mx-auto
                px-6
                text-center
              "
            >

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                Ideal Applications
              </p>


              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-14">
                Designed for Premium Spaces
              </h2>


              <div className="flex flex-wrap justify-center gap-5">

                {product.applications.map((application, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                    }}
                    className="
                      glass
                      px-6
                      py-3
                      rounded-full
                      text-white/90
                    "
                  >
                    {application}
                  </motion.div>

                ))}

              </div>

            </motion.div>

          </section>

        )}


        {/* =====================================================
            PROJECT PROCESS
        ===================================================== */}

        {product.process?.length > 0 && (

          <section className="section-padding bg-luxury-gray">

            <motion.div
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
              className="container-custom mx-auto px-6"
            >

              <div className="text-center mb-14">

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                  From Concept to Installation
                </p>

                <h2 className="text-4xl md:text-5xl font-luxury font-bold">
                  Our Project Approach
                </h2>

              </div>


              <div className="grid grid-cols-2 md:grid-cols-4 gap-7">

                {product.process.map((step, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className="
                      glass
                      rounded-3xl
                      p-8
                    "
                  >

                    <span className="text-4xl font-luxury text-gold-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>


                    <div className="w-12 h-[2px] bg-gold-300 rounded-full my-5" />


                    <h3 className="text-lg font-semibold">
                      {step}
                    </h3>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </section>

        )}


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <motion.div
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
            className="container-custom mx-auto px-6"
          >

            <div className="glass-gold rounded-3xl p-10 md:p-14 text-center">

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                Let's Create Something Extraordinary
              </p>


              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-8">
                Bring {product.id?.toUpperCase()} to Life
              </h2>


              <p className="max-w-4xl mx-auto text-white/70 text-lg leading-relaxed mb-10">
                From luxury residential interiors to premium hospitality
                and commercial environments, MIRRORA™ transforms architectural
                spaces through light, form and design.
              </p>


              <div className="flex flex-col sm:flex-row justify-center gap-5">

                <Link
                  to="/contact"
                  className="
                    btn-luxury
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  Request Free Consultation

                  <ArrowRight size={18} />

                </Link>


                {product.pdf && (

                  <a
                    href={product.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      btn-outline-gold
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                    "
                  >
                    View Catalogue
                  </a>

                )}

              </div>

            </div>

          </motion.div>

        </section>


      </div>
    </>
  );
};

export default MirroraCollection;