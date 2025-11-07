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
    // Add other navigation cases here as needed
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        backgroundImage: `url(${backMana})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        opacity: 1,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',
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
          width: 'min(300px, 82vw)',
          backgroundColor: 'rgba(0, 0, 0, 0.88)',
          backdropFilter: 'blur(10px)',
          padding: 'clamp(1.5rem, 5vw, 2.25rem) clamp(1rem, 4vw, 1.6rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(1rem, 3.5vw, 1.5rem)',
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
              padding: '0.45rem 0',
            }}
            whileHover={{ x: 10 }}
          >
            <span
              style={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: 'clamp(1.35rem, 4vw, 1.85rem)',
                lineHeight: 1.1,
                letterSpacing: '0%',
                textTransform: 'capitalize',
                color: 'white',
              }}
            >
              {item}
            </span>
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: 'clamp(0.5rem, 2.5vw, 1rem)' }}
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
          position: 'fixed',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: { xs: '1.25rem 0.75rem', sm: '1.8rem 1.25rem', md: '2.25rem' },
          gap: { xs: '0.5rem', sm: '0.75rem', md: '1rem' },
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
            gap: { xs: '2px', sm: '3px', md: '4px' },
            width: { xs: '24px', sm: '28px', md: '32px' },
            height: { xs: '24px', sm: '28px', md: '32px' },
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
                minWidth: { xs: '6px', sm: '7px', md: '8px' },
                minHeight: { xs: '6px', sm: '7px', md: '8px' },
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
            fontSize: 'clamp(1.05rem, 3.6vw, 1.4rem)',
            lineHeight: 1.2,
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

