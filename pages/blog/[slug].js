// // import { useRouter } from "next/router";
// // import Image from "next/image";
// // import sanityClient from "@/client";
// // import BlockContent from "@sanity/block-content-to-react";
// // import Share from "@/components/share";
// // import Link from "next/link";

// // const BlogPostPage = ({ post }) => {
// //   const router = useRouter();

// //   if (router.isFallback) {
// //     return <div>Loading....</div>;
// //   }
// //   const title = post.title;

  

// //   return (
// //     <div className="container max-w-7xl mx-auto px-4 py-8">
// //       <div className="flex flex-col md:flex-row items-center justify-between mb-8">
// //         <div className="md:w-1/2 mr-8">
// //           <Image
// //             src={post.featuredImage.asset.url}
// //             alt={post.featuredImage.alt}
// //             width={600}
// //             height={400}
// //             className="rounded-lg"
// //           />
// //         </div>
// //         <div className="md:w-1/2">
// //           <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
// //           <p className="text-gray-500">Author: {post.authorName}</p>
// //           <p className="text-gray-500">
// //             Category: <Link href="/blog">{post.categoryName}</Link>
// //           </p>
// //         </div>
// //       </div>

// //       <div className="prose max-w-none">
// //         <BlockContent
// //           blocks={post.body}
// //           imageOptions={{ w: 640, h: 480, fit: "max" }}
// //         />
// //       </div>

// //       <div className="mt-4 flex">
// //         <button
// //           onClick={() => {
// //             router.back();
// //           }}
// //           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
// //         >
// //           Back to blog list
// //         </button>
// //         <Share post={post}/>
        
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogPostPage;


// // export async function getStaticPaths() {
// //   const posts = await sanityClient.fetch('*[_type == "blogPost"]{ slug }');

// //   const paths = posts.map((post) => ({
// //     params: { slug: post.slug.current },
// //   }));

// //   return {
// //     paths,
// //     fallback: true,
// //   };
// // }

// // export async function getStaticProps({ params }) {
// //   const { slug } = params;

// //   const post = await sanityClient.fetch(
// //     `*[_type == "blogPost" && slug.current == $slug]{
// //       _id,
// //       title,
// //       slug,
// //       category,
// //       "categoryName":category->title,
// //       body,
// //       "authorName": author->name,
// //       featuredImage{
// //         asset->{
// //           _id,
// //           url,
// //         },
// //         alt
// //       },
// //     }[0]`,
// //     { slug }
// //   );

// //   return {
// //     props: { post },
// //     revalidate: 1,
// //   };
// // }






// // import React from "react";
// // import { useRouter } from "next/router";
// // import Image from "next/image";
// // import { PortableText } from "@/lib/sanity";
// // import sanityClient from "@/client";
// // import BlockContent from "@sanity/block-content-to-react";
// // import Share from "@/components/share";
// // import Link from "next/link";
// // import { 
// //   ArrowLeft, 
// //   User, 
// //   Tag, 
// //   Calendar, 
// //   Clock, 
// //   ChevronRight,
// //   Bookmark
// // } from "lucide-react";

// // const BlogPostPage = ({ post }) => {
// //   const router = useRouter();

// //   if (router.isFallback) {
// //     return (
// //       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
// //         <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
// //         <p className="text-slate-500 font-medium animate-pulse">Fetching the latest insights...</p>
// //       </div>
// //     );
// //   }

// //   if (!post) return null;

// //   return (
// //     <article className="min-h-screen bg-white">
// //       {/* 1. Top Navigation / Progress Hint */}
// //       <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6">
// //         <div className="max-w-5xl mx-auto flex items-center justify-between">
// //           <button
// //             onClick={() => router.back()}
// //             className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-all group"
// //           >
// //             <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
// //             <span className="hidden sm:inline">Back to Blog</span>
// //           </button>
          
// //           <div className="flex items-center gap-3">
// //              <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 uppercase tracking-widest font-bold">
// //                 <Link href="/" className="hover:text-blue-600">Home</Link>
// //                 <ChevronRight size={12} />
// //                 <Link href="/blog" className="hover:text-blue-600">Blog</Link>
// //              </div>
// //              <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
// //                 <Bookmark size={20} />
// //              </button>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* 2. Content Header */}
// //       <header className="pt-16 pb-12 px-6">
// //         <div className="max-w-4xl mx-auto text-center space-y-8">
// //           {/* Category Badge */}
// //           <Link href="/blog" legacyBehavior>
// //             <a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all">
// //               <Tag size={12} />
// //               {post.categoryName}
// //             </a>
// //           </Link>

// //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] font-sora tracking-tight">
// //             {post.title}
// //           </h1>

// //           {/* Meta Bar */}
// //           <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-slate-500 text-sm font-medium pt-4 border-y border-slate-50 py-6">
// //             <div className="flex items-center gap-3 group">
// //               <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-200">
// //                 <User size={18} />
// //               </div>
// //               <span className="text-slate-900 font-bold">{post.authorName}</span>
// //             </div>
            
// //             <div className="flex items-center gap-2">
// //               <Calendar size={18} className="text-blue-500" />
// //               <span>Oct 24, 2023</span>
// //             </div>

// //             <div className="flex items-center gap-2">
// //               <Clock size={18} className="text-blue-500" />
// //               <span>8 min read</span>
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* 3. Featured Image Container */}
// //       <div className="max-w-7xl mx-auto px-6 mb-16">
// //         <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-slate-50">
// //           <Image
// //             src={post.featuredImage.asset.url}
// //             alt={post.featuredImage.alt || post.title}
// //             layout="fill"
// //             objectFit="cover"
// //             className="hover:scale-105 transition-transform duration-1000 ease-out"
// //             priority
// //           />
// //         </div>
// //       </div>

// //       {/* 4. Article Body */}
// //       <div className="max-w-7xl mx-auto px-6">
// //         <div className="prose prose-lg prose-slate prose-headings:font-sora prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-[1.8] prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-img:rounded-3xl prose-strong:text-slate-900 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl max-w-none">
// //          <PortableText
// //   value={post.body}
// //   components={{
// //     types: {
// //       image: ({ value }) => (
// //         <Image
// //           src={value.asset.url}
// //           alt={value.alt || ''}
// //           width={1000}
// //           height={750}
// //           className="rounded-3xl my-8"
// //         />
// //       ),
// //     },
// //     marks: {
// //       strong: ({ children }) => <strong className="text-slate-900">{children}</strong>,
// //       em: ({ children }) => <em>{children}</em>,
// //       link: ({ children, value }) => (
// //         <a href={value.href} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">
// //           {children}
// //         </a>
// //       ),
// //     },
// //     block: {
// //       h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold my-4">{children}</h1>,
// //       h2: ({ children }) => <h2 className="text-3xl font-semibold my-3">{children}</h2>,
// //       h3: ({ children }) => <h3 className="text-2xl font-semibold my-2">{children}</h3>,
// //       normal: ({ children }) => <p className="my-2 leading-7 text-slate-600">{children}</p>,
// //       blockquote: ({ children }) => (
// //         <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg my-4">{children}</blockquote>
// //       ),
// //     },
// //     list: {
// //       bullet: ({ children }) => <ul className="list-disc ml-8 my-2">{children}</ul>,
// //       number: ({ children }) => <ol className="list-decimal ml-8 my-2">{children}</ol>,
// //     },
// //   }}
// // />

