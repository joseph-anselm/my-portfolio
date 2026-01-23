// components/ReactionButtons.jsx
import React, { useState, useEffect } from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { 
  getReactionCounts, 
  getUserReaction, 
  addReaction, 
  generateUserIdentifier,
  storeUserIdentifier 
} from '@/utils/blogApi'

const ReactionButtons = ({ postId, initialCounts = { likes: 0, dislikes: 0 } }) => {
  const [reactionCounts, setReactionCounts] = useState(initialCounts)
  const [userReaction, setUserReaction] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [userIdentifier, setUserIdentifier] = useState('')

  useEffect(() => {
    // Generate or retrieve user identifier
    const identifier = generateUserIdentifier()
    setUserIdentifier(identifier)
    storeUserIdentifier(identifier)

    // Fetch user's reaction
    const fetchUserReaction = async () => {
      if (!postId || !identifier) return
      const reaction = await getUserReaction(postId, identifier)
      setUserReaction(reaction?.type || null)
    }

    fetchUserReaction()
  }, [postId])

  const handleReaction = async (type) => {
    if (!postId || !userIdentifier || isLoading) return

    setIsLoading(true)
    try {
      const result = await addReaction({
        post: {
          _type: 'reference',
          _ref: postId
        },
        userIdentifier,
        type,
        createdAt: new Date().toISOString()
      })

      // Update local state
      if (result.action === 'removed') {
        setUserReaction(null)
        setReactionCounts(prev => ({
          ...prev,
          [type]: Math.max(0, prev[type] - 1)
        }))
      } else if (result.action === 'updated') {
        setUserReaction(type)
        const oldType = type === 'like' ? 'dislike' : 'like'
        setReactionCounts(prev => ({
          likes: type === 'like' ? prev.likes + 1 : Math.max(0, prev.likes - 1),
          dislikes: type === 'dislike' ? prev.dislikes + 1 : Math.max(0, prev.dislikes - 1)
        }))
      } else if (result.action === 'added') {
        setUserReaction(type)
        setReactionCounts(prev => ({
          ...prev,
          [type]: prev[type] + 1
        }))
      }

      // Refresh counts from server
      const updatedCounts = await getReactionCounts(postId)
      setReactionCounts(updatedCounts)

    } catch (error) {
      console.error('Error updating reaction:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => handleReaction('like')}
        disabled={isLoading}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
          userReaction === 'like'
            ? 'bg-blue-50 text-blue-600 border-2 border-blue-200'
            : 'bg-slate-50 text-slate-600 border-2 border-slate-100 hover:border-blue-200 hover:text-blue-500'
        } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
      >
        <ThumbsUp size={20} className={userReaction === 'like' ? 'fill-blue-600' : ''} />
        <span className="font-bold">{reactionCounts.likes}</span>
      </button>

      <button
        onClick={() => handleReaction('dislike')}
        disabled={isLoading}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
          userReaction === 'dislike'
            ? 'bg-rose-50 text-rose-600 border-2 border-rose-200'
            : 'bg-slate-50 text-slate-600 border-2 border-slate-100 hover:border-rose-200 hover:text-rose-500'
        } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}`}
      >
        <ThumbsDown size={20} className={userReaction === 'dislike' ? 'fill-rose-600' : ''} />
        <span className="font-bold">{reactionCounts.dislikes}</span>
      </button>
    </div>
  )
}

export default ReactionButtons