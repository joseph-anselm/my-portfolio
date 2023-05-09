import Image from 'next/image'
import sanityClient from "@/client";
import { useEffect, useState } from "react";
import client from '@/client';


export default function BlogList()  {

const [blogPosts, setBlogPosts] = useState([]);


  useEffect(() => {
    const fetchBlogPosts = async () => {
      const data = await client.fetch(
        `*[_type == "blogPost"]{
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
    };  fetchBlogPosts();
    
  }, []);
  return (
    <>
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
            <a
              href="/blog"
              className="text-blue-500 hover:text-blue-700 font-bold"
            >
              More Posts &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


