import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { stretchCategories } from "../../data/StretchCeilingdata";

const StretchCeiling = () => {
  return (
    <>
      <Helmet>
        <title>Stretch Ceiling Solutions - NOOH Living Elevated</title>
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-24">

{/* Cards Section */}
<section className="pb-20 bg-luxury-black">
  <div className="max-w-6xl mx-auto px-5 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-8">
      {stretchCategories.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="  w-full max-w-[400px] group overflow-hidden rounded-2xl bg-[#141414] border border-white/10 hover:border-luxury-gold/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 md:h-60 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col">
            <h3 className="text-xl lg:text-2xl font-luxury font-bold text-white mb-3">
              {item.title}
            </h3>

            <p className="text-white/70 text-[15px] leading-6 flex-grow">
              {item.description}
            </p>

   <Link
  to={item.path}
  className="mt-6 mx-auto inline-flex items-center gap-2 rounded-lg bg-luxury-gold px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-500 transition-all duration-300"
>
  View Details
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</Link>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      </div>
    </>
  );
};

export default StretchCeiling;
