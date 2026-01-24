// import { useRouter } from "next/router";
// import Image from "next/image";
// import sanityClient from "@/client";
// import BlockContent from "@sanity/block-content-to-react";
// import Share from "@/components/share";
// import Link from "next/link";

// const BlogPostPage = ({ post }) => {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading....</div>;
//   }
//   const title = post.title;

  

//   return (
//     <div className="container max-w-7xl mx-auto px-4 py-8">
//       <div className="flex flex-col md:flex-row items-center justify-between mb-8">
//         <div className="md:w-1/2 mr-8">
//           <Image
//             src={post.featuredImage.asset.url}
//             alt={post.featuredImage.alt}
//             width={600}
//             height={400}
//             className="rounded-lg"
//           />
//         </div>
//         <div className="md:w-1/2">
//           <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
//           <p className="text-gray-500">Author: {post.authorName}</p>
//           <p className="text-gray-500">
//             Category: <Link href="/blog">{post.categoryName}</Link>
//           </p>
//         </div>
//       </div>

//       <div className="prose max-w-none">
//         <BlockContent
//           blocks={post.body}
//           imageOptions={{ w: 640, h: 480, fit: "max" }}
//         />
//       </div>

//       <div className="mt-4 flex">
//         <button
//           onClick={() => {
//             router.back();
//           }}
//           className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
//         >
//           Back to blog list
//         </button>
//         <Share post={post}/>
        
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

//   const post = await sanityClient.fetch(
//     `*[_type == "blogPost" && slug.current == $slug]{
//       _id,
//       title,
//       slug,
//       category,
//       "categoryName":category->title,
//       body,
//       "authorName": author->name,
//       featuredImage{
//         asset->{
//           _id,
//           url,
//         },
//         alt
//       },
//     }[0]`,
//     { slug }
//   );

//   return {
//     props: { post },
//     revalidate: 1,
//   };
// }






// import React from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { PortableText } from "@/lib/sanity";
// import sanityClient from "@/client";
// import BlockContent from "@sanity/block-content-to-react";
// import Share from "@/components/share";
// import Link from "next/link";
// import { 
//   ArrowLeft, 
//   User, 
//   Tag, 
//   Calendar, 
//   Clock, 
//   ChevronRight,
//   Bookmark
// } from "lucide-react";

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
//          <PortableText
//   value={post.body}
//   components={{
//     types: {
//       image: ({ value }) => (
//         <Image
//           src={value.asset.url}
//           alt={value.alt || ''}
//           width={1000}
//           height={750}
//           className="rounded-3xl my-8"
//         />
//       ),
//     },
//     marks: {
//       strong: ({ children }) => <strong className="text-slate-900">{children}</strong>,
//       em: ({ children }) => <em>{children}</em>,
//       link: ({ children, value }) => (
//         <a href={value.href} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">
//           {children}
//         </a>
//       ),
//     },
//     block: {
//       h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold my-4">{children}</h1>,
//       h2: ({ children }) => <h2 className="text-3xl font-semibold my-3">{children}</h2>,
//       h3: ({ children }) => <h3 className="text-2xl font-semibold my-2">{children}</h3>,
//       normal: ({ children }) => <p className="my-2 leading-7 text-slate-600">{children}</p>,
//       blockquote: ({ children }) => (
//         <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg my-4">{children}</blockquote>
//       ),
//     },
//     list: {
//       bullet: ({ children }) => <ul className="list-disc ml-8 my-2">{children}</ul>,
//       number: ({ children }) => <ol className="list-decimal ml-8 my-2">{children}</ol>,
//     },
//   }}
// />

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
//       </div>

//       {/* 6. Newsletter / CTA */}
//       <section className="max-w-7xl mx-auto px-6 my-24">
//         <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
//           {/* Decorative shapes */}
//           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
//           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
//           <div className="relative z-10 space-y-6">
//             <h3 className="text-3xl md:text-4xl font-bold text-white font-sora">Never miss a tech update</h3>
//             <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
//               Get the latest insights on AI, Cloud Computing, and Web Development Trends delivered straight to your inbox.
//             </p>
//             <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
//               <input 
//                 type="email" 
//                 placeholder="you@example.com" 
//                 className="flex-1 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//               />
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95">
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </article>
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

