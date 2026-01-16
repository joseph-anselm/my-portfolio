// import React from 'react';
// import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section id="home" className="pt-32 pb-20 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left Content */}
//         <div className="space-y-8 order-2 lg:order-1">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold animate-bounce shadow-sm">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
//             </span>
//             Available for new projects
//           </div>
          
//           <div className="space-y-4">
//             <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
//               Hey! I am <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
//                 Joseph Anselm
//               </span>
//             </h1>
//             <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-xl font-light">
//               My goal is to create and support high-quality tech products, apps and offer exceptional customer service. 
//               I am committed to providing you with the support you need, and I am always available to answer any questions or concerns.
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-4">
//             <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2 group">
//               My Portfolio
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
//               Reach Out !
//             </button>
//           </div>
//         </div>

//         {/* Right Image / Slider */}
//         <div className="relative order-1 lg:order-2 flex justify-center items-center">
//           {/* Background Decorative Circles */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
          
//           <div className="relative flex items-center justify-between w-full">
//             {/* Nav Arrows */}
//             <button className="absolute left-0 z-20 p-3 bg-white/80 backdrop-blur rounded-full shadow-lg text-gray-400 hover:text-blue-600 hover:scale-110 transition-all border border-gray-100 hidden sm:block">
//               <ChevronLeft size={24} />
//             </button>
            
//             <div className="relative mx-auto group">
//               {/* Main Profile Image Wrapper */}
//               <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
//                 <div className="absolute inset-0 bg-blue-100 animate-pulse"></div>
//                 <img 
//                   src="https://picsum.photos/seed/joseph_large/800/800" 
//                   alt="Joseph Anselm" 
//                   className="w-full h-full object-cover relative z-10"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent z-20"></div>
                
//                 {/* Visual Accent */}
//                 <div className="absolute bottom-10 right-1/2 translate-x-1/2 z-30 flex gap-1.5">
//                     <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
//                     <div className="w-2 h-2 rounded-full bg-white/50"></div>
//                     <div className="w-2 h-2 rounded-full bg-white/50"></div>
//                 </div>
//               </div>

//               {/* Floating Tech Badges */}
//               <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-30 animate-bounce hidden sm:block" style={{ animationDuration: '3s' }}>
//                 <span className="text-2xl">🚀</span>
//               </div>
//               <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-30 animate-bounce hidden sm:block" style={{ animationDuration: '4s' }}>
//                 <span className="text-2xl">💻</span>
//               </div>
//             </div>

//             <button className="absolute right-0 z-20 p-3 bg-white/80 backdrop-blur rounded-full shadow-lg text-gray-400 hover:text-blue-600 hover:scale-110 transition-all border border-gray-100 hidden sm:block">
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// "use client"

// import React, { useState } from 'react';
// import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// import Link from "next/link";


// const images = [
//   "images/Joe-pic2.jpg",
//   "images/jojo-pic1.jpg",
//   "images/jojo-pic3.jpg",
// ];

// const Hero = () => {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section id="home" className="pt-32 pb-20 px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
//         {/* Left Content (UNCHANGED) */}
//         <div className="space-y-8 order-2 lg:order-1">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold animate-bounce shadow-sm">
//             <span className="relative flex h-2 w-2">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
//             </span>
//             Available for new projects
//           </div>

//           <div className="space-y-4">
//             <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
//               Hey! I am <br />
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
//                 Joseph Anselm
//               </span>
//             </h1>
//             <p className="text-gray-500 text-lg lg:text-xl leading-relaxed max-w-xl font-light">
//               My goal is to create and support high-quality tech products, apps and offer exceptional customer service.
//             </p>
//           </div>

//             <div className="flex flex-wrap gap-4">
//                 {/* Portfolio Button */}
//                 <Link href="/projects">
//                     <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center gap-2 group">
//                     My Portfolio
//                     <ArrowRight
//                         size={18}
//                         className="group-hover:translate-x-1 transition-transform"
//                     />
//                     </button>
//                 </Link>

//                 {/* Contact Button */}
//                 <Link href="/contact">
//                     <button className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-100 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all">
//                     Reach Out !
//                     </button>
//                 </Link>
//                 </div>
//         </div>

//         {/* Right Image / Slider */}
//         <div className="relative order-1 lg:order-2 flex justify-center items-center">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10 animate-pulse"></div>

//           <div className="relative flex items-center justify-between w-full">

//             {/* Left Arrow (NOW WORKS) */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-0 z-20 p-3 bg-white/80 backdrop-blur rounded-full shadow-lg text-gray-400 hover:text-blue-600 hover:scale-110 transition-all border border-gray-100 hidden sm:block"
//             >
//               <ChevronLeft size={24} />
//             </button>

//             <div className="relative mx-auto group">
//               <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                
//                 {/* SLIDES */}
//                 {images.map((img, index) => (
//                   <img
//                     key={index}
//                     src={img}
//                     alt="Joseph Anselm"
//                     className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
//                       index === current ? "opacity-100 z-10" : "opacity-0"
//                     }`}
//                   />
//                 ))}

//                 <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent z-20"></div>

//                 {/* Visual Accent (UNCHANGED) */}
//                 <div className="absolute bottom-10 right-1/2 translate-x-1/2 z-30 flex gap-1.5">
//                   <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
//                   <div className="w-2 h-2 rounded-full bg-white/50"></div>
//                   <div className="w-2 h-2 rounded-full bg-white/50"></div>
//                 </div>
//               </div>

//               {/* Floating Badges (UNCHANGED) */}
//               <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-30 animate-bounce hidden sm:block">
//                 <span className="text-2xl">🚀</span>
//               </div>
//               <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-30 animate-bounce hidden sm:block">
//                 <span className="text-2xl">💻</span>
//               </div>
//             </div>

//             {/* Right Arrow (NOW WORKS) */}
//             <button
//               onClick={nextSlide}
//               className="absolute right-0 z-20 p-3 bg-white/80 backdrop-blur rounded-full shadow-lg text-gray-400 hover:text-blue-600 hover:scale-110 transition-all border border-gray-100 hidden sm:block"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const images = [
  "/images/Joe-pic2.jpg",
  "/images/jojo-pic1.jpg",
  "/images/jojo-pic3.jpg",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  /* ✅ AUTO SLIDE FIX */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000); // ⏱️ slide every 4s

    return () => clearInterval(interval); // 🧹 cleanup
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT (UNCHANGED) */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold animate-bounce shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Available for new projects
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
            Hey! I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Joseph Anselm
            </span>
          </h1>

          <p className="text-gray-500 text-lg lg:text-xl max-w-xl font-light">
            My goal is to bridge product development and user success, ensuring every technical solution is built with serviceability and an exceptional customer journey in mind.
          </p>

          <div className="flex gap-4">
            <Link href="/projects">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-xl flex items-center gap-2">
                My Portfolio <ArrowRight size={18} />
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-8 py-4 bg-white border-2 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600">
                Reach Out !
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="relative order-1 lg:order-2 flex justify-center">
          <div className="relative flex items-center w-full">

            {/* LEFT ARROW */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-20 p-3 bg-white/80 rounded-full shadow hidden sm:block"
            >
              <ChevronLeft size={24} />
            </button>

            {/* SLIDER */}
            <div className="relative mx-auto">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl">

                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="Joseph Anselm"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === current ? "opacity-100 z-10" : "opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent z-20"></div>
              </div>
            </div>

            {/* RIGHT ARROW */}
            <button
              onClick={nextSlide}
              className="absolute right-0 z-20 p-3 bg-white/80 rounded-full shadow hidden sm:block"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
