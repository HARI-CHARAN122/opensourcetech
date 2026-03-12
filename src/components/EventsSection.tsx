import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";

const events = [
  { title: "AI and Machine Learning Workshop", desc: "Explore the fundamentals of AI/ML with hands-on exercises.", date: "April 15, 2026" },
  { title: "Introduction to Web Development", desc: "Learn HTML, CSS, and JavaScript from scratch.", date: "April 22, 2026" },
  { title: "Cloud Computing Basics", desc: "Get started with cloud platforms and deployment.", date: "May 5, 2026" },
  { title: "Tech Networking Meetup", desc: "Connect with fellow tech enthusiasts and professionals.", date: "May 12, 2026" },
  { title: "Open Tech Discussion Session", desc: "Open forum to discuss trends and share ideas.", date: "May 20, 2026" },
];

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-gradient rounded-xl p-6 glow-border flex flex-col"
            >
              <div className="flex items-center gap-2 text-xs text-primary mb-3 font-medium">
                <Calendar size={14} />
                {e.date}
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{e.desc}</p>
              <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-auto self-start">
                Register <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
