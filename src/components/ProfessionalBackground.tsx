import { motion } from "framer-motion";

const ProfessionalBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">

            <motion.div
                className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full"
                animate={{
                    x: [0, 40, -40, 0],
                    y: [0, -30, 30, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                }}
            />

            <motion.div
                className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-cyan-400/20 blur-[120px] rounded-full"
                animate={{
                    x: [0, -40, 40, 0],
                    y: [0, 30, -30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                }}
            />

        </div>
    );
};

export default ProfessionalBackground;