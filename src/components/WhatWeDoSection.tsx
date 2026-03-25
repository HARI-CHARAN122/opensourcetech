import { motion } from "framer-motion";
import { Mic, Wrench, Network, Users2, BookOpen, Code2 } from "lucide-react";

// Simple unoptimized motion reveal for sections
const sectionReveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 }
};

const cardReveal = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, delay }
});

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
    <section id="activities" className="section-shell relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "rgba(255,255,255,0.01)" }} />

      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="section-title mb-6">
            <span className="text-gradient">Everything You Need to Level Up</span>
          </h2>
          <p className="section-subtitle">
            A full ecosystem for learning, building, and growing — all in one community.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...cardReveal(i * 0.07)}
              className="gradient-border group relative overflow-hidden p-8 transition-all duration-500 hover:-translate-y-2 card-hover"
              style={{
                background: "rgba(10, 10, 15, 0.8)",
                boxShadow: "0 0 0 rgba(0,0,0,0)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px ${f.color}40`;
                e.currentTarget.style.borderColor = `${f.color}60`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `none`;
                e.currentTarget.style.borderColor = `rgba(255,255,255,0.07)`;
              }}
            >
              {/* Glow bg specific to card */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at 50% 0%, ${f.color}15, transparent 70%)` }}
              />

              {/* 3D Icon Container */}
              <div className="mb-6" style={{ perspective: "1000px" }}>
                <div 
                  className="relative w-14 h-14 transition-transform duration-500 ease-out flex items-center justify-center group-hover:[transform:rotateX(15deg)_rotateY(-15deg)_translateZ(20px)]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${f.gradient} p-[2px]`}>
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#080810]">
                      <f.icon size={24} style={{ color: f.color }} className="relative z-10" />
                    </div>
                  </div>
                  
                  {/* Floating Icon Glow Underneath */}
                  <div 
                    className="absolute -inset-2 opacity-0 transition-opacity duration-500 blur-xl -z-10 group-hover:opacity-100"
                    style={{ background: f.color }}
                  />
                </div>
              </div>

              <h3 className="mb-3 font-heading text-xl font-bold text-white relative z-10">{f.title}</h3>
              <p className="text-sm leading-relaxed section-subtitle relative z-10 font-medium">{f.desc}</p>

              {/* Bottom line */}
              <div 
                className="absolute inset-x-0 bottom-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ background: `linear-gradient(90deg, transparent, ${f.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;