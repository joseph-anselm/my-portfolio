// blockContent.js
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      type: 'block',
    },
    {
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    // {
    //   type: 'text',
    // },
  ],
}
