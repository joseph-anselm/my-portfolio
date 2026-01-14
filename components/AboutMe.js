import React from 'react';

const stats = [
  { value: '12', label: 'Years Experience' },
  { value: '125+', label: 'Clients Served' },
];

const About = () => {
  return (
    <section id="about" className="bg-blue-600 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <p className="text-blue-50 text-lg lg:text-xl leading-relaxed font-light">
          I am a seasoned IT professional and technical leader with a strong background in systems management, web development, and enterprise IT support. I specialize in building reliable, scalable technology solutions while aligning IT strategy with business goals. With a hands-on approach and a passion for innovation, I deliver secure, high-performance systems and user-centric digital experiences.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 pt-8 max-w-2xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-blue-500/30 border border-blue-400/30 backdrop-blur hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <div className="text-6xl font-bold mb-2 group-hover:scale-110 transition-transform flex items-center justify-center gap-1">
                {stat.value}
              </div>
              <div className="text-blue-100 font-medium group-hover:text-blue-500 uppercase tracking-widest text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;