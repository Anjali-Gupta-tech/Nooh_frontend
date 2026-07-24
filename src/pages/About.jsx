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

        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">

          <div className="absolute inset-0">

            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2070"
              alt="NOOH"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-luxury-black" />

          </div>

          <div className="relative z-10 container-custom mx-auto px-6 text-center">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-luxury font-bold text-gold-300 mb-6"
            >
              About NOOH
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto"
            >
              Transforming Spaces Through Innovation, Design & Technology
            </motion.p>

          </div>

        </section>

        {/* ================= COMPANY OVERVIEW ================= */}

        <section className="section-padding">

          <div className="container-custom mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <h2 className="text-5xl font-luxury font-bold text-gold-300 mb-8">
                  Who We Are
                </h2>

                <p className="text-white/80 leading-relaxed mb-6">
                  <strong className="text-luxury-gold">
                    NOOH Elevated Living LLP
                  </strong>{" "}
                  is an innovative interior solutions company dedicated to
                  transforming residential, commercial, hospitality and
                  corporate spaces through advanced design, technology and
                  exceptional craftsmanship.
                </p>

                <p className="text-white/80 leading-relaxed mb-6">
                  Our premium portfolio includes
                  <strong className="text-luxury-gold">
                    {" "}
                    CLOUDWAVE™ Textile Ceilings,
                  </strong>
                  <strong className="text-luxury-gold">
                    {" "}
                    SKYLUME™ Backlit Panels,
                  </strong>
                  <strong className="text-luxury-gold">
                    {" "}
                    STRETCHÉ™ Printed & Translucent Stretch Ceilings,
                  </strong>
                  <strong className="text-luxury-gold">
                    {" "}
                    Embroidery Wallcoverings
                  </strong>{" "}
                  and
                  <strong className="text-luxury-gold">
                    {" "}
                    Customized Wallpapers
                  </strong>
                  , delivering elegant and functional interior experiences.
                </p>

                <p className="text-white/80 leading-relaxed">
                  Every project reflects our commitment to innovation,
                  architecture, premium materials and precision execution,
                  creating spaces that inspire, perform and stand the test of
                  time.
                </p>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-5"
              >

                <img
                  src="/images/nooh-cloudwave-textile-ceiling-modern-office-lobby.webp"
                  alt=""
                  className="rounded-3xl h-72 w-full object-cover"
                />

                <img
                  src="/images/3d-epoxy-bathroom-flooring.webp"
                  alt="3d-epoxy-bathroom-flooring"
                  className="rounded-3xl h-72 mt-10 w-full object-cover"
                />

                <img
                  src="/images/nooh-printed-stretch-ceiling-blue-sky-cloud-bedroom.webp"
                  alt=""
                  className="rounded-3xl h-72 -mt-10 w-full object-cover"
                />

                <img
                  src="/images/nooh-printed-stretch-ceiling-sky-design-commercial-space.webp"
                  alt=""
                  className="rounded-3xl h-72 w-full object-cover"
                />

              </motion.div>

            </div>

          </div>

        </section>
                {/* ================= FOUNDERS ================= */}

     {/* ================= FOUNDERS ================= */}

