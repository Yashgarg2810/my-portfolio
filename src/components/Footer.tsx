import { Github, Linkedin, Mail, Heart } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="font-mono text-lg">
          <span className="text-primary">&lt;</span>
            Yash Garg
            <span className="text-primary"></span>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-primary" /> © {currentYear}
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/Yashgarg2810" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/yash-garg-97a16329b" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:yashgarg2810@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;