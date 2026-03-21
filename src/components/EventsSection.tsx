import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Upcoming <span className="text-gradient">Events</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-surface rounded-xl p-12 max-w-2xl mx-auto text-center"
        >
          <Calendar size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
            No Events Scheduled Yet
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We're planning exciting workshops, tech talks, and meetups. Stay tuned — upcoming events will be listed here soon!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