// //         </div>

// //         {/* 5. Article Footer */}
// //         <div className="mt-20 pt-12 border-t border-slate-100">
// //           <div className="flex flex-col sm:flex-row items-center justify-between gap-8 bg-slate-50 rounded-3xl p-8">
// //             <div className="space-y-2 text-center sm:text-left">
// //               <h4 className="font-bold text-slate-900 font-sora">Share this article</h4>
// //               <p className="text-sm text-slate-500">Spread the knowledge with your network.</p>
// //             </div>
// //             <div className="flex items-center gap-4">
// //                <Share post={post}/>
// //             </div>
// //           </div>

// //           <div className="mt-12 flex justify-center">
// //             <button
// //               onClick={() => router.back()}
// //               className="px-10 py-4 rounded-2xl bg-white border-2 border-slate-100 text-slate-600 font-bold hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm active:scale-95 flex items-center gap-3"
// //             >
// //               <ArrowLeft size={20} />
// //               Return to Blog Feed
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* 6. Newsletter / CTA */}
// //       <section className="max-w-7xl mx-auto px-6 my-24">
// //         <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
// //           {/* Decorative shapes */}
// //           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
// //           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
// //           <div className="relative z-10 space-y-6">
// //             <h3 className="text-3xl md:text-4xl font-bold text-white font-sora">Never miss a tech update</h3>
// //             <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
// //               Get the latest insights on AI, Cloud Computing, and Web Development Trends delivered straight to your inbox.
// //             </p>
// //             <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
// //               <input 
// //                 type="email" 
// //                 placeholder="you@example.com" 
// //                 className="flex-1 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
// //               />
// //               <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95">
// //                 Subscribe
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </section>
// //     </article>
// //   );
// // };

// // export default BlogPostPage;

// // export async function getStaticPaths() {
// //   const posts = await sanityClient.fetch('*[_type == "blogPost"]{ slug }');

// //   const paths = posts.map((post) => ({
// //     params: { slug: post.slug.current },
// //   }));

// //   return {
// //     paths,
// //     fallback: true,
// //   };
// // }

// // export async function getStaticProps({ params }) {
// //   const { slug } = params;

// //   const post = await sanityClient.fetch(
// //     `*[_type == "blogPost" && slug.current == $slug]{
// //       _id,
// //       title,
// //       slug,
// //       category,
// //       "categoryName":category->title,
// //       body,
// //       "authorName": author->name,
// //       featuredImage{
// //         asset->{
// //           _id,
// //           url,
// //         },
// //         alt
// //       },
// //     }[0]`,
// //     { slug }
// //   );

// //   return {
// //     props: { post },
// //     revalidate: 1,
// //   };
// // }


// // blog/[slug].js - Complete fixed file
// import React from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { PortableText } from "@/lib/sanity";
// import sanityClient from "@/client";
// import BlockContent from "@sanity/block-content-to-react";
// import Share from "@/components/share";
// import Link from "next/link";
// import { generateBlogPostSEO } from '@/lib/seo';
// import Layout from "@/components/layouts";
// import { 
//   ArrowLeft, 
//   User, 
//   Tag, 
//   Calendar, 
//   Clock, 
//   ChevronRight,
//   Bookmark
// } from "lucide-react";

// // Import the new components
// import ReactionButtons from "@/components/ReactionButtons";
// import CommentsSection from "@/components/CommentsSection";

// const BlogPostPage = ({ post }) => {
//   const router = useRouter();

//   if (router.isFallback) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
//         <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
//         <p className="text-slate-500 font-medium animate-pulse">Fetching the latest insights...</p>
//       </div>
//     );
//   }

//   if (!post) return null;

//   return (
//     <Layout seo={generateBlogPostSEO(post)}>
//     <article className="min-h-screen bg-white">
//       {/* 1. Top Navigation / Progress Hint */}
//       <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6">
//         <div className="max-w-5xl mx-auto flex items-center justify-between">
//           <button
//             onClick={() => router.back()}
//             className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-all group"
//           >
//             <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
//             <span className="hidden sm:inline">Back to Blog</span>
//           </button>
          
//           <div className="flex items-center gap-3">
//              <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 uppercase tracking-widest font-bold">
//                 <Link href="/" className="hover:text-blue-600">Home</Link>
//                 <ChevronRight size={12} />
//                 <Link href="/blog" className="hover:text-blue-600">Blog</Link>
//              </div>
//              <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
//                 <Bookmark size={20} />
//              </button>
//           </div>
//         </div>
//       </nav>

//       {/* 2. Content Header */}
//       <header className="pt-16 pb-12 px-6">
//         <div className="max-w-4xl mx-auto text-center space-y-8">
//           {/* Category Badge */}
//           <Link href="/blog" legacyBehavior>
//             <a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all">
//               <Tag size={12} />
//               {post.categoryName}
//             </a>
//           </Link>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] font-sora tracking-tight">
//             {post.title}
//           </h1>

//           {/* Meta Bar */}
//           <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-slate-500 text-sm font-medium pt-4 border-y border-slate-50 py-6">
//             <div className="flex items-center gap-3 group">
//               <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-200">
//                 <User size={18} />
//               </div>
//               <span className="text-slate-900 font-bold">{post.authorName}</span>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <Calendar size={18} className="text-blue-500" />
//               <span>Oct 24, 2023</span>
//             </div>

//             <div className="flex items-center gap-2">
//               <Clock size={18} className="text-blue-500" />
//               <span>8 min read</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* 3. Featured Image Container */}
//       <div className="max-w-7xl mx-auto px-6 mb-16">
//         <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-slate-50">
//           <Image
//             src={post.featuredImage.asset.url}
//             alt={post.featuredImage.alt || post.title}
//             layout="fill"
//             objectFit="cover"
//             className="hover:scale-105 transition-transform duration-1000 ease-out"
//             priority
//           />
//         </div>
//       </div>

//       {/* 4. Article Body */}
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="prose prose-lg prose-slate prose-headings:font-sora prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-[1.8] prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-img:rounded-3xl prose-strong:text-slate-900 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl max-w-none">
//           <PortableText
//             value={post.body}
//             components={{
//               types: {
//                 image: ({ value }) => (
//                   <Image
//                     src={value.asset.url}
//                     alt={value.alt || ''}
//                     width={1000}
//                     height={750}
//                     className="rounded-3xl my-8"
//                   />
//                 ),
//               },
//               marks: {
//                 strong: ({ children }) => <strong className="text-slate-900">{children}</strong>,
//                 em: ({ children }) => <em>{children}</em>,
//                 link: ({ children, value }) => (
//                   <a href={value.href} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">
//                     {children}
//                   </a>
//                 ),
//               },
//               block: {
//                 h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold my-4">{children}</h1>,
//                 h2: ({ children }) => <h2 className="text-3xl font-semibold my-3">{children}</h2>,
//                 h3: ({ children }) => <h3 className="text-2xl font-semibold my-2">{children}</h3>,
//                 normal: ({ children }) => <p className="my-2 leading-7 text-slate-600">{children}</p>,
//                 blockquote: ({ children }) => (
//                   <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg my-4">{children}</blockquote>
//                 ),
//               },
//               list: {
//                 bullet: ({ children }) => <ul className="list-disc ml-8 my-2">{children}</ul>,
//                 number: ({ children }) => <ol className="list-decimal ml-8 my-2">{children}</ol>,
//               },
//             }}
//           />
//         </div>

