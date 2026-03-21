import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn, signUp, configError } = useAuth()
  const navigate = useNavigate()

  const errorMessages = {
    'Invalid login credentials': 'The fates do not recognize these credentials.',
    'User already registered': 'A soul with this identity already walks among us.',
    'Password should be at least 6 characters': 'Your incantation must be at least 6 characters long.',
  }

  const getThemedError = (err) => {
    return errorMessages[err] || `The oracle speaks: ${err}`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (configError) {
      setLoading(false)
      setError(configError)
      return
    }

    const { error: authError } = isSignUp
      ? await signUp(email, password)
      : await signIn(email, password)

    setLoading(false)

    if (authError) {
      setError(getThemedError(authError.message))
    } else {
      navigate('/select')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-md mx-auto"
    >
      <div className="backdrop-blur-xl bg-white/80 border border-purple-200/50 rounded-2xl p-8 shadow-lg shadow-purple-200/20">
        {/* Fun subtitle */}
        <p className="text-center text-purple-500/70 text-sm font-medium tracking-wider uppercase mb-6">
          Seek the wisdom of the ancients
        </p>

        {/* Toggle */}
        <div className="flex mb-8 bg-purple-50/60 rounded-xl p-1">
          <button
            type="button"
            onClick={() => { setIsSignUp(false); setError('') }}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              !isSignUp
                ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white shadow-md shadow-amber-300/30'
                : 'text-purple-400 hover:text-purple-600'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setIsSignUp(true); setError('') }}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              isSignUp
                ? 'bg-gradient-to-r from-purple-500 to-teal-400 text-white shadow-md shadow-purple-300/30'
                : 'text-purple-400 hover:text-purple-600'
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <AnimatePresence>
            {configError && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-amber-600 text-sm text-center px-2"
              >
                {configError}
              </motion.div>
            )}
          </AnimatePresence>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="w-full px-4 py-3 bg-purple-50/50 border border-purple-200/30 rounded-xl text-purple-900 placeholder-purple-400/50 focus:outline-none focus:border-purple-400/50 focus:bg-white focus:ring-2 focus:ring-purple-200/30 transition-all duration-300"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              minLength={6}
              className="w-full px-4 py-3 bg-purple-50/50 border border-purple-200/30 rounded-xl text-purple-900 placeholder-purple-400/50 focus:outline-none focus:border-purple-400/50 focus:bg-white focus:ring-2 focus:ring-purple-200/30 transition-all duration-300"
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-rose-500 text-sm text-center italic px-2"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={loading || Boolean(configError)}
            className="w-full py-3 rounded-xl font-medium text-white bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 hover:from-amber-300 hover:via-orange-400 hover:to-rose-400 transition-all duration-300 shadow-lg shadow-orange-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                {isSignUp ? 'Creating account...' : 'Entering...'}
              </span>
            ) : (
              isSignUp ? 'Begin Your Journey' : 'Enter the Oracle'
            )}
          </button>
        </form>
      </div>
    </motion.div>
  )
}

export default AuthForm
