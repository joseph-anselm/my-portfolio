// import React from "react";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { SiHtml5, SiMysql, SiJavascript, SiReact, SiDjango, SiAws, SiPhp, SiWordpress } from "react-icons/si";

// export default function Techstacks() {
//   const skillSet = [
//     { name: "HTML/CSS", percentage: 95, icon: <SiHtml5 /> },
//     { name: "Mysql / Postgres", percentage: 85, icon: <SiMysql /> },
//     { name: "JavaScript", percentage: 85, icon: <SiJavascript /> },
//     { name: "React", percentage: 80, icon: <SiReact /> },
//     { name: "Django", percentage: 80, icon: <SiDjango /> },
//     { name: "AWS/Azure", percentage: 80, icon: <SiAws /> },
//     { name: "PHP", percentage: 80, icon: <SiPhp /> },
//     { name: "CMS / Headless CMS", percentage: 85, icon: <SiWordpress /> },
//   ];

//   return (
//     <div className="max-w-screen-lg mx-auto pb-10">
//       <div className="text-center max-w-screen-md mx-auto">
//         <h1 className="text-2xl font-bold my-5">Tech Stacks</h1>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
//         {skillSet.map((skill) => (
//           <div key={skill.name}>
//             <CircularProgressbar
//               value={skill.percentage}
//               text={`${skill.percentage}%`}
//               styles={buildStyles({
//                 textSize: "14px",
//                 pathColor: `#2E82FD`,
//                 textColor: "#2E82FD",
//                 trailColor: "#D1D5DB",
//                 pathTransitionDuration: 0.3, // Control the transition duration on hover
//                 trailColor: "#D1D5DB",
//                 backgroundColor: "#0B5ED7", // Set the deeper blue color for hover
//               })}
//               strokeWidth={8}
//               className="w-16"
//             >
//               <div className="flex justify-center">
//                 {skill.icon}
//               </div>
//             </CircularProgressbar>
//             <p className="mt-2 text-lg font-semibold text-center">
//               {skill.name}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }




import React from 'react';
import { 
  Code2, 
  Database, 
  Terminal, 
  Cpu, 
  Globe, 
  Cloud, 
  Server, 
  Layout,
  Zap
} from 'lucide-react';

const skillSet = [
  { name: "HTML/CSS", percentage: 95, icon: <Code2 size={20} />, category: "Frontend" },
  { name: "Mysql / Postgres", percentage: 85, icon: <Database size={20} />, category: "Database" },
  { name: "JavaScript", percentage: 85, icon: <Terminal size={20} />, category: "Logic" },
  { name: "React", percentage: 80, icon: <Cpu size={20} />, category: "Library" },
  { name: "Django", percentage: 80, icon: <Globe size={20} />, category: "Backend" },
  { name: "AWS/Azure", percentage: 80, icon: <Cloud size={20} />, category: "Infra" },
  { name: "PHP", percentage: 80, icon: <Server size={20} />, category: "Backend" },
  { name: "CMS Solutions", percentage: 85, icon: <Layout size={20} />, category: "System" },
];

/**
 * Custom SVG Circular Progress Component
 */
const CircularProgress = ({ percentage, size = 80, strokeWidth = 6 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-slate-100"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          style={{ strokeDashoffset: offset, transition: 'stroke-dashoffset 1s ease-in-out' }}
          strokeLinecap="round"
          className="text-blue-600"
        />
      </svg>
      <span className="absolute text-sm font-bold font-sora text-slate-900">
        {percentage}%
      </span>
    </div>
  );
};

const TechStacks = () => {
  return (
    <section id="tech-stacks" className="py-24 bg-white relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
            <Zap size={12} className="fill-blue-600" />
            Core Capabilities
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 font-sora">
            Technical Proficiency
          </h2>
          <p className="text-slate-500 text-lg font-light">
            A comprehensive overview of my expertise across the full modern tech stack.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillSet.map((skill, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-white border border-slate-100 rounded-[2rem] hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-6">
                {/* Circular Progress Wrapper */}
                <div className="relative">
                  <CircularProgress percentage={skill.percentage} size={100} strokeWidth={8} />
                  {/* Floating Icon */}
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                    {skill.icon}
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-500">
                    {skill.category}
                  </p>
                  <h3 className="text-lg font-bold text-slate-900 font-sora leading-tight">
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Subtle hover background decoration */}
              <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/30 rounded-[2rem] -z-10 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Learning Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <p className="text-sm text-slate-500 font-medium">
              Actively expanding expertise in <span className="text-slate-900 font-bold underline decoration-blue-500/30">Artificial Intelligence</span> & <span className="text-slate-900 font-bold underline decoration-blue-500/30">Advanced DevOps</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStacks;
