import { motion } from "framer-motion";
import { MessageCircle, Linkedin, Mail, Phone, ArrowRight, Sparkles, Instagram } from "lucide-react";
import { cardReveal, sectionReveal } from "@/lib/motion";

const channels = [
  {
    href: "#",
    label: "Discord",
    sublabel: "Join our server",
    icon: MessageCircle,
    gradient: "from-indigo-500 to-purple-500",
    color: "#6366f1",
  },
  {
    href: "https://chat.whatsapp.com/BqyJTWr9iXh6Z7IisCwiUT",
    label: "WhatsApp",
    sublabel: "Join Community",
    icon: Phone,
    gradient: "from-emerald-500 to-teal-500",
    color: "#10b981",
    external: true,
  },
  {
    href: "https://www.instagram.com/opensourcetech.in?igsh=MXY2OXBsOXc4Z2g5",
    label: "Instagram",
    sublabel: "Follow updates",
    icon: Instagram,
    gradient: "from-fuchsia-500 to-pink-500",
    color: "#d946ef",
    external: true,
  },
  {
    href: "https://www.linkedin.com/company/open-source-tech-community/",
    label: "LinkedIn",
    sublabel: "Connect professionally",
    icon: Linkedin,
    gradient: "from-blue-500 to-cyan-500",
    color: "#3b82f6",
    external: true,
  },
  {
    href: "mailto:Contact@opensourcetech.in",
    label: "Email",
    sublabel: "Stay informed",
    icon: Mail,
    gradient: "from-pink-500 to-rose-500",
    color: "#ec4899",
  },
];

const JoinSection = () => {
  return (
    <section id="join" className="section-shell relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 bottom-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/8 blur-[120px]" />
        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] rounded-full bg-pink-600/6 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          {...sectionReveal}
          className="gradient-border relative mx-auto max-w-4xl overflow-hidden p-10 text-center md:p-16"
        >
          {/* Corner glows */}
          <div className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-purple-500/10 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-pink-500/10 blur-[60px]" />

          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
            style={{
              border: "1px solid rgba(168,85,247,0.3)",
              background: "rgba(168,85,247,0.1)",
              color: "#d8b4fe",
            }}
          >
            <Sparkles size={12} />
            Join the Movement
          </motion.div>

          <h2 className="section-title mb-5">
            Ready to <span className="text-gradient">Connect?</span>
          </h2>
          <p className="section-subtitle mx-auto mb-14 max-w-xl">
            Pick your platform and jump in. Stay updated on events,
            workshops, and opportunities as they drop.
          </p>

          {/* Channel cards */}
          <div className="flex flex-wrap justify-center gap-4">
            {channels.map((channel, index) => (
              <motion.a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                {...cardReveal(index * 0.07)}
                whileHover={{ scale: 1.04, y: -4 }}
                className="gradient-border group relative flex flex-col items-center gap-3 overflow-hidden p-6 text-center w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(20%-0.8rem)] max-w-xs"
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${channel.color}20, transparent 70%)` }}
                />

                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${channel.gradient} p-0.5`}>
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#080810]">
                    <channel.icon size={20} style={{ color: channel.color }} />
                  </div>
                </div>

                <div>
                  <p className="font-heading font-bold text-white">{channel.label}</p>
                  <p className="mt-0.5 text-xs section-subtitle">{channel.sublabel}</p>
                </div>

                <ArrowRight
                  size={14}
                  className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                  style={{ color: channel.color }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;