// lib/seo.js
export const siteConfig = {
  title: "Joseph Anselm - Full Stack Developer & Tech Consultant",
  description: "Expert full stack developer specializing in modern web applications, cloud solutions, and digital transformation.",
  url: "https://josephanselm.com",
  ogImage: "https://anselmjoseph.com/images/og-image.jpg",
  twitterHandle: "@josephanselm",
  author: "Joseph Anselm",
  siteName: "Joseph Anselm Portfolio",
  language: "en-US",
  locale: "en_US",
};

// SEO data for different page types
export const pageSEO = {
  home: {
    title: "Joseph Anselm | Full Stack Developer & Tech Consultant",
    description: "Expert full stack developer building modern web applications, cloud solutions, and digital experiences.",
    keywords: "full stack developer, web development, software engineer, cloud architect",
  },
  about: {
    title: "About Joseph Anselm | Full Stack Developer",
    description: "Learn about my journey, skills, and experience in full stack development and tech consulting.",
    keywords: "about, experience, skills, background, developer story",
  },
  portfolio: {
    title: "Portfolio | Joseph Anselm's Projects & Case Studies",
    description: "Explore my portfolio of web applications, projects, and case studies showcasing technical expertise.",
    keywords: "portfolio, projects, case studies, web applications, development work",
  },
  blog: {
    title: "Blog | Joseph Anselm - Tech Insights & Tutorials",
    description: "Read technical articles, tutorials, and insights about web development, cloud, and modern tech.",
    keywords: "blog, articles, tutorials, tech insights, web development blog",
  },
  contact: {
    title: "Contact Joseph Anselm | Get in Touch",
    description: "Ready to start a project? Get in touch for web development, consulting, or collaboration opportunities.",
    keywords: "contact, hire developer, consultation, project inquiry",
  },
};

// Helper function to generate SEO for blog posts
export function generateBlogPostSEO(post) {
  return {
    title: `${post.title} | Joseph Anselm`,
    description: post.excerpt || `${post.title} - Read this article on Joseph Anselm's blog.`,
    canonical: `https://anselmjoseph.com/blog/${post.slug}`,
    ogImage: post.featuredImage?.asset?.url || siteConfig.ogImage,
    keywords: `${post.tags?.join(", ") || ""}, blog, article`,
  };
}

// Helper for portfolio projects
export function generateProjectSEO(project) {
  return {
    title: `${project.title} | Portfolio Project`,
    description: project.description || `Check out ${project.title} in Joseph Anselm's portfolio.`,
    canonical: `https://anselmjoseph.com/portfolio/${project.slug}`,
    ogImage: project.image?.asset?.url || siteConfig.ogImage,
  };
}