import { useRouter } from "next/router";
import Image from "next/image";
import sanityClient from "@/client";
import BlockContent from "@sanity/block-content-to-react";

const BlogPostPage = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="md:w-1/2 mr-8">
          <Image
            src={post.featuredImage.asset.url}
            alt={post.featuredImage.alt}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500">Author: {post.authorName}</p>
        </div>
      </div>

      <div className="prose max-w-none">
        <BlockContent
          blocks={post.body}
          imageOptions={{ w: 640, h: 480, fit: "max" }}
        />
      </div>
    </div>
  );
};

export default BlogPostPage;

export async function getStaticPaths() {
  const posts = await sanityClient.fetch('*[_type == "blogPost"]{ slug }');

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const post = await sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug]{
      _id,
      title,
      body,
      "authorName": author->name,
      featuredImage{
        asset->{
          _id,
          url,
        },
        alt
      },
    }[0]`,
    { slug }
  );

  return {
    props: { post },
    revalidate: 1,
  };
}
