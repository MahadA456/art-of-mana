import { useNavigate } from 'react-router-dom'
import offeringsBg from '../assets/Our Offerings.png'
import clockIcon from '../assets/clock png.png'
import chatIcon from '../assets/chat png.png'
import arrowIcon from '../assets/Arrow png.png'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

function OfferingsPage() {
  const navigate = useNavigate()
  
  const individualPackages = [
    {
      title: 'Single Sessions',
      price: '$130',
      duration: '45 min',
      intro: 'Free 15 min intro session',
      highlighted: true,
    },
    {
      title: 'Bundle 1',
      price: '$1000',
      duration: 'Once a week, 8 weeks (45 min a session)',
      intro: 'Free Introduction (15 min each)',
      highlighted: false,
    },
    {
      title: 'Bundle 2',
      price: '$2000',
      duration: 'Twice a week, 8 weeks (45 min a session)',
      intro: 'Free Introduction (15 min each)',
      highlighted: false,
    },
  ]

  const jointSessions = [
    {
      title: 'Single Sessions',
      price: '$200',
      duration: '60 min',
      intro: 'Free introduction session (15 min',
      highlighted: false,
    },
    {
      title: 'Bundle 1',
      price: '$1000',
      duration: '5 sessions, (60 min a session)',
      intro: 'Free Introduction (15 min each)',
      highlighted: false,
    },
    {
      title: 'Bundle 2',
      price: '$1,900',
      duration: '10 sessions, (60 min a session)',
      intro: 'Free Introduction (15 min each)',
      highlighted: false,
    },
  ]

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
        overflowY: 'auto', // Enable vertical scrolling
        backgroundImage: `url(${offeringsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: { xs: 'scroll', md: 'fixed' }, // Scroll on mobile, fixed on desktop
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          width: '100%',
          minHeight: { xs: '100%', md: '100%' }, // Allow content to grow on mobile
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '1rem 1rem', sm: '1.75rem 1.5rem', md: '2.5rem 2rem' }, // Reduced padding for mobile
          paddingBottom: { xs: '5rem', md: '2.5rem' }, // Extra bottom padding for arrows on mobile
          overflow: 'visible',
          position: 'relative',
        }}
      >
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            component="h1"
            sx={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 700,
              fontStyle: 'normal',
              fontSize: { xs: '22px', sm: '30px', md: '40px' }, // Reduced for mobile
              lineHeight: { xs: 1.2, md: 1.1 },
              letterSpacing: '0%',
              color: 'white',
              margin: 0,
              marginBottom: { xs: '0.75rem', md: '1.25rem' },
              textAlign: 'left',
            }}
          >
            Our Offerings
          </Box>
          <Box
            component="p"
            sx={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: { xs: '12px', sm: '14px', md: '17px' }, // Reduced for mobile
              lineHeight: { xs: 1.5, md: 1.4 },
              letterSpacing: '0%',
              color: 'white',
              margin: 0,
              marginBottom: { xs: '1.25rem', md: '2rem' },
              textAlign: 'left',
              maxWidth: { xs: '100%', md: '760px' }, // Full width on mobile
            }}
          >
            You are a striking blend of art and nature, walking a unique experience in life we strive to meet your needs, expectations, budget and time If the standard offerings is not suitable, Talk to us!
          </Box>
        </motion.div>

        {/* Offerings Sections */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr', // Single column on mobile
              sm: 'repeat(2, minmax(0, 1fr))', // Two columns from sm upward
            },
            gap: { xs: '1rem', sm: '1.5rem', md: '1.75rem' }, // Reduced gap for mobile
            flex: 1,
            width: '100%',
            maxWidth: '1050px',
            margin: '0 auto',
            alignContent: 'center',
            justifyItems: 'stretch',
            paddingBottom: { xs: '1rem', md: 0 },
            marginBottom: { xs: '1rem', md: 0 }, // Space for arrows on mobile
          }}
        >
          {[
            {
              title: 'Individual Packages (Virtual)',
              items: individualPackages,
              delay: 0.2,
            },
            {
              title: 'Joint Sessions (Virtual)',
              items: jointSessions,
              delay: 0.3,
            },
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: section.delay }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} // Reduced gap for mobile
            >
              <Box
                component="h2"
                sx={{
                  fontFamily: 'Calibri, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: { xs: '18px', sm: '20px', md: '24px' }, // Reduced for mobile
                  lineHeight: 1.1,
                  letterSpacing: '0%',
                  color: 'white',
                  margin: 0,
                  textAlign: { xs: 'left', sm: 'center', lg: 'left' },
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
              >
                {section.title}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: { xs: '0.75rem', sm: '0.95rem', md: '1rem' }, // Reduced gap for mobile
                }}
              >
                {section.items.map((pkg, index) => (
                  <Box
                    key={pkg.title}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.08 + sectionIndex * 0.12 }}
                    whileHover={{ scale: { xs: 1.01, md: 1.015 } }} // Reduced hover scale for mobile
                    sx={{
                      backgroundColor: '#121212',
                      borderRadius: '12px',
                      padding: { xs: '12px 14px', md: '16px 18px' }, // Reduced padding for mobile
                      border: pkg.highlighted ? '1.25px solid #00d4aa' : '1.25px solid #2b2b2b',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px', // Reduced gap for mobile
                      minHeight: { xs: '120px', sm: '135px', md: '130px' }, // Minimum height for touch targets
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        boxShadow: '0 6px 16px rgba(0, 212, 170, 0.18)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '0.4rem', // Reduced gap for mobile
                      }}
                    >
                      <Box
                        component="h3"
                        sx={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          fontStyle: 'normal',
                          fontSize: { xs: '16px', sm: '18px', md: '20px' }, // Reduced for mobile
                          lineHeight: 1.2,
                          letterSpacing: '-0.01em',
                          color: 'white',
                          margin: 0,
                        }}
                      >
                        {pkg.title}
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          fontStyle: 'normal',
                          fontSize: { xs: '16px', sm: '18px', md: '20px' },
                          lineHeight: 1.2,
                          letterSpacing: '-0.01em',
                          color: '#f5f5f5',
                        }}
                      >
                        {pkg.price}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px', // Reduced gap for mobile
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem', // Reduced gap for mobile
                        }}
                      >
                        <Box
                          component="img"
                          src={clockIcon}
                          alt="Clock icon"
                          loading="lazy"
                          sx={{
                            width: { xs: '16px', sm: '18px', md: '20px' }, // Reduced for mobile
                            height: 'auto',
                          }}
                        />
                        <Box
                          component="span"
                          sx={{
                            fontFamily: 'Calibri, sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: { xs: '12px', sm: '13px', md: '15px' }, // Reduced for mobile
                            lineHeight: 1.4,
                            letterSpacing: '0%',
                            color: '#e5e5e5',
                          }}
                        >
                          {pkg.duration}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem', // Reduced gap for mobile
                        }}
                      >
                        <Box
                          component="img"
                          src={chatIcon}
                          alt="Chat icon"
                          loading="lazy"
                          sx={{
                            width: { xs: '16px', sm: '18px', md: '20px' }, // Reduced for mobile
                            height: 'auto',
                          }}
                        />
                        <Box
                          component="span"
                          sx={{
                            fontFamily: 'Calibri, sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: { xs: '12px', sm: '13px', md: '15px' }, // Reduced for mobile
                            lineHeight: 1.4,
                            letterSpacing: '0%',
                            color: '#e5e5e5',
                          }}
                        >
                          {pkg.intro}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </motion.div>
          ))}
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
            position: { xs: 'relative', md: 'static' }, // Ensure visibility on mobile
            zIndex: 10, // Ensure arrows are above other content
          }}
        >
          {/* Left Arrow Button - Navigate to Philosophy */}
          <Box
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/philosophy')}
            sx={{
              width: { xs: '40px', sm: '48px', md: '54px' },
              height: { xs: '40px', sm: '48px', md: '54px' },
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
          </Box>

          {/* Right Arrow Button - Navigate to Contact */}
          <Box
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            sx={{
              width: { xs: '40px', sm: '48px', md: '54px' },
              height: { xs: '40px', sm: '48px', md: '54px' },
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
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default OfferingsPage