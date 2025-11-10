import welcomeBg from '../assets/Welcome.png'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { motion as Motion } from 'framer-motion'

function WelcomePage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundImage: `url(${welcomeBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' }, // Scroll on mobile, fixed on desktop
        overflowY: 'auto',
        opacity: 1,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0,
        },
      }}
      style={{ backgroundImage: `url(${welcomeBg})` }} // Repeated for clarity
      loading="lazy" // Added for faster initial page load
    >
      {/* Main Content - Bottom Aligned */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1000px',
          minHeight: { xs: '100%', md: '100%' }, // Allow content to grow on mobile
          padding: { xs: '2rem 1rem', sm: '3rem 2rem', md: '2rem' },
          paddingTop: { xs: '55%', sm: '36%', md: '10%' },
          paddingBottom: { xs: '3rem', md: '3rem' },
          paddingLeft: { xs: '1.5rem', sm: '4rem', md: '18rem', lg: '24rem' },
          paddingRight: { xs: '1.5rem', sm: '2.5rem', md: '4rem', lg: '6rem' },
          textAlign: 'start',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div>
        {/* Heading */}
        <Motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'Calibri, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 'clamp(1.9rem, 6vw, 2.75rem)',
            lineHeight: 1.15,
            letterSpacing: '0%',
            color: 'white',
            margin: 0,
            marginBottom: 'clamp(1.2rem, 4vw, 1.8rem)',
          }}
        >
          Welcome To Mind Spa
        </Motion.h1>

        {/* First Three Paragraphs - Grouped Together */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2.75rem',
          }}
        >
          <p
            style={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(0.75rem, 2.2vw, 0.95rem)',
              lineHeight: 1.4,
              letterSpacing: '0%',
              textTransform: 'capitalize',
              color: 'white',
              margin: 0,
              whiteSpace: isMobile ? 'normal' : 'nowrap',
            }}
          >
            Mana Of Arta Is A Sanctuary Space We Sculpt For Your Mind, Body And Spirit To Retune And Revive
          </p>
          <p
            style={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(0.75rem, 2.2vw, 0.95rem)',
              lineHeight: 1.4,
              letterSpacing: '0%',
              textTransform: 'capitalize',
              color: 'white',
              margin: 0,
              whiteSpace: isMobile ? 'normal' : 'nowrap',
            }}
          >
            To Reveal Your True Power — Art And Nature
          </p>
          <p
            style={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(0.75rem, 2.2vw, 0.95rem)',
              lineHeight: 1.4,
              letterSpacing: '0%',
              textTransform: 'capitalize',
              color: 'white',
              margin: 0,
              whiteSpace: isMobile ? 'normal' : 'nowrap',
            }}
          >
            We Are An Eco-Friendly, And Tech-Integrated Solution For Complex Psychological Needs Of Today's Global Citizens.
          </p>
        </Motion.div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
        {/* Last Text Line */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: 'Calibri, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 'clamp(0.7rem, 2.2vw, 0.9rem)',
            lineHeight: 1.4,
            letterSpacing: '0%',
            textTransform: 'capitalize',
            color: 'white',
            margin: '0',
            marginRight: isMobile ? 0 : '10rem',
            marginBottom: 'clamp(1.75rem, 4vw, 2.75rem)',
            whiteSpace: isMobile ? 'normal' : 'nowrap',
            textAlign: 'center',
          }}
        >
          A Routine For Psyche Detox & Self Hygiene For Mind
        </Motion.p>

        {/* Learn More Button */}
        <Motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
 
          }}
          className="text-black text-sm font-bold relative overflow-hidden group inline-flex items-center justify-center"
          style={{
            background: 'linear-gradient(90deg, #14F195, #63DB70)',
            boxShadow: '0 4px 15px rgba(20, 241, 149, 0.3)',
            width: 140,
            height: 42,
            border: 'none',
            borderRadius: 3,
            padding: '15px 27px',
            cursor: 'pointer',
            fontFamily: 'Calibri, sans-serif',
            margin: '0',
            marginRight: isMobile ? 0 : '10rem',
          }}
        >
          <Motion.span className="relative z-10" whileHover={{ scale: 1.05 }}>
            Learn More
          </Motion.span>
          <Motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          />
        </Motion.button>
        </div>
      </Box>
    </Box>
  )
}

export default WelcomePage