
import React from 'react';
import { 
  Wrench, 
  Briefcase, 
  Smartphone, 
  Monitor, 
  Search, 
  Server, 
  Cloud, 
  Layout
} from 'lucide-react';

const services = [
  {
    title: 'Tech Support',
    description: 'Providing reliable and efficient technical support services to ensure smooth operations and resolve any issues that may arise. I aim to deliver exceptional support, empowering clients to maximize their technology investments.',
    icon: <Wrench size={32} />,
  },
  {
    title: 'Business Digitization',
    description: 'Embrace the digital era and transform your business with my comprehensive digitization solutions. From paperless workflows to automated processes, I help you streamline operations, improve efficiency, and reduce costs.',
    icon: <Briefcase size={32} />,
  },
  {
    title: 'Web & Mobile App Development',
    description: "Transforming ideas into captivating websites and intuitive mobile apps. With expertise in both platforms, I deliver seamless digital experiences that engage users on any device, driving growth and satisfaction.",
    icon: <Smartphone size={32} />,
  },
  {
    title: 'Dev Ops',
    description: 'Streamline your software development lifecycle with efficient DevOps practices. From continuous integration and delivery to automated testing and deployment, I optimize your processes for faster, reliable releases.',
    icon: <Monitor size={32} />,
  },
  {
    title: 'Business Branding',
    description: 'Captivate your audience with a captivating online brand identity. I craft visually appealing assets, from logos to websites, that reflect your values and differentiate you from competitors with strategic positioning.',
    icon: <Layout size={32} />,
  },
  {
    title: 'Enhanced SEO',
    description: 'Supercharge your online visibility and organic traffic with expert SEO strategies. I optimize your website through keyword research, on-page enhancements, and technical SEO tactics to boost rankings and reach.',
    icon: <Search size={32} />,
  },
  {
    title: 'Managed IT Services',
    description: 'Experience hassle-free IT management with my comprehensive Managed IT Services. From proactive monitoring and maintenance to reliable support, I ensure your systems run smoothly so you can focus on core business.',
    icon: <Server size={32} />,
  },
  {
    title: 'AI and Cloud Solutions',
    description: 'Empower your business with tailored AI development and scalable cloud computing solutions. Leverage advanced machine learning for data analysis and decision-making, while enjoying secure, flexible infrastructure.',
    icon: <Cloud size={32} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-sora">What I Do</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            I specialize in a wide range of skills, including web application development, tech support, business branding, SEO, and website design and development, to help bring your project to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-3xl border border-blue-100/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-sora group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;