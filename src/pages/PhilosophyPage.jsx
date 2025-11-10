import { motion } from "framer-motion";
import philosophyImage from "../assets/philosphy.jpg";

export default function PhilosophyPage() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex flex-col md:flex-row bg-black overflow-y-auto m-0 p-0 box-border">
      {/* Left Section - Image */}
      <div className="relative w-full md:w-[42%] h-[30vh] sm:h-[35vh] md:h-full overflow-hidden">
        <img
          src={philosophyImage}
          alt="Philosophy"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[58%] min-h-[65%] sm:min-h-[62%] md:min-h-full bg-black flex flex-col justify-start md:justify-center px-4 sm:px-6 md:px-10 py-6 md:py-14 overflow-y-auto font-[Calibri]">
        <div className="flex flex-col gap-8 md:gap-10 overflow-x-auto md:overflow-x-hidden">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="font-semibold text-white text-xl sm:text-2xl md:text-4xl leading-tight mb-6"
          >
            Philosophy
          </motion.h1>

          {/* I AM ART Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h2 className="text-white font-medium text-base sm:text-lg md:text-xl mb-2 underline underline-offset-8 decoration-green-400">
              I AM ART
            </h2>
            <div className="flex flex-col gap-1.5">
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                I Am Art — an Echo Of The Universe Within Me, Paradoxical And
                Inimitable.
              </p>
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                A Unique Celebration Of Life, Changing, Adopting, Being And
                Becoming; Yet Remaining Me I Am Art —
              </p>
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                A Masterpiece, A Drama. The Polish, The Paint, The Façade. The
                Pain, The Trauma, The Depth.
              </p>
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                A Bold Statement Of Freedom — Dare To Live, To Fight, To Love
                And To Expand Horizons.
              </p>
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                The Curiosity To Fully Explore My Femininity, My Muscularity,
                And All The Shades In Between.
              </p>
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                The History Behind — A Memory, And A Far Beautiful Vision For
                Tomorrow Beyond.
              </p>
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                At This Momentum Which I Pause Wholly To Sketch My Timeless
                Legend.
              </p>
            </div>
          </motion.div>

          {/* I AM NATURE Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-3"
          >
            <h2 className="text-white font-medium text-base sm:text-lg md:text-xl mb-2 underline underline-offset-8 decoration-green-400">
              I AM NATURE
            </h2>
            <div className="flex flex-col gap-1.5">
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                I Am Nature — a beat of life in balance with infinite lives
                around me.
              </p>
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                The sequences of expansion, pause; contraction, and pause.
              </p>
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                A seed of dream striving to fully germinate.
              </p>
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                I accept, I honor and celebrate the hardship to be.
              </p>
              <p className="text-white font-medium text-[11px] sm:text-[12.5px] md:text-[14px] leading-relaxed">
                A short life, yet an everlasting mark.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
