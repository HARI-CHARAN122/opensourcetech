import { motion } from "framer-motion";
import { cardReveal, sectionReveal } from "@/lib/motion";

const speakers = [
  { name: "Industry Expert 01", topic: "Modern Cloud Engineering" },
  { name: "Industry Expert 02", topic: "Data and AI Workflows" },
  { name: "Community Mentor 01", topic: "Career and Interview Readiness" },
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="section-shell">
      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title mb-4">
            Speakers and <span className="text-gradient">Mentors</span>
          </h2>
          <p className="section-subtitle">
            Learn directly from practitioners and mentors who share practical
            implementation insights and real-world best practices.
          </p>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.article
              key={speaker.name}
              {...cardReveal(index * 0.08)}
              className="card-surface card-hover rounded-xl p-6"
            >
              <div className="mb-4 h-14 w-14 rounded-full bg-white/10 ring-1 ring-white/20" />
              <h3 className="font-heading text-lg font-semibold text-white">{speaker.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{speaker.topic}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