//         {/* Add Reaction Buttons after article content */}
//         <div className="mt-12 pt-8 border-t border-slate-100">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//             <div>
//               <h4 className="text-lg font-bold text-slate-900 mb-2">
//                 Was this article helpful?
//               </h4>
//               <p className="text-slate-500 text-sm">
//                 Let us know your thoughts
//               </p>
//             </div>
//             {post._id && (
//               <ReactionButtons 
//                 postId={post._id} 
//                 initialCounts={post.reactionCounts || { likes: 0, dislikes: 0 }}
//               />
//             )}
//           </div>
//         </div>

//         {/* 5. Article Footer */}
//         <div className="mt-20 pt-12 border-t border-slate-100">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-8 bg-slate-50 rounded-3xl p-8">
//             <div className="space-y-2 text-center sm:text-left">
//               <h4 className="font-bold text-slate-900 font-sora">Share this article</h4>
//               <p className="text-sm text-slate-500">Spread the knowledge with your network.</p>
//             </div>
//             <div className="flex items-center gap-4">
//                <Share post={post}/>
//             </div>
//           </div>

//           <div className="mt-12 flex justify-center">
//             <button
//               onClick={() => router.back()}
//               className="px-10 py-4 rounded-2xl bg-white border-2 border-slate-100 text-slate-600 font-bold hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm active:scale-95 flex items-center gap-3"
//             >
//               <ArrowLeft size={20} />
//               Return to Blog Feed
//             </button>
//           </div>
//         </div>

//         {/* 6. Comments Section */}
//         {post._id && <CommentsSection postId={post._id} />}

//         {/* 7. Newsletter / CTA */}
//         <section className="max-w-7xl mx-auto px-6 my-24">
//           <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
//             {/* Decorative shapes */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
//             <div className="relative z-10 space-y-6">
//               <h3 className="text-3xl md:text-4xl font-bold text-white font-sora">Never miss a tech update</h3>
//               <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
//                 Get the latest insights on AI, Cloud Computing, and Web Development Trends delivered straight to your inbox.
//               </p>
//               <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
//                 <input 
//                   type="email" 
//                   placeholder="you@example.com" 
//                   className="flex-1 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 />
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95">
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </div>
//     </article>
//     </Layout>
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

// // export async function getStaticProps({ params }) {
// //   const { slug } = params;

// //   // First, fetch the post
// //   const post = await sanityClient.fetch(
// //     `*[_type == "blogPost" && slug.current == $slug]{
// //       _id,
// //       title,
// //       slug,
// //       category,
// //       "categoryName":category->title,
// //       body,
// //       "authorName": author->name,
// //       featuredImage{
// //         asset->{
// //           _id,
// //           url,
// //         },
// //         alt
// //       },
// //     }[0]`,
// //     { slug }
// //   );

// //   // If no post found, return 404
// //   if (!post) {
// //     return {
// //       notFound: true,
// //     };
// //   }

// //   // Then fetch reaction counts for this post
// //   const reactionCounts = await sanityClient.fetch(
// //     `{
// //       "likes": count(*[_type == "reaction" && post._ref == $postId && type == "like"]),
// //       "dislikes": count(*[_type == "reaction" && post._ref == $postId && type == "dislike"])
// //     }`,
// //     { postId: post._id }
// //   );

// //   return {
// //     props: { 
// //       post: {
// //         ...post,
// //         reactionCounts
// //       }
// //     },
// //     revalidate: 1,
// //   };
// // }

// // pages/blog/[slug].js - Updated getStaticProps
// export async function getStaticProps({ params }) {
//   const { slug } = params;

//   try {
// const post = await sanityClient.fetch(
//   `*[_type == "blogPost" && slug.current == $slug][0]{
//     _id,
//     title,
//     slug,
//     body,
//     publishedAt,
//     _updatedAt,

//     "categoryName": coalesce(category->title, "General"),
//     "authorName": coalesce(author->name, "Editorial Team"),

//     featuredImage{
//       asset->{ _id, url },
//       alt
//     }
//   }`,
//   { slug }
// );


//     // If no post found, return 404
//     if (!post) {
//       console.log(`Post not found for slug: ${slug}`);
//       return {
//         notFound: true,
//       };
//     }

//     // Check for missing required fields
//     if (!post.featuredImage || !post.featuredImage.asset || !post.featuredImage.asset.url) {
//       console.warn(`Post ${slug} has missing featuredImage`, post);
//       // Add a fallback image or handle gracefully
//       post.featuredImage = post.featuredImage || {
//         asset: {
//           url: '/images/fallback-blog.jpg',
//           alt: 'Default blog image'
//         }
//       };
//     }

//     // Fetch reaction counts with error handling
//     let reactionCounts = { likes: 0, dislikes: 0 };
//     try {
//       reactionCounts = await sanityClient.fetch(
//         `{
//           "likes": count(*[_type == "reaction" && post._ref == $postId && type == "like"]),
//           "dislikes": count(*[_type == "reaction" && post._ref == $postId && type == "dislike"])
//         }`,
//         { postId: post._id }
//       ) || { likes: 0, dislikes: 0 };
//     } catch (reactionError) {
//       console.error('Error fetching reaction counts:', reactionError);
//       // Continue with default counts
//     }

//     return {
//       props: { 
//         post: {
//           ...post,
//           reactionCounts
//         }
//       },
//       revalidate: 60, // Reduce revalidation time for debugging
//     };
//   } catch (error) {
//     console.error(`Error fetching post ${slug}:`, error);
    
//     // Return a fallback or error page
//     return {
//       props: {
//         error: error.message,
//         slug
//       },
//       revalidate: 1,
//     };
//   }
// }




// // pages/blog/[slug].js - COMPLETELY FIXED VERSION
// import React from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { PortableText } from "@portabletext/react";
// import sanityClient from "@/client";
// import Share from "@/components/share";
// import Link from "next/link";
// import { generateBlogPostSEO } from '@/lib/seo';
// import Layout from "@/components/layouts";
// import { 
//   ArrowLeft, 
//   User, 
//   Tag, 
//   Calendar, 
//   Clock, 
//   ChevronRight,
//   Bookmark
// } from "lucide-react";

// // Import components with error boundary
// import ReactionButtons from "@/components/ReactionButtons";
// import CommentsSection from "@/components/CommentsSection";

