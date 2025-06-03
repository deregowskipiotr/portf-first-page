import DiamondIcon from "@mui/icons-material/Diamond";
import FolderIcon from "@mui/icons-material/Folder";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
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
        <div className="relative w-full sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-xl">
          <div className="absolute inset-[1px] bg-black rounded-xl flex items-center justify-center gap-1">
            <DiamondIcon /> INTRODUCING
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cormorant font-semibold my-6 text-center sm:text-start">
          The Opulent <span className="text-[#e99b63]">Cellar</span>
        </h1>

        {/* Short text for mobile */}
        <p className="block sm:hidden text-base max-w-[20rem] text-center">
          Where the world’s finest spirits awaken your senses and tell tales of
          timeless elegance.
        </p>

        {/* Full text for tablet and desktop */}
        <p className="hidden sm:block text-base sm:text-lg max-w-[20rem] lg:max-w-[30rem] text-center sm:text-start">
          Where the world’s finest spirits awaken your senses and tell tales of
          timeless elegance. Discover, savor, and embrace the art of
          extraordinary taste.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4 sm:mt-6">
          <button
            className="py-2 sm:py-1 px-4 sm:px-10 sm:text-lg
            relative w-[150px] md:w-[240px] h-[40px] md:h-[50px] rounded-lg font-medium text-sm text-white/60
              bg-gradient-to-b from-[#df8240] to-[#1a1a1a]/30
              shadow-[0px_0px_12px_#df8240]"
          >
            <div className="absolute inset-0">
              <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
              <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
              <div className="rounded-lg absolute inset-0 shadow-[0_0_10px_rgb(255,255,255,0.4)_inset]"></div>
            </div>
            Documentation
            <span className="ml-2 hidden sm:inline" fontSize="small">
              <FolderIcon />
            </span>
          </button>

          <button
            className="py-2 sm:py-1 px-4 sm:px-10 sm:text-lg transition-all duration-500
            relative w-[150px] md:w-[240px] h-[40px] md:h-[50px] rounded-lg font-medium text-sm text-white/60
              bg-gradient-to-b from-[#656565] to-[#1a1a1a]/30
              shadow-[0px_0px_12px_#656565]"
          >
            <div className="absolute inset-0">
              <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
              <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
              <div className="rounded-lg absolute inset-0 shadow-[0_0_10px_rgb(255,255,255,0.4)_inset]"></div>
            </div>
            Get Started
            <span className="ml-2 hidden sm:inline" fontSize="small">
              <PlayCircleOutlineIcon />
            </span>
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
          src="/images/maccalan_-removebg-preview.png"
          alt="glasses-img"
          className="w-[60%] sm:w-[90%] lg:w-[450px] "
        />
      </div>
    </main>
  );
};

export default Hero;
