import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1633681117690-262b94a01378?w=1200",
"https://images.unsplash.com/photo-1568060965761-76ea3db880b5?q=80&w=1200",
"https://images.unsplash.com/photo-1774769924168-ecc7d0a2a809?q=80&w=1200",
"https://i.pinimg.com/736x/1c/c5/8e/1cc58efc00911b61cf5a6278613b8a33.jpg",
"https://i.pinimg.com/736x/46/8f/2d/468f2d5cb87abff33cea3d09401e6952.jpg",
"https://i.pinimg.com/736x/a2/00/88/a20088ed6347d9d16965c19d468c141b.jpg"


]

const ThreeDStretchCeiling = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(next);
    setSelectedImage(galleryImages[next]);
  };

  const prevImage = () => {
    const prev =
      currentIndex === 0
        ? galleryImages.length - 1
        : currentIndex - 1;

    setCurrentIndex(prev);
    setSelectedImage(galleryImages[prev]);
  };

  return (
    <>
      <Helmet>
        <title>3D Printed Stretch Ceiling | NOOH Living</title>
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-24">

        {/* Hero */}
        <section className="section-padding">
          <div className="container-custom mx-auto text-center">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-luxury font-bold text-gold-300 mb-6"
            >
              3D Printed Stretch Ceiling
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Enhance interiors with premium printed stretch ceiling
              solutions featuring customized graphics, luxury finishes,
              and seamless installation.
            </motion.p>

          </div>
        </section>

        {/* Gallery */}
       {/* Gallery */}
<section className="pb-24">
  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <h2 className="text-4xl md:text-5xl font-luxury font-bold text-white mb-4">
        Product Gallery
      </h2>

      <p className="text-white/70 max-w-2xl mx-auto">
        Explore our collection of premium 3D printed stretch ceiling designs.
        Click any image to view it in full size.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

      {galleryImages.map((image, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171717] shadow-lg hover:shadow-2xl hover:border-luxury-gold/40 transition-all duration-500 cursor-pointer"
          onClick={() => openImage(index)}
        >

          <div className="overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

      </div>

      {/* Lightbox */}

      {selectedImage && (

        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center"
          onClick={()=>setSelectedImage(null)}
        >

          {/* Close */}

          <button
            className="absolute top-6 right-8 text-white text-6xl"
            onClick={()=>setSelectedImage(null)}
          >
            ×
          </button>

          {/* Previous */}

          <button
            className="absolute left-8 text-white text-6xl"
            onClick={(e)=>{
              e.stopPropagation();
              prevImage();
            }}
          >
            ❮
          </button>

          {/* Image */}

          <img
            src={selectedImage}
            alt=""
            className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl"
            onClick={(e)=>e.stopPropagation()}
          />

          {/* Next */}

          <button
            className="absolute right-8 text-white text-6xl"
            onClick={(e)=>{
              e.stopPropagation();
              nextImage();
            }}
          >
            ❯
          </button>

        </div>

      )}

    </>
  );
};

export default ThreeDStretchCeiling;