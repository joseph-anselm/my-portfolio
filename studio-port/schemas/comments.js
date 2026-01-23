// schemas/comment.js
export default {
  name: 'comment',
  title: 'Comment',
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
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: Rule => Rule.required().min(2).max(100)
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      validation: Rule => Rule.required().min(10).max(1000)
    },
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Comments must be approved before showing',
      initialValue: false
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'parentComment',
      title: 'Reply To',
      type: 'reference',
      to: [{ type: 'comment' }],
      description: 'If this is a reply to another comment'
    }
  ],
  preview: {
    select: {
      author: 'author',
      content: 'content',
      post: 'post.title'
    },
    prepare({ author, content, post }) {
      return {
        title: `${author} on ${post}`,
        subtitle: content.substring(0, 50) + '...'
      }
    }
  }
}