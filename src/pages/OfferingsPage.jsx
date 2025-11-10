import { motion } from "framer-motion";
import offeringsBg from "../assets/Our Offerings.png";
import clockIcon from "../assets/clock png.png";
import chatIcon from "../assets/chat png.png";

export default function OfferingsPage() {
  const individualPackages = [
    {
      title: "Single Sessions",
      price: "$130",
      duration: "45 min",
      intro: "Free 15 min intro session",
      highlighted: true,
    },
    {
      title: "Bundle 1",
      price: "$1000",
      duration: "Once a week, 8 weeks (45 min a session)",
      intro: "Free Introduction (15 min each)",
      highlighted: false,
    },
    {
      title: "Bundle 2",
      price: "$2000",
      duration: "Twice a week, 8 weeks (45 min a session)",
      intro: "Free Introduction (15 min each)",
      highlighted: false,
    },
  ];

  const jointSessions = [
    {
      title: "Single Sessions",
      price: "$200",
      duration: "60 min",
      intro: "Free introduction session (15 min)",
      highlighted: false,
    },
    {
      title: "Bundle 1",
      price: "$1000",
      duration: "5 sessions, (60 min a session)",
      intro: "Free Introduction (15 min each)",
      highlighted: false,
    },
    {
      title: "Bundle 2",
      price: "$1,900",
      duration: "10 sessions, (60 min a session)",
      intro: "Free Introduction (15 min each)",
      highlighted: false,
    },
  ];

  return (
    <div
      className="w-screen h-screen fixed inset-0 flex flex-col overflow-y-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${offeringsBg})` }}
    >
      {/* Main Container */}
      <div className="flex flex-col w-full min-h-full px-4 sm:px-6 md:px-10 py-6 md:py-14 font-[Calibri] text-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl mb-2">
            Our Offerings
          </h1>
          <p className="text-[12px] sm:text-[14px] md:text-[17px] leading-relaxed max-w-3xl text-center mb-8">
            You are a striking blend of art and nature, walking a unique
            experience in life. We strive to meet your needs, expectations,
            budget and time. If the standard offerings are not suitable, talk to
            us!
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto w-full">
          {[
            {
              title: "Individual Packages (Virtual)",
              items: individualPackages,
              delay: 0.2,
            },
            {
              title: "Joint Sessions (Virtual)",
              items: jointSessions,
              delay: 0.3,
            },
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: section.delay }}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold underline underline-offset-4 text-center sm:text-left">
                {section.title}
              </h2>

              <div className="flex flex-col gap-3 sm:gap-4">
                {section.items.map((pkg, index) => (
                  <motion.div
                    key={pkg.title}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.35 + index * 0.08 + sectionIndex * 0.12,
                    }}
                    whileHover={{ scale: 1.02 }}
                    className={`flex flex-col gap-2 p-3 sm:p-4 md:p-5 rounded-xl border transition-all duration-300 ${
                      pkg.highlighted
                        ? "border-[#00d4aa] shadow-[0_6px_16px_rgba(0,212,170,0.18)]"
                        : "border-[#2b2b2b]"
                    } bg-black/70`}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-base sm:text-lg md:text-xl">
                        {pkg.title}
                      </h3>
                      <span className="font-medium text-base sm:text-lg md:text-xl">
                        {pkg.price}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <img
                          src={clockIcon}
                          alt="Clock"
                          className="w-4 sm:w-5 h-auto"
                          loading="lazy"
                        />
                        <span className="font-light text-[12px] sm:text-[13px] md:text-[15px] text-gray-200">
                          {pkg.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src={chatIcon}
                          alt="Chat"
                          className="w-4 sm:w-5 h-auto"
                          loading="lazy"
                        />
                        <span className="font-light text-[12px] sm:text-[13px] md:text-[15px] text-gray-200">
                          {pkg.intro}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
