import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import MenuPage from './pages/MenuPage'
import WelcomePage from './pages/WelcomePage'
import ExplorePage from './pages/ExplorePage'
import ChoicesIntroPage from './pages/ChoicesIntroPage'
import ChoicesPage from './pages/ChoicesPage'
import PhilosophyPage from './pages/PhilosophyPage'
import OfferingsPage from './pages/OfferingsPage'
import ContactPage from './pages/ContactPage'
import roundIcon from './assets/round.png'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/choices-intro" element={<ChoicesIntroPage />} />
        <Route path="/choices" element={<ChoicesPage />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/offerings" element={<OfferingsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: '1rem', md: '1.25rem' },
          right: { xs: '1rem', md: '1.25rem' },
          zIndex: 1400,
          pointerEvents: 'none',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.94 }}
          style={{ pointerEvents: 'auto' }}
        >
          <Link
            to="/menu"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Box
              component="img"
              src={roundIcon}
              alt="Menu"
              sx={{
                width: { xs: '42px', sm: '48px' },
                height: 'auto',
                objectFit: 'contain',
                cursor: 'pointer',
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.45))',
              }}
            />
          </Link>
        </motion.div>
      </Box>
    </Router>
  )
}

export default App
