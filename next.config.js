// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//     // Redirects for SEO
//   async redirects() {
//     return [
//       {
//         source: '/sitemap',
//         destination: '/sitemap.xml',
//         permanent: true,
//       },
//       {
//         source: '/robots',
//         destination: '/robots.txt',
//         permanent: true,
//       },
//     ];
//   },  
//   images: {
//     domains: [
//       'cdn.sanity.io',
//       'ui-avatars.com',
//       'picsum.photos', // ✅ add this
//     ],
//   },

//   // Add headers for sitemap
//   async headers() {
//     return [
//       {
//         source: '/sitemap.xml',
//         headers: [
//           {
//             key: 'Content-Type',
//             value: 'application/xml',
//           },
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=300',
//           },
//         ],
//       },
//       {
//         source: '/server-sitemap.xml',
//         headers: [
//           {
//             key: 'Content-Type',
//             value: 'application/xml',
//           },
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=300',
//           },
//         ],
//       },
//       {
//         source: '/robots.txt',
//         headers: [
//           {
//             key: 'Content-Type',
//             value: 'text/plain',
//           },
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=3600, s-maxage=3600',
//           },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;

// next-sitemap.config.js - UPDATED
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://anselmjoseph.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  
  // Exclude non-indexable pages
  exclude: [
    '/admin',
    '/admin/*',
    '/api/*',
    '/server-sitemap.xml',
    '/404',
    '/500',
    '/thank-you',
    '/privacy-policy',
    '/terms-of-service',
    '/_next/*',
    '/*.json$'
  ],
  
  // Additional robots.txt rules
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/api',
          '/_next',
          '/404',
          '/500'
        ],
      },
    ],
  },
  
  // Transform function to sanitize URLs
  transform: async (config, path) => {
    // Remove trailing slashes
    const cleanPath = path.replace(/\/$/, '');
    
    // Custom priority based on path
    let priority = config.priority;
    let changefreq = config.changefreq;
    
    if (cleanPath === '') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (cleanPath.startsWith('/blog')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (cleanPath.startsWith('/portfolio')) {
      priority = 0.9;
      changefreq = 'monthly';
    }
    
    return {
      loc: `https://anselmjoseph.com${cleanPath}`,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};