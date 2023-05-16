import Link from 'next/link';
import { useEffect, useState } from "react";
import client from '@/client';
import Image from 'next/image';
import TestimonialForm from './testimonialForm';


export default function Testimonials({limit})  {
 
      
      
    const [showModal, setShowModal] = useState(false);    
    const closeModal = () => {setShowModal(false);};
    
    
  // Render testimonials
  const [testimonials, setTestimonials] = useState([]);
  
    
  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await client.fetch(
        `*[_type == "testimonial"]| order(_createdAt desc){
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
      setTestimonials(data);
      const limitedTestimonials = limit ? data.slice(0, limit) : data;
      setTestimonials(limitedTestimonials);        
      };  
      fetchTestimonials();
    }, [limit]);
  return (
    <section className="home-testimonial">
      <div className="bg-blue-200 w-full px-4 py-11">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 pt-8">
          Testimonials
        </h1>
        <div className="text-center mt-8">
            <button
            className="text-blue-600 underline"
            onClick={() => setShowModal(true)}
            >
            Leave a testimonial
            </button>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-lg lg:p-24 p-16 shadow-lg flex flex-col lg:flex-row items-center mb-8 md:mb-0"
            >
              <div className="flex-shrink-0">
                <Image
                  src={testimonial.image?.asset.url}
                  alt={testimonial.name}
                  className="rounded-full w-12 h-12 lg:w-16 lg:h-16 lg:mr-4 lg:self-center"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mt-4 lg:mt-0 text-center lg:text-left">
                <p className="text-gray-800 text-lg font-bold mb-2">
                  {testimonial.name}
                </p>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#FFD700"
                      className="w-4 h-4 mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3l2.574 6.816 6.659.579-5.175 4.358 1.825 6.601L10 15.875l-6.884 4.419 1.825-6.601L1.767 10.395l6.659-.579L10 3z"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{testimonial.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="custom-shape-divider-top-1680109549">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
    </div>
      

       {/* The modal */}
       {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={closeModal}
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    {/* Your icon or image here */}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Leave a testimonial</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">Fill out the form below to leave a testimonial.</p>
                    </div>
                    <div className="mt-4">
                      <TestimonialForm onClose={closeModal} />
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      )}

    </section>
  );
};