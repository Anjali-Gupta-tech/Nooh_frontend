import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import PremiumCatalogueButton from "../components/PremiumCatalogueButton";

const Services = () => {
  const services = [
    {
   title: (
  <>
    STRETCHE<sup>™</sup> Stretch Ceiling Specialist  by NOOH
  </>
),
   subheading: 'Premium Architectural Stretch Ceiling Systems',
    description:(
    <>
    STRETCH<sup>™</sup> by NOOH is a premium, lightweight and seamless ceiling system designed to transform ordinary ceilings into modern architectural features. Its flexible membrane offers fast installation, easy maintenance and exceptional design freedom for residential and commercial interiors.,
    </>
  ),
  categories: [
    {
      title: (
        <>
          STRETCHE<sup>™</sup>  TRANSLUCENT
        </>
      ),
      subtitle: 'Translucent & Illuminated Ceiling',
      link: '/products/stretch-ceiling/translucent',
    },
    {
      title: (
        <>
          STRETCHE<sup>™</sup> PRINT
        </>
      ),
      subtitle: 'Customized Printed Stretch Ceiling',
      link: '/products/stretch-ceiling/print',
    
    },
    {
      title: (
        <>
          STRETCHE<sup>™</sup> GLOSS
        </>
      ),
      subtitle: 'High-Gloss Reflective Ceiling',
      link: '/products/stretch-ceiling/gloss',
    },
    {
  title: (
    <>
      STRETCHE<sup>™</sup> PANEL
    </>
  ),
  subtitle: 'Premium Decorative Ceiling Panel',
  link: '/products/stretch-ceiling/panel',
},
  ],

  image: '/images/Stretch-Ceiling.jpeg',
  pdf: '/catalogue/STRETCHE_TM_STRETCH_CEILING_PANEL.pdf',
},
  {
  title: (
    <>
      FIBERSKY<sup>™</sup> Fiber Optic Star Ceiling
    </>
  ),

  subheading: "Premium Fiber Optic Star Ceiling Systems",

  description: (
    <>
      STRETCHE<sup>™</sup> Fiber Optic Star Ceiling by NOOH creates stunning
      starry sky effects using advanced fiber optic lighting technology.
      Designed for luxury homes, hotels, cinemas, spas, and commercial spaces,
      it delivers a magical ambiance with customizable star patterns, shooting
      stars, and dynamic lighting effects.
    </>
  ),

  categories: [
    {
      title: (
        <>
          FIBERSKY<sup>™</sup> STATIC 
        </>
      ),
      subtitle: "Realistic Starry Night Ceiling",
      link: "/products/fiber-optic/star-sky",
    },
    {
      title: (
        <>
          FIBERSKY<sup>™</sup> TWINKLE
        </>
      ),
      subtitle: "Dynamic Twinkling Star Ceiling",
      link: "/products/fiber-optic/twinkling-star",
    },
    {
      title: (
        <>
          FIBERSKY<sup>™</sup> RGB
        </>
      ),
      subtitle: "Color-Changing RGB Star Ceiling",
      link: "/products/fiber-optic/rgb-star",
    },
    {
      title: (
        <>
        FIBERSKY<sup>™</sup> GALAXY PRO
        </>
      ),
      subtitle: "Milky Way & Galaxy Ceiling",
      link: "/products/fiber-optic/galaxy-star",
    },
  ],

  image: "/images/FIBER-OPTIC-NOOH.webp",
  pdf:"/catalogue/fiber-optic-star-lights.pdf"
},
    
      {
  title: (
    <>
      STRETCHE<sup>™</sup> Embroidery Wall Covering Fabric
    </>
  ),

  subheading: "Premium Embroidered Wall Covering Systems",

  description: (
    <>
      STRETCHE<sup>™</sup> Embroidery Wall Covering Fabric by NOOH combines
      luxurious embroidered textures with premium wall finishes to create
      elegant interiors. Designed for residences, hotels, offices, retail
      spaces, and hospitality projects, it delivers timeless aesthetics,
      acoustic comfort, and exceptional craftsmanship.
    </>
  ),

  categories: [
    {
      title: (
        <>
          STRETCHE<sup>™</sup> FLORAL
        </>
      ),
      subtitle: "Elegant Floral Embroidered Fabric",
      link: "/products/embroidery-wall-covering/floral",
    },
    {
      title: (
        <>
          STRETCHE<sup>™</sup> GEOMETRIC
        </>
      ),
      subtitle: "Contemporary Pattern Embroidery",
      link: "/products/embroidery-wall-covering/geometric",
    },
    {
      title: (
        <>
          STRETCHE<sup>™</sup> ABSTRACT
        </>
      ),
      subtitle: "Luxury Artistic Embroidery Design",
      link: "/products/embroidery-wall-covering/abstract",
    },
    {
      title: (
        <>
          STRETCHE<sup>™</sup> CUSTOM
        </>
      ),
      subtitle: "Bespoke Embroidered Wall Fabric",
      link: "/products/embroidery-wall-covering/custom",
    },
  ],

  image: "/images/embroidery-wall.png",
  pdf: "embroidery-wall-covering.pdf"
},
    ,
    {
      title: 'Wall Mural Printing',
      description: 'Custom wall murals that bring your vision to life with stunning high-resolution printing.',
      features: ['HD Printing Quality', 'Custom Designs', 'Durable Materials', 'Professional Installation'],
      image: '/images/wall-mural.png',
      pdf: 'wall-mural-printing.pdf'
    },
    {
      title: 'LED Backlit Ceiling & Wall Panels',
      description: 'Innovative LED lighting solutions including our NOOH SKYLUME™ artificial daylight systems.',
      features: ['Virtual Sky Ceiling', 'RGBW Systems', 'Tunable White', 'Energy Efficient'],
      image: '/images/led-backlit.png',
      pdf: 'led-backlit-ceiling-wall-panels.pdf'
    },
    {
      title: 'Luxury Interior Design',
      description: 'Complete interior design solutions tailored to your lifestyle and preferences.',
      features: ['3D Visualization', 'Space Planning', 'Custom Furniture', 'Turnkey Execution'],

      image: '/image/laxury.jpg',
      pdf: 'luxury-interior-design.pdf'
    },
    {
      title: 'Modular Kitchen',
      description: 'Functional and stylish modular kitchens designed to maximize space and efficiency.',
      features: ['Custom Layouts', 'Premium Hardware', 'Smart Storage', 'Modern Finishes'],
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2068',
      pdf: 'modular-kitchen.pdf'
    },
    {
      title: 'Luxury Furniture',
      description: 'Bespoke luxury furniture pieces that combine comfort, style, and craftsmanship.',
      features: ['Custom Design', 'Premium Materials', 'Expert Craftsmanship', 'Unique Pieces'],
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070',
      pdf: 'luxury-furniture.pdf'
    },
    {
      title: 'Turnkey Construction',
      description: 'End-to-end project management from concept to completion for residential and commercial spaces.',
      features: ['Complete Project Management', 'Quality Assurance', 'Timely Delivery', 'Post-Delivery Support'],
      image: '/image/tumkey-img.png',
      pdf: 'turnkey-construction.pdf'
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - NOOH Living Elevated</title>
        <meta name="description" content="Explore our comprehensive luxury interior design services including stretch ceilings, fiber optic systems, and turnkey projects." />
      </Helmet>

      <div className="min-h-screen pt-24">
        {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
<div className="absolute inset-0">
  {/* Desktop Image */}
  <img
    src="/images/service-hero-image.png"
    alt="NOOH Premium Services"
    className="hidden md:block w-full h-full object-cover object-center"
  />

  {/* Mobile Image */}
  <img
    src="/images/service-hero-mobile.png"
    alt="NOOH Premium Services"
    className="block md:hidden w-full h-full object-cover object-center"
  />
</div>

  {/* Dark Overlay */}

  <div className="absolute inset-0 bg-black/20"></div>

  {/* Gold Gradient Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r"></div>

  {/* Content */}

  <div className="relative z-10 container-custom mx-auto text-center px-6">


  </div>

</section>
      
{/* Services Grid */}

<section className="section-padding bg-luxury-gray">

  <div className="container-custom mx-auto">

    <div className="space-y-24">

      {services.map((service, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >

          {/* LEFT */}

         <div className={index % 2 === 1 ? "lg:order-2" : ""}>

  <h2 className="text-3xl md:text-5xl font-luxury font-bold text-white mb-4">
    {service.title}
  </h2>

  {service.subheading && (
    <p className="text-gold-300 text-xl mb-5">
      {service.subheading}
    </p>
  )}

  <p className="text-white/80 text-lg leading-relaxed mb-8">
    {service.description}
  </p>

  {service.categories ? (

    <>
      <h4 className="text-gold-300 uppercase tracking-[3px] text-sm font-semibold mb-6">
        Product Categories
      </h4>

      <div className="grid md:grid-cols-2 gap-5">

        {service.categories.map((item, idx) => (
          <Link
            key={idx}
            to={item.link}
            className="group rounded-2xl border border-gold-300/20 bg-white/[0.03] p-6 hover:border-gold-300 hover:bg-gold-300/10 transition"
          >
            <h3 className="text-xl font-bold text-gold-300">
              {item.title}
            </h3>

            <p className="text-white/60 mt-2">
              {item.subtitle}
            </p>
          </Link>
        ))}

      </div>
    </>

  ) : (

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

      {service.features?.map((feature, idx) => (

        <div
          key={idx}
          className="flex items-center space-x-3"
        >
          <div className="w-2 h-2 rounded-full bg-luxury-gold" />

          <span className="text-white/90">
            {feature}
          </span>
        </div>

      ))}

    </div>

  )}
   {/*download button*/}
 <div className="mt-10">

 <div className="mt-10">
  {service.pdf && (
    <PremiumCatalogueButton
      pdf={service.pdf}
    />
  )}
</div>

</div>
</div>

          {/* RIGHT */}

          <div className={index % 2 === 1 ? "lg:order-1" : ""}>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[650px] object-cover"
              />

            </motion.div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>  


        {/* CTA Section */}

        <section className="section-padding">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-gold rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and let's bring your vision to life
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact" className="btn-luxury">
                  Schedule Consultation
                </Link>
                <a href="tel:+919540060180" className="btn-outline-gold">
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
