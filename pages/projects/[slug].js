// import Image from 'next/legacy/image';
// import sanityClient from '@/client';
// import { useRouter } from 'next/router';
// import client from '@/client';
// import { FiArrowLeft } from 'react-icons/fi';
// import Link from 'next/link';

// export default function Project({ project }) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto py-5 px-2">
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-semibold mb-6">{project.title}</h1>
//       </div>

//       <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 items-start">
//         <div className="rounded-lg overflow-hidden md:w-1/2 sm:w-full">
//           <div className="aspect-w-16 aspect-h-9">
//             <Image
//               src={project.imageUrl}
//               alt={project.title}
//               width={600}
//             height={400}
//             className="rounded-lg"
//               objectFit="contain"
              
//             />
//           </div>
//         </div>

//         <div className="flex flex-col mt-10 md:w-1/2">
//           <div className="mb-10">
//             <p className="text-gray-600">{project.longDescription}</p>
//           </div>

//           <div className="mt-10 flex space-x-4">
//             {/* <a href={project.url} target="_blank" rel="noopener noreferrer">
//               <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
//                 View Project
//               </button>
//             </a> */}


//             <Link href={project.url} legacyBehavior>
//               <a target="_blank" rel="noopener noreferrer">
//                 <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
//                   View Project url
//                 </button>
//               </a>
//             </Link>

//             <button
//               onClick={() => {
//                 console.log('Back button clicked');
//                 router.back();
//               }}
//               className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center"
//             >
//               <FiArrowLeft className="mr-2" />
//               <span>Back</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export async function getStaticPaths() {
//   const projects = await client.fetch(`*[_type == "project" && defined(slug.current)]`);

//   const paths = projects.map((project) => ({
//     params: { slug: project.slug?.current },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;
//   const project = await sanityClient.fetch(
//     `*[_type == "project" && slug.current == $slug]{
//       title,
//       slug,
//       "imageUrl": image.asset->url,
//       longDescription,
//       url
//     } [0]`,
//     { slug }
//   );

//   return {
//     props: { project },
//     revalidate: 1,
//   };
// }



// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { 
//   ArrowLeft, 
//   ExternalLink, 
//   Globe, 
//   Calendar, 
//   Layers, 
//   CheckCircle2,
//   ChevronRight,
//   Info,
//   Terminal,
//   Cpu,
//   Code2
// } from 'lucide-react';
// import Link from 'next/link';
// import sanityClient from "@/client";

// /**
//  * Single Project Case Study Page
//  * Professional, high-contrast layout for individual portfolio items.
//  * Includes client-side fetching to prevent loading hangs.
//  */
// export default function SingleProject({ project: initialProject }) {
//   const router = useRouter();
//   const [project, setProject] = useState(initialProject);
//   const [loading, setLoading] = useState(!initialProject);

//   // Client-side fetching logic to handle missing props in development/simulated environments
//   useEffect(() => {
//     const fetchProject = async () => {
//       // Extract slug from router query or window location if router is not ready
//       const slug = router.query?.slug || window.location.pathname.split('/').pop();
      
//       if (!project && slug && slug !== '[slug]') {
//         try {
//           const data = await sanityClient.fetch(
//             `*[_type == "project" && slug.current == $slug]{
//               title,
//               slug,
//               "imageUrl": image.asset->url,
//               shortDescription,
//               longDescription,
//               url,
//               tags
//             } [0]`,
//             { slug }
//           );
//           setProject(data);
//         } catch (error) {
//           console.error("Error fetching project:", error);
//         } finally {
//           setLoading(false);
//         }
//       } else if (project) {
//         setLoading(false);
//       }
//     };

//     fetchProject();
//   }, [router.query?.slug, initialProject]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-white">
//         <div className="relative">
//           <div className="w-16 h-16 border-4 border-blue-100 rounded-full"></div>
//           <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//         </div>
//         <p className="mt-6 text-slate-400 font-medium font-sora animate-pulse">
//           Initializing Case Study...
//         </p>
//       </div>
//     );
//   }

//   if (!project) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
//         <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mb-6">
//           <Info size={40} />
//         </div>
//         <h2 className="text-2xl font-bold text-slate-900 font-sora">Project Not Found</h2>
//         <p className="text-slate-500 mt-2 mb-8 max-w-sm">The project you're looking for might have been moved or deleted.</p>
//         <button
//           onClick={() => router.push('/projects')}
//           className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all"
//         >
//           Return to Portfolio
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* 1. Immersive Project Header */}
//       <header className="relative bg-[#0a0f1d] pt-32 pb-24 overflow-hidden">
//         {/* Background Effects */}
//         <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
//         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
//         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/5 rounded-full blur-[100px] -ml-24 -mb-24"></div>

