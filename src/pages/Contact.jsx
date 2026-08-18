import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const projectTypes = [
    'Residential - Villa',
    'Residential - Apartment',
    'Commercial - Office',
    'Commercial - Retail',
    'Hospitality - Hotel',
    'Hospitality - Restaurant',
    'Turnkey Project',
    'Other',
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - NOOH Living Elevated</title>
        <meta name="description" content="Get in touch with NOOH Living Elevated for luxury interior design consultation. Located in Noida, serving pan India." />
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-20">
        {/* Hero Section */}
        
    
<section className="relative h-[60vh] flex items-center justify-center overflow-hidden">

  <div className="absolute inset-0">

    {/* Desktop Image */}
    <img
      src="/hero-images/stretch-ceiling-contact.png"
      alt="NOOH Contact"
      className="
        hidden
        md:block
        w-full
        h-full
        object-cover
        object-center
      "
    />

    {/* Mobile Image */}
    <img
      src="/images/contact-mobile.png"
      alt="NOOH Contact"
      className="
        block
        md:hidden
        w-full
        h-full
        object-cover
        object-center
      "
    />

    {/* Luxury Overlay */}
    <div className="
      absolute
      inset-0
      bg-gradient-to-b"/>

  </div>


  {/* =================================================
      CONTENT
  ================================================= */}

  <div className="
    relative
    z-10
    container-custom
    mx-auto
    px-6
    text-center
  ">

    {/* Small Label */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="
        mb-5
        flex
        items-center
        justify-center
        gap-4
      "
    >

      <span className="h-px w-12 bg-luxury-gold/70" />

    

      <span className="h-px w-12 bg-luxury-gold/70" />

    </motion.div>


  </div>

</section>

        {/* Contact Info & Form */}
        <section className="section-padding bg-luxury-gray">
          <div className="container-custom mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="glass-gold rounded-2xl p-8">
                  <h2 className="text-3xl font-luxury font-bold text-white mb-8">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start space-x-4">
                      <FaMapMarkerAlt className="text-luxury-gold text-2xl mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-semibold mb-2">Head Office</h3>
                        <p className="text-white/80 leading-relaxed">
                          D-180, Sector 10,<br />
                          Noida - 201301,<br />
                          Uttar Pradesh, India
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <FaPhone className="text-luxury-gold text-2xl mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-semibold mb-2">Phone</h3>
                        <a
                          href="tel:+919540060180"
                          className="text-white/80 hover:text-luxury-gold smooth-transition block"
                        >
                          +91 9540060180
                        </a>
                        <a
                          href="tel:+919958748979"
                          className="text-white/80 hover:text-luxury-gold smooth-transition block"
                        >
                          +91 9958748979
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-4">
                      <FaEnvelope className="text-luxury-gold text-2xl mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-semibold mb-2">Email</h3>
                        <a
                          href="mailto:info@noohliving.com"
                          className="text-white/80 hover:text-luxury-gold smooth-transition"
                        >
                        info@noohliving.com
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start space-x-4">
                      <FaWhatsapp className="text-luxury-gold text-2xl mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                        <a
                          href="https://wa.me/919540060180"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 hover:text-luxury-gold smooth-transition"
                        >
                          Chat with us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="glass-gold rounded-2xl p-8">
                  <h3 className="text-2xl font-luxury font-bold text-white mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-white/80">
                    <p>Operating Hours: 24/7 (All Days)
                    </p>
                    <p>Sunday: By Appointment</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="glass-gold rounded-2xl p-8">
                  <h2 className="text-3xl font-luxury font-bold text-white mb-8">
                    Send Us a Message
                  </h2>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400"
                    >
                      Thank you! We'll get back to you within 24 hours.
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-white mb-2 font-semibold">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-luxury-black/50 border ${
                          errors.name ? 'border-red-500' : 'border-luxury-gold/30'
                        } rounded-lg px-4 py-3 text-white focus:border-luxury-gold focus:outline-none smooth-transition`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white mb-2 font-semibold">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full bg-luxury-black/50 border ${
                            errors.phone ? 'border-red-500' : 'border-luxury-gold/30'
                          } rounded-lg px-4 py-3 text-white focus:border-luxury-gold focus:outline-none smooth-transition`}
                          placeholder="Your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-white mb-2 font-semibold">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full bg-luxury-black/50 border ${
                            errors.email ? 'border-red-500' : 'border-luxury-gold/30'
                          } rounded-lg px-4 py-3 text-white focus:border-luxury-gold focus:outline-none smooth-transition`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-white mb-2 font-semibold">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`w-full bg-luxury-black/50 border ${
                          errors.projectType ? 'border-red-500' : 'border-luxury-gold/30'
                        } rounded-lg px-4 py-3 text-white focus:border-luxury-gold focus:outline-none smooth-transition`}
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="text-red-400 text-sm mt-1">{errors.projectType}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white mb-2 font-semibold">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className={`w-full bg-luxury-black/50 border ${
                          errors.message ? 'border-red-500' : 'border-luxury-gold/30'
                        } rounded-lg px-4 py-3 text-white focus:border-luxury-gold focus:outline-none smooth-transition resize-none`}
                        placeholder="Tell us about your project..."
                      />
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn-luxury w-full">
                      Send Message
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/*dealership*/}
{/* =========================================================
    OUR BRANCH OFFICES
========================================================= */}
{/* =========================================================
    OUR BRANCH OFFICES
========================================================= */}

<section
  id="our-branch-offices"
  className="section-padding bg-luxury-black"
>
  <div className="container-custom mx-auto">

    {/* =====================================================
        SECTION HEADING
    ===================================================== */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-14 text-center"
    >

      {/* GOLD LABEL */}

      <div className="mb-5 flex items-center justify-center gap-4">

        <span className="h-px w-12 bg-luxury-gold/60" />

        <span
          className="
            text-[11px]
            font-medium
            uppercase
            tracking-[0.4em]
            text-luxury-gold
          "
        >
          OUR AUTHORIZED NETWORK
        </span>

        <span className="h-px w-12 bg-luxury-gold/60" />

      </div>


      {/* MAIN HEADING */}

      <h2
        className="
          font-luxury
          text-4xl
          font-bold
          md:text-5xl
        "
      >
        Our{" "}
        <span className="text-gold-300">
          Branch Offices
        </span>
      </h2>


      {/* DIVIDER */}

      <div
        className="
          mx-auto
          mt-6
          h-[2px]
          w-12
          bg-luxury-gold
        "
      />


      {/* DESCRIPTION */}

      <p
        className="
          mx-auto
          mt-6
          max-w-2xl
          text-sm
          leading-7
          text-white/55
          md:text-base
        "
      >
        Explore our growing network of NOOH branch offices
        across India. Connect with our nearest branch office
        for product information, project assistance and
        business support.
      </p>

    </motion.div>


    {/* =====================================================
        BRANCH OFFICE GRID
    ===================================================== */}

    <div
      className="
        grid
        gap-5
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >

      {[
        {
          number: "01",
          icon: "⌖",
          name: "F K & COMPANY",

          address:
            "Floor No.: BANGAI, Building No./Flat No.: 0, Sri Surendra Kumar Sahani, Maharajganj Road, Jhungia Bazar, Gorakhpur, Uttar Pradesh – 273013",

          branchManager: " Ar. Nidhi ",
          managerNumber: "+91 8448391967",
        },

        {
          number: "02",
          icon: "⌖",
          name: "MHA ENTERPRISES",

          address:
            "Near Masjid Usman, Noor Bagh, Sopore, Baramulla, Jammu and Kashmir – 193201",

          branchManager: " Ar. Nidhi ",
          managerNumber: "+91 8448391967",
        },

        {
          number: "03",
          icon: "⌖",
          name: "NOOH Branch Office",

          address:
            "New Delhi, Delhi",

          branchManager: "Branch Manager Name",
          managerNumber: "+91 XXXXX XXXXX",
        },

        {
          number: "04",
          icon: "⌖",
          name: "NOOH Branch Office",

          address:
            "Jaipur, Rajasthan",

          branchManager: "Branch Manager Name",
          managerNumber: "+91 XXXXX XXXXX",
        },

        {
          number: "05",
          icon: "⌖",
          name: "NOOH Branch Office",

          address:
            "Ahmedabad, Gujarat",

          branchManager: "Branch Manager Name",
          managerNumber: "+91 XXXXX XXXXX",
        },

        {
          number: "06",
          icon: "⌖",
          name: "NOOH Branch Office",

          address:
            "Mumbai, Maharashtra",

          branchManager: "Branch Manager Name",
          managerNumber: "+91 XXXXX XXXXX",
        },

        {
          number: "07",
          icon: "⌖",
          name: "NOOH Branch Office",

          address:
            "Bengaluru, Karnataka",

          branchManager: "Branch Manager Name",
          managerNumber: "+91 XXXXX XXXXX",
        },

        {
          number: "08",
          icon: "⌖",
          name: "NOOH Branch Office",

          address:
            "Hyderabad, Telangana",

          branchManager: "Branch Manager Name",
          managerNumber: "+91 XXXXX XXXXX",
        },

      ].map((branch, index) => (

        <motion.div
          key={branch.number}

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.5,
            delay: index * 0.06,
          }}

          whileHover={{
            y: -6,
          }}

          className="
            glass-gold
            group
            p-7
            transition-all
            duration-300
          "
        >

          {/* =================================================
              CARD HEADER
          ================================================= */}

          <div className="flex items-center justify-between">

            {/* NUMBER */}

            <span
              className="
                text-[10px]
                font-bold
                tracking-[0.2em]
                text-luxury-gold
              "
            >
              {branch.number}
            </span>


            {/* LOCATION ICON */}

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-luxury-gold/40
                text-lg
                text-luxury-gold
                transition-all
                duration-300
                group-hover:border-luxury-gold
                group-hover:bg-luxury-gold/10
              "
            >
              {branch.icon}
            </div>

          </div>


          {/* =================================================
              BRANCH NAME
          ================================================= */}

          <h3
            className="
              mt-7
              font-luxury
              text-xl
              font-bold
              leading-snug
              text-white
            "
          >
            {branch.name}
          </h3>


          {/* =================================================
              ADDRESS
          ================================================= */}

          <div
            className="
              mt-5
              border-t
              border-white/10
              pt-5
            "
          >

            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-luxury-gold
              "
            >
              Address
            </p>


            <p
              className="
                mt-2
                text-sm
                leading-6
                text-white/55
              "
            >
              {branch.address}
            </p>

          </div>


          {/* =================================================
              BRANCH MANAGER
          ================================================= */}

          <div
            className="
              mt-5
              border-t
              border-white/10
              pt-5
            "
          >

            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-luxury-gold
              "
            >
              Branch Manager
            </p>


            <p
              className="
                mt-2
                text-sm
                font-medium
                text-white/80
              "
            >
              {branch.branchManager}
            </p>


            {/* =================================================
                MANAGER NUMBER
            ================================================= */}

            <p
              className="
                mt-1
                text-sm
                text-white/50
              "
            >
              {branch.managerNumber}
            </p>

          </div>


          {/* =================================================
              BOTTOM GOLD LINE
          ================================================= */}

          <div
            className="
              mt-6
              h-px
              w-10
              bg-luxury-gold/60
              transition-all
              duration-500
              group-hover:w-full
            "
          />

        </motion.div>

      ))}

    </div>


    {/* =====================================================
        BOTTOM NOTE
    ===================================================== */}

    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: true,
      }}

      transition={{
        duration: 0.6,
        delay: 0.2,
      }}

      className="mt-10 text-center"
    >

      <p
        className="
          text-xs
          uppercase
          tracking-[0.25em]
          text-white/35
        "
      >
        More NOOH branch offices coming soon
      </p>

    </motion.div>

  </div>
</section>
        {/* Map Section */}
        <section className="section-padding">
          <div className="container-custom mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56052.79803397785!2d77.2611652216797!3d28.590779299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a62403a731%3A0x8052510b841b945e!2sNOOH%20ELEVATED%20LIVING%20LLP!5e0!3m2!1sen!2sin!4v1782473500516!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NOOH Living Elevated Location"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
