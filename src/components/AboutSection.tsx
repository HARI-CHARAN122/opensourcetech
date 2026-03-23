import { motion } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";
import { cardReveal, sectionReveal } from "@/lib/motion";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Enable students and developers to grow with practical learning, real projects, and strong community support.",
    gradient: "from-purple-500 to-pink-500",
    glow: "rgba(168,85,247,0.15)",
  },
  {
    icon: Users,
    title: "Who It's For",
    text: "Anyone who codes, designs, builds, or wants to — students, developers, and tech enthusiasts of all levels.",
    gradient: "from-pink-500 to-cyan-500",
    glow: "rgba(236,72,153,0.15)",
  },
  {
    icon: Lightbulb,
    title: "What You Get",
    text: "Workshops, networking, collaborative projects, mentorship, and curated resources for long-term growth.",
    gradient: "from-cyan-500 to-purple-500",
    glow: "rgba(6,182,212,0.15)",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-20 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            Who We Are
          </div>
          <h2 className="section-title mb-6">
            Built for the <span className="text-gradient">Next Generation</span> of Tech
          </h2>
          <p className="section-subtitle">
            Open Source Tech is more than a community — it's where ambitious developers
            come to learn, build, and connect with people who get it.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {cards.map((item, i) => (
            <motion.div
              key={item.title}
              {...cardReveal(i * 0.1)}
              className="gradient-border card-hover group relative p-7 text-center"
              style={{ boxShadow: `0 0 60px ${item.glow}` }}
            >
              {/* Icon */}
              <div className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5`}>
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#080810]">
                  <item.icon className="text-white" size={22} />
                </div>
              </div>

              <h3 className="mb-3 font-heading text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed section-subtitle">
                {item.text}
              </p>

              {/* Bottom gradient line */}
              <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r ${item.gradient} opacity-30 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;