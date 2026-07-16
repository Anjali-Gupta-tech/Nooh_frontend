import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FaLayerGroup, FaShieldAlt, FaVolumeUp, FaTools } from "react-icons/fa";

const FloorSolution = () => {
   const features = [
      {
        icon: FaLayerGroup,
        title: "Innovative Wall Systems",
        description:
          "Modern wall solutions that combine aesthetics, functionality, and durability for every type of interior and exterior space.",
      },
      {
        icon: FaShieldAlt,
        title: "Premium Quality Materials",
        description:
          "Manufactured using high-quality materials to ensure superior strength, weather resistance, and long-lasting performance.",
      },
      {
        icon: FaVolumeUp,
        title: "Acoustic & Thermal Insulation",
        description:
          "Enhance comfort by reducing noise levels and improving thermal efficiency with advanced wall systems.",
      },
      {
        icon: FaTools,
        title: "Expert Installation",
        description:
          "Our skilled professionals provide precise installation with exceptional craftsmanship and attention to detail.",
      },
    ];
   const floorCategories = [
  {
    id: 1,
    title: "Metallic Epoxy Flooring",
    description:
      "Premium metallic epoxy flooring with a seamless, glossy finish, offering exceptional durability and a luxurious appearance for residential and commercial interiors.",
    image: "https://images.unsplash.com/photo-1745273592779-97139de233b8?w=1200",
    path: "/metallic-epoxy-flooring",
  },
  {
    id: 2,
    title: "3D Mural Epoxy Flooring",
    description:
      "Custom 3D epoxy flooring featuring stunning mural designs that create depth, realism, and a unique visual experience for modern spaces.",
    image: "https://plus.unsplash.com/premium_photo-1751481392884-839c80d90687?q=80&w=1332",
    path: "/3d-mural-epoxy-flooring",
  },
  {
    id: 3,
    title: "Wooden Flooring",
    description:
      "Elegant wooden flooring solutions that combine natural beauty, warmth, and long-lasting performance for homes, offices, hotels, and commercial spaces.",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200",
    path: "/wooden-flooring",
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
        <title>Premium Flooring | Filter Webs</title>

        <meta
          name="description"
          content="Premium ceiling solutions for residential, commercial, industrial, hospitality, healthcare, and educational spaces. Customized ceiling systems with professional installation."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-24">
       

         

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
                Explore Floor Categories
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience the benefits of natural daylight anywhere
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {floorCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-gold rounded-2xl p-4 text-center hover:scale-105 smooth-transition"
                >
                 <div className="overflow-hidden">
                   <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-56 object-cover rounded-xl mb-5"
                  />
                 </div>
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
                        Discover the exceptional qualities that make our wall solutions
                        the perfect choice for any project.
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
                Our floor  systems are designed to enhance aesthetics,
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

export default FloorSolution;
