import { motion } from "framer-motion";
import { Target, Users, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">Open Source Tech</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Open Source Tech is a collaborative technology community created to connect people who are passionate about learning and sharing knowledge about modern technologies. The community focuses on building meaningful connections, exploring emerging technologies, and helping members grow through shared learning experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To create a supportive community where people can connect, learn about new technologies, and grow together.",
            },
            {
              icon: Users,
              title: "Our People",
              text: "Students, developers, engineers, and enthusiasts united by curiosity and a love for technology.",
            },
            {
              icon: Lightbulb,
              title: "Our Vision",
              text: "A world where knowledge is shared openly and everyone has the opportunity to grow in tech.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-gradient rounded-xl p-6 glow-border text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
