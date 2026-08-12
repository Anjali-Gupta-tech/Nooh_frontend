import React, { useState } from "react";
import { motion } from "framer-motion";

/* ============================================================
   STATE → CITY DATA
============================================================ */

const stateCities = {
  "Andhra Pradesh": [
    "Visakhapatnam",
    "Vijayawada",
    "Guntur",
    "Nellore",
    "Tirupati",
    "Kurnool",
    "Rajahmundry",
  ],

  "Arunachal Pradesh": [
    "Itanagar",
    "Naharlagun",
    "Pasighat",
  ],

  Assam: [
    "Guwahati",
    "Dibrugarh",
    "Silchar",
    "Jorhat",
    "Nagaon",
  ],

  Bihar: [
    "Patna",
    "Gaya",
    "Muzaffarpur",
    "Bhagalpur",
    "Darbhanga",
    "Purnia",
  ],

  Chhattisgarh: [
    "Raipur",
    "Bhilai",
    "Bilaspur",
    "Korba",
    "Durg",
  ],

  Goa: [
    "Panaji",
    "Margao",
    "Vasco da Gama",
  ],

  Gujarat: [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Gandhinagar",
    "Bhavnagar",
    "Jamnagar",
  ],

  Haryana: [
    "Gurugram",
    "Faridabad",
    "Panipat",
    "Ambala",
    "Hisar",
    "Karnal",
    "Rohtak",
    "Sonipat",
  ],

  "Himachal Pradesh": [
    "Shimla",
    "Dharamshala",
    "Solan",
    "Mandi",
    "Baddi",
  ],

  Jharkhand: [
    "Ranchi",
    "Jamshedpur",
    "Dhanbad",
    "Bokaro",
    "Deoghar",
  ],

  Karnataka: [
    "Bengaluru",
    "Mysuru",
    "Mangaluru",
    "Hubballi",
    "Belagavi",
    "Davanagere",
  ],

  Kerala: [
    "Thiruvananthapuram",
    "Kochi",
    "Kozhikode",
    "Thrissur",
    "Kollam",
    "Kannur",
  ],

  "Madhya Pradesh": [
    "Bhopal",
    "Indore",
    "Gwalior",
    "Jabalpur",
    "Ujjain",
    "Sagar",
  ],

  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "Thane",
    "Aurangabad",
    "Navi Mumbai",
    "Kolhapur",
  ],

  Manipur: [
    "Imphal",
  ],

  Meghalaya: [
    "Shillong",
  ],

  Mizoram: [
    "Aizawl",
  ],

  Nagaland: [
    "Kohima",
    "Dimapur",
  ],

  Odisha: [
    "Bhubaneswar",
    "Cuttack",
    "Rourkela",
    "Puri",
    "Sambalpur",
  ],

  Punjab: [
    "Ludhiana",
    "Amritsar",
    "Jalandhar",
    "Patiala",
    "Mohali",
    "Bathinda",
  ],

  Rajasthan: [
    "Jaipur",
    "Jodhpur",
    "Udaipur",
    "Kota",
    "Ajmer",
    "Bikaner",
    "Alwar",
  ],

  Sikkim: [
    "Gangtok",
  ],

  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Salem",
    "Tiruchirappalli",
    "Tiruppur",
    "Erode",
  ],

  Telangana: [
    "Hyderabad",
    "Warangal",
    "Nizamabad",
    "Karimnagar",
    "Khammam",
  ],

  Tripura: [
    "Agartala",
  ],

  "Uttar Pradesh": [
    "Noida",
    "Greater Noida",
    "Ghaziabad",
    "Lucknow",
    "Kanpur",
    "Agra",
    "Varanasi",
    "Prayagraj",
    "Meerut",
    "Gorakhpur",
    "Bareilly",
    "Moradabad",
    "Aligarh",
    "Mathura",
    "Muzaffarnagar",
    "Saharanpur",
    "Jhansi",
  ],

  Uttarakhand: [
    "Dehradun",
    "Haridwar",
    "Rishikesh",
    "Haldwani",
    "Nainital",
    "Roorkee",
  ],

  "West Bengal": [
    "Kolkata",
    "Howrah",
    "Durgapur",
    "Siliguri",
    "Asansol",
  ],

  Delhi: [
    "New Delhi",
    "Delhi",
  ],

  "Jammu & Kashmir": [
    "Srinagar",
    "Jammu",
    "Anantnag",
  ],

  Chandigarh: [
    "Chandigarh",
  ],

  Puducherry: [
    "Puducherry",
  ],
};


/* ============================================================
   ASSOCIATE FORM
============================================================ */

