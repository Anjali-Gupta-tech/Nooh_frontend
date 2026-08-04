import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FaEye,
  FaBullseye,
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaTools,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | NOOH Elevated Living LLP</title>
        <meta
          name="description"
          content="Learn about NOOH Elevated Living LLP - India's innovation-driven interior solutions company specializing in stretch ceilings, textile ceilings, backlit panels and premium interior technologies."
        />
      </Helmet>

      <div className="min-h-screen bg-luxury-black">

        {/* ================= HERO ================= */}

      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0">
    {/* Desktop Image */}
    <img
      src="/images/about-image.png"
      alt="NOOH"
      className="hidden md:block w-full h-full object-cover object-center"
    />

    {/* Mobile Image */}
    <img
      src="/images/about-mobile.png"
      alt="NOOH"
      className="block md:hidden w-full h-full object-cover object-center"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b luxury-black/20" />
  </div>

  {/* Your Content Here */}
  <div className="relative z-10">
    {/* Heading, Text, Buttons */}
  </div>
</section>

        {/* ================= COMPANY OVERVIEW ================= */}

      <section className="section-padding bg-luxury-gray">

  <div className="container-custom mx-auto">

    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* LEFT CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="self-start pt-1"
      >

        <h2 className="text-5xl font-luxury font-bold text-gold-300 mb-5 leading-none">
          Who We Are
        </h2>

        <p className="text-white/80 leading-8 mb-5">
          <strong className="text-luxury-gold">
            NOOH Elevated Living LLP
          </strong>{" "}
          is an innovative interior solutions company dedicated to
          transforming residential, commercial, hospitality and
          corporate spaces through advanced design, technology and
          exceptional craftsmanship.
        </p>

        <p className="text-white/80 leading-8 mb-5">
          Our premium portfolio includes
          <strong className="text-luxury-gold">
            {" "}CLOUDWAVE™ Textile Ceilings,
          </strong>
          <strong className="text-luxury-gold">
            {" "}SKYLUME™ Backlit Panels,
          </strong>
          <strong className="text-luxury-gold">
            {" "}STRETCHÉ™ Printed & Translucent Stretch Ceilings,
          </strong>
          <strong className="text-luxury-gold">
            {" "}Embroidery Wallcoverings
          </strong>{" "}
          and
          <strong className="text-luxury-gold">
            {" "}Customized Wallpapers
          </strong>
          , delivering elegant and functional interior experiences.
        </p>

        <p className="text-white/80 leading-8">
          Every project reflects our commitment to innovation,
          architecture, premium materials and precision execution,
          creating spaces that inspire, perform and stand the test of
          time.
        </p>

      </motion.div>

      {/* RIGHT IMAGES */}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4 self-start"
      >

        <img
          src="/images/nooh-cloudwave-textile-ceiling-modern-office-lobby.webp"
          alt=""
          className="rounded-[28px] h-[320px] w-full object-cover shadow-xl"
        />

        <img
          src="/images/3d-epoxy-bathroom-flooring.webp"
          alt="3D Epoxy Bathroom Flooring"
          className="rounded-[28px] h-[320px] w-full object-cover mt-6 shadow-xl"
        />

        <img
          src="/images/image2.jpeg"
          alt=""
          className="rounded-[28px] h-[320px] w-full object-cover -mt-6 shadow-xl"
        />

        <img
          src="/images/nooh-printed-stretch-ceiling-sky-design-commercial-space.webp"
          alt=""
          className="rounded-[28px] h-[320px] w-full object-cover shadow-xl"
        />

      </motion.div>

    </div>

  </div>

</section>

     {/* ================= FOUNDERS ================= */}

