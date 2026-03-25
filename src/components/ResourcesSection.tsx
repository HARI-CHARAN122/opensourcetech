import { motion } from "framer-motion";
import { BookOpen, Video, FileText, MessageSquare } from "lucide-react";

// Staggered variants for scroll reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  },
};

const resources = [
  {
    icon: BookOpen,
    title: "Learning Guides",
    desc: "Structured guides to help members learn foundational and advanced topics.",
    gradientId: "grad-purple-pink",
    colors: ["#a855f7", "#ec4899"], // purple to pink
    borderGradient: "linear-gradient(135deg, rgba(168,85,247,0.5), rgba(236,72,153,0.5))",
  },
  {
    icon: Video,
    title: "Session Recordings",
    desc: "Recorded workshops and talks to support continuous self-paced learning.",
    gradientId: "grad-cyan-blue",
    colors: ["#06b6d4", "#3b82f6"], // cyan to blue
    borderGradient: "linear-gradient(135deg, rgba(6,182,212,0.5), rgba(59,130,246,0.5))",
  },
  {
    icon: FileText,
    title: "Study Materials",
    desc: "Curated notes, reference docs, and practical implementation resources.",
    gradientId: "grad-emerald-teal",
    colors: ["#10b981", "#14b8a6"], // emerald to teal
    borderGradient: "linear-gradient(135deg, rgba(16,185,129,0.5), rgba(20,184,166,0.5))",
  },
  {
    icon: MessageSquare,
    title: "Community Discussions",
    desc: "Peer Q&A and knowledge sharing to solve problems and grow together.",
    gradientId: "grad-orange-amber",
    colors: ["#f97316", "#f59e0b"], // orange to amber
    borderGradient: "linear-gradient(135deg, rgba(249,115,22,0.5), rgba(245,158,11,0.5))",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="section-title mb-6">
            <span className="text-gradient">Everything You Need to Succeed</span>
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
            Curated content and recordings that help members learn faster and
            stay updated with modern technology trends.
          </p>
        </motion.div>

        <motion.div 
          className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -6, 
                  borderColor: 'rgba(168,85,247,0.4)', 
                  boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(168,85,247,0.15)' 
                }}
                className="group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(20px)',
                  position: 'relative',
                  overflow: 'hidden',
                  padding: '24px',
                  cursor: 'pointer'
                }}
              >
                {/* Glow Background inside the card on Hover */}
                <div 
                  className="transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 50% 0%, rgba(168,85,247,0.12), transparent 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                  }}
                />

                <div className="relative z-10">
                  <div 
                    className="mb-5 flex items-center justify-center rounded-xl relative"
                    style={{
                      width: '48px',
                      height: '48px',
                      background: `linear-gradient(rgba(15,15,20,1), rgba(15,15,20,1)) padding-box, ${r.borderGradient} border-box`,
                      border: '1px solid transparent',
                    }}
                  >
                    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                      <linearGradient id={r.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop stopColor={r.colors[0]} offset="0%" />
                        <stop stopColor={r.colors[1]} offset="100%" />
                      </linearGradient>
                    </svg>
                    <Icon size={24} style={{ stroke: `url(#${r.gradientId})` }} />
                  </div>
                  
                  <h3 className="mb-2 text-white font-bold text-xl">{r.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {r.desc}
                  </p>
                </div>
                
                {/* Animated bottom border on hover */}
                <div 
                  className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${r.colors[0]}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;