// const BlogPostPage = ({ post, error }) => {
//   const router = useRouter();

//   // Loading state
//   if (router.isFallback) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
//         <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
//         <p className="text-slate-500 font-medium animate-pulse">Fetching the latest insights...</p>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
//         <div className="max-w-md text-center">
//           <h1 className="text-4xl font-bold text-slate-900 mb-4">Oops!</h1>
//           <p className="text-slate-600 mb-8">Something went wrong loading this post.</p>
//           <Link href="/blog">
//             <a className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
//               <ArrowLeft size={20} />
//               Back to Blog
//             </a>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Post not found
//   if (!post) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
//         <div className="max-w-md text-center">
//           <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
//           <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
//           <Link href="/blog">
//             <a className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
//               <ArrowLeft size={20} />
//               Back to Blog
//             </a>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Format date safely
//   const formatDate = (dateString) => {
//     if (!dateString) return "Recently";
//     try {
//       return new Date(dateString).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//       });
//     } catch (e) {
//       return "Recently";
//     }
//   };

//   // Calculate read time
//   const calculateReadTime = (body) => {
//     if (!body || !Array.isArray(body)) return "5 min read";
//     const wordCount = body.reduce((count, block) => {
//       if (block._type === 'block' && block.children) {
//         return count + block.children.reduce((c, child) => 
//           c + (child.text ? child.text.split(' ').length : 0), 0);
//       }
//       return count;
//     }, 0);
//     const minutes = Math.ceil(wordCount / 200);
//     return `${minutes} min read`;
//   };

//   const seoData = post ? generateBlogPostSEO(post) : {};

//   return (
//     <Layout seo={seoData}>
//       <article className="min-h-screen bg-white">
//         {/* Top Navigation */}
//         <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6">
//           <div className="max-w-5xl mx-auto flex items-center justify-between">
//             <button
//               onClick={() => router.back()}
//               className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-all group"
//             >
//               <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
//               <span className="hidden sm:inline">Back to Blog</span>
//             </button>
            
//             <div className="flex items-center gap-3">
//               <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 uppercase tracking-widest font-bold">
//                 <Link href="/">
//                   <a className="hover:text-blue-600">Home</a>
//                 </Link>
//                 <ChevronRight size={12} />
//                 <Link href="/blog">
//                   <a className="hover:text-blue-600">Blog</a>
//                 </Link>
//               </div>
//               <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
//                 <Bookmark size={20} />
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Content Header */}
//         <header className="pt-16 pb-12 px-6">
//           <div className="max-w-4xl mx-auto text-center space-y-8">
//             {/* Category Badge */}
//             {post.categoryName && (
//               <Link href="/blog">
//                 <a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all">
//                   <Tag size={12} />
//                   {post.categoryName}
//                 </a>
//               </Link>
//             )}

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
//               {post.title}
//             </h1>

//             {/* Meta Bar */}
//             <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-slate-500 text-sm font-medium pt-4 border-y border-slate-50 py-6">
//               {post.authorName && (
//                 <div className="flex items-center gap-3 group">
//                   <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-200">
//                     <User size={18} />
//                   </div>
//                   <span className="text-slate-900 font-bold">{post.authorName}</span>
//                 </div>
//               )}
              
//               <div className="flex items-center gap-2">
//                 <Calendar size={18} className="text-blue-500" />
//                 <span>{formatDate(post.publishedAt || post._updatedAt)}</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Clock size={18} className="text-blue-500" />
//                 <span>{calculateReadTime(post.body)}</span>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Featured Image */}
//         {post.featuredImage?.asset?.url && (
//           <div className="max-w-7xl mx-auto px-6 mb-16">
//             <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-slate-50">
//               <Image
//                 src={post.featuredImage.asset.url}
//                 alt={post.featuredImage.alt || post.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="hover:scale-105 transition-transform duration-1000 ease-out"
//                 priority
//               />
//             </div>
//           </div>
//         )}

//         {/* Article Body */}
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-[1.8] prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-img:rounded-3xl prose-strong:text-slate-900 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl max-w-none">
//             {post.body && Array.isArray(post.body) && (
//               <PortableText
//                 value={post.body}
//                 components={{
//                   types: {
//                     image: ({ value }) => {
//                       if (!value?.asset?.url) return null;
//                       return (
//                         <div className="my-8">
//                           <Image
//                             src={value.asset.url}
//                             alt={value.alt || ''}
//                             width={1000}
//                             height={750}
//                             className="rounded-3xl"
//                           />
//                         </div>
//                       );
//                     },
//                   },
//                   marks: {
//                     strong: ({ children }) => <strong className="text-slate-900 font-bold">{children}</strong>,
//                     em: ({ children }) => <em className="italic">{children}</em>,
//                     link: ({ children, value }) => {
//                       const href = value?.href || '#';
//                       return (
//                         <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
//                           {children}
//                         </a>
//                       );
//                     },
//                   },
//                   block: {
//                     h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold my-6">{children}</h1>,
//                     h2: ({ children }) => <h2 className="text-3xl font-semibold my-5">{children}</h2>,
//                     h3: ({ children }) => <h3 className="text-2xl font-semibold my-4">{children}</h3>,
//                     h4: ({ children }) => <h4 className="text-xl font-semibold my-3">{children}</h4>,
//                     normal: ({ children }) => <p className="my-4 leading-7 text-slate-600">{children}</p>,
//                     blockquote: ({ children }) => (
//                       <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg my-6 italic">
//                         {children}
//                       </blockquote>
//                     ),
//                   },
//                   list: {
//                     bullet: ({ children }) => <ul className="list-disc ml-8 my-4 space-y-2">{children}</ul>,
//                     number: ({ children }) => <ol className="list-decimal ml-8 my-4 space-y-2">{children}</ol>,
//                   },
//                   listItem: {
//                     bullet: ({ children }) => <li className="text-slate-600">{children}</li>,
//                     number: ({ children }) => <li className="text-slate-600">{children}</li>,
//                   },
//                 }}
//               />
//             )}
//           </div>

//           {/* Reaction Buttons */}
//           {post._id && (
//             <div className="mt-12 pt-8 border-t border-slate-100">
//               <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//                 <div>
//                   <h4 className="text-lg font-bold text-slate-900 mb-2">
//                     Was this article helpful?
//                   </h4>
//                   <p className="text-slate-500 text-sm">
//                     Let us know your thoughts
//                   </p>
//                 </div>
//                 <ReactionButtons 
//                   postId={post._id} 
//                   initialCounts={post.reactionCounts || { likes: 0, dislikes: 0 }}
//                 />
//               </div>
//             </div>
//           )}

//           {/* Article Footer */}
//           <div className="mt-20 pt-12 border-t border-slate-100">
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-8 bg-slate-50 rounded-3xl p-8">
//               <div className="space-y-2 text-center sm:text-left">
//                 <h4 className="font-bold text-slate-900">Share this article</h4>
//                 <p className="text-sm text-slate-500">Spread the knowledge with your network.</p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Share post={post} />
//               </div>
//             </div>

