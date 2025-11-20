import { GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coursework = [
    "Programming (Java, C#, Web Dev)",
    "Cloud Fundamentals",
    "Cybersecurity",
    "DevOps",
    "Database Infrastructure",
    "Advanced Design Patterns"
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Education & <span className="gradient-text">Qualifications</span>
        </h2>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg hover:border-accent/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center glow-effect flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">IT Systems Development (NQF 6)</h3>
                <p className="text-lg text-muted-foreground mb-1">CTU Training Solutions</p>
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                  Completed with 80% average
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Key Coursework:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {coursework.map((course, index) => (
                  <div
                    key={course}
                    className="flex items-center gap-3 px-4 py-3 bg-secondary rounded-lg hover:bg-accent/10 hover:translate-x-1 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isVisible ? 'fade-in 0.5s ease-out forwards' : 'none',
                      opacity: isVisible ? 1 : 0,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm font-medium">{course}</span>
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

export default Education;
