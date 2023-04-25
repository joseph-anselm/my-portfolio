import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import author from './author'
import blogPost from './blogpost'
import project from './project'
import contactForm from './contactForm'
import blockContent from './blockContent'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    author,
    blogPost,
    project,
    contactForm,
    blockContent,
    // ... additional document types go here
  ]),
})
