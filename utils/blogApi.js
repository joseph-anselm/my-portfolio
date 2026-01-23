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
  // Check if user already reacted
  const existing = await getUserReaction(reactionData.post._ref, reactionData.userIdentifier)
  
  if (existing) {
    // Update existing reaction
    if (existing.type === reactionData.type) {
      // Remove reaction if same type clicked
      await sanityClient.delete(existing._id)
      return { action: 'removed' }
    } else {
      // Update to new type
      await sanityClient.patch(existing._id).set({ type: reactionData.type }).commit()
      return { action: 'updated', type: reactionData.type }
    }
  } else {
    // Create new reaction
    await sanityClient.create({
      _type: 'reaction',
      ...reactionData
    })
    return { action: 'added', type: reactionData.type }
  }
}

// Generate user identifier
export function generateUserIdentifier() {
  if (typeof window === 'undefined') return ''
  try {
    return localStorage.getItem('blog_user_id') || 
           `user_${Math.random().toString(36).substr(2, 9)}_${Date.now()}`
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