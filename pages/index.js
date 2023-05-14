import Head from "next/head";
import Image from 'next/legacy/image';
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import Carousel from "@/components/carousel";
import LazyLoad from "react-lazy-load";

import { useEffect, useState } from "react";

import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "jy07zzhq",
  dataset: "production",
  useCdn: false, // Set this to true if you want to enable CDN caching
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [projects, setProjectSchema] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const data = await client.fetch(
        `*[_type == "blogPost"]| order(_createdAt desc) [0..2]{
          _id,
          title,          
          slug,                   
          body,
          excerpt,
          "authorName": author->name,
           featuredImage{
          asset->{
            _id,
            url,
          },
          alt
        },
        }`
      );
      setBlogPosts(data);
    };
    const fetchProjects = async () => {
      const projectData = await client.fetch(
        `*[_type == "project"]| order(_createdAt desc) [0..3]{
          _id,
          title,
          slug,
          image{
          asset->{
            _id,
            url,
          },
          alt
        },
          shortDescription,
          longDescription,
          "imageUrl": image.asset->url,
          url
        }`
      );
      setProjectSchema(projectData);
    };
    fetchBlogPosts();
    fetchProjects();
  }, []);

  // const projects = [
  //   {
  //     id: 1,
  //     name: "Project 1",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel enim ut lorem euismod tincidunt ut sed leo.",
  //     imageUrl: "/images/Joseph-Anselm-1.png",
  //     linkUrl: "https://example.com/project-1",
  //   },
  //   {
  //     id: 2,
  //     name: "Project 2",
  //     description:
  //       "Sed malesuada aliquam nulla, id vestibulum ipsum bibendum eu. Morbi vitae nulla est.",
  //     imageUrl: "/images/Joseph-Anselm-2.png",
  //     linkUrl: "https://example.com/project-2",
  //   },
  //   {
  //     id: 3,
  //     name: "Project 3",
  //     description:
  //       "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  //     imageUrl: "/images/Joseph-Anselm-3.png",
  //     linkUrl: "https://example.com/project-3",
  //   },
  //   {
  //     id: 4,
  //     name: "Project 4",
  //     description:
  //       "In hac habitasse platea dictumst. Maecenas vestibulum massa a nisl porttitor, nec mattis ex venenatis.",
  //     imageUrl: "/images/Joseph-Anselm-4.png",
  //     linkUrl: "https://example.com/project-4",
  //   },
  // ];

  return (
    <>
      <section className="">
        <div className="bg-white-900 text-black h-400 md:h-400">
          <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:m-5 md:order-last">
              <Carousel />
            </div>
            <div className="md:w-1/2 text-center md:text-left m-2 ">
            <h1 className="text-3xl sm:text-3xl font-bold mb-4 whitespace-nowrap px-3">
              Hey! I am <span className="text-blue-700">Joseph Anselm</span>
            </h1>
              <p className="mb-8 text-justify">
                My goal is to to create and support high-quality tech products,
                apps and offer exceptional customer service. I am committed to
                providing you with the support you need, and I am always
                available to answer any questions or concerns you may have.
                Please don&apos;t hesitate to reach out to me directly to learn
                more about how I can help you. I&apos;m excited to connect with
                you soon.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                <Link href="/projects" legacyBehavior>
                  <a className="bg-[#2E82FD] text-white border-[#3987FA] w-48 border-2 py-2 px-8 rounded-full font-bold hover:bg-blue-700 transition duration-300">
                    My Portfolio
                  </a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a className="border-2 border-[#2E82FD] w-48 py-2 px-8 rounded-full font-bold hover:bg-blue-700 hover:text-white transition duration-300">
                    Reach Out !
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about">
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
            <div className="flex mx-auto text-center justify-center px-5">
              <div className="flex m-5">
                <h1 className="pl-2 text-5xl text-gray-800">12</h1>
                <span className="w-16 self-end text-left ml-2 text-blue-200">
                  Years experience
                </span>
              </div>
              <div className="flex m-5">
                <h1 className="text-5xl text-gray-800 px-2">125+</h1>
                <span className="w-16 self-end text-left ml-2 text-blue-200">
                  Clients Served
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="custom-shape-divider-top-1680109549">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* *************************************************************************** */}
      <section>
        <div>
          <div className="inline-flex items-center justify-center w-full mt-12">
            <hr className="w-44 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700 mt-12"></hr>
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-700 dark:text-gray-300"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center">Expertise</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/Joseph-Anselm-2.png"
                  alt="Web Development"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-2">Web Development</h2>
                <p className="text-gray-600">
                  I create custom websites and applications using modern web
                  technologies to help your business succeed online.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/Joseph-Anselm-5.png"
                  alt="Web Design"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-2">Web Design</h2>
                <p className="text-gray-600">
                  I design beautiful and functional websites that provide the
                  best user experience for your customers and target audience.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/Joseph-Anselm-9.png"
                  alt="IT Tech Support"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-2">IT Tech Support</h2>
                <p className="text-gray-600">
                  I offer fast and reliable IT technical support to keep your
                  business running smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-40 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700 mt-12"></hr>
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-700 dark:text-gray-300"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center">Portfolio</h1>
        </div>

        <div className="max-w-7xl mx-auto container mt-12 px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group relative">
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      width={500}
                      height={400}
                      layout="responsive"
                      objectFit="cover"
                      className="transition-opacity duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white bg-opacity-75 py-2 px-4 rounded-lg">
                      <h2 className="text-lg font-semibold mb-2">
                        {project.name}
                      </h2>
                      <p className="text-gray-600 hidden md:block">
                        {project.description}
                      </p>
                      <HiOutlineExternalLink className="text-gray-500 text-xl ml-2" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mb-5">
          <a
            href="/portfolio"
            className="text-lg font-semibold text-gray-700 hover:text-gray-900"
          >
            View More Projects
          </a>
        </div>
      </section> */}

      <section>
        <div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-40 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700 mt-12"></hr>
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-700 dark:text-gray-300"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center">Portfolio</h1>
        </div>

        <div className="max-w-7xl mx-auto container mt-12 px-4 pb-16 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {projects.map((project) => (
      <div key={project._id} className="group relative">
        <Link href={`/projects/${project.slug.current}`}  rel="noopener noreferrer">
          <div className="rounded-lg overflow-hidden h-64 md:h-80">
            <Image
              src={project.image?.asset.url}
              alt={project.title}
              layout="fill"
              className="transition-opacity duration-300 h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-white bg-opacity-75 py-2 px-4 rounded-lg max-w-full w-full">
              <h2 className="text-lg font-semibold mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
                {project.title}
              </h2>
              <p className="text-gray-600 hidden md:block ">
                {project.shortDescription}
              </p>
              <HiOutlineExternalLink className="text-gray-500 text-xl ml-2" />
            </div>
          </div>
        </Link>
      </div>
    ))}
  </div>
