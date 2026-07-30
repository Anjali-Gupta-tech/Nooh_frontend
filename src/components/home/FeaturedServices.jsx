import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { 
  FaCog, 
  FaStar, 
  FaPaintBrush, 
  FaLightbulb, 
  FaCouch, 
  FaBuilding 
} from 'react-icons/fa';

const FeaturedServices = () => {
  const services = [
    {
      icon: FaCog,
      title: (
      <>
        STRETCHE
        <sup className="text-[60%] align-super ml-[1px]">™</sup>
        {" "}Stretch Ceiling
      </>
    ),
      description: 'Premium textile & translucent stretch ceiling systems with innovative designs and superior quality.',
      image: '/images/stretch-ceiling-manufacted.png',
    },
    {
      icon: FaStar,
      title: 'Fiber Optic Star Ceiling',
      description: 'Transform your space with mesmerizing star ceiling effects and galaxy ceiling systems.',
      image: '/images/FIBER-OPTIC-NOOH.webp',
    },
    {
      icon: FaPaintBrush,
      title: 'Embroidery Wall Covering',
      description: 'Luxurious embroidered wall fabrics and custom wall mural printing for elegant interiors.',
      image: '/images/embroidery-wall.png',
    },
    {
      icon: FaLightbulb,
      title: 'LED Backlit Panels',
      description: 'Energy-efficient LED ceiling and wall panels with RGBW & tunable white systems.',
      image: '/images/led-backlit-panel.png',
    },
    {
      icon: FaCouch,
      title: 'Luxury Interior Design',
      description: 'Complete interior design solutions with modular kitchens and bespoke luxury furniture.',
      image: '/images/luxury-interior.jpeg',
    },
    {
      icon: FaBuilding,
      title: 'Turnkey Construction',
      description: 'End-to-end construction and turnkey project management for residential & commercial spaces.',
      image: '/image/tumkey-img.jpeg',
    },
  ];

  return (
    <section className="section-padding bg-luxury-black">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
            Our Premium Services
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Comprehensive luxury interior solutions designed to elevate your living spaces
          </p>
        </motion.div>

        {/* Services Grid */}
  

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <Link
      key={index}
      to="/services"
      className="block"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-2xl glass cursor-pointer h-full"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transform group-hover:scale-110 smooth-transition"
          />
          <div className="absolute inset-0 bg-luxury-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-end">
          <service.icon className="text-5xl text-luxury-gold mb-4 group-hover:scale-110 smooth-transition" />

          <h3 className="text-2xl font-luxury font-bold text-white mb-3 group-hover:text-luxury-gold smooth-transition">
            {service.title}
          </h3>

          <p className="text-white/70 mb-6">
            {service.description}
          </p>

          <span className="text-luxury-gold font-semibold uppercase text-sm tracking-wider animated-underline inline-block">
            Learn More →
          </span>
        </div>
      </motion.div>
    </Link>
  ))}
</div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/services" className="btn-luxury">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;
