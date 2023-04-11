export const Animation = (direcion) => {
  return {
    initial: {
      opacity: 0,
      x: direcion === "left" ? -100 : direcion === "right" ? 100 : 0,
      y: direcion === "top" ? -100 : direcion === "bottom" ? 100 : 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ease: [0.25, 0.25, 0.25, 0.75],
        duration: 1,
      },
    },
  };
};