</div>


        <div className="text-center mb-5 max-w-7xl mx-auto text-right">
          <Link
            href="/projects"
            className="text-lg font-semibold text-blue-700 hover:text-gray-900"
          >
            View More Projects &rarr;
          </Link>
        </div>
      </section>

      <section className="home-testimonial">
        <div className="bg-blue-200 w-full px-4 py-11">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 pt-8">
            Testimonials
          </h1>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="rounded-lg lg:p-24 p-16 shadow-lg flex flex-col lg:flex-row items-center mb-8 md:mb-0">
              <div className="flex-shrink-0">
                <Image
                  src="/images/Joseph-Anselm-1.png"
                  alt="John Doe"
                  className="rounded-full w-12 h-12 lg:w-16 lg:h-16 lg:mr-4 lg:self-center"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mt-4 lg:mt-0 text-center lg:text-left">
                <p className="text-gray-800 text-lg font-bold mb-2">John Doe</p>
                <p className="text-gray-600 text-sm">
                  &quot; Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.&ldquo;
                </p>
              </div>
            </div>

            <div className="rounded-lg lg:p-24 p-16 shadow-lg flex flex-col lg:flex-row items-center mb-8 md:mb-0">
              <div className="flex-shrink-0">
                <Image
                  src="/images/Joseph-Anselm-1.png"
                  alt="John Doe"
                  className="rounded-full w-12 h-12 lg:w-16 lg:h-16 lg:mr-4 lg:self-center"
                  width={50}
                  height={50}
                />
              </div>
              <div className="mt-4 lg:mt-0 text-center lg:text-left">
                <p className="text-gray-800 text-lg font-bold mb-2">John Doe</p>
                <p className="text-gray-600 text-sm">
                  &quot; Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.&ldquo;
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-top-1680109549">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* <section className="featured-post">
        <div className="bg-white w-full px-4 py-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Featured Posts
          </h1>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 shadow-lg flex flex-col items-center">
              <Image
                src="/images/Joseph-Anselm-1.png"
                alt="Post 1"
                className="rounded-lg mb-4"
                width={500}
                height={400}
              />
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Post 1 Title
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Read More
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 shadow-lg flex flex-col items-center">
              <Image
                src="/images/Joseph-Anselm-1.png"
                alt="Post 2"
                className="rounded-lg mb-4"
                width={500}
                height={400}
              />
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Post 2 Title
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Read More
              </a>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 shadow-lg flex flex-col items-center">
              <Image
                src="/images/Joseph-Anselm-1.png"
                alt="Post 3"
                className="rounded-lg mb-4"
                width={500}
                height={400}
              />
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                Post 3 Title
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto text-right mt-8">
            <a href="#" className="text-blue-500 hover:text-blue-700 font-bold">
              More Posts &rarr;
            </a>
          </div>
        </div>
      </section> */}

      <section className="featured-post">
        <div className="bg-white w-full px-4 py-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Featured Posts
          </h1>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <div
                key={post._id}
                className="bg-gray-100 rounded-lg p-4 shadow-lg flex flex-col items-center"
              >
                <div
                  className="w-full h-80 bg-cover bg-center rounded-lg mb-4"
                  style={{
                    backgroundImage: `url(${post.featuredImage.asset.url})`,
                  }}
                ></div>
                <div className="flex flex-col items-center justify-between h-full">
                  <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-800 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-2">
                      {post.excerpt.slice(0, 150)}...
                    </p>
                  </div>
                  <div className="mt-auto mb-2">
                    <a
                      href={`/blog/${post.slug.current}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto text-right mt-8">
            <Link
              href="/blog"
              className="text-blue-500 hover:text-blue-700 font-bold"
            >
              More Posts &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
