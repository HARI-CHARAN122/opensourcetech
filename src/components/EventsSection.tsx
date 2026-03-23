import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { sectionReveal } from "@/lib/motion";

const EventsSection = () => {
  return (
    <section id="events" className="section-shell">
      <div className="container mx-auto px-4">
        <motion.div
          {...sectionReveal}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="section-title mb-5">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="section-subtitle">
            We are currently setting up our first round of events and workshops.
            Join the community to get notified as soon as registrations open.
          </p>
        </motion.div>

        <motion.div
          {...sectionReveal}
          className="card-surface mx-auto max-w-3xl rounded-xl p-8 text-center md:p-10"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20">
            <Calendar size={20} className="text-slate-300" />
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground">
            No events scheduled yet
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            We are in the initial setup phase. Our first meetup and workshop
            dates will be announced soon.
          </p>
          <a href="#join" className="secondary-button mt-6">
            Notify Me When Events Open
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
