
import React, { useEffect } from 'react';
import { 
  Code2, 
  Cloud, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import AOS from 'aos';

/**
 * IntroSection - A high-end professional introduction component.
 * Replaces the basic blue-box about section with a sophisticated layout.
 */
export default function IntroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  return (
    <section className="relative py-24 bg-white overflow-hidden border-b border-slate-50">
      {/* Decorative subtle background grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none [background-image:radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* 1. Left Column: Identity Card */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                <Sparkles size={12} className="fill-blue-600" />
                Innovator & Engineer
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 font-sora leading-[1.1] tracking-tight">
                Architecting <br />
                <span className="text-blue-600">Tomorrow's</span> Web.
              </h2>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:scale-110 transition-transform">
                <Zap size={120} />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white shadow-md">
                   <img src="https://picsum.photos/seed/joseph_portrait/200/200" alt="Joseph Anselm" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 font-sora">Joseph Anselm</h4>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">IT Engineer & Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <ShieldCheck size={16} className="text-blue-500" />
                  <span>15+ Years Professional Experience</span>
                </div>
              
              </div>

              <a href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all group/link">
                Discuss a Project 
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* 2. Right Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-12" data-aos="fade-left" data-aos-delay="200">
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed">
                As a hybrid <span className="text-slate-900 font-semibold italic">IT Engineer and Web Developer</span>, I blend system-level precision with creative digital execution to solve high-stakes technology challenges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Pillar 1 */}
              <div className="space-y-3 p-6 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-200">
                  <Code2 size={20} />
                </div>
                <h3 className="font-bold text-slate-900 font-sora">Web Engineering</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Building efficient, scalable applications using modern frameworks that prioritize seamless user experience and performance.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="space-y-3 p-6 rounded-3xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg shadow-slate-200">
                  <Cpu size={20} />
                </div>
                <h3 className="font-bold text-slate-900 font-sora">Intelligent Systems</h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Integrating AI technologies and automated workflows to create smarter, data-driven business environments.
                </p>
              </div>
            </div>

            <div className="space-y-6 text-slate-600 font-light leading-relaxed">
              <p>
                My expertise spans the full infrastructure lifecycle—from cloud deployment on <span className="font-medium text-slate-900">AWS/Azure</span> to custom CMS architecture. I focus on bridging the gap between hardware limitations and software aspirations, ensuring every solution is built for longevity and growth.
              </p>
              <p>
                Whether it's modernizing legacy workflows or crafting a brand’s first digital footprint, I prioritize <span className="font-medium text-slate-900">communication and collaboration</span>, ensuring that the technology always serves the human goals behind the business.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
