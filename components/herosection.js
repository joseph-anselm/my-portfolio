// import Image from "next/image";
// import { useEffect } from "react";
// import AOS from "aos";

// const HeroSection = ({ title, image }) => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       once: true,
//       easing: "ease-in-out-back",
//       anchorPlacement: "top-bottom",
//       offset: 100,
//     });
//   }, []);

//   return (
//     <div className="bg-blue-500" data-aos="fade-right" data-aos-duration="1000">
//       <div className="max-w-screen-lg mx-auto flex items-center">
//         <div className="w-1/2">
//           <Image
//             src={image}
//             alt="My Image"
//             width={400}
//             height={400}
//           />
//         </div>
//         <div className="w-1/2">
//           <h1 className="text-white lg:text-5xl md:text-4xl sm:text-2xl font-bold mb-5 pr-3 ml-3 ">
//             {title}
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;





// import React, { useEffect } from "react";
// import Image from "next/image";
// import AOS from "aos";
// import { ChevronRight, Home, Layers, Sparkles } from "lucide-react";

// /**
//  * Modern Subheader for Internal Pages
//  * @param {string} title - The main page title
//  * @param {string} description - Optional sub-text for context
//  * @param {string} image - Image URL for the right-side visual
//  * @param {string} category - Small label above the title
//  */
// const HeroSection = ({ 
//   title = "Page Title", 

//   image = "https://picsum.photos/seed/tech/800/800",
  
// }) => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-out",
//     });
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#3B81F6] pt-36 pb-20 border-b border-slate-800/50">
//       {/* 1. Enhanced Background Layering (No bottom white fade) */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Deep Blue Glow */}
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
//         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] -ml-24 -mb-24"></div>
        
//         {/* Subtle Static Grid - High Transparency */}
//         <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:30px_30px]"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
//           {/* 2. Text Content: High Legibility focus */}
//           <div className="w-full lg:w-[60%] space-y-8">
//             <div className="space-y-6" data-aos="fade-right">
//               {/* Breadcrumb / Label */}
//               <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-inner shadow-white/5">
//                 <Home size={14} className="text-blue-500" />
//                 <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Home</span>
//                 <ChevronRight size={12} className="text-slate-700" />

//               </div>

//               {/* Title with shadow for better legibility */}
//               <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-sora tracking-tight leading-[1.1] text-white drop-shadow-sm">
//                 {title}
//                 <span className="text-blue-600">.</span>
//               </h1>

//               {/* Decorative Accent */}
//               <div className="flex items-center gap-4">
//                 <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
//                 <Sparkles size={16} className="text-blue-500 animate-pulse" />
//               </div>
//             </div>

      

        
//           </div>

//           {/* 3. Image Section: Contained and Framed */}
//           <div 
//             className="w-full lg:w-[40%]"
//             data-aos="zoom-in-left"
//             data-aos-delay="200"
//           >
//             <div className="relative group max-w-sm mx-auto lg:max-w-none">
//               {/* Visual depth background */}
//               <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2.5rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              
//               {/* Main Image Container */}
//               <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-slate-800 bg-slate-900/50 shadow-2xl backdrop-blur-sm">
//                 <div className="absolute inset-0 bg-blue-900/10 animate-pulse"></div>
//                 <Image
//                   src={image}
//                   alt={title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="transition-transform duration-700 group-hover:scale-105"
//                   priority
//                 />
                
//                 {/* Internal gradient to keep edges clean */}
//                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none"></div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/40 via-transparent to-transparent"></div>
//               </div>

//               {/* Floating Badge Accent */}
//               <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-2xl shadow-lg shadow-blue-500/30 flex items-center justify-center text-white border-4 border-[#0a0f1d] rotate-12 group-hover:rotate-0 transition-transform duration-500">
//                 <Layers size={24} />
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// import React, { useEffect } from "react";
// import Image from "next/image";
// import AOS from "aos";
// import { ChevronRight, Home, Sparkles } from "lucide-react";

// /**
//  * Minimal & Professional Subheader for Internal Pages
//  * Focuses on dynamic content with reduced height and sharp aesthetics.
//  * @param {string} title - The main page title
//  * @param {string} image - Image URL for the visual accent
//  */
// const HeroSection = ({ 
//   title = "Project Details", 
//   image = "https://picsum.photos/seed/tech/800/800"
// }) => {
//   useEffect(() => {
//     AOS.init({
//       duration: 600,
//       once: true,
//       easing: "ease-out",
//     });
//   }, []);

//   return (
//     <section className="relative overflow-hidden bg-[#0f172a] pt-28 pb-16 border-b border-white/5">
//       {/* Background Polish */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
//         <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
//           {/* Content Side */}
//           <div className="flex-1 space-y-6" data-aos="fade-up">
//             {/* Minimal Breadcrumb */}
//             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
//               <Home size={12} className="text-blue-500" />
//               <span>Home</span>
//               <ChevronRight size={10} className="text-slate-700" />
//               <span className="text-blue-400">Section</span>
//             </div>

//             <div className="space-y-4">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sora tracking-tight leading-tight text-white">
//                 {title}<span className="text-blue-600">.</span>
//               </h1>
//               <div className="flex items-center gap-3">
//                 <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
//                 <Sparkles size={14} className="text-blue-500/50" />
//               </div>
//             </div>
//           </div>

//           {/* Visual Side - Compact & Sharp */}
//           <div className="w-full md:w-auto" data-aos="fade-left" data-aos-delay="100">
//             <div className="relative group">
//               {/* Outer Glow */}
//               <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
//               {/* Image Frame */}
//               <div className="relative w-full md:w-48 lg:w-64 aspect-square rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
//                 <Image
//                   src={image}
//                   alt={title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="transition-transform duration-500 group-hover:scale-110"
//                   priority
//                 />
//                 <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none rounded-2xl"></div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useEffect, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import AOS from "aos";
import { ChevronRight, Home, Sparkles } from "lucide-react";

/**
 * Dynamic Minimal Subheader
 * - Auto-detects page title from route
 * - Can be overridden via props
 */
const HeroSection = ({
  title,
  image = "https://picsum.photos/seed/tech/800/800",
}) => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out",
    });
  }, []);

  // 🔹 Auto-generate title from route if not provided
  const resolvedTitle = useMemo(() => {
    if (title) return title;

    if (!router.pathname || router.pathname === "/") {
      return "Home";
    }

    const slug = router.pathname.split("/").pop();

    return slug
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase()) || "Page";
  }, [title, router.pathname]);

  return (
    <section className="relative overflow-hidden bg-[#0f172a] pt-28 pb-16 border-b border-white/5">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text */}
          <div className="flex-1 space-y-6" data-aos="fade-up">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              <Home size={12} className="text-blue-500" />
              <span>Home</span>
              <ChevronRight size={10} className="text-slate-700" />
              <span className="text-blue-400">{resolvedTitle}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-sora tracking-tight leading-tight text-white">
                {resolvedTitle}
                <span className="text-blue-600">.</span>
              </h1>

              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
                <Sparkles size={14} className="text-blue-500/50" />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-auto" data-aos="fade-left" data-aos-delay="100">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative w-full md:w-48 lg:w-64 aspect-square rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
                <Image
                  src={image}
                  alt={resolvedTitle}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