//   const post = await sanityClient.fetch(
//     `*[_type == "blogPost" && slug.current == $slug]{
//       _id,
//       title,
//       slug,
//       category,
//       "categoryName":category->title,
//       body,
//       "authorName": author->name,
//       featuredImage{
//         asset->{
//           _id,
//           url,
//         },
//         alt
//       },
//     }[0]`,
//     { slug }
//   );

//   return {
//     props: { post },
//     revalidate: 1,
//   };
// }


// blog/[slug].js - Complete fixed file
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { PortableText } from "@/lib/sanity";
import sanityClient from "@/client";
import BlockContent from "@sanity/block-content-to-react";
import Share from "@/components/share";
import Link from "next/link";
import { generateBlogPostSEO } from '@/lib/seo';
import Layout from "@/components/layouts";
import { 
  ArrowLeft, 
  User, 
  Tag, 
  Calendar, 
  Clock, 
  ChevronRight,
  Bookmark
} from "lucide-react";

// Import the new components
import ReactionButtons from "@/components/ReactionButtons";
import CommentsSection from "@/components/CommentsSection";

const BlogPostPage = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-slate-500 font-medium animate-pulse">Fetching the latest insights...</p>
      </div>
    );
  }

  if (!post) return null;

  return (
    <Layout seo={generateBlogPostSEO(post)}>
    <article className="min-h-screen bg-white">
      {/* 1. Top Navigation / Progress Hint */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">Back to Blog</span>
          </button>
          
          <div className="flex items-center gap-3">
             <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 uppercase tracking-widest font-bold">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <ChevronRight size={12} />
                <Link href="/blog" className="hover:text-blue-600">Blog</Link>
             </div>
             <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                <Bookmark size={20} />
             </button>
          </div>
        </div>
      </nav>

      {/* 2. Content Header */}
      <header className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Category Badge */}
          <Link href="/blog" legacyBehavior>
            <a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all">
              <Tag size={12} />
              {post.categoryName}
            </a>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] font-sora tracking-tight">
            {post.title}
          </h1>

          {/* Meta Bar */}
          <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-slate-500 text-sm font-medium pt-4 border-y border-slate-50 py-6">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-200">
                <User size={18} />
              </div>
              <span className="text-slate-900 font-bold">{post.authorName}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-blue-500" />
              <span>Oct 24, 2023</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue-500" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Featured Image Container */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-8 border-slate-50">
          <Image
            src={post.featuredImage.asset.url}
            alt={post.featuredImage.alt || post.title}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-transform duration-1000 ease-out"
            priority
          />
        </div>
      </div>

      {/* 4. Article Body */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="prose prose-lg prose-slate prose-headings:font-sora prose-headings:text-slate-900 prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-[1.8] prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-700 prose-img:rounded-3xl prose-strong:text-slate-900 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl max-w-none">
          <PortableText
            value={post.body}
            components={{
              types: {
                image: ({ value }) => (
                  <Image
                    src={value.asset.url}
                    alt={value.alt || ''}
                    width={1000}
                    height={750}
                    className="rounded-3xl my-8"
                  />
                ),
              },
              marks: {
                strong: ({ children }) => <strong className="text-slate-900">{children}</strong>,
                em: ({ children }) => <em>{children}</em>,
                link: ({ children, value }) => (
                  <a href={value.href} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">
                    {children}
                  </a>
                ),
              },
              block: {
                h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-bold my-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl font-semibold my-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-semibold my-2">{children}</h3>,
                normal: ({ children }) => <p className="my-2 leading-7 text-slate-600">{children}</p>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg my-4">{children}</blockquote>
                ),
              },
              list: {
                bullet: ({ children }) => <ul className="list-disc ml-8 my-2">{children}</ul>,
                number: ({ children }) => <ol className="list-decimal ml-8 my-2">{children}</ol>,
              },
            }}
          />
        </div>

        {/* Add Reaction Buttons after article content */}
        <div className="mt-12 pt-8 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Was this article helpful?
              </h4>
              <p className="text-slate-500 text-sm">
                Let us know your thoughts
              </p>
            </div>
            {post._id && (
              <ReactionButtons 
                postId={post._id} 
                initialCounts={post.reactionCounts || { likes: 0, dislikes: 0 }}
              />
            )}
          </div>
        </div>

        {/* 5. Article Footer */}
        <div className="mt-20 pt-12 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 bg-slate-50 rounded-3xl p-8">
            <div className="space-y-2 text-center sm:text-left">
              <h4 className="font-bold text-slate-900 font-sora">Share this article</h4>
              <p className="text-sm text-slate-500">Spread the knowledge with your network.</p>
            </div>
            <div className="flex items-center gap-4">
               <Share post={post}/>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <button
              onClick={() => router.back()}
              className="px-10 py-4 rounded-2xl bg-white border-2 border-slate-100 text-slate-600 font-bold hover:border-blue-600 hover:text-blue-600 transition-all shadow-sm active:scale-95 flex items-center gap-3"
            >
              <ArrowLeft size={20} />
              Return to Blog Feed
            </button>
          </div>
        </div>

        {/* 6. Comments Section */}
        {post._id && <CommentsSection postId={post._id} />}

        {/* 7. Newsletter / CTA */}
        <section className="max-w-7xl mx-auto px-6 my-24">
          <div className="bg-[#0f172a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white font-sora">Never miss a tech update</h3>
              <p className="text-slate-400 max-w-lg mx-auto leading-relaxed">
                Get the latest insights on AI, Cloud Computing, and Web Development Trends delivered straight to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className="flex-1 px-6 py-4 rounded-2xl bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/20 active:scale-95">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </article>
    </Layout>
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

