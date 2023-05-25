import React from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from "react-share";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const Share = ({ post }) => {
  const shareUrl = `https://josephanselm.com/blog/${post?.slug?.current}`;
  const title = post?.title;

  return (
    <div className="flex justify-center items-center space-x-2">
      <FacebookShareButton url={shareUrl} quote={title}>
        <FaFacebookF className="hover:text-blue-700 transform hover:scale-150 transition duration-300" />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <FaTwitter className="hover:text-blue-700 transform hover:scale-150 transition duration-300" />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} title={title}>
        <FaLinkedin className="hover:text-blue-700 transform hover:scale-150 transition duration-300" />
      </LinkedinShareButton>
    </div>
  );
};

export default Share;



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