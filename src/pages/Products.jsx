import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    'all',
    'Stretch Ceilings',
    'Fiber Optic',
    'Wall Coverings',
    'LED Panels',
    'mirrors',
    'decorative ',
    'flooring',
  ];

  const products = [
    {
      id: 1,
      title:'STRETCHE™ STRETCH CEILING',
      category: 'Stretch Ceilings',
      image: '/images/stretch-ceiling-manufacted.png',
    },
    {
      id: 2,
      title: 'STRETCHE™ FIBER OPTIC',
      category: 'Fiber Optic',
      image: '/images/FIBER-OPTIC-NOOH.webp',
    },
    {
      id: 3,
      title: 'STRETCHE™ PANEL LIGHTING',
      category: 'LED Panels',
      image: '/service/led-backlite-panel.png',
    },
    {
      id: 4,
      title: 'Cloudwave™ ',
      category: 'LED Panels',
      image: '/service/cloudewave.png',
    },
    {
      id: 5,
      title: 'NOOH Prism™ ',
      category: 'mirrors',
      image: '/service/nooh-prism.png',
    },
     {
      id: 6,
      title: 'CLOUDWAVE™ GLOSS TEXTILE CEILING ',
      category: 'mirrors',
      image: '/service/cloudewave-textile.png',
    },
    {
      id: 7,
      title: 'EPOXY DECORS™ 3D EPOXY FLOORING',
      category: 'flooring',
      image: '/service/epoxy-decore.png',
    },
    {
      id: 8,
      title: 'NOOH MIRROR™',
      category: 'mirrors',
      image: '/service/nooh-mirror.png',
    },
       {
      id: 9,
      title: 'STRETCHÉ™ PILLAR STRETCH CEILING SYSTEM',
      category: 'Stretch Ceilings',
      image: '/service/stretch-piller.png',
    }, {
      id: 10,
      title: 'STRETCHÉ™ KITCHEN STRETCH CEILING SYSTEM',
      category: 'Stretch Ceilings',
      image: '/service/stretch-kitchen.png',
    },


    {
      id: 11,
      title: 'STRETCHÉ™ DOME STRETCH CEILING SYSTEM',
      category: 'Stretch Ceilings',
      image: '/service/stretch-dome.png',
    },
    {
      id: 12,
      title: 'RESTAURANT DECORS™',
      category: 'decorative ',
      image: '/service/restorant-decor.png',
    },
     {
      id: 13,
      title: 'NOOH – WallSculpt™',
      category: 'decorative ',
      image: '/service/WallSculpt.jpeg',
    },
  ];

  const filteredProducts =
    activeFilter === 'all'
      ? products
      : products.filter((product) => product.category === activeFilter);

  return ( 
    <>
      <Helmet>
        <title>Product Gallery -Stretch Ceiling, Textile Ceiling & LED Backlit Panels| NOOH Living Elevated</title>
        <meta
          name="description"
          content="Browse our premium collection of stretch ceilings, fiber optic systems, wall coverings, and luxury furniture."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-gray pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-luxury-black">
          <div className="container-custom mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-luxury font-bold text-gold-300 mb-6"
            >
              Product Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Discover our exquisite collection of premium interior solutions
            </motion.p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="section-padding pt-0">
          <div className="container-custom mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full uppercase text-sm font-semibold tracking-wider smooth-transition ${
                    activeFilter === category
                      ? 'bg-luxury-gold text-luxury-black'
                      : 'glass text-white hover:glass-gold'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -10 }}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer h-80"
                    onClick={() => setLightboxImage(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 smooth-transition"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent opacity-80 group-hover:opacity-90 smooth-transition" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-luxury-gold text-xs uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h3 className="text-white text-xl font-luxury font-bold mt-2">
                        {product.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-luxury font-bold text-white mb-2">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-luxury-gold">{lightboxImage.category}</p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-8 right-8 text-white text-4xl hover:text-luxury-gold smooth-transition"
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Products;
