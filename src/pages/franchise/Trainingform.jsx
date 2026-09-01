import React, { useState } from "react";
import { motion } from "framer-motion";

const Trainingform = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    whatsapp: "",

    profession: "",
    companyName: "",
    experience: "",

    city: "",
    state: "",

    trainingInterest: "",
    experienceLevel: "",
    preferredMode: "",
    preferredTraining: "",

    expectations: "",
    callbackTime: "",

    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Training Application:", formData);

    alert("Training application submitted successfully.");
  };

  return (
    <div className="min-h-screen bg-luxury-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">

          <img
            src="/franchaise-hero/training.png"
            alt="NOOH Training Program"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />

          <div className="absolute inset-0 "/>

        </div>

        {/* Gold Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-[3px] bg-[#d6af45]" />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[420px] items-center justify-center px-6 text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-4xl"
          >

            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.45em] text-luxury-gold">
              NOOH ELEVATED LIVING LLP
            </p>

            <h1 className="font-luxury text-5xl font-bold leading-tight md:text-7xl">
              Training{" "}
              <span className="text-gold-300">
                Application 
              </span>
            </h1>

            <div className="mx-auto mt-7 h-[1px] w-[70px] bg-[#d6af45]" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              Learn, master and grow with complete product,
              technical, design and business training from NOOH.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FORM SECTION
      ===================================================== */}

      <section className="section-padding bg-luxury-black">

        <div className="container-custom mx-auto">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.5fr]">


            {/* =================================================
                LEFT INFORMATION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="lg:sticky lg:top-24 lg:self-start"
            >

              {/* Label */}
              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-12 bg-luxury-gold/60" />

                <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
                  TRAINING PROGRAM
                </span>

              </div>


              {/* Heading */}
              <h2 className="font-luxury text-4xl font-bold leading-tight md:text-5xl">

                Apply For{" "}

                <span className="text-gold-300">
                  NOOH Training
                </span>

              </h2>


              <div className="mt-6 h-[2px] w-14 bg-luxury-gold" />


              <p className="mt-6 text-sm leading-7 text-white/60">
                Fill in your details to apply for NOOH training
                and develop the product, technical and business
                skills required to grow with the brand.
              </p>


              {/* Training Card */}
              <div className="glass-gold mt-8 p-7">

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                  TRAINING FOCUS
                </p>

                <p className="mt-4 font-luxury text-3xl font-bold text-white">
                  Learn. Master. Grow.
                </p>

                <div className="mt-5 h-px w-full bg-luxury-gold/20" />

                <p className="mt-5 text-sm leading-6 text-white/50">
                  Product knowledge, technical skills, design,
                  sales and business growth training.
                </p>

              </div>


              {/* Support Points */}
              <div className="mt-7 space-y-3">

                {[
                  "Product Knowledge",
                  "Technical Training",
                  "Design & Visualization",
                  "Sales & Business Training",
                  "Ongoing Support",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <span className="text-luxury-gold">
                      ✓
                    </span>

                    <span className="text-sm text-white/60">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </motion.div>


            {/* =================================================
                FORM
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="glass-gold p-6 md:p-10"
            >

              <form
                onSubmit={handleSubmit}
                className="space-y-10"
              >


                {/* =================================================
                    PERSONAL DETAILS
                ================================================= */}

                <div>

                  <div className="mb-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                      01 — PERSONAL DETAILS
                    </p>

                    <h3 className="mt-2 font-luxury text-2xl font-bold text-white">
                      Tell Us About Yourself
                    </h3>

                  </div>


                  <div className="grid gap-5 md:grid-cols-2">

                    <FormInput
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />

                    <FormInput
                      label="Mobile Number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      type="tel"
                      required
                    />

                    <FormInput
                      label="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      type="email"
                      required
                    />

                    <FormInput
                      label="WhatsApp Number"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="Enter WhatsApp number"
                      type="tel"
                    />

                  </div>

                </div>


                {/* =================================================
                    PROFESSIONAL DETAILS
                ================================================= */}

                <div>

                  <div className="mb-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                      02 — PROFESSIONAL DETAILS
                    </p>

                    <h3 className="mt-2 font-luxury text-2xl font-bold text-white">
                      Your Professional Profile
                    </h3>

                  </div>


                  <div className="grid gap-5 md:grid-cols-2">

                    <FormSelect
                      label="Your Profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      required
                      options={[
                        "Interior Designer",
                        "Architect",
                        "Contractor",
                        "Builder",
                        "Consultant",
                        "Sales Professional",
                        "Business Owner",
                        "Student",
                        "Other",
                      ]}
                    />

                    <FormInput
                      label="Company / Firm Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Enter company / firm name"
                    />

                    <FormInput
                      label="Professional Experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="e.g. 2 years"
                    />

                    <FormSelect
                      label="Experience Level"
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleChange}
                      options={[
                        "Beginner",
                        "1–3 Years",
                        "3–5 Years",
                        "5–10 Years",
                        "10+ Years",
                      ]}
                    />

                  </div>

                </div>


                {/* =================================================
                    LOCATION
                ================================================= */}

                <div>

                  <div className="mb-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                      03 — LOCATION
                    </p>

                    <h3 className="mt-2 font-luxury text-2xl font-bold text-white">
                      Where Are You Based?
                    </h3>

                  </div>


                  <div className="grid gap-5 md:grid-cols-2">

                    <FormInput
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      required
                    />

                    <FormInput
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter state"
                      required
                    />

                  </div>

                </div>


                {/* =================================================
                    TRAINING DETAILS
                ================================================= */}

                <div>

                  <div className="mb-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                      04 — TRAINING DETAILS
                    </p>

                    <h3 className="mt-2 font-luxury text-2xl font-bold text-white">
                      Tell Us About Your Training Needs
                    </h3>

                  </div>


                  <div className="space-y-5">

                    <FormSelect
                      label="What Are You Interested In?"
                      name="trainingInterest"
                      value={formData.trainingInterest}
                      onChange={handleChange}
                      required
                      options={[
                        "Product Knowledge",
                        "Technical & Installation Training",
                        "Design & Visualization",
                        "Sales Training",
                        "Business Training",
                        "Complete Training Program",
                      ]}
                    />


                    <FormSelect
                      label="Preferred Training Mode"
                      name="preferredMode"
                      value={formData.preferredMode}
                      onChange={handleChange}
                      required
                      options={[
                        "Offline Training",
                        "Online Training",
                        "Hybrid Training",
                      ]}
                    />


                    <FormSelect
                      label="Preferred Training"
                      name="preferredTraining"
                      value={formData.preferredTraining}
                      onChange={handleChange}
                      options={[
                        "Product Training",
                        "Technical Training",
                        "Design Training",
                        "Sales & Business Training",
                        "Complete Training",
                      ]}
                    />


                    <FormTextarea
                      label="What Do You Expect From The Training?"
                      name="expectations"
                      value={formData.expectations}
                      onChange={handleChange}
                      placeholder="Tell us what you would like to learn..."
                    />

                  </div>

                </div>


                {/* =================================================
                    CONTACT DETAILS
                ================================================= */}

                <div>

                  <div className="mb-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                      05 — CONTACT PREFERENCE
                    </p>

                    <h3 className="mt-2 font-luxury text-2xl font-bold text-white">
                      Let's Connect
                    </h3>

                  </div>


                  <div className="space-y-5">

                    <FormSelect
                      label="Preferred Callback Time"
                      name="callbackTime"
                      value={formData.callbackTime}
                      onChange={handleChange}
                      options={[
                        "Morning — 9 AM to 12 PM",
                        "Afternoon — 12 PM to 4 PM",
                        "Evening — 4 PM to 7 PM",
                      ]}
                    />

                  </div>

                </div>


                {/* =================================================
                    AGREEMENT
                ================================================= */}

                <div className="border-t border-luxury-gold/15 pt-7">

                  <label className="flex cursor-pointer items-start gap-3">

                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 accent-[#d6af45]"
                    />

                    <span className="text-xs leading-6 text-white/50">
                      I confirm that the information provided above
                      is accurate and I agree to be contacted by
                      the NOOH team regarding the Training Program.
                    </span>

                  </label>

                </div>


                {/* =================================================
                    SUBMIT
                ================================================= */}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-4 bg-[#d6af45] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
                >

                  Apply For Training

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>

                </button>


                <p className="text-center text-[10px] leading-5 text-white/30">
                  By submitting this form, you agree to be contacted
                  regarding the NOOH Training Program.
                </p>

              </form>

            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
};


/* ============================================================
   INPUT COMPONENT
============================================================ */

const FormInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <div>

      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">

        {label}

        {required && (
          <span className="ml-1 text-luxury-gold">
            *
          </span>
        )}

      </label>


      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-luxury-gold/60 focus:bg-white/[0.05]"
      />

    </div>
  );
};


/* ============================================================
   SELECT COMPONENT
============================================================ */

const FormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) => {
  return (
    <div>

      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">

        {label}

        {required && (
          <span className="ml-1 text-luxury-gold">
            *
          </span>
        )}

      </label>


      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-white/10 bg-[#111111] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 focus:border-luxury-gold/60"
      >

        <option value="">
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

    </div>
  );
};


/* ============================================================
   TEXTAREA COMPONENT
============================================================ */

const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>

      <label className="mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
        {label}
      </label>


      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-luxury-gold/60 focus:bg-white/[0.05]"
      />

    </div>
  );
};


export default Trainingform;