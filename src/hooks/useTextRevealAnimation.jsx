// useTextRevealAnimation.js
import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

const useTextRevealAnimation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      const split = new SplitType(scope.current, {
        types: "lines,words",
        tagName: "span",
      });

      // Set initial hidden state for words
      split.words?.forEach((word) => {
        word.style.transform = "translateY(100%)";
        word.style.opacity = "0";
      });

      return () => {
        split.revert(); // Cleanup SplitType on unmount
      };
    }
  }, [scope]);

  const entranceAnimation = () => {
    if (!scope.current) return;
    return animate(
      scope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0%)",
        opacity: 1,
      },
      {
        duration: 0.7,
        delay: stagger(0.15),
      }
    );
  };

  return { scope, entranceAnimation };
};

export default useTextRevealAnimation;
