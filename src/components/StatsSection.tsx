import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { sectionReveal, cardReveal } from "@/lib/motion";

const stats = [
  { value: 3200, suffix: "+", label: "Community Members", desc: "Active learners & builders" },
  { value: 48, suffix: "", label: "Events Hosted", desc: "Meetups & conferences" },
  { value: 22, suffix: "", label: "Workshops Done", desc: "Hands-on sessions" },
  { value: 95, suffix: "%", label: "Repeat Participation", desc: "Members who return" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = Math.round(v).toLocaleString() + suffix;
      }
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const StatsSection = () => {
  return (
    <section id="stats" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            By The Numbers
          </div>
          <h2 className="section-title mb-4">
            Community <span className="text-gradient">Impact</span>
          </h2>
          <p className="section-subtitle">
            Our growth reflects consistent engagement, practical learning, and
            long-term community participation.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              {...cardReveal(index * 0.08)}
              className="card-surface card-hover relative rounded-2xl p-7 text-center overflow-hidden group"
            >
              {/* Top glow line */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

              <p className="font-heading text-4xl font-bold text-white">
                <AnimatedNumber value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-200">{item.label}</p>
              <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;