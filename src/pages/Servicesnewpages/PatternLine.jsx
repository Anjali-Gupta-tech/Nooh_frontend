import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

/* =========================================================
   PATTERNLINE™
   NOOH ARCHITECTURAL WALL ART
========================================================= */

/* =========================================================
   MODERN COLLECTIONS
========================================================= */

const modernCollections = [
  {
    name: "GeoForm™",
    subtitle: "Geometric & Contemporary",
    description:
      "Geometric shapes, lines, grids and contemporary formations.",
    image: "/images/patternline/geoform.webp",
  },
  {
    name: "MinimalMuse™",
    subtitle: "Soft & Understated",
    description:
      "Soft, clean and understated patterns for modern homes.",
    image: "/images/patternline/minimalmuse.webp",
  },
  {
    name: "AbstractRhythm™",
    subtitle: "Modern & Artistic",
    description:
      "Artistic strokes, curves, layers and free-flowing patterns.",
    image: "/images/patternline/abstractrhythm.webp",
  },
  {
    name: "LineCraft™",
    subtitle: "Architectural Line Art",
    description:
      "Architectural line art and refined monochrome compositions.",
    image: "/images/patternline/linecraft.webp",
  },
  {
    name: "ConcreteStory™",
    subtitle: "Industrial Texture",
    description:
      "Cement, plaster, industrial texture and exposed-surface effects.",
    image: "/images/patternline/concretestory.webp",
  },
  {
    name: "MetallicMotion™",
    subtitle: "Metallic Visual Effects",
    description:
      "Metallic visual effects with gold, silver, bronze and copper inspiration.",
    image: "/images/patternline/metallicmotion.webp",
  },
  {
    name: "Modern Botanica™",
    subtitle: "Contemporary Botanical",
    description:
      "Simplified leaves and florals for contemporary interiors.",
    image: "/images/patternline/modernbotanica.webp",
  },
];

/* =========================================================
   CLASSIC & HERITAGE COLLECTIONS
========================================================= */

const heritageCollections = [
  {
    name: "Royale Damask™",
    subtitle: "Luxury Damask",
    description:
      "Luxury damask patterns for bedrooms, lounges and formal drawing rooms.",
    image: "/images/patternline/royaledamask.webp",
  },
  {
    name: "Art Deco™",
    subtitle: "Structured Geometry",
    description:
      "Structured geometry inspired by glamorous architectural design.",
    image: "/images/patternline/artdeco.webp",
  },
  {
    name: "Mughal Garden™",
    subtitle: "Indian Heritage",
    description:
      "Floral patterns inspired by Indian palaces, gardens and miniature art.",
    image: "/images/patternline/mughalgarden.webp",
  },
  {
    name: "Heritage Loom™",
    subtitle: "Traditional Motifs",
    description:
      "Traditional motifs influenced by Indian textiles and craftsmanship.",
    image: "/images/patternline/heritageloom.webp",
  },
  {
    name: "Persian Elegance™",
    subtitle: "Ornamental Art",
    description:
      "Ornamental patterns with intricate floral and cultural detailing.",
    image: "/images/patternline/persian.webp",
  },
  {
    name: "Vintage Botanica™",
    subtitle: "Classic Botanical",
    description:
      "Classic botanical illustrations with an aged artistic appearance.",
    image: "/images/patternline/vintagebotanica.webp",
  },
  {
    name: "Palace Collection™",
    subtitle: "Regal Architectural Motifs",
    description:
      "Regal motifs created for luxury residential and hospitality interiors.",
    image: "/images/patternline/palace.webp",
  },
];

/* =========================================================
   DESIGN FACTORS
========================================================= */

const designFactors = [
  {
    title: "Wall Dimensions",
    text: "Exact proportions",
  },
  {
    title: "Pattern Scale",
    text: "Designed for the wall",
  },
  {
    title: "Colour Palette",
    text: "Interior coordination",
  },
  {
    title: "Pattern Continuity",
    text: "Seamless repeat",
  },
  {
    title: "Interior Style",
    text: "Visual harmony",
  },
  {
    title: "Project Type",
    text: "Residential / Commercial",
  },
];

/* =========================================================
   CUSTOMIZATION
========================================================= */

