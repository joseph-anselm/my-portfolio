export default {
  name: "blogPost",
  title: "Blog Post",
  type: "document",

  fields: [
    {
      name: "title",
      type: "string",
      validation: Rule => Rule.required(),
    },

    {
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: Rule => Rule.required(),
    },

    {
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
      options: {
        disableNew: true,
      },
      validation: Rule => Rule.required(),
    },

    {
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      options: {
        disableNew: true,
      },
      validation: Rule => Rule.required(),
    },

    {
      name: "featuredImage",
      type: "image",
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },

    {
      name: "excerpt",
      type: "text",
      validation: Rule => Rule.required().max(200),
    },

    {
      name: "body",
      type: "blockContent",
      validation: Rule => Rule.required(),
    },
  ],
};
