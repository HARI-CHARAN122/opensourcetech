import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(220 10% 90%) 1px, transparent 1px), linear-gradient(90deg, hsl(220 10% 90%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      <div className="container relative z-10 mx-auto px-4 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase border border-border text-muted-foreground bg-secondary/50">
            Welcome to the Community
          </span>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
            Connect, Learn, and{" "}
            <span className="text-gradient">Grow in Technology</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Open Source Tech is a community where students and developers connect, discover new technologies, and grow together through workshops, discussions, and events.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Join the Community
              <ArrowRight size={16} />
            </a>
            <a
              href="#events"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm border border-border text-foreground hover:bg-secondary transition-colors"
            >
              <Calendar size={16} />
              Explore Events
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
