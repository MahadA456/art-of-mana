import { useNavigate } from 'react-router-dom'
import backMana from '../assets/back_mana.jpg'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

function MenuPage() {
  const navigate = useNavigate()

  const menuItems = [
    'Welcome',
    'Explore',
    'Choices',
    'Philosophy',
    'Offerings',
    'Contact'
  ]

  const handleMenuItemClick = (item) => {
    if (item === 'Welcome') {
      navigate('/welcome')
    } else if (item === 'Explore') {
      navigate('/explore')
    } else if (item === 'Choices') {
      navigate('/choices-intro')
    } else if (item === 'Philosophy') {
      navigate('/philosophy')
    } else if (item === 'Offerings') {
      navigate('/offerings')
    } else if (item === 'Contact') {
      navigate('/contact')
    }
  }

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh', // Changed to minHeight to allow content expansion
        display: 'flex',
        backgroundImage: `url(${backMana})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
      }}
    >
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        style={{
          height: '100%',
          width: { xs: 'min(200px, 70vw)', sm: 'min(250px, 75vw)', md: 'min(300px, 82vw)' }, // Smaller width for mobile
          backgroundColor: 'rgba(0, 0, 0, 0.88)',
          backdropFilter: 'blur(10px)',
          padding: {
            xs: 'clamp(1rem, 4vw, 1.5rem) clamp(0.75rem, 3vw, 1rem)', // Reduced padding for mobile
            sm: 'clamp(1.25rem, 4.5vw, 1.75rem) clamp(0.9rem, 3.5vw, 1.25rem)',
            md: 'clamp(1.5rem, 5vw, 2.25rem) clamp(1rem, 4vw, 1.6rem)',
          },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 'clamp(0.75rem, 2.5vw, 1rem)', sm: 'clamp(1rem, 3vw, 1.25rem)', md: 'clamp(1rem, 3.5vw, 1.5rem)' }, // Reduced gap for mobile
        }}
      >
        {menuItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            onClick={() => handleMenuItemClick(item)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              padding: { xs: '0.3rem 0', sm: '0.4rem 0', md: '0.45rem 0' }, // Reduced padding for mobile
            }}
            whileHover={{ x: 10 }}
          >
            <span
              style={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: { xs: 'clamp(1rem, 3.5vw, 1.25rem)', sm: 'clamp(1.15rem, 3.8vw, 1.5rem)', md: 'clamp(1.35rem, 4vw, 1.85rem)' }, // Smaller font for mobile
                lineHeight: 1.2, // Adjusted for readability
                letterSpacing: '0%',
                textTransform: 'capitalize',
                color: 'white',
              }}
            >
              {item}
            </span>
            <motion.svg
              width="14" // Smaller SVG for mobile
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: { xs: 'clamp(0.3rem, 2vw, 0.5rem)', sm: 'clamp(0.4rem, 2.3vw, 0.75rem)', md: 'clamp(0.5rem, 2.5vw, 1rem)' } }} // Reduced margin for mobile
              whileHover={{ x: 5 }}
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.div>
        ))}
      </motion.div>

      {/* Close Button - 9 Dots in bottom center */}
      <Box
        sx={{
          position: 'absolute', // Changed to absolute to stay within parent
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: '0.75rem', sm: '1rem', md: '1.5rem' }, // Reduced padding for mobile
          gap: { xs: '0.25rem', sm: '0.5rem', md: '0.75rem' }, // Reduced gap for mobile
        }}
      >
        <Box
          component={motion.div}
          onClick={() => navigate('/')}
          sx={{
            cursor: 'pointer',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: { xs: '1px', sm: '2px', md: '3px' }, // Smaller gap for mobile
            width: { xs: '20px', sm: '24px', md: '28px' }, // Smaller size for mobile
            height: { xs: '20px', sm: '24px', md: '28px' },
          }}
          whileHover={{
            scale: 1.2,
            rotate: -90,
            transition: { duration: 0.3, ease: 'easeInOut' }
          }}
          whileTap={{ scale: 0.95 }}
        >
          {[...Array(9)].map((_, index) => (
            <Box
              key={index}
              component={motion.div}
              sx={{
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '100%',
                height: '100%',
                minWidth: { xs: '5px', sm: '6px', md: '7px' }, // Smaller dots for mobile
                minHeight: { xs: '5px', sm: '6px', md: '7px' },
              }}
              whileHover={{
                scale: 1.3,
                opacity: 0.8,
                transition: { 
                  delay: index * 0.02,
                  duration: 0.2
                }
              }}
            />
          ))}
        </Box>
        
        <Box
          component="span"
          sx={{
            color: 'white',
            fontFamily: 'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: { xs: 'clamp(0.875rem, 3vw, 1rem)', sm: 'clamp(0.95rem, 3.3vw, 1.2rem)', md: 'clamp(1.05rem, 3.6vw, 1.4rem)' }, // Smaller font for mobile
            lineHeight: 1.3, // Adjusted for readability
            letterSpacing: 0,
            textTransform: 'capitalize',
          }}
        >
          Mind Spa
        </Box>
      </Box>
    </Box>
  )
}

export default MenuPage