// pages/server-sitemap.xml/index.jsx
import { getServerSideSitemap } from 'next-sitemap';
import sanityClient from '@/lib/sanity';

export const getServerSideProps = async (ctx) => {
  try {
    // Fetch blog posts from Sanity
    const blogPosts = await sanityClient.fetch(`
      *[_type == "blogPost" && defined(slug.current)]{
        "slug": slug.current,
        _updatedAt,
        publishedAt
      }
    `);

    // Fetch portfolio projects
    const portfolioProjects = await sanityClient.fetch(`
      *[_type == "project" && defined(slug.current)]{
        "slug": slug.current,
        _updatedAt
      }
    `);

    const blogFields = blogPosts.map((post) => ({
      loc: `https://anselmjoseph.com/blog/${post.slug}`,
      lastmod: new Date(post._updatedAt || post.publishedAt || Date.now()).toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    }));

    const portfolioFields = portfolioProjects.map((project) => ({
      loc: `https://anselmjoseph.com/portfolio/${project.slug}`,
      lastmod: new Date(project._updatedAt || Date.now()).toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    }));

    // Combine all fields
    const fields = [...blogFields, ...portfolioFields];

    return getServerSideSitemap(ctx, fields);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    // Return empty sitemap on error
    return getServerSideSitemap(ctx, []);
  }
};

// Default export to prevent next.js errors
export default function ServerSitemap() {}