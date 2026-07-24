import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Translucentnew = () => {
  return (
    <>
      <Helmet>
        <title>STRETCHÉ™ TRANSLUCENT | NOOH Elevated Living</title>
        <meta
          name="description"
          content="Premium translucent stretch ceiling systems with Static White, Tunable White, RGBW and Dynamic Pixel lighting."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black text-white pt-24">

        {/* Hero */}
     

        {/* Lighting Technology */}
{/* ================= Lighting Technology ================= */}

<section className="container-custom mx-auto py-24">

  <div className="text-center mb-20">

    <p className="text-gold-300 uppercase tracking-[4px] text-sm font-semibold mb-3">
      Advanced Lighting System
    </p>

    <h2 className="text-5xl md:text-6xl font-luxury font-bold text-white mb-6">
      Lighting Technology
    </h2>

    <p className="text-white/70 max-w-3xl mx-auto text-lg leading-relaxed">
      STRETCHÉ™ Translucent Ceiling supports four advanced lighting
      technologies, allowing you to create everything from elegant
      architectural lighting to dynamic programmable experiences.
    </p>

  </div>

  {/* TYPE 1 */}

  <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">

    <img
      src="/image/Ceiling1.webp"
      alt="Static White LED Stretch Ceiling"
      className="rounded-3xl w-full h-[420px] object-cover shadow-2xl"
    />

    <div>

      <span className="text-gold-300 text-lg font-semibold tracking-widest">
        TYPE 1
      </span>

      <h3 className="text-4xl font-bold text-white mt-2 mb-2">
        STATIC
      </h3>

      <h4 className="text-2xl text-gold-300 font-semibold mb-4">
        Fixed CCT LED
      </h4>

      <p className="text-white/70 leading-loose">
        Static White lighting provides a fixed white-light temperature,
        delivering clean, uniform illumination with consistent brightness.
        It is ideal for homes, offices, retail spaces and hospitality
        environments where stable architectural lighting is required.
      </p>

    </div>

  </div>

  {/* TYPE 2 */}

  <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">

    <div>

      <span className="text-gold-300 text-lg font-semibold tracking-widest">
        TYPE 2
      </span>

      <h3 className="text-4xl font-bold text-white mt-2 mb-2">
        TUNABLE
      </h3>

      <h4 className="text-2xl text-gold-300 font-semibold mb-4">
        Dimmable + Tunable White LED
      </h4>

      <p className="text-white/70 leading-loose">
        Adjust both brightness and white colour temperature from warm white
        to cool daylight. Perfect for creating different moods throughout
        the day while improving comfort, productivity and ambience.
      </p>

    </div>

    <img
      src="/image/Ceiling2.webp"
      alt="Tunable White Stretch Ceiling"
      className="rounded-3xl w-full h-[420px] object-cover shadow-2xl"
    />

  </div>

  {/* TYPE 3 */}

  <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">

    <img
      src="/image/Ceiling3.webp"
      alt="RGBW Stretch Ceiling"
      className="rounded-3xl w-full h-[420px] object-cover shadow-2xl"
    />

    <div>

      <span className="text-gold-300 text-lg font-semibold tracking-widest">
        TYPE 3
      </span>

      <h3 className="text-4xl font-bold text-white mt-2 mb-2">
        RGBW
      </h3>

      <h4 className="text-2xl text-gold-300 font-semibold mb-4">
        RGBW LED
      </h4>

      <p className="text-white/70 leading-loose">
        Combines dimming, tunable white and millions of vibrant colours
        within one intelligent lighting system. RGBW technology delivers
        immersive architectural lighting for luxury interiors, hotels,
        restaurants and entertainment spaces.
      </p>

    </div>

  </div>

  {/* TYPE 4 */}

  <div className="grid lg:grid-cols-2 gap-16 items-center">

    <div>

      <span className="text-gold-300 text-lg font-semibold tracking-widest">
        TYPE 4
      </span>

      <h3 className="text-4xl font-bold text-white mt-2 mb-2">
        DYNAMIC
      </h3>

      <h4 className="text-2xl text-gold-300 font-semibold mb-4">
        RGBW Pixel / DMX / MADRIX
      </h4>

      <p className="text-white/70 leading-loose">
        Advanced programmable lighting system capable of creating motion,
        pixel animations and synchronized lighting effects. Ideal for luxury
        hotels, commercial buildings, event spaces and iconic architectural
        installations.
      </p>

    </div>

    <img
      src="/image/Ceiling4.webp"
      alt="Dynamic Pixel Stretch Ceiling"
      className="rounded-3xl w-full h-[420px] object-cover shadow-2xl"
    />

  </div>

</section>

      </div>
    </>
  );
};

export default Translucentnew;