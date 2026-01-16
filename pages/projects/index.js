// import Image from 'next/legacy/image';
// import Link from 'next/link';
// import sanityClient from "@/client";
// import { useEffect, useState } from "react";
// import { HiOutlineExternalLink } from "react-icons/hi";
// import client from '@/client';
// import HeroSection from '@/components/herosection';

// export default function Projects() {

//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       const data = await sanityClient.fetch(
//         `*[_type == "project"]{
//           _id,
//           title,
//           slug,          
//           "imageUrl": image.asset->url,
//           shortDescription,
//           longDescription,
//           url
//         }`
//       );
//       setProjects(data);
//     };
//     fetchProjects();
//   }, []);

//   return (
//     <>
//     <HeroSection title ="Quality, Professionalism, Competence."  image="/images/j3.png"/>
//     <div className="max-w-7xl mx-auto py-5 px-2">
//       <h1 className="text-3xl font-semibold mb-6">Projects</h1>
//       <p className='mb-10'>Check out my portfolio of unique and captivating projects that showcase my passion for design and development. From dynamic web applications to interactive mobile apps, each project represents my dedication to delivering high-quality results that exceed expectations. Explore my portfolio and discover how I can help you bring your ideas to life.</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {projects.map((project) => (
//           <div key={project._id} className="group relative">
//             <Link href={`/projects/${project.slug?.current}`} legacyBehavior >
//               <a>
//                 <div className="rounded-lg overflow-hidden h-64 md:h-80">
//                   <Image
//                     src={project.imageUrl}
//                     alt={project.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-opacity duration-300"
//                   />
//                 </div>
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
//                   <div className="bg-white bg-opacity-75 py-2 px-4 rounded-lg max-w-full w-full">
//                     <h2 className="text-lg font-semibold mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
//                       {project.title}
//                     </h2>
//                     <p className="text-gray-600 hidden md:block">
//                       {project.shortDescription}
//                     </p>
//                     <HiOutlineExternalLink className="text-gray-500 text-xl ml-2" />
//                   </div>
//                 </div>
//               </a>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>
//   );
// }






import React, { useEffect, useState } from "react";
import sanityClient from "@/client";
import { 
  ExternalLink, 
  ArrowUpRight, 
  Briefcase, 
  Layers, 
  Layout, 
  ChevronRight 
} from "lucide-react";
import HeroSection from "@/components/herosection";

/**
 * Modernized Projects Gallery
 * Uses a professional card layout with clear hierarchy and smooth transitions.
 */
export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "project"]{
            _id,
            title,
            slug,          
            "imageUrl": image.asset->url,
            shortDescription,
            url
          }`
        );
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Subheader: Reuse the revamped HeroSection */}
      <HeroSection 
        title="Quality. Professionalism. Competence." 
        description="Explore a curated gallery of digital solutions, from complex web systems to bespoke mobile experiences."
        image="https://picsum.photos/seed/portfolio/800/800"
        category="My Portfolio"
      />

      <div className="max-w-7xl mx-auto py-24 px-6">
        {/* 2. Intro Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
              <Briefcase size={12} />
              Selected Works
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">
              Each project represents a unique challenge solved through meticulous design and robust engineering. 
              Discover how I help brands bring their most ambitious ideas to life.
            </p>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 text-slate-400 text-sm font-medium">
             <span className="flex items-center gap-2 italic">
               <Layers size={16} /> {projects.length} Completed Projects
             </span>
          </div>
        </div>

        {/* 3. Projects Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
             <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div 
                key={project._id} 
                className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={project.imageUrl || "https://picsum.photos/seed/placeholder/800/600"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Category Badge (Floating) */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-bold text-slate-900 uppercase tracking-widest shadow-sm">
                    {project.category || "Case Study"}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 font-sora group-hover:text-blue-600 transition-colors truncate">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-light">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 mt-auto flex items-center justify-between border-t border-slate-50">
                    <a 
                      href={`/projects/${project.slug?.current}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors group/btn"
                    >
                      View Project 
                      <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                        title="Visit Live Site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. CTA: Bottom Section */}
        <div className="mt-24 p-12 rounded-[3rem] bg-slate-900 text-center relative overflow-hidden">
           {/* Decor */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
           
           <div className="relative z-10 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white font-sora">Have a project in mind?</h3>
              <p className="text-slate-400 max-w-lg mx-auto">
                I'm always looking for exciting new challenges. Let's discuss how we can build your next digital success story together.
              </p>
              <div className="pt-4">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
                >
                  Start a Conversation
                  <ArrowUpRight size={20} />
                </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
