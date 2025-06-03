// About.jsx
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useTextRevealAnimation from "../hooks/useTextRevealAnimation";

const About = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.2, // When 20% of the element is visible
  });

  // Combine refs (scope from hook + inViewRef for scroll trigger)
  const combinedRef = (node) => {
    scope.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <div id="about" className="flex w-full h-full my-10 items-center">
      <div className="md:w-[75%] mx-auto">
        <h2
          ref={combinedRef}
          className="my-6 mx-6 text-3xl md:text-7xl text-center font-cormorant font-bold text-white/40"
        >
          "Opulence is not in the price, but in the experience a fine drink
          bestows. Aged barrels and crystal decanters hold more than liquid-they
          cradle stories, dreams, and desire. Savor each drop as if it were a
          whispered secret from the past."
        </h2>
      </div>
    </div>
  );
};

export default About;