//         <div className="max-w-7xl mx-auto px-6 relative z-10">
//           <button
//             onClick={() => router.back()}
//             className="group mb-12 inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all text-xs font-bold uppercase tracking-[0.2em]"
//           >
//             <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
//             Back to Case Studies
//           </button>

//           <div className="grid lg:grid-cols-2 gap-12 items-end">
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
//                 <SparkleIcon /> Project Showcase
//               </div>
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white font-sora tracking-tight leading-[1.1]">
//                 {project.title}<span className="text-blue-600">.</span>
//               </h1>
//               <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
//                 {project.shortDescription}
//               </p>
//             </div>
            
//             <div className="hidden lg:flex justify-end pb-2">
//                <div className="flex gap-4">
//                   <div className="text-right">
//                     <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Industry</p>
//                     <p className="text-white font-semibold">Tech & Innovation</p>
//                   </div>
//                   <div className="w-px h-10 bg-slate-800"></div>
//                   <div className="text-right">
//                     <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Year</p>
//                     <p className="text-white font-semibold">2024</p>
//                   </div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* 2. Main Content Grid */}
//       <main className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 pb-32">
//         <div className="grid lg:grid-cols-12 gap-12">
          
//           {/* Left Column: Image & Details */}
//           <div className="lg:col-span-8 space-y-16">
//             {/* Main Project Visual */}
//             <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl shadow-slate-900/40 border-[12px] border-white group">
//               <img
//                 src={project.imageUrl || "https://picsum.photos/seed/case/1200/800"}
//                 alt={project.title}
//                 className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-1000"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
//             </div>

//             {/* In-depth Analysis */}
//             <div className="space-y-12">
//               <div className="space-y-6">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
//                     <Code2 size={24} />
//                   </div>
//                   <h2 className="text-3xl font-bold text-slate-900 font-sora">The Challenge</h2>
//                 </div>
//                 <div className="prose prose-lg prose-slate max-w-none font-light leading-relaxed text-slate-600">
//                    {project.longDescription || "Full case study details are currently being finalized. This project demonstrates high-level architecture and seamless user interface design."}
//                 </div>
//               </div>

//               {/* Technical Stack Pills */}
//               <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-6">
//                 <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Technology Stack</h3>
//                 <div className="flex flex-wrap gap-3">
//                   {['React', 'Next.js', 'Tailwind CSS', 'Sanity CMS', 'Node.js', 'PostgreSQL'].map((tech) => (
//                     <span key={tech} className="px-5 py-2.5 bg-white border border-slate-200 rounded-2xl text-slate-700 text-sm font-bold shadow-sm">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Sidebar Specs */}
//           <div className="lg:col-span-4 space-y-8">
//             <div className="sticky top-24 space-y-8">
//               {/* Action Card */}
//               <div className="p-10 rounded-[3rem] bg-slate-900 text-white space-y-10 shadow-2xl shadow-blue-900/20 relative overflow-hidden group">
//                 {/* Accent glow */}
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-600/30 transition-colors"></div>
                
//                 <div className="space-y-4 relative z-10">
//                   <h3 className="text-2xl font-bold font-sora leading-tight text-white">Let's see it in <br/><span className="text-blue-500 text-3xl italic">Action.</span></h3>
//                   <p className="text-slate-400 text-sm font-light leading-relaxed">
//                     Explore the live deployment to interact with the finalized features and performance optimizations.
//                   </p>
//                 </div>

//                 <div className="flex flex-col gap-4 relative z-10">
//                   <Link href={project.url || "#"} legacyBehavior>
//                     <a 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95 group/btn"
//                     >
//                       Visit Live Website
//                       <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
//                     </a>
//                   </Link>
//                   <button
//                     onClick={() => router.back()}
//                     className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-white/5 hover:bg-white/10 text-slate-300 rounded-2xl font-bold transition-all border border-white/10"
//                   >
//                     Back to Gallery
//                   </button>
//                 </div>
//               </div>

//               {/* Project Stats Sidebar */}
//               <div className="p-10 rounded-[3rem] border border-slate-100 bg-white shadow-sm space-y-8">
//                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Project Meta</h4>
                 
//                  <div className="space-y-8">
//                     <MetaItem 
//                       icon={<Globe size={18}/>} 
//                       label="Client Region" 
//                       value="North America" 
//                     />
//                     <MetaItem 
//                       icon={<Terminal size={18}/>} 
//                       label="Category" 
//                       value="Enterprise Web App" 
//                     />
//                     <MetaItem 
//                       icon={<Cpu size={18}/>} 
//                       label="Status" 
//                       value="Production Ready" 
//                     />
//                     <MetaItem 
//                       icon={<Calendar size={18}/>} 
//                       label="Timeline" 
//                       value="6 Months" 
//                     />
//                  </div>

//                  {/* Verified Badge */}
//                  <div className="pt-4 mt-8 border-t border-slate-50 flex items-center gap-3">
//                     <CheckCircle2 size={16} className="text-green-500" />
//                     <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Certified Outcome</span>
//                  </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// }

