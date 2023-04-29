import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

const HeroSection = () => {
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
    <div className="bg-blue-500" data-aos="fade-right" data-aos-duration="1000">
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
            My Big Heading about me
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
