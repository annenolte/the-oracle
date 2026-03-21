import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'
import { characters } from '../data/characters'
import ParticleBackground from '../components/ParticleBackground'
import CharacterCard from '../components/CharacterCard'
import ConversationHistory from '../components/ConversationHistory'
import {
  culturalBorders,
  culturalSymbols,
  culturalPatternBgs,
} from '../components/CulturalPatterns'

const mythologyGroups = [
  { name: 'Greek', icon: null, color: '#F5C842', secondColor: '#FF8C00' },
  { name: 'Norse', icon: null, color: '#5BA4CF', secondColor: '#7B68EE' },
  { name: 'Egyptian', icon: null, color: '#1ABC9C', secondColor: '#FFD700' },
  { name: 'East Asian', icon: null, color: '#E74C3C', secondColor: '#FF4081' },
]

function CharacterSelect() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    loadConversations()
  }, [])

  const loadConversations = async () => {
    const { data } = await supabase
      .from('conversations')
      .select('*')
      .order('updated_at', { ascending: false })

    if (data) {
      setConversations(data)
    }
  }

  const handleSelectConversation = (conversation) => {
    navigate(`/chat/${conversation.character_id}/${conversation.id}`)
  }

  const handleDeleteConversation = async (id) => {
    await supabase.from('conversations').delete().eq('id', id)
    setConversations((prev) => prev.filter((c) => c.id !== id))
  }

  const handleSelectCharacter = (character) => {
    navigate(`/chat/${character.id}`)
  }

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative"
    >
      <ParticleBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1
              className="text-4xl font-bold text-purple-900 mb-1"
              style={{ fontFamily: "'Cinzel Decorative', Georgia, serif" }}
            >
              Choose Your Oracle
            </h1>
            <p className="text-slate-500 text-sm">{user?.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 rounded-xl text-sm text-purple-700 hover:text-purple-900 bg-white/50 hover:bg-white/70 border-2 border-purple-300 hover:border-purple-400 transition-all duration-300 font-medium"
          >
            Sign Out
          </button>
        </div>

        {/* Conversation History */}
        {conversations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 bg-white/60 backdrop-blur-xl rounded-3xl p-6 border border-purple-100/50 shadow-lg shadow-purple-100/20"
          >
            <ConversationHistory
              conversations={conversations}
              characters={characters}
              onSelect={handleSelectConversation}
              onDelete={handleDeleteConversation}
            />
          </motion.div>
        )}

        {/* Character Sections by Mythology */}
        {mythologyGroups.map((group, groupIndex) => {
          const groupCharacters = characters.filter((c) => c.mythology === group.name)
          if (groupCharacters.length === 0) return null

          const BorderComponent = culturalBorders[group.name]
          const SymbolsComponent = culturalSymbols[group.name]
          const PatternBgComponent = culturalPatternBgs[group.name]

          return (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + groupIndex * 0.1 }}
              className="mb-10"
            >
              {/* Cultural border on top of section */}
              {BorderComponent && (
                <BorderComponent color={group.color} opacity={0.5} height={18} />
              )}

              {/* Section Header with cultural symbols */}
              <div className="flex items-center gap-3 my-4">
                <h2
                  className="text-xl font-bold text-slate-800"
                  style={{ fontFamily: "'Cinzel Decorative', Georgia, serif" }}
                >
                  {group.name} Mythology
                </h2>
                <div
                  className="flex-grow h-0.5 rounded-full"
                  style={{ background: `linear-gradient(to right, ${group.color}, ${group.secondColor}, transparent)` }}
                />
              </div>

              {/* Cultural symbols decoration */}
              <div className="flex justify-center mb-3 opacity-60">
                {SymbolsComponent && <SymbolsComponent opacity={0.4} />}
              </div>

              {/* Section with cultural pattern background */}
              <div className="relative rounded-2xl p-4 overflow-hidden">
                {PatternBgComponent && <PatternBgComponent opacity={0.04} />}
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {groupCharacters.map((character, index) => (
                    <motion.div
                      key={character.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + groupIndex * 0.1 + index * 0.05 }}
                    >
                      <CharacterCard
                        character={character}
                        onClick={() => handleSelectCharacter(character)}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Cultural border on bottom of section */}
              {BorderComponent && (
                <div className="mt-2" style={{ transform: 'scaleY(-1)' }}>
                  <BorderComponent color={group.color} opacity={0.3} height={12} />
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default CharacterSelect
