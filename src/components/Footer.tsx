import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgba(3, 3, 6, 0.98)",
        borderTop: "3px solid transparent",
        borderImage: "linear-gradient(to right, #a855f7, #ec4899, #06b6d4, #10b981) 1",
      }}
      className="relative overflow-hidden pt-20 pb-10"
    >
      {/* Decorative gradient accents */}
      <div 
        className="absolute left-1/2 top-0 pointer-events-none -translate-x-1/2 w-[600px] h-[300px] blur-[120px] rounded-full z-0"
        style={{ background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.15) 100%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16"
        >
          {/* Brand & Description - 4 cols */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.jpg" 
                alt="Open Source Tech Logo" 
                className="w-12 h-12 rounded-lg object-contain" 
              />
              <span
                style={{
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent"
                }}
                className="text-xl font-bold tracking-tight"
              >
                Open Source Tech
              </span>
            </div>
            <p
              style={{ color: "rgba(255, 255, 255, 0.5)" }}
              className="text-sm mb-8 leading-relaxed max-w-sm"
            >
              A community dedicated to advancing open source technology, 
              empowering developers, and building the future of software collaboratively.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/open-source-tech-community/" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "https://www.instagram.com/opensourcetech.in?igsh=MXY2OXBsOXc4Z2g5" },
                { Icon: Mail, href: "mailto:Contact@opensourcetech.in" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group"
                  style={{ 
                    background: "rgba(255,255,255,0.03)", 
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <Icon 
                    size={18} 
                    style={{ color: "rgba(255,255,255,0.6)" }} 
                    className="group-hover:text-pink-400 transition-colors" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4">
              {['About', 'Activities', 'Events'].map((link) => (
                <li key={link}>
                  <a 
                    href="#"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-6">Community</h4>
            <ul className="space-y-4">
              {['Who Should Join', 'Resources', 'Join Us'].map((link) => (
                <li key={link}>
                  <a 
                    href={link === 'Join Us' ? 'https://chat.whatsapp.com/BqyJTWr9iXh6Z7IisCwiUT' : '#'}
                    target={link === 'Join Us' ? '_blank' : undefined}
                    rel={link === 'Join Us' ? 'noopener noreferrer' : undefined}
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <div 
              className="p-5 rounded-xl relative overflow-hidden group"
              style={{
                border: "1px solid rgba(236,72,153,0.15)",
                background: "linear-gradient(180deg, rgba(236,72,153,0.05) 0%, rgba(168,85,247,0.05) 100%)",
              }}
            >
              <div 
                className="absolute inset-x-0 top-0 h-px w-full" 
                style={{ background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.5), transparent)" }} 
              />
              <h5 className="text-white font-medium mb-2 opacity-90">Stay in the loop</h5>
              <p 
                style={{ color: "rgba(255, 255, 255, 0.5)" }}
                className="text-xs mb-4 leading-relaxed"
              >
                Join our community on WhatsApp to stay updated.
              </p>
              <a 
                href="https://chat.whatsapp.com/BqyJTWr9iXh6Z7IisCwiUT"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fbcfe8", borderBottom: "1px solid rgba(251,207,232,0.3)" }}
                className="text-sm font-medium inline-flex items-center gap-1 pb-0.5 hover:gap-2 transition-all"
              >
                Join now <span>→</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}
        >
          <p 
            style={{ color: "rgba(255, 255, 255, 0.4)" }} 
            className="text-xs"
          >
            © {new Date().getFullYear()} Open Source Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span style={{ color: "rgba(255,255,255,0.4)" }} className="text-xs font-medium">
              Code Together. Grow Together.
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;