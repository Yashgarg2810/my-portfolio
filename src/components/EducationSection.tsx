import { GraduationCap, Calendar, MapPin } from 'lucide-react';
const education = [{
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science and Engineering',
  institution: 'Coer University',
  location: 'India',
  period: 'August 2023 – July 2027',
  current: true
}, {
  degree: 'Intermediate Education',
  field: 'Higher Secondary',
  institution: 'Mansarovar Public School',
  location: 'Shamli, India',
  period: 'April 2022 - March 2023',
  current: false
}, {
  degree: 'High School',
  field: 'Secondary Education',
  institution: 'Mansarovar Public School',
  location: 'Shamli, India',
  period: 'April 2020 - March 2021',
  current: false
}];
const EducationSection = () => {
  return <section id="education" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-mono text-primary mb-2">
          </h2>
            <h3 className="text-4xl font-bold">Academic Journey</h3>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => <div key={index} className={`card-glow bg-card p-6 rounded-lg border transition-all duration-300 ${edu.current ? 'border-primary/50 glow-border' : 'border-border hover:border-primary/50'}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <GraduationCap className="text-primary" size={28} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        {edu.current && <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-mono rounded">
                            Current
                          </span>}
                      </div>
                      <p className="text-primary font-medium">{edu.field}</p>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                    <span className="flex items-center gap-1 md:justify-end">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 md:justify-end">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Closing tag */}
          <div className="text-center mt-8">
            <span className="font-mono text-primary"></span>
          </div>
        </div>
      </div>
    </section>;
};
export default EducationSection;