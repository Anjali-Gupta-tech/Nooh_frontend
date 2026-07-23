import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
const products = [
  {
    id: 1,
    name: "3D Printed Stretch Ceiling",
    image:
      "https://images.unsplash.com/photo-1633681117690-262b94a01378?w=1200",

    gallery: [
      "https://images.unsplash.com/photo-1633681117690-262b94a01378?w=1200",
      "https://images.unsplash.com/photo-1568060965761-76ea3db880b5?q=80&w=1200",
      "https://images.unsplash.com/photo-1774769924168-ecc7d0a2a809?q=80&w=1200",
      "https://i.pinimg.com/736x/1c/c5/8e/1cc58efc00911b61cf5a6278613b8a33.jpg",
      "https://i.pinimg.com/736x/46/8f/2d/468f2d5cb87abff33cea3d09401e6952.jpg",
      "https://i.pinimg.com/736x/a2/00/88/a20088ed6347d9d16965c19d468c141b.jpg",
    ],

   types: [
  {
    id: 1,
    name: "Single LED (1.3K / 4K / 5K/6k/10k)",
    price: 450,
  },
  {
    id: 2,
    name: "Tunable & Dimmable",
    price: 550,
  },
  {
    id: 3,
    name: "RGBW Smart",
    price: 750,
  },
],

    material: "Premium PVC Stretch Membrane",

    thickness: "0.18 mm",

    finish: "Matte / Glossy",

    warranty: "21 Years",

    ledWarranty: "5 Years",

    madeIn: "France",

    availability: "In Stock",

    features: [
      "Waterproof",
      "Fire Resistant",
      "Dust Resistant",
      "UV Printed",
      "Easy Maintenance",
      "Seamless Finish",
    ],
  },
];



const ThreeDStretchCeiling = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

const [selectedImage, setSelectedImage] = useState("");

const [currentIndex, setCurrentIndex] = useState(0);

const [width, setWidth] = useState("");

const [length, setLength] = useState("");
const [selectedType, setSelectedType] = useState(null);
const [step, setStep] = useState(1);