<section className="section-padding bg-luxury-black">

  <div className="container-custom mx-auto">

    {/* ================= Founder 1 ================= */}

    <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">

      {/* IMAGE */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="self-start"
      >

        <img
  src="/images/asif-sir.webp"
  alt="Mr. Asif Ali"
  className="w-full h-[620px] object-cover object-top rounded-[30px] shadow-2xl"
/>

      </motion.div>

      {/* CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="self-start pt-1"
      >

        <p className="text-luxury-gold uppercase tracking-[4px] mb-3">
          Founder & Innovation Head
        </p>

        <h2 className="text-5xl font-luxury font-bold text-white leading-none mb-5">
          Mr. Asif Ali
        </h2>

        <p className="text-white/80 leading-8 mb-5">
          Mr. Asif Ali is an entrepreneur and innovation leader with more than
          <span className="text-luxury-gold font-semibold">
            {" "}15 years of industry experience.
          </span>
          {" "}His passion for innovation and product development has helped
          shape NOOH into a forward-thinking interior solutions company focused
          on advanced design, technology and craftsmanship.
        </p>

        <p className="text-white/80 leading-8 mb-5">
          Under his leadership, NOOH has introduced innovative interior
          solutions including CLOUDWAVE™ Textile Ceilings, SKYLUME™ Backlit
          Panels and STRETCHÉ™ Stretch Ceiling Systems, delivering premium
          experiences for residential, commercial and hospitality projects.
        </p>

        <p className="text-white/80 leading-8 mb-6">
          His vision continues to inspire innovation, develop skilled
          professionals and create new business opportunities across the
          interior industry.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">

          <div className="glass rounded-2xl p-5">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Experience
            </h4>

            <p className="text-white/80">
              15+ Years
            </p>
          </div>

          <div className="glass rounded-2xl p-5">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Expertise
            </h4>

            <p className="text-white/80">
              Product Innovation
            </p>
          </div>

          <div className="glass rounded-2xl p-5">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Specialization
            </h4>

            <p className="text-white/80">
              Interior Technologies
            </p>
          </div>

          <div className="glass rounded-2xl p-5">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Focus
            </h4>

            <p className="text-white/80">
              Business Leadership
            </p>
          </div>

        </div>

      </motion.div>

    </div>

    {/* ================= Founder 2 ================= */}

    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* CONTENT */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="self-start pt-1"
      >

        <p className="text-luxury-gold uppercase tracking-[4px] mb-3">
          Co-Founder & Principal Architect
        </p>

        <h2 className="text-5xl font-luxury font-bold text-white leading-none mb-5">
          Mr. Kapil Verma
        </h2>

        <p className="text-white/80 leading-8 mb-5">
          Mr. Kapil Verma is a Principal Architect with more than
          <span className="text-luxury-gold font-semibold">
            {" "}20 years of experience.
          </span>
          {" "}His expertise spans architecture, luxury interiors and
          premium space planning.
        </p>

        <p className="text-white/80 leading-8 mb-5">
          His architectural vision ensures every NOOH project reflects
          innovation, functionality and timeless aesthetics while
          delivering exceptional residential, commercial and hospitality
          environments.
        </p>

        <p className="text-white/80 leading-8 mb-6">
          Through creative vision and technical excellence, he continues
          to lead NOOH towards becoming one of India's most innovative
          premium interior solution companies.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">

          <div className="glass rounded-2xl p-5">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Experience
            </h4>

            <p className="text-white/80">
              20+ Years
            </p>
          </div>

          <div className="glass rounded-2xl p-5">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Expertise
            </h4>

            <p className="text-white/80">
              Architecture
            </p>
          </div>

          <div className="glass rounded-2xl p-5">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Specialization
            </h4>

            <p className="text-white/80">
              Luxury Interiors
            </p>
          </div>

          <div className="glass rounded-2xl p-5">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Focus
            </h4>

            <p className="text-white/80">
              Design Excellence
            </p>
          </div>

        </div>

      </motion.div>

      {/* IMAGE */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="self-start"
      >

        <img
          src="/images/kapil-sir.webp"
          alt="Mr. Kapil Verma"
          className="w-full h-[620px] object-cover rounded-[30px] shadow-2xl"
        />

      </motion.div>

    </div>

  </div>

</section>


        {/* ================= BUILD SKILLS ================= */}

        <section className="section-padding bg-luxury-gray">

          <div className="container-custom mx-auto">

           <div className="grid lg:grid-cols-2 gap-16 items-center">
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
    <div className="rounded-3xl overflow-hidden bg-white shadow-2xl">
      <img
        src="/images/StretchCeiling-Training.png"
        alt="Training"
        className="w-full h-auto object-contain"
      />
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
  >
 <h2 className="text-5xl font-luxury font-bold text-gold-300 mb-5">
  More Than Interiors
</h2>

<h3 className="text-3xl text-white mb-6">
  We Build Skills. We Build Businesses.
</h3>

<p className="text-white/80 leading-relaxed mb-6">
  At <span className="text-luxury-gold font-semibold">NOOH Elevated Living LLP</span>,
  we believe true innovation is not only about creating exceptional interior
  solutions—it is about creating opportunities for people. Our mission is to
  help individuals build successful careers and profitable businesses through
  professional training, practical experience and continuous innovation.
</p>

<p className="text-white/80 leading-relaxed mb-6">
  We conduct specialized workshops for aspiring entrepreneurs, technicians,
  architects, interior designers, contractors, dealers and business owners.
  From technical installation to business development, our programs are
  designed to build both professional skills and successful businesses.
</p>

<div className="grid grid-cols-2 gap-4 my-8">

  <div className="glass rounded-2xl p-5">
    <h4 className="text-luxury-gold font-semibold mb-2">
      Training Programs
    </h4>

    <p className="text-white/80 text-sm">
      Stretch Ceilings, Textile Ceilings, Fiber Optic, 3D Epoxy Flooring,
      Installation & Business Training.
    </p>
  </div>

  <div className="glass rounded-2xl p-5">
    <h4 className="text-luxury-gold font-semibold mb-2">
      Learn. Build. Earn.
    </h4>

    <p className="text-white/80 text-sm">
      Practical learning with real-world projects to help participants
      confidently start or expand their interior business.
    </p>
  </div>

  <div className="glass rounded-2xl p-5">
    <h4 className="text-luxury-gold font-semibold mb-2">
      Learn From Experts
    </h4>

    <p className="text-white/80 text-sm">
      Guided by Asif Ali & Kapil Verma through product knowledge,
      installation techniques, quality standards and customer handling.
    </p>
  </div>

  <div className="glass rounded-2xl p-5">
    <h4 className="text-luxury-gold font-semibold mb-2">
      Innovation Never Stops
    </h4>

    <p className="text-white/80 text-sm">
      Every year NOOH develops innovative decorative interior products,
      creating new opportunities for partners and professionals.
    </p>
  </div>

</div>

<p className="text-white/80 leading-relaxed">
  Whether your goal is to become a certified installer, launch your own
  decorative interior business or become a franchise partner, NOOH provides
  the knowledge, technology and long-term support to help you succeed.
</p>


 

</motion.div>
</div>

          </div>

        </section>

        {/* ================= WHY CHOOSE ================= */}

        <section className="section-padding">

          <div className="container-custom mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >

              <h2 className="text-5xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
                Why Choose NOOH
              </h2>

              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Experience innovation, premium craftsmanship and complete
                interior excellence.
              </p>

            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  icon: <FaLightbulb />,
                  title: "Innovation-Driven Solutions",
                },
                {
                  icon: <FaTools />,
                  title: "Advanced Interior Technologies",
                },
                {
                  icon: <FaHeart />,
                  title: "Premium Quality Materials",
                },
                {
                  icon: <FaUsers />,
                  title: "Expert Design & Installation Team",
                },
                {
                  icon: <FaBullseye />,
                  title: "Customized Project Solutions",
                },
                {
                  icon: <FaEye />,
                  title: "Customer-First Approach",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-3xl p-8 text-center hover:glass-gold duration-300"
                >

                  <div className="text-5xl text-luxury-gold flex justify-center mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= CTA ================= */}

        <section className="py-28 bg-gradient-to-r from-[#111111] via-[#181818] to-[#111111]">

          <div className="container-custom mx-auto text-center">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-luxury font-bold text-gold-300 mb-8 leading-tight"
            >
              Transform Spaces.
              <br />
              Develop Skills.
              <br />
              Create Opportunities.
              <br />
              Elevate Lives.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-white/70 max-w-3xl mx-auto mb-10"
            >
              At NOOH Elevated Living LLP, we don't simply design interiors—we
              create experiences, inspire innovation and build opportunities
              that elevate the way people live, work and grow.
            </motion.p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/products"
              className="inline-block px-10 py-4 rounded-full bg-luxury-gold text-black font-bold text-lg hover:bg-gold-300 transition-all duration-300"
            >
              Explore Our Solutions
            </motion.a>

          </div>

        </section>

      </div>

    </>

  );
};

export default About;

     


 