//             <div className="mt-12 flex justify-center">
//               <button
//                 onClick={() => router.back()}
//                 className="px-10 py-4 rounded-2xl bg-white border-2 border-slate-100 text-slate-600 font-bold hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm active:scale-95 flex items-center gap-3"
//               >
//                 <ArrowLeft size={20} />
//                 Return to Blog Feed
//               </button>
//             </div>
//           </div>

//           {/* Comments Section */}
//           {post._id && <CommentsSection postId={post._id} />}
//         </div>

//         {/* Newsletter CTA */}
//         <section className="max-w-7xl mx-auto px-6 my-24">
//           <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
//             <div className="relative z-10 space-y-6">
//               <h3 className="text-3xl md:text-4xl font-bold text-white">Never miss a tech update</h3>
//               <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
//                 Get the latest insights on AI, Cloud Computing, and Web Development delivered straight to your inbox.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
//                 <input 
//                   type="email" 
//                   placeholder="you@example.com" 
//                   className="flex-1 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 />
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </article>
//     </Layout>
//   );
// };

// export default BlogPostPage;

// export async function getStaticPaths() {
//   try {
//     const posts = await sanityClient.fetch('*[_type == "blogPost"]{ "slug": slug.current }');
    
//     const paths = posts
//       .filter(post => post.slug)
//       .map((post) => ({
//         params: { slug: post.slug },
//       }));

//     return {
//       paths,
//       fallback: true,
//     };
//   } catch (error) {
//     console.error('Error in getStaticPaths:', error);
//     return {
//       paths: [],
//       fallback: true,
//     };
//   }
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;

//   try {
//     const post = await sanityClient.fetch(
//       `*[_type == "blogPost" && slug.current == $slug][0]{
//         _id,
//         title,
//         "slug": slug.current,
//         body,
//         publishedAt,
//         _updatedAt,
//         "categoryName": category->title,
//         "authorName": author->name,
//         featuredImage{
//           asset->{
//             _id,
//             url
//           },
//           alt
//         }
//       }`,
//       { slug }
//     );

//     if (!post) {
//       return {
//         notFound: true,
//         revalidate: 60,
//       };
//     }

//     // Ensure required fields have fallbacks
//     const sanitizedPost = {
//       ...post,
//       categoryName: post.categoryName || 'General',
//       authorName: post.authorName || 'Editorial Team',
//       featuredImage: post.featuredImage || {
//         asset: {
//           url: '/images/fallback-blog.jpg',
//           _id: 'fallback'
//         },
//         alt: 'Blog post image'
//       }
//     };

//     // Fetch reaction counts safely
//     let reactionCounts = { likes: 0, dislikes: 0 };
//     try {
//       reactionCounts = await sanityClient.fetch(
//         `{
//           "likes": count(*[_type == "reaction" && post._ref == $postId && type == "like"]),
//           "dislikes": count(*[_type == "reaction" && post._ref == $postId && type == "dislike"])
//         }`,
//         { postId: post._id }
//       );
//     } catch (reactionError) {
//       console.error('Error fetching reactions:', reactionError);
//     }

//     return {
//       props: { 
//         post: {
//           ...sanitizedPost,
//           reactionCounts
//         }
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error(`Error in getStaticProps for slug ${slug}:`, error);
    
//     return {
//       props: {
//         error: error.message || 'Failed to load post',
//         post: null
//       },
//       revalidate: 10,
//     };
//   }
// }


// // pages/blog/[slug].jsx - COMPLETELY FIXED JSX VERSION
// import React from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { PortableText } from "@portabletext/react";
// import sanityClient from "@/client";
// import Share from "@/components/share";
// import Link from "next/link";
// import { generateBlogPostSEO } from '@/lib/seo';
// import Layout from "@/components/layouts";
// import { 
//   ArrowLeft, 
//   User, 
//   Tag, 
//   Calendar, 
//   Clock, 
//   ChevronRight,
//   Bookmark
// } from "lucide-react";
// import ReactionButtons from "@/components/ReactionButtons";
// import CommentsSection from "@/components/CommentsSection";

// const BlogPostPage = ({ post, error }) => {
//   const router = useRouter();

//   // Loading state
//   if (router.isFallback) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
//         <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
//         <p className="text-slate-500 font-medium animate-pulse">Fetching the latest insights...</p>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
//         <div className="max-w-md text-center">
//           <h1 className="text-4xl font-bold text-slate-900 mb-4">Oops!</h1>
//           <p className="text-slate-600 mb-8">Something went wrong loading this post.</p>
//           <Link href="/blog" legacyBehavior>
//             <a className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
//               <ArrowLeft size={20} />
//               Back to Blog
//             </a>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Post not found
//   if (!post) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
//         <div className="max-w-md text-center">
//           <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
//           <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
//           <Link href="/blog" legacyBehavior>
//             <a className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
//               <ArrowLeft size={20} />
//               Back to Blog
//             </a>
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   // Format date safely
//   const formatDate = (dateString) => {
//     if (!dateString) return "Recently";
//     try {
//       return new Date(dateString).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//       });
//     } catch (e) {
//       return "Recently";
//     }
//   };

//   // Calculate read time
//   const calculateReadTime = (body) => {
//     if (!body || !Array.isArray(body)) return "5 min read";
//     const wordCount = body.reduce((count, block) => {
//       if (block._type === 'block' && block.children) {
//         return count + block.children.reduce((c, child) => 
//           c + (child.text ? child.text.split(' ').length : 0), 0);
//       }
//       return count;
//     }, 0);
//     const minutes = Math.ceil(wordCount / 200);
//     return `${minutes} min read`;
//   };

//   const seoData = post ? generateBlogPostSEO(post) : {};

//   return (
//     <Layout seo={seoData}>
//       <article className="min-h-screen bg-white">
//         {/* Top Navigation */}
//         <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6">
//           <div className="max-w-5xl mx-auto flex items-center justify-between">
//             <button
//               onClick={() => router.back()}
//               className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-all group"
//             >
//               <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
//               <span className="hidden sm:inline">Back to Blog</span>
//             </button>
            
//             <div className="flex items-center gap-3">
//               <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 uppercase tracking-widest font-bold">
//                 <Link href="/" legacyBehavior>
//                   <a className="hover:text-blue-600">Home</a>
//                 </Link>
//                 <ChevronRight size={12} />
//                 <Link href="/blog" legacyBehavior>
//                   <a className="hover:text-blue-600">Blog</a>
//                 </Link>
//               </div>
//               <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
//                 <Bookmark size={20} />
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* Content Header */}
//         <header className="pt-16 pb-12 px-6">
//           <div className="max-w-4xl mx-auto text-center space-y-8">
//             {/* Category Badge */}
//             {post.categoryName && (
//               <Link href="/blog" legacyBehavior>
//                 <a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all">
//                   <Tag size={12} />
//                   {post.categoryName}
//                 </a>
//               </Link>
//             )}

//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
//               {post.title}
//             </h1>

