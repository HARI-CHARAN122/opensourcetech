import { motion } from "framer-motion";
import { GraduationCap, Code, Cpu, BrainCircuit, Briefcase } from "lucide-react";

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
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Our <span className="text-gradient">Community</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-xl mx-auto mb-16"
        >
          A diverse group of people united by curiosity and a passion for technology.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {members.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-surface rounded-xl p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <m.icon className="text-primary" size={20} />
              </div>
              <span className="text-sm text-foreground">{m.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
