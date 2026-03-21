import { motion, AnimatePresence } from 'framer-motion'
import { avatarMap } from './characters'

function ConversationHistory({ conversations, characters, onSelect, onDelete }) {
  if (!conversations || conversations.length === 0) return null

  const getCharacter = (characterId) => {
    return characters.find((c) => c.id === characterId)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now - date
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (days === 0) return 'Today'
    if (days === 1) return 'Yesterday'
    if (days < 7) return `${days} days ago`
    return date.toLocaleDateString()
  }

  return (
    <div className="w-full">
      <h3 className="text-slate-700 text-sm font-semibold mb-3 px-1">Recent Conversations</h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-2 max-h-60 overflow-y-auto pr-1"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(168,139,250,0.3) transparent',
        }}
      >
        <AnimatePresence>
          {conversations.map((conversation) => {
            const character = getCharacter(conversation.character_id)
            const AvatarComponent = character ? avatarMap[character.id] : null

            return (
              <motion.div
                key={conversation.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelect(conversation)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/70 border border-purple-100/50 hover:bg-white/90 hover:border-purple-200 hover:shadow-md hover:shadow-purple-100/30 cursor-pointer transition-all duration-200 group"
              >
                {/* Character mini avatar */}
                <div className="flex-shrink-0">
                  {AvatarComponent ? (
                    <AvatarComponent size={32} hover={false} />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-purple-100" />
                  )}
                </div>

                {/* Conversation info */}
                <div className="flex-grow min-w-0">
                  <p className="text-slate-800 text-sm font-medium truncate">
                    {conversation.title || 'New conversation'}
                  </p>
                  <p className="text-slate-400 text-xs">
                    {character?.name || 'Unknown'} &middot; {formatDate(conversation.updated_at || conversation.created_at)}
                  </p>
                </div>

                {/* Delete button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    if (window.confirm('Are you sure you want to delete this conversation?')) {
                      onDelete(conversation.id)
                    }
                  }}
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-rose-50 text-slate-300 hover:text-rose-500 transition-all duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </button>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default ConversationHistory
