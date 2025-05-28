import DiamondIcon from "@mui/icons-material/Diamond";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion as Motion } from "framer-motion";

const Hero = () => {

  const heroVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        delay: 0.5, // Delay before the animation starts
        duration: 1.0,
        ease: "easeInOut",
      },
    }
  };


  return (
    <main className="relative flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <Motion.div
        className="max-w-xl lg:ml-[10%] z-10 mt-[90%] md:mt-[80%] lg:mt-0"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Text - with gradient border */}
        <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-xl">
          <div className="absolute inset-[1px] bg-black rounded-xl flex items-center justify-center gap-1">
            <DiamondIcon /> INTRODUCING
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold my-6">
          Email for <span className="text-[#e99b63]">Developers</span>
        </h1>

        <p className=" text-base sm:text-lg max-w-[20rem] lg:max-w-[30rem] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum?
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-4 sm:mt-6">
          <button className=" text-white/40 hover:text-white py-2 sm:py-3 px-8 sm:px-10 rounded-2xl sm:text-lg text-sm font-semibold  transition-all duration-500 bg-[#e99b63]/60 hover:bg-[#e99b63] ">
            Documentation
            <LaunchIcon className="ml-2" fontSize="small" />
          </button>

          <button className=" text-white/40 hover:text-white py-2 sm:py-3 px-8 sm:px-10 rounded-2xl sm:text-lg text-sm font-semibold  transition-all duration-500 bg-[#1a1a1a] hover:bg-[#505050]">
            Get Started
            <LaunchIcon className="ml-2" fontSize="small" />
          </button>
        </div>
      </Motion.div>

      {/* Right-side Image */}

      <div
        className="absolute lg:top-[-5%] md:top-[-20%] lg:right-[200px] top-[-30%] bottom-0 h-full flex justify-center items-center mt-10 lg:mt-0 "
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="2000"
      >
        <img
          src="/maccalan_-removebg-preview.png"
          alt="glasses-img"
          className="w-[60%] sm:w-[90%] lg:w-[450px] "
        />
      </div>
    </main>
  );
};

export default Hero;
