// import React from 'react';
// import { FaCode, FaDesktop, FaUsers, FaRocket } from 'react-icons/fa';

// const AboutMe = () => {
//   const skills = [
//     { icon: <FaCode />, text: 'HTML, CSS, JavaScript, PHP' },
//     { icon: <FaDesktop />, text: 'WordPress & Joomla CMS' },
//     { icon: <FaUsers />, text: 'Client Collaboration' },
//     { icon: <FaRocket />, text: 'Latest Technologies' }
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
//         About Me
//       </h2>
      
//       <p className="text-gray-700 mb-6 leading-relaxed">
//         As an IT Support Engineer and Web Developer, I am a highly skilled professional with a passion for technology and problem-solving. With expertise in both hardware and software, I possess a broad range of skills and experience in troubleshooting, maintaining, and upgrading various systems.
//       </p>
      
//       <p className="text-gray-700 mb-8 leading-relaxed">
//         My experience in web development has allowed me to design and develop dynamic, responsive websites that deliver a great user experience. My strong communication skills enable me to work collaboratively with clients, stakeholders, and team members to deliver effective and efficient IT solutions.
//       </p>
      
//       <div className="grid grid-cols-2 gap-4">
//         {skills.map((skill, index) => (
//           <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
//             <div className="text-blue-600 text-lg">
//               {skill.icon}
//             </div>
//             <span className="text-sm font-medium text-gray-700">{skill.text}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

import Container from "./Container"
import Stats from "./Stats"

export default function About() {
  return (
    <section className="relative bg-blue-600 text-white pt-32 pb-24 overflow-hidden">
      
      {/* Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C120,80 320,0 560,20 800,40 1040,80 1440,30 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      <Container>
        <h2 className="text-3xl font-bold text-center">About Me</h2>

        <p className="mt-8 max-w-3xl mx-auto text-center text-blue-100 leading-relaxed">
          I am an IT Support Engineer and Web Developer with deep experience in
          troubleshooting, system optimization, and building responsive, modern
          websites. I specialize in HTML, CSS, JavaScript, PHP, and CMS platforms
          such as WordPress and Joomla, delivering scalable and reliable solutions.
        </p>

        <Stats />
      </Container>
    </section>
  )
}
