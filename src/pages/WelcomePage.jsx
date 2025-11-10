import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import welcomeBg from '../assets/Welcome.png'
import { motion as Motion } from 'framer-motion'

function WelcomePage() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return (
    <div
      className="relative w-screen h-screen fixed inset-0 flex flex-col items-center justify-between overflow-y-auto bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
      style={{ backgroundImage: `url(${welcomeBg})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-between w-full max-w-[1000px] min-h-full px-6 sm:px-8 md:px-8 lg:px-24 pt-[55%] sm:pt-[36%] md:pt-[10%] pb-12 md:pb-12 pl-6 sm:pl-16 md:pl-72 lg:pl-96 pr-6 sm:pr-10 md:pr-16 lg:pr-24">
        <div className="w-full text-left">
          <Motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Calibri, sans-serif',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: 'clamp(1.9rem, 6vw, 2.75rem)',
              lineHeight: 1.15,
              letterSpacing: '0%',
              color: 'white',
              margin: 0,
              marginBottom: 'clamp(1.2rem, 4vw, 1.8rem)',
            }}
          >
            Welcome To Mind Spa
          </Motion.h1>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-5 mb-11"
          >
            <p
              className="text-white text-sm sm:text-[0.95rem] leading-relaxed capitalize whitespace-normal md:whitespace-nowrap"
              style={{ fontFamily: 'Calibri, sans-serif' }}
            >
              Mana Of Arta Is A Sanctuary Space We Sculpt For Your Mind, Body And Spirit To Retune And Revive
            </p>
            <p
              className="text-white text-sm sm:text-[0.95rem] leading-relaxed capitalize whitespace-normal md:whitespace-nowrap"
              style={{ fontFamily: 'Calibri, sans-serif' }}
            >
              To Reveal Your True Power — Art And Nature
            </p>
            <p
              className="text-white text-sm sm:text-[0.95rem] leading-relaxed capitalize whitespace-normal md:whitespace-nowrap"
              style={{ fontFamily: 'Calibri, sans-serif' }}
            >
              We Are An Eco-Friendly, And Tech-Integrated Solution For Complex Psychological Needs Of Today's Global Citizens.
            </p>
          </Motion.div>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white text-xs sm:text-sm leading-relaxed capitalize whitespace-normal md:whitespace-nowrap text-center md:text-left"
            style={{
              fontFamily: 'Calibri, sans-serif',
              margin: '0',
              marginRight: isMobile ? 0 : '10rem',
              marginBottom: 'clamp(1.75rem, 4vw, 2.75rem)',
            }}
          >
            A Routine For Psyche Detox & Self Hygiene For Mind
          </Motion.p>

          <Motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/explore')}
            className="text-black text-sm font-bold relative overflow-hidden group inline-flex items-center justify-center"
            style={{
              background: 'linear-gradient(90deg, #14F195, #63DB70)',
              boxShadow: '0 4px 15px rgba(20, 241, 149, 0.3)',
              width: 140,
              height: 42,
              border: 'none',
              borderRadius: 3,
              padding: '15px 27px',
              cursor: 'pointer',
              fontFamily: 'Calibri, sans-serif',
              margin: '0',
              marginRight: isMobile ? 0 : '10rem',
            }}
          >
            <Motion.span className="relative z-10" whileHover={{ scale: 1.05 }}>
              Learn More
            </Motion.span>
            <Motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
            />
          </Motion.button>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage