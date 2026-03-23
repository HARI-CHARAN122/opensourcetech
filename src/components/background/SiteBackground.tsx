import { motion } from "framer-motion";

const SiteBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden bg-[#0b0f1a]">

      <motion.div
        className="absolute top-[15%] left-[10%] w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full"
        animate={{
          x: [0, 80, -80, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-pink-500/10 blur-[140px] rounded-full"
        animate={{
          x: [0, -60, 60, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
        }}
      />

    </div>
  );
};

export default SiteBackground;