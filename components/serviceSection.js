import { FaLaptopCode, FaMobileAlt, FaTools, FaSearch, FaCloud, FaServer, FaLaptop, FaBriefcase  } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import sanityClient from '../client';

const ServicesSection = ({ limitServices }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await sanityClient.fetch(`*[_type == "service"]`);
        setServices(response);
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    };

    fetchServices();
  }, []);

  const limitedServices = limitServices ? services.slice(0, 4) : services;

  return (
    <section>
      <div className="py-16 bg-[#ddeef8]">
        <div className="max-w-screen-lg mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">What I Do</h1>
          <p className="text-lg mb-8 text-center">
            I specialize in a wide range of skills, including web application
            development, tech support, business branding, SEO, and website
            design and development, to help bring your project to life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {limitedServices.map((service) => (
              <div
                key={service._id}
                className="flex flex-col items-center rounded-lg border border-blue-200 p-2 transition-shadow duration-300 ease-in-out hover:shadow-xl"
              >
                {service.icon === 'FaLaptopCode' && (
                  <FaLaptopCode className="text-4xl text-blue-500 mb-4" />
                )}
                {service.icon === 'FaMobileAlt' && (
                  <FaMobileAlt className="text-4xl text-blue-500 mb-4" />
                )}
                {service.icon === 'FaTools' && (
                  <FaTools className="text-4xl text-blue-500 mb-4" />
                )}
                {service.icon === 'FaSearch' && (
                  <FaSearch className="text-4xl text-blue-500 mb-4" />
                )}
                {service.icon === 'FaCloud' && (
                  <FaCloud className="text-4xl text-blue-500 mb-4" />
                )}
                {service.icon === 'FaServer' && (
                  <FaServer className="text-4xl text-blue-500 mb-4" />
                )}
                 {service.icon === 'FaLaptop' && (
                  <FaLaptop className="text-4xl text-blue-500 mb-4" />
                )}
                  {service.icon === 'FaBriefcase' && (
                  <FaBriefcase className="text-4xl text-blue-500 mb-4" />
                )}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-md">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