<section className="section-padding bg-luxury-gray">

  <div className="container-custom mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >

      <h2 className="text-5xl md:text-6xl font-luxury font-bold text-gold-300 mb-6">
        Meet Our Founders
      </h2>

      <p className="text-xl text-white/70 max-w-4xl mx-auto">
        The visionaries behind NOOH Elevated Living LLP, combining innovation,
        architecture and craftsmanship to redefine premium interior solutions.
      </p>

    </motion.div>

    {/* ================= Founder 1 ================= */}

    <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <img
          src="/images/asif-sir.webp"
          alt="Mr. Asif Ali"
          className="w-full h-[650px] object-cover rounded-3xl shadow-2xl"
        />

      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <p className="text-luxury-gold uppercase tracking-[4px] mb-3">
          Founder & Innovation Head
        </p>

        <h2 className="text-5xl font-luxury font-bold text-white mb-6">
          Mr. Asif Ali
        </h2>

        <p className="text-white/80 leading-loose mb-6">
          Mr. Asif Ali is an entrepreneur and innovation leader with more than
          <span className="text-luxury-gold font-semibold">
            {" "}15 years of industry experience.
          </span>
          {" "}His passion for innovation and product development has helped
          shape NOOH into a forward-thinking interior solutions company focused
          on advanced design, technology and craftsmanship.
        </p>

        <p className="text-white/80 leading-loose mb-6">
          Under his leadership, NOOH has introduced innovative interior
          solutions including CLOUDWAVE™ Textile Ceilings, SKYLUME™ Backlit
          Panels and STRETCHÉ™ Stretch Ceiling Systems, delivering premium
          experiences for residential, commercial and hospitality projects.
        </p>

        <p className="text-white/80 leading-loose mb-8">
          His vision continues to inspire innovation, develop skilled
          professionals and create new business opportunities across the
          interior industry.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">

          <div className="glass rounded-xl p-4">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Experience
            </h4>

            <p className="text-white/80">
              15+ Years
            </p>

          </div>

          <div className="glass rounded-xl p-4">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Expertise
            </h4>

            <p className="text-white/80">
              Product Innovation
            </p>

          </div>

          <div className="glass rounded-xl p-4">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Specialization
            </h4>

            <p className="text-white/80">
              Interior Technologies
            </p>

          </div>

          <div className="glass rounded-xl p-4">
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

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <p className="text-luxury-gold uppercase tracking-[4px] mb-3">
          Co-Founder & Principal Architect
        </p>

        <h2 className="text-5xl font-luxury font-bold text-white mb-6">
          Mr. Kapil Verma
        </h2>

        <p className="text-white/80 leading-loose mb-6">
          Mr. Kapil Verma is a Principal Architect with more than
          <span className="text-luxury-gold font-semibold">
            {" "}20 years of experience
          </span>
          {" "}in architecture, luxury interiors and space planning.
        </p>

        <p className="text-white/80 leading-loose mb-6">
          His architectural expertise ensures every NOOH project reflects
          innovation, functionality and timeless aesthetics. His commitment to
          quality and thoughtful design has helped deliver exceptional
          residential, commercial and hospitality environments.
        </p>

        <p className="text-white/80 leading-loose mb-8">
          Through creative vision and technical excellence, he continues to
          lead NOOH towards becoming one of India's most innovative premium
          interior solution companies.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">

          <div className="glass rounded-xl p-4">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Experience
            </h4>

            <p className="text-white/80">
              20+ Years
            </p>

          </div>

          <div className="glass rounded-xl p-4">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Expertise
            </h4>

            <p className="text-white/80">
              Architecture
            </p>

          </div>

          <div className="glass rounded-xl p-4">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Specialization
            </h4>

            <p className="text-white/80">
              Luxury Interiors
            </p>

          </div>

          <div className="glass rounded-xl p-4">
            <h4 className="text-luxury-gold font-semibold mb-2">
              Focus
            </h4>

            <p className="text-white/80">
              Design Excellence
            </p>

          </div>

        </div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <img
          src="/images/kapil-sir.webp"
          alt="Mr. Kapil Verma"
          className="w-full h-[650px] object-cover rounded-3xl shadow-2xl"
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

                <img
                  src="/images/StretchCeiling-Training.png"
                  alt="Training"
                  className="rounded-3xl w-full h-[650px] object-cover"
                />

              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >

                <h2 className="text-5xl font-luxury font-bold text-gold-300 mb-8">
                  More Than Interiors
                </h2>

                <h3 className="text-3xl text-white mb-6">
                  We Build Skills
                </h3>

                <p className="text-white/80 leading-relaxed mb-6">
                  At NOOH, we believe innovation should create opportunities.
                  Beyond delivering premium interior solutions, we are committed
                  to developing skilled professionals through practical
                  training, technical education and product knowledge.
                </p>

                <p className="text-white/80 leading-relaxed mb-6">
                  We empower technicians, installers, architects, designers,
                  sales professionals, dealers and business partners with the
                  expertise needed to build successful careers and sustainable
                  businesses in the interior industry.
                </p>

                <p className="text-white/80 leading-relaxed">
                  Our vision is simple — transform spaces, develop skills,
                  create opportunities and elevate lives.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-10">

                  <div className="glass rounded-2xl p-6 text-center">

                    <FaUsers className="text-5xl text-luxury-gold mx-auto mb-4" />

                    <h4 className="text-white font-semibold">
                      Professional Training
                    </h4>

                  </div>

                  <div className="glass rounded-2xl p-6 text-center">

                    <FaTools className="text-5xl text-luxury-gold mx-auto mb-4" />

                    <h4 className="text-white font-semibold">
                      Technical Expertise
                    </h4>

                  </div>

                </div>

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

     


 