import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaBullseye, FaHeart } from 'react-icons/fa';
import BeforeAfterFranchise from '../pages/BeroreAfterFranchise';

const Franchise = () => {
  return (
    <>
      <Helmet>
        <title>Franchise - NOOH Living Elevated</title>
        <meta name="description" content="Learn about NOOH Living Elevated - your trusted partner in luxury interior design and stretch ceiling solutions." />
      </Helmet>

      <div className="min-h-screen bg-luxury-black">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070"
              alt="About NOOH"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/60 to-luxury-black" />
          </div>
          
          <div className="relative z-10 container-custom mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-luxury font-bold text-gold-300 mb-6"
            >
              Become a Franchise Partner
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-loose pb-2 overflow-visible"
            >
             Join one of India's growing luxury interior brands and deliver exceptional spaces with our trusted business model.
            </motion.p>
          </div>
        </section>

      {/* Before and after */}
      <BeforeAfterFranchise/>

        {/* Mission, Vision, Values */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-gold rounded-2xl p-8 text-center hover:scale-105 smooth-transition"
              >
                <FaEye className="text-6xl text-luxury-gold mx-auto mb-6" />
                <h3 className="text-2xl font-luxury font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  To be India's most trusted and innovative luxury interior design company, 
                  setting new benchmarks in quality, design excellence, and customer satisfaction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-gold rounded-2xl p-8 text-center hover:scale-105 smooth-transition"
              >
                <FaBullseye className="text-6xl text-luxury-gold mx-auto mb-6" />
                <h3 className="text-2xl font-luxury font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  To transform spaces into timeless masterpieces by delivering premium interior 
                  solutions with cutting-edge technology, superior craftsmanship, and unmatched service.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-gold rounded-2xl p-8 text-center hover:scale-105 smooth-transition"
              >
                <FaHeart className="text-6xl text-luxury-gold mx-auto mb-6" />
                <h3 className="text-2xl font-luxury font-bold text-white mb-4">Our Values</h3>
                <p className="text-white/80 leading-relaxed">
                  Excellence, integrity, innovation, and customer-centricity guide everything 
                  we do. We believe in building lasting relationships through quality and trust.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose NOOH */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-7xl font-luxury font-bold text-gold-300 mb-6">
                Why Choose NOOH?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the difference that true craftsmanship and dedication make
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                'Premium Quality Materials',
                '21+ Years Warranty Support',
                'Expert Design Team',
                'Pan India Service Network',
                'Timely Project Completion',
                'Competitive Pricing',
                'ISO Certified Processes',
                'Turnkey Project Management',
                '24/7 Customer Support',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass rounded-xl p-6 flex items-center space-x-4 hover:glass-gold smooth-transition"
                >
                  <div className="w-3 h-3 bg-luxury-gold rounded-full flex-shrink-0" />
                  <p className="text-white font-semibold">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Franchise;
