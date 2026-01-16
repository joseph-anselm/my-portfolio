// import Head from "next/head";
// import Image from 'next/legacy/image';
// import { Inter } from "@next/font/google";
// import Link from "next/link";
// import { HiOutlineExternalLink } from "react-icons/hi";
// import Carousel from "@/components/carousel";
// import LazyLoad from "react-lazy-load";
// import Testimonials from "@/components/testimonial";
// import { useEffect, useState } from "react";
// import client from "@/client";
// import Share from "@/components/share";
// import Hero from "@/components/Hero.js";
// import WaveDivider from "@/components/WaveDivider.js";
// import About from "@/components/AboutMe";



// export default function Home() {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [projects, setProjectSchema] = useState([]);

//   useEffect(() => {
//     const fetchBlogPosts = async () => {
//       const data = await client.fetch(
//         `*[_type == "blogPost"]| order(_createdAt desc) [0..2]{
//           _id,
//           title,          
//           slug,                   
//           body,
//           excerpt,
//           "authorName": author->name,
//            featuredImage{
//           asset->{
//             _id,
//             url,
//           },
//           alt
//         },
//         }`
//       );
//       setBlogPosts(data);
//     };
//     const fetchProjects = async () => {
//       const projectData = await client.fetch(
//         `*[_type == "project"]| order(_createdAt desc) [0..3]{
//           _id,
//           title,
//           slug,
//           image{
//           asset->{
//             _id,
//             url,
//           },
//           alt
//         },
//           shortDescription,
//           longDescription,
//           "imageUrl": image.asset->url,
//           url
//         }`
//       );
//       setProjectSchema(projectData);
//     };
//     fetchBlogPosts();
//     fetchProjects();
//   }, []);


//   return (
//     <>
//       <section className="">
//         <Hero />
//         <WaveDivider />
//         <About />
//       </section>

     

//       {/* *************************************************************************** */}
//       <section>
//         <div>
//           <div className="inline-flex items-center justify-center w-full mt-12">
//             <hr className="w-44 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700 mt-12"></hr>
//             <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
//               <svg
//                 aria-hidden="true"
//                 class="w-5 h-5 text-gray-700 dark:text-gray-300"
//                 viewBox="0 0 24 27"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </div>
//           </div>
//           <h1 className="text-4xl font-bold text-center">Core Expertise</h1>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-blue-100 transition duration-300">
//               <div className="relative h-48 w-full">
//                 <Image
//                   src="/Joseph-Anselm-2.png"
//                   alt="Web Development"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-lg font-semibold mb-2">Web Development</h2>
//                 <p className="text-gray-600"> Crafting custom web apps and cross-platform mobile apps, I leverage modern web technologies to drive your online success. With seamless user experiences and enhanced functionality, my solutions empower your business to thrive in the digital landscape. Reach wider audiences and achieve growth with innovative, tailored applications that exceed expectations.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-blue-100 transition duration-300">
//               <div className="relative h-48 w-full">
//                 <Image
//                   src="/images/Joseph-Anselm-5.png"
//                   alt="Web Design"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-lg font-semibold mb-2">Web Design</h2>
//                 <p className="text-gray-600">
//                   Elevate your online presence with captivating website designs and brand setup that engages your audience and drive conversions. I blend aesthetic appeal with user-centric functionality to create stunning, intuitive websites. Maximize your brand&apos;s impact and leave a lasting impression with a website that captures attention and delivers results.
//                 </p>
//               </div>
//             </div>

//             <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-blue-100 transition duration-300">
//               <div className="relative h-48 w-full">
//                 <Image
//                   src="/images/Joseph-Anselm-9.png"
//                   alt="IT Tech Support"
//                   layout="fill"
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <h2 className="text-lg font-semibold mb-2">DevOps / Tech Support</h2>
//                 <p className="text-gray-600">
//                   Empower your business with streamlined operations through my comprehensive IT support services. From prompt issue resolution to seamless workflows, I ensure optimal performance and reliability. Leverage my expertise in DevOps and cloud computing to enhance productivity and efficiency. Experience a smooth and secure IT infrastructure that drives your business forward.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//       <section>
//         <div>
//           <div className="inline-flex items-center justify-center w-full">
//             <hr className="w-40 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700 mt-12"></hr>
//             <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
//               <svg
//                 aria-hidden="true"
//                 class="w-5 h-5 text-gray-700 dark:text-gray-300"
//                 viewBox="0 0 24 27"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
//                   fill="currentColor"
//                 />
//               </svg>
//             </div>
//           </div>
//           <h1 className="text-4xl font-bold text-center">Portfolio</h1>
//         </div>

