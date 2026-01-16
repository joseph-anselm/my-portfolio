
import React, { useEffect, useState } from 'react';
import { ChevronRight, ExternalLink, Briefcase, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import sanityClient from "@/client";

/**
 * ProjectSection - Homepage Component
 * A sharp, minimalist showcase of selected projects.
 */
export default function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestProjects = async () => {
      try {
        // Fetching top 4 projects for the homepage
        const data = await sanityClient.fetch(
          `*[_type == "project"][0...4]{
            _id,
            title,
            slug,
            "imageUrl": image.asset->url,
            shortDescription
          }`
        );
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestProjects();
  }, []);

  if (loading && projects.length === 0) return null;

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
            <Briefcase size={12} />
            Selected Works
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora tracking-tight">
            Featured Portfolio
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {projects.map((project) => (
            <Link 
              key={project._id} 
              href={`/projects/${project.slug?.current || project._id}`}
              className="group block space-y-4"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-blue-500/10 group-hover:-translate-y-1">
                <img
                  src={project.imageUrl || "https://picsum.photos/seed/project/600/450"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                
                {/* Hover Icon */}
                <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-blue-600" />
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2 space-y-1">
                <h3 className="text-lg font-bold text-slate-900 font-sora group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2 font-light leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Action */}
        <div className="flex justify-center md:justify-end border-t border-slate-50 pt-8">
          <Link href="/projects" legacyBehavior>
            <a className="group inline-flex items-center gap-3 px-6 py-3 bg-slate-50 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-2xl font-bold transition-all">
              View All Projects
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 group-hover:border-blue-200 group-hover:translate-x-1 transition-all shadow-sm">
                <ChevronRight size={16} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
