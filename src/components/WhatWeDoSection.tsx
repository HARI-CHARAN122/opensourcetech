import { motion } from "framer-motion";
import { Mic, Wrench, Network, Users2, BookOpen, Code2 } from "lucide-react";
import { cardReveal, sectionReveal } from "@/lib/motion";

const features = [
  {
    icon: Wrench,
    title: "Workshops",
    desc: "Hands-on sessions where you actually build things — not just watch slides.",
    gradient: "from-purple-500 to-indigo-500",
    color: "#a855f7",
  },
  {
    icon: Mic,
    title: "Tech Talks",
    desc: "Expert speakers sharing real experience in AI, cloud, engineering and more.",
    gradient: "from-pink-500 to-rose-500",
    color: "#ec4899",
  },
  {
    icon: Network,
    title: "Networking",
    desc: "Meet peers, mentors, and industry professionals who can change your career.",
    gradient: "from-cyan-500 to-blue-500",
    color: "#06b6d4",
  },
  {
    icon: Users2,
    title: "Team Projects",
    desc: "Collaborate on real projects that strengthen your portfolio and teamwork.",
    gradient: "from-emerald-500 to-teal-500",
    color: "#10b981",
  },
  {
    icon: BookOpen,
    title: "Resources",
    desc: "Curated guides, recordings, notes and a shared knowledge base.",
    gradient: "from-orange-500 to-amber-500",
    color: "#f97316",
  },
  {
    icon: Code2,
    title: "Open Source",
    desc: "Contribute to community projects and build a public portfolio together.",
    gradient: "from-violet-500 to-purple-500",
    color: "#8b5cf6",
  },
];

const WhatWeDoSection = () => {
  return (
    <section id="activities" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "rgba(255,255,255,0.01)" }} />

      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
            What We Do
          </div>
          <h2 className="section-title mb-6">
            Everything You Need to <span className="text-gradient">Level Up</span>
          </h2>
          <p className="section-subtitle">
            A full ecosystem for learning, building, and growing — all in one community.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...cardReveal(i * 0.07)}
              className="gradient-border card-hover group relative overflow-hidden p-6"
            >
              {/* Glow bg */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at 50% 0%, ${f.color}15, transparent 70%)` }}
              />

              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${f.gradient} p-0.5`}>
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#080810]">
                  <f.icon size={20} style={{ color: f.color }} />
                </div>
              </div>

              <h3 className="mb-2 font-heading text-lg font-bold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed section-subtitle">{f.desc}</p>

              {/* Bottom line */}
              <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r ${f.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;