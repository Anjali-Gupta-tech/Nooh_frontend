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
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}SRTETCH CEILING
      </>
    ),
      description: 'Premium textile & translucent stretch ceiling systems with innovative designs and superior quality.',
      image: '/images/stretch-ceiling-manufacted.png',
    },
  {
  icon: FaLightbulb,
   title: (
      <>
        STRETCHE
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}FIBER OPTIC
      </>
    ),
  description:
    'Create a breathtaking starry sky with NOOH Fiber Optic Ceiling. ',
  image: '/images/FIBER-OPTIC-NOOH.webp',
},
    {
      icon: FaLightbulb,
        title: (
      <>
        STRETCHE
        <sup className="text-[60%] align-super ml-[1px]">™</sup>
        {" "}PANEL LIGHTING
      </>
    ),
      description: 'STRETCHE™ Panel Lighting combines high-quality stretch ceiling materials with advanced LED technology.',
      image: '/service/led-backlite-panel.png',
    },
    {
      icon: FaCouch,
           title: (
      <>
        ClOUDWAVE
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}
      </>
    ),
      description: 'CLOUDWAVE™ by NOOH Gloss Textile Ceiling combines a premium high-gloss textile finish with seamless installation to create elegant.',
      image: '/service/cloudewave.png',
    },
    {
      icon: FaBuilding,
         title: (
      <>
         NOOH PRISM
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}
      </>
    ),
      description: 'NOOH PRISM™ Decorative Customized Ceiling transforms ordinary ceilings into elegant architectural masterpieces.',
      image: '/service/nooh-prism.png',
    },

     {
      icon: FaStar,
         title: (
      <>
        CLOUDWAVE 
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}GLOSS TEXTILE CEILING 
      </>
    ),
      description: 'CLOUDWAVE™ by NOOH Gloss Textile Ceiling combines a premium high-gloss textile finish.',
      image: '/service/cloudewave-textile.png',
    },
    {
      icon: FaBuilding,
       title: (
      <>
        EPOXY DECORS 
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}3D EPOXY FLOORING
      </>
    ),
      description:'EPOXY DECORS™ 3D EPOXY FLOORING transforms ordinary floors into seamless.',
      image:'/service/epoxy-decore.png',
    },
    {
      icon: FaBuilding,
       title: (
      <>
        NOOH MIRROR
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}
      </>
    ),
      description: 'NOOH MIRROR™ Gloss Stretch Ceiling System features a premium high-gloss reflective finish in 21 elegant colors.' ,
      image: '/service/nooh-mirror.png',
    },
    {
      icon: FaBuilding,
        title: (
      <>
        STRETCHÉ
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}PILLAR
      </>
    ),
      description: 'STRETCHÉ™ Pillar Stretch Ceiling System transforms ordinary columns into illuminated architectural features.', 
      image: '/service/stretch-piller.png',
    },
    {
      icon: FaBuilding,
           title: (
      <>
        STRETCHÉ
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}KITCHEN STRETCH CEILING
      </>
    ),
      description: 'STRETCHÉ™ Kitchen Stretch Ceiling is a seamless, moisture-resistant ceiling system designed for modern kitchens. ',
      image: '/service/stretch-kitchen.png',
    },
    {
      icon: FaBuilding,
             title: (
      <>
        STRETCHÉ
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}DOME STRETCH CEILING
      </>
    ),
      description: 'STRETCHÉ™ Dome Stretch Ceiling System creates elegant curved and dome-shaped ceilings with seamless premium membranes.', 
      image: '/service/stretch-dome.png',
    },
    {
      icon: FaBuilding,
                title: (
      <>
        RESTAURANT DECORS
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}
      </>
    ),
      description: 'RESTAURANT DECORS™ offers innovative decorative ceiling ideas and customized ceiling systems.',
      image: '/service/restorant-decor.png',
    },
      {
      icon: FaBuilding,
                title: (
      <>
         NOOH – WallSculpt™
        <sup className="text-[50%] align-super ml-[1px]">™</sup>
        {" "}
      </>
    ),
      description: 'NOOH – WallSculpt™ offers innovative decorative wall solutions and customized installations.',
      image: '/service/Wallsculpt.jpeg',
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
