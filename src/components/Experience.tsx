import { Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Experience = () => {
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

  const experiences = [
    {
      title: "Intermediate Software Engineer",
      company: "DigiOutsource",
      period: "2025 – Present",
      responsibilities: [
        "I develop modern UIs using Angular, React, and React Native",
        "I optimize performance and improve application speed",
        "I debug complex issues and troubleshoot production problems",
        "I collaborate closely with UX/UI designers to create intuitive interfaces",
        "I write clean, maintainable code that my team can easily work with",
        "I actively participate in agile ceremonies and sprint planning",
        "I document my work and share knowledge with the team"
      ]
    },
    {
      title: "Junior Software Engineer",
      company: "DigiOutsource",
      period: "2024 – 2025",
      responsibilities: [
        "I designed technical solutions for complex business requirements",
        "I developed new features from concept to deployment",
        "I maintained and improved existing systems",
        "I participated in daily scrums and sprint retrospectives",
        "I conducted code reviews and mentored junior developers"
      ]
    },
    {
      title: "Junior Full Stack Developer",
      company: "Patho Solutions",
      period: "2021 – 2024",
      responsibilities: [
        "I tracked down and fixed bugs across the full stack",
        "I worked on both front-end interfaces and back-end APIs",
        "I handled dev-ops tasks including Redis, Typesense, and NPM configurations",
        "I contributed to new project architecture and technical planning",
        "I created comprehensive documentation for future development"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Professional <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent-secondary to-accent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-20 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-5 top-0 w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent-secondary glow-effect flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-accent-foreground" />
                </div>

                {/* Content Card */}
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-accent/50 transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                      <span className="font-semibold text-accent">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-accent mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
