import philosophyImage from '../assets/philosphy.jpg'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

function PhilosophyPage() {
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
        backgroundColor: '#000000',
      }}
    >
      {/* Left Section - Image */}
      <Box
        sx={{
          width: { xs: '100%', md: '42%' },
          height: { xs: '38%', sm: '40%', md: '100%' },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={philosophyImage}
          alt="Philosophy"
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
      </Box>

      {/* Right Section - Text Content */}
      <Box
        sx={{
          width: { xs: '100%', md: '58%' },
          height: { xs: '62%', sm: '60%', md: '100%' },
          backgroundColor: '#000000',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '1.75rem 1.5rem', sm: '2.5rem 2rem', md: '3rem 2.75rem' },
          overflow: 'hidden',
          position: 'relative',
          justifyContent: 'center',
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
            fontSize: { xs: '30px', sm: '36px', md: '42px' },
            lineHeight: 1.15,
            letterSpacing: '0%',
            color: 'white',
            margin: 0,
            marginBottom: { xs: '1.5rem', md: '2rem' },
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
            gap: '1.15rem',
            marginBottom: '1.75rem',
          }}
        >
          <Box
            component="h2"
            sx={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: { xs: '18px', sm: '20px', md: '24px' },
              lineHeight: 1.15,
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
              gap: '0.75rem',
            }}
          >
            <Box
              component="p"
              sx={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
            gap: '1.1rem',
          }}
        >
          <Box
            component="h2"
            sx={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: { xs: '18px', sm: '20px', md: '24px' },
              lineHeight: 1.15,
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
              gap: '0.75rem',
            }}
          >
            <Box
              component="p"
              sx={{
                fontFamily: 'Calibri, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
                fontSize: { xs: '13px', sm: '14px', md: '15px' },
                lineHeight: 1.45,
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
  )
}

export default PhilosophyPage

