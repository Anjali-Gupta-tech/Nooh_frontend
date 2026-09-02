import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const Stretchprint = () => {
  return (
    <>
      <Helmet>
        <title>STRETCHÉ™ Print | NOOH Living Elevated</title>
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
      src="/images/stretch-print-hero.png"
      alt="STRETCHÉ PRINT"
      className="h-full w-full object-cover"
    />

```
{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/40" />
```

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
    PRINT
  </motion.h1>


  <motion.p
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="max-w-4xl mx-auto text-white/70 text-xl leading-relaxed"
  >
    STRETCHÉ™ PRINT transforms ceilings into stunning architectural
    features using high-resolution customised artwork combined with
    advanced backlighting technology.
  </motion.p>

</div>


  </div>

</section>




        {/* LIGHTING */}

        <section className="section-padding  mx-auto py-24 bg-luxury-gray">

      {/* TYPE 1 */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[0.95fr_1.05fr] xl:gap-28 gap-16 items-center mb-32"
          >
  <div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/images/printed1.jpeg"
    alt="translucent-image"
    className="w-full h-[600px] rounded-3xl transition-transform duration-500 hover:scale-105"
  />
</div>
          

            <div>
<p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-2">
  Type 1
</p>

<h2 className="text-5xl font-luxury font-bold mb-3">
  STATIC CCT
</h2>

<h3 className="text-2xl text-gold-300 font-semibold mb-6">
  Fixed White Backlighting
</h3>

<p className="text-white/70 leading-loose mb-6">
  <strong>STRETCHÉ™ PRINT Type 1</strong> combines the customised printed
  stretch ceiling with a single selected <strong>Fixed CCT LED lighting
  system</strong>. Depending on the desired appearance, the project can be
  configured with a white-light temperature such as
  <strong> 3000K</strong>, <strong>4000K</strong>,
  <strong>6000K</strong> or <strong>10000K</strong>.
  Once selected, the ceiling delivers clean, consistent and uniform
  backlighting across the entire printed surface.
</p>

<p className="text-white/70 leading-loose mb-8">
  <span className="text-gold-300 font-semibold">
    Ideal For :
  </span>{" "}
  Printed Sky Ceilings, Residential Interiors, Offices, Retail Stores,
  Showrooms and projects where simple, uniform illumination is required.
</p>

<div className="grid grid-cols-2 gap-5">

  <div className="glass rounded-2xl p-5">
    <p className="text-gold-300 text-sm uppercase mb-2">
      Fixed CCT
    </p>

    <h4 className="text-xl font-semibold">
      Yes
    </h4>
  </div>

  <div className="glass rounded-2xl p-5">
    <p className="text-gold-300 text-sm uppercase mb-2">
      Backlighting
    </p>

    <h4 className="text-xl font-semibold">
      Uniform
    </h4>
  </div>

  <div className="glass rounded-2xl p-5">
    <p className="text-gold-300 text-sm uppercase mb-2">
      Operation
    </p>

    <h4 className="text-xl font-semibold">
      ON / OFF
    </h4>
  </div>

  <div className="glass rounded-2xl p-5">
    <p className="text-gold-300 text-sm uppercase mb-2">
      Configuration
    </p>

    <h4 className="text-xl font-semibold">
      Cost Effective
    </h4>
  </div>

</div>


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
  Dimmable + Tunable CCT Backlighting
</h3>

<p className="text-white/70 leading-loose mb-6">
  <strong>STRETCHÉ™ PRINT Type 2</strong> takes lighting control one step
  further by integrating a <strong>Dimmable + Tunable White LED
  System</strong> behind the printed ceiling. Instead of being limited to
  one fixed white-light temperature, users can adjust both
  <strong> brightness</strong> and the
  <strong> white-light colour temperature</strong> to create the perfect
  ambience for different environments and times of the day.
</p>

<p className="text-white/70 leading-loose mb-6">
  Using a compatible <strong>remote, mobile app or lighting controller</strong>,
  the ceiling can transition from a warm, relaxing atmosphere during the
  evening to a bright daylight appearance for working environments,
  providing maximum flexibility without changing the printed design.
</p>

<p className="text-white/70 leading-loose mb-8">
  <span className="text-gold-300 font-semibold">
    Ideal For :
  </span>{" "}
  Luxury Homes, Hotels, Meeting Rooms, Restaurants, Offices, Premium
  Retail Spaces and Hospitality Interiors requiring adjustable white
  lighting.
</p>

<div className="grid grid-cols-2 gap-5">

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      Control
    </p>

    <h4 className="text-xl font-semibold">
      Remote / App
    </h4>

  </div>

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      Brightness
    </p>

    <h4 className="text-xl font-semibold">
      Adjustable
    </h4>

  </div>

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      White Temperature
    </p>

    <h4 className="text-xl font-semibold">
      Tunable
    </h4>

  </div>

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      Mood Control
    </p>

    <h4 className="text-xl font-semibold">
      Dynamic Ambience
    </h4>

  </div>

</div>
 </div>

   <div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/images/printed2.jpeg"
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
    src="/images/printed3.jpeg"
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
  Colour Changing + Dimmable + Tunable Lighting
</h3>

<p className="text-white/70 leading-loose mb-6">
  <strong>STRETCHÉ™ PRINT Type 3</strong> integrates an advanced
  <strong> RGBW LED lighting system</strong>, dramatically expanding the
  creative possibilities of printed stretch ceilings. Along with tunable
  white-light control and dimming capabilities, RGBW technology enables
  the ceiling to display a full spectrum of vibrant colours while
  maintaining natural white lighting whenever required.
</p>

<p className="text-white/70 leading-loose mb-6">
  A single printed ceiling can transform from a bright daylight sky to
  warm sunset-inspired tones, decorative colours or fully customised
  lighting scenes. Using compatible <strong>remote or app-based
  controllers</strong>, users can instantly switch between lighting moods
  for different occasions and environments.
</p>

<p className="text-white/70 leading-loose mb-8">
  <span className="text-gold-300 font-semibold">
    Ideal For :
  </span>{" "}
  Luxury Homes, Hotels, Restaurants, Lounges, Experience Centres,
  Premium Retail Spaces, Hospitality Interiors and feature ceilings
  requiring colour-changing ambience.
</p>

<div className="grid grid-cols-2 gap-5">

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      RGBW Lighting
    </p>

    <h4 className="text-xl font-semibold">
      Yes
    </h4>

  </div>

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      Brightness
    </p>

    <h4 className="text-xl font-semibold">
      Adjustable
    </h4>

  </div>

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      White Light
    </p>

    <h4 className="text-xl font-semibold">
      Tunable
    </h4>

  </div>

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      Preset Scenes
    </p>

    <h4 className="text-xl font-semibold">
      Multiple
    </h4>

  </div>

</div>
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
  DYNAMIC
</h2>

<h3 className="text-2xl text-gold-300 font-semibold mb-6">
  RGBW + DMX / Programmable Dynamic Lighting
</h3>

<p className="text-white/70 leading-loose mb-6">
  <strong>STRETCHÉ™ PRINT Type 4</strong> is the most advanced lighting
  configuration in the range, combining
  <strong> addressable RGB/RGBW LEDs</strong> with
  <strong> DMX / Pixel Controllers</strong> and programmable lighting
  software. Individual lighting zones or pixels can be controlled
  independently, transforming a printed ceiling into a fully interactive
  visual experience.
</p>

<p className="text-white/70 leading-loose mb-6">
  Dynamic lighting sequences such as moving clouds, flowing light,
  sunrise & sunset effects, colour waves, chasing light and atmospheric
  animations can be created to bring printed artwork to life. Instead of
  simply illuminating the ceiling, Type 4 allows lighting, print and
  programming to work together as one immersive experience.
</p>

<p className="text-white/70 leading-loose mb-8">
  <span className="text-gold-300 font-semibold">
    Ideal For :
  </span>{" "}
  Luxury Hotels, Airports, Museums, Experience Centres, Corporate
  Headquarters, Retail Flagship Stores, Entertainment Venues and iconic
  architectural projects requiring immersive programmable lighting.
</p>

<div className="grid grid-cols-2 gap-5">

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      Pixel Control
    </p>

    <h4 className="text-xl font-semibold">
      DMX / RGBW
    </h4>

  </div>

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      Dynamic Effects
    </p>

    <h4 className="text-xl font-semibold">
      Enabled
    </h4>

  </div>

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      Motion Scenes
    </p>

    <h4 className="text-xl font-semibold">
      Unlimited
    </h4>

  </div>

  <div className="glass rounded-2xl p-5">

    <p className="text-gold-300 text-sm uppercase mb-2">
      Automation
    </p>

    <h4 className="text-xl font-semibold">
      Advanced
    </h4>

  </div>

</div>
  </div>

   <div className="rounded-3xl overflow-hidden shadow-2xl">
  <img
    src="/images/printed4.jpeg"
    alt="translucent-image"
    className="w-full h-[650px] rounded-3xl transition-transform duration-500 hover:scale-105"
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
    Bring Your Designs to Life with STRETCHÉ™ PRINT
  </h2>

  <p className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
    Transform ordinary ceilings into extraordinary architectural features
    with high-resolution customised printed stretch ceilings. From elegant
    backlit artwork to intelligent RGBW and Dynamic Pixel lighting,
    STRETCHÉ™ PRINT delivers limitless design possibilities for luxury
    residential, commercial and hospitality interiors.
  </p>

  <div className="flex flex-col sm:flex-row gap-5 justify-center">

    <a
      href="/contact"
      className="btn-luxury"
    >
      Request a Free Consultation
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

</div>

</>
);
};

export default Stretchprint;