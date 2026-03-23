import { motion } from "framer-motion";
import { cardReveal, sectionReveal } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "The workshops are practical and helped me apply concepts to real projects.",
    name: "Student Member",
  },
  {
    quote:
      "Great peer network and mentor support. The community is consistent and useful.",
    name: "Early Career Developer",
  },
  {
    quote:
      "Events are well organized and professionally run, with strong learning outcomes.",
    name: "Community Participant",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-shell bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title mb-4">
            What Members <span className="text-gradient">Say</span>
          </h2>
          <p className="section-subtitle">
            Community feedback from learners and contributors.
          </p>
        </motion.div>
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              {...cardReveal(index * 0.08)}
              className="card-surface card-hover rounded-xl p-6"
            >
              <p className="text-sm leading-relaxed text-slate-200">"{item.quote}"</p>
              <footer className="mt-4 text-xs uppercase tracking-wide text-slate-400">
                {item.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
