// import Image from 'next/image'
// import client from '@/client';
// import { useEffect, useState } from "react";
// import Link from 'next/link';
// import HeroSection from '@/components/herosection';
// import Share from '@/components/share';

// export default function BlogList() {
//   const [blogPosts, setBlogPosts] = useState([]);

//   useEffect(() => {
//     const fetchBlogPosts = async () => {
//       const data = await client.fetch(
//         `*[_type == "blogPost"]{
//           _id,
//           title,          
//           slug,                   
//           body,
//           excerpt,
//           "authorName": author->name,
//           featuredImage{
//             asset->{
//               _id,
//               url,
//             },
//             alt
//           },
//           _createdAt
//         } | order(_createdAt desc)`
//       );
//       setBlogPosts(data);
//     };

//     fetchBlogPosts();
//   }, []);

//   return (
//     <>
//       <HeroSection title="My Thoughts, Blogs and Update :)" image="/images/jojoblog.png" />
//       <section className="featured-post">
//         <div className="bg-white w-full px-4 py-8">
//           <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//             Blog Posts
//           </h1>
//           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {blogPosts.map((post) => (
//               <div
//                 key={post._id}
//                 className="bg-gray-100 rounded-lg p-4 shadow-lg flex flex-col items-center"
//               >
//                 <div
//                   className="w-full h-80 bg-cover bg-center rounded-lg mb-4"
//                   style={{
//                     backgroundImage: `url(${post.featuredImage.asset.url})`,
//                   }}
//                 ></div>
//                 <div className="flex flex-col items-center justify-between h-full">
//                   <div className="text-center">
//                     <h2 className="text-lg font-bold text-gray-800 mb-2">
//                       {post.title}
//                     </h2>
//                     <p className="text-gray-600 text-sm mb-2">
//                       {post.excerpt.slice(0, 150)}...
//                     </p>
//                     <Share post={post} />
//                   </div>
//                   <div className="mt-auto mb-2">
//                     <Link
//                       href={`/blog/${post.slug.current}`}
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                       Read More
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


import Image from 'next/image';
import client from '@/client';
import { useEffect, useState } from "react";
import Link from 'next/link';
import HeroSection from '@/components/herosection';
import Share from '@/components/share';

export default function BlogList() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

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
          _createdAt
        } | order(_createdAt desc)`
      );
      setBlogPosts(data);
    };

    fetchBlogPosts();
  }, []);

  const loadMorePosts = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 6);
      setIsLoadingMore(false);
    }, 1000);
  };

  return (
    <>
      <HeroSection title="My Thoughts, Blogs and Update :)" image="/images/jojoblog.png" />
      <section className="featured-post">
        <div className="bg-white w-full px-4 py-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Blog Posts
          </h1>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.slice(0, visiblePosts).map((post) => (
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
                  <Share post={post} />
                </div>
                <div className="mt-auto mb-2">
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            ))}
          </div>
          {visiblePosts < blogPosts.length && (
            <div className="flex justify-center mt-4">
              <button
                onClick={loadMorePosts}
                className="text-sm text-blue-500 border border-blue-500 hover:border-blue-500 hover:bg-blue-500 text-black hover:text-black font-bold py-1 px-3 rounded"
                disabled={isLoadingMore}
              >
                {isLoadingMore ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}



// import Image from 'next/image';
// import client from '@/client';
// import { useEffect, useState } from "react";
// import Link from 'next/link';
// import HeroSection from '@/components/herosection';
// import Share from '@/components/share';

// export default function BlogList() {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [visiblePosts, setVisiblePosts] = useState(6);
//   const [isLoadingMore, setIsLoadingMore] = useState(false);

//   useEffect(() => {
//     const fetchBlogPosts = async () => {
//       const data = await client.fetch(
//         `*[_type == "blogPost"]{
//           _id,
//           title,          
//           slug,                   
//           body,
//           excerpt,
//           "authorName": author->name,
//           featuredImage{
//             asset->{
//               _id,
//               url,
//             },
//             alt
//           },
//           _createdAt
//         } | order(_createdAt desc)`
//       );
//       setBlogPosts(data);
//     };

//     fetchBlogPosts();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
//       if (isScrolledToBottom && !isLoadingMore && visiblePosts < blogPosts.length) {
//         loadMorePosts();
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [isLoadingMore, visiblePosts, blogPosts]);

//   const loadMorePosts = () => {
//     setIsLoadingMore(true);
//     setTimeout(() => {
//       setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 6);
//       setIsLoadingMore(false);
//     }, 1000);
//   };

//   return (
//     <>
//       <HeroSection title="My Thoughts, Blogs and Update :)" image="/images/jojoblog.png" />
//       <section className="featured-post">
//         <div className="bg-white w-full px-4 py-8">
//           <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//             Blog Posts
//           </h1>
//           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {blogPosts.slice(0, visiblePosts).map((post) => (
//               <div
//               key={post._id}
//               className="bg-gray-100 rounded-lg p-4 shadow-lg flex flex-col items-center"
//             >
//               <div
//                 className="w-full h-80 bg-cover bg-center rounded-lg mb-4"
//                 style={{
//                   backgroundImage: `url(${post.featuredImage.asset.url})`,
//                 }}
//               ></div>
//               <div className="flex flex-col items-center justify-between h-full">
//                 <div className="text-center">
//                   <h2 className="text-lg font-bold text-gray-800 mb-2">
//                     {post.title}
//                   </h2>
//                   <p className="text-gray-600 text-sm mb-2">
//                     {post.excerpt.slice(0, 150)}...
//                   </p>
//                   <Share post={post} />
//                 </div>
//                 <div className="mt-auto mb-2">
//                   <Link
//                     href={`/blog/${post.slug.current}`}
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             ))}
//           </div>
//           {isLoadingMore && <p className="text-center">Loading...</p>}
//         </div>
//       </section>
//     </>
//   );
// }
