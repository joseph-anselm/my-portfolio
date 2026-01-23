// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./footer";
// import Head from "next/head";
// import BackToTop from "./backtotop";
// import WhatsAppFlyer from "./WhatsAppFlyer";
// import WhatsAppButton from "./WhatsAppButton";
// export default function Layout({ children }) {
//   return (
//     <>
//       <Head>
//         <title>Joseph Anselm</title>
//         <meta name="description" content="Joseph Anselm Portfolio | Web, Applications, Tech Support and more.... " />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/images/favicon.jpg" />
//       </Head>
//       <Navbar />
//       <main>{children}</main>
//       <WhatsAppFlyer/>
//       <WhatsAppButton />
//       <Footer />
//       <BackToTop />
//     </>
//   );
// }



import React from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./footer";
import Head from "next/head";
import BackToTop from "./backtotop";
import WhatsAppFlyer from "./WhatsAppFlyer";
import WhatsAppButton from "./WhatsAppButton";

// Default SEO data for fallback
const defaultSEO = {
  title: "Joseph Anselm - Full Stack Developer & Tech Consultant",
  description: "Expert full stack developer specializing in modern web applications, cloud solutions, and digital transformation. Let's build something amazing together.",
  canonical: "https://anselmjoseph.com",
  ogImage: "https://anselmjoseph.com/images/og-image.jpg",
  keywords: "full stack developer, web development, software engineer, cloud solutions, tech consultant, IT Generalist",
  author: "Joseph Anselm",
  siteName: "Joseph Anselm Portfolio",
};

export default function Layout({ children, seo = {} }) {
  const router = useRouter();
  const currentPath = router.asPath;
  
  // Merge provided SEO with defaults
  const pageSEO = {
    ...defaultSEO,
    ...seo,
    canonical: seo.canonical || `${defaultSEO.canonical}${currentPath}`,
  };

  // Schema.org structured data for better Google visibility
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Joseph Anselm",
    "url": pageSEO.canonical,
    "image": pageSEO.ogImage,
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
    "description": pageSEO.description
  };

  // Breadcrumb structured data
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://josephanselm.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageSEO.title || "Page",
        "item": pageSEO.canonical
      }
    ]
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{pageSEO.title}</title>
        <meta name="description" content={pageSEO.description} />
        <meta name="keywords" content={pageSEO.keywords} />
        <meta name="author" content={pageSEO.author} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageSEO.canonical} />
        <meta property="og:title" content={pageSEO.title} />
        <meta property="og:description" content={pageSEO.description} />
        <meta property="og:image" content={pageSEO.ogImage} />
        <meta property="og:site_name" content={pageSEO.siteName} />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@josephanselm" />
        <meta name="twitter:creator" content="@josephanselm" />
        <meta name="twitter:title" content={pageSEO.title} />
        <meta name="twitter:description" content={pageSEO.description} />
        <meta name="twitter:image" content={pageSEO.ogImage} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={pageSEO.canonical} />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Mobile Web App Capable */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="New York" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        <meta name="ICBM" content="40.7128, -74.0060" />
      </Head>
      
      {/* Google Analytics Script (Place in _app.js for better performance) */}
      {/* Or use next/script for better loading */}
      
      <Navbar />
      
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>
      
      <main id="main-content">
        {children}
      </main>
      
      <WhatsAppFlyer />
      <WhatsAppButton />
      <Footer />
      <BackToTop />
    </>
  );
}