import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { sectionReveal } from "@/lib/motion";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          {...sectionReveal}
          className="grid gap-10 md:grid-cols-4"
        >
          <div>
            <div className="mb-4 flex items-center gap-2 font-heading text-lg font-bold">
              <div className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-2 text-white shadow-lg shadow-slate-900/30">
                <Code2 size={20} />
              </div>
              <span className="text-gradient">
                Open Source Tech
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              A professional student and developer community platform for events,
              workshops, networking, and collaborative growth.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-100">Platform</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <a href="#about" className="micro-link hover:text-white">
                About
              </a>
              <a href="#activities" className="micro-link hover:text-white">
                Activities
              </a>
              <a href="#events" className="micro-link hover:text-white">
                Events
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-100">Community</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <a href="#community" className="micro-link hover:text-white">
                Who Should Join
              </a>
              <a href="#resources" className="micro-link hover:text-white">
                Resources
              </a>
              <a href="#join" className="micro-link hover:text-white">
                Join Community
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-slate-100">Contact</h3>
            <div className="mb-4 text-sm text-slate-300">
              <p>Community channels opening soon</p>
              <p>Stay tuned for official contact details</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="secondary-button !px-3 !py-2"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="secondary-button !px-3 !py-2"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="secondary-button !px-3 !py-2"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Open Source Tech Community. Built for
          learning, collaboration, and professional growth.
        </div>
      </div>
    </footer>
  );
};

export default Footer;