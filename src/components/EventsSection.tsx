import { motion } from "framer-motion";
import { CalendarDays, ArrowRight, Bell } from "lucide-react";
import { sectionReveal } from "@/lib/motion";

const EventsSection = () => {
  return (
    <section id="events" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/6 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div {...sectionReveal} className="mx-auto mb-20 max-w-3xl text-center">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
            Events & Meetups
          </div>
          <h2 className="section-title mb-6">
            Where the <span className="text-gradient">Magic Happens</span>
          </h2>
          <p className="section-subtitle">
            From workshops to hackathons to networking nights —
            our events are where real connections and skills are built.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          {...sectionReveal}
          className="gradient-border relative mx-auto max-w-2xl overflow-hidden p-10 text-center md:p-14"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[80px]" />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5"
          >
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#080810]">
              <CalendarDays size={26} className="text-purple-400" />
            </div>
          </motion.div>

          <h3 className="font-heading text-2xl font-bold text-white mb-4">
            Events Launching Soon
          </h3>
          <p className="section-subtitle mx-auto max-w-md mb-8">
            We're putting together something epic. Be the first to know
            when registrations open — join the community now.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="#join" className="primary-button">
              <span className="flex items-center gap-2">
                <Bell size={16} />
                Get Notified
                <ArrowRight size={15} />
              </span>
            </a>
            <a href="#activities" className="secondary-button">
              Explore Activities
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;