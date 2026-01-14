// import Link from "next/link";
// import { FaTwitter, FaLinkedin, FaEnvelopeOpen, FaPhone, FaGitSquare, FaGithubSquare, FaYoutubeSquare } from "react-icons/fa"


// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-gray-400 footer">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10">
//         <div className="space-y-4 mx-4">
//           <h2 className="text-lg font-medium">About Me</h2>
//           <p className="text-sm">
          
//             Experienced IT professional with 10+ years in web development, design, and IT engineering. Proven track record delivering high-quality, user-friendly, and secure solutions. Proficient in various technologies, including cloud computing and artificial intelligence. Motivated, results-oriented, and collaborative team player. Achieve common goals effectively.
//           </p>
//         </div>
//         <div className="space-y-4 mx-4">
//           <h2 className="text-lg font-medium">My Services</h2>
//           <ul className="text-sm">
//             <li>
//               <Link href="/services/" legacyBehavior>
//                 <a className="hover:text-white">Tech Support</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" legacyBehavior>
//                 <a className="hover:text-white">Business Digitization</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" legacyBehavior>
//                 <a className="hover:text-white">Business Branding</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" legacyBehavior>
//                 <a className="hover:text-white">Enhanced SEO</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" legacyBehavior>
//                 <a className="hover:text-white">Managed IT Services</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" legacyBehavior>
//                 <a className="hover:text-white">AI and Cloud Computing Solutions</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" legacyBehavior>
//                 <a className="hover:text-white">Dev Ops</a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="space-y-4 mx-4">
//           <h2 className="text-lg font-medium">Featured Blog</h2>
//           <ul className="text-sm">
//             <li>
//               <Link
//                 href="/blog/5-proven-ways-to-make-money-with-artificial-intelligence-ai"
//                 legacyBehavior
//               >
//                 <a className="hover:text-white">
//                   5 Tips Proven ways to make money with AI
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/blog/decoding-the-digital-maze-how-to-choose-the-perfect-web-hosting-solution"
//                 legacyBehavior
//               >
//                 <a className="hover:text-white">
//                   How to Choose the Right Web Hosting
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/blog/10-web-development-trends-for-2023-stay-ahead-of-the-curve"
//                 legacyBehavior
//               >
//                 <a className="hover:text-white">
//                   Top 10 Web Development Trends for 2023
//                 </a>
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/blog/unveiling-the-secrets-5-tips-for-building-exceptional-websites-with-seo-in-mind"
//                 legacyBehavior
//               >
//                 <a className="hover:text-white">
//                 5 Tips for Building Exceptional Websites
//                 </a>
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <div className="space-y-4 mx-4">
//           <h2 className="text-lg font-medium">Contact Me</h2>
//           <p className="text-sm">
//             Feel free to contact me for any inquiries or project proposals.
//           </p>
//           <a
//             href="mailto:iamjoeanselm@gmail.com"
//             className="inline-block py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm mt-2"
//           >
//             Email Me
//           </a>
//           <div className="flex self-center gap-4 text-blue-700">
//                 <a
//                   href="https://twitter.com/@coded_toolz"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-white transform hover:scale-150 transition duration-300"
//                 >
//                   <FaTwitter />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/joseph-anselm"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-white transform hover:scale-150 transition duration-300"
//                 >
//                   <FaLinkedin />
//                 </a>
//                 <a
//                   href="mailto:iamjoeanselm@gmail.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-white transform hover:scale-110 transition duration-300"
//                 >
//                   <FaEnvelopeOpen />
//                 </a>
//                 <a
//                   href="tel:+2348032516519"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-white transform hover:scale-150 transition duration-300"
//                 >
//                   <FaPhone />
//                 </a>
//                 <a
//                   href="https://github.com/joseph-anselm"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-white transform hover:scale-150 transition duration-300"
//                 >
//                   <FaGithubSquare />
//                 </a>
//                 <a
//                   href="https://www.youtube.com/jojo"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-white transform hover:scale-150 transition duration-300"
//                 >
//                   <FaYoutubeSquare />
//                 </a>
//         </div>

