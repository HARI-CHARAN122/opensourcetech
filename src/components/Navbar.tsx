import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Events", href: "#events" },
  { label: "Community", href: "#community" },
  { label: "Resources", href: "#resources" },
  { label: "Connect", href: "#join" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    mass: 0.25,
  });

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.4, 0.6],
        rootMargin: "-18% 0px -55% 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <motion.div
        style={{ scaleX: progress }}
        className="origin-left h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-slate-500"
      />
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <a
          href="#home"
          className="flex items-center gap-2.5 font-heading font-bold text-lg text-white"
        >
          <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-slate-900/30">
            <Code2 size={20} />
          </div>
          <span className="text-gradient">
            Open Source Tech
          </span>
        </a>

        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group micro-link relative text-sm font-medium ${
                activeSection === link.href
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
                  activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden text-slate-100"
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="xl:hidden border-b border-white/10 bg-slate-950/90 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`micro-link rounded-lg py-2 px-3 text-sm font-medium ${
                    activeSection === link.href
                      ? "bg-white/10 text-white"
                      : "text-slate-200 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;