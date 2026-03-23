import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { sectionReveal } from "@/lib/motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      <div className="container relative z-10 mx-auto px-4 pt-28 pb-20 text-center md:pt-36">
        <motion.div {...sectionReveal} className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-slate-200">
            Student and Developer Technology Community
          </div>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Learn, Build, and Grow
            <span className="block text-gradient">with a Real Tech Community</span>
          </h1>
          <p className="mx-auto mt-6 mb-10 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">
            We host practical workshops, tech talks, and collaborative sessions
            for students and developers who want hands-on growth, industry
            guidance, and meaningful peer networks.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#join" className="primary-button min-w-52">
              Join Community
              <ArrowRight size={16} />
            </a>
            <a href="#events" className="secondary-button min-w-52">
              <Calendar size={16} />
              View Events
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;