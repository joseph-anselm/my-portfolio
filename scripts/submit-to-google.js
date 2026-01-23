// scripts/submit-to-google.js
const { exec } = require('child_process');
const fs = require('fs');
const axios = require('axios');

async function submitToGoogle() {
  const siteUrl = 'https://anselmjoseph.com';
  const sitemapUrl = `${siteUrl}/sitemap.xml`;
  
  console.log('🚀 Submitting sitemap to Google...');
  
  // Ping Google (simple notification)
  try {
    const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    const response = await axios.get(pingUrl);
    
    if (response.status === 200) {
      console.log('✅ Successfully pinged Google!');
    } else {
      console.log('⚠️  Google ping returned status:', response.status);
    }
  } catch (error) {
    console.error('❌ Error pinging Google:', error.message);
  }
  
  // Generate curl command for manual submission
  console.log('\n📋 Manual submission URLs:');
  console.log(`1. Google Search Console: https://search.google.com/search-console`);
  console.log(`2. Sitemap URL to submit: ${sitemapUrl}`);
  console.log(`3. Bing Webmaster Tools: https://www.bing.com/webmasters`);
  console.log(`4. Submit to Bing: ${siteUrl}/sitemap.xml`);
  
  // Save submission info to file
  const submissionInfo = {
    siteUrl,
    sitemapUrl,
    lastSubmitted: new Date().toISOString(),
    instructions: [
      '1. Go to Google Search Console',
      '2. Add your property (if not already added)',
      '3. Go to Sitemaps section',
      '4. Enter the sitemap URL',
      '5. Click Submit'
    ]
  };
  
  fs.writeFileSync(
    'sitemap-submission-info.json',
    JSON.stringify(submissionInfo, null, 2)
  );
  
  console.log('\n💾 Submission info saved to sitemap-submission-info.json');
}

submitToGoogle();