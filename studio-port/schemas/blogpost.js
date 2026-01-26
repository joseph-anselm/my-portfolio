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



// export default {
//   name: "blogPost",
//   title: "Blog Post",
//   type: "document",

//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//       validation: Rule => Rule.required(),
//     },

//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "title",
//         maxLength: 96,
//       },
//       validation: Rule => Rule.required(),
//     },

//     {
//       name: "author",
//       title: "Author",
//       type: "reference",
//       to: [{ type: "author" }],
//       options: {
//         disableNew: true,
//       },
//       validation: Rule => Rule.required(),
//     },

//     {
//       name: "category",
//       title: "Category",
//       type: "reference",
//       to: [{ type: "category" }],
//       options: {
//         disableNew: true,
//       },
//       validation: Rule => Rule.required(),
//     },

//     {
//       name: "featuredImage",
//       title: "Featured Image",
//       type: "image",
//       options: { hotspot: true },
//       validation: Rule => Rule.required(),
//     },

//     {
//       name: "excerpt",
//       title: "Excerpt",
//       type: "text",
//       rows: 3,
//       validation: Rule => Rule.required().max(200),
//     },

//     {
//       name: "body",
//       title: "Body",
//       type: "blockContent",
//       validation: Rule => Rule.required(),
//     },
//   ],

//   preview: {
//     select: {
//       title: "title",
//       media: "featuredImage",
//     },
//   },
// };



// ===================================
// schemas/blogPost.js
// ===================================
export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(200),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'Brief summary of the post (for meta description)',
      validation: (Rule) => Rule.max(160),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
        {
          type: 'code',
          options: {
            language: 'javascript',
            languageAlternatives: [
              { title: 'JavaScript', value: 'javascript' },
              { title: 'TypeScript', value: 'typescript' },
              { title: 'HTML', value: 'html' },
              { title: 'CSS', value: 'css' },
              { title: 'Python', value: 'python' },
              { title: 'Java', value: 'java' },
              { title: 'C++', value: 'cpp' },
            ],
            withFilename: true,
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Featured posts appear at the top of the blog list',
      initialValue: false,
    },
    {
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredImage',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const { title, author, publishedAt } = selection;
      return {
        title,
        subtitle: `${author} - ${new Date(publishedAt).toLocaleDateString()}`,
        media: selection.media,
      };
    },
  },
};
