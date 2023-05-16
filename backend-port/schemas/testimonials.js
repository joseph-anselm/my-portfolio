export default {
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'timestamp',
        title: 'Timestamp',
        type: 'datetime',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enable image hotspot for cropping
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "rating",
        title: "Rating",
        type: "number",
        validation: (Rule) => Rule.min(1).max(5).required(),
        options: {
          list: [
            { title: "1 Star", value: 1 },
            { title: "2 Stars", value: 2 },
            { title: "3 Stars", value: 3 },
            { title: "4 Stars", value: 4 },
            { title: "5 Stars", value: 5 },
          ],
        },
      },
    ],
  };
  