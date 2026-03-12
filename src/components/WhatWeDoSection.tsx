import { motion } from "framer-motion";
import { Mic, Wrench, Network, CalendarDays, Share2 } from "lucide-react";

const features = [
  { icon: Mic, title: "Tech Talks", desc: "Regular discussions about new technologies and industry trends." },
  { icon: Wrench, title: "Workshops", desc: "Hands-on workshops to help members learn practical skills." },
  { icon: Network, title: "Networking", desc: "Connecting students, developers, and professionals." },
  { icon: CalendarDays, title: "Community Events", desc: "Meetups and online sessions for learning and collaboration." },
  { icon: Share2, title: "Knowledge Sharing", desc: "Members share insights, tools, and experiences." },
];

const WhatWeDoSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
        >
          What <span className="text-gradient">We Do</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface rounded-xl p-6 group hover:scale-[1.02] transition-transform"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
