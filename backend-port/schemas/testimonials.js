export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        list: [
          { title: 'Mr', value: 'title1' },
          { title: 'Mrs', value: 'title2' },
          { title: 'Ms', value: 'title2' },
          { title: 'Miss', value: 'title4' },
          { title: 'Dr', value: 'title5' },
          { title: 'Chief', value: 'title6' },
          { title: 'Professor', value: 'title7' },
          { title: 'Sir', value: 'title8' },
          { title: 'Lady', value: 'title9' },
          { title: 'Pastor', value: 'title10' },
          { title: 'Bishop', value: 'title11' },
          { title: 'Archbishop', value: 'title12' },
          // Add more title options as needed
        ],
      },
    },
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
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        inputUtc: true,
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      },
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
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5).required(),
      options: {
        list: [
          { title: '1 Star', value: 1 },
          { title: '2 Stars', value: 2 },
          { title: '3 Stars', value: 3 },
          { title: '4 Stars', value: 4 },
          { title: '5 Stars', value: 5 },
        ],
      },
    },
    
  ],
};
