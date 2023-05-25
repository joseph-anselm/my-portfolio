import Image from "next/image";
import "react-circular-progressbar/dist/styles.css";
import { FaLaptopCode, FaMobileAlt, FaTools, FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import HeroSection from "@/components/herosection";
import Techstacks from "@/components/techstacks";
import ServicesSection from "@/components/serviceSection";

export default function About() {
  
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out-back",
      anchorPlacement: "top-bottom",
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* <div className="bg-blue-500">
        <div className="max-w-screen-lg mx-auto flex items-center">
          <div className="w-1/2">
            <Image
              src="/images/Jojo-pure.png"
              alt="My Image"
              width={400}
              height={400}
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-white text-5xl font-bold mb-8">
              My Big Heading
            </h1>
          </div>
        </div>
      </div> */}  

      <HeroSection title ="Leadership, Excellence, Creativity, Honesty, Value."  image="/images/Jojo-pure.png" />
 

      <section>
        <div className="bg-[#ddeef8] flex flex-col justify-center py-9 px-4 ">
          <div className="text-center max-w-screen-lg mx-auto">
            <h1 className="lg:text-5xl text-3xl font-bold mb-8">
              Hi, I&apos;m <span className="text-blue-500">Joseph Anselm</span>
            </h1>
            <p className="mb-8 text-justify">
            As an IT Engineer and Web Developer, I possess a diverse skill set and a strong passion for technology. With expertise in troubleshooting, system maintenance, and web development, I am equipped to handle a wide range of challenges. <br/>

            In web development, I have successfully designed and developed responsive websites and applications that prioritize user experience. Proficient in several programming languages, Libraries and frameworks, allowing me to create efficient and scalable solutions.

            I am experienced in working with popular CMS platforms and Headless CMS solutions. This enables me to customize websites and applications to meet specific requirements effectively.<br/>
            Furthermore, I have knowledge of cloud computing platforms like AWS and Azure, enabling secure and efficient deployment of applications. Additionally, my understanding of Artificial Intelligence (AI) technologies enhances my ability to develop intelligent and automated systems. <br/>

            With strong communication skills and an ongoing commitment to staying at the forefront of technology trends, I excel in collaborating with clients, stakeholders, and team members to deliver effective IT solutions. I am committed to staying updated on the latest technologies and frameworks, ensuring that I provide cutting-edge solutions to meet evolving needs.<br/>

            </p>
            
          </div>
        </div>
      </section>


    <Techstacks />
          
      
      

      {/* <section>
        <div className="py-16 bg-[#ddeef8]">
          <div className="max-w-screen-lg mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">What I Do</h1>
            <p className="text-lg mb-8 text-center">
              I specialize in a wide range of skills, including web application
              development, tech support, business branding, SEO, and website
              design and development, to help bring your project to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center rounded-lg border border-blue-200 p-4">
                <FaLaptopCode className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-md">
                  Create beautiful and functional websites that engage your
                  audience and help grow your business.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-blue-200 p-4">
                <FaMobileAlt className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                <p className="text-md">
                  Design and develop mobile applications that run seamlessly on
                  any device, anywhere.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-blue-200 p-4">
                <FaTools className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  DevOps / Tech Support
                </h3>
                <p className="text-md">
                  Implement DevOps strategies that streamline your development
                  process and improve your team&apos;s productivity.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-lg border border-blue-200 p-4">
                <FaSearch className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">SEO</h3>
                <p className="text-md">
                  Optimize your website for search engines to increase
                  visibility, attract more visitors, and drive conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <ServicesSection limitServices={4}/>
    </>
  );
}