const Associateform = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    whatsapp: "",

    profession: "",
    companyName: "",
    experience: "",
    website: "",

    city: "",
    state: "",

    clientType: "",
    projectType: "",
    projectNetwork: "",

    investmentReady: "",
    reason: "",
    callbackTime: "",

    agree: false,
  });


  /* ============================================================
     HANDLE CHANGE
  ============================================================ */

  const handleChange = (e) => {

    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };


  /* ============================================================
     STATE CHANGE
  ============================================================ */

  const handleStateChange = (e) => {

    const selectedState = e.target.value;

    setFormData((prev) => ({
      ...prev,
      state: selectedState,
      city: "",
    }));
  };


  /* ============================================================
     SUBMIT
  ============================================================ */

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(
      "Associate Application:",
      formData
    );

    alert(
      "Associate application submitted successfully."
    );
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
            src="/franchaise-hero/associate.png"
            alt="NOOH Associate Partner"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

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

              Associate{" "}

              <span className="text-gold-300">
                Partner
              </span>

            </h1>


            <div className="mx-auto mt-7 h-[1px] w-[70px] bg-[#d6af45]" />


            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              Partner with NOOH, bring project opportunities and
              grow your business with complete project support.
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
                  ASSOCIATE PROGRAM
                </span>

              </div>


              {/* Heading */}

              <h2 className="font-luxury text-4xl font-bold leading-tight md:text-5xl">

                Become A{" "}

                <span className="text-gold-300">
                  NOOH Associate
                </span>

              </h2>


              <div className="mt-6 h-[2px] w-14 bg-luxury-gold" />


              <p className="mt-6 text-sm leading-7 text-white/60">
                Tell us about yourself, your professional network
                and the type of projects you can bring to NOOH.
              </p>


              {/* Investment Card */}

              

              {/* Support Points */}

              <div className="mt-7 space-y-3">

                {[
                  "Dedicated Manager",
                  "Fixed Price System",
                  "Project Support",
                  "Zero Royalty",
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
              className="glass-gold rounded-2xl p-6 md:p-10"
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
                      Where Do You Operate?
                    </h3>

                  </div>


                  <div className="grid gap-5 md:grid-cols-2">


                    {/* STATE */}

                    <FormSelect
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleStateChange}
                      required
                      options={Object.keys(stateCities)}
                    />


                    {/* CITY */}

                    <FormSelect
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      disabled={!formData.state}
                      options={
                        formData.state
                          ? stateCities[formData.state]
                          : []
                      }
                    />

                  </div>

                </div>



                {/* =================================================
                    PROJECT NETWORK
                ================================================= */}

                <div>

                  <div className="mb-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                      04 — PROJECT NETWORK
                    </p>

                    <h3 className="mt-2 font-luxury text-2xl font-bold text-white">
                      Tell Us About Your Network
                    </h3>

                  </div>


                  <div className="space-y-5">


                    <FormSelect
                      label="Who Are Your Typical Clients?"
                      name="clientType"
                      value={formData.clientType}
                      onChange={handleChange}
                      options={[
                        "Residential Clients",
                        "Commercial Clients",
                        "Architects & Designers",
                        "Builders & Contractors",
                        "Corporate Clients",
                        "Mixed Client Base",
                      ]}
                    />


                    <FormSelect
                      label="What Type Of Projects Do You Handle?"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      options={[
                        "Residential",
                        "Commercial",
                        "Hotels / Hospitality",
                        "Retail",
                        "Office",
                        "Mixed Projects",
                      ]}
                    />


                    <FormTextarea
                      label="Tell Us About Your Project Network"
                      name="projectNetwork"
                      value={formData.projectNetwork}
                      onChange={handleChange}
                      placeholder="Tell us about your clients, projects or business network"
                    />

                  </div>

                </div>



                {/* =================================================
                    ASSOCIATION DETAILS
                ================================================= */}

                <div>

                  <div className="mb-6">

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-luxury-gold">
                      05 — ASSOCIATION
                    </p>

                    <h3 className="mt-2 font-luxury text-2xl font-bold text-white">
                      Let's Understand Your Interest
                    </h3>

                  </div>


                  <div className="space-y-5">


                    <FormSelect
                      label="Are You Comfortable With The Associate Investment?"
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


                    <FormTextarea
                      label="Why Do You Want To Become A NOOH Associate?"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      placeholder="Tell us why you are interested in becoming a NOOH Associate Partner"
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
                      is accurate and I agree to be contacted by
                      the NOOH team regarding the Associate Partner
                      Program.

                    </span>

                  </label>

                </div>



                {/* =================================================
                    SUBMIT
                ================================================= */}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-4 rounded-lg bg-[#d6af45] px-8 py-5 text-[11px] font-bold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-[#c9a43a]"
                >

                  Become An Associate Partner

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>

                </button>


                <p className="text-center text-[10px] leading-5 text-white/30">

                  By submitting this form, you agree to be contacted
                  regarding the NOOH Associate Partner Program.

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

      <label className="mb-2 block text-sm font-semibold text-white">

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
        className="w-full rounded-lg border border-luxury-gold/30 bg-luxury-black/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-luxury-gold"
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
  disabled = false,
}) => {

  return (

    <div>

      <label className="mb-2 block text-sm font-semibold text-white">

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
        disabled={disabled}
        className={`w-full rounded-lg border border-luxury-gold/30 bg-luxury-black/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-luxury-gold ${
          disabled
            ? "cursor-not-allowed opacity-40"
            : "cursor-pointer"
        }`}
      >

        <option
          value=""
          className="bg-[#111111] text-white"
        >
          {disabled
            ? "Select state first"
            : "Select an option"}
        </option>


        {options.map((option) => (

          <option
            key={option}
            value={option}
            className="bg-[#111111] text-white"
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

      <label className="mb-2 block text-sm font-semibold text-white">
        {label}
      </label>


      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className="w-full resize-none rounded-lg border border-luxury-gold/30 bg-luxury-black/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-luxury-gold"
      />

    </div>
  );
};


export default Associateform;