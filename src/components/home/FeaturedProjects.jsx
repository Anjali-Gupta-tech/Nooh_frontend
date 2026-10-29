import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from 'swiper/modules';

const FeaturedProjects = () => {
  const products = [
    {
      id: 'stretch-translucent',
      title: 'STRETCHÉ™ TRANSLUCENT',
      category: 'Illuminated Stretch Ceiling',
      description:
        'A premium illuminated stretch ceiling system delivering seamless surfaces and uniform lighting, with static white, tunable white, RGBW, and dynamic lighting options.',
      image: '/service/translucent-main.webp',
      link: "/products/translucent/static-white",
    },
    {
      id: 'stretch-print',
      title: 'STRETCHÉ™ PRINT',
      category: 'Printed Stretch Ceiling',
      description:
        'Transform interiors with customised printed artwork and integrated LED illumination, featuring static, tunable, and dynamic lighting options.',
      image: '/service/print-stretch-ceiling.webp',
      link: '/products/print/static-cct',
    },
    {
      id: 'stretch-gloss',
      title: 'STRETCHÉ™ GLOSS',
      category: 'High-Gloss Ceiling',
      description:
        'A premium reflective stretch ceiling with a smooth, mirror-like finish that enhances light reflection and creates a sophisticated interior.',
      image: '/franchaise-hero/gloss-main.webp',
      link: '/products/stretch-ceiling/gloss',
    },
    {
      id: 'panel-lighting',
      title: 'STRETCHÉ™ PANEL LIGHTING',
      category: 'Architectural Lighting',
      description:
        'Premium backlit stretch panels combining seamless surfaces with advanced LED technology, available in white, tunable, printed, and RGBW options.',
      image: '/service/product-panel.webp',
      link: '/products/panel/white',
    },
    {
      id: 'fiber-optic',
      title: 'FIBERSKY™ STAR CEILING',
      category: 'Fiber Optic Lighting',
      description:
        'Create a captivating starry-sky effect with fiber-optic lighting, custom star patterns, twinkling effects, and dynamic illumination.',
      image: '/images/fiber-optics-hero.webp',
      link: '/products/fiber-optic/star-sky',
    },
    {
      id: 'architectural-wall-art',
      title: 'ARCHITECTURAL WALL ART™',
      category: 'Luxury Wall Décor',
      description:
        'Discover customised wallpapers, seamless patterns, decorative murals, and distinctive wall coverings designed for sophisticated interiors.',
      image: '/images/embroidery-wall.png',
      link: '/products/bespokewall',
    },
    
  ];

  return (
    <section className="section-padding bg-luxury-black overflow-hidden">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
            Featured Products
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover NOOH's premium stretch ceilings, innovative lighting
            systems, and luxury architectural surface solutions.
          </p>
        </motion.div>

        {/* Products Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1}
          spaceBetween={20}
          loop={products.length > 3}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          navigation
          className="featured-projects-slider"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="pb-16 h-auto">
              <motion.div
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-2xl group h-full min-h-[460px] bg-white/5 border border-white/10"
              >
                {/* Product Image */}
                <div className="h-64 overflow-hidden bg-white/5">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 smooth-transition"
                    onError={(event) => {
                      event.currentTarget.style.visibility = 'hidden';
                    }}
                  />
                </div>

                {/* Product Information */}
                <div className="p-6 flex flex-col">
                  <span className="text-luxury-gold text-xs uppercase tracking-widest mb-3">
                    {product.category}
                  </span>

                  <h3 className="text-xl font-luxury font-bold text-white mb-3">
                    {product.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-6 mb-6 flex-grow">
                    {product.description}
                  </p>

                  <Link
                    to={product.link}
                    className="text-luxury-gold font-semibold uppercase text-sm tracking-wider animated-underline inline-block"
                  >
                    Explore Product →
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/products" className="btn-luxury">
            Explore All Products
          </Link>
        </motion.div>
      </div>

      {/* Slider Styling */}
      <style>{`
        .featured-projects-slider {
          padding: 40px 0;
        }

        .featured-projects-slider .swiper-slide {
          height: auto;
        }

        .featured-projects-slider .swiper-button-next,
        .featured-projects-slider .swiper-button-prev {
          color: #d4af37;
        }

        .featured-projects-slider .swiper-pagination-bullet {
          background: #d4af37;
        }

        .featured-projects-slider .swiper-pagination {
          bottom: 0;
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;
