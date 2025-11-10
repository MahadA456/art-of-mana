import exploreImage from '../assets/exploree.jpg'
import { motion } from 'framer-motion'

export default function ExplorePage() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col md:flex-row overflow-y-auto m-0 p-0 box-border">
      {/* Left Section - Image */}
      <div className="relative w-full md:w-[38%] h-[35%] sm:h-[38%] md:h-full overflow-hidden">
        <img
          src={exploreImage}
          alt="Explore"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        {/* Green overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-400/5 z-1"></div>
      </div>

      {/* Right Section - Text */}
      <div className="w-full md:w-[62%] min-h-[65%] sm:min-h-[62%] md:min-h-full bg-black flex flex-col justify-center relative overflow-hidden px-2 sm:px-3 md:px-6 py-4 md:py-12 font-sans">
        <div className="flex flex-col overflow-x-hidden">
          <div className="flex flex-col w-full md:max-w-full pr-6 sm:pr-12 md:pr-36 pl-2 sm:pl-4 md:pl-1">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="font-sans font-semibold text-white text-base sm:text-lg md:text-2xl leading-[1.3] md:leading-[1.2] mb-12 md:mb-20"
            >
              Explore Art Therapy
            </motion.h1>

            {/* Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <p className="font-sans font-medium text-white text-[10px] sm:text-[11px] md:text-[13.5px] leading-[1.4] md:leading-[1.25] capitalize text-left whitespace-normal md:whitespace-nowrap">
                Today, We Welcome You To Step In A New Panorama, And Fearlessly Explore A Venerable Tradition With A Fresh Set of Skills Salutary To Everyone
              </p>
              <p className="font-sans font-medium text-white text-[9px] sm:text-[10px] md:text-[13px] leading-[1.4] md:leading-[1.25] capitalize text-left whitespace-normal md:whitespace-nowrap">
                For Millennia, Our Earliest Ancestors Have Intuitively Applied The Therapeutic Power Of Arts For Self-expression And Healing
              </p>
              <p className="font-sans font-medium text-white text-[9px] sm:text-[10px] md:text-[13px] leading-[1.4] md:leading-[1.25] capitalize text-left whitespace-normal md:whitespace-nowrap">
                Since Mid-20th Century, The Discipline Of Art Therapy Stood As A Superior Non-pharmacological Modality With Minimal Side Effects
              </p>
              <p className="font-sans font-medium text-white text-[9px] sm:text-[10px] md:text-[13px] leading-[1.4] md:leading-[1.25] capitalize text-left whitespace-normal md:whitespace-nowrap">
                A Sustainable Tool For Life for Acute Crises through Loss, Grief, And Trauma and Chronic Conditions like Depression, Pain, Fatigue, Eating Abnormalities
              </p>
              <p className="font-sans font-medium text-white text-[9px] sm:text-[10px] md:text-[13px] leading-[1.4] md:leading-[1.25] capitalize text-left whitespace-normal md:whitespace-nowrap">
                Anxiety, Post Traumatic Stress Disorder (PTSD), Cognitive Impairments, and Autism Spectrum
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
