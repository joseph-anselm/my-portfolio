// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://josephanselm.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [
    '/admin',
    '/admin/*',
    '/api/*',
    '/server-sitemap.xml',
    '/404',
    '/500',
    '/thank-you',
    '/privacy-policy',
    '/terms-of-service'
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
          '/server-sitemap.xml',
          '/_next',
          '/404',
          '/500'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin',
          '/api'
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin',
          '/api'
        ],
      },
    ],
    additionalSitemaps: [
      'https://josephanselm.com/server-sitemap.xml',
    ],
  },
  
  // Transform function for each URL
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = config.priority;
    let changefreq = config.changefreq;
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/blog')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/portfolio')) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path.startsWith('/about')) {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (path.startsWith('/contact')) {
      priority = 0.6;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};