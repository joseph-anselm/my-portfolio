// // utils/blogApi.js
// import sanityClient from '@/client'

// export async function getCommentsForPost(postId) {
//   const query = `
//     *[_type == "comment" && post._ref == $postId && approved == true] | order(createdAt desc) {
//       _id,
//       author,
//       content,
//       createdAt,
//       "parentId": parentComment._ref
//     }
//   `
//   return await sanityClient.fetch(query, { postId })
// }

// export async function getReactionCounts(postId) {
//   const query = `
//     {
//       "likes": count(*[_type == "reaction" && post._ref == $postId && type == "like"]),
//       "dislikes": count(*[_type == "reaction" && post._ref == $postId && type == "dislike"])
//     }
//   `
//   return await sanityClient.fetch(query, { postId })
// }

// export async function getUserReaction(postId, userIdentifier) {
//   const query = `
//     *[_type == "reaction" && post._ref == $postId && userIdentifier == $userIdentifier][0] {
//       _id,
//       type
//     }
//   `
//   return await sanityClient.fetch(query, { postId, userIdentifier })
// }

// export async function addComment(commentData) {
//   return await sanityClient.create({
//     _type: 'comment',
//     ...commentData
//   })
// }

// export async function addReaction(reactionData) {
//   // Check if user already reacted
//   const existing = await getUserReaction(reactionData.post._ref, reactionData.userIdentifier)
  
//   if (existing) {
//     // Update existing reaction
//     if (existing.type === reactionData.type) {
//       // Remove reaction if same type clicked
//       await sanityClient.delete(existing._id)
//       return { action: 'removed' }
//     } else {
//       // Update to new type
//       await sanityClient.patch(existing._id).set({ type: reactionData.type }).commit()
//       return { action: 'updated', type: reactionData.type }
//     }
//   } else {
//     // Create new reaction
//     await sanityClient.create({
//       _type: 'reaction',
//       ...reactionData
//     })
//     return { action: 'added', type: reactionData.type }
//   }
// }

// // Generate user identifier (simplified version)
// export function generateUserIdentifier() {
//   if (typeof window === 'undefined') return ''
//   // In production, you might want to use a more robust method
//   return localStorage.getItem('blog_user_id') || 
//          `user_${Math.random().toString(36).substr(2, 9)}_${Date.now()}`
// }

// export function storeUserIdentifier(id) {
//   if (typeof window !== 'undefined') {
//     localStorage.setItem('blog_user_id', id)
//   }
// }


// utils/blogApi.js - Fixed query
import sanityClient from '@/client'

export async function getCommentsForPost(postId) {
  const query = `
    *[_type == "comment" && post._ref == $postId && approved == true] | order(createdAt desc) {
      _id,
      author,
      content,
      createdAt,
      "parentId": parentComment._ref
    }
  `
  return await sanityClient.fetch(query, { postId })
}

export async function getReactionCounts(postId) {
  const query = `
    {
      "likes": count(*[_type == "reaction" && post._ref == $postId && type == "like"]),
      "dislikes": count(*[_type == "reaction" && post._ref == $postId && type == "dislike"])
    }
  `
  return await sanityClient.fetch(query, { postId })
}

export async function getUserReaction(postId, userIdentifier) {
  const query = `
    *[_type == "reaction" && post._ref == $postId && userIdentifier == $userIdentifier][0] {
      _id,
      type
    }
  `
  return await sanityClient.fetch(query, { postId, userIdentifier })
}

export async function addComment(commentData) {
  return await sanityClient.create({
    _type: 'comment',
    ...commentData
  })
}








export async function addReaction(reactionData) {
  console.log('Starting addReaction with:', reactionData)
  
  // Check if user already reacted
  const existing = await getUserReaction(reactionData.post._ref, reactionData.userIdentifier)
  console.log('Existing reaction found:', existing)
  
  if (existing && existing._id) {
    // Update existing reaction
    if (existing.type === reactionData.type) {
      // Remove reaction if same type clicked
      console.log('Deleting reaction with ID:', existing._id)
      try {
        await sanityClient.delete(existing._id)
        console.log('Reaction deleted successfully')
        return { action: 'removed' }
      } catch (deleteError) {
        console.error('Error deleting reaction:', deleteError)
        throw deleteError
      }
    } else {
      // Update to new type
      console.log('Updating reaction to:', reactionData.type)
      try {
        await sanityClient
          .patch(existing._id)
          .set({ 
            type: reactionData.type,
            createdAt: new Date().toISOString() // Update timestamp
          })
          .commit()
        console.log('Reaction updated successfully')
        return { action: 'updated', type: reactionData.type }
      } catch (updateError) {
        console.error('Error updating reaction:', updateError)
        throw updateError
      }
    }
  } else {
    // Create new reaction
    console.log('Creating new reaction')
    try {
      const newReaction = {
        _type: 'reaction',
        post: {
          _type: 'reference',
          _ref: reactionData.post._ref,
        },
        userIdentifier: reactionData.userIdentifier,
        type: reactionData.type,
        createdAt: reactionData.createdAt || new Date().toISOString()
      }
      
      console.log('Creating reaction:', newReaction)
      const result = await sanityClient.create(newReaction)
      console.log('Reaction created:', result)
      return { action: 'added', type: reactionData.type }
    } catch (createError) {
      console.error('Error creating reaction:', createError)
      throw createError
    }
  }
}

// Generate user identifier
export function generateUserIdentifier() {
  if (typeof window === 'undefined') return ''
  
  try {
    let userId = localStorage.getItem('blog_user_id')
    if (!userId) {
      userId = `user_${Math.random().toString(36).substr(2, 9)}_${Date.now()}`
      localStorage.setItem('blog_user_id', userId)
    }
    return userId
  } catch (error) {
    console.error('Error accessing localStorage:', error)
    return `temp_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`
  }
}

export function storeUserIdentifier(id) {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('blog_user_id', id)
    } catch (error) {
      console.error('Error storing user identifier:', error)
    }
  }
}

// Generate user identifier