//         <div className="max-w-7xl mx-auto container mt-12 px-4 pb-16 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {projects.map((project) => (
//               <div key={project._id} className="group relative">
//                 <Link href={`/projects/${project.slug.current}`} rel="noopener noreferrer">
//                   <div className="rounded-lg overflow-hidden h-64 md:h-80">
//                     <Image
//                       src={project.image?.asset.url}
//                       alt={project.title}
//                       layout="fill"
//                       className="transition-opacity duration-300 h-full w-full object-cover"
//                     />
//                   </div>
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
//                     <div className="bg-white bg-opacity-75 py-2 px-4 rounded-lg max-w-full w-full">
//                       <h2 className="text-lg font-semibold mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
//                         {project.title}
//                       </h2>
//                       <p className="text-gray-600 hidden md:block ">
//                         {project.shortDescription}
//                       </p>
//                       <HiOutlineExternalLink className="text-gray-500 text-xl ml-2" />
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>


//         <div className="mb-5 max-w-7xl mx-auto text-right">
//           <Link
//             href="/projects"
//             className="text-lg font-semibold text-blue-700 hover:text-gray-900"
//           >
//             View More Projects &rarr;
//           </Link>
//         </div>
//       </section>

//       <section className="home-testimonial">
//         <Testimonials limit={3} />
//         <div className="mb-5 max-w-7xl mx-auto text-right">
//           <Link
//             href="/testimonials"
//             className="text-lg font-semibold text-blue-700 hover:text-gray-900"
//           >
//             More Testimonials &rarr;
//           </Link>
//         </div>


//       </section>

    

