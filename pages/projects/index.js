import Image from 'next/legacy/image';
import Link from 'next/link';
import sanityClient from "@/client";
import { useEffect, useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import client from '@/client';
import HeroSection from '@/components/herosection';

export default function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await sanityClient.fetch(
        `*[_type == "project"]{
          _id,
          title,
          slug,          
          "imageUrl": image.asset->url,
          shortDescription,
          longDescription,
          url
        }`
      );
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <>
    <HeroSection title ="Quality, Professionalism, Competence." />
    <div className="max-w-7xl mx-auto py-5 px-2">
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <p className='mb-10'>Check out my portfolio of unique and captivating projects that showcase my passion for design and development. From dynamic web applications to interactive mobile apps, each project represents my dedication to delivering high-quality results that exceed expectations. Explore my portfolio and discover how I can help you bring your ideas to life</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="group relative">
            <Link href={`/projects/${project.slug?.current}`} legacyBehavior >
              <a>
                <div className="rounded-lg overflow-hidden h-64 md:h-80">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white bg-opacity-75 py-2 px-4 rounded-lg max-w-full w-full">
                    <h2 className="text-lg font-semibold mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 hidden md:block">
                      {project.shortDescription}
                    </p>
                    <HiOutlineExternalLink className="text-gray-500 text-xl ml-2" />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}


