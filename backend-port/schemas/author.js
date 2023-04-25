export default {
  name: 'author',
  title: 'Author',
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
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule) => Rule.uri({allowRelative: true}),
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          name: 'platform',
          type: 'string',
          title: 'Platform',
          options: {
            list: [
              {title: 'Twitter', value: 'twitter'},
              {title: 'LinkedIn', value: 'linkedin'},
              {title: 'GitHub', value: 'github'},
              {title: 'Dribbble', value: 'dribbble'},
            ],
          },
        },
        {
          name: 'url',
          type: 'url',
          title: 'URL',
        },
      ],
    },
  ],
}
