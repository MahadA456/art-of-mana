import exploreImage from '../assets/exploree.jpg'
import { Box } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

function ExplorePage() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh', // Restored original height for desktop
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Desktop remains row
        overflowY: 'auto', // Enable vertical scrolling
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      {/* Left Section - Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '38%' }, // Desktop width unchanged
          height: { xs: '35%', sm: '38%', md: '100%' }, // Adjusted for mobile, original for desktop
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={exploreImage}
          alt="Explore"
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0,
          }}
        />
        {/* Green overlay effect */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, rgba(0, 255, 0, 0.1) 0%, rgba(0, 255, 0, 0.05) 100%)',
            zIndex: 1,
          }}
        />
      </Box>

      {/* Right Section - Text Content */}
      <Box
        sx={{
          width: { xs: '100%', md: '62%' }, // Desktop width unchanged
          height: { xs: '65%', sm: '62%', md: '100%' }, // Adjusted for mobile, original for desktop
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '1.2rem 1rem', sm: '2.25rem 1.8rem', md: '3rem 2.5rem' }, // Reduced for mobile, original for desktop
          overflow: 'hidden', // Restored original overflow for desktop
          position: 'relative',
          justifyContent: 'center',
        }}
      >
        {/* Scrollable Text Container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowX: { xs: 'auto', md: 'hidden' }, // Horizontal scroll only on mobile
            WebkitOverflowScrolling: 'touch', // Smooth scrolling on mobile
            '&::-webkit-scrollbar': {
              height: '0.4rem',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: { xs: '300px', md: 'auto' }, // Minimum width for mobile scroll
              maxWidth: { xs: '100%', md: 'auto' },
            }}
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: { xs: '22px', md: '28px' }, // Reduced for mobile, original for desktop
                lineHeight: { xs: '1.3', md: '1.2' }, // Adjusted for mobile
                letterSpacing: '0%',
                color: 'white',
                margin: 0,
                marginBottom: { xs: '1rem', md: '1.4rem' }, // Reduced for mobile
                textAlign: 'left',
              }}
            >
              Explore Art Therapy
            </motion.h1>

            {/* Text Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '0.9rem', md: '1.1rem' }, // Reduced for mobile
              }}
            >
              <p
                style={{
                  fontFamily: 'Calibri, sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: { xs: '12px', md: '14px' }, // Reduced for mobile
                  lineHeight: { xs: '1.5', md: '1.45' }, // Adjusted for mobile
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  color: 'white',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                Today, We Welcome You To Step In A New Panorama, And Fearlessly Explore A Venerable Tradition With A Fresh Set of Skills Salutary To Everyone
              </p>
              <p
                style={{
                  fontFamily: 'Calibri, sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: { xs: '12px', md: '14px' },
                  lineHeight: { xs: '1.5', md: '1.45' },
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  color: 'white',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                For Millennia, Our Earliest Ancestors Have Intuitively Applied The Therapeutic Power Of Arts For Self-expression And Healing
              </p>
              <p
                style={{
                  fontFamily: 'Calibri, sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: { xs: '12px', md: '14px' },
                  lineHeight: { xs: '1.5', md: '1.45' },
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  color: 'white',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                Since Mid-20th Century, The Discipline Of Art Therapy Stood As A Superior Non-pharmacological Modality With Minimal Side Effects
              </p>
              <p
                style={{
                  fontFamily: 'Calibri, sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: { xs: '12px', md: '14px' },
                  lineHeight: { xs: '1.5', md: '1.45' },
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  color: 'white',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                A Sustainable Tool For Life for Acute Crises through Loss, Grief, And Trauma and Chronic Conditions like Depression, Pain, Fatigue, Eating Abnormalities
              </p>
              <p
                style={{
                  fontFamily: 'Calibri, sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: { xs: '12px', md: '14px' },
                  lineHeight: { xs: '1.5', md: '1.45' },
                  letterSpacing: '0%',
                  textTransform: 'capitalize',
                  color: 'white',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                Anxiety, Post Traumatic Stress Disorder (PTSD), Cognitive Impairments, and Autism Spectrum
              </p>
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ExplorePage