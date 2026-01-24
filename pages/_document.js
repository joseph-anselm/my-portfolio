// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  // Structured data (JSON-LD) - only in HTML pages, not in sitemaps
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joseph Anselm",
    "url": "https://anselmjoseph.com",
    "image": "https://anselmjoseph.com/images/og-image.jpg",
    "sameAs": [
      "https://linkedin.com/in/joseph-anselm",
      "https://github.com/josephanselm",
      "https://twitter.com/josephanselm"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Joseph Anselm Portfolio"
    },
    "description": "Expert full stack developer specializing in modern web applications, cloud solutions, and digital transformation."
  };

    {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        

  return (
    <Html lang="en">
      <Head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}