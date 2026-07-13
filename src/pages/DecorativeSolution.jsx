import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaLayerGroup, FaShieldAlt, FaVolumeUp, FaTools } from "react-icons/fa";

const DecorativeSolution = () => {
  const features = [
    {
      icon: FaLayerGroup,
      title: "Modern Decorative Designs",
      description:
        "A wide range of contemporary decorative ceiling designs to enhance any interior.",
    },
    {
      icon: FaShieldAlt,
      title: "Durable & Low Maintenance",
      description:
        "High-quality materials that are long-lasting, easy to clean, and resistant to wear.",
    },
    {
      icon: FaVolumeUp,
      title: "Acoustic Performance",
      description:
        "Acoustic ceiling solutions that reduce noise and improve sound quality in any space.",
    },
    {
      icon: FaTools,
      title: "Professional Installation",
      description:
        "Experienced installation team delivering precision and exceptional finishing.",
    },
  ];

  const gallery = [
   "https://images.unsplash.com/photo-1663811397561-32239541a455?q=80&w=2050",
    "https://images.unsplash.com/photo-1672860044506-e3ec09653e82?q=80&w=1170",
   "https://images.unsplash.com/photo-1738315452518-373851d3e0ba?q=80&w=880",
   "https://images.unsplash.com/photo-1668911491756-efb778ca35a6?q=80&w=1170",
  ];
  return (
    <>
      <Helmet>
        <title>Decorative Solutions | Filter Webs</title>

        <meta
          name="description"
          content="Premium decorative ceiling solutions for residential, commercial, industrial, hospitality, healthcare, and educational spaces. Customized ceiling systems with professional installation."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-24">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1774551351897-c64cd76a7c22?q=80&w=1270"
              alt="Ceiling "
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b bg-black/60" />
          </div>

          <div className="relative z-10 container-custom mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-luxury font-bold text-gold-300 mb-6">
                <span className="text-white">Premium</span> <span>Decorative </span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-8">
              
              </p>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
                Our decorative solutions are designed to enhance the aesthetics,
                functionality, and comfort of interior spaces. We offer a wide
                range of modern decorative systems suitable for residential,
                commercial, hospitality, healthcare, and industrial
                environments.
              </p>
              <Link to="/contact" className="btn-luxury text-lg">
                Request Demo
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What is Decorative  Solution  */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                  What are
                  <span> Decorative Solutions?</span>
                </h2>

                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                 Decorative solutions are designed to enhance the aesthetics, functionality, and comfort of interior spaces. 
                 They offer a wide range of modern systems suitable for various environments.
                 
                </p>

                <p className="text-white/80 mb-6 leading-relaxed text-lg">
                  Our decorative systems are manufactured using high-quality materials to ensure superior strength, durability, and long-lasting performance.
                  
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <p className="text-white/90">
                      Premium quality ceiling materials
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <p className="text-white/90">
                      Modern and customized ceiling designs
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <p className="text-white/90">
                      Acoustic, fire-resistant, and moisture-resistant solutions
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full" />
                    <p className="text-white/90">
                      Professional installation with long-lasting durability
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
                  alt="Decorative Installation"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                Key Features
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the benefits of natural daylight anywhere
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-gold rounded-2xl p-8 text-center hover:scale-105 smooth-transition"
                >
                  <feature.icon className="text-5xl text-luxury-gold mx-auto mb-4" />
                  <h3 className="text-xl font-luxury font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                Installation Gallery
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                See Premium Decorative Solutions in action across various applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl h-96 cursor-pointer group"
                >
                  <img
                    src={image}
                    alt={`Premium Ceiling Gallery ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 smooth-transition"
                  />
                  <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-luxury-black/40 smooth-transition" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
      {/* Applications */}
<section className="section-padding">
  <div className="container-custom mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
        Ideal Applications
      </h2>

      <p className="text-xl text-white/70 max-w-3xl mx-auto">
        Our decorative systems are designed to enhance aesthetics, functionality,
        and comfort across a wide range of residential and commercial spaces.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        "Residential Homes & Apartments",
        "Corporate Offices",
        "Hotels & Resorts",
        "Hospitals & Healthcare Facilities",
        "Educational Institutions",
        "Shopping Malls & Retail Stores",
        "Restaurants & Cafés",
        "Conference & Meeting Rooms",
        "Airports & Public Buildings",
      ].map((application, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="glass rounded-xl p-6 hover:glass-gold smooth-transition"
        >
          <p className="text-white text-lg font-semibold">
            {application}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
        {/* CTA */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-gold rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                Transform Your Space with Premium Ceiling Solutions
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Elevate the aesthetics and functionality of your interiors 
              </p>
              <Link to="/contact" className="btn-luxury">
                Contact Us Today
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );

}
export default DecorativeSolution;
