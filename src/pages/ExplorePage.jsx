import exploreImage from '../assets/exploree.jpg'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

function ExplorePage() {
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
      }}
    >
      {/* Left Section - Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '38%' },
          height: { xs: '36%', sm: '38%', md: '100%' },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={exploreImage}
          alt="Explore"
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
          width: { xs: '100%', md: '62%' },
          height: { xs: '64%', sm: '62%', md: '100%' },
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '1.6rem 1.2rem', sm: '2.25rem 1.8rem', md: '3rem 2.5rem' },
          overflow: 'hidden',
          position: 'relative',
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
            lineHeight: '1.2',
            letterSpacing: '0%',
            color: 'white',
            margin: 0,
            marginBottom: '1.4rem',
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
            gap: '1.1rem',
          }}
        >
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
            Today, We Welcome You To Step In A New Panorama, And Fearlessly Explore A Venerable Tradition With A Fresh Set of Skills Salutary To Everyone
          </p>
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
            For Millennia, Our Earliest Ancestors Have Intuitively Applied The Therapeutic Power Of Arts For Self-expression And Healing
          </p>
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
            Since Mid-20th Century, The Discipline Of Art Therapy Stood As A Superior Non-pharmacological Modality With Minimal Side Effects
          </p>
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
            A Sustainable Tool For Life for Acute Crises through Loss, Grief, And Trauma and Chronic Conditions like Depression, Pain, Fatigue, Eating Abnormalities
          </p>
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
            Anxiety, Post Traumatic Stress Disorder (PTSD), Cognitive Impairments, and Autism Spectrum
          </p>
        </motion.div>

      </Box>
    </Box>
  )
}

export default ExplorePage

