// schemas/reaction.js
export default {
  name: 'reaction',
  title: 'Reaction',
  type: 'document',
  fields: [
    {
      name: 'post',
      title: 'Blog Post',
      type: 'reference',
      to: [{ type: 'blogPost' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'userIdentifier',
      title: 'User Identifier',
      type: 'string',
      description: 'Unique identifier for user (IP + User-Agent hash)',
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Reaction Type',
      type: 'string',
      options: {
        list: [
          { title: 'Like', value: 'like' },
          { title: 'Dislike', value: 'dislike' }
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }
  ],
  preview: {
    select: {
      type: 'type',
      post: 'post.title',
      user: 'userIdentifier'
    },
    prepare({ type, post, user }) {
      return {
        title: `${type.toUpperCase()} on ${post}`,
        subtitle: `User: ${user.substring(0, 20)}...`
      }
    }
  }
}