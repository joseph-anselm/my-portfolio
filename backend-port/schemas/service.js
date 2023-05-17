export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'string',
        validation: (Rule) => Rule.required(),
        options: {
          list: [
            { title: 'React Icon 1', value: 'FaLaptopCode' },
            { title: 'React Icon 2', value: 'FaMobileAlt' },
            { title: 'FontAwesome Icon 1', value: 'FaTools' },
            { title: 'FontAwesome Search', value: 'FaSearch' },
            { title: 'Cloud Icon', value: 'FaCloud' },
            { title: 'Server Icon', value: 'FaServer' },
            { title: 'Laptop Icon', value: 'FaLaptop' },
            { title: 'Briefcase Icon', value: 'FaBriefcase' },
            // Add more icon options as needed
          ],
        },
      },
    ],
  };
  