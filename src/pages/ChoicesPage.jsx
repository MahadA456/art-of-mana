import { useNavigate } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import choiceImage from '../assets/choice.jpg'
import arrowIcon from '../assets/Arrow png.png'

export default function ChoicesPage() {
  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col md:flex-row overflow-y-auto m-0 p-0 box-border">
      {/* Left Section - Image */}
      <div className="relative w-full md:w-[38%] h-[25vh] sm:h-[30vh] md:h-full flex items-center justify-center bg-black overflow-hidden">
        <img
          src={choiceImage}
          alt="Choices"
          loading="lazy"
          className="w-full h-full object-cover md:object-contain object-center"
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      </div>

      {/* Right Section - Text Content */}
      <div className="w-full md:w-[62%] min-h-[75vh] md:min-h-full bg-black flex flex-col justify-between md:justify-center relative overflow-hidden px-2 sm:px-4 md:px-8 py-4 sm:py-8 md:py-14">
        {/* Main Heading */}
        <Motion.h1
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans font-medium text-white text-lg sm:text-xl md:text-2xl leading-snug sm:leading-tight md:leading-[1.2] mb-4 sm:mb-6 md:mb-8 tracking-wide text-left"
        >
          Your Choice
        </Motion.h1>

        {/* Scrollable Content */}
        <div className="flex flex-col gap-3 sm:gap-4 overflow-x-auto md:overflow-x-hidden max-h-[55vh] md:max-h-full pb-4 md:pb-6 scroll-smooth">
          <div className="flex flex-col min-w-[300px] md:min-w-auto md:max-w-full">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 sm:gap-5 mb-4 sm:mb-6 md:mb-8"
            >
              {/* TRAUMA Section */}
              <div>
                <h2 className="font-sans font-semibold text-white text-[13px] sm:text-[14px] md:text-[15px] uppercase underline mb-2 sm:mb-3">
                  TRAUMA
                </h2>
                <p className="font-sans font-medium text-white text-[11px] sm:text-[12.5px] md:text-[13.5px] leading-[1.55] sm:leading-[1.45] opacity-90 text-justify">
                  The remarkable value of art therapy in overpowering trauma has been proved. The process provides a safe and controlled environment where individuals can access and process traumatic emotions through nonverbal symbolic expressions. Sensory engagement facilitates the processing of blocked traumatic memories. A significant benefit for individuals comes from revisiting their experiences and viewing the visual artwork representing their trauma. The repetition of the auditory, verbal, and visual memories is crucial, as each review helps to fill in memory gaps, the processing and ultimately diminishing the related suffering.
                </p>
              </div>

              {/* FATIGUE/PAIN/BURNOUT Section */}
              <div>
                <h2 className="font-sans font-semibold text-white text-[13px] sm:text-[14px] md:text-[15px] uppercase underline mb-2 sm:mb-3">
                  FATIGUE / PAIN / BURNOUT
                </h2>
                <p className="font-sans font-medium text-white text-[11px] sm:text-[12.5px] md:text-[13.5px] leading-[1.55] sm:leading-[1.45] opacity-90 text-justify">
                  Art therapy can circumvent cultural and language-based barriers, addressing the root causes of eating disorders. For those struggling with disordered eating, art provides a safe medium for self-expression, and facilitating a deeper understanding of themselves, their relationships, and interactions with the world. Metaphorical expressions within art can reveal unconscious conflicts, such as the individual's simultaneous desire for safety through food and their conscious efforts to rationalize the behaviors.
                </p>
              </div>

              {/* AUTISM SPECTRUM Section */}
              <div>
                <h2 className="font-sans font-semibold text-white text-[13px] sm:text-[14px] md:text-[15px] capitalize underline mb-2 sm:mb-3">
                  Autism Spectrum
                </h2>
                <p className="font-sans font-medium text-white text-[11px] sm:text-[12.5px] md:text-[13.5px] leading-[1.55] sm:leading-[1.45] opacity-90 text-justify">
                  Research on creative arts interventions for children with Autism Spectrum Disorder level one, reveals improvements in occupation-based outcomes, specifically in performance skills related to process and social interaction, as well as in body functions. Art Therapy promotes self-expression and structured freedom, but not avoidant and suppressive coping approaches which ultimately lead to anxiety and stress in this population.
                </p>
              </div>
            </Motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-3 sm:gap-5 md:gap-6 mt-8 md:mt-auto mb-5 sm:mb-4 md:mb-0">
          {/* Left Arrow */}
          <Motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/choices-intro')}
            className="w-9 sm:w-11 md:w-12 h-9 sm:h-11 md:h-12 bg-gradient-to-b from-green-900 to-green-950 border border-green-700/80 rounded-md shadow-md flex items-center justify-center cursor-pointer"
          >
            <img
              src={arrowIcon}
              alt="Back"
              className="w-1/2 h-auto transform -scale-x-100 filter invert brightness-110"
            />
          </Motion.div>

          {/* Right Arrow */}
          <Motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/choices')}
            className="w-9 sm:w-11 md:w-12 h-9 sm:h-11 md:h-12 bg-gradient-to-b from-gray-800 to-black border border-gray-500/70 rounded-md shadow-md flex items-center justify-center cursor-pointer"
          >
            <img
              src={arrowIcon}
              alt="Forward"
              className="w-1/2 h-auto filter brightness-90 invert-[35%]"
            />
          </Motion.div>
        </div>
      </div>
    </div>
  )
}
