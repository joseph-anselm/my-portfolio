// pages/api/sitemap-verify.js
export default async function handler(req, res) {
  const baseUrl = process.env.SITE_URL || 'https://anselmjoseph.com';
  const sitemaps = [
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/server-sitemap.xml`,
    `${baseUrl}/robots.txt`,
  ];

  const results = await Promise.all(
    sitemaps.map(async (url) => {
      try {
        const response = await fetch(url);
        return {
          url,
          status: response.status,
          ok: response.ok,
          contentType: response.headers.get('content-type'),
        };
      } catch (error) {
        return {
          url,
          status: 'error',
          error: error.message,
        };
      }
    })
  );

  const allOk = results.every(r => r.ok || r.status === 200);
  
  res.status(allOk ? 200 : 500).json({
    success: allOk,
    timestamp: new Date().toISOString(),
    results,
  });
}