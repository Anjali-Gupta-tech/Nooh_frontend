import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const galleryImages = [
 "https://i.pinimg.com/736x/53/84/7d/53847d243f3d12b74b044d34da99d492.jpg",
 "https://i.pinimg.com/736x/be/4e/5a/be4e5a01d5879bda4a14fda013a44548.jpg",
"https://i.pinimg.com/1200x/fe/30/32/fe3032d62eac1f3060e1385bbcdaf270.jpg",
"https://i.pinimg.com/736x/a9/00/61/a90061505733516c6923ad32f4ce00b2.jpg",
"https://i.pinimg.com/736x/d1/64/29/d164291456b80c24ccaba48e07685d52.jpg",
"https://i.pinimg.com/736x/14/4c/ee/144cee243b89c6da21e1acef7daabaee.jpg"

]

const Metallicpoxyflooring = () => {
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
        <title>Metallic Poxy Flooring | NOOH Living</title>
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
              Metallic Poxy Flooring
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Enhance interiors with premium flooring solutions featuring elegant finishes, exceptional durability, and seamless installation for residential and commercial spaces.
            </motion.p>

          </div>
        </section>

        {/* Gallery */}
        <section className="pb-24">
          <div className="container-custom mx-auto">

            <motion.div
              initial={{ opacity:0,y:30 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
            >
              <h2 className="text-4xl font-luxury text-white text-center mb-4">
                Product Gallery
              </h2>

              <p className="text-white/70 text-center mb-14 max-w-3xl mx-auto">
                Click any image to view it in full size.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {galleryImages.map((image,index)=>(
                <motion.div
                  key={index}
                  whileHover={{ scale:1.03 }}
                  className="overflow-hidden rounded-2xl glass-gold cursor-pointer"
                  onClick={()=>openImage(index)}
                >

                  <img
                    src={image}
                    alt=""
                    className="w-full h-80 object-cover hover:scale-110 transition duration-500"
                  />

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

export default Metallicpoxyflooring;