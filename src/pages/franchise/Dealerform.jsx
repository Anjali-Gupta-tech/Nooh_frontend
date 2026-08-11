import React, { useState } from "react";
import { motion } from "framer-motion";

const DealerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    whatsapp: "",
    companyName: "",
    businessType: "",
    yearsInBusiness: "",
    website: "",
    city: "",
    state: "",
    dealershipCity: "",
    address: "",
    industryExperience: "",
    clientNetwork: "",
    monthlyBusiness: "",
    reason: "",
    callbackTime: "",
    investmentReady: "",
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

    console.log("Dealer Application:", formData);

    alert("Dealer application submitted successfully.");
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
            src="/franchaise-hero/deal.png"
            alt="NOOH Dealership"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        </div>


        {/* Gold Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-[3px] bg-gray" />


        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[420px] items-center justify-center px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.45em] text-luxury-gold">
              NOOH ELEVATED LIVING LLP
            </p>

            <h1 className="font-luxury text-5xl font-bold leading-tight md:text-7xl">
              Dealer{" "}
              <span className="text-gold-300">
                Application
              </span>
            </h1>

            <div className="mx-auto mt-7 h-[1px] w-[70px] bg-[#d6af45]" />

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              Take the first step towards becoming an authorized
              NOOH dealer in your city.
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-24 lg:self-start"
            >

              <div className="mb-5 flex items-center gap-4">

                <span className="h-px w-12 bg-luxury-gold/60" />

                <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-luxury-gold">
                  DEALERSHIP PROGRAM
                </span>

              </div>


              <h2 className="font-luxury text-4xl font-bold leading-tight md:text-5xl">
                Become A{" "}
                <span className="text-gold-300">
                  NOOH Dealer
                </span>
              </h2>


              <div className="mt-6 h-[2px] w-14 bg-luxury-gold" />


              <p className="mt-6 text-sm leading-7 text-white/60">
                Fill in your details and our team will connect
                with you to discuss the dealership opportunity,
                territory and next steps.
              </p>


              {/* Investment Card */}
              <div className="glass-gold mt-8 p-7">

                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                  DEALERSHIP INVESTMENT
                </p>

                <p className="mt-4 font-luxury text-4xl font-bold text-white">
                  ₹1,00,000
                  <span className="ml-2 text-lg text-gold-300">
                    + GST
                  </span>
                </p>

                <div className="mt-5 h-px w-full bg-luxury-gold/20" />

                <p className="mt-5 font-luxury text-lg font-bold text-gold-300">
                  One City. One Dealership.
                </p>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Build your NOOH business with premium products,
                  training and dedicated support.
                </p>

              </div>


              {/* Small Note */}
              <div className="mt-6 flex gap-3">

                <span className="text-luxury-gold">
                  ✦
                </span>

                <p className="text-xs leading-6 text-white/40">
                  Our team will review your application and
                  contact you regarding the dealership opportunity.
                </p>

              </div>

            </motion.div>


            {/* =================================================
                FORM
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
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
                    BUSINESS DETAILS
                ================================================= */}

                <div>

                  <div className="mb-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                      02 — BUSINESS DETAILS
                    </p>

                    <h3 className="mt-2 font-luxury text-2xl font-bold text-white">
                      Your Business
                    </h3>

                  </div>


                  <div className="grid gap-5 md:grid-cols-2">

                    <FormInput
                      label="Business / Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Enter business name"
                      required
                    />


                    <FormSelect
                      label="Current Business Type"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      options={[
                        "Interior Designer",
                        "Architect",
                        "Contractor",
                        "Builder",
                        "Retailer",
                        "Distributor",
                        "Manufacturer",
                        "Other",
                      ]}
                    />


                    <FormInput
                      label="Years In Business"
                      name="yearsInBusiness"
                      value={formData.yearsInBusiness}
                      onChange={handleChange}
                      placeholder="e.g. 5 years"
                    />


                    <FormInput
                      label="Website / Instagram"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="Website or Instagram URL"
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
                      Your Territory
                    </h3>

                  </div>


                  <div className="grid gap-5 md:grid-cols-2">

                    <FormInput
                      label="Current City"
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

                    <FormInput
                      label="Preferred Dealership City"
                      name="dealershipCity"
                      value={formData.dealershipCity}
                      onChange={handleChange}
                      placeholder="City you want to represent"
                      required
                    />

                    <div className="md:col-span-2">

                      <FormTextarea
                        label="Office / Showroom Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your office / showroom address"
                      />

                    </div>

                  </div>

                </div>


                {/* =================================================
                    BUSINESS EXPERIENCE
                ================================================= */}

                <div>

                  <div className="mb-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                      04 — BUSINESS PROFILE
                    </p>

                    <h3 className="mt-2 font-luxury text-2xl font-bold text-white">
                      Tell Us More
                    </h3>

                  </div>


                  <div className="space-y-5">

                    <FormSelect
                      label="Do You Have Interior / Architecture / Construction Experience?"
                      name="industryExperience"
                      value={formData.industryExperience}
                      onChange={handleChange}
                      options={[
                        "Yes — More than 5 years",
                        "Yes — 2 to 5 years",
                        "Yes — Less than 2 years",
                        "No",
                      ]}
                    />


                    <FormTextarea
                      label="Existing Client Network"
                      name="clientNetwork"
                      value={formData.clientNetwork}
                      onChange={handleChange}
                      placeholder="Tell us briefly about your existing client network"
                    />


                    <FormSelect
                      label="Expected Monthly Business"
                      name="monthlyBusiness"
                      value={formData.monthlyBusiness}
                      onChange={handleChange}
                      options={[
                        "Below ₹5 Lakh",
                        "₹5–10 Lakh",
                        "₹10–25 Lakh",
                        "₹25 Lakh+",
                        "Not Sure",
                      ]}
                    />


                    <FormTextarea
                      label="Why Do You Want To Become A NOOH Dealer?"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="Tell us about your business goals and why you are interested in NOOH"
                    />

                  </div>

                </div>


                {/* =================================================
                    INVESTMENT
                ================================================= */}

                <div>

                  <div className="mb-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                      05 — NEXT STEP
                    </p>

                    <h3 className="mt-2 font-luxury text-2xl font-bold text-white">
                      Let's Connect
                    </h3>

                  </div>


                  <div className="space-y-5">

                    <FormSelect
                      label="Are You Ready For The Dealership Investment?"
                      name="investmentReady"
                      value={formData.investmentReady}
                      onChange={handleChange}
                      required
                      options={[
                        "Yes, I am ready",
                        "I would like to discuss first",
                        "I need more information",
                      ]}
                    />


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
                      is accurate and I agree to be contacted by the
                      NOOH team regarding the dealership opportunity.
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

                  Submit Dealer Application

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>

                </button>


                <p className="text-center text-[10px] leading-5 text-white/30">
                  By submitting this form, you agree to be contacted
                  regarding the NOOH Dealership Program.
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
   REUSABLE INPUT
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
   REUSABLE SELECT
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
   REUSABLE TEXTAREA
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

export default DealerForm;