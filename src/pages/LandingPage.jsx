import { useNavigate } from 'react-router-dom';
import backMana from '../assets/back_mana.jpg';
import roundIcon from '../assets/round.png';
import titleImage from '../assets/title.png';
import { motion as Motion } from 'framer-motion';

function LandingPage() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate('/menu');
  };

  return (
    <Motion.div
      className="w-screen h-screen fixed inset-0 flex flex-col items-center bg-cover bg-center bg-no-repeat overflow-y-auto md:overflow-y-hidden m-0 p-0 box-border"
      style={{ backgroundImage: `url(${backMana})` }}
      role="main"
      aria-label="Landing Page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Animated Background Overlay */}
      <Motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Main Content - Centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-12 md:py-16 lg:py-20 pb-12 sm:pb-12 md:pb-16 lg:pb-20">
        {/* Round Icon with Pulse Animation */}
        <Motion.img
          src={roundIcon}
          alt="Round Icon"
          loading="lazy"
          className="w-[16vw] sm:w-[18vw] md:w-[15vw] lg:w-[12vw] max-w-[90px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[180px] h-auto mb-2 sm:mb-2 md:mb-4 lg:mb-6 object-contain"
          initial={{ opacity: 0, scale: 0.5, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 },
          }}
        />

        {/* Title Image with Slide Up Animation */}
        <Motion.img
          src={titleImage}
          alt="MANA OF ARTA Title"
          loading="lazy"
          className="w-[42vw] sm:w-[45vw] md:w-[40vw] lg:w-[35vw] max-w-[170px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[360px] h-auto object-contain"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        />
      </div>

      {/* Bottom Section - 9 Dots and Mind Spa */}
    {/* Bottom Section - 9 Dots and Mind Spa */}
<Motion.div
  className="relative z-10 w-full flex flex-col sm:flex-row justify-center items-center px-4 sm:px-6 md:px-8 pb-6 sm:pb-6 md:pb-8 gap-2 sm:gap-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
>
  {/* 9 Dots Grid with Stagger Animation */}
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
    className="cursor-pointer grid grid-cols-3 grid-rows-3 gap-[2px] sm:gap-[3px] w-[26px] sm:w-[28px] md:w-[30px] lg:w-[32px] h-[26px] sm:h-[28px] md:h-[30px] lg:h-[32px] mb-2 sm:mb-0"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.8 }}
    whileHover={{
      scale: 1.2,
      rotate: 90,
      transition: { duration: 0.3, ease: 'easeInOut' },
    }}
    whileTap={{ scale: 0.95 }}
  >
    {[...Array(9)].map((_, index) => (
      <Motion.div
        key={index}
        className="bg-white rounded-full w-full h-full aspect-square"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.9 + index * 0.05,
          ease: 'easeOut',
        }}
        whileHover={{
          scale: 1.3,
          opacity: 0.8,
          transition: {
            delay: 0,
            duration: 0.2,
          },
        }}
      />
    ))}
  </Motion.div>

  {/* Mind Spa Text with Fade In */}
  <Motion.span
    className="text-white font-medium capitalize text-[13px] sm:text-base md:text-xl lg:text-2xl leading-[16px] sm:leading-5 md:leading-6 lg:leading-7 mt-2 sm:mt-0"
    style={{
      fontFamily:
        'Poppins, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif',
    }}
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 },
    }}
  >
    Mind Spa
  </Motion.span>
</Motion.div>

    </Motion.div>
  );
}

export default LandingPage;