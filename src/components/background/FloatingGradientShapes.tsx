import { motion } from "framer-motion";

const shapes = [
  {
    className: "bottom-24 left-[20%] h-36 w-36 bg-slate-600/7",
    duration: 16,
    delay: 0,
  },
  {
    className: "bottom-12 right-[18%] h-44 w-44 bg-indigo-700/7",
    duration: 18,
    delay: 0.6,
  },
  {
    className: "top-[42%] right-[30%] h-28 w-28 bg-slate-500/7",
    duration: 14,
    delay: 1.2,
  },
];

const FloatingGradientShapes = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-[999px] blur-2xl ${shape.className}`}
          animate={{
            y: [0, -10, 6, 0],
            x: [0, 8, -4, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingGradientShapes;
