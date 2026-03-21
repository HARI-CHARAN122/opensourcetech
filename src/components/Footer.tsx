import { Code2, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Community", href: "#community" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#join" },
];

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#home" className="flex items-center gap-2 font-heading font-bold text-lg text-foreground">
            <Code2 className="text-primary" size={24} />
            Open Source Tech
          </a>

          <div className="flex flex-wrap gap-6 justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Open Source Tech Community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
