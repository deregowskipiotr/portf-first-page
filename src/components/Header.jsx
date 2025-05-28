import ClearAllIcon from "@mui/icons-material/ClearAll";
import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = ["HOME", "ABOUT", "SERVICES", "CONTACT"];

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: "100vh",
      transition: {
        type: "tween", // Smooth animation type
        duration: 0.8, // Total animation duration (800ms)
        delay: 0.2, // Delay before animation starts (200ms)
        ease: [0.25, 0.1, 0.25, 1], // Custom easing curve
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5, // Faster close animation
        ease: [0.55, 0.06, 0.68, 0.19],
      },
    },
  };

  return (
    <Motion.header
      initial="hidden"
      animate="visible"
      className="flex justify-between items-center py-4 px-4 lg:px-10"
    >
      <Motion.h1
        variants={headerVariants}
        transition={{ duration: 1.5 }}
        className="text-2xl md:text-4xl font-light m-0"
      >
        Pio<span className="text-[#e99b63]">Der</span>
      </Motion.h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 items-center">
        {navLinks.map((link, index) => (
          <Motion.a
            key={link}
            href="#"
            variants={linkVariants}
            custom={index}
            className="relative text-base tracking-wider transition-colors hover:text-[#e99b63] duration-500 z-50 group"
          >
            {link}
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#656565] to-[#e99b63] group-hover:w-full ease-in-out duration-500"></span>
          </Motion.a>
        ))}
      </nav>

      <Motion.button
        className="hidden md:block bg-[#e99b63]/60 hover:bg-[#e99b63] text-black py-2 px-8 rounded-2xl border-none font-medium transition-all duration-500 cursor-pointer z-50"
      >
        Sign In
      </Motion.button>

      {/* Mobile Menu Button */}
      <Motion.button
        className="md:hidden p-2 z-50"
        onClick={toggleMobileMenu}
      >
        <ClearAllIcon
          fontSize="large"
          className={`transition-transform ${
            isMobileMenuOpen ? "rotate-180" : ""
          }`}
        />
      </Motion.button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <Motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-16 bottom-0 right-0 left-0 md:hidden bg-black bg-opacity-70 backdrop-blur-md z-40"
          >
            <Motion.nav
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="flex flex-col gap-6 items-center mt-10"
            >
              {navLinks.map((link) => (
                <Motion.a
                  key={link}
                  href="#"
                  className="text-base tracking-wider transition-colors hover:text-[#e99b63] duration-500 z-50"
                >
                  {link}
                </Motion.a>
              ))}
            </Motion.nav>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.header>
  );
};

export default Header;
