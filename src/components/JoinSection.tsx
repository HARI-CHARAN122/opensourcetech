import { motion } from "framer-motion";
import { MessageCircle, Send, Mail, Phone } from "lucide-react";
import { cardReveal, sectionReveal } from "@/lib/motion";

const JoinSection = () => {
  const channels = [
    {
      href: "#",
      label: "Connect on Discord",
      icon: MessageCircle,
      primary: true,
    },
    {
      href: "https://wa.me/919000072217",
      label: "Connect on WhatsApp",
      icon: Phone,
      external: true,
    },
    {
      href: "#",
      label: "Connect on Telegram",
      icon: Send,
    },
    {
      href: "#",
      label: "Get Updates by Email",
      icon: Mail,
    },
  ];

  return (
    <section id="join" className="section-shell bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          {...sectionReveal}
          className="card-surface mx-auto max-w-4xl rounded-2xl p-8 text-center md:p-12"
        >
          <h2 className="section-title mb-6">
            Join the <span className="text-gradient">Community Network</span>
          </h2>
          <p className="section-subtitle mx-auto mb-10 max-w-2xl">
            Stay connected for event updates, workshop registrations, and
            collaboration opportunities with students and developers.
          </p>

          <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
            {channels.map((channel, index) => (
              <motion.a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                {...cardReveal(index * 0.06)}
                className={channel.primary ? "primary-button" : "secondary-button"}
              >
                <channel.icon size={18} />
                {channel.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
