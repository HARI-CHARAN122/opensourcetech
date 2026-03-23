import { motion } from "framer-motion";
import { cardReveal, sectionReveal } from "@/lib/motion";

const stats = [
  { value: "3,200+", label: "Community Members" },
  { value: "48", label: "Events Hosted" },
  { value: "22", label: "Workshops Conducted" },
  { value: "95%", label: "Repeat Participation" },
];

const StatsSection = () => {
  return (
    <section id="stats" className="section-shell">
      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title mb-4">
            Community <span className="text-gradient">Impact</span>
          </h2>
          <p className="section-subtitle">
            Our growth reflects consistent engagement, practical learning, and
            long-term community participation.
          </p>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              {...cardReveal(index * 0.08)}
              className="card-surface card-hover rounded-xl p-6 text-center"
            >
              <p className="font-heading text-3xl font-bold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
