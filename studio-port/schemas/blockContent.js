// // blockContent.js
// export default {
//   title: 'Block Content',
//   name: 'blockContent',
//   type: 'array',
//   of: [
//     {
//       type: 'block',
//     },
//     {
//       type: 'image',
//       fields: [
//         {
//           name: 'alt',
//           title: 'Alternative text',
//           type: 'string',
//           options: {
//             isHighlighted: true,
//           },
//         },
//         {
//           name: 'caption',
//           title: 'Caption',
//           type: 'string',
//           options: {
//             isHighlighted: true,
//           },
//         },
//         {
//           name: 'image',
//           title: 'Image',
//           type: 'image',
//           options: {
//             hotspot: true,
//           },
//         },
//       ],
//     },
//     // {
//     //   type: 'text',
//     // },
//   ],
// }


export default {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
            ],
          },
        ],
      },
    },
    {
      type: "image",
      options: { hotspot: true },
    },
  ],
};
