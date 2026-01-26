// export default {
//   name: 'blogPost',
//   title: 'Blog Post',
//   type: 'document',
//   fields: [
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96,
//       },
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'author',
//       title: 'Author',
//       type: 'reference',
//       to: [{type: 'author'}],
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'featuredImage',
//       title: 'Featured Image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'excerpt',
//       title: 'Excerpt',
//       type: 'text',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'body',
//       title: 'Body',
//       type: 'blockContent',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'category',
//       title: 'Category',
//       type: 'reference',
//       to: [{ type: 'category' }],
//       validation: (Rule) => Rule.required(),
//     }
//   ],
// }



export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    },

    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },

    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      options: {
        disableNew: true,
      },
      validation: Rule => Rule.required(),
    },

    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      options: {
        disableNew: true,
      },
      validation: Rule => Rule.required(),
    },

    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },

    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: Rule => Rule.required().max(200),
    },

    {
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: Rule => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "featuredImage",
    },
  },
};
