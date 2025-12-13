import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style greeting */}
          <div className="font-mono text-primary mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-muted-foreground">$</span> echo "Hello, World!"
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            I'm <span className="gradient-text">Yash Garg</span>
          </h1>

          {/* Title */}
          <div className="font-mono text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <span className="text-primary">&gt;</span> Software Developer & Web Developer
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            B.Tech CSE student passionate about building scalable systems and innovative solutions. 
            Currently seeking internship opportunities to apply my skills in real-world projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '1s' }}>
            <Button asChild size="lg" className="font-mono animate-pulse-glow">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-mono border-primary/50 hover:bg-primary/10">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fade-up" style={{ animationDelay: '1.2s' }}>
            <a
              href="https://github.com/Yashgarg2810"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yash-garg-97a16329b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-glow"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:yashgarg2810@gmail.com"
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-glow"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
