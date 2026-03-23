import { motion } from "framer-motion";

export default function AnimatedButton({ text }: any) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
      px-6 py-3
      rounded-lg
      text-white
      font-medium
      shadow-sm
      bg-gradient-to-r
      from-indigo-600
      to-sky-500
      transition
      "
        >
            {text}
        </motion.button>
    );
}