const customizationOptions = [
  {
    number: "01",
    title: "Pattern Selection",
    description:
      "Choose from contemporary, botanical, architectural, classic or heritage-inspired patterns.",
  },
  {
    number: "02",
    title: "Wall-Size Adjustment",
    description:
      "The selected pattern can be resized according to the exact dimensions of the wall.",
  },
  {
    number: "03",
    title: "Colour Customization",
    description:
      "Adapt the colour palette to coordinate with furniture, architecture and the interior.",
  },
  {
    number: "04",
    title: "Repeat Adjustment",
    description:
      "The repeat scale can be refined to create the desired visual rhythm across the wall.",
  },
  {
    number: "05",
    title: "Pattern Orientation",
    description:
      "Pattern direction and composition can be adjusted according to the wall and room.",
  },
  {
    number: "06",
    title: "Interior Coordination",
    description:
      "The final visual direction can be developed around the overall interior concept.",
  },
];

/* =========================================================
   APPLICATIONS
========================================================= */

const applications = [
  {
    title: "Multiple Walls",
    description:
      "Continuous repeat patterns developed across multiple wall surfaces.",
  },
  {
    title: "Large Rooms",
    description:
      "Pattern compositions designed to maintain visual balance across large interiors.",
  },
  {
    title: "Hotel Corridors",
    description:
      "Elegant repeat patterns for hospitality corridors and transitional spaces.",
  },
  {
    title: "Offices",
    description:
      "Refined patterns for professional and contemporary workspaces.",
  },
  {
    title: "Restaurants",
    description:
      "Decorative wall patterns that contribute to the atmosphere of dining spaces.",
  },
  {
    title: "Retail Stores",
    description:
      "High-impact pattern surfaces for customer-facing commercial environments.",
  },
  {
    title: "Bedrooms",
    description:
      "Sophisticated patterns for intimate residential interiors.",
  },
  {
    title: "Commercial Projects",
    description:
      "Scalable pattern solutions for larger commercial applications.",
  },
];

/* =========================================================
   PROCESS
========================================================= */

const process = [
  {
    number: "01",
    title: "Share Wall Dimensions",
    description:
      "Provide the exact wall size together with photographs or room details.",
  },
  {
    number: "02",
    title: "Select Pattern",
    description:
      "Choose a PatternLine™ collection according to the desired interior direction.",
  },
  {
    number: "03",
    title: "Set Pattern Scale",
    description:
      "The repeat pattern is adjusted according to the wall proportions.",
  },
  {
    number: "04",
    title: "Colour & Composition",
    description:
      "Confirm colour treatment, pattern orientation and overall visual balance.",
  },
  {
    number: "05",
    title: "Digital Preview",
    description:
      "Review a visual representation of how the pattern will appear on the wall.",
  },
  {
    number: "06",
    title: "Design Approval",
    description:
      "The approved composition is finalized for production.",
  },
  {
    number: "07",
    title: "Precision Production",
    description:
      "The final artwork is produced according to the approved specification.",
  },
  {
    number: "08",
    title: "Professional Installation",
    description:
      "The finished wall covering is delivered and professionally installed.",
  },
];

/* =========================================================
   MATERIALS
========================================================= */

const materials = [
  {
    title: "Non-Woven Wallpaper",
    description:
      "A versatile wall-covering option for smooth and refined interior applications.",
  },
  {
    title: "Textured Wallpaper",
    description:
      "Adds visual texture and depth to repeat-pattern compositions.",
  },
  {
    title: "Premium Canvas",
    description:
      "A textured artistic surface suited to selected statement wall applications.",
  },
  {
    title: "Fabric Wall Covering",
    description:
      "A soft premium decorative surface for sophisticated interiors.",
  },
  {
    title: "Washable Vinyl",
    description:
      "A practical surface option where easier maintenance is required.",
  },
  {
    title: "Metallic Finish",
    description:
      "Decorative metallic-inspired finishes for luxury and statement interiors.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function PatternLine() {
  return (
    <>
      <Helmet>
        <title>
          PATTERNLINE™ | Seamless Repeat Pattern Wallpaper | NOOH
        </title>

        <meta
          name="description"
          content="PATTERNLINE™ by NOOH — seamless repeat pattern wallpaper designed for continuous walls, large rooms, hospitality, offices, retail and commercial interiors."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black text-white pt-24">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative min-h-[78vh] flex items-center overflow-hidden">

          <img
            src="/service/patternline-img.png"
            alt="PATTERNLINE™"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

          <div className="relative z-10 container-custom mx-auto px-6 py-28">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="uppercase tracking-[5px] text-gold-300 font-semibold mb-5"
            >
              Architectural Wall Art™ · Division 02
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-luxury font-bold mb-6 max-w-5xl"
            >
              PATTERNLINE
              <sup className="text-[30%] align-super ml-1">
                ™
              </sup>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-2xl md:text-4xl text-gold-200 font-luxury mb-7"
            >
              Seamless Designs for Continuous Walls
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-3xl text-white/80 text-lg md:text-xl leading-relaxed"
            >
              Repeat-pattern wallpaper developed to continue smoothly
              across complete wall surfaces, creating visual continuity
              throughout the interior.
            </motion.p>

            <div className="flex flex-wrap gap-3 mt-9">

              {[
                "Seamless Repeat",
                "Wall-Size Scaling",
                "Colour Adaptation",
                "Continuous Patterns",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-gold-300/40 bg-black/30 text-sm text-white/80"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>
        </section>


        {/* =====================================================
            INTRODUCTION
        ===================================================== */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                  Seamless Repeat Wallpaper
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-7">

                  BEAUTIFUL
                  <br />
                  PATTERNS.
                  <br />

                  <span className="text-gold-300">
                    SEAMLESS CONTINUITY.
                  </span>

                </h2>

                <p className="text-white/70 text-lg leading-loose mb-6">
                  Repeat pattern wallpaper uses a design that continues
                  smoothly across the complete wall surface.
                </p>

                <p className="text-white/60 leading-loose">
                  PATTERNLINE™ brings repeat-pattern artwork into
                  architectural interiors. Designs can be resized,
                  recoloured and printed according to the scale and
                  ambience of the interior.
                </p>

              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden"
              >

                <img
                  src="/images/patternline/patternline-intro.webp"
                  alt="PATTERNLINE™ Interior"
                  className="w-full h-[560px] object-cover"
                />

              </motion.div>

            </div>


            {/* DESIGN FACTORS */}

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">

              {designFactors.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-5 text-center"
                >

                  <h3 className="text-gold-300 font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-white/50 text-sm">
                    {item.text}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            MODERN COLLECTIONS
        ===================================================== */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

            <div className="text-center max-w-4xl mx-auto mb-14">

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                PATTERNLINE™ COLLECTIONS
              </p>

              <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-5">
                MODERN PATTERN COLLECTIONS
              </h2>

              <p className="text-white/65 leading-relaxed">
                Contemporary patterns developed for modern interiors,
                ranging from geometric compositions and architectural
                linework to abstract, industrial, metallic and botanical
                expressions.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {modernCollections.map((collection, index) => (

                <motion.article
                  key={collection.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.6,
                  }}
                  className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold-300/40 transition-all duration-300"
                >

                  <div className="h-72 overflow-hidden">

                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                  </div>

                  <div className="p-6">

                    <p className="text-[10px] uppercase tracking-[3px] text-gold-300 mb-2">
                      Modern Collection
                    </p>

                    <h3 className="text-xl font-semibold text-gold-200 mb-2">
                      {collection.name}
                    </h3>

                    <p className="text-white/75 text-sm font-medium mb-3">
                      {collection.subtitle}
                    </p>

                    <p className="text-white/50 text-sm leading-relaxed">
                      {collection.description}
                    </p>

                  </div>

                </motion.article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CLASSIC & HERITAGE
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  Classic & Heritage Patterns
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">

                  TIMELESS
                  <br />

                  <span className="text-gold-300">
                    DECORATIVE WALLS
                  </span>

                </h2>

                <p className="text-white/65 leading-loose mb-8">
                  Heritage-inspired PatternLine™ collections bring
                  ornamental, classical and culturally inspired patterns
                  into contemporary luxury interiors.
                </p>

                <div className="space-y-3">

                  {heritageCollections.map((collection, index) => (

                    <div
                      key={collection.name}
                      className="flex items-center gap-4 p-4 border border-white/10 bg-white/[0.03] rounded-xl"
                    >

                      <span className="text-gold-300 font-semibold text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>

                        <p className="text-white/80 text-sm font-semibold">
                          {collection.name}
                        </p>

                        <p className="text-white/40 text-xs mt-1">
                          {collection.subtitle}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden"
              >

                <img
                  src="/images/patternline/heritage-patterns.webp"
                  alt="PATTERNLINE™ Heritage Patterns"
                  className="w-full h-[650px] object-cover"
                />

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            HERITAGE COLLECTIONS
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">

            <div className="text-center max-w-4xl mx-auto mb-14">

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                CLASSIC COLLECTION
              </p>

              <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-5">
                HERITAGE & CLASSIC
              </h2>

              <p className="text-white/60 leading-relaxed">
                Rich decorative directions inspired by classical design,
                Indian heritage, ornamental art and traditional
                craftsmanship.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {heritageCollections.map((collection, index) => (

                <motion.article
                  key={collection.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.6,
                  }}
                  className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold-300/40 transition-all duration-300"
                >

                  <div className="h-72 overflow-hidden">

                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                  </div>

                  <div className="p-6">

                    <p className="text-[10px] uppercase tracking-[3px] text-gold-300 mb-2">
                      Heritage Collection
                    </p>

                    <h3 className="text-xl font-semibold text-gold-200 mb-2">
                      {collection.name}
                    </h3>

                    <p className="text-white/75 text-sm font-medium mb-3">
                      {collection.subtitle}
                    </p>

                    <p className="text-white/50 text-sm leading-relaxed">
                      {collection.description}
                    </p>

                  </div>

                </motion.article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CUSTOMIZATION
        ===================================================== */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >

                <img
                  src="/images/patternline/custom-pattern.webp"
                  alt="PATTERNLINE™ Custom Pattern"
                  className="w-full h-[600px] object-cover"
                />

              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  Customization
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-7">

                  MADE AROUND
                  <br />

                  <span className="text-gold-300">
                    YOUR SPACE
                  </span>

                </h2>

                <p className="text-white/70 leading-loose mb-8">
                  Every PATTERNLINE™ project can be developed according
                  to the wall dimensions, room application, interior
                  colour palette, furniture style and desired visual
                  character.
                </p>


                <div className="grid sm:grid-cols-2 gap-4">

                  {customizationOptions.map((item) => (

                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="glass rounded-2xl p-5 border border-white/10"
                    >

                      <span className="text-gold-300 text-sm font-semibold">
                        {item.number}
                      </span>

                      <h3 className="text-lg font-semibold mt-2 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-white/50 text-sm leading-relaxed">
                        {item.description}
                      </p>

                    </motion.div>

                  ))}

                </div>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            MATERIALS
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >

                <img
                  src="/images/patternline/patternline-material.webp"
                  alt="PATTERNLINE™ Materials"
                  className="w-full h-[600px] object-cover"
                />

              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  Materials & Finish
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">

                  SELECT YOUR
                  <br />

                  <span className="text-gold-300">
                    FINISH
                  </span>

                </h2>

                <p className="text-white/65 leading-loose mb-8">
                  Select a suitable wall-covering finish according to
                  the desired visual character, application and project
                  requirements.
                </p>


                <div className="space-y-3">

                  {materials.map((material, index) => (

                    <div
                      key={material.title}
                      className="flex gap-4 p-4 border border-white/10 bg-white/[0.03] rounded-xl"
                    >

                      <span className="text-gold-300 font-semibold">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>

                        <h3 className="font-semibold text-white">
                          {material.title}
                        </h3>

                        <p className="text-white/45 text-sm mt-1">
                          {material.description}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            APPLICATIONS
        ===================================================== */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  Applications
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">

                  CREATED FOR
                  <br />

                  <span className="text-gold-300">
                    EXCEPTIONAL INTERIORS
                  </span>

                </h2>

                <p className="text-white/60 leading-loose mb-8">
                  PATTERNLINE™ can be developed for residential,
                  hospitality, retail, office and commercial interiors
                  where continuous visual pattern and refined
                  decorative surfaces are required.
                </p>


                <div className="grid sm:grid-cols-2 gap-3">

                  {applications.map((item) => (

                    <div
                      key={item.title}
                      className="glass rounded-xl p-4"
                    >

                      <h3 className="text-gold-200 font-semibold text-sm">
                        {item.title}
                      </h3>

                      <p className="text-white/45 text-xs leading-relaxed mt-2">
                        {item.description}
                      </p>

                    </div>

                  ))}

                </div>

              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >

                <img
                  src="/images/patternline/patternline-application.webp"
                  alt="PATTERNLINE™ Application"
                  className="w-full h-[650px] object-cover"
                />

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SEAMLESS CONTINUITY
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  Seamless Repeat
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">

                  ONE PATTERN.
                  <br />

                  <span className="text-gold-300">
                    COMPLETE WALL.
                  </span>

                </h2>

                <p className="text-white/70 leading-loose mb-8">
                  PatternLine™ is developed to create a continuous visual
                  rhythm across the wall rather than treating every
                  section as an isolated artwork.
                </p>


                <div className="grid sm:grid-cols-2 gap-4">

                  {[
                    {
                      title: "Large Walls",
                      description:
                        "Designed for continuous visual coverage.",
                    },
                    {
                      title: "Multiple Walls",
                      description:
                        "Pattern direction can flow across connected surfaces.",
                    },
                    {
                      title: "Balanced Scale",
                      description:
                        "Repeat size can be adjusted according to the space.",
                    },
                    {
                      title: "Visual Rhythm",
                      description:
                        "Patterns create continuity instead of isolated artwork.",
                    },
                  ].map((item) => (

                    <div
                      key={item.title}
                      className="glass rounded-2xl p-5 border border-white/10"
                    >

                      <h3 className="text-gold-300 font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-white/50 text-sm leading-relaxed">
                        {item.description}
                      </p>

                    </div>

                  ))}

                </div>

              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >

                <img
                  src="/images/patternline/seamless-pattern.webp"
                  alt="PATTERNLINE™ Seamless Pattern"
                  className="w-full h-[600px] object-cover"
                />

              </motion.div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">

              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >

                <img
                  src="/images/patternline/patternline-design.webp"
                  alt="PATTERNLINE™ Design Process"
                  className="w-full h-[520px] object-cover"
                />

              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  From Pattern to Wall
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">

                  HOW PATTERNLINE™
                  <br />

                  <span className="text-gold-300">
                    IS CREATED
                  </span>

                </h2>

                <p className="text-white/65 leading-loose">
                  The process moves from wall dimensions and design
                  direction through pattern selection, scale adjustment,
                  colour development, digital preview, approval,
                  production and installation.
                </p>

              </motion.div>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

              {process.map((step) => (

                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 border border-white/10"
                >

                  <div className="text-gold-300 text-sm font-semibold mb-4">
                    {step.number}
                  </div>

                  <h3 className="text-lg font-semibold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed">
                    {step.description}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="section-padding bg-luxury-gray">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container-custom mx-auto"
          >

            <div className="relative overflow-hidden rounded-3xl glass-gold p-10 md:p-16 text-center">

              <div className="absolute inset-0 opacity-20">

                <img
                  src="/service/patternline-img.png"
                  alt=""
                  className="w-full h-full object-cover"
                />

              </div>


              <div className="relative z-10">

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                  Start Your Pattern Concept
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">

                  CREATE YOUR
                  <br />

                  <span className="text-gold-300">
                    PATTERN WALL
                  </span>

                </h2>

                <p className="text-white/75 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
                  Share your wall dimensions, preferred pattern direction
                  or creative requirement. NOOH will develop the pattern
                  around the character of your space.
                </p>


                <div className="flex flex-col sm:flex-row gap-5 justify-center">

                  <a
                    href="/contact"
                    className="btn-luxury"
                  >
                    Get Free Consultation
                  </a>


                  <a
                    href="/products/architectural-wall-art"
                    className="btn-outline-gold"
                  >
                    Explore Architectural Wall Art™
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

        </section>

      </div>
    </>
  );
}


/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default PatternLine;