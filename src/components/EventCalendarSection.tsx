import { motion } from "framer-motion";
import { sectionReveal } from "@/lib/motion";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const EventCalendarSection = () => {
  return (
    <section id="calendar" className="section-shell bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="section-title mb-4">
            Event <span className="text-gradient">Calendar</span>
          </h2>
          <p className="section-subtitle">
            A structured monthly layout to help members track upcoming sessions.
          </p>
        </motion.div>
        <motion.div {...sectionReveal} className="card-surface mx-auto max-w-6xl rounded-2xl p-6 md:p-8">
          <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-wide text-slate-300">
            {days.map((day) => (
              <div key={day} className="rounded-lg bg-white/5 py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, index) => (
              <div
                key={index}
                className="h-16 rounded-lg border border-white/10 bg-white/[0.03]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventCalendarSection;
