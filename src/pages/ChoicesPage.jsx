import { useNavigate } from 'react-router-dom'
import choiceImage from '../assets/choice.jpg'
import arrowIcon from '../assets/Arrow png.png'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

function ChoicesPage() {
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
        overflowY: 'auto',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      {/* Left Section - Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '38%' },
          height: { xs: '25vh', sm: '30vh', md: '100%' }, // Reduced height for mobile
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          component="img"
          src={choiceImage}
          alt="Choices"
          loading="lazy"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: { xs: 'cover', md: 'contain' },
            objectPosition: 'center',
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
          width: { xs: '100%', md: '62%' },
          minHeight: { xs: '75vh', md: '100%' }, // Adjusted for mobile
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '0.75rem 0.5rem', sm: '1.5rem 1rem', md: '2.5rem 2.2rem' }, // Reduced padding for mobile
          overflow: 'hidden',
          position: 'relative',
          margin: 0,
          justifyContent: { xs: 'space-between', md: 'center' }, // Adjusted for mobile
          boxSizing: 'border-box',
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
            fontSize: { xs: '18px', sm: '22px', md: '28px' }, // Reduced for mobile
            lineHeight: { xs: 1.3, sm: 1.2, md: '1.15' },
            letterSpacing: { xs: '0.02em', md: '0%' },
            color: 'white',
            margin: 0,
            marginBottom: { xs: '0.75rem', sm: '1.25rem', md: '1.5rem' },
            textAlign: 'left',
            maxWidth: '100%',
            wordBreak: 'break-word',
          }}
        >
          Your Choice
        </motion.h1>

        {/* Scrollable Content Container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '0.6rem', sm: '1rem', md: '1.25rem' }, // Reduced gap for mobile
            flexGrow: 1,
            overflowX: { xs: 'auto', md: 'hidden' }, // Horizontal scroll for mobile
            WebkitOverflowScrolling: 'touch', // Smooth scrolling on mobile
            maxHeight: { xs: '55vh', md: 'auto' }, // Limit height for mobile
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: { xs: '0.6rem', sm: '1rem', md: '1.25rem' },
                marginBottom: { xs: '0.5rem', sm: '1rem', md: '1.2rem' },
              }}
            >
              {/* TRAUMA Section */}
              <div>
                <h2
                  style={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: { xs: '14px', sm: '16px', md: '18px' }, // Reduced for mobile
                    lineHeight: { xs: 1.4, sm: 1.3, md: '22px' },
                    letterSpacing: { xs: '0.02em', md: '0%' },
                    color: 'white',
                    margin: 0,
                    marginBottom: { xs: '0.3rem', sm: '0.5rem', md: '0.6rem' },
                    textAlign: 'left',
                    textDecoration: 'underline',
                    textTransform: 'uppercase',
                    maxWidth: '100%',
                    wordBreak: 'break-word',
                  }}
                >
                  TRAUMA
                </h2>
                <p
                  style={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '14px' }, // Reduced for mobile
                    lineHeight: { xs: 1.5, sm: 1.45, md: '1.45' },
                    letterSpacing: { xs: '0.02em', md: '0%' },
                    textTransform: 'capitalize',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                    maxWidth: '100%',
                    wordBreak: 'break-word',
                  }}
                >
                  Art Therapy Offers A Safe And Non-threatening Way To Process Traumatic Emotions Through Nonverbal Symbolic Expressions, Sensory Engagement, And Revisiting Experiences To Diminish Suffering
                </p>
              </div>

              {/* FATIGUE/PAIN/BURNOUT Section */}
              <div>
                <h2
                  style={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                    lineHeight: { xs: 1.4, sm: 1.3, md: '22px' },
                    letterSpacing: { xs: '0.02em', md: '0%' },
                    color: 'white',
                    margin: 0,
                    marginBottom: { xs: '0.3rem', sm: '0.5rem', md: '0.6rem' },
                    textAlign: 'left',
                    textDecoration: 'underline',
                    textTransform: 'uppercase',
                    maxWidth: '100%',
                    wordBreak: 'break-word',
                  }}
                >
                  FATIGUE/PAIN/BURNOUT
                </h2>
                <p
                  style={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '14px' },
                    lineHeight: { xs: 1.5, sm: 1.45, md: '1.45' },
                    letterSpacing: { xs: '0.02em', md: '0%' },
                    textTransform: 'capitalize',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                    maxWidth: '100%',
                    wordBreak: 'break-word',
                  }}
                >
                  Art Therapy Addresses Cultural And Language Barriers, Eating Disorders, Self-expression, Understanding Relationships, And Revealing Unconscious Conflicts Through Metaphorical Expressions
                </p>
              </div>

              {/* Autism Spectrum Section */}
              <div>
                <h2
                  style={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 600,
                    fontStyle: 'normal',
                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                    lineHeight: { xs: 1.4, sm: 1.3, md: '22px' },
                    letterSpacing: { xs: '0.02em', md: '0%' },
                    color: 'white',
                    margin: 0,
                    marginBottom: { xs: '0.3rem', sm: '0.5rem', md: '0.6rem' },
                    textAlign: 'left',
                    textDecoration: 'underline',
                    textTransform: 'capitalize',
                    maxWidth: '100%',
                    wordBreak: 'break-word',
                  }}
                >
                  Autism Spectrum
                </h2>
                <p
                  style={{
                    fontFamily: 'Calibri, sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: { xs: '12px', sm: '13px', md: '14px' },
                    lineHeight: { xs: 1.5, sm: 1.45, md: '1.45' },
                    letterSpacing: { xs: '0.02em', md: '0%' },
                    textTransform: 'capitalize',
                    color: 'white',
                    margin: 0,
                    textAlign: 'left',
                    maxWidth: '100%',
                    wordBreak: 'break-word',
                  }}
                >
                  Research On Creative Arts Interventions For Children With Autism Spectrum Disorder Highlights Improvements In Occupation-based Outcomes, Performance Skills, Social Interaction, Body Functions, And How Art Therapy Promotes Self-expression And Structured Freedom
                </p>
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
            gap: { xs: '0.5rem', sm: '1rem', md: '1.25rem' }, // Reduced gap for mobile
            marginTop: { xs: '0.5rem', sm: '1rem', md: 'auto' },
            padding: { xs: '0.25rem', sm: '0.5rem', md: '0' },
            maxWidth: '100%',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Arrow Button - Dark Grey */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/choices-intro')}
            style={{
              width: { xs: '40px', sm: '48px', md: '58px' }, // Reduced for mobile
              height: { xs: '40px', sm: '48px', md: '58px' },
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
              alt="Back"
              loading="lazy"
              sx={{
                width: { xs: '50%', sm: '52%', md: '52%' },
                height: 'auto',
                transform: 'scaleX(-1)',
                filter: 'invert(1) brightness(1.15)',
              }}
            />
          </motion.div>

          {/* Right Arrow Button - Dark Green */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: { xs: '40px', sm: '48px', md: '58px' },
              height: { xs: '40px', sm: '48px', md: '58px' },
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
              alt="Forward"
              loading="lazy"
              sx={{
                width: { xs: '50%', sm: '52%', md: '52%' },
                height: 'auto',
                filter: 'invert(0.35) sepia(0) saturate(0) hue-rotate(0deg) brightness(0.85)',
              }}
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  )
}

export default ChoicesPage