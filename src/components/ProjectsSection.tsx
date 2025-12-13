import { ExternalLink, Github, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
const projects: Array<{
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  icon: typeof Shield;
  color: string;
}> = [];
const ProjectsSection = () => {
  return <section id="projects" className="py-16 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-mono text-primary mb-2">
          </h2>
            <h3 className="text-4xl font-bold">Featured Work</h3>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => <div key={project.title} className="card-glow bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${project.color}`}>
                      <project.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground font-mono text-sm">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                      <Github size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                      <ExternalLink size={20} />
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => <span key={tech} className="px-3 py-1 bg-secondary rounded font-mono text-xs text-primary border border-primary/20">
                      {tech}
                    </span>)}
                </div>
              </div>)}
          </div>

          {/* More projects note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground font-mono text-sm mb-4">
              // More projects coming soon...
            </p>
            <Button asChild variant="outline" className="font-mono border-primary/50 hover:bg-primary/10">
              <a href="https://github.com/Yashgarg2810" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={18} />
                View GitHub
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
export default ProjectsSection;