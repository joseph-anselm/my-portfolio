import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'


import author from './author'
import blogPost from './blogpost'
import project from './project'
import contactMessage from './contactMessage'
import blockContent from './blockContent'
import category from './category'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    author,
    blogPost,
    project,    
    blockContent,
    contactMessage,
    category,
    // ... additional document types go here
  ]),
})
