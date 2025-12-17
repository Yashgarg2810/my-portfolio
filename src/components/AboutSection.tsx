import { User, Target, Lightbulb } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-mono text-primary mb-2">
          </h2>
            <h3 className="text-4xl font-bold">
          </h3>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-glow bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
              <User className="text-primary mb-4" size={32} />
              <h4 className="font-semibold text-lg mb-2">Developer</h4>
              <p className="text-muted-foreground text-sm">Strong proficiency in Java with experience in web development using modern technologies.</p>
            </div>

            <div className="card-glow bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
              <Target className="text-primary mb-4" size={32} />
              <h4 className="font-semibold text-lg mb-2">Problem Solver</h4>
              <p className="text-muted-foreground text-sm">
                Adept at applying scientific and analytical approaches to solve complex problems and drive innovation.
              </p>
            </div>

            <div className="card-glow bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
              <Lightbulb className="text-primary mb-4" size={32} />
              <h4 className="font-semibold text-lg mb-2">Quick Learner</h4>
              <p className="text-muted-foreground text-sm">
                Passionate about learning new technologies and adapting quickly to challenging environments.
              </p>
            </div>
          </div>

          {/* Bio Text */}
          <div className="bg-card/50 border border-border rounded-lg p-8">
            <p className="text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-medium">Software Developer</span> currently pursuing 
              B.Tech in Computer Science and Engineering at Coer University. With strong proficiency in Java 
              and experience in developing, maintaining, and optimizing software solutions, I'm passionate about 
              building <span className="text-primary font-medium">scalable systems</span> and contributing 
              proactively to technical and business goals.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              My journey includes hands-on experience in web development, from converting Figma designs to 
              responsive websites. I thrive in collaborative environments and continuously seek opportunities 
              to grow and make an impact.
            </p>
          </div>

          {/* Closing tag */}
          <div className="text-center mt-8">
            <span className="font-mono text-primary"></span>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;