// pages/sitemap-index.xml.jsx
import { getServerSideSitemapIndex } from 'next-sitemap';

export const getServerSideProps = async (ctx) => {
  const sitemaps = [
    'https://anselmjoseph.com/sitemap.xml',
    'https://anselmjoseph.com/server-sitemap.xml',
    // Add more sitemaps if you have them
  ];

  return getServerSideSitemapIndex(ctx, sitemaps);
};

export default function SitemapIndex() {}