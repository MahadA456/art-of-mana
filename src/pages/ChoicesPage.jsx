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
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Left Section - Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '38%' },
          height: { xs: '36%', sm: '38%', md: '100%' },
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
          height: { xs: '64%', sm: '62%', md: '100%' },
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '1.5rem 1.1rem', sm: '2rem 1.6rem', md: '2.5rem 2.2rem' },
          overflow: 'hidden',
          position: 'relative',
          margin: 0,
          justifyContent: 'center',
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
            fontSize: '28px',
            lineHeight: '1.15',
            letterSpacing: '0%',
            color: 'white',
            margin: 0,
            marginBottom: '1.5rem',
            textAlign: 'left',
          }}
        >
          Your Choice
        </motion.h1>

        {/* Content Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '1.2rem',
          }}
        >
          {/* TRAUMA Section */}
          <div>
            <h2
              style={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '18px',
                lineHeight: '22px',
                letterSpacing: '0%',
                color: 'white',
                margin: 0,
                marginBottom: '0.6rem',
                textAlign: 'left',
                textDecoration: 'underline',
                textTransform: 'uppercase',
              }}
            >
              TRAUMA
            </h2>
            <p
              style={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '1.45',
                letterSpacing: '0%',
                textTransform: 'capitalize',
                color: 'white',
                margin: 0,
                textAlign: 'left',
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
                fontSize: '18px',
                lineHeight: '22px',
                letterSpacing: '0%',
                color: 'white',
                margin: 0,
                marginBottom: '0.6rem',
                textAlign: 'left',
                textDecoration: 'underline',
                textTransform: 'uppercase',
              }}
            >
              FATIGUE/PAIN/BURNOUT
            </h2>
            <p
              style={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '1.45',
                letterSpacing: '0%',
                textTransform: 'capitalize',
                color: 'white',
                margin: 0,
                textAlign: 'left',
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
                fontSize: '18px',
                lineHeight: '22px',
                letterSpacing: '0%',
                color: 'white',
                margin: 0,
                marginBottom: '0.6rem',
                textAlign: 'left',
                textDecoration: 'underline',
                textTransform: 'capitalize',
              }}
            >
              Autism Spectrum
            </h2>
            <p
              style={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '14px',
                lineHeight: '1.45',
                letterSpacing: '0%',
                textTransform: 'capitalize',
                color: 'white',
                margin: 0,
                textAlign: 'left',
              }}
            >
              Research On Creative Arts Interventions For Children With Autism Spectrum Disorder Highlights Improvements In Occupation-based Outcomes, Performance Skills, Social Interaction, Body Functions, And How Art Therapy Promotes Self-expression And Structured Freedom
            </p>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.25rem',
            marginTop: 'auto',
            marginBottom: { xs: '1.25rem', md: '1rem' },
          }}
        >
          {/* Left Arrow Button - Dark Grey */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/choices-intro')}
            style={{
              width: '58px',
              height: '58px',
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
              sx={{
                width: '52%',
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
              width: '58px',
              height: '58px',
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
              sx={{
                width: '52%',
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

