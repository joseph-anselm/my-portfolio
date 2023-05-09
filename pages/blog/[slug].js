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
    <div>
      <h1>{post.title}</h1>
      <div>
        <Image
          src={post.featuredImage.asset.url}
          alt={post.featuredImage.alt}
          width={600}
          height={400}
        />
      </div>
      <BlockContent
        blocks={post.body}
        imageOptions={{ w: 320, h: 240, fit: "max" }}
      />
      <p>Author: {post.authorName}</p>
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
