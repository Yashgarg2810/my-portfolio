const skills = {
  'Programming Languages': ['Java', 'C'],
  'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'React.js'],
  'Database': ['MySQL'],
  'Developer Tools': ['Git', 'Maven'],
  'Operating System': ['Windows']
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="font-mono text-primary mb-2">&lt;skills&gt;</h2>
            <h3 className="text-4xl font-bold">Technical Arsenal</h3>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={category}
                className="card-glow bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-primary text-base font-semibold mb-4 tracking-wide">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-foreground border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Closing tag */}
          <div className="text-center mt-8">
            <span className="font-mono text-primary"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;