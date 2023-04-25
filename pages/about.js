import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaLaptopCode, FaMobileAlt, FaTools, FaSearch } from "react-icons/fa";

export default function MyPage() {
  const skillSet = [
    { name: "HTML/CSS", percentage: 95 },
    { name: "Mysql / Postgres", percentage: 85 },
    { name: "JavaScript", percentage: 85 },
    { name: "React", percentage: 80 },
    { name: "Django", percentage: 75 },
    { name: "AWS/Azure", percentage: 80 },
    { name: "PHP", percentage: 75 },
    { name: "CMS / Headless CMS", percentage: 85 },
  ];

  return (
    <>
      <div className="bg-blue-500">
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
      </div>

      <section>
        <div className="bg-[#ddeef8] flex flex-col justify-center py-9">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">
              Hi, I&apos;m <span className="text-blue-500">Jojo Anselm</span>
            </h1>
            <p className="text-lg mb-8">
              I&apos;m a web developer with a passion for creating beautiful and
              functional websites.
            </p>
            <h1 className="text-4xl font-bold mb-8">Tech Stacks</h1>
          </div>
          <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {skillSet.map((skill) => (
                <div key={skill.name}>
                  <CircularProgressbar
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    styles={buildStyles({
                      textSize: "24px",
                      pathColor: `#2E82FD`,
                      textColor: "#2E82FD",
                      trailColor: "#D1D5DB",
                    })}
                  />
                  <p className="mt-4 text-xl font-semibold text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
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
      </section>
    </>
  );
}