//             {/* Meta Bar */}
//             <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-slate-500 text-sm font-medium pt-4 border-y border-slate-50 py-6">
//               {post.authorName && (
//                 <div className="flex items-center gap-3 group">
//                   <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-200">
//                     <User size={18} />
//                   </div>
//                   <span className="text-slate-900 font-bold">{post.authorName}</span>
//                 </div>
//               )}
              
//               <div className="flex items-center gap-2">
//                 <Calendar size={18} className="text-blue-500" />
//                 <span>{formatDate(post.publishedAt || post._updatedAt)}</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Clock size={18} className="text-blue-500" />
//                 <span>{calculateReadTime(post.body)}</span>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Featured Image */}
//         {post.featuredImage?.asset?.url && (
//           <div className="max-w-7xl mx-auto px-6 mb-16">
//             <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-slate-50">
//               <Image
//                 src={post.featuredImage.asset.url}
//                 alt={post.featuredImage.alt || post.title}
//                 layout="fill"
//                 objectFit="cover"
//                 className="hover:scale-105 transition-transform duration-1000 ease-out"
//                 priority
//               />
//             </div>
//           </div>
//         )}

//         {/* Article Body */}
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="prose prose-lg prose-slate prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-[1.8] prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-img:rounded-3xl prose-strong:text-slate-900 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl max-w-none">
//             {post.body && Array.isArray(post.body) && (
//               <PortableText
//                 value={post.body}
//                 components={{
//                   types: {
//                     image: ({ value }) => {
//                       if (!value?.asset?.url) return null;
//                       return (
//                         <div className="my-8">
//                           <Image
//                             src={value.asset.url}
//                             alt={value.alt || ''}
//                             width={1000}
//                             height={750}
//                             className="rounded-3xl"
//                           />
//                         </div>
//                       );
//                     },
//                   },
//                   marks: {
//                     strong: ({ children }) => <strong className="text-slate-900 font-bold">{children}</strong>,
//                     em: ({ children }) => <em className="italic">{children}</em>,
//                     link: ({ children, value }) => {
//                       const href = value?.href || '#';
//                       return (
//                         <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">
//                           {children}
//                         </a>
//                       );
//                     },
//                   },
//                   block: {
//                     h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold my-6">{children}</h1>,
//                     h2: ({ children }) => <h2 className="text-3xl font-semibold my-5">{children}</h2>,
//                     h3: ({ children }) => <h3 className="text-2xl font-semibold my-4">{children}</h3>,
//                     h4: ({ children }) => <h4 className="text-xl font-semibold my-3">{children}</h4>,
//                     normal: ({ children }) => <p className="my-4 leading-7 text-slate-600">{children}</p>,
//                     blockquote: ({ children }) => (
//                       <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg my-6 italic">
//                         {children}
//                       </blockquote>
//                     ),
//                   },
//                   list: {
//                     bullet: ({ children }) => <ul className="list-disc ml-8 my-4 space-y-2">{children}</ul>,
//                     number: ({ children }) => <ol className="list-decimal ml-8 my-4 space-y-2">{children}</ol>,
//                   },
//                   listItem: {
//                     bullet: ({ children }) => <li className="text-slate-600">{children}</li>,
//                     number: ({ children }) => <li className="text-slate-600">{children}</li>,
//                   },
//                 }}
//               />
//             )}
//           </div>

//           {/* Reaction Buttons */}
//           {post._id && (
//             <div className="mt-12 pt-8 border-t border-slate-100">
//               <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//                 <div>
//                   <h4 className="text-lg font-bold text-slate-900 mb-2">
//                     Was this article helpful?
//                   </h4>
//                   <p className="text-slate-500 text-sm">
//                     Let us know your thoughts
//                   </p>
//                 </div>
//                 <ReactionButtons 
//                   postId={post._id} 
//                   initialCounts={post.reactionCounts || { likes: 0, dislikes: 0 }}
//                 />
//               </div>
//             </div>
//           )}

//           {/* Article Footer */}
//           <div className="mt-20 pt-12 border-t border-slate-100">
//             <div className="flex flex-col sm:flex-row items-center justify-between gap-8 bg-slate-50 rounded-3xl p-8">
//               <div className="space-y-2 text-center sm:text-left">
//                 <h4 className="font-bold text-slate-900">Share this article</h4>
//                 <p className="text-sm text-slate-500">Spread the knowledge with your network.</p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <Share post={post} />
//               </div>
//             </div>

//             <div className="mt-12 flex justify-center">
//               <button
//                 onClick={() => router.back()}
//                 className="px-10 py-4 rounded-2xl bg-white border-2 border-slate-100 text-slate-600 font-bold hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm active:scale-95 flex items-center gap-3"
//               >
//                 <ArrowLeft size={20} />
//                 Return to Blog Feed
//               </button>
//             </div>
//           </div>

//           {/* Comments Section */}
//           {post._id && <CommentsSection postId={post._id} />}
//         </div>

//         {/* Newsletter CTA */}
//         <section className="max-w-7xl mx-auto px-6 my-24">
//           <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
//             <div className="relative z-10 space-y-6">
//               <h3 className="text-3xl md:text-4xl font-bold text-white">Never miss a tech update</h3>
//               <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
//                 Get the latest insights on AI, Cloud Computing, and Web Development delivered straight to your inbox.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
//                 <input 
//                   type="email" 
//                   placeholder="you@example.com" 
//                   className="flex-1 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 />
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </article>
//     </Layout>
//   );
// };

// export default BlogPostPage;

// export async function getStaticPaths() {
//   try {
//     const posts = await sanityClient.fetch('*[_type == "blogPost"]{ "slug": slug.current }');
    
//     const paths = posts
//       .filter((post) => post.slug)
//       .map((post) => ({
//         params: { slug: post.slug },
//       }));

//     return {
//       paths,
//       fallback: true,
//     };
//   } catch (error) {
//     console.error('Error in getStaticPaths:', error);
//     return {
//       paths: [],
//       fallback: true,
//     };
//   }
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;

//   try {
//     const post = await sanityClient.fetch(
//       `*[_type == "blogPost" && slug.current == $slug][0]{
//         _id,
//         title,
//         "slug": slug.current,
//         body,
//         publishedAt,
//         _updatedAt,
//         "categoryName": category->title,
//         "authorName": author->name,
//         featuredImage{
//           asset->{
//             _id,
//             url
//           },
//           alt
//         }
//       }`,
//       { slug }
//     );

//     if (!post) {
//       return {
//         notFound: true,
//         revalidate: 60,
//       };
//     }

//     // Ensure required fields have fallbacks
//     const sanitizedPost = {
//       ...post,
//       categoryName: post.categoryName || 'General',
//       authorName: post.authorName || 'Editorial Team',
//       featuredImage: post.featuredImage || {
//         asset: {
//           url: '/images/fallback-blog.jpg',
//           _id: 'fallback'
//         },
//         alt: 'Blog post image'
//       }
//     };

