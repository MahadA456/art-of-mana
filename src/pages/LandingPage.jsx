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
        overflow: 'hidden',
        boxSizing: 'border-box',
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
            xs: '1rem',
            sm: '2rem',
            md: '3rem',
            lg: '4rem',
          },
          maxWidth: '100%',
        }}
      >
        {/* Round Icon */}
        <Box
          component="img"
          src={roundIcon}
          alt="Round Icon"
          sx={{
            width: {
              xs: '20vw', // Scales with viewport width
              sm: '18vw',
              md: '15vw',
              lg: '12vw',
            },
            maxWidth: { xs: '100px', sm: '150px', md: '180px', lg: '200px' },
            height: 'auto',
            marginBottom: {
              xs: '0.5rem',
              sm: '1rem',
              md: '1.5rem',
              lg: '2rem',
            },
            objectFit: 'contain',
          }}
        />

        {/* Title Image */}
        <Box
          component="img"
          src={titleImage}
          alt="MANA OF ARTA Title"
          sx={{
            width: {
              xs: '50vw',
              sm: '45vw',
              md: '40vw',
              lg: '35vw',
            },
            maxWidth: { xs: '200px', sm: '280px', md: '360px', lg: '420px' },
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
            xs: '1rem',
            sm: '1.5rem',
            md: '2rem',
            lg: '2.5rem',
          },
          gap: {
            xs: '0.5rem',
            sm: '0.75rem',
            md: '1rem',
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
              xs: '2px',
              sm: '3px',
              md: '4px',
            },
            width: {
              xs: '20px',
              sm: '24px',
              md: '28px',
              lg: '32px',
            },
            height: {
              xs: '20px',
              sm: '24px',
              md: '28px',
              lg: '32px',
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
                  xs: '5px',
                  sm: '6px',
                  md: '7px',
                  lg: '8px',
                },
                minHeight: {
                  xs: '5px',
                  sm: '6px',
                  md: '7px',
                  lg: '8px',
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
              xs: '1rem', // 16px
              sm: '1.25rem', // 20px
              md: '1.5rem', // 24px
              lg: '1.75rem', // 28px
            },
            lineHeight: {
              xs: '1.25rem',
              sm: '1.5rem',
              md: '1.75rem',
              lg: '2rem',
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