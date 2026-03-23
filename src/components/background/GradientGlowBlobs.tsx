import { motion } from "framer-motion";

const blobs = [
  {
    className:
      "left-[8%] top-20 h-72 w-72 bg-gradient-to-br from-blue-700/8 to-slate-500/8",
    animate: { x: [0, 24, -12, 0], y: [0, -16, 8, 0] },
    duration: 20,
  },
  {
    className:
      "right-[10%] top-[22%] h-64 w-64 bg-gradient-to-br from-slate-600/8 to-indigo-700/8",
    animate: { x: [0, -20, 10, 0], y: [0, 10, -8, 0] },
    duration: 24,
  },
];

const GradientGlowBlobs = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default GradientGlowBlobs;
