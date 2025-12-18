import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
const ExperienceSection = () => {
  const responsibilities = ["Converted Figma designs into responsive multi-page websites using HTML, CSS, and Bootstrap", "Performed Reverse Engineering of website components using HTML, CSS, JS, and React", "Worked on WordPress live sites with custom CSS, icon updates, and blog posting", "Tested mobile APK for QR/Barcode scanning and AI-based ingredient analysis", "Collaborated on site-building platform development in WordPress"];
  return <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-mono text-primary mb-2">
          </h2>
            <h3 className="text-4xl font-bold">Work Experience</h3>
          </div>

          {/* Experience Card */}
          <div className="card-glow bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Briefcase className="text-primary" size={20} />
                  </div>
                  <span className="text-primary font-semibold text-lg">Web Developer Intern</span>
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-3">
                  Primewayz Infotech Pvt. Ltd.
                </h4>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2 text-sm">
                    <MapPin size={16} className="text-primary/70" />
                    Greater Noida, UP
                  </span>
                  <span className="flex items-center gap-2 text-sm">
                    <Calendar size={16} className="text-primary/70" />
                    May 2025 - July 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-6" />

            {/* Responsibilities */}
            <div>
              <h5 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Key Responsibilities
              </h5>
              <ul className="space-y-4">
                {responsibilities.map((item, index) => <li key={index} className="flex items-start gap-3 group">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <span className="text-primary text-xs font-mono">{index + 1}</span>
                    </span>
                    <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                      {item}
                    </span>
                  </li>)}
              </ul>
            </div>
          </div>

          {/* Closing tag */}
          <div className="text-center mt-8">
            <span className="font-mono text-primary"></span>
          </div>
        </div>
      </div>
    </section>;
};
export default ExperienceSection;