//     // Fetch reaction counts safely
//     let reactionCounts = { likes: 0, dislikes: 0 };
//     try {
//       reactionCounts = await sanityClient.fetch(
//         `{
//           "likes": count(*[_type == "reaction" && post._ref == $postId && type == "like"]),
//           "dislikes": count(*[_type == "reaction" && post._ref == $postId && type == "dislike"])
//         }`,
//         { postId: post._id }
//       );
//     } catch (reactionError) {
//       console.error('Error fetching reactions:', reactionError);
//     }

//     return {
//       props: { 
//         post: {
//           ...sanitizedPost,
//           reactionCounts
//         }
//       },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error(`Error in getStaticProps for slug ${slug}:`, error);
    
//     return {
//       props: {
//         error: error.message || 'Failed to load post',
//         post: null
//       },
//       revalidate: 10,
//     };
//   }
// }


// import React from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import Link from "next/link";
// import sanityClient from "@/client";
// import { PortableText } from "@portabletext/react";
// import Layout from "@/components/layouts";
// import Share from "@/components/share";
// import ReactionButtons from "@/components/ReactionButtons";
// import CommentsSection from "@/components/CommentsSection";
// import { generateBlogPostSEO } from "@/lib/seo";
// import {
//   ArrowLeft,
//   User,
//   Tag,
//   Calendar,
//   Clock,
// } from "lucide-react";

// /* -----------------------------------
//    PAGE COMPONENT
// ----------------------------------- */

// const BlogPostPage = ({ post }) => {
//   const router = useRouter();

//   if (router.isFallback) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading…
//       </div>
//     );
//   }

//   if (!post) {
//     return (
//       <Layout>
//         <div className="min-h-screen flex items-center justify-center text-slate-500">
//           This article is unavailable.
//         </div>
//       </Layout>
//     );
//   }

//   return (
//     <Layout seo={generateBlogPostSEO(post)}>
//       <article className="bg-white">

//         {/* Header */}
//         <header className="pt-16 pb-12 text-center px-6">
//           <Link
//             href="/blog"
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase"
//           >
//             <Tag size={12} />
//             {post.categoryName}
//           </Link>

//           <h1 className="mt-6 text-4xl md:text-5xl font-extrabold">
//             {post.title}
//           </h1>

//           <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
//             <span className="flex items-center gap-2">
//               <User size={16} /> {post.authorName}
//             </span>
//             <span className="flex items-center gap-2">
//               <Calendar size={16} /> {post.publishedAt}
//             </span>
//             <span className="flex items-center gap-2">
//               <Clock size={16} /> 8 min read
//             </span>
//           </div>
//         </header>

//         {/* Featured Image */}
//         <div className="max-w-6xl mx-auto px-6 mb-16">
//           <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
//             <Image
//               src={post.featuredImage?.asset?.url || "/images/fallback-blog.jpg"}
//               alt={post.featuredImage?.alt || post.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//         </div>

//         {/* Content */}
//         <div className="max-w-4xl mx-auto px-6 prose prose-lg">
//           <PortableText
//   value={post.body}
//   components={{
//     block: {
//       h1: ({ children }) => (
//         <h1 className="text-4xl font-bold my-6">{children}</h1>
//       ),
//       h2: ({ children }) => (
//         <h2 className="text-3xl font-bold my-6">{children}</h2>
//       ),
//       blockquote: ({ children }) => (
//         <blockquote className="border-l-4 pl-4 italic my-6">
//           {children}
//         </blockquote>
//       ),
//     },
//     list: {
//       bullet: ({ children }) => (
//         <ul className="list-disc ml-6 my-4">{children}</ul>
//       ),
//       number: ({ children }) => (
//         <ol className="list-decimal ml-6 my-4">{children}</ol>
//       ),
//     },
//     types: {
//       image: ({ value }) => {
//         if (!value?.asset?.url) return null;
//         return (
//           <Image
//             src={value.asset.url}
//             alt=""
//             width={1000}
//             height={700}
//             className="rounded-xl my-8"
//           />
//         );
//       },
//     },
//   }}
// />

//         </div>

//         {/* Reactions */}
//         <div className="max-w-4xl mx-auto px-6 mt-12">
//           <ReactionButtons
//             postId={post._id}
//             initialCounts={post.reactionCounts}
//           />
//         </div>

//         {/* Share */}
//         <div className="max-w-4xl mx-auto px-6 mt-12">
//           <Share post={post} />
//         </div>

//         {/* Comments */}
//         <div className="max-w-4xl mx-auto px-6 mt-20">
//           <CommentsSection postId={post._id} />
//         </div>

//         {/* Back */}
//         <div className="flex justify-center my-20">
//           <button
//             onClick={() => router.push("/blog")}
//             className="flex items-center gap-2 px-8 py-4 border rounded-xl"
//           >
//             <ArrowLeft size={18} /> Back to Blog
//           </button>
//         </div>
//       </article>
//     </Layout>
//   );
// };

// export default BlogPostPage;

// /* -----------------------------------
//    STATIC GENERATION
// ----------------------------------- */

// export async function getStaticPaths() {
//   const slugs = await sanityClient.fetch(
//     `*[_type == "blogPost" && defined(slug.current)][]{
//       "slug": slug.current
//     }`
//   );

//   return {
//     paths: slugs.map((s) => ({ params: { slug: s.slug } })),
//     fallback: "blocking", // 🚨 IMPORTANT
//   };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;

//   try {
// const post = await sanityClient.fetch(
//   `*[
//     _type == "blogPost" &&
//     !(_id in path("drafts.**")) &&
//     slug.current == $slug
//   ][0]{
//     _id,
//     title,
//     excerpt,
//     body,
//     publishedAt,

//     "authorName": coalesce(author->name, "Editorial Team"),
//     "categoryName": coalesce(category->title, "General"),

//     featuredImage{
//       asset->{url},
//       alt
//     }
//   }`,
//   { slug }
// );


//     if (!post?.title || !post?.body) {
//       return { notFound: true };
//     }

//     let reactionCounts = { likes: 0, dislikes: 0 };
//     try {
//       reactionCounts = await sanityClient.fetch(
//         `{
//           "likes": count(*[_type == "reaction" && post._ref == $id && type == "like"]),
//           "dislikes": count(*[_type == "reaction" && post._ref == $id && type == "dislike"])
//         }`,
//         { id: post._id }
//       );
//     } catch (_) {}

//     return {
//       props: {
//         post: {
//           ...post,
//           reactionCounts,
//         },
//       },
//       revalidate: 60,
//     };
//   } catch (err) {
//     console.error("BLOG ISR ERROR:", err);
//     return { notFound: true, revalidate: 10 };
//   }
// }


// /**
//  * NEXT.JS [SLUG].JS - FIXED PRODUCTION VERSION
//  * Copy this into your pages/blog/[slug].js file.
//  */
// import React from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import sanityClient from "../../lib/sanity"; // Update your client path
// import { PortableText } from "../../lib/sanity";

// export default function BlogPost({ post }) {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   // Handle case where post is null (Sanity delete/draft)
//   if (!post) return <div>Post not found.</div>;

//   // FALLBACKS: This prevents the 500 error!
//   const title = post?.title || "Untitled";
//   const author = post?.authorName || "Team";
//   const category = post?.categoryName || "General";
//   const heroImage = post?.featuredImage?.asset?.url || "/fallback-image.jpg";

