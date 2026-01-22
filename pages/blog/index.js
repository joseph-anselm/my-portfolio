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
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" target='blank'
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             ))}
//           </div>
//           {visiblePosts < blogPosts.length && (
//             <div className="flex justify-center mt-4">
//               <button
//                 onClick={loadMorePosts}
//                 className="text-sm text-blue-500 border border-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-black font-bold py-1 px-3 rounded"
//                 disabled={isLoadingMore}
//               >
//                 {isLoadingMore ? "Loading..." : "Load More"}
//               </button>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }





import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Plus, 
  BookOpen,
  User,
  Share2
} from 'lucide-react';
import { SanityClient } from "next-sanity";
import client from "@/client";
import HeroSection from "@/components/herosection.js";

/**
 * Modernized Blog List Component
 * A professional, minimalist grid for showcasing insights and updates.
 */
export default function BlogList() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const data = await client.fetch(
          `*[_type == "blogPost"]{
            _id,
            title,          
            slug,                   
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
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const loadMorePosts = () => {
    setIsLoadingMore(true);
    // Artificial delay for UX smoothness
    setTimeout(() => {
      setVisiblePosts(prev => prev + 6);
      setIsLoadingMore(false);
    }, 800);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <HeroSection 
        title="Insights & Updates" 
        image="/images/Blogpic.jpg" 
      />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest border border-blue-100">
                <BookOpen size={12} />
                Knowledge Base
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-sora tracking-tight">
                Latest Articles
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed">
                Exploring the intersection of web engineering, cloud infrastructure, and the future of artificial intelligence.
              </p>
            </div>
          </div>

          {/* Blog Grid */}
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogPosts.slice(0, visiblePosts).map((post) => (
                <article
                  key={post._id}
                  className="group flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
                >
                  {/* Image Container */}
                  <Link href={`/blog/${post.slug.current}`} className="relative aspect-[16/10] overflow-hidden bg-slate-100 block">
                    <img
                      src={post.featuredImage?.asset?.url || "https://picsum.photos/seed/blog/800/500"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                    
                    {/* Share Action Overlay */}
                    <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                       <Share2 size={16} className="text-blue-600" />
                    </div>
                  </Link>

                  {/* Content Area */}
                  <div className="p-8 flex flex-col flex-1 space-y-5">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                       <div className="flex items-center gap-1.5">
                         <Calendar size={12} className="text-blue-500" />
                         {formatDate(post._createdAt)}
                       </div>
                       <div className="flex items-center gap-1.5">
                         <Clock size={12} className="text-blue-500" />
                         5 min read
                       </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-slate-900 font-sora group-hover:text-blue-600 transition-colors line-clamp-2">
                        <Link href={`/blog/${post.slug.current}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-light">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer Meta */}
                    <div className="pt-5 mt-auto border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 border border-slate-200">
                           <User size={12} />
                         </div>
                         <span className="text-[10px] font-bold text-slate-900 uppercase tracking-wider">{post.authorName}</span>
                      </div>
                      
                      <Link 
                        href={`/blog/${post.slug.current}`}
                        className="inline-flex items-center gap-1.5 text-xs font-black text-blue-600 uppercase tracking-widest group/link hover:gap-3 transition-all"
                      >
                        Read Article
                        <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Action */}
          {!loading && visiblePosts < blogPosts.length && (
            <div className="flex justify-center mt-20">
              <button
                onClick={loadMorePosts}
                disabled={isLoadingMore}
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoadingMore ? (
                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                    Load More Articles
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Accent */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-sora tracking-tight">Stay updated with my latest technical deep-dives.</h3>
           <p className="text-slate-500 font-light">Join a community of 500+ engineers receiving bi-weekly insights.</p>
           <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-2xl bg-white border border-slate-200 outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-slate-900"
              />
              <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                Subscribe
              </button>
           </form>
        </div>
      </section>
    </div>
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
