// scripts/generate-sitemap.js
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

async function generateSitemap() {
  console.log('🔍 Generating sitemap...');
  
  // Run next-sitemap
  exec('npx next-sitemap', (error, stdout, stderr) => {
    if (error) {
      console.error('❌ Error generating sitemap:', error);
      return;
    }
    
    console.log('✅ Sitemap generated successfully!');
    console.log(stdout);
    
    // Verify files were created
    const files = ['sitemap.xml', 'sitemap-0.xml', 'robots.txt'];
    files.forEach(file => {
      const filePath = path.join(process.cwd(), 'public', file);
      if (fs.existsSync(filePath)) {
        console.log(`✅ ${file} created at ${filePath}`);
      } else {
        console.log(`❌ ${file} not found!`);
      }
    });
    
    // Display sitemap URLs for verification
    console.log('\n📋 Your sitemap URLs:');
    console.log('🌐 Main sitemap: https://anselmjoseph.com/sitemap.xml');
    console.log('🤖 Robots.txt: https://anselmjoseph.com/robots.txt');
    console.log('🔄 Server sitemap: https://anselmjoseph.com/server-sitemap.xml');
  });
}

generateSitemap();