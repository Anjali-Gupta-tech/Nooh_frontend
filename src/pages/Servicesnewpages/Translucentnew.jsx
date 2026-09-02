import React from "react";
import BookNowModel from "../../components/BookNowModel";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useState } from "react";


const Translucentnew = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
const [selectedType, setSelectedType] = useState("");
  return (

    <>
      <Helmet>
        <title>STRETCHÉ™ TRANSLUCENT | NOOH Living Elevated</title>
        <meta
          name="description"
          content="Premium translucent stretch ceiling with Static, Tunable, RGBW and Dynamic lighting technology."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black text-white pt-24">

        {/* HERO */}

       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/service/translucent-head.png"
      alt="STRETCHÉ TRANSLUCENT"
      className="h-full w-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40" />
  </div>


  {/* Gold Bottom Line */}
  <div className="absolute bottom-0 left-0 right-0 z-20 h-[3px] bg-[#d6af45]" />


  {/* HERO CONTENT */}
  <div className="relative z-10 w-full px-6 text-center">

    <div className="container-custom mx-auto text-center">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4"
      >
        STRETCHÉ™ Collection
      </motion.p>


      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-luxury font-bold mb-6"
      >
        STRETCHÉ
        <sup className="relative -top-5 ml-1 text-xl md:text-3xl">
          ™
        </sup>{" "}
        TRANSLUCENT
      </motion.h1>


      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl mx-auto text-white/70 text-xl leading-relaxed"
      >
        Premium translucent stretch ceiling system supporting four
        advanced lighting technologies, from elegant architectural
        lighting to intelligent programmable lighting experiences.
      </motion.p>

    </div>

  </div>

</section>

        {/* LIGHTING */}

        <section className="section-padding  mx-auto py-24 bg-luxury-gray ">

         {/* TYPE 1 */}
        
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[0.95fr_1.05fr] xl:gap-28 gap-16 items-center mb-32"
          >
   <div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/images/translucent1.png"
    alt="translucent-image"
    className="w-full h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105"
  />
</div>
   
            <div>

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-2">
                Type 1
              </p>

              <h2 className="text-5xl font-luxury font-bold mb-3">
                STATIC WHITE
              </h2>

              <h3 className="text-2xl text-gold-300 font-semibold mb-6">
                Fixed CCT LED System
              </h3>

              <p className="text-white/70 leading-loose mb-6">

                This configuration uses a single fixed color-temperature LED
                such as <strong>3000K</strong>, <strong>4000K</strong>,
                <strong>6000K</strong> or <strong>10000K</strong> depending on
                the desired visual effect. The ceiling remains consistently
                illuminated at the selected white-light temperature.

              </p>

              <p className="text-white/70 leading-loose mb-8">

                <span className="text-gold-300 font-semibold">
                  Best For :
                </span>{" "}

                Ceilings, Offices, Retail Spaces, Corridors and projects
                requiring simple, clean and consistent illumination.

              </p>


              <div className="grid grid-cols-2 gap-5">

                <div className="glass rounded-2xl p-5">

                  <p className="text-gold-300 text-sm uppercase mb-2">
                    Control
                  </p>

                  <h4 className="text-xl font-semibold">
                    ON / OFF
                  </h4>

                </div>


                <div className="glass rounded-2xl p-5">

                  <p className="text-gold-300 text-sm uppercase mb-2">
                    CCT
                  </p>

                  <h4 className="text-xl font-semibold">
                    Fixed
                  </h4>

                </div>


                <div className="glass rounded-2xl p-5">

                  <p className="text-gold-300 text-sm uppercase mb-2">
                    Color Changing
                  </p>

                  <h4 className="text-xl font-semibold">
                    No
                  </h4>

                </div>


                <div className="glass rounded-2xl p-5">

                  <p className="text-gold-300 text-sm uppercase mb-2">
                    Dynamic Effects
                  </p>

                  <h4 className="text-xl font-semibold">
                    No
                  </h4>

                </div>
                   
                   
              </div>
                 {/* BOOK THIS TYPE BUTTON */}

              <button
                type="button"
                onClick={() => {
                  setSelectedType("STATIC WHITE");
                  setBookingOpen(true);
                }}
                className="mt-8 px-7 py-3 rounded-full border border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-black transition"
              >
                BUY THIS →
              </button>
            </div>

          </motion.div>
        
{/* ================= TYPE 2 ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="grid lg:grid-cols-2 gap-20 items-center mb-32"
>

  <div>

    <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-2">
      Type 2
    </p>

    <h2 className="text-5xl font-luxury font-bold mb-3">
      TUNABLE WHITE
    </h2>

    <h3 className="text-2xl text-gold-300 font-semibold mb-6">
      Dimmable + Tunable CCT LED System
    </h3>

    <p className="text-white/70 leading-loose mb-6">

      Type 2 provides complete control over both brightness and
      white-light temperature. The ambience can be adjusted from
      warmer to cooler white according to the application,
      time of day and desired mood.

    </p>

    <p className="text-white/70 leading-loose mb-8">

      For example, a translucent ceiling can create a warm,
      relaxing ambience during the evening and a bright,
      daylight appearance during working hours.

    </p>

    <div className="grid grid-cols-2 gap-5">

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          Control
        </p>
        <h4 className="text-lg font-semibold">
          Dimming + CCT
        </h4>
      </div>

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          Brightness
        </p>
        <h4 className="text-lg font-semibold">
          Adjustable
        </h4>
      </div>

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          White Temperature
        </p>
        <h4 className="text-lg font-semibold">
          Adjustable
        </h4>
      </div>

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          RGB Colours
        </p>
        <h4 className="text-lg font-semibold">
          No
        </h4>
      </div>

    </div>
<button
  type="button"
  onClick={() => {
    setSelectedType("TUNABLE WHITE");
    setBookingOpen(true);
  }}
  className="mt-8 px-7 py-3 rounded-full border border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-black transition"
>
  BUY THIS →
</button>
  </div>

   <div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/images/translucent2.png"
    alt="translucent-image"
    className="w-full h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105"
  />
</div>

</motion.div>



{/* ================= TYPE 3 ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="grid lg:grid-cols-2 gap-20 items-center mb-32"
>

   <div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/images/translucent3.png"
    alt="translucent-image"
    className="w-full h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105"
  />
</div>

  <div>

    <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-2">
      Type 3
    </p>

    <h2 className="text-5xl font-luxury font-bold mb-3">
      RGBW
    </h2>

    <h3 className="text-2xl text-gold-300 font-semibold mb-6">
      Dimmable + Tunable White + Colour Changing
    </h3>

    <p className="text-white/70 leading-loose mb-6">

      Type 3 integrates RGBW LED technology, providing premium
      white illumination together with a wide range of coloured
      lighting effects. Users can control brightness,
      white-light settings and RGB colours from a single system.

    </p>

    <p className="text-white/70 leading-loose mb-8">

      A printed sky ceiling can appear as natural daylight,
      then transition into sunset, blue sky or decorative
      colour scenes to create completely different moods.

    </p>

    <div className="grid grid-cols-2 gap-5">

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          Control
        </p>
        <h4 className="text-lg font-semibold">
          White + RGB
        </h4>
      </div>

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          Brightness
        </p>
        <h4 className="text-lg font-semibold">
          Adjustable
        </h4>
      </div>

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          Colour Change
        </p>
        <h4 className="text-lg font-semibold">
          Yes
        </h4>
      </div>

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          Preset Scenes
        </p>
        <h4 className="text-lg font-semibold">
          Yes
        </h4>
      </div>

    </div>
<button
  type="button"
  onClick={() => {
    setSelectedType("RGBW");
    setBookingOpen(true);
  }}
  className="mt-8 px-7 py-3 rounded-full border border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-black transition"
>
  BUY THIS  →
</button>
  </div>

</motion.div>
{/* ================= TYPE 4 ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="grid lg:grid-cols-2 gap-20 items-center mb-32"
>

  <div>

    <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-2">
      Type 4
    </p>

    <h2 className="text-5xl font-luxury font-bold mb-3">
      DYNAMIC PIXEL
    </h2>

    <h3 className="text-2xl text-gold-300 font-semibold mb-6">
      RGBW Pixel + DMX / MADRIX Programmable System
    </h3>

    <p className="text-white/70 leading-loose mb-6">

      The most advanced STRETCHÉ™ lighting configuration.
      Individually addressable RGBW Pixel LEDs are controlled
      through DMX and compatible platforms such as MADRIX,
      allowing different zones behind the translucent membrane
      to operate independently.

    </p>

    <p className="text-white/70 leading-loose mb-8">

      Instead of changing the entire ceiling to one colour,
      Dynamic Pixel technology enables moving clouds,
      sunrise & sunset sequences, flowing light, waves,
      gradients, chasing effects and fully programmable
      animated lighting experiences.

    </p>

    <div className="grid grid-cols-2 gap-5">

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          Control
        </p>
        <h4 className="text-lg font-semibold">
          DMX / Pixel
        </h4>
      </div>

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          RGBW
        </p>
        <h4 className="text-lg font-semibold">
          Yes
        </h4>
      </div>

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          Motion Effects
        </p>
        <h4 className="text-lg font-semibold">
          Yes
        </h4>
      </div>

      <div className="glass rounded-2xl p-5">
        <p className="text-gold-300 text-sm uppercase mb-2">
          Custom Scenes
        </p>
        <h4 className="text-lg font-semibold">
          Unlimited
        </h4>
      </div>

    </div>
<button
  type="button"
  onClick={() => {
    setSelectedType("DYNAMIC PIXEL");
    setBookingOpen(true);
  }}
  className="mt-8 px-7 py-3 rounded-full border border-gold-300 text-gold-300 hover:bg-gold-300 hover:text-black transition"
>
  BUY THIS →
</button>
  </div>

    <div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/images/translucent4.png"
    alt="translucent-image"
    className="w-full h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105"
  />
</div>

</motion.div>

{/* ================= CTA ================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="glass-gold rounded-3xl p-12 text-center"
>

  <h2 className="text-4xl md:text-5xl font-luxury font-bold mb-6">
    Transform Your Space with STRETCHÉ™
  </h2>

  <p className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
    From elegant static illumination to fully programmable Dynamic Pixel
    lighting, STRETCHÉ™ Translucent Stretch Ceiling systems are designed
    to create premium architectural experiences for luxury residential,
    commercial and hospitality projects.
  </p>

  <div className="flex flex-col sm:flex-row gap-5 justify-center">

    <a
      href="/contact"
      className="btn-luxury"
    >
      Get Free Consultation
    </a>

    <a
      href="/catalogue.pdf"
      className="btn-outline-gold"
    >
      Download Catalogue
    </a>

  </div>

</motion.div>

</section>
      {/* YOUR EXISTING CTA SECTION */}

      <BookNowModel
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        productName="STRETCHÉ™ TRANSLUCENT"
        selectedType={selectedType}
      />

  
</div>

</>
);
};

export default Translucentnew;