//       <section className="featured-post">
//         <div className="bg-white w-full px-4 py-8">
//           <Link href="/blog">
//             <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//               Featured Posts
//             </h1>
//           </Link>
//           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {blogPosts.map((post) => (
//               <div
//                 key={post._id}
//                 className="bg-gray-100 hover:bg-blue-100 rounded-lg p-4 shadow-lg flex flex-col items-center"
//               >
//                 <div
//                   className="w-full h-80 bg-cover bg-center rounded-lg mb-4"
//                   style={{
//                     backgroundImage: `url(${post.featuredImage?.asset.url})`,
//                   }}
//                 ></div>
//                 <div className="flex flex-col items-center justify-between h-full">
//                   <div className="text-center">
//                     <h2 className="text-lg font-bold text-gray-800 mb-2">
//                       {post.title}
//                     </h2>
//                     <p className="text-gray-600 text-sm mb-2">
//                       {post.excerpt?.slice(0, 150)}...
//                     </p>
//                     <Share post={post}/>
//                   </div>
//                   <div className="mt-auto mb-2">
//                     <a
//                       href={`/blog/${post.slug.current}`}
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Read More
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="max-w-7xl mx-auto text-right mt-8">
//             <Link
//               href="/blog"
//               className="text-blue-500 hover:text-blue-700 font-bold"
//             >
//               More Posts &rarr;
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import Head from "next/head";
import Image from 'next/legacy/image';
import { Inter } from "@next/font/google";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import Carousel from "@/components/carousel";
import LazyLoad from "react-lazy-load";
import Testimonials from "@/components/testimonial";
import { useEffect, useState } from "react";
import client from "@/client";
import Share from "@/components/share";
import Hero from "@/components/Hero.js";
import WaveDivider from "@/components/WaveDivider.js";
import About from "@/components/AboutMe";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [projects, setProjectSchema] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const data = await client.fetch(
        `*[_type == "blogPost"]| order(_createdAt desc) [0..2]{
          _id,
          title,          
          slug,                   
          body,
          excerpt,
          "authorName": author->name,
           featuredImage{
          asset->{
            _id,
            url,
          },
          alt
        },
        }`
      );
      setBlogPosts(data);
    };
    const fetchProjects = async () => {
      const projectData = await client.fetch(
        `*[_type == "project"]| order(_createdAt desc) [0..3]{
          _id,
          title,
          slug,
          image{
          asset->{
            _id,
            url,
          },
          alt
        },
          shortDescription,
          longDescription,
          "imageUrl": image.asset->url,
          url
        }`
      );
      setProjectSchema(projectData);
    };
    fetchBlogPosts();
    fetchProjects();
  }, []);

  return (
    <>
      <section className="">
        <Hero />
        <WaveDivider />
        <About />
      </section>

      {/* *************************************************************************** */}
      <section>
        <div>
          <div className="inline-flex items-center justify-center w-full mt-12">
            <hr className="w-44 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700 mt-12"></hr>
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-700 dark:text-gray-300"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center">Core Expertise</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-blue-100 transition duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src="/Joseph-Anselm-2.png"
                  alt="Web Development"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-2">Web Development</h2>
                <p className="text-gray-600"> Crafting custom web apps and cross-platform mobile apps, I leverage modern web technologies to drive your online success. With seamless user experiences and enhanced functionality, my solutions empower your business to thrive in the digital landscape. Reach wider audiences and achieve growth with innovative, tailored applications that exceed expectations.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-blue-100 transition duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/Joseph-Anselm-5.png"
                  alt="Web Design"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-2">Web Design</h2>
                <p className="text-gray-600">
                  Elevate your online presence with captivating website designs and brand setup that engages your audience and drive conversions. I blend aesthetic appeal with user-centric functionality to create stunning, intuitive websites. Maximize your brand&apos;s impact and leave a lasting impression with a website that captures attention and delivers results.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-blue-100 transition duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/Joseph-Anselm-9.png"
                  alt="IT Tech Support"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-2">DevOps / Tech Support</h2>
                <p className="text-gray-600">
                  Empower your business with streamlined operations through my comprehensive IT support services. From prompt issue resolution to seamless workflows, I ensure optimal performance and reliability. Leverage my expertise in DevOps and cloud computing to enhance productivity and efficiency. Experience a smooth and secure IT infrastructure that drives your business forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
<ProjectSection />

      <section className="home-testimonial">
        <Testimonials limit={3} />
        <div className="mb-5 max-w-7xl mx-auto text-right">
          <Link
            href="/testimonials"
            className="text-lg font-semibold text-blue-700 hover:text-gray-900"
          >
            More Testimonials &rarr;
          </Link>
        </div>
      </section>

      <section className="featured-post">
        <div className="bg-white w-full px-4 py-8">
          <Link href="/blog">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Featured Posts
            </h1>
          </Link>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <div
                key={post._id}
                className="bg-gray-100 hover:bg-blue-100 rounded-lg p-4 shadow-lg flex flex-col items-center"
              >
                <div
                  className="w-full h-80 bg-cover bg-center rounded-lg mb-4"
                  style={{
                    backgroundImage: `url(${post.featuredImage?.asset?.url || '/placeholder.jpg'})`,
                  }}
                ></div>
                <div className="flex flex-col items-center justify-between h-full">
                  <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-800 mb-2">
                      {post.title || 'Untitled Post'}
                    </h2>
                    <p className="text-gray-600 text-sm mb-2">
                      {post.excerpt?.slice(0, 150) || 'No excerpt available'}...
                    </p>
                    <Share post={post}/>
                  </div>
                  <div className="mt-auto mb-2">
                    {/* Fixed: Added optional chaining and fallback */}
                    <Link
                      href={`/blog/${post?.slug?.current || post._id || 'default'}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto text-right mt-8">
            <Link
              href="/blog"
              className="text-blue-500 hover:text-blue-700 font-bold"
            >
              More Posts &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}