// import React, { useState } from "react";
// import Image from "next/image";
// import ContactForm from "@/components/contactForm";
// import { FaTwitter, FaLinkedin, FaEnvelopeOpen, FaPhone, FaGithubSquare, FaYoutubeSquare } from "react-icons/fa"



// const ContactPage = () => {
//   return (
//     <div className="bg-gray-200">
//       <div className="container mx-auto flex flex-col md:flex-row items-center">
      
//       <div className="md:w-1/2 px-4 py-8 ">
//           <h2 className="text-3xl font-bold mb-4">Drop A Message For Me!</h2>
//           <ContactForm />       
//       </div>

//       <div className="md:w-1/2 flex flex-row lg:order-last md:order-first sm:order-first">
//           <Image
//             src="/images/jojo-contact.png"
//             alt="Contact Image"
//             width={500}
//             height={500}
//             className="shadow-sm"
//           />
//           <div className="flex flex-col mt-8 self-center gap-4 text-blue-700 px-3">
//           <a href="https://twitter.com/@coded_toolz" target="_blank" rel="noopener noreferrer">
//           <FaTwitter className="hover:text-black transform hover:scale-150 transition duration-300" />
//           </a>
//           <a href="https://www.linkedin.com/in/joseph-anselm" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="hover:text-black transform hover:scale-150 transition duration-300"/>
//           </a>
//           <a href="mailto:iamjoeanselm@gmail.com" target="_blank" rel="noopener noreferrer">
//             <FaEnvelopeOpen className="hover:text-black transform hover:scale-150 transition duration-300"/>
//           </a>
//           <a href="tel:+2348032516519" target="_blank" rel="noopener noreferrer">
//             <FaPhone className="hover:text-black transform hover:scale-150 transition duration-300"/>
//           </a>
//           <a href="https://github.com/joseph-anselm" target="_blank" rel="noopener noreferrer">
//             <FaGithubSquare className="hover:text-black transform hover:scale-150 transition duration-300"/>
//           </a>
//           <a href="https://www.youtube.com/@jojologz" target="_blank" rel="noopener noreferrer">
//             <FaYoutubeSquare className="hover:text-black transform hover:scale-150 transition duration-300"/>
//           </a>
//         </div>
//       </div>
      
//     </div>
//     </div>
//   );
// };

// export default ContactPage;


import React from "react";
import Image from "next/image";
import ContactForm from "@/components/contactForm";
import { 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  Github, 
  Youtube,
  Send,
  MapPin,
  MessageSquare
} from "lucide-react";

const ContactPage = () => {
  const contactDetails = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      label: "Email Me",
      value: "iamjoeanselm@gmail.com",
      href: "mailto:iamjoeanselm@gmail.com"
    },
    {
      icon: <Phone className="text-blue-600" size={24} />,
      label: "Call Me",
      value: "+234 803 251 6519",
      href: "tel:+2348032516519"
    }
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, href: "https://twitter.com/@coded_toolz", color: "hover:bg-sky-500" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/joseph-anselm", color: "hover:bg-blue-700" },
    { icon: <Github size={20} />, href: "https://github.com/joseph-anselm", color: "hover:bg-slate-900" },
    { icon: <Youtube size={20} />, href: "https://www.youtube.com/@jojologz", color: "hover:bg-red-600" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden mt-16">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-7xl px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info & Visuals */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest">
                <MessageSquare size={14} />
                Get in touch
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 font-sora leading-tight">
                Let&apos;s Build Something <span className="text-blue-600">Great</span> Together
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl font-light">
                Have a vision for a project or need specialized tech support? 
                Drop me a message and let&apos;s discuss how my 10+ years of experience 
                can help you achieve your goals.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactDetails.map((detail, idx) => (
                <a 
                  key={idx}
                  href={detail.href}
                  className="group p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {detail.icon}
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{detail.label}</p>
                  <p className="text-slate-900 font-semibold truncate">{detail.value}</p>
                </a>
              ))}
            </div>

            {/* Profile & Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/jojo-contact.png"
                    alt="Joseph Anselm"
                    layout="fill"
                    objectFit="cover"
                    className="bg-blue-100"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-slate-50 flex items-center justify-center text-white shadow-lg animate-pulse">
                   <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-bold text-slate-900 uppercase tracking-widest text-center sm:text-left">Follow my updates</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-white ${social.color} hover:-translate-y-1 transition-all duration-300 shadow-sm`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
            <div className="relative">
              {/* Form Accent Decor */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-600/5 rounded-[3rem] blur-2xl"></div>
              
              <div className="bg-white min-h-[550px] rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-slate-100 p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 font-sora flex items-center gap-3">
                    Send a Message
                    <Send className="text-blue-600" size={20} />
                  </h2>
                  <p className="text-slate-500 text-sm mt-2">
                    I typically respond within 2-4 business hours.
                  </p>
                </div>

                {/* The form logic remains identical via the imported component */}
                <div className="contact-form-wrapper">
                  <ContactForm />
                </div>
              </div>
            </div>


        </div>
      </div>
    </div>
  );
};

export default ContactPage;
