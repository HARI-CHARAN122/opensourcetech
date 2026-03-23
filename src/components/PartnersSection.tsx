import { motion } from "framer-motion";
import { cardReveal, sectionReveal } from "@/lib/motion";

const partners = [
  "Campus Partner 01",
  "Technology Partner 02",
  "Community Partner 03",
  "Learning Partner 04",
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-shell">
      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title mb-4">
            Partners and <span className="text-gradient">Sponsors</span>
          </h2>
          <p className="section-subtitle">
            Organizations that support our mission to build a stronger learning
            ecosystem for students and developers.
          </p>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              {...cardReveal(index * 0.08)}
              className="card-surface card-hover rounded-xl p-6 text-center"
            >
              <div className="mx-auto mb-3 h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/20" />
              <p className="text-sm text-slate-200">{partner}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
