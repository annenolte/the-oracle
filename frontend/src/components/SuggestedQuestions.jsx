import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

function SuggestedQuestions({ questions, onSelect, color = '#F5C842' }) {
  if (!questions || questions.length === 0) return null

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-4 py-3"
    >
      {questions.map((question, index) => (
        <motion.button
          key={index}
          variants={item}
          onClick={() => onSelect(question)}
          className="text-left text-sm px-4 py-3 rounded-xl bg-white/80 backdrop-blur-sm border border-purple-200/40 text-slate-700 hover:text-slate-900 transition-all duration-300 shadow-sm"
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = `${color}80`
            e.currentTarget.style.boxShadow = `0 4px 20px ${color}20`
            e.currentTarget.style.backgroundColor = `${color}15`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(196,181,253,0.4)'
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)'
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.8)'
          }}
        >
          {question}
        </motion.button>
      ))}
    </motion.div>
  )
}

export default SuggestedQuestions
