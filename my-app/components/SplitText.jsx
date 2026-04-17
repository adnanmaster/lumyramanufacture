import React from "react";
import { motion } from "framer-motion";

export function SplitText({
  children,
  animationFrom,
  animationTo,
  delay = 0.1,
  easing = "easeOut",
  ...rest
}) {
  // Ensure children is a string before splitting
  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  return words.map((word, i) => {
    return (
      <div
        key={`${word}-${i}`}
        style={{ display: "inline-block", overflow: "hidden" }}
      >
        <motion.div
          {...rest}
          initial={animationFrom}
          animate={animationTo}
          transition={{
            delay: i * delay,
            // This fallback ensures that if the prop is invalid, it defaults to 'easeOut'
            ease: easing || "easeOut",
            duration: 0.8,
          }}
          style={{ display: "inline-block", willChange: "transform" }}
        >
          {word + (i !== words.length - 1 ? "\u00A0" : "")}
        </motion.div>
      </div>
    );
  });
}
