import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaLayerGroup, FaShieldAlt, FaVolumeUp, FaTools } from "react-icons/fa";

const CeilingSolution = () => {
  const categories = [
    {
      title: "Stretch Ceiling",
      description:
        "Premium stretch ceiling solutions for residential and commercial spaces.",
      image: "/image/Ceiling1.jpeg",
      path: "/stretch-ceiling",
    },
    {
      title: "Mural Ceiling",
      description: "Custom printed ceiling murals with stunning visuals.",
      image: "https://images.unsplash.com/photo-1742025853877-322c705f3ba8?q=80&w=1200",
      path: "/mural-ceiling",
    },
    {
      title: "French Virtual Sunroof Ceiling ",
      description:
        "Luxury virtual sky ceilings with realistic daylight effects.",
      image: "/image/Ceiling4.jpeg",
      path: "/french-virtual-sunroof",
    },
     {
      title: "Asif Textile Ceiling",
      description: "Creative textile ceiling designs with elegant finishes.",
      image: "https://images.unsplash.com/photo-1765106893043-ad32bbd759ac?w=1200",
      path: "/asif-textile-ceiling",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1633681117690-262b94a01378?w=1200",
    "https://images.unsplash.com/photo-1657106415228-6293a4abe6a0?w=1200",
    "https://plus.unsplash.com/premium_photo-1661883954124-f542bd113a02?w=1200",
    "https://plus.unsplash.com/premium_photo-1728776080538-653e418842c9?w=1200",
  ];
  return (
    <>
      <Helmet>
        <title>Ceiling Solutions | Filter Webs</title>

        <meta
          name="description"
          content="Premium ceiling solutions for residential, commercial, industrial, hospitality, healthcare, and educational spaces. Customized ceiling systems with professional installation."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-24">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1663006895289-37cfd433f00d?w=1200"
              alt="Ceiling "
              className="h-full w-full object-cover object-center"
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
                <span className="text-white">Premium</span> <span>Ceiling</span>
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-8">
                Elegant Ceiling Systems for Modern Spaces
              </p>
              <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
                Enhance every interior with innovative ceiling solutions that
                combine aesthetics, durability, and superior performance. We
                design and install customized ceiling systems for residential,
                commercial, hospitality, and industrial environments.
              </p>
              <Link to="/contact" className="btn-luxury text-lg">
                Request Demo
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Ceiling categories */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                Explore Ceiling Categories
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the benefits of natural daylight anywhere
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-gold rounded-2xl p-4 text-center hover:scale-105 smooth-transition"
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-56 object-cover rounded-xl mb-5"
                  />
                  <h2 className="text-xl font-luxury font-bold text-white mb-3">
                    {category.title}
                  </h2>
                  <p className="text-white/70 text-sm">
                    {category.description}
                  </p>
                  <Link
                    to={category.path}
                    className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-luxury-gold text-black rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300"
                  >
                    View Solutions →
                  </Link>
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
                Our ceiling systems are designed to enhance aesthetics,
                functionality, and comfort across a wide range of residential
                and commercial spaces.
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
};

export default CeilingSolution;
