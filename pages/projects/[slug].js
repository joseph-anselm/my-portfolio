import Image from 'next/image';
import sanityClient from '@/client';
import { useRouter } from 'next/router';
import client from '@/client';

export default function Project({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-5">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold mb-6">{project.title}</h1>
        
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10">
        <div className="rounded-lg overflow-hidden h-96 md:w-1/2 relative">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="contain"
            className="transition-opacity duration-300"
          />
        </div>

        <div className="flex flex-col mt-10 md:w-1/2">
          <div className="mb-10">
            <p className="text-gray-600">{project.longDescription}</p>
          </div>

          <div className="mt-10 space-x-4">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                View Project
              </button>
            </a>

            <button
              onClick={() => router.back()}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths(params) {
  
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
