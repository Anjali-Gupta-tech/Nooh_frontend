import React from "react";
import { motion } from "framer-motion";

const beforeAfterProjects = [
  {
    id: 1,
    title: "Luxury Villa Living Room",
    location: "Gurgaon",
    image: "https://i.pinimg.com/736x/ea/62/02/ea62026e749f42ae62058a37aab924a2.jpg",
  },
  {
    id: 2,
    title: "Premium Office",
    location: "Delhi NCR",
    image: "https://images.unsplash.com/photo-1715593948040-d013495c3647?q=80&w=1170",
  },
  {
    id: 3,
    title: "Hotel Reception",
    location: "Mumbai",
    image: "https://i.pinimg.com/1200x/e0/65/00/e06500af478052c6ab1d5fca4360fc4c.jpg",
  },
  {
    id: 4,
    title: "Luxury Bedroom",
    location: "Noida",
    image: "https://i.pinimg.com/736x/1a/e2/05/1ae205d2d1aff7611f6e008045306ed9.jpg",
  },
];

const BeforeAfterFranchise = () => {
  return (
    <section className="section-padding bg-luxury-black">
      <div className="container-custom mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-luxury text-white tracking-wide leading-tight">
            Before <span className="text-luxury-gold">&</span> After
            Transformations
          </h3>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {beforeAfterProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="glass-gold rounded-3xl overflow-hidden border border-luxury-gold/20"
            >

              {/* Title */}
              <div className="p-6 pb-2">
                <h3 className="text-2xl font-luxury font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-luxury-gold mt-2">
                  {project.location}
                </p>
              </div>

              {/* Single Before & After Image */}
              <div className="p-6 pt-4">
                <div className="relative overflow-hidden rounded-xl group">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterFranchise;