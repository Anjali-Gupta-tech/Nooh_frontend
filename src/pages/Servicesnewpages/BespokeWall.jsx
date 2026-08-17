import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

/* =========================================================
   BESPOKEWALL™ COLLECTIONS
========================================================= */

const collections = [
  {
    name: "NatureCanvas™",
    subtitle: "Forests, Mountains & Botanical Scenery",
    description:
      "Forests, mountains, waterfalls, landscapes, oceans and botanical scenery developed as immersive wall artwork.",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
  },

  {
    name: "UrbanStory™",
    subtitle: "Cities, Skylines & Architecture",
    description:
      "Cities, skylines, architecture, streets and global landmarks for sophisticated urban interiors.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1400&q=85",
  },

  {
    name: "AbstractAura™",
    subtitle: "Modern & Artistic Compositions",
    description:
      "Modern compositions, fluid art, artistic textures and expressive colour formations.",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1400&q=85",
  },

  {
    name: "MarbleMuse™",
    subtitle: "Marble, Stone & Mineral Surfaces",
    description:
      "Marble, onyx, stone, terrazzo and luxury mineral-inspired surfaces for refined interiors.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
  },

  {
    name: "FloralGrande™",
    subtitle: "Large Florals & Botanical Murals",
    description:
      "Large florals, artistic gardens, tropical leaves and botanical compositions designed as statement walls.",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1400&q=85",
  },

  {
    name: "HeritageWalls™",
    subtitle: "Heritage & Cultural Art",
    description:
      "Indian architecture, traditional art, palaces and cultural patterns interpreted for contemporary interiors.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
  },

  {
    name: "DivineWalls™",
    subtitle: "Spiritual & Meditative Art",
    description:
      "Religious, spiritual and meditation-inspired artwork for calm and meaningful spaces.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=85",
  },

  {
    name: "LittleDreams™",
    subtitle: "Kids & Nursery",
    description:
      "Creative wallpaper concepts for children's rooms, nurseries and learning environments.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
];


/* =========================================================
   CUSTOMIZATION
========================================================= */

const customizationOptions = [
  {
    number: "01",
    title: "Design Selection",
    description:
      "Select artwork from the NOOH collection or share your own creative concept.",
  },

  {
    number: "02",
    title: "Wall-Size Adjustment",
    description:
      "Artwork is resized and composed according to the exact dimensions of the wall.",
  },

  {
    number: "03",
    title: "Colour Customization",
    description:
      "Adapt the colour palette to coordinate with the furniture, architecture and interior.",
  },

  {
    number: "04",
    title: "Background Modification",
    description:
      "Modify the background treatment to achieve the desired visual character.",
  },

  {
    number: "05",
    title: "Element Placement",
    description:
      "Important visual elements can be repositioned to work with furniture and architectural features.",
  },

  {
    number: "06",
    title: "Names & Quotations",
    description:
      "Add names, initials, quotations and meaningful personal details to the artwork.",
  },

  {
    number: "07",
    title: "Logo & Branding",
    description:
      "Integrate suitable logos and brand graphics for commercial and institutional environments.",
  },

  {
    number: "08",
    title: "Material & Texture",
    description:
      "Choose the wall-covering finish according to the project's visual and application requirements.",
  },
];


/* =========================================================
   PERSONALIZATION
========================================================= */

const personalization = [
  "Family photographs",
  "Wedding memories",
  "Children's names",
  "Customized initials",
  "Favourite quotations",
  "Personal artwork",
  "Travel photographs",
  "Family trees",
  "Customized maps",
  "School & institutional graphics",
  "Business logos",
  "Brand timelines",
];


/* =========================================================
   WALL ILLUSION™
========================================================= */

const illusionPossibilities = [
  "Palace Corridors",
  "Classical Arches",
  "Scenic Windows",
  "Garden Gateways",
  "Architectural Columns",
  "Mountain Landscapes",
  "Forest Pathways",
  "Luxury Interiors",
  "Fantasy Environments",
  "Sculptural Floral Walls",
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
    title: "Premium Canvas",
    description:
      "A textured artistic surface suited to murals and statement artwork.",
  },

  {
    title: "Textured Wallpaper",
    description:
      "Adds visual texture and depth to customized printed compositions.",
  },

  {
    title: "Fabric Wall Covering",
    description:
      "A soft premium decorative surface for sophisticated interiors.",
  },

  {
    title: "Embroidered Fabric",
    description:
      "A tactile textile finish combining artwork with physical thread detail.",
  },

  {
    title: "Washable Vinyl",
    description:
      "A practical surface option where easier maintenance is required.",
  },

  {
    title: "Peel & Stick",
    description:
      "A convenient application format suitable for selected temporary or flexible installations.",
  },

  {
    title: "Metallic Finish",
    description:
      "Decorative metallic-inspired finishes for luxury and statement interiors.",
  },
];


/* =========================================================
   APPLICATIONS
========================================================= */

const applications = [
  {
    title: "Living Rooms",
    description:
      "Large statement murals and artistic compositions for primary living spaces.",
  },

  {
    title: "Bedrooms",
    description:
      "Calm botanical, abstract, heritage and personalized designs.",
  },

  {
    title: "Kids Rooms",
    description:
      "Imaginative and educational concepts designed around children's interests.",
  },

  {
    title: "Home Theatres",
    description:
      "Dramatic visual environments for immersive entertainment spaces.",
  },

  {
    title: "Hotel Suites",
    description:
      "Customized wall art designed to strengthen the identity of hospitality interiors.",
  },

  {
    title: "Restaurants",
    description:
      "Art-led feature walls that contribute to the dining experience.",
  },

  {
    title: "Offices",
    description:
      "Brand-led, architectural and sophisticated artwork for professional environments.",
  },

  {
    title: "Retail & Showrooms",
    description:
      "High-impact visual walls for customer-facing environments.",
  },

  {
    title: "Luxury Villas",
    description:
      "Customized compositions developed around the architecture and interior concept.",
  },

  {
    title: "Reception & Lobby",
    description:
      "Statement artwork for entrances and first-impression spaces.",
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
    title: "Select Design Direction",
    description:
      "Choose a collection, artwork or share your own visual reference.",
  },

  {
    number: "03",
    title: "Artwork Development",
    description:
      "The composition is adapted to the proportions and visual character of the wall.",
  },

  {
    number: "04",
    title: "Colour & Material",
    description:
      "Confirm colour treatment and the preferred wall-covering finish.",
  },

  {
    number: "05",
    title: "Digital Preview",
    description:
      "Review a visual representation of how the artwork will appear on the wall.",
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
const BespokeWall = () => {
  return (
    <>
      <Helmet>
        <title>
          BESPOKEWALL™ | Customized Architectural Wall Art | NOOH
        </title>

        <meta
          name="description"
          content="BESPOKEWALL™ by NOOH — customized wallpaper and personalized murals developed around exact wall dimensions, interior style and customer preference."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black text-white pt-24">

        {/* =========================================================
            HERO
        ========================================================= */}

        <section className="relative min-h-[78vh] flex items-center overflow-hidden">

          <img
            src="/service/bespokeWall-img.png"
            alt="BESPOKEWALL customized architectural wall art"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 bg-gradient-to-r " />

          <div className="relative z-10 container-custom mx-auto px-6 py-28">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[5px] text-gold-300 font-semibold mb-5"
            >
              Architectural Wall Art™ · Division 01
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-luxury font-bold mb-6 max-w-5xl"
            >
              BESPOKEWALL
              <sup className="text-[30%] align-super ml-1">
                ™
              </sup>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl text-gold-200 font-luxury mb-7"
            >
              Designed Exclusively for Your Wall
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl text-white/80 text-lg md:text-xl leading-relaxed"
            >
              BESPOKEWALL™ is NOOH's customized wallpaper division,
              where every mural is resized and composed according to
              the exact dimensions of the customer's wall.
            </motion.p>

            <div className="flex flex-wrap gap-3 mt-9">

              {[
                "Customized Wallpaper",
                "Personalized Murals",
                "Exact Wall Size",
                "Digital Preview",
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
                {/* =========================================================
            INTRODUCTION
        ========================================================= */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                  Customized Wall Art
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-7">
            BESPOKEWALL™ 
                </h2>

                <p className="text-white/70 text-lg leading-loose mb-6">
                  Traditional wallpaper is generally selected from a
                  fixed catalogue. BESPOKEWALL™ introduces a more
                  flexible and personalized approach.
                </p>

                <p className="text-white/60 leading-loose">
                  Select a design from the NOOH collection, share your
                  own image or creative concept, customize colours and
                  visual elements, and develop the final artwork around
                  the exact dimensions and character of your wall.
                </p>

              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden"
              >

                <img
                  src="/images/bespokewall-2.png"
                  alt="Customized BESPOKEWALL interior"
                  className="w-full h-[560px] object-cover"
                />

              </motion.div>

            </div>


            {/* DESIGN FACTORS */}

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">

              {[
                ["Wall Dimensions", "Exact proportions"],
                ["Room Application", "Designed for the space"],
                ["Colour Palette", "Interior coordination"],
                ["Customer Preference", "Personal direction"],
                ["Furniture Style", "Visual harmony"],
                ["Project Type", "Residential / Commercial"],
              ].map(([title, text]) => (

                <div
                  key={title}
                  className="glass rounded-2xl p-5 text-center"
                >

                  <h3 className="text-gold-300 font-semibold mb-2">
                    {title}
                  </h3>

                  <p className="text-white/50 text-sm">
                    {text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

         {/* =========================================================
            COLLECTIONS
        ========================================================= */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

            <div className="text-center max-w-4xl mx-auto mb-14">

              <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                BESPOKEWALL™ COLLECTIONS
              </p>

              <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-5">
                EXPLORE COLLECTION 
              </h2>

              <p className="text-white/65 leading-relaxed">
                Explore curated artistic directions ranging from
                natural landscapes and architecture to abstract art,
                mineral surfaces, florals, heritage artwork, spiritual
                compositions and children's spaces.
              </p>

            </div>


            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {collections.map((collection, index) => (

                <motion.article
                  key={collection.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
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
                      Collection
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

        {/* =========================================================
            CUSTOMIZATION
        ========================================================= */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div className="rounded-3xl overflow-hidden order-2 lg:order-1">

                <img
                  src="/service/bespokeWall-img.png"
                  alt="BESPOKEWALL customization"
                  className="w-full h-[600px] object-cover"
                />

              </div>


              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  Customization
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-7">
                  MADE AROUND
                  <br />
                  YOUR SPACE
                </h2>

                <p className="text-white/70 leading-loose mb-8">
                  Every BESPOKEWALL™ project can be developed according
                  to the wall dimensions, room application, interior
                  colour palette, furniture style and customer preference.
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
          


        {/* =========================================================
            PERSONALIZED WALLPAPER
        ========================================================= */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  Personalized Wallpaper
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">
                  MAKE THE
                  <br />
                  DESIGN PERSONAL
                </h2>

                <p className="text-white/70 leading-loose mb-8">
                  Create a wall that belongs only to you. Personal
                  memories, photographs, names, maps, quotations and
                  brand stories can become part of the final wall
                  composition.
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4">

                  {personalization.map((item) => (

                    <div
                      key={item}
                      className="flex gap-3 items-start text-white/70 text-sm"
                    >

                      <span className="text-gold-300 mt-0.5">
                        ✓
                      </span>

                      <span>
                        {item}
                      </span>

                    </div>

                  ))}

                </div>


                <div className="mt-9 p-6 rounded-2xl border border-gold-300/25 bg-gold-300/5">

                  <p className="text-gold-200 font-semibold mb-2">
                    Digital Preview
                  </p>

                  <p className="text-white/55 text-sm leading-relaxed">
                    Before production, customers receive a digital
                    preview showing how the selected artwork will
                    appear on their wall.
                  </p>

                </div>

              </motion.div>


              <div className="rounded-3xl overflow-hidden">

                <img
                  src="/images/bespokewall-2.png"
                  alt="Personalized BESPOKEWALL artwork"
                  className="w-full h-[600px] object-cover"
                />

              </div>

            </div>

          </div>

        </section>
            


        {/* =========================================================
            MATERIALS
        ========================================================= */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div className="rounded-3xl overflow-hidden order-2 lg:order-1">

                <img
                  src="/images/bespokewall-material.png"
                  alt="BESPOKEWALL material and texture options"
                  className="w-full h-[600px] object-cover"
                />

              </div>


              <motion.div
                initial={{ opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  Materials & Finish
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">
                  SELECT YOUR FINISH
                </h2>

                <p className="text-white/65 leading-loose mb-8">
                  Choose the wall-covering finish according to the
                  desired visual character, application and project
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


        {/* =========================================================
            APPLICATIONS
        ========================================================= */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  Applications 
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">
                  CREATED FOR
                  <br />
                  EXCEPTIONAL INTERIORS
                </h2>

                <p className="text-white/60 leading-loose mb-8">
                  Bespoke wall compositions can be developed for
                  residential, hospitality and commercial interiors,
                  with the artwork selected around the room, architecture
                  and desired experience.
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

              </div>


              <div className="rounded-3xl overflow-hidden">

                <img
                  src="/images/bespoke-urban.png"
                  alt="BESPOKEWALL luxury interior application"
                  className="w-full h-[650px] object-cover"
                />

              </div>

            </div>

          </div>

        </section>
                {/* =========================================================
            PROCESS
        ========================================================= */}

        <section className="section-padding bg-luxury-black">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">

              <div className="rounded-3xl overflow-hidden">

                <img
                  src="/images/bespoke-nature.png"
                  alt="BESPOKEWALL design development"
                  className="w-full h-[520px] object-cover"
                />

              </div>


              <div>

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-3">
                  From Concept to Wall
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">
                  HOW BESPOKEWALL™
                  <br />
                  IS CREATED
                </h2>

                <p className="text-white/65 leading-loose">
                  The process is designed to move from the initial wall
                  dimensions and creative direction through artwork
                  development, digital preview, approval, production
                  and professional installation.
                </p>

              </div>

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


        {/* =========================================================
            CTA
        ========================================================= */}

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
                  src="/service/bespokeWall-img.png"
                  alt=""
                  className="w-full h-full object-cover"
                />

              </div>

              <div className="relative z-10">

                <p className="uppercase tracking-[5px] text-gold-300 font-semibold mb-4">
                  Start Your Wall Concept
                </p>

                <h2 className="text-4xl md:text-6xl font-luxury font-bold mb-6">
                  CREATE YOUR
                  <br />
                  BESPOKE WALL
                </h2>

                <p className="text-white/75 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
                  Share your wall dimensions, design reference or
                  creative idea. Our team can develop the artwork
                  around your space and prepare a digital preview
                  before production.
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
};

export default BespokeWall;