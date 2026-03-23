import { motion } from "framer-motion";
import { Mic, Wrench, Network, Users2, BookOpen } from "lucide-react";
import { cardReveal, sectionReveal } from "@/lib/motion";

const features = [
  {
    icon: Wrench,
    title: "Workshops",
    desc: "Practical sessions that help members build real implementation skills.",
  },
  {
    icon: Mic,
    title: "Tech Talks",
    desc: "Expert-led talks on modern engineering, data, cloud, and AI trends.",
  },
  {
    icon: Network,
    title: "Networking",
    desc: "Connect with peers, mentors, and industry contributors regularly.",
  },
  {
    icon: Users2,
    title: "Collaborative Projects",
    desc: "Build projects in teams to strengthen portfolio and teamwork skills.",
  },
  {
    icon: BookOpen,
    title: "Learning Resources",
    desc: "Access curated guides, notes, recordings, and community knowledge.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="activities" className="section-shell bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          {...sectionReveal}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="section-title mb-5">
            Community <span className="text-gradient">Activities</span>
          </h2>
          <p className="section-subtitle">
            A structured learning ecosystem focused on practical growth,
            collaboration, and professional readiness.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...cardReveal(i * 0.08)}
              className="card-surface card-hover group rounded-xl p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20 transition-colors group-hover:bg-white/15">
                <f.icon className="text-slate-300" size={22} />
              </div>
              <h3 className="mb-2 font-heading font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
