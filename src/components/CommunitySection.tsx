import { motion } from "framer-motion";
import { GraduationCap, Code, Cpu, BrainCircuit, Briefcase, Palette } from "lucide-react";
import { cardReveal, sectionReveal } from "@/lib/motion";

const members = [
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Building strong foundations before entering the industry.",
    gradient: "from-purple-500 to-pink-500",
    color: "#a855f7",
  },
  {
    icon: Code,
    title: "Developers",
    desc: "Leveling up with real projects and peer collaboration.",
    gradient: "from-pink-500 to-rose-500",
    color: "#ec4899",
  },
  {
    icon: BrainCircuit,
    title: "AI Enthusiasts",
    desc: "Exploring modern AI, data, and machine learning stacks.",
    gradient: "from-cyan-500 to-blue-500",
    color: "#06b6d4",
  },
  {
    icon: Cpu,
    title: "Engineers",
    desc: "Diving deep into systems, cloud, and infrastructure.",
    gradient: "from-emerald-500 to-teal-500",
    color: "#10b981",
  },
  {
    icon: Palette,
    title: "Designers",
    desc: "Blending creativity with technology for better products.",
    gradient: "from-orange-500 to-amber-500",
    color: "#f97316",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    desc: "Expanding their network and staying on the cutting edge.",
    gradient: "from-violet-500 to-purple-500",
    color: "#8b5cf6",
  },
];

const CommunitySection = () => {
  return (
    <section id="community" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-pink-600/5 blur-[120px]" />
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-600/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Who's In
          </div>
          <h2 className="section-title mb-6">
            A Community for <span className="text-gradient">Every Builder</span>
          </h2>
          <p className="section-subtitle">
            Whether you're just starting out or already shipping products —
            there's a place for you here.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <motion.div
              key={m.title}
              {...cardReveal(i * 0.07)}
              className="gradient-border card-hover group relative overflow-hidden p-6"
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at 50% 0%, ${m.color}15, transparent 70%)` }}
              />

              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${m.gradient} p-0.5`}>
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#080810]">
                  <m.icon size={20} style={{ color: m.color }} />
                </div>
              </div>

              <h3 className="mb-2 font-heading text-lg font-bold text-white">{m.title}</h3>
              <p className="text-sm leading-relaxed section-subtitle">{m.desc}</p>

              <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r ${m.gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;