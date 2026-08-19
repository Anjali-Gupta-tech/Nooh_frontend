 import React, { useEffect, useState } from "react";
import {
  X,
  Plus,
  Trash2,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   PRODUCT RATES
========================================================= */

const PRODUCT_RATES = {
  "STATIC WHITE": 450,
  "TUNABLE WHITE": 550,
  RGBW: 750,
  "DYNAMIC PIXEL": 950,
};

const BookNowModel = ({
  isOpen,
  onClose,
  productName,
  selectedType = "",
}) => {
  /* =========================================================
     STATES
  ========================================================= */

  const [step, setStep] = useState(1);

  const [type, setType] = useState(selectedType || "");

  const [temperature, setTemperature] = useState("");

  const [control, setControl] = useState("");

  const [pixelOption, setPixelOption] = useState("");

  const [areas, setAreas] = useState([
    {
      id: 1,
      name: "Area 1",
      width: "",
      length: "",
    },
  ]);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  /* =========================================================
     RESET MODEL WHEN OPENED
  ========================================================= */

  useEffect(() => {
    if (isOpen) {
      setStep(1);

      setType(selectedType || "");

      setTemperature("");

      setControl("");

      setPixelOption("");

      setAreas([
        {
          id: 1,
          name: "Area 1",
          width: "",
          length: "",
        },
      ]);

      setCustomer({
        name: "",
        phone: "",
        email: "",
        city: "",
        message: "",
      });
    }
  }, [isOpen, selectedType]);

  if (!isOpen) return null;

  /* =========================================================
     AREA CALCULATION
  ========================================================= */

  const totalArea = areas.reduce((total, area) => {
    const width = Number(area.width) || 0;

    const length = Number(area.length) || 0;

    return total + width * length;
  }, 0);

  /* =========================================================
     PRICE CALCULATION
  ========================================================= */

  const rate = PRODUCT_RATES[type] || 0;

  const estimatedPrice = totalArea * rate;

  /* =========================================================
     FORMAT PRICE
  ========================================================= */

  const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  /* =========================================================
     ADD AREA
  ========================================================= */

  const addArea = () => {
    setAreas((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: `Area ${prev.length + 1}`,
        width: "",
        length: "",
      },
    ]);
  };

  /* =========================================================
     REMOVE AREA
  ========================================================= */

  const removeArea = (id) => {
    if (areas.length === 1) return;

    setAreas((prev) =>
      prev.filter((area) => area.id !== id)
    );
  };

  /* =========================================================
     UPDATE AREA
  ========================================================= */

  const updateArea = (id, field, value) => {
    setAreas((prev) =>
      prev.map((area) =>
        area.id === id
          ? {
              ...area,
              [field]: value,
            }
          : area
      )
    );
  };

  /* =========================================================
     NEXT STEP
  ========================================================= */

  const nextStep = () => {
    if (step === 1) {
      if (!type) {
        alert("Please select a type.");
        return;
      }

      if (
        type === "STATIC WHITE" &&
        !temperature
      ) {
        alert("Please select a colour temperature.");
        return;
      }

      if (
        type === "TUNABLE WHITE" &&
        !temperature
      ) {
        alert("Please select a CCT range.");
        return;
      }

      if (
        type === "RGBW" &&
        !temperature
      ) {
        alert("Please select an RGBW configuration.");
        return;
      }

      if (
        type === "DYNAMIC PIXEL" &&
        !pixelOption
      ) {
        alert("Please select a control option.");
        return;
      }
    }

    if (step === 2) {
      if (totalArea <= 0) {
        alert(
          "Please enter valid length and width."
        );
        return;
      }
    }

    setStep((prev) => prev + 1);
  };

  /* =========================================================
     PREVIOUS STEP
  ========================================================= */

  const previousStep = () => {
    setStep((prev) => prev - 1);
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customer.name || !customer.phone) {
      alert(
        "Please enter your name and mobile number."
      );
      return;
    }

    const bookingData = {
      product: productName,

      type,

      temperature,

      control,

      pixelOption,

      areas,

      totalArea,

      rate,

      estimatedPrice,

      customer,
    };

    console.log(
      "BOOKING DATA:",
      bookingData
    );

    alert(
      "Thank you! Your quotation request has been submitted."
    );

    onClose();
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">

      <div className="relative w-full max-w-6xl max-h-[94vh] overflow-hidden rounded-3xl bg-[#111111] border border-white/10 shadow-2xl">

        {/* =================================================
            CLOSE BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-30 w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          <X size={18} />
        </button>

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="px-7 md:px-10 pt-7 pb-5 border-b border-white/10">

          <p className="text-gold-300 text-xs uppercase tracking-[0.25em]">
            Configure Your Ceiling
          </p>

          <h2 className="mt-2 text-3xl md:text-4xl font-luxury font-bold text-white">
            {productName}
          </h2>

          <p className="mt-2 text-white/50">
            Configure your requirements and calculate
            your estimated project price.
          </p>

        </div>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="px-7 md:px-10 py-5 border-b border-white/10">

          <div className="flex items-center justify-center gap-3">

            {[1, 2, 3].map((number) => (

              <React.Fragment key={number}>

                <div
                  className={`flex items-center gap-2 ${
                    step >= number
                      ? "text-gold-300"
                      : "text-white/30"
                  }`}
                >

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm border ${
                      step >= number
                        ? "border-gold-300 bg-gold-300/10"
                        : "border-white/20"
                    }`}
                  >
                    {number}
                  </div>

                  <span className="hidden sm:block text-xs uppercase tracking-wider">
                    {number === 1 &&
                      "Configuration"}

                    {number === 2 &&
                      "Measurement"}

                    {number === 3 &&
                      "Details"}
                  </span>

                </div>

                {number !== 3 && (
                  <div className="w-8 md:w-16 h-px bg-white/10" />
                )}

              </React.Fragment>

            ))}

          </div>

        </div>

        {/* =================================================
            SCROLLABLE CONTENT
        ================================================= */}

        <div className="overflow-y-auto max-h-[calc(94vh-190px)]">

          <div className="p-7 md:p-10">

            {/* =================================================
                STEP 1
            ================================================= */}

            {step === 1 && (

              <div>

                <p className="text-gold-300 text-xs uppercase tracking-[0.2em]">
                  Step 01
                </p>

                <h3 className="text-3xl font-luxury font-bold text-white mt-2 mb-7">
                  Configure Your Lighting
                </h3>

                {/* TYPE */}

                <p className="text-white/50 text-sm mb-3">
                  Select Type
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* STATIC WHITE */}

                  <button
                    type="button"
                    onClick={() => {
                      setType("STATIC WHITE");

                      setTemperature("");

                      setControl("");

                      setPixelOption("");
                    }}
                    className={`text-left p-5 rounded-2xl border transition ${
                      type === "STATIC WHITE"
                        ? "border-gold-300 bg-gold-300/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/30"
                    }`}
                  >

                    <p className="text-white text-lg font-semibold">
                      STATIC WHITE
                    </p>

                    <p className="text-white/40 text-sm mt-2">
                      Fixed CCT LED System
                    </p>

                    <p className="text-gold-300 text-xs mt-4">
                      3000K · 4000K · 6000K · 10000K
                    </p>

                    <p className="text-white/60 text-sm mt-3">
                      ₹450 / Sq.Ft.
                    </p>

                  </button>

                  {/* TUNABLE WHITE */}

                  <button
                    type="button"
                    onClick={() => {
                      setType("TUNABLE WHITE");

                      setTemperature("");

                      setControl("");

                      setPixelOption("");
                    }}
                    className={`text-left p-5 rounded-2xl border transition ${
                      type === "TUNABLE WHITE"
                        ? "border-gold-300 bg-gold-300/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/30"
                    }`}
                  >

                    <p className="text-white text-lg font-semibold">
                      TUNABLE WHITE
                    </p>

                    <p className="text-white/40 text-sm mt-2">
                      Dimmable + Tunable CCT LED System
                    </p>

                    <p className="text-gold-300 text-xs mt-4">
                      Adjustable White Temperature
                    </p>

                    <p className="text-white/60 text-sm mt-3">
                      ₹550 / Sq.Ft.
                    </p>

                  </button>

                  {/* RGBW */}

                  <button
                    type="button"
                    onClick={() => {
                      setType("RGBW");

                      setTemperature("");

                      setControl("");

                      setPixelOption("");
                    }}
                    className={`text-left p-5 rounded-2xl border transition ${
                      type === "RGBW"
                        ? "border-gold-300 bg-gold-300/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/30"
                    }`}
                  >

                    <p className="text-white text-lg font-semibold">
                      RGBW
                    </p>

                    <p className="text-white/40 text-sm mt-2">
                      Dimmable + Tunable White + Colour Changing
                    </p>

                    <p className="text-gold-300 text-xs mt-4">
                      White + RGB
                    </p>

                    <p className="text-white/60 text-sm mt-3">
                      ₹750 / Sq.Ft.
                    </p>

                  </button>

                  {/* DYNAMIC PIXEL */}

                  <button
                    type="button"
                    onClick={() => {
                      setType("DYNAMIC PIXEL");

                      setTemperature("");

                      setControl("");

                      setPixelOption("");
                    }}
                    className={`text-left p-5 rounded-2xl border transition ${
                      type === "DYNAMIC PIXEL"
                        ? "border-gold-300 bg-gold-300/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/30"
                    }`}
                  >

                    <p className="text-white text-lg font-semibold">
                      DYNAMIC PIXEL
                    </p>

                    <p className="text-white/40 text-sm mt-2">
                      RGBW Pixel + DMX / MADRIX
                    </p>

                    <p className="text-gold-300 text-xs mt-4">
                      Programmable Lighting
                    </p>

                    <p className="text-white/60 text-sm mt-3">
                      ₹950 / Sq.Ft.
                    </p>

                  </button>

                </div>

                {/* =================================================
                    STATIC WHITE
                ================================================= */}

                {type === "STATIC WHITE" && (

                  <div className="mt-8">

                    <p className="text-white/50 text-sm mb-3">
                      Select Colour Temperature
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                      {[
                        ["3000K", "Warm White"],
                        ["4000K", "Neutral White"],
                        ["6000K", "Cool White"],
                        ["10000K", "Daylight"],
                      ].map(
                        ([value, label]) => (

                          <button
                            key={value}
                            type="button"
                            onClick={() =>
                              setTemperature(value)
                            }
                            className={`p-4 rounded-xl border transition ${
                              temperature === value
                                ? "border-gold-300 bg-gold-300/10 text-gold-300"
                                : "border-white/10 text-white hover:border-white/30"
                            }`}
                          >

                            <p className="font-semibold">
                              {value}
                            </p>

                            <p className="text-xs text-white/40 mt-1">
                              {label}
                            </p>

                          </button>

                        )
                      )}

                    </div>

                  </div>

                )}

                {/* =================================================
                    TUNABLE WHITE
                ================================================= */}

                {type === "TUNABLE WHITE" && (

                  <div className="mt-8">

                    <p className="text-white/50 text-sm mb-3">
                      Select CCT Range
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                      {[
                        "2700K – 6500K",
                        "2700K – 10000K",
                      ].map((value) => (

                        <button
                          key={value}
                          type="button"
                          onClick={() =>
                            setTemperature(value)
                          }
                          className={`p-5 rounded-xl border text-left transition ${
                            temperature === value
                              ? "border-gold-300 bg-gold-300/10 text-gold-300"
                              : "border-white/10 text-white hover:border-white/30"
                          }`}
                        >

                          <p className="font-semibold">
                            {value}
                          </p>

                          <p className="text-xs text-white/40 mt-1">
                            Adjustable white temperature
                          </p>

                        </button>

                      ))}

                    </div>

                  </div>

                )}

                {/* =================================================
                    RGBW
                ================================================= */}

                {type === "RGBW" && (

                  <div className="mt-8">

                    <p className="text-white/50 text-sm mb-3">
                      Select Lighting Configuration
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                      {[
                        "RGBW Standard",
                        "RGBW + Tunable White",
                      ].map((value) => (

                        <button
                          key={value}
                          type="button"
                          onClick={() =>
                            setTemperature(value)
                          }
                          className={`p-5 rounded-xl border text-left transition ${
                            temperature === value
                              ? "border-gold-300 bg-gold-300/10 text-gold-300"
                              : "border-white/10 text-white hover:border-white/30"
                          }`}
                        >

                          <p className="font-semibold">
                            {value}
                          </p>

                          <p className="text-xs text-white/40 mt-1">
                            White + colour changing
                          </p>

                        </button>

                      ))}

                    </div>

                  </div>

                )}

                {/* =================================================
                    DYNAMIC PIXEL
                ================================================= */}

                {type === "DYNAMIC PIXEL" && (

                  <div className="mt-8">

                    <p className="text-white/50 text-sm mb-3">
                      Select Control / Programming
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                      {[
                        "DMX",
                        "MADRIX",
                      ].map((value) => (

                        <button
                          key={value}
                          type="button"
                          onClick={() =>
                            setPixelOption(value)
                          }
                          className={`p-5 rounded-xl border text-left transition ${
                            pixelOption === value
                              ? "border-gold-300 bg-gold-300/10 text-gold-300"
                              : "border-white/10 text-white hover:border-white/30"
                          }`}
                        >

                          <p className="font-semibold">
                            {value}
                          </p>

                          <p className="text-xs text-white/40 mt-1">
                            Programmable pixel lighting
                          </p>

                        </button>

                      ))}

                    </div>

                  </div>

                )}

                {/* =================================================
                    CONTROL
                ================================================= */}

                {type && (

                  <div className="mt-8">

                    <p className="text-white/50 text-sm mb-3">
                      Select Control
                    </p>

                    <div className="flex flex-wrap gap-3">

                      {(type === "DYNAMIC PIXEL"
                        ? ["DMX", "MADRIX"]
                        : type === "STATIC WHITE"
                        ? ["ON / OFF"]
                        : [
                            "Remote Control",
                            "Smart Control",
                            "DALI",
                          ]
                      ).map((option) => (

                        <button
                          key={option}
                          type="button"
                          onClick={() =>
                            setControl(option)
                          }
                          className={`px-5 py-3 rounded-full border transition ${
                            control === option
                              ? "border-gold-300 bg-gold-300/10 text-gold-300"
                              : "border-white/10 text-white hover:border-white/30"
                          }`}
                        >
                          {option}
                        </button>

                      ))}

                    </div>

                  </div>

                )}

                {/* CURRENT RATE */}

                {type && (

                  <div className="mt-8 p-5 rounded-2xl bg-gold-300/10 border border-gold-300/30 flex justify-between items-center">

                    <div>

                      <p className="text-white/50 text-sm">
                        Selected Type Rate
                      </p>

                      <p className="text-white text-lg font-semibold mt-1">
                        {formatPrice(rate)}
                        <span className="text-white/40 text-sm ml-1">
                          / Sq.Ft.
                        </span>
                      </p>

                    </div>

                    <div className="text-right">

                      <p className="text-gold-300 text-xs uppercase tracking-wider">
                        Estimated Price
                      </p>

                      <p className="text-gold-300 text-xl font-semibold mt-1">
                        {formatPrice(estimatedPrice)}
                      </p>

                    </div>

                  </div>

                )}

              </div>

            )}

            {/* =================================================
                STEP 2
            ================================================= */}

            {step === 2 && (

              <div>

                <p className="text-gold-300 text-xs uppercase tracking-[0.2em]">
                  Step 02
                </p>

                <h3 className="text-3xl font-luxury font-bold text-white mt-2 mb-7">
                  Measure Your Space
                </h3>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">

                  <p className="text-white/50 text-sm">
                    Enter the dimensions of your ceiling area.
                  </p>

                  <button
                    type="button"
                    onClick={addArea}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-300/50 text-gold-300 text-sm hover:bg-gold-300 hover:text-black transition"
                  >
                    <Plus size={16} />
                    Add Area
                  </button>

                </div>

                {/* AREAS */}

                <div className="space-y-4">

                  {areas.map((area) => (

                    <div
                      key={area.id}
                      className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10"
                    >

                      {/* AREA NAME */}

                      <div>

                        <label className="text-xs text-white/40">
                          Area / Room
                        </label>

                        <input
                          type="text"
                          value={area.name}
                          onChange={(e) =>
                            updateArea(
                              area.id,
                              "name",
                              e.target.value
                            )
                          }
                          className="mt-2 w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-gold-300"
                        />

                      </div>

                      {/* WIDTH */}

                      <div>

                        <label className="text-xs text-white/40">
                          Width (ft)
                        </label>

                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="10"
                          value={area.width}
                          onChange={(e) =>
                            updateArea(
                              area.id,
                              "width",
                              e.target.value
                            )
                          }
                          className="mt-2 w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-gold-300"
                        />

                      </div>

                      {/* LENGTH */}

                      <div>

                        <label className="text-xs text-white/40">
                          Length (ft)
                        </label>

                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          placeholder="12"
                          value={area.length}
                          onChange={(e) =>
                            updateArea(
                              area.id,
                              "length",
                              e.target.value
                            )
                          }
                          className="mt-2 w-full px-4 py-3 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-gold-300"
                        />

                      </div>

                      {/* DELETE */}

                      <button
                        type="button"
                        onClick={() =>
                          removeArea(area.id)
                        }
                        disabled={areas.length === 1}
                        className="self-end h-12 rounded-xl border border-white/10 text-white/40 hover:text-red-400 disabled:opacity-20"
                      >
                        <Trash2
                          size={18}
                          className="mx-auto"
                        />
                      </button>

                    </div>

                  ))}

                </div>

                {/* =================================================
                    AREA + PRICE SUMMARY
                ================================================= */}

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

                  {/* AREA */}

                  <div className="p-6 rounded-2xl bg-gold-300/10 border border-gold-300/30">

                    <p className="text-white/50 text-sm">
                      Total Project Area
                    </p>

                    <p className="text-3xl text-white font-luxury font-bold mt-1">
                      {totalArea.toFixed(2)}

                      <span className="text-sm text-white/50 ml-2">
                        Sq.Ft
                      </span>
                    </p>

                  </div>

                  {/* RATE */}

                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">

                    <p className="text-white/50 text-sm">
                      Rate
                    </p>

                    <p className="text-2xl text-white font-semibold mt-2">
                      {formatPrice(rate)}

                      <span className="text-sm text-white/40 ml-1">
                        / Sq.Ft.
                      </span>
                    </p>

                  </div>

                  {/* ESTIMATED PRICE */}

                  <div className="p-6 rounded-2xl bg-gold-300/10 border border-gold-300/30">

                    <p className="text-white/50 text-sm">
                      Estimated Price
                    </p>

                    <p className="text-2xl text-gold-300 font-semibold mt-2">
                      {formatPrice(
                        estimatedPrice
                      )}
                    </p>

                  </div>

                </div>

                {/* CALCULATION INFO */}

                <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/10">

                  <p className="text-white/40 text-xs">
                    Price Calculation
                  </p>

                  <p className="text-white/70 text-sm mt-1">
                    {totalArea.toFixed(2)} Sq.Ft. ×{" "}
                    {formatPrice(rate)} / Sq.Ft. ={" "}
                    <span className="text-gold-300 font-semibold">
                      {formatPrice(
                        estimatedPrice
                      )}
                    </span>
                  </p>

                </div>

              </div>

            )}

            {/* =================================================
                STEP 3
            ================================================= */}

            {step === 3 && (

              <div>

                <p className="text-gold-300 text-xs uppercase tracking-[0.2em]">
                  Step 03
                </p>

                <h3 className="text-3xl font-luxury font-bold text-white mt-2 mb-7">
                  Request Your Quotation
                </h3>

                {/* CUSTOMER DETAILS */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* NAME */}

                  <div>

                    <label className="text-xs text-white/40">
                      Full Name *
                    </label>

                    <input
                      required
                      type="text"
                      value={customer.name}
                      onChange={(e) =>
                        setCustomer({
                          ...customer,
                          name: e.target.value,
                        })
                      }
                      className="mt-2 w-full px-4 py-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-gold-300"
                    />

                  </div>

                  {/* PHONE */}

                  <div>

                    <label className="text-xs text-white/40">
                      Mobile Number *
                    </label>

                    <input
                      required
                      type="tel"
                      value={customer.phone}
                      onChange={(e) =>
                        setCustomer({
                          ...customer,
                          phone: e.target.value,
                        })
                      }
                      className="mt-2 w-full px-4 py-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-gold-300"
                    />

                  </div>

                  {/* EMAIL */}

                  <div>

                    <label className="text-xs text-white/40">
                      Email Address
                    </label>

                    <input
                      type="email"
                      value={customer.email}
                      onChange={(e) =>
                        setCustomer({
                          ...customer,
                          email: e.target.value,
                        })
                      }
                      className="mt-2 w-full px-4 py-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-gold-300"
                    />

                  </div>

                  {/* CITY */}

                  <div>

                    <label className="text-xs text-white/40">
                      City
                    </label>

                    <input
                      type="text"
                      value={customer.city}
                      onChange={(e) =>
                        setCustomer({
                          ...customer,
                          city: e.target.value,
                        })
                      }
                      className="mt-2 w-full px-4 py-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-gold-300"
                    />

                  </div>

                  {/* MESSAGE */}

                  <div className="md:col-span-2">

                    <label className="text-xs text-white/40">
                      Additional Requirements
                    </label>

                    <textarea
                      rows="5"
                      value={customer.message}
                      onChange={(e) =>
                        setCustomer({
                          ...customer,
                          message: e.target.value,
                        })
                      }
                      className="mt-2 w-full px-4 py-4 rounded-xl bg-black/30 border border-white/10 text-white outline-none focus:border-gold-300 resize-none"
                    />

                  </div>

                </div>

                {/* =================================================
                    FINAL SUMMARY
                ================================================= */}

                <div className="mt-7 p-6 rounded-2xl bg-white/[0.03] border border-white/10">

                  <p className="text-gold-300 text-xs uppercase tracking-[0.2em] mb-5">
                    Project Summary
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                    {/* TYPE */}

                    <div>

                      <p className="text-white/40 text-xs">
                        Type
                      </p>

                      <p className="text-white mt-1">
                        {type}
                      </p>

                    </div>

                    {/* SELECTION */}

                    <div>

                      <p className="text-white/40 text-xs">
                        Selection
                      </p>

                      <p className="text-white mt-1">
                        {temperature ||
                          pixelOption ||
                          "—"}
                      </p>

                    </div>

                    {/* CONTROL */}

                    <div>

                      <p className="text-white/40 text-xs">
                        Control
                      </p>

                      <p className="text-white mt-1">
                        {control || "—"}
                      </p>

                    </div>

                    {/* AREA */}

                    <div>

                      <p className="text-white/40 text-xs">
                        Total Area
                      </p>

                      <p className="text-white mt-1">
                        {totalArea.toFixed(2)} Sq.Ft.
                      </p>

                    </div>

                  </div>

                  {/* PRICE */}

                  <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3">

                    <div>

                      <p className="text-white/40 text-sm">
                        Rate
                      </p>

                      <p className="text-white font-semibold mt-1">
                        {formatPrice(rate)} / Sq.Ft.
                      </p>

                    </div>

                    <div className="sm:text-right">

                      <p className="text-white/40 text-sm">
                        Estimated Product Price
                      </p>

                      <p className="text-3xl text-gold-300 font-luxury font-bold mt-1">
                        {formatPrice(
                          estimatedPrice
                        )}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            )}

          </div>

          {/* =================================================
              FOOTER
          ================================================= */}

          <div className="px-7 md:px-10 py-5 border-t border-white/10 flex justify-between gap-4">

            {/* BACK */}

            {step > 1 ? (

              <button
                type="button"
                onClick={previousStep}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white hover:border-white/50 transition"
              >
                <ArrowLeft size={16} />
                Back
              </button>

            ) : (

              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-full border border-white/20 text-white/60 hover:text-white transition"
              >
                Cancel
              </button>

            )}

            {/* NEXT / SUBMIT */}

            {step < 3 ? (

              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 px-7 py-3 rounded-full bg-gold-300 text-black font-semibold hover:bg-gold-200 transition"
              >
                Continue

                <ArrowRight size={16} />

              </button>

            ) : (

              <button
                type="button"
                onClick={handleSubmit}
                className="px-7 py-3 rounded-full bg-gold-300 text-black font-semibold hover:bg-gold-200 transition"
              >
                SUBMIT & GET QUOTATION →
              </button>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookNowModel;