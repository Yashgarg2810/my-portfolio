import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-mono text-primary mb-2">&lt;experience&gt;</h2>
            <h3 className="text-4xl font-bold">Work Experience</h3>
          </div>

          {/* Experience Card */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

            {/* Experience Item */}
            <div className="relative pl-8 md:pl-0 md:pr-1/2 md:text-right mb-8">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background animate-pulse-glow" />

              <div className="card-glow bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 md:mr-8">
                <div className="flex items-center gap-2 text-primary mb-2 md:justify-end">
                  <Briefcase size={18} />
                  <span className="font-mono text-sm">Web Developer Intern</span>
                </div>

                <h4 className="text-xl font-bold mb-2">Primewayz Infotech Pvt. Ltd.</h4>

                <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4 md:justify-end">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    Greater Noida, UP
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    May 2025 - July 2025
                  </span>
                </div>

                <ul className="space-y-3 text-muted-foreground text-sm md:text-right">
                  <li className="flex items-start gap-2 md:flex-row-reverse">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Converted Figma designs into responsive multi-page websites using HTML, CSS, and Bootstrap</span>
                  </li>
                  <li className="flex items-start gap-2 md:flex-row-reverse">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Performed Reverse Engineering of website components using HTML, CSS, JS, and React</span>
                  </li>
                  <li className="flex items-start gap-2 md:flex-row-reverse">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Worked on WordPress live sites with custom CSS, icon updates, and blog posting</span>
                  </li>
                  <li className="flex items-start gap-2 md:flex-row-reverse">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Tested mobile APK for QR/Barcode scanning and AI-based ingredient analysis</span>
                  </li>
                  <li className="flex items-start gap-2 md:flex-row-reverse">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Collaborated on site-building platform development in WordPress</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Closing tag */}
          <div className="text-center mt-8">
            <span className="font-mono text-primary">&lt;/experience&gt;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
