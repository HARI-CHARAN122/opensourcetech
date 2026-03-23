import { motion } from "framer-motion";
import { cardReveal, sectionReveal } from "@/lib/motion";

const team = [
  { name: "Aarav Sharma", role: "Community Lead" },
  { name: "Sneha Reddy", role: "Programs & Workshops" },
  { name: "Nikhil Verma", role: "Partnerships" },
  { name: "Priya Nair", role: "Member Success" },
];

const TeamSection = () => {
  return (
    <section id="team" className="section-shell bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title mb-4">
            Organizing <span className="text-gradient">Team</span>
          </h2>
          <p className="section-subtitle">
            A dedicated group of contributors building a consistent and
            high-quality learning ecosystem for the community.
          </p>
        </motion.div>
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              {...cardReveal(index * 0.08)}
              className="card-surface card-hover rounded-xl p-6 text-center"
            >
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-white/10 ring-1 ring-white/20" />
              <h3 className="font-heading text-lg font-semibold text-white">{member.name}</h3>
              <p className="mt-1 text-sm text-slate-300">{member.role}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
