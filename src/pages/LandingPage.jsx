import { useNavigate } from 'react-router-dom';
import backMana from '../assets/back_mana.jpg';
import roundIcon from '../assets/round.png';
import titleImage from '../assets/title.png';
import { motion as Motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

function LandingPage() {
  const navigate = useNavigate();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMenuClick = () => {
    navigate('/menu');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax transforms
  const backgroundX = useTransform(mouseX, [0, 1], [-20, 20]);
  const backgroundY = useTransform(mouseY, [0, 1], [-20, 20]);
  const iconX = useTransform(mouseX, [0, 1], [-15, 15]);
  const iconY = useTransform(mouseY, [0, 1], [-15, 15]);
  const titleX = useTransform(mouseX, [0, 1], [-10, 10]);
  const titleY = useTransform(mouseY, [0, 1], [-10, 10]);

  return (
    <Motion.div
      className="w-screen h-screen fixed inset-0 flex flex-col items-center bg-cover bg-center bg-no-repeat overflow-y-auto md:overflow-y-hidden m-0 p-0 box-border"
      style={{ 
        backgroundImage: `url(${backMana})`,
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* IE and Edge */
      }}
      role="main"
      aria-label="Landing Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Parallax Background Layer */}
      <Motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backMana})`,
          x: backgroundX,
          y: backgroundY,
          scale: 1.1,
        }}
      />
      {/* Animated Background Overlay */}
      <Motion.div
        className="absolute inset-0 bg-black/40 z-[1]"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.4, 0.5, 0.4] }}
        transition={{ 
          duration: 4, 
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Subtle Gradient Overlay for Depth */}
      <Motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-[1]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Floating Particles Effect */}
      {[...Array(6)].map((_, i) => (
        <Motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-12 md:py-16 lg:py-20 pb-12 sm:pb-12 md:pb-16 lg:pb-20">
        {/* Round Icon with Floating and Glow Animation */}
        <Motion.div
          style={{
            x: iconX,
            y: iconY,
          }}
          className="relative"
        >
          {/* Glow Effect */}
          <Motion.div
            className="absolute inset-0 blur-xl bg-white/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2.5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              width: '120%',
              height: '120%',
              left: '-10%',
              top: '-10%',
            }}
          />
          <Motion.img
            src={roundIcon}
            alt="Round Icon"
            loading="lazy"
            className="relative w-[28vw] sm:w-[22vw] md:w-[15vw] lg:w-[12vw] max-w-[160px] sm:max-w-[140px] md:max-w-[150px] lg:max-w-[180px] h-auto mb-2 sm:mb-2 md:mb-4 lg:mb-6 object-contain drop-shadow-2xl"
            initial={{ opacity: 0, scale: 0.5, y: -30, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -8, 0],
              rotate: 0,
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
              rotate: { duration: 1, delay: 0.2, ease: 'easeOut' },
              y: {
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 1,
              },
            }}
            whileHover={{
              scale: 1.15,
              rotate: [0, 5, -5, 0],
              transition: { 
                duration: 0.5,
                rotate: { duration: 0.6 }
              },
            }}
          />
        </Motion.div>

        {/* Title Image with Enhanced Slide Up and Parallax */}
        <Motion.div
          style={{
            x: titleX,
            y: titleY,
          }}
        >
          <Motion.img
            src={titleImage}
            alt="MANA OF ARTA Title"
            loading="lazy"
            className="w-[42vw] sm:w-[45vw] md:w-[40vw] lg:w-[35vw] max-w-[170px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[360px] h-auto object-contain drop-shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              filter: 'blur(0px)',
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.08,
              filter: 'brightness(1.1)',
              transition: { duration: 0.3 },
            }}
          />
        </Motion.div>
      </div>

      {/* Bottom Section - 9 Dots and Mind Spa */}
      <Motion.div
        className="relative z-10 w-full flex flex-col sm:flex-row justify-center items-center px-4 sm:px-6 md:px-8 pb-6 sm:pb-6 md:pb-8 gap-2 sm:gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        {/* 9 Dots Grid with Enhanced Stagger Animation */}
        <Motion.div
          onClick={handleMenuClick}
          role="button"
          aria-label="Open Menu"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleMenuClick();
            }
          }}
          className="cursor-pointer grid grid-cols-3 grid-rows-3 gap-[2px] sm:gap-[3px] w-[26px] sm:w-[28px] md:w-[30px] lg:w-[32px] h-[26px] sm:h-[28px] md:h-[30px] lg:h-[32px] mb-2 sm:mb-0 relative group"
          initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: 0,
          }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          whileHover={{
            scale: 1.25,
            rotate: 90,
            transition: { duration: 0.4, ease: 'easeInOut' },
          }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Glow ring on hover */}
          <Motion.div
            className="absolute inset-0 rounded-lg bg-white/20 blur-md opacity-0 group-hover:opacity-100"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              repeat: Infinity,
            }}
          />
          {[...Array(9)].map((_, index) => (
            <Motion.div
              key={index}
              className="bg-white rounded-full w-full h-full aspect-square relative z-10 shadow-lg"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.4,
                delay: 0.9 + index * 0.05,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{
                scale: 1.5,
                opacity: 0.9,
                boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
                transition: {
                  delay: 0,
                  duration: 0.2,
                },
              }}
            />
          ))}
        </Motion.div>

        {/* Mind Spa Text with Enhanced Fade In and Glow */}
        <Motion.span
          className="text-white font-medium capitalize text-[13px] sm:text-base md:text-xl lg:text-2xl leading-[16px] sm:leading-5 md:leading-6 lg:leading-7 mt-2 sm:mt-0 relative"
          style={{
            fontFamily:
              'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
          }}
          initial={{ opacity: 0, x: -10, filter: 'blur(5px)' }}
          animate={{ 
            opacity: 1, 
            x: 0,
            filter: 'blur(0px)',
            textShadow: [
              '0 0 10px rgba(255, 255, 255, 0.3)',
              '0 0 20px rgba(255, 255, 255, 0.5)',
              '0 0 10px rgba(255, 255, 255, 0.3)',
            ],
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 1.2 },
            x: { duration: 0.6, delay: 1.2 },
            filter: { duration: 0.6, delay: 1.2 },
            textShadow: {
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 1.5,
            },
          }}
          whileHover={{
            scale: 1.1,
            letterSpacing: '2px',
            textShadow: '0 0 25px rgba(255, 255, 255, 0.8)',
            transition: { duration: 0.3 },
          }}
        >
          Mind Spa
        </Motion.span>
      </Motion.div>
    </Motion.div>
  );
}

export default LandingPage;