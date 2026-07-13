import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Homeowner",
      location: "Greater Noida",
      rating: 5,
      text: "NOOH Living Elevated transformed our villa with their stunning stretch ceiling and fiber optic star ceiling. ",
      project: "Luxury Villa Interior",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
    },
    {
      name: "Priya Sharma",
      role: "Interior Designer",
      location: "Gurgaon",
      rating: 5,
      text: "NOOH Living stands out for innovation and quality. Their SKYLUME system is a game-changer for basement spaces.",
      project: "Residential Basement",
      image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200"
    },
    {
      name: "Amit Patel",
      role: "Hotel Owner",
      location: "Mumbai",
      rating: 4,
      text: "Fiber optic ceilings in our suites amazed guests. The 21-year warranty gives peace of mind.",
      project: "5-Star Hotel Suites",
      image: "",
    },
    {
      name: "Neha Verma",
      role: "Homeowner",
      location: "Delhi",
      rating: 5,
      text: "The stretch ceiling completely transformed our living room. The team was professional, punctual, and delivered beyond our expectations.",
      project: "Luxury Apartment Interior",
      image: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?q=80&w=1200"
    },
    {
      name: "Rohit Malhotra",
      role: "Business Owner",
      location: "Noida",
      rating: 4,
      text: "Our office now has a premium look thanks to the modern stretch ceiling design. Clients are always impressed when they visit.",
      project: "Corporate Office Renovation",
      image: "https://images.unsplash.com/photo-1676989880361-091e12efc056?q=80&w=1170",
    },
    {
      name: "Sneha Kapoor",
      role: "Interior Designer",
      location: "Gurgaon",
      rating: 5,
      text: "NOOH Living's attention to detail and product quality is outstanding. Their team executed every aspect of the design flawlessly.",
      project: "Luxury Villa Interior",
      image: "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=1200"
    },
    {
      name: "Vikram Singh",
      role: "Restaurant Owner",
      location: "Jaipur",
      rating: 5,
      text: "The illuminated ceiling has become the highlight of our restaurant. Customers frequently compliment the elegant ambience.",
      project: "Fine Dining Restaurant",
      image: "",
    },
    {
      name: "Pooja Mehta",
      role: "Architect",
      location: "Ahmedabad",
      rating: 5,
      text: "The installation was seamless, and the finish exceeded my expectations.",
      project: "Modern Duplex Residence",
      image: "https://i.pinimg.com/1200x/51/c0/65/51c065b5427007a3cc8560a0149efefe.jpg",
    },
    {
      name: "Arjun Nair",
      role: "Villa Owner",
      location: "Bengaluru",
      rating: 5,
      text: "From consultation to installation, everything was handled professionally. The ceiling design has added exceptional elegance to our home.",
      project: "Designer Villa",
      image: "",
    },
    {
      name: "Karan Bhatia",
      role: "Hotel Manager",
      location: "Hyderabad",
      rating: 4,
      text: "Our guests love the luxurious ceiling design in the lobby. The quality, lighting, and craftsmanship are simply outstanding.",
      project: "Luxury Hotel Lobby",
      image: "",
    },
  ];

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
        {/* HERO SECTION */}
        <section className="section-padding">
          <div className="container-custom mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-luxury font-bold text-gold-300 mb-6"
            >
              Client Testimonials
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.2 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Hear from our satisfied clients about their experience with NOOH
              Living Elevated
            </motion.p>
          </div>
        </section>

        {/* SWIPER TEXT TESTIMONIALS */}
        <section className="section-padding pt-0">
          <div className="container-custom mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-gold rounded-2xl p-8 h-full"
                  >
                    <FaQuoteLeft className="text-4xl text-luxury-gold/30 mb-6" />

                    {/*  review  */}
                    {/* Name */}
                    {/* Image + Name */}
                    <div className="flex items-center gap-4 mb-5">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-luxury-gold"
                      />

                      <h4 className="text-white font-bold text-lg">
                        {testimonial.name}
                      </h4>
                    </div>
                    <div className="flex space-x-1 my-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-luxury-gold text-lg" />
                      ))}
                    </div>
                    {/* Stars */}
                    <div className="border-t border-luxury-gold/20 pt-6">
                      {/* Role & Location */}
                      <p className="text-white/60 text-sm">
                        {testimonial.role} • {testimonial.location}
                      </p>

                      {/* Project */}
                      <p className="text-luxury-gold text-sm font-semibold mt-2 mb-6">
                        Project: {testimonial.project}
                      </p>

                      {/* Testimonial */}
                      <p className="text-white/80 italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* VIDEO TESTIMONIALS */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                Video Testimonials
              </h2>
              <p className="text-xl text-white/70">
                Watch our clients share their experience
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
