import Image from 'next/legacy/image';
import sanityClient from '@/client';
import { useRouter } from 'next/router';
import client from '@/client';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';

export default function Project({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-5 px-2">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold mb-6">{project.title}</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 items-start">
        <div className="rounded-lg overflow-hidden md:w-1/2 sm:w-full">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={600}
            height={400}
            className="rounded-lg"
              objectFit="contain"
              
            />
          </div>
        </div>

        <div className="flex flex-col mt-10 md:w-1/2">
          <div className="mb-10">
            <p className="text-gray-600">{project.longDescription}</p>
          </div>

          <div className="mt-10 flex space-x-4">
            {/* <a href={project.url} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                View Project
              </button>
            </a> */}


            <Link href={project.url} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  View Project url
                </button>
              </a>
            </Link>

            <button
              onClick={() => {
                console.log('Back button clicked');
                router.back();
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center"
            >
              <FiArrowLeft className="mr-2" />
              <span>Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const projects = await client.fetch(`*[_type == "project" && defined(slug.current)]`);

  const paths = projects.map((project) => ({
    params: { slug: project.slug?.current },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = await sanityClient.fetch(
    `*[_type == "project" && slug.current == $slug]{
      title,
      slug,
      "imageUrl": image.asset->url,
      longDescription,
      url
    } [0]`,
    { slug }
  );

  return {
    props: { project },
    revalidate: 1,
  };
}