//   return (
//     <article className="max-w-4xl mx-auto py-20 px-6">
//       <header className="text-center mb-12">
//         <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
//           {category}
//         </span>
//         <h1 className="text-5xl font-extrabold mt-4">{title}</h1>
//         <p className="mt-4 text-slate-500 font-medium">By {author}</p>
//       </header>
      
//       {/* Safe Image access */}
//       <div className="relative aspect-video rounded-3xl overflow-hidden mb-12">
//         <Image 
//           src={heroImage} 
//           alt={post?.featuredImage?.alt || title} 
//           layout="fill" 
//           objectFit="cover" 
//         />
//       </div>

//       <div className="prose prose-lg mx-auto">
//           <PortableText
//               value={post.body}
//               components={{
//                 block: {
//                   h1: ({ children }) => (
//                     <h1 className="text-4xl font-bold my-6">{children}</h1>
//                   ),
//                   h2: ({ children }) => (
//                     <h2 className="text-3xl font-bold my-6">{children}</h2>
//                   ),
//                   blockquote: ({ children }) => (
//                     <blockquote className="border-l-4 pl-4 italic my-6">
//                       {children}
//                     </blockquote>
//                   ),
//                 },
//                 list: {
//                   bullet: ({ children }) => (
//                     <ul className="list-disc ml-6 my-4">{children}</ul>
//                   ),
//                   number: ({ children }) => (
//                     <ol className="list-decimal ml-6 my-4">{children}</ol>
//                   ),
//                 },
//                 types: {
//                   image: ({ value }) => {
//                     if (!value?.asset?.url) return null;
//                     return (
//                       <Image
//                         src={value.asset.url}
//                         alt=""
//                         width={1000}
//                         height={700}
//                         className="rounded-xl my-8"
//                       />
//                     );
//                   },
//                 },
//               }}
//             />
//       </div>
//     </article>
//   );
// }

// export async function getStaticPaths() {
//   const paths = await sanityClient.fetch(
//     `*[_type == "blogPost" && defined(slug.current)][].slug.current`
//   );
//   return {
//     paths: paths.map((slug) => ({ params: { slug } })),
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   const { slug } = params;
  
//   try {
//     const post = await sanityClient.fetch(
//       `*[_type == "blogPost" && slug.current == $slug][0]{
//         _id,
//         title,
//         "authorName": author->name,
//         "categoryName": category->title,
//         featuredImage{
//           asset->{ url },
//           alt
//         },
//         body
//       }`,
//       { slug }
//     );

//     if (!post) return { notFound: true };

//     return {
//       props: { post },
//       revalidate: 60,
//     };
//   } catch (error) {
//     console.error("Sanity fetch error:", error);
//     return { notFound: true };
//   }
// }

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import sanityClient from "@/client";
import { PortableText } from "@portabletext/react";
import Layout from "@/components/layouts";
import Share from "@/components/share";
import ReactionButtons from "@/components/ReactionButtons";
import CommentsSection from "@/components/CommentsSection";
import { generateBlogPostSEO } from "@/lib/seo";
import {
  ArrowLeft,
  User,
  Tag,
  Calendar,
  Clock,
} from "lucide-react";

/* -----------------------------------
   PAGE COMPONENT
----------------------------------- */

export default function BlogPostPage() {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchPost = async () => {
      const slug =
        router.query.slug ||
        window.location.pathname.split("/").pop();

      try {
        const data = await sanityClient.fetch(
          `*[
            _type == "blogPost" &&
            !(_id in path("drafts.**")) &&
            slug.current == $slug
          ][0]{
            _id,
            title,
            excerpt,
            body,
            publishedAt,

            "authorName": coalesce(author->name, "Editorial Team"),
            "categoryName": coalesce(category->title, "General"),

            featuredImage{
              asset->{url},
              alt
            }
          }`,
          { slug }
        );

        if (!data) {
          setPost(null);
          return;
        }

        // Fetch reactions safely
        let reactionCounts = { likes: 0, dislikes: 0 };
        try {
          reactionCounts = await sanityClient.fetch(
            `{
              "likes": count(*[_type == "reaction" && post._ref == $id && type == "like"]),
              "dislikes": count(*[_type == "reaction" && post._ref == $id && type == "dislike"])
            }`,
            { id: data._id }
          );
        } catch (_) {}

        setPost({ ...data, reactionCounts });
      } catch (err) {
        console.error("BLOG FETCH ERROR:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [router.isReady, router.query.slug]);

  /* -----------------------------------
     STATES
  ----------------------------------- */

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-slate-300 border-t-blue-600 rounded-full animate-spin" />
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 text-slate-500">
          This article is unavailable.
          <button
            onClick={() => router.push("/blog")}
            className="mt-6 flex items-center gap-2 px-6 py-3 border rounded-xl"
          >
            <ArrowLeft size={16} /> Back to Blog
          </button>
        </div>
      </Layout>
    );
  }

  /* -----------------------------------
     RENDER
  ----------------------------------- */

  return (
    <Layout seo={generateBlogPostSEO(post)}>
      <article className="bg-white">

        {/* Header */}
        <header className="pt-16 pb-12 text-center px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase"
          >
            <Tag size={12} />
            {post.categoryName}
          </Link>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <User size={16} /> {post.authorName}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} /> {post.publishedAt}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} /> 8 min read
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden">
            <Image
              src={post.featuredImage?.asset?.url || "/images/fallback-blog.jpg"}
              alt={post.featuredImage?.alt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 prose prose-lg">
          <PortableText
            value={post.body}
            components={{
              block: {
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold my-6">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold my-6">{children}</h2>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 pl-4 italic my-6">
                    {children}
                  </blockquote>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="list-disc ml-6 my-4">{children}</ul>
                ),
                number: ({ children }) => (
                  <ol className="list-decimal ml-6 my-4">{children}</ol>
                ),
              },
              types: {
                image: ({ value }) => {
                  if (!value?.asset?.url) return null;
                  return (
                    <Image
                      src={value.asset.url}
                      alt=""
                      width={1000}
                      height={700}
                      className="rounded-xl my-8"
                    />
                  );
                },
              },
            }}
          />
        </div>

        {/* Reactions */}
        <div className="max-w-4xl mx-auto px-6 mt-12">
          <ReactionButtons
            postId={post._id}
            initialCounts={post.reactionCounts}
          />
        </div>

        {/* Share */}
        <div className="max-w-4xl mx-auto px-6 mt-12">
          <Share post={post} />
        </div>

        {/* Comments */}
        <div className="max-w-4xl mx-auto px-6 mt-20">
          <CommentsSection postId={post._id} />
        </div>

        {/* Back */}
        <div className="flex justify-center my-20">
          <button
            onClick={() => router.push("/blog")}
            className="flex items-center gap-2 px-8 py-4 border rounded-xl"
          >
            <ArrowLeft size={18} /> Back to Blog
          </button>
        </div>
      </article>
    </Layout>
  );
}
