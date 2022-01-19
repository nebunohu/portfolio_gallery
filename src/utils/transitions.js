export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export const pageVariants = {
  initial: {
    opacity: 1,
    x: "100vw",
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 1,
    x: "-100vw",
    duration: 1,
  }
};