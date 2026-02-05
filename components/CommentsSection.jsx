// components/CommentsSection.jsx
import React, { useState, useEffect } from 'react'
import { MessageSquare, Send, User, Clock, AlertCircle } from 'lucide-react'
import { getCommentsForPost, addComment } from '@/utils/blogApi'

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    author: '',
    email: '',
    content: '',
    parentComment: null
  })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    fetchComments()
  }, [postId])

  const fetchComments = async () => {
    if (!postId) return
    setLoading(true)
    try {
      const fetchedComments = await getCommentsForPost(postId)
      setComments(fetchedComments)
    } catch (error) {
      console.error('Error fetching comments:', error)
    } finally {
      setLoading(false)
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.author.trim()) newErrors.author = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.content.trim() || formData.content.length < 10) 
      newErrors.content = 'Comment must be at least 10 characters'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm() || submitting || !postId) return

    setSubmitting(true)
    setSuccess(false)
    
    try {
      await addComment({
        post: {
          _type: 'reference',
          _ref: postId
        },
        author: formData.author.trim(),
        email: formData.email.trim(),
        content: formData.content.trim(),
        approved: false, // Requires admin approval
        createdAt: new Date().toISOString(),
        ...(formData.parentComment && {
          parentComment: {
            _type: 'reference',
            _ref: formData.parentComment
          }
        })
      })

      // Reset form
      setFormData({
        author: '',
        email: '',
        content: '',
        parentComment: null
      })
      setErrors({})
      setSuccess(true)

      // Show success message for 3 seconds
      setTimeout(() => setSuccess(false), 3000)

      // Refresh comments after a delay (for approved comments)
      setTimeout(fetchComments, 1000)

    } catch (error) {
      console.error('Error submitting comment:', error)
      setErrors({ submit: 'Failed to submit comment. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleReply = (commentId) => {
    setFormData(prev => ({
      ...prev,
      parentComment: commentId
    }))
    // Scroll to form
    document.getElementById('comment-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="max-w-7xl  mt-20 pt-12 border-t border-slate-100">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
              <MessageSquare size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-sora">Comments</h3>
              <p className="text-slate-500 mt-1">
                Join the conversation ({comments.length} comment{comments.length !== 1 ? 's' : ''})
              </p>
            </div>
          </div>
        </div>

        {/* Comment Form */}
        <div id="comment-form" className="bg-slate-50 rounded-3xl p-8 mb-10">
          <h4 className="text-lg font-bold text-slate-900 mb-6">
            {formData.parentComment ? 'Leave a Reply' : 'Leave a Comment'}
          </h4>

          {success && (
            <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-2">
                <AlertCircle size={18} />
                <span className="font-medium">Comment submitted for review!</span>
              </div>
              <p className="text-sm mt-1">Your comment will appear after approval by our moderators.</p>
            </div>
          )}

          {errors.submit && (
            <div className="mb-6 p-4 bg-rose-50 text-rose-700 rounded-xl border border-rose-200">
              <div className="flex items-center gap-2">
                <AlertCircle size={18} />
                <span className="font-medium">{errors.submit}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.author ? 'border-rose-300' : 'border-slate-200'
                  } bg-white focus:outline-none focus:border-blue-500 transition-colors`}
                  placeholder="Your name"
                />
                {errors.author && (
                  <p className="mt-2 text-sm text-rose-600">{errors.author}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    errors.email ? 'border-rose-300' : 'border-slate-200'
                  } bg-white focus:outline-none focus:border-blue-500 transition-colors`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-rose-600">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Comment *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows="4"
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  errors.content ? 'border-rose-300' : 'border-slate-200'
                } bg-white focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                placeholder="Share your thoughts..."
              />
              {errors.content && (
                <p className="mt-2 text-sm text-rose-600">{errors.content}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">
                * Required fields
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Post Comment
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Comments List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500">Loading comments...</p>
          </div>
        ) : comments.length > 0 ? (
          <div className="space-y-8">
            {comments.map((comment) => (
              <div key={comment._id} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <User size={18} />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">{comment.author}</h5>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                        <Clock size={14} />
                        {formatDate(comment.createdAt)}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleReply(comment._id)}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Reply
                  </button>
                </div>
                <p className="mt-4 text-slate-700 leading-relaxed whitespace-pre-line">
                  {comment.content}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-slate-50 rounded-3xl">
            <MessageSquare size={48} className="mx-auto text-slate-300 mb-4" />
            <h5 className="text-lg font-bold text-slate-700">No comments yet</h5>
            <p className="text-slate-500 mt-2">Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CommentsSection