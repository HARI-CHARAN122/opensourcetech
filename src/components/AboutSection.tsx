import { motion } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";
import { cardReveal, sectionReveal } from "@/lib/motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-shell">
      <div className="container mx-auto px-4">
        <motion.div
          {...sectionReveal}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="section-title mb-6">
            About <span className="text-gradient">Our Community</span>
          </h2>
          <p className="section-subtitle">
            Open Source Tech is a student and developer community focused on
            practical skill building, peer learning, and collaboration. We help
            members move from theory to implementation through events,
            workshops, mentorship, and shared resources.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "Enable students and developers to grow with practical learning and community support.",
            },
            {
              icon: Users,
              title: "Who It Is For",
              text: "Students, developers, and professionals who want guided growth and collaborative opportunities.",
            },
            {
              icon: Lightbulb,
              title: "Member Value",
              text: "Hands-on sessions, expert insights, networking, and curated resources for long-term development.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...cardReveal(i * 0.08)}
              className="card-surface card-hover rounded-xl p-7 text-center"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
                <item.icon className="text-slate-300" size={24} />
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