const [formData, setFormData] = useState({
  name: "",
  phone: "",
  email: "",
  city: "",
  requirement: "",
});
 const openProduct = (product, imageIndex = 0) => {
  setSelectedProduct(product);

  setSelectedType(product.types[0]); // Default Single LED

  setCurrentIndex(imageIndex);
  setSelectedImage(product.gallery[imageIndex]);

  setWidth("");
  setLength("");
};

 const nextImage = () => {
  if (!selectedProduct) return;

  const next =
    (currentIndex + 1) %
    selectedProduct.gallery.length;

  setCurrentIndex(next);

  setSelectedImage(selectedProduct.gallery[next]);
};

  const prevImage = () => {
  if (!selectedProduct) return;

  const prev =
    currentIndex === 0
      ? selectedProduct.gallery.length - 1
      : currentIndex - 1;

  setCurrentIndex(prev);

  setSelectedImage(selectedProduct.gallery[prev]);
};

  return (
    <>
      <Helmet>
        <title>3D Printed Stretch Ceiling | NOOH Living</title>
      </Helmet>

      <div className="min-h-screen bg-luxury-black pt-36">

        {/* Hero */}
      

       {/* Gallery */}
<section className="pb-24">
  <div className="max-w-7xl mx-auto px-5 lg:px-8">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14"
    >
      <h2 className="text-4xl md:text-5xl font-luxury font-bold text-white mb-4">
        3D Printed Stretch Ceiling
      </h2>

      <p className="text-white/70 max-w-2xl mx-auto">
       Product Gallery of our premium 3D Printed Stretch Ceiling. Click on any image to view details, calculate area, and get an estimated price.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

      {products[0].gallery.map((image, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="group overflow-hidden rounded-2xl border border-white/10 bg-[#171717] shadow-lg hover:shadow-2xl hover:border-luxury-gold/40 transition-all duration-500 cursor-pointer"
          onClick={() => openProduct(products[0], index)}
        >

          <div className="overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

        </motion.div>
      ))}

    </div>

  </div>
</section>

      </div>
    {/* Product Modal */}

{selectedProduct && (
  <div
    className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
   onClick={() => {
  setSelectedProduct(null);
  setSelectedImage("");
  setStep(1);

  setFormData({
    name: "",
    phone: "",
    email: "",
    city: "",
    requirement: "",
  });
}}
  >
    <motion.div
      initial={{ opacity: 0, scale: .9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .35 }}
      onClick={(e) => e.stopPropagation()}
      className="bg-[#111] w-full max-w-7xl rounded-3xl overflow-hidden border border-white/10"
    >

      <div className="grid lg:grid-cols-2">

        {/* LEFT */}

        <div className="p-8">

          <img
            src={selectedImage}
            alt=""
            className="w-full h-[500px] object-cover rounded-2xl"
          />

          <div className="grid grid-cols-6 gap-3 mt-5">

            {selectedProduct.gallery.map((img, i) => (

              <img
                key={i}
                src={img}
                alt=""
                onClick={()=>{
                  setCurrentIndex(i);
                  setSelectedImage(img);
                }}
                className={`h-20 w-full rounded-xl cursor-pointer object-cover border-2 transition

                ${
                  selectedImage===img
                  ? "border-yellow-400"
                  : "border-transparent"
                }

                `}
              />

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="p-8 overflow-y-auto max-h-[90vh]">

          <div className="flex justify-between items-start">

            <div>

              <h2 className="text-4xl font-bold text-white">

                {selectedProduct.name}

              </h2>

              <p className="text-yellow-400 mt-3 text-2xl font-semibold">

              ₹ {selectedType ? selectedType.price : 0} / Sq.Ft

              </p>

            </div>

            <button
              onClick={()=>{
                setSelectedProduct(null);
                setSelectedImage("");
              }}
              className="text-white text-4xl"
            >
              ×
            </button>

          </div>

          <div className="mt-8 flex gap-3 flex-wrap">

            <span className="px-4 py-2 rounded-full bg-green-600 text-white">
              {selectedProduct.availability}
            </span>

            <span className="px-4 py-2 rounded-full bg-yellow-500 text-black">
              {selectedProduct.warranty} Warranty
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-600 text-white">
              LED {selectedProduct.ledWarranty}
            </span>

          </div>
          {/* DropDown */}
          <div className="mt-8">

  <label className="block text-white mb-3 text-lg font-semibold">
    Lighting Type
  </label>

  <select
    value={selectedType?.id || ""}
    onChange={(e) => {
      const type = selectedProduct.types.find(
        (item) => item.id === Number(e.target.value)
      );
      setSelectedType(type);
    }}
    className="w-full bg-[#1b1b1b] border border-white/10 rounded-xl p-4 text-white outline-none focus:border-yellow-500"
  >
    {selectedProduct.types.map((type) => (
      <option key={type.id} value={type.id}>
        {type.name} — ₹{type.price}/Sq.Ft
      </option>
    ))}
  </select>

</div>

          {/* Calculator */}
{step === 1 && (
  <>
          <div className="mt-10">

            <h3 className="text-2xl text-white font-bold mb-5">

              Area Calculator

            </h3>

            <div className="grid grid-cols-2 gap-5">

              <div>

                <label className="text-gray-400 block mb-2">

                  Width (ft)

                </label>

                <input
                  value={width}
                  onChange={(e)=>setWidth(e.target.value)}
                  className="w-full rounded-xl bg-[#1d1d1d] border border-white/10 p-4 text-white"
                />

              </div>

              <div>

                <label className="text-gray-400 block mb-2">

                  Length (ft)

                </label>

                <input
                  value={length}
                  onChange={(e)=>setLength(e.target.value)}
                  className="w-full rounded-xl bg-[#1d1d1d] border border-white/10 p-4 text-white"
                />

              </div>

            </div>

            <div className="mt-6 rounded-2xl bg-[#1b1b1b] p-5">

              <div className="flex justify-between text-white text-lg">

                <span>Total Area</span>

                <span>

                {(Number(width) || 0) * (Number(length) || 0)} Sq.Ft

                </span>

              </div>

              <div className="flex justify-between text-yellow-400 text-2xl font-bold mt-4">

                <span>Estimated Price</span>
                 
                <span>

                  ₹

                  {" "}

                {((Number(width) || 0) *(Number(length) || 0) *(selectedType?.price || 0))}

                </span>

              </div>

            </div>

          </div>

          {/* Product Specifications */}

<div className="mt-10">

  <h3 className="text-2xl font-bold text-white mb-5">
    Product Specifications
  </h3>

  <div className="grid grid-cols-2 gap-4">

    <div className="rounded-xl bg-[#1a1a1a] p-4 border border-white/10">
      <p className="text-gray-400 text-sm">Material</p>
      <h4 className="text-white font-semibold mt-1">
        {selectedProduct.material}
      </h4>
    </div>

    <div className="rounded-xl bg-[#1a1a1a] p-4 border border-white/10">
      <p className="text-gray-400 text-sm">Thickness</p>
      <h4 className="text-white font-semibold mt-1">
        {selectedProduct.thickness}
      </h4>
    </div>

    <div className="rounded-xl bg-[#1a1a1a] p-4 border border-white/10">
      <p className="text-gray-400 text-sm">Surface Finish</p>
      <h4 className="text-white font-semibold mt-1">
        {selectedProduct.finish}
      </h4>
    </div>

    <div className="rounded-xl bg-[#1a1a1a] p-4 border border-white/10">
      <p className="text-gray-400 text-sm">Made In</p>
      <h4 className="text-white font-semibold mt-1">
        {selectedProduct.madeIn}
      </h4>
    </div>

  </div>

</div>

{/* Features */}

<div className="mt-10">

  <h3 className="text-2xl font-bold text-white mb-5">
    Premium Features
  </h3>

  <div className="flex flex-wrap gap-3">

    {selectedProduct.features.map((feature, index) => (

      <span
        key={index}
        className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold shadow-lg"
      >
        ✓ {feature}
      </span>

    ))}

  </div>

</div>

{/* Action Buttons */}

<div className="grid grid-cols-2 gap-4 mt-10">

  <button
  onClick={() => setStep(2)}
  className="rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 transition"
>
  📄 Get Exact Quote
</button>

  <button
    className="rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold py-4 transition"
  >
    💬 WhatsApp
  </button>

  <button
    className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 transition"
  >
    📞 Call Now
  </button>

  <button
    className="rounded-xl bg-white hover:bg-gray-200 text-black font-bold py-4 transition"
  >
    ⬇ Download Catalogue
  </button>

</div>

</>
)}
{/* form section popup */}
{step === 2 && (

<div className="mt-10">

<h3 className="text-3xl font-bold text-white mb-6">
Get Exact Quote
</h3>

<p className="text-gray-400 mb-8">
Please share your details and our consultant will contact you shortly.
</p>

<div className="space-y-5">

<input
type="text"
placeholder="Full Name"
value={formData.name}
onChange={(e)=>setFormData({...formData,name:e.target.value})}
className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-4 text-white"
/>

<input
type="tel"
placeholder="Phone Number"
value={formData.phone}
onChange={(e)=>setFormData({...formData,phone:e.target.value})}
className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-4 text-white"
/>

<input
type="email"
placeholder="Email Address"
value={formData.email}
onChange={(e)=>setFormData({...formData,email:e.target.value})}
className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-4 text-white"
/>

<input
type="text"
placeholder="City"
value={formData.city}
onChange={(e)=>setFormData({...formData,city:e.target.value})}
className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-4 text-white"
/>

<textarea
rows="4"
placeholder="Project Requirement"
value={formData.requirement}
onChange={(e)=>setFormData({...formData,requirement:e.target.value})}
className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl p-4 text-white resize-none"
/>

</div>

<div className="mt-8 grid grid-cols-2 gap-4">

<button

onClick={()=>setStep(1)}

className="rounded-xl border border-white/20 py-4 text-white"

>

← Back

</button>

<button

onClick={()=>setStep(3)}

className="rounded-xl bg-yellow-500 text-black font-bold py-4"

>

Submit Request

</button>

</div>

</div>

)}

{/* sumbmit and confirmation ka quote */}
{step === 3 && (

<div className="mt-10 text-center">

<div className="w-24 h-24 mx-auto rounded-full bg-green-600 flex items-center justify-center text-5xl">

✅

</div>

<h2 className="text-4xl font-bold text-white mt-6">

Thank You!

</h2>

<p className="text-gray-400 mt-4 leading-8">

Your quotation request has been received successfully.

<br />

Our Product Consultant will contact you shortly.

</p>

<div className="mt-8 rounded-2xl bg-[#1a1a1a] border border-white/10 p-5">

<p className="text-gray-400">

Reference ID

</p>

<h3 className="text-yellow-400 text-2xl font-bold mt-2">

NOOH-240722-001

</h3>

</div>

<div className="grid grid-cols-2 gap-4 mt-10">

<a
href="https://wa.me/919718921229"
target="_blank"
rel="noreferrer"
className="rounded-xl bg-green-600 hover:bg-green-500 py-4 text-white font-bold text-center transition"
>

💬 WhatsApp

</a>

<a
href="tel:+919999999999"
className="rounded-xl bg-blue-600 hover:bg-blue-500 py-4 text-white font-bold text-center transition"
>

📞 Call Now

</a>

<button

onClick={()=>{

setStep(1);

setWidth("");

setLength("");

setFormData({

name:"",

phone:"",

email:"",

city:"",

requirement:""

});

}}

className="col-span-2 rounded-xl bg-yellow-500 hover:bg-yellow-400 py-4 font-bold text-black transition"

>

Continue Browsing

</button>

</div>

</div>

)}

        </div>

      </div>

    </motion.div>

  </div>
)}

    </>
  );
};

export default ThreeDStretchCeiling;