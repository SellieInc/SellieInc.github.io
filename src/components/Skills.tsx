import { Code2, Users, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    "Angular (8+)", "React", "React Native", "TypeScript", 
    "JavaScript", "HTML / CSS", "SQL", "Node.js", "Git"
  ];

  const softSkills = [
    "Problem-Solving", "Effective Communication", "Team Collaboration",
    "Adaptability", "Time Management"
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center glow-effect">
                  <Code2 className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isVisible ? 'scale-in 0.5s ease-out forwards' : 'none',
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-secondary to-accent flex items-center justify-center glow-effect">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-accent/10 hover:text-accent transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isVisible ? 'scale-in 0.5s ease-out forwards' : 'none',
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
