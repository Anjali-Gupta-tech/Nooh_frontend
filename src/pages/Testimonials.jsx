import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  

  const videos = [
    "/video/testimonial1.mp4",
    "/video/testimonial2.mp4",
    "/video/testimonial3.mp4",
    "/video/testimonial4.mp4",
    "/video/testimonial5.mp4",
    "/video/testimonial6.mp4",
    "/video/testimonial7.mp4",
    "/video/testimonial8.mp4",
    "/video/testimonial9.mp4",
  ];

  return (
    <>
      <Helmet>
        <title>Client Testimonials - NOOH Living Elevated</title>
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-24">
     

        {/* SWIPER TEXT TESTIMONIALS */}
       

        {/* VIDEO TESTIMONIALS */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                Product Videos
              </h2>
              <p className="text-xl text-white/70">
                Explore Our Products, Projects & Installations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  md:gap-8">
              {videos.map((video, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-video glass rounded-2xl overflow-hidden"
                >
                  <video
                    src={video}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    muted
                    loop
                    playsInline
                    controls
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold text-gradient-gold">98%</h3>
              <p className="text-white/70">Client Satisfaction</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-gradient-gold">1000+</h3>
              <p className="text-white/70">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-gradient-gold">189+</h3>
              <p className="text-white/70">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-gradient-gold">21+</h3>
              <p className="text-white/70">Years Warranty</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;
