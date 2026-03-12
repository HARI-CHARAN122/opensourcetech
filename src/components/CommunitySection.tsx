import { motion } from "framer-motion";
import { GraduationCap, Code, Cpu, BrainCircuit, Briefcase } from "lucide-react";
import communityImg from "@/assets/community-collab.jpg";

const members = [
  { icon: GraduationCap, label: "Students who want to learn technology" },
  { icon: Code, label: "Developers who want to share knowledge" },
  { icon: Cpu, label: "Engineers exploring new innovations" },
  { icon: BrainCircuit, label: "AI and data science enthusiasts" },
  { icon: Briefcase, label: "Tech professionals interested in networking" },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our <span className="text-gradient">Community</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {members.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <m.icon className="text-primary" size={20} />
                </div>
                <span className="text-sm text-foreground">{m.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden glow-border"
          >
            <img src={communityImg} alt="Community collaboration" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
