// pages/sitemap.xml.js
import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  // Fetch your posts from Sanity
  const posts = await sanityClient.fetch('*[_type == "blogPost"]{ slug, _updatedAt }');
  
  const fields = [
    // Static pages
    {
      loc: 'https://anselmjoseph.com',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: 'https://anselmjoseph.com/about',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://anselmjoseph.com/portfolio',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: 'https://anselmjoseph.com/blog',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      loc: 'https://anselmjoseph.com/contact',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    },
    // Dynamic blog posts
    ...posts.map(post => ({
      loc: `https://anselmjoseph.com/blog/${post.slug.current}`,
      lastmod: post._updatedAt || new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.6,
    })),
  ];

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}