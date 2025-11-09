import { useNavigate } from 'react-router-dom'
import philosophyImage from '../assets/philosphy.jpg'
import arrowIcon from '../assets/Arrow png.png'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

function PhilosophyPage() {
  const navigate = useNavigate()
  
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
        flexDirection: { xs: 'column', md: 'row' },
        backgroundColor: '#000000',
        overflowY: 'auto',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      {/* Left Section - Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '42%' },
          height: { xs: '30vh', sm: '35vh', md: '100vh' }, // Reduced height for mobile
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={philosophyImage}
          alt="Philosophy"
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center', // Ensure image is centered
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
      </Box>

      {/* Right Section - Text Content */}
      <Box
        sx={{
          width: { xs: '100%', md: '58%' },
          minHeight: { xs: 'auto', md: '100vh' }, // Allow content to grow on mobile
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '1.5rem 1rem', sm: '2rem 1.5rem', md: '3rem 2.75rem' }, // Reduced padding for mobile
          paddingBottom: { xs: '5rem', md: '3rem' }, // Extra bottom padding for arrows on mobile
          overflowY: 'auto', // Enable scrolling for overflow content
          justifyContent: { xs: 'flex-start', md: 'center' }, // Align content properly
        }}
      >
        {/* Scrollable Content Container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '1rem', md: '1.5rem' },
            overflowX: { xs: 'auto', md: 'hidden' }, // Horizontal scroll for mobile
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
              minWidth: { xs: '300px', md: 'auto' }, // Minimum width to trigger scroll
              maxWidth: { xs: '100%', md: 'auto' },
            }}
          >
            {/* Main Title */}
            <Box
              component={motion.h1}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              sx={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 700,
                fontStyle: 'normal',
                fontSize: { xs: '24px', sm: '30px', md: '42px' }, // Smaller font for mobile
                lineHeight: 1.2, // Slightly increased for readability
                letterSpacing: '0%',
                color: 'white',
                margin: 0,
                marginBottom: { xs: '1rem', md: '2rem' },
                textAlign: 'left',
              }}
            >
              Philosophy
            </Box>

            {/* I AM ART Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem', // Reduced gap for mobile
                marginBottom: '1.5rem',
              }}
            >
              <Box
                component="h2"
                sx={{
                  fontFamily: 'Calibri, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: { xs: '16px', sm: '18px', md: '24px' }, // Smaller font for mobile
                  lineHeight: 1.2,
                  letterSpacing: '0%',
                  color: 'white',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                I AM ART
              </Box>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem', // Reduced gap for paragraphs
                }}
              >
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' }, // Smaller font for mobile
                    lineHeight: 1.5, // Increased for readability
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  I Am Art- an Echo Of The Universe Within Me, Paradoxical And Inimitable
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' },
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  A Unique Celebration Of Life, Changing, Adopting, Being And Becoming; Yet Remaining Me I Am Art-
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' },
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  A Masterpiece, A Drama. The Polish, The Paint, The Façade. The Pain, The Trauma, The Depth
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' },
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  A Bold Statement Of Freedom-dare To Live, To Fight, To Love And To Expand Horizons
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' },
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  The Curiosity To Fully Explore My Femininity, My Muscularity, And All The Shades In Between
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' },
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  The History Behind- A Memory, And A Far Beautiful Vision For Tomorrow Beyond,
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' },
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  At This Momentum which I Pause Wholly To Sketch My Timeless Legend
                </Box>
              </div>
            </motion.div>

            {/* I AM NATURE Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem', // Reduced gap for mobile
                marginBottom: '1.5rem',
              }}
            >
              <Box
                component="h2"
                sx={{
                  fontFamily: 'Calibri, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: { xs: '16px', sm: '18px', md: '24px' }, // Smaller font for mobile
                  lineHeight: 1.2,
                  letterSpacing: '0%',
                  color: 'white',
                  margin: 0,
                  textAlign: 'left',
                }}
              >
                I AM NATURE
              </Box>
              
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem', // Reduced gap for paragraphs
                }}
              >
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' },
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  I Am Nature - a beat of life in balance with infinite lives around me.
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' },
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  The sequences of expansion, pause; contraction, and pause.
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' },
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  a seed of dream striving to fully germinate.
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' },
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  I accept, I honor and celebrate the hardship to be.
                </Box>
                <Box
                  component="p"
                  sx={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '15px' },
                    lineHeight: 1.5,
                    letterSpacing: '0%',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                  }}
                >
                  a short life, yet an everlasting mark.
                </Box>
              </div>
            </motion.div>
          </Box>
        </Box>

        {/* Navigation Arrows */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: '0.5rem', sm: '1rem', md: '1.25rem' },
            marginTop: { xs: '1.5rem', md: 'auto' },
            padding: { xs: '0.5rem', sm: '0.75rem', md: '0' },
            maxWidth: '100%',
            flexWrap: 'wrap',
            position: { xs: 'relative', md: 'static' },
            zIndex: 10,
          }}
        >
          {/* Left Arrow Button - Navigate to Choices */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/choices')}
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(180deg, #1c2428 0%, #080b0d 100%)',
              border: '1px solid rgba(82, 96, 104, 0.75)',
              borderRadius: '6px',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Box
              component="img"
              src={arrowIcon}
              alt="Back"
              loading="lazy"
              sx={{
                width: { xs: '50%', sm: '52%', md: '52%' },
                height: 'auto',
                transform: 'scaleX(-1)',
                filter: 'invert(0.35) sepia(0) saturate(0) hue-rotate(0deg) brightness(0.85)',
              }}
            />
          </motion.div>

          {/* Right Arrow Button - Navigate to Offerings */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/offerings')}
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(180deg, #0f3f25 0%, #021b0f 100%)',
              border: '1px solid rgba(0, 170, 109, 0.8)',
              borderRadius: '6px',
              boxShadow: '0 6px 14px rgba(0, 0, 0, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Box
              component="img"
              src={arrowIcon}
              alt="Forward"
              loading="lazy"
              sx={{
                width: { xs: '50%', sm: '52%', md: '52%' },
                height: 'auto',
                filter: 'invert(1) brightness(1.15)',
              }}
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  )
}

export default PhilosophyPage