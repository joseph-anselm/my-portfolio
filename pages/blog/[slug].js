import { useRouter } from "next/router";
import Image from "next/image";
import sanityClient from "@/client";
import BlockContent from "@sanity/block-content-to-react";
import Share from "@/components/share";
import Link from "next/link";

const BlogPostPage = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading....</div>;
  }
  const title = post.title;

  

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
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
          <p className="text-gray-500">
            Category: <Link href="/blog">{post.categoryName}</Link>
          </p>
        </div>
      </div>

      <div className="prose max-w-none">
        <BlockContent
          blocks={post.body}
          imageOptions={{ w: 640, h: 480, fit: "max" }}
        />
      </div>

      <div className="mt-4 flex">
        <button
          onClick={() => {
            router.back();
          }}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Back to blog list
        </button>
        <Share post={post}/>
        
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
      slug,
      category,
      "categoryName":category->title,
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




// import { useRouter } from "next/router";
// import Image from "next/image";
// import sanityClient from "@/client";
// import BlockContent from "@sanity/block-content-to-react";
// import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
// import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';

// const BlogPostPage = ({ post }) => {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   const shareUrl = `https://your-blog-url.com/${post.slug?.current}`;
//   const title = post.title;

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-6">
//       <div className="flex items-center mb-4">
//         <div className="w-1/2 pr-4">
//           <Image
//             src={post.featuredImage.asset.url}
//             alt={post.featuredImage.alt}
//             width={600}
//             height={400}
//             objectFit="cover"
//           />
//         </div>
//         <div className="w-1/2">
//           <h1 className="text-3xl font-semibold">{post.title}</h1>
//         </div>
//       </div>
//       <BlockContent
//         blocks={post.body}
//         imageOptions={{ w: 320, h: 240, fit: "max" }}
//         className="mb-6"
//       />
//       <p>Author: {post.authorName}</p>
//       <div className="flex space-x-2 mt-6">
//         <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
//           <FaThumbsUp className="inline-block mr-1" /> Like
//         </button>
//         <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
//           <FaThumbsDown className="inline-block mr-1" /> Dislike
//         </button>
//       </div>
//       <div className="flex items-center mt-6">
//         <button
//           onClick={() => router.push("/blog")}
//           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         >
//           Back to Blog List
//         </button>
//         <div className="ml-auto flex space-x-2">
//           <FacebookShareButton url={shareUrl} quote={title}>
//             <i className="fab fa-facebook-f"></i>
//           </FacebookShareButton>
//           <TwitterShareButton url={shareUrl} title={title}>
//             <i className="fab fa-twitter"></i>
//           </TwitterShareButton>
//           <LinkedinShareButton url={shareUrl} title={title}>
//             <i className="fab fa-linkedin"></i>
//           </LinkedinShareButton>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPostPage;

// export async function getStaticPaths() {
//   const posts = await sanityClient.fetch('*[_type == "blogPost"]{ slug }');

//   const paths = posts.map((post) => ({
//     params: { slug: post.slug.current },
//   }));

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;

//   const post = await sanityClient.fetch(    `*[_type == "blogPost" && slug.current == $slug]{
//     _id,
//     title,
//     body,
//     "authorName": author->name,
//     featuredImage{
//       asset->{
//         _id,
//         url,
//       },
//       alt
//     },
//   }[0]`,
//   { slug }
// );

// return {
//   props: { post },
//   revalidate: 1,
// };
// }

   
