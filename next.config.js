/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

    // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/sitemap',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/robots',
        destination: '/robots.txt',
        permanent: true,
      },
    ];
  },  
  images: {
    domains: [
      'cdn.sanity.io',
      'ui-avatars.com',
      'picsum.photos', // ✅ add this
    ],
  },

  // Add headers for sitemap
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=300',
          },
        ],
      },
      {
        source: '/server-sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=300',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;