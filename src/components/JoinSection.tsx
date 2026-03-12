import { motion } from "framer-motion";
import { MessageCircle, Send, Mail } from "lucide-react";

const JoinSection = () => {
  return (
    <section id="join" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Become Part of the <span className="text-gradient">Community</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Join Open Source Tech and connect with people who are passionate about technology, innovation, and learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} />
              Join Discord
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <Send size={18} />
              Join Telegram
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <Mail size={18} />
              Subscribe by Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
