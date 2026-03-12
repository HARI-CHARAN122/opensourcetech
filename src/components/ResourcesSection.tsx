import { motion } from "framer-motion";
import { BookOpen, Video, FileText, MessageSquare } from "lucide-react";

const resources = [
  { icon: BookOpen, title: "Technology Guides", desc: "Curated guides on trending technologies and best practices." },
  { icon: Video, title: "Workshop Recordings", desc: "Replay past workshops and sessions at your own pace." },
  { icon: FileText, title: "Learning Materials", desc: "Articles, tutorials, and reference materials shared by members." },
  { icon: MessageSquare, title: "Community Discussions", desc: "Engage in topic-based discussions and Q&A threads." },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Learning <span className="text-gradient">Resources</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-surface rounded-xl p-6 group hover:scale-[1.02] transition-transform"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
