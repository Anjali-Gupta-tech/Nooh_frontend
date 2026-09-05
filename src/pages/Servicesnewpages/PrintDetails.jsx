import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import {printDetails} from "../../data/printdetails";

const PrintDetails = () => {
  const { slug } = useParams();

  const product = printDetails[slug];

  // If wrong slug
  if (!product) {
    return (
      <Navigate
        to="/products/stretch-ceiling/print"
        replace
      />
    );
  }

  return (
    <>
      {/* ================================================= */}
      {/* SEO */}
      {/* ================================================= */}

      <Helmet>
        <title>
          {product.title} | STRETCHÉ™ PRINT | NOOH Living Elevated
        </title>

        <meta
          name="description"
          content={product.description}
        />
      </Helmet>


      <div className="min-h-screen bg-luxury-black text-white pt-20">


        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

          {/* Hero Image */}

          <div className="absolute inset-0">

            <img
              src={product.heroImage}
              alt={`${product.title} - STRETCHÉ PRINT`}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />

          </div>


          {/* Gold Line */}

          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#d6af45] z-20" />


          {/* Hero Content */}

          <div className="relative z-10 w-full px-6 py-20">

            <div className="container-custom mx-auto text-center">

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="uppercase tracking-[5px] text-gold-300 font-semibold mb-5"
              >
                {product.category}
              </motion.p>


              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-luxury font-bold mb-6"
              >
                {product.title}
              </motion.h1>


              {product.subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gold-300 text-lg md:text-xl mb-6"
                >
                  {product.subtitle}
                </motion.p>
              )}


              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-5xl mx-auto text-white/80 text-lg md:text-xl leading-relaxed"
              >
                {product.description}
              </motion.p>

            </div>

          </div>

        </section>



        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <section className="section-padding bg-luxury-gray">


          {/* ================================================= */}
          {/* INTRODUCTION */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-36"
          >

            <div className="grid lg:grid-cols-2 gap-16 items-center">


              {/* IMAGE */}

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full overflow-hidden rounded-3xl shadow-2xl bg-black"
              >

                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-contain block rounded-3xl transition-transform duration-500 hover:scale-105"
                />

              </motion.div>



              {/* TEXT */}

              <div>

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                  {product.type}
                </p>


                <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                  {product.introduction?.title || product.title}
                </h2>


                <div className="w-24 h-[2px] bg-gold-300 rounded-full mb-8" />


                <p className="text-white/70 text-lg leading-loose mb-8">
                  {product.introduction?.description ||
                    product.description}
                </p>


                {/* Feature Pills */}

                <div className="flex flex-wrap gap-3">

                  {product.features?.map((feature, index) => (

                    <span
                      key={`${feature.label}-${index}`}
                      className="glass px-4 py-2 rounded-full text-sm"
                    >
                      {feature.value}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          </motion.section>



          {/* ================================================= */}
          {/* WHY CHOOSE */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >

            <p className="uppercase tracking-[5px] text-gold-300 text-center font-semibold mb-4">
              Why Choose {product.title}
            </p>


            <h2 className="text-4xl md:text-5xl font-luxury text-center font-bold mb-14">
              Designed for Premium Interiors
            </h2>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

              {product.features?.map((feature, index) => (

                <motion.div
                  key={`${feature.label}-${index}`}
                  whileHover={{
                    y: -8,
                    scale: 1.03
                  }}
                  transition={{ duration: 0.35 }}
                  className="glass rounded-3xl p-8"
                >

                  <h3 className="text-2xl text-gold-300 font-semibold mb-4">
                    {feature.label}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    {feature.value}
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.section>



          {/* ================================================= */}
          {/* LIGHTING TECHNOLOGY */}
          {/* ================================================= */}

          {product.lightingOptions?.length > 0 && (

            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-32"
            >

              <p className="uppercase tracking-[5px] text-gold-300 text-center font-semibold mb-4">
                Lighting Technology
              </p>


              <h2 className="text-4xl md:text-5xl font-luxury text-center font-bold mb-14">
                Advanced Lighting Experience
              </h2>


              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

                {product.lightingOptions.map((item, index) => (

                  <motion.div
                    key={`${item.title}-${index}`}
                    whileHover={{
                      y: -8,
                      scale: 1.03
                    }}
                    transition={{ duration: 0.35 }}
                    className="glass rounded-3xl p-8"
                  >

                    <h3 className="text-2xl text-gold-300 font-semibold mb-3">
                      {item.title}
                    </h3>


                    {item.subtitle && (
                      <p className="text-gold-300/70 text-sm mb-4">
                        {item.subtitle}
                      </p>
                    )}


                    <p className="text-white/70 leading-relaxed">
                      {item.description}
                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.section>

          )}



          {/* ================================================= */}
          {/* APPLICATIONS */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-36"
          >

            <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
              Ideal Applications
            </p>


            <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-8">
              Designed for Premium Spaces
            </h2>


            {product.bestFor && (

              <p className="max-w-4xl mx-auto text-white/70 text-lg leading-relaxed mb-12">
                {product.bestFor}
              </p>

            )}


            <div className="flex flex-wrap justify-center gap-5">

              {product.applications?.map((item, index) => (

                <motion.div
                  key={`${item}-${index}`}
                  whileHover={{
                    scale: 1.08,
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                  className="glass px-6 py-3 rounded-full"
                >
                  {item}
                </motion.div>

              ))}

            </div>

          </motion.section>



          {/* ================================================= */}
          {/* SPECIFICATIONS */}
          {/* ================================================= */}

          {product.specifications?.length > 0 && (

            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-36"
            >

              <p className="uppercase tracking-[5px] text-gold-300 text-center font-semibold mb-4">
                Technical Specifications
              </p>


              <h2 className="text-4xl md:text-5xl font-luxury text-center font-bold mb-14">
                Product Details
              </h2>


              <div className="max-w-5xl mx-auto glass rounded-3xl overflow-hidden">

                {product.specifications.map((spec, index) => (

                  <div
                    key={`${spec.label}-${index}`}
                    className="grid md:grid-cols-2 gap-5 p-6 border-b border-white/10 last:border-b-0"
                  >

                    <p className="text-gold-300 font-semibold">
                      {spec.label}
                    </p>


                    <p className="text-white/70 md:text-right">
                      {spec.value}
                    </p>

                  </div>

                ))}

              </div>

            </motion.section>

          )}



          {/* ================================================= */}
          {/* WARRANTY */}
          {/* ================================================= */}

          {product.warranty && (

            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-36"
            >

              <div className="glass-gold rounded-3xl p-10 md:p-14 text-center">

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                  NOOH Quality Assurance
                </p>


                <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-12">
                  Built for Long-Term Performance
                </h2>


                <div className="grid md:grid-cols-2 gap-10">

                  <div>

                    <p className="text-white/60 mb-3">
                      Stretch Fabric Warranty
                    </p>

                    <p className="text-4xl font-luxury font-bold text-gold-300">
                      {product.warranty.fabric}
                    </p>

                  </div>


                  <div>

                    <p className="text-white/60 mb-3">
                      LED Lighting Warranty
                    </p>

                    <p className="text-4xl font-luxury font-bold text-gold-300">
                      {product.warranty.led}
                    </p>

                  </div>

                </div>

              </div>

            </motion.section>

          )}



          {/* ================================================= */}
          {/* CTA */}
          {/* ================================================= */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-gold rounded-3xl p-10 md:p-14 text-center"
          >

            <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
              Let's Create Something Extraordinary
            </p>


            <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-8">
              Transform Your Space with {product.title}
            </h2>


            <p className="max-w-4xl mx-auto text-white/70 text-lg leading-relaxed mb-10">
              Discover how STRETCHÉ™ PRINT technology can transform your
              interior with seamless illumination, premium printing and
              exceptional architectural design.
            </p>


            <div className="flex flex-col sm:flex-row justify-center gap-5">

              <a
                href="/contact"
                className="btn-luxury"
              >
                Request Free Consultation
              </a>


              <a
                href="/catalogue/STRETCHE_PRINT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold"
              >
                Download Catalogue
              </a>

            </div>

          </motion.section>

        </section>

      </div>
    </>
  );
};

export default PrintDetails;