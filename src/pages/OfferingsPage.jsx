import offeringsBg from '../assets/Our Offerings.png'
import clockIcon from '../assets/clock png.png'
import chatIcon from '../assets/chat png.png'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'

function OfferingsPage() {
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
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        overflowY: 'auto',
        backgroundImage: `url(${offeringsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: '1.25rem 1.25rem', sm: '2rem 1.75rem', md: '2.5rem 2rem' },
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
              fontSize: { xs: '28px', sm: '36px', md: '40px' },
              lineHeight: 1.1,
              letterSpacing: '0%',
              color: 'white',
              margin: 0,
              marginBottom: { xs: '1rem', md: '1.25rem' },
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
              fontSize: { xs: '14px', sm: '16px', md: '17px' },
              lineHeight: 1.4,
              letterSpacing: '0%',
              color: 'white',
              margin: 0,
              marginBottom: { xs: '1.75rem', md: '2rem' },
              textAlign: 'left',
              maxWidth: '760px',
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
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
            },
            gap: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
            flex: 1,
            width: '100%',
            maxWidth: '1050px',
            margin: '0 auto',
            alignContent: 'center',
            justifyItems: 'stretch',
            paddingBottom: { xs: '1rem', md: 0 },
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
              style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
            >
              <Box
                component="h2"
                sx={{
                  fontFamily: 'Calibri, sans-serif',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  fontSize: { xs: '20px', sm: '22px', md: '24px' },
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
                  gap: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                }}
              >
                {section.items.map((pkg, index) => (
                  <Box
                    key={pkg.title}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.35 + index * 0.08 + sectionIndex * 0.12 }}
                    whileHover={{ scale: 1.015 }}
                    sx={{
                      backgroundColor: '#121212',
                      borderRadius: '12px',
                      padding: { xs: '14px 16px', md: '16px 18px' },
                      border: pkg.highlighted ? '1.25px solid #00d4aa' : '1.25px solid #2b2b2b',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      minHeight: { xs: 'auto', sm: '135px', md: '130px' },
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
                        gap: '0.5rem',
                      }}
                    >
                      <Box
                        component="h3"
                        sx={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          fontStyle: 'normal',
                          fontSize: { xs: '18px', sm: '19px', md: '20px' },
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
                          fontSize: { xs: '18px', sm: '19px', md: '20px' },
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
                        gap: '8px',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                        }}
                      >
                      <Box
                        component="img"
                        src={clockIcon}
                        alt="Clock icon"
                        sx={{
                          width: { xs: '18px', sm: '18px', md: '20px' },
                          height: 'auto',
                        }}
                      />
                        <Box
                          component="span"
                          sx={{
                            fontFamily: 'Calibri, sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: { xs: '13px', sm: '14px', md: '15px' },
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
                          gap: '0.6rem',
                        }}
                      >
                      <Box
                        component="img"
                        src={chatIcon}
                        alt="Chat icon"
                        sx={{
                          width: { xs: '18px', sm: '18px', md: '20px' },
                          height: 'auto',
                        }}
                      />
                        <Box
                          component="span"
                          sx={{
                            fontFamily: 'Calibri, sans-serif',
                            fontWeight: 300,
                            fontStyle: 'normal',
                            fontSize: { xs: '13px', sm: '14px', md: '15px' },
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

      </Box>
    </Box>
  )
}

export default OfferingsPage

