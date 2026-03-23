import { motion } from "framer-motion";
import { BookOpen, Video, FileText, MessageSquare } from "lucide-react";
import { cardReveal, sectionReveal } from "@/lib/motion";

const resources = [
  {
    icon: BookOpen,
    title: "Learning Guides",
    desc: "Structured guides to help members learn foundational and advanced topics.",
  },
  {
    icon: Video,
    title: "Session Recordings",
    desc: "Recorded workshops and talks to support continuous self-paced learning.",
  },
  {
    icon: FileText,
    title: "Study Materials",
    desc: "Curated notes, reference docs, and practical implementation resources.",
  },
  {
    icon: MessageSquare,
    title: "Community Discussions",
    desc: "Peer Q&A and knowledge sharing to solve problems and grow together.",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="section-shell">
      <div className="container mx-auto px-4">
        <motion.div
          {...sectionReveal}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="section-title mb-5">
            Learning <span className="text-gradient">Resources</span>
          </h2>
          <p className="section-subtitle">
            Curated content and recordings that help members learn faster and
            stay updated with modern technology trends.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              {...cardReveal(i * 0.08)}
              className="card-surface card-hover group rounded-xl p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
                <r.icon className="text-slate-300" size={22} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
