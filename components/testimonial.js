// import Link from 'next/link';
// import { useEffect, useState } from "react";
// import client from '@/client';
// import Image from 'next/image';
// import TestimonialForm from './testimonialForm';


// export default function Testimonials({limit})  {
 
      
      
//     const [showModal, setShowModal] = useState(false);    
//     const closeModal = () => {setShowModal(false);};
    
    
//   // Render testimonials
//   const [testimonials, setTestimonials] = useState([]);
  
    
//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       const data = await client.fetch(
//         `*[_type == "testimonial"]| order(_createdAt desc){
//           name,
//           email,          
//           message,                   
//           timestamp,
//           rating,
//           image{
//             asset->{
//               _id,
//               url,
//             },
//             alt
//           },
//         }`
//       );
//       setTestimonials(data);
//       const limitedTestimonials = limit ? data.slice(0, limit) : data;
//       setTestimonials(limitedTestimonials);        
//       };  
//       fetchTestimonials();
//     }, [limit]);
//   return (
//     <section className="home-testimonial">
//       <div className="bg-blue-200 w-full px-4 py-11">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 pt-8">
//           Testimonials
//         </h1>
//         <div className="text-center mt-4">
//             <button
//             className="text-blue-600 underline font-bold"
//             onClick={() => setShowModal(true)}
//             >
//             Leave a testimonial&rarr;
//             </button>
//         </div>
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//           {testimonials.map((testimonial) => (
//             <div
//               key={testimonial.name}
//               className="rounded-lg lg:p-12 p-8 shadow-lg flex flex-col lg:flex-row items-center mb-8 md:mb-0"
//             >
//               <div className="flex-shrink-0">
//                 <Image
//                   src={testimonial.image?.asset.url}
//                   alt={testimonial.name}
//                   className="rounded-full w-12 h-12 lg:w-16 lg:h-16 lg:mr-4 lg:self-center"
//                   width={50}
//                   height={50}
//                 />
//               </div>
//               <div className="mt-4 lg:mt-0 text-center lg:text-left">
//                 <p className="text-gray-800 text-lg font-bold mb-2">
//                   {testimonial.name}
//                 </p>
//                 <div className="flex items-center mb-2">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <svg
//                       key={i}
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="#FFD700"
//                       className="w-4 h-4 mr-1"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 3l2.574 6.816 6.659.579-5.175 4.358 1.825 6.601L10 15.875l-6.884 4.419 1.825-6.601L1.767 10.395l6.659-.579L10 3z"
//                       />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-gray-600 text-sm">{testimonial.message}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="custom-shape-divider-top-1680109549">
//         <svg
//           data-name="Layer 1"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 120"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
//             className="shape-fill"
//           ></path>
//         </svg>
//     </div>
      

//        {/* The modal */}
//        {showModal && (
//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//             <div
//               className="fixed inset-0 transition-opacity"
//               aria-hidden="true"
//               onClick={closeModal}
//             >
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>

//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

//             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
//                     {/* Your icon or image here */}
//                   </div>
//                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                     <h3 className="text-lg leading-6 font-medium text-gray-900">Leave a testimonial</h3>
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-500">Fill out the form below to leave a testimonial.</p>
//                     </div>
//                     <div className="mt-4">
//                       <TestimonialForm onClose={closeModal} />
//                     </div>
//                   </div>
//                 </div>
                
//               </div>
              
//             </div>
//           </div>
//         </div>
//       )}

//     </section>
//   );
// };



import React, { useEffect, useState } from "react";
import client from '@/client';
import Image from 'next/image';
import TestimonialForm from './testimonialForm';
import { 
  Star, 
  Quote, 
  PlusCircle, 
  X, 
  MessageSquareQuote,
  CheckCircle2
} from "lucide-react";

/**
 * Modernized Testimonials Component
 * Focuses on high-end visual hierarchy, typography, and clean interactions.
 */
export default function Testimonials({ limit }) {
  const [showModal, setShowModal] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "testimonial"] | order(_createdAt desc){
            name,
            email,          
            message,                   
            timestamp,
            rating,
            image{
              asset->{
                _id,
                url,
              },
              alt
            },
          }`
        );
        const limitedTestimonials = limit ? data.slice(0, limit) : data;
        setTestimonials(limitedTestimonials);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, [limit]);

  return (
    <section className="relative overflow-hidden bg-white mb-6">
      {/* Wave Transition Top */}
      <div className="absolute top-0 left-0 w-full rotate-180 leading-[0] -z-10 opacity-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-32 fill-blue-600">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest border border-blue-100">
              <MessageSquareQuote size={14} />
              Voices of Trust
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-sora leading-tight">
              What My <span className="text-blue-600">Clients</span> Are Saying
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              Real feedback from partners and clients I&apos;ve worked with across the globe.
            </p>
          </div>
          
          <button
            onClick={() => setShowModal(true)}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 active:scale-95"
          >
            <PlusCircle size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            Share Your Experience
          </button>
        </div>

        {/* Testimonials Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.name + idx}
                className="group relative p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500"
              >
                {/* Quote Icon Accent */}
                <div className="absolute top-8 right-8 text-blue-50 group-hover:text-blue-100 transition-colors pointer-events-none">
                  <Quote size={64} strokeWidth={3} />
                </div>

                <div className="relative z-10 space-y-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < testimonial.rating ? "#3b82f6" : "none"}
                        className={i < testimonial.rating ? "text-blue-600" : "text-slate-200"}
                      />
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-slate-600 leading-relaxed font-light italic">
                    &quot;{testimonial.message}&quot;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-lg ring-1 ring-slate-100">
                      <Image
                        src={testimonial.image?.asset.url || `https://ui-avatars.com/api/?name=${testimonial.name}&background=eff6ff&color=2563eb`}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 font-sora text-base leading-none mb-1 group-hover:text-blue-600 transition-colors">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <CheckCircle2 size={12} className="text-blue-500" />
                        Verified Client
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal: Leave a Testimonial */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto overflow-x-hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300"
            onClick={closeModal}
          ></div>

          {/* Modal Container */}
          <div className="relative w-full max-w-xl bg-white rounded-[3rem] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-300">
            {/* Modal Header Decor */}
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
            
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-900 transition-all z-20"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-10 space-y-2">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-sora">Share Your Feedback</h3>
                <p className="text-slate-500 font-light">Your insights help me grow and serve others better.</p>
              </div>

              <div className="relative">
                <TestimonialForm onClose={closeModal} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern Wave Divider Bottom */}
     
    </section>
  );
}
