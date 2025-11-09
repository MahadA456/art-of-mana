import { useNavigate } from 'react-router-dom';
import backMana from '../assets/back_mana.jpg';
import roundIcon from '../assets/round.png';
import titleImage from '../assets/title.png';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

function LandingPage() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

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
        backgroundImage: `url(${backMana})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
      role="main"
      aria-label="Landing Page"
    >
      {/* Main Content - Centered in upper half */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: {
            xs: '0.75rem', // Reduced padding for mobile
            sm: '1.5rem',
            md: '2rem',
            lg: '3rem',
          },
          maxWidth: '100%',
        }}
      >
        {/* Round Icon */}
        <Box
          component="img"
          src={roundIcon}
          alt="Round Icon"
          loading="lazy"
          sx={{
            width: {
              xs: '15vw', // Smaller for mobile
              sm: '18vw',
              md: '15vw',
              lg: '12vw',
            },
            maxWidth: { xs: '80px', sm: '120px', md: '150px', lg: '180px' }, // Reduced maxWidth for mobile
            height: 'auto',
            marginBottom: {
              xs: '0.25rem', // Reduced margin for mobile
              sm: '0.5rem',
              md: '1rem',
              lg: '1.5rem',
            },
            objectFit: 'contain',
          }}
        />

        {/* Title Image */}
        <Box
          component="img"
          src={titleImage}
          alt="MANA OF ARTA Title"
          loading="lazy"
          sx={{
            width: {
              xs: '40vw', // Smaller for mobile
              sm: '45vw',
              md: '40vw',
              lg: '35vw',
            },
            maxWidth: { xs: '150px', sm: '220px', md: '300px', lg: '360px' }, // Reduced maxWidth for mobile
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Bottom Section - 9 Dots and Mind Spa */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: {
            xs: '0.75rem', // Reduced padding for mobile
            sm: '1rem',
            md: '1.5rem',
            lg: '2rem',
          },
          gap: {
            xs: '0.25rem', // Reduced gap for mobile
            sm: '0.5rem',
            md: '0.75rem',
          },
        }}
      >
        {/* 9 Dots Grid with Hover Animation */}
        <Box
          component={motion.div}
          onClick={handleMenuClick}
          role="button"
          aria-label="Open Menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleMenuClick();
            }
          }}
          sx={{
            cursor: 'pointer',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: {
              xs: '1px', // Smaller gap for mobile
              sm: '2px',
              md: '3px',
            },
            width: {
              xs: '18px', // Smaller for mobile
              sm: '22px',
              md: '26px',
              lg: '30px',
            },
            height: {
              xs: '18px', // Smaller for mobile
              sm: '22px',
              md: '26px',
              lg: '30px',
            },
          }}
          whileHover={{
            scale: 1.2,
            rotate: 90,
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
          whileTap={{ scale: 0.95 }}
        >
          {[...Array(9)].map((_, index) => (
            <Box
              key={index}
              component={motion.div}
              sx={{
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '100%',
                height: '100%',
                minWidth: {
                  xs: '4px', // Smaller dots for mobile
                  sm: '5px',
                  md: '6px',
                  lg: '7px',
                },
                minHeight: {
                  xs: '4px', // Smaller dots for mobile
                  sm: '5px',
                  md: '6px',
                  lg: '7px',
                },
              }}
              whileHover={{
                scale: 1.3,
                opacity: 0.8,
                transition: {
                  delay: index * 0.02,
                  duration: 0.2,
                },
              }}
            />
          ))}
        </Box>

        {/* Mind Spa Text */}
        <Box
          component="span"
          sx={{
            color: 'white',
            fontFamily:
              'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: {
              xs: '0.875rem', // 14px for mobile
              sm: '1rem', // 16px
              md: '1.25rem', // 20px
              lg: '1.5rem', // 24px
            },
            lineHeight: {
              xs: '1rem', // Adjusted for mobile
              sm: '1.25rem',
              md: '1.5rem',
              lg: '1.75rem',
            },
            letterSpacing: 0,
            textTransform: 'capitalize',
          }}
        >
          Mind Spa
        </Box>
      </Box>
    </Box>
  );
}

export default LandingPage;