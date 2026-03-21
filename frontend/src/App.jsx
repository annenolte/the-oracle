import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import CharacterSelect from './pages/CharacterSelect'
import ChatPage from './pages/ChatPage'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/select"
              element={
                <ProtectedRoute>
                  <CharacterSelect />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat/:characterId"
              element={
                <ProtectedRoute>
                  <ChatPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/chat/:characterId/:conversationId"
              element={
                <ProtectedRoute>
                  <ChatPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
