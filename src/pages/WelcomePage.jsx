import welcomeBg from '../assets/Welcome.png'
import { Box } from '@mui/material'
import { motion as Motion } from 'framer-motion'

function WelcomePage() {
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
          paddingTop: { xs: '40%', sm: '35%', md: '1%' },
          paddingBottom: { xs: '2rem', md: '2rem' },
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
            gap: '0.5rem',
            marginBottom: '2rem',
          }}
        >
          <p
            style={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(0.95rem, 3.4vw, 1.15rem)',
              lineHeight: 1.55,
              letterSpacing: '0%',
              textTransform: 'capitalize',
              color: 'white',
              margin: 0,
            }}
          >
            Mana Of Arta Is A Sanctuary Space We Sculpt For Your Mind, Body And Spirit To Retune And Revive
          </p>
          <p
            style={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(0.95rem, 3.4vw, 1.15rem)',
              lineHeight: 1.55,
              letterSpacing: '0%',
              textTransform: 'capitalize',
              color: 'white',
              margin: 0,
            }}
          >
            To Reveal Your True Power — Art And Nature
          </p>
          <p
            style={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(0.95rem, 3.4vw, 1.15rem)',
              lineHeight: 1.55,
              letterSpacing: '0%',
              textTransform: 'capitalize',
              color: 'white',
              margin: 0,
            }}
          >
            We Are An Eco-Friendly, And Tech-Integrated Solution For Complex Psychological Needs Of Today's Global Citizens.
          </p>
        </Motion.div>
        </div>
        <div className='flex flex-col align-center justify-center'>
        {/* Last Text Line */}
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            fontFamily: 'Calibri, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: 'clamp(0.95rem, 3.4vw, 1.15rem)',
            lineHeight: 1.55,
            letterSpacing: '0%',
            textTransform: 'capitalize',
            color: 'white',
            margin: 0,
            marginBottom: 'clamp(1rem, 4vw, 1.75rem)',
          }}
        >
          A Routine For Psyche Detox & Self Hygiene For Mind
        </Motion.p>

        {/* Learn More Button */}
        <Motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            // Add navigation or action here
          }}
          style={{
            backgroundColor: '#4CAF50',
            color: 'black',
            border: 'none',
            borderRadius: '8px',
            padding: '0.75rem 2rem',
            fontSize: 'clamp(0.95rem, 3.2vw, 1.05rem)',
            fontWeight: 500,
            textAlign: 'center',
            cursor: 'pointer',
            fontFamily: 'Calibri, sans-serif',
            transition: 'all 0.3s ease',
            width: 'fit-content',
            margin: '0 auto',
          }}
        >
          Learn More
        </Motion.button>
        </div>
      </Box>
    </Box>
  )
}

export default WelcomePage