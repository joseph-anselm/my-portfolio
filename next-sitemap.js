/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.anselmjoseph.com',
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin'], // any private routes
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin'] },
    ],
  },
};
