// export default {
//   name: "blogPost",
//   title: "Blog Post",
//   type: "document",

//   fields: [
//     {
//       name: "title",
//       type: "string",
//       validation: Rule => Rule.required(),
//     },

//     {
//       name: "slug",
//       type: "slug",
//       options: { source: "title", maxLength: 96 },
//       validation: Rule => Rule.required(),
//     },

//     {
//       name: "author",
//       type: "reference",
//       to: [{ type: "author" }],
//       options: {
//         disableNew: true,
//       },
//       validation: Rule => Rule.required(),
//     },

//     {
//       name: "category",
//       type: "reference",
//       to: [{ type: "category" }],
//       options: {
//         disableNew: true,
//       },
//       validation: Rule => Rule.required(),
//     },

//     {
//       name: "featuredImage",
//       type: "image",
//       options: { hotspot: true },
//       validation: Rule => Rule.required(),
//     },

//     {
//       name: "excerpt",
//       type: "text",
//       validation: Rule => Rule.required().max(200),
//     },

//     {
//       name: "body",
//       type: "blockContent",
//       validation: Rule => Rule.required(),
//     },
//   ],
// };


/**
 * SANITY SCHEMA FIX (JavaScript)
 * 
 * Apply these validation rules to your blogPost schema file
 * to prevent 500 errors by ensuring critical data is present
 * before publishing.
 */

export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(100).error('Title is required for SEO.')
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required().error('Slug is required to generate the page URL.')
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: Rule => Rule.required().error('Please select an author.')
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
      validation: Rule => Rule.required().error('Please select a category.')
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: Rule => Rule.required().error('Alt text is required for accessibility.')
        }
      ],
      // CRITICAL FIX: Ensure image is mandatory
      validation: Rule => Rule.required().error('A featured image is required to prevent frontend crashes.')
    },
    {
      name: 'body',
      title: 'Content Body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      validation: Rule => Rule.required().min(1).error('The article body cannot be empty.')
    },
    {
      name: 'publishedAt',
      title: 'Publishing Date',
      type: 'datetime',
      initialValue: () => (new Date()).toISOString(),
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}