// const MetaItem = ({ icon, label, value }) => (
//   <div className="flex items-center gap-5">
//      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm">
//         {icon}
//      </div>
//      <div className="space-y-0.5">
//         <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{label}</p>
//         <p className="text-sm font-bold text-slate-900">{value}</p>
//      </div>
//   </div>
// );

// const SparkleIcon = () => (
//   <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//     <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
//   </svg>
// );




import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { 
  ArrowLeft, 
  ExternalLink, 
  Globe, 
  Tag as TagIcon,
  Info
} from 'lucide-react';
import Link from 'next/link';
import sanityClient from "@/client";

/**
 * Minimalist Single Project Page
 * Focuses on sharp typography and dynamic data only.
 */
export default function SingleProject({ project: initialProject }) {
  const router = useRouter();
  const [project, setProject] = useState(initialProject);
  const [loading, setLoading] = useState(!initialProject);

  useEffect(() => {
    const fetchProject = async () => {
      const slug = router.query?.slug || window.location.pathname.split('/').pop();
      
      if (!project && slug && slug !== '[slug]') {
        try {
          const data = await sanityClient.fetch(
            `*[_type == "project" && slug.current == $slug]{
              title,
              slug,
              "imageUrl": image.asset->url,
              shortDescription,
              longDescription,
              url,
              tags
            } [0]`,
            { slug }
          );
          setProject(data);
        } catch (error) {
          console.error("Error fetching project:", error);
        } finally {
          setLoading(false);
        }
      } else if (project) {
        setLoading(false);
      }
    };

    fetchProject();
  }, [router.query?.slug, initialProject]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
        <h2 className="text-xl font-bold text-slate-900 font-sora mb-4">Project Not Found</h2>
        <button
          onClick={() => router.push('/projects')}
          className="text-blue-600 font-bold flex items-center gap-2 hover:underline"
        >
          <ArrowLeft size={16} /> Return to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Minimal Navigation Bar */}
      <nav className="border-b border-slate-100 py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
          
          {project.url && (
            <Link href={project.url} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-bold flex items-center gap-1.5 hover:underline">
                Live Preview <ExternalLink size={14} />
              </a>
            </Link>
          )}
        </div>
      </nav>

      {/* 2. Compact Project Header */}
      <header className="pt-16 pb-12 px-6 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-sora tracking-tight leading-tight">
              {project.title}
            </h1>
            {project.shortDescription && (
              <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                {project.shortDescription}
              </p>
            )}
            
            {/* Dynamic Tags if they exist */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 3. Main Content Showcase */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Content Body */}
          <div className="lg:col-span-7 space-y-10">
            {/* Project Feature Image */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-xl">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* In-depth Description */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 font-sora flex items-center gap-2">
                <Info size={18} className="text-blue-600" />
                About Project
              </h2>
              <div className="text-slate-600 text-lg font-light leading-relaxed whitespace-pre-wrap">
                {project.longDescription || "Description currently being updated."}
              </div>
            </div>
          </div>

          {/* Right: Quick Actions/Meta */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 space-y-6">
              <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-lg">
                <h3 className="text-lg font-bold font-sora">Launch Project</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Experience the full functionality and interactive design of this solution in its production environment.
                </p>
                
                {project.url ? (
                  <Link href={project.url} legacyBehavior>
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-md active:scale-95"
                    >
                      Visit Website
                      <ExternalLink size={18} />
                    </a>
                  </Link>
                ) : (
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-slate-500 text-sm text-center">
                    Live link not available
                  </div>
                )}
              </div>

              {/* Minimal Project Info (Dynamic Only) */}
              <div className="p-8 rounded-3xl border border-slate-100 bg-white space-y-6">
                 <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                       <span className="text-slate-400 font-medium">Project Name</span>
                       <span className="text-slate-900 font-bold">{project.title}</span>
                    </div>
                    {project.url && (
                       <div className="flex items-center justify-between text-sm border-t border-slate-50 pt-4">
                          <span className="text-slate-400 font-medium">Status</span>
                          <span className="flex items-center gap-2 text-green-600 font-bold">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            Production Ready
                          </span>
                       </div>
                    )}
                 </div>
              </div>

              {/* Simple Back button at bottom of sidebar */}
              <button 
                onClick={() => router.back()}
                className="w-full py-4 text-slate-500 hover:text-slate-900 text-sm font-bold flex items-center justify-center gap-2 transition-colors"
              >
                Return to Gallery
              </button>
            </div>
          </div>

        </div>
      </main>
      
      {/* Simple Footer Transition */}
      <div className="border-t border-slate-100 mt-20 py-12 text-center">
         <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
           End of Case Study
         </p>
      </div>
    </div>
  );
}
