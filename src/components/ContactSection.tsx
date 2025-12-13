import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
const contactInfo = [{
  icon: Mail,
  label: 'Email',
  value: 'yashgarg2810@gmail.com',
  href: 'mailto:yashgarg2810@gmail.com'
}, {
  icon: Phone,
  label: 'Phone',
  value: '+91 9458892401',
  href: 'tel:+919458892401'
}, {
  icon: Linkedin,
  label: 'LinkedIn',
  value: 'linkedin.com/in/yash-garg-97a16329b',
  href: 'https://linkedin.com/in/yash-garg-97a16329b'
}, {
  icon: Github,
  label: 'GitHub',
  value: 'github.com/Yashgarg2810',
  href: 'https://github.com/Yashgarg2810'
}];
const ContactSection = () => {
  return <section id="contact" className="py-16 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-mono text-primary mb-2">
          </h2>
            <h3 className="text-4xl font-bold">Get In Touch</h3>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              I'm currently looking for internship opportunities. Whether you have a question or just want to say hi, 
              feel free to reach out!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map(contact => <a key={contact.label} href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="card-glow bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">{contact.label}</p>
                  <p className="text-foreground group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>)}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button asChild size="lg" className="font-mono animate-pulse-glow">
              <a href="mailto:yashgarg2810@gmail.com">
                <Send className="mr-2" size={18} />
                Send Message
              </a>
            </Button>
          </div>

          {/* Closing tag */}
          <div className="text-center mt-8">
            <span className="font-mono text-primary"></span>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;