// export async function getStaticProps({ params }) {
//   const { slug } = params;

//   // First, fetch the post
//   const post = await sanityClient.fetch(
//     `*[_type == "blogPost" && slug.current == $slug]{
//       _id,
//       title,
//       slug,
//       category,
//       "categoryName":category->title,
//       body,
//       "authorName": author->name,
//       featuredImage{
//         asset->{
//           _id,
//           url,
//         },
//         alt
//       },
//     }[0]`,
//     { slug }
//   );

//   // If no post found, return 404
//   if (!post) {
//     return {
//       notFound: true,
//     };
//   }

//   // Then fetch reaction counts for this post
//   const reactionCounts = await sanityClient.fetch(
//     `{
//       "likes": count(*[_type == "reaction" && post._ref == $postId && type == "like"]),
//       "dislikes": count(*[_type == "reaction" && post._ref == $postId && type == "dislike"])
//     }`,
//     { postId: post._id }
//   );

//   return {
//     props: { 
//       post: {
//         ...post,
//         reactionCounts
//       }
//     },
//     revalidate: 1,
//   };
// }

// pages/blog/[slug].js - Updated getStaticProps
export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
const post = await sanityClient.fetch(
  `*[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body,
    publishedAt,
    _updatedAt,

    "categoryName": coalesce(category->title, "General"),
    "authorName": coalesce(author->name, "Editorial Team"),

    featuredImage{
      asset->{ _id, url },
      alt
    }
  }`,
  { slug }
);


    // If no post found, return 404
    if (!post) {
      console.log(`Post not found for slug: ${slug}`);
      return {
        notFound: true,
      };
    }

    // Check for missing required fields
    if (!post.featuredImage || !post.featuredImage.asset || !post.featuredImage.asset.url) {
      console.warn(`Post ${slug} has missing featuredImage`, post);
      // Add a fallback image or handle gracefully
      post.featuredImage = post.featuredImage || {
        asset: {
          url: '/images/fallback-blog.jpg',
          alt: 'Default blog image'
        }
      };
    }

    // Fetch reaction counts with error handling
    let reactionCounts = { likes: 0, dislikes: 0 };
    try {
      reactionCounts = await sanityClient.fetch(
        `{
          "likes": count(*[_type == "reaction" && post._ref == $postId && type == "like"]),
          "dislikes": count(*[_type == "reaction" && post._ref == $postId && type == "dislike"])
        }`,
        { postId: post._id }
      ) || { likes: 0, dislikes: 0 };
    } catch (reactionError) {
      console.error('Error fetching reaction counts:', reactionError);
      // Continue with default counts
    }

    return {
      props: { 
        post: {
          ...post,
          reactionCounts
        }
      },
      revalidate: 60, // Reduce revalidation time for debugging
    };
  } catch (error) {
    console.error(`Error fetching post ${slug}:`, error);
    
    // Return a fallback or error page
    return {
      props: {
        error: error.message,
        slug
      },
      revalidate: 1,
    };
  }
}