//         </div>
       
//       </div>

//       <div className="bg-gray-700 py-4 px-4 sm:px-6 lg:px-8 text-sm">
//         <p className="text-gray-400 text-center">
//           &copy; 2023 Joseph Anselm. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  Github, 
  Youtube, 
  ChevronUp,
  ArrowUpRight
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/@coded_toolz" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/joseph-anselm" },
    { icon: Mail, href: "mailto:iamjoeanselm@gmail.com" },
    { icon: Phone, href: "tel:+2348032516519" },
    { icon: Github, href: "https://github.com/joseph-anselm" },
    { icon: Youtube, href: "https://www.youtube.com/jojo" },
  ];

  const blogLinks = [
    { 
      label: "5 Tips Proven ways to make money with AI", 
      href: "/blog/5-proven-ways-to-make-money-with-artificial-intelligence-ai" 
    },
    { 
      label: "How to Choose the Right Web Hosting", 
      href: "/blog/decoding-the-digital-maze-how-to-choose-the-perfect-web-hosting-solution" 
    },
    { 
      label: "Top 10 Web Development Trends for 2023", 
      href: "/blog/10-web-development-trends-for-2023-stay-ahead-of-the-curve" 
    },
    { 
      label: "5 Tips for Building Exceptional Websites", 
      href: "/blog/unveiling-the-secrets-5-tips-for-building-exceptional-websites-with-seo-in-mind" 
    },
  ];

  const serviceLinks = [
    "Tech Support", 
    "Business Digitization", 
    "Business Branding", 
    "Enhanced SEO", 
    "Managed IT Services", 
    "AI and Cloud Computing Solutions", 
    "Dev Ops"
  ];

  return (
    <footer className="bg-gray-900 text-slate-300 pt-24 pb-12 px-6 relative overflow-hidden">
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          
          {/* Section: About */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold font-sora flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              About Me
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed font-light">
              Experienced IT professional with 10+ years in web development, design, and IT engineering. 
              Proven track record delivering high-quality, user-friendly, and secure solutions. 
              Proficient in various technologies, including cloud computing and artificial intelligence. 
              Motivated, results-oriented, and collaborative team player.
            </p>
          </div>

          {/* Section: Services */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold font-sora flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              My Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="group flex items-center gap-2 text-sm hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Blog */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold font-sora flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              Featured Blog
            </h3>
            <ul className="space-y-5">
              {blogLinks.map((blog) => (
                <li key={blog.label}>
                  <a 
                    href={blog.href} 
                    className="group flex flex-col gap-1 text-sm hover:text-white transition-colors duration-300"
                  >
                    <span className="line-clamp-2 leading-snug">{blog.label}</span>
                    <span className="text-[10px] uppercase tracking-widest text-slate-600 group-hover:text-blue-500 transition-colors flex items-center gap-1">
                      Read Article <ArrowUpRight size={10} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Contact */}
          <div className="space-y-6">
            <h3 className="text-white text-xl font-bold font-sora flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
              Contact Me
            </h3>
            <div className="space-y-8">
              <p className="text-slate-400 text-sm font-light">
                Feel free to contact me for any inquiries or project proposals.
              </p>
              
              <a
                href="mailto:iamjoeanselm@gmail.com"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-xl hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-900/20"
              >
                Email Me
                <Mail className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-blue-400 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Joseph Anselm. All rights reserved. 
            <span className="hidden md:inline mx-2 text-slate-800">|</span> 
            <span className="text-slate-600 italic">Built with excellence</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-slate-500 hover:text-blue-400 transition-all duration-300 text-xs uppercase tracking-[0.2em] font-bold"
          >
            Back to top
            <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
              <ChevronUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
