  import { useNavigate } from 'react-router-dom'
  import choiceeeImage from '../assets/choiceee.JPG'
  import arrowIcon from '../assets/Arrow png.png'
import { motion as Motion } from 'framer-motion'

  export default function ChoicesIntroPage() {
    const navigate = useNavigate()

    return (
      <div className="w-screen h-screen fixed top-0 left-0 flex flex-col md:flex-row overflow-y-auto m-0 p-0 box-border">
        {/* Left Section - Image */}
        <div className="relative w-full md:w-[38%] h-[25vh] sm:h-[30vh] md:h-full flex items-center justify-center bg-black overflow-hidden">
          <img
            src={choiceeeImage}
            alt="Choices Intro"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 z-0"></div>
        </div>

        {/* Right Section - Text Content */}
        <div className="w-full md:w-[62%] min-h-[75vh] md:min-h-full bg-black flex flex-col justify-between md:justify-center relative overflow-hidden pl-1 pr-5 sm:pl-3 sm:pr-7 md:pl-1 md:pr-12 py-6 sm:py-8 md:py-14 font-sans">
          {/* Main Heading */}
          <Motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans font-medium text-white text-base sm:text-lg md:text-xl leading-snug sm:leading-tight md:leading-[1.2] mb-4 sm:mb-6 md:mb-8 tracking-wide"
          >
            Your Choice
          </Motion.h1>

          {/* Scrollable Content */}
          <div className="flex flex-col gap-3 sm:gap-4 overflow-x-auto md:overflow-x-hidden max-h-[55vh] md:max-h-full pb-4 md:pb-6">
            <div className="flex flex-col min-w-[300px] md:min-w-auto md:max-w-full">
              <Motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-4 sm:gap-5 mb-4 sm:mb-6 md:mb-8"
              >
                {/* MIND DETOX */}
                <div>
                  <h2 className="font-sans font-semibold text-white text-[13px] sm:text-[14px] md:text-[15px] uppercase underline mb-2 sm:mb-3">
                    MIND DETOX, MENTAL BOOST
                  </h2>
                  <p className="font-sans font-normal text-white text-[11px] sm:text-[12.5px] md:text-[13.5px] leading-[1.55] sm:leading-[1.45] opacity-90 text-justify">
                    Routine preservation of mental fitness is strongly connected to psychological power and health. Mental fitness is a dynamic process of neutralizing the endless piercing external forces to one’s SILO social, financial, cultural, political, and also, to stay tuned with the naturally fluctuating internal biological waves within. Amidst a pervasive culture of psychiatric over-diagnosis and medication over-prescription, it is vital to prioritize prevention, and claim control over our mental wellbeing by adopting sustainable self-care. The role of Art therapy in coping and detangling complex emotions for individuals with a psychologically demanding positions with performance pressure, and high expectations is remarkable.
                  </p>
                </div>

                {/* FATIGUE / PAIN / BURNOUT */}
                <div>
                  <h2 className="font-sans font-semibold text-white text-[13px] sm:text-[14px] md:text-[15px] uppercase underline mb-2 sm:mb-3">
                    FATIGUE / PAIN / BURNOUT
                  </h2>
                  <p className="font-sans font-normal text-white text-[11px] sm:text-[12.5px] md:text-[13.5px] leading-[1.55] sm:leading-[1.45] opacity-90 text-justify">
                    Burnout is characterized by three key characteristics: emotional exhaustion, depersonalization, and decline in perceived personal accomplishments. Presenting symptoms could include: fatigue, pain, and ache, lack of drive, dysregulated sleep patterns, self-doubt, helpless and hopeless felling, lack of satisfaction, negative outlook, isolation, procrastination while adopting immediate and poor coping strategies though using food, drugs, alcohol, sex or shopping to scape, or to displace frustration and anger on others.
                  </p>
                </div>

                {/* MOOD AND ANXIETY */}
                <div>
                  <h2 className="font-sans font-semibold text-white text-[13px] sm:text-[14px] md:text-[15px] uppercase underline mb-2 sm:mb-3">
                    MOOD AND ANXIETY
                  </h2>
                  <p className="font-sans font-normal text-white text-[11px] sm:text-[12.5px] md:text-[13.5px] leading-[1.55] sm:leading-[1.45] opacity-90 text-justify">
                    Application of art therapy surpasses the limitations of verbal expression by employing powerful techniques that resonate with the soul, body, and mind. As a deeply personal and recovery-oriented practice, it holistically addresses emotional, spiritual, social, and clinical well-being. Engaging in creative processes offers individuals valuable insight for understanding and untangling complex emotions that underlie emotional dysregulation, depression, anxiety, irritability, and anger. It also serves to enhance motivation, diminish stress, advance neurosensory capacities, strengthen interpersonal bonds, and shape a more profound sense of self-fulfillment.
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
              onClick={() => navigate('/explore')}
              className="w-9 sm:w-11 md:w-12 h-9 sm:h-11 md:h-12 bg-gradient-to-b from-gray-800 to-black border border-gray-500/70 rounded-md shadow-md flex items-center justify-center cursor-pointer"
            >
              <img
                src={arrowIcon}
                alt="Back"
                className="w-1/2 h-auto transform -scale-x-100 filter brightness-90 invert-[35%]"
              />
            </Motion.div>

            {/* Right Arrow */}
            <Motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/choices')}
              className="w-9 sm:w-11 md:w-12 h-9 sm:h-11 md:h-12 bg-gradient-to-b from-green-900 to-green-950 border border-green-700/80 rounded-md shadow-md flex items-center justify-center cursor-pointer"
            >
              <img
                src={arrowIcon}
                alt="Forward"
                className="w-1/2 h-auto filter brightness-110 invert"
              />
            </Motion.div>
          </div>
        </div>
      </div>
    )
  }
