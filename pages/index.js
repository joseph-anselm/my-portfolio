import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section>
        <div className="bg-white-900 text-black h-400 md:h-400">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left m-5">
              <h1 className="text-4xl font-bold mb-4">Hey! I am Joe Anselm</h1>
              <p className="mb-8">
                We provide high-quality products and services to customers
                around the world. Our team is dedicated to providing excellent
                customer service and support. Contact us today to learn more.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                <Link href="/products" legacyBehavior>
                  <a className="bg-[#2E82FD] text-white border-blue-700 py-2 px-6 rounded-full font-bold hover:bg-blue-700 transition duration-300">
                    View Portfolio
                  </a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a className="border-2 border-[#2E82FD] py-2 px-6 rounded-full font-bold hover:bg-blue-700 hover:text-white transition duration-300">
                    Reach Out!
                  </a>
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 mb-8 md:m-5 order-first sm:order-last">
              <Image
                src="/images/Joe-square.jpg"
                alt="Header Image"
                width={400}
                height={200}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#2E82FD] text-white">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-justify">
            <h1 className="text-4xl font-bold text-center m-4">About Me</h1>
            <p>
              As an IT Support Engineer and Web Developer, I am a highly skilled
              professional with a passion for technology and problem-solving.
              With expertise in both hardware and software, I possess a broad
              range of skills and experience in troubleshooting, maintaining,
              and upgrading various systems. My experience in web development
              has allowed me to design and develop dynamic, responsive websites
              that deliver a great user experience. I am proficient in several
              programming languages, including HTML, CSS, JavaScript, and PHP,
              and have experience working with various CMS platforms such as
              WordPress and Joomla. My strong communication skills enable me to
              work collaboratively with clients, stakeholders, and team members
              to deliver effective and efficient IT solutions. I am committed to
              staying up-to-date with the latest technologies, tools, and
              trends, and strive to continuously improve my skills to provide
              the best possible service to my clients.
            </p>
            <div className="flex mx-auto text-center justify-center">
              <div className="flex m-5">
                <h1 className="text-6xl text-gray-800">12</h1>
                <span className="w-16 self-end text-left ml-2 font-bold text-blue-200">
                  Years experience
                </span>
              </div>
              <div className="flex m-5">
                <h1 className="text-6xl text-gray-800">125+</h1>
                <span className="w-16 self-end text-left ml-2 font-bold text-blue-200">
                  Clients Served
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* *************************************************************************** */}
      <section></section>
    </>
  );
}
