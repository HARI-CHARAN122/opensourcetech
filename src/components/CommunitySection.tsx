import { motion } from "framer-motion";
import { GraduationCap, Code, Cpu, BrainCircuit, Briefcase } from "lucide-react";
import { cardReveal, sectionReveal } from "@/lib/motion";

const members = [
  { icon: GraduationCap, label: "Students building strong technical foundations" },
  { icon: Code, label: "Developers aiming for practical project experience" },
  { icon: BrainCircuit, label: "AI enthusiasts exploring modern data and AI stacks" },
  { icon: Cpu, label: "Engineers interested in systems, cloud, and innovation" },
  { icon: Briefcase, label: "Professionals who value mentorship and networking" },
];

const CommunitySection = () => {
  return (
    <section id="community" className="section-shell bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.h2
          {...sectionReveal}
          className="section-title mb-4 text-center"
        >
          Our <span className="text-gradient">Community</span>
        </motion.h2>
        <motion.p
          {...sectionReveal}
          className="section-subtitle mx-auto mb-16 max-w-2xl text-center"
        >
          Built for people who want continuous growth through learning,
          community collaboration, and industry-relevant exposure.
        </motion.p>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <motion.div
              key={m.label}
              {...cardReveal(i * 0.06)}
              className="card-surface card-hover flex items-center gap-4 rounded-xl p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
                <m.icon className="text-slate-300" size={20} />
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
