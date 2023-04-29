export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'enableBlogs',
      title: 'Enable Blogs',
      type: 'boolean',
      description: 'Check this box to enable the creation of blog posts.',
    },
    {
      name: 'enableProjects',
      title: 'Enable Projects',
      type: 'boolean',
      description: 'Check this box to enable the creation of project posts.',
    },
    {
      name: 'enableTestimonials',
      title: 'Enable Testimonials',
      type: 'boolean',
      description: 'Check this box to enable the creation of testimonial posts.',
    },
    {
      name: 'enableContactForm',
      title: 'Enable Contact Form',
      type: 'boolean',
      description: 'Check this box to enable the display of contact form on the website.',
    },